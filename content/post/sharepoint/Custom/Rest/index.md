---
title: "Sharepoint Integration (Extended) 3: Using the REST Endpoint"
date: 2023-11-05
draft: false
tags:
    - Sharepoint
    - Azure Active Directory
---

The [last time around](/post/sharepoint/custom/pnpcore) we discussed the usage of PnP.Core as an easy to use helper to interact with Sharepoint from client code. But the library has far to many dependencies to be suited for plugins, but that's exactly what we will be looking into.

## Sharepoints REST API
The fact that Microsoft likes REST services has already saved me more than once with Azure integrations. And usually the APIs are quite self explaining once you made the first successful request.
Sharepoint is not much different, lets take a look at some [examples of Microsoft](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service?tabs=csom#sharepoint-rest-endpoint-examples).

Get items from list: 
```
GET https://{site_url}/_api/web/lists/getbytitle('listname')/items

Accept: "application/json;odata=verbose"
```

Add new item to list: 
```
POST https://{site_url}/_api/web/lists/getbytitle('listname')/items

Content-Type: "application/json;odata=verbose"
Accept: "application/json;odata=verbose"

{
  "__metadata": {
    "type": "SP.Data.listname.ListItem"
  },
  "Title": "MyItem"
}
```

That sounds easy, right? And up until now I always found how to do things in that API just by googling thinks like "Sharepoint REST API Upload File" or "Sharepoint REST API Set Metadata" (-> this one needs special headers!).

But if you we were to try any of these request, none of them would work. They'd all return a 401 because we are missing the _Authorization_ Header. 

## Authorization
For authorizing with the app registration from the [the first post](/post/sharepoint/custom/appregistration) it is important to note, that the API does not accept tokens created with a client secret. The token needs to be created with a certificate and that why we set up the app registration that way.

But getting a token with a certificate was not an easy task without the help of other NuGets, this topic has received [its own article](/post/other/certificate-authentication). So here is a quick run down of the possibilities with only little explanation.

## Using Microsoft.IdentityModel.Clients.ActiveDirectory
This NuGet is nice because it does need to be ILMerged or similar since its loaded to the Dynamics Sandboxes. But its also deprecated! That means it will probably stops working as soon as the Dynamics SDK being loaded to the sanboxes will no longer rely on this NuGet. So probably not the best option, but certainly the easiest for a quick PoC.

```
using Microsoft.IdentityModel.Clients.ActiveDirectory;

var cert = new X509Certificate2(certBytes); // certBytes is the content of the .pfx certificate file
var certificate = new ClientAssertionCertificate(clientId, cert);

AuthenticationContext context = new AuthenticationContext($"https://login.microsoftonline.com/{tenantId}");
AuthenticationResult authenticationResult = context.AcquireTokenAsync(resource, certificate).Result; // resource is the url of the sharepoint without site, e.g. https://crmXXX.sharepoint.com
var authorizationHeaderContent = $"Bearer {authenticationResult.AccessToken}";
```

## Using Microsoft.Identity.Client
This it the NuGet that you should use instead of `Microsoft.IdentityModel.Clients.ActiveDirectory`. The problem here is the usual NuGet problem: You can only upload one assembly. The options are the unsupported ILMerge or the plugin packages which are in preview at the time of writing. I've tried this exact NuGet in a [dedicated article to plugin packages](/post/my-first-shot/plugin-packages), so it will work, but as said, its preview.

```
using Microsoft.Identity.Client;

var cert = new X509Certificate2(certBytes); // certBytes is the content of the .pfx certificate file
var client = ConfidentialClientApplicationBuilder.Create(clientId)
    .WithCertificate(cert)
    .WithAuthority($"https://login.microsoftonline.com/{tenantId}").Build();

var authenticationResult = client.AcquireTokenForClient(new string[] { $"{resource}/.default" }).ExecuteAsync().Result; // resource is the url of the sharepoint without site, e.g. https://crmXXX.sharepoint.com
var authorizationHeaderContent = $"Bearer {authenticationResult.AccessToken}";
```

## Bodging something
So lastly the method that does not require any NuGets. Microsoft develops Microsoft.Identity.Client as Open Source which allows us to grab the important bits for our certificate authentication.

For the code below to work you will need to copy in some of the classes from Microsoft.Identity.Client.
Since my last article the classes apperently moved! If the links are dead again, try to search the file names in the repository.
- JWT Models: https://github.com/AzureAD/microsoft-authentication-library-for-dotnet/blob/main/src/client/Microsoft.Identity.Client/Internal/JsonWebToken.cs
- Signing a JWT Token: https://github.com/AzureAD/microsoft-authentication-library-for-dotnet/blob/main/src/client/Microsoft.Identity.Client/PlatformsCommon/Shared/CommonCryptographyManager.cs
- Base64Conversions: https://github.com/AzureAD/microsoft-authentication-library-for-dotnet/blob/main/src/client/Microsoft.Identity.Client/Utils/Base64UrlHelpers.cs

> **_NOTE:_** I modified and stripped the classes to then not need other things like System.Text.Json and for example the Base64UrlHelper we only need Encode.

```
var cert = new X509Certificate2(certBytes); // certBytes is the content of the .pfx certificate file

var jwt = new JsonWebToken(new CommonCryptographyManager(), clientId, $"https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token");
var signedToken = jwt.Sign(cert, Base64UrlHelpers.Encode(cert.GetCertHash()), false);

var form = new Dictionary<string, string>
{
    { "grant_type", "client_credentials" },
    { "client_id", clientId },
    { "client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" },
    { "client_assertion", signedToken },
    { "scope", $"{resource}/.default" }
};
var tokenString = Client.Post($"https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token", form);
var token = JsonSerializer.Deserialize<AzureActiveDirectoryToken>(tokenString).access_token;
var authorizationHeaderContent = $"Bearer {token}";
```

## Summary
No matter what method for gaining an access token you chose, now you will have a JWT. With that lets look at one last request, and now one that is actually working:
```
POST https://{site_url}/_api/web/folders

Content-Type: "application/json;odata=verbose"
Accept: "application/json;odata=verbose"
Authorization: "Bearer ey..."

{
  "__metadata": {
    "type": "SP.Folder"
  },
  "ServerRelativeUrl": "documents/myFolder"
}
```
You guessed it? POST on the _folders_ API of course creates a new folder and in the body we are passing that we want to create, a folder with the relative url "documents/myFolder". 
With that I will send you to the depths of the internet to find your exact use case, but keep your eyes peeled for some follow up with more operations.