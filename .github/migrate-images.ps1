# Migration script for images to Azure Blob Storage
# This will upload images from content folder to Azure and delete local copies

param(
    [switch]$WhatIf = $false
)

$ErrorActionPreference = "Stop"

# Configuration
$storageAccountName = "mariuswodtkeblog"
$resourceGroup = "blog"
$containerName = "images"
$contentPath = "content"
$cacheControl = "public, max-age=31536000, immutable"
$imageExtensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp", "*.svg")

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Azure Blob Storage Image Migration" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Storage Account: $storageAccountName" -ForegroundColor Yellow
Write-Host "Resource Group: $resourceGroup" -ForegroundColor Yellow
Write-Host "Container: $containerName" -ForegroundColor Yellow
Write-Host "Source Path: $contentPath" -ForegroundColor Yellow
Write-Host "Cache-Control: $cacheControl" -ForegroundColor Yellow
if ($WhatIf) {
    Write-Host "Mode: PREVIEW ONLY (no changes will be made)" -ForegroundColor Magenta
} else {
    Write-Host "Mode: LIVE (files will be uploaded and deleted)" -ForegroundColor Red
}
Write-Host ""

# Check if Azure CLI is available
if (-not (Get-Command az -ErrorAction SilentlyContinue)) {
    Write-Host "Azure CLI (az) is not installed or not in PATH. Please install it from https://aka.ms/installazurecliwindows" -ForegroundColor Red
    exit 1
}

# Check if already logged in
Write-Host "Checking Azure connection..." -ForegroundColor Cyan
$accountJson = az account show 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not logged in. Starting device code authentication..." -ForegroundColor Yellow
    Write-Host "Please follow the instructions to authenticate." -ForegroundColor Yellow
    Write-Host ""
    az login --use-device-code
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to login to Azure." -ForegroundColor Red
        exit 1
    }
    Write-Host "Successfully logged in to Azure" -ForegroundColor Green
} else {
    $account = $accountJson | ConvertFrom-Json
    Write-Host "Already logged in as: $($account.user.name)" -ForegroundColor Green
}

# Get storage account key
Write-Host "Getting storage account key..." -ForegroundColor Cyan
$accountKey = az storage account keys list --account-name $storageAccountName --resource-group $resourceGroup --query "[0].value" --output tsv 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to get storage account key: $accountKey" -ForegroundColor Red
    exit 1
}
Write-Host "Successfully retrieved storage account credentials" -ForegroundColor Green

# Find all image files
Write-Host ""
Write-Host "Scanning for image files..." -ForegroundColor Cyan
$allFiles = @()
foreach ($ext in $imageExtensions) {
    $files = Get-ChildItem -Path $contentPath -Filter $ext -Recurse -File
    $allFiles += $files
}

# Exclude page/links folder
$excludePath = Resolve-Path (Join-Path $contentPath "page\links")
$allFiles = $allFiles | Where-Object { -not $_.FullName.StartsWith($excludePath.Path) }

Write-Host "Found $($allFiles.Count) image files to migrate (excluding page/links)" -ForegroundColor Yellow
Write-Host ""

if ($allFiles.Count -eq 0) {
    Write-Host "No image files found. Exiting." -ForegroundColor Yellow
    exit 0
}

# Process each file
$successCount = 0
$failCount = 0
$uploadedFiles = @()

foreach ($file in $allFiles) {
    # Calculate relative path from content folder
    $relativePath = $file.FullName.Substring((Resolve-Path $contentPath).Path.Length + 1)
    # Convert backslashes to forward slashes for blob path
    $blobPath = $relativePath -replace '\\', '/'
    
    Write-Host "Processing: $relativePath" -ForegroundColor White
    Write-Host "  Blob path: $blobPath" -ForegroundColor Gray
    
    if ($WhatIf) {
        Write-Host "  [WhatIf] Would upload to blob storage with cache headers" -ForegroundColor Magenta
        Write-Host "  [WhatIf] Would delete local file after successful upload" -ForegroundColor Magenta
        $successCount++
    } else {
        # Upload to blob storage with cache-control header
        az storage blob upload `
            --account-name $storageAccountName `
            --account-key $accountKey `
            --container-name $containerName `
            --name $blobPath `
            --file $file.FullName `
            --content-cache-control $cacheControl `
            --output none 2>$null

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  Uploaded successfully" -ForegroundColor Green

            # Delete local file after successful upload
            Remove-Item -Path $file.FullName -Force -ErrorAction Stop
            Write-Host "  Deleted local file" -ForegroundColor Green

            $successCount++
            $uploadedFiles += $blobPath
        } else {
            Write-Host "  Failed (exit code $LASTEXITCODE)" -ForegroundColor Red
            $failCount++
        }
    }
    Write-Host ""
}

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Migration Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Total files processed: $($allFiles.Count)" -ForegroundColor Yellow
Write-Host "Successful: $successCount" -ForegroundColor Green
if ($failCount -gt 0) {
    Write-Host "Failed: $failCount" -ForegroundColor Red
}

if ($WhatIf) {
    Write-Host ""
    Write-Host "This was a preview. Run without -WhatIf to perform actual migration." -ForegroundColor Magenta
} else {
    Write-Host ""
    Write-Host "Migration completed!" -ForegroundColor Green
    Write-Host "All images are now accessible at:" -ForegroundColor Yellow
    Write-Host "https://$storageAccountName.blob.core.windows.net/$containerName/" -ForegroundColor Cyan
}
