---
title: "Virtual Tables: Implementing custom RetrieveMultiple"
date: 2026-04-26
draft: false
image: cover.jpg
tags: 
    - Virtual Tables
    - External Tables 
    - Azure SQL
    - Azure
    - Data Integration
---

A while back we took a look at virtual tables with [the wizard for connecting to SQL Databases](/post/my-first-shot/externaltable/). Today we will again connect an SQL Database, but this time "on foot" with implementing the data layer on our own.

There is of course maintenance to be considered when implementing ourselves, but it also offers the possibility to do some custom transformations like if your source DB does not provide a guid column or you want to do some row level access (virtual tables are always organization owned). 

For this matter, [MS provides quite a good sample](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/virtual-entities/sample-ve-provider-crud-operations), however, for RetrieveMultiple they simply return everything without applying a single bit of filtering, sorting or selecting columns. This will be our focus for today, the article will mainly be code snippets of the different options from fetch. 

## SELECT
To help me with all of these functions, I've first created a dictionary for mapping between columns of the DB and Dataverse. If you want to be generic, need to manage many tables or expect frequent changes to the schema, this can be constructed from Metadata with the _External Name_. But I expect custom requirements here and have constructed a nice primary field from first and lastname that was not present in source. 

``` C#
private class FieldMapping
{
    public string ColumnName { get; set; }
    public Type ColumnType { get; set; }
    public bool IsComputed { get; set; } = false;
    public bool IsIdentity { get; set; } = false;
    public string ComputedColumnAlias { get; set; }
}

private static readonly Dictionary<string, FieldMapping> FieldMappings = new Dictionary<string, FieldMapping>
{
    { "mwo_personid", new FieldMapping { ColumnName = "Id", ColumnType = typeof(Guid), IsIdentity = true } },
    { "mwo_firstname", new FieldMapping { ColumnName = "Firstname", ColumnType = typeof(string) } },
    { "mwo_lastname", new FieldMapping { ColumnName = "Lastname", ColumnType = typeof(string) } },
    //...
    { "mwo_name", new FieldMapping { ColumnName = "(ISNULL(Firstname, '') + ' ' + ISNULL(Lastname, ''))", ColumnType = typeof(string), IsComputed = true, ComputedColumnAlias = "Name" } }
};
```

And now we simply iterate the columns in the given `QueryExpression`, map them from the given Dataverse column to the DB column and join them with a comma. The method is a little longer than this description as we need to consider all columns being retrieved, my computed column and the Dataverse behavior that the ID is returned even if it is not requested.

``` C#
public static EntityCollection RetrieveMultiple(QueryExpression query)
{
    // ...
    string selectClause = BuildSelectClause();
    var sqlQuery = new StringBuilder("SELECT " + selectClause + " FROM dbo.Persons");
    // ...
}

private static string BuildSelectClause(ColumnSet columnSet)
{
    var selectColumns = new List<string>();
    var columnsToInclude = new List<string>();

    if (columnSet.AllColumns)
    {
        columnsToInclude.AddRange(FieldMappings.Keys);
    }
    else
    {
        columnsToInclude.AddRange(columnSet.Columns.ToArray());
    }

    foreach (var columnToInclude in columnsToInclude)
    {
        if (FieldMappings.TryGetValue(columnToInclude, out var mapping))
        {
            if (mapping.IsComputed)
            {
                selectColumns.Add(mapping.ColumnName + " AS " + mapping.ComputedColumnAlias);
            }
            else
            {
                selectColumns.Add(mapping.ColumnName);
            }
        }
    }

    if (!selectColumns.Contains("Id"))
    {
        selectColumns.Add("Id");
    }

    return string.Join(", ", selectColumns);
}
```

And finally, how do we get a `QueryExpression` as input for the function? Easy, we can just construct it with a RetrieveMultipleRequest. This works no matter if the `InputParameters` contain a QueryExpression in the first place or a FetchXml string.

``` C#
var context = serviceProvider.Get<IPluginExecutionContext>();
var request = new RetrieveMultipleRequest { Parameters = context.InputParameters };
var query = (QueryExpression)request.Query;
```

## WHERE
For mapping the WHERE, we need to consider that filters may contain filters. So `BuildWhereClause` may call itself recursively and needs to capture with brackets that nested filters may use different operators (&&, ||).

``` C#
public static EntityCollection RetrieveMultiple(QueryExpression query)
{
    //...
    if (query.Criteria != null && (query.Criteria.Conditions.Count > 0 || query.Criteria.Filters.Count > 0))
    {
        sqlQuery.Append(" WHERE ");
        string whereClause = BuildWhereClause(query.Criteria, command);
        sqlQuery.Append(whereClause);
    }
    //...
}

private static string BuildWhereClause(FilterExpression filter, SqlCommand command)
{
    var clauses = new List<string>();

    foreach (var condition in filter.Conditions)
    {
        string clause = BuildConditionClause(condition, command);
        if (!string.IsNullOrEmpty(clause))
        {
            clauses.Add(clause);
        }
    }

    foreach (var childFilter in filter.Filters)
    {
        string childClause = BuildWhereClause(childFilter, command);
        if (!string.IsNullOrEmpty(childClause))
        {
            clauses.Add("(" + childClause + ")");
        }
    }

    if (clauses.Count == 0)
    {
        return string.Empty;
    }

    string logicalOperator = filter.FilterOperator == LogicalOperator.And ? " AND " : " OR ";
    return string.Join(logicalOperator, clauses);
}
```

For the next section I'll happily admit that I'm also lazy and use GitHub Copilot for this stuff. Some notes: The params get a randomized postfix to ensure uniqueness should one column be filtered with multiple values, e.g. mwo_firstname eq "Marius" or mwo_firstname eq "Ambesh". `In` operators have more than one value so we have to iterate them. And finally my switch is quite long but still missing some operators, for example the long list of Date operators, I suggest leveraging the AI again here to implement them as this is a typical time thief.

``` C#
private static string BuildConditionClause(ConditionExpression condition, SqlCommand command)
{
    string columnName = GetColumnName(condition.AttributeName);
    string paramName = "@" + condition.AttributeName + "_" + Guid.NewGuid().ToString("N").Substring(0, 8);

    switch (condition.Operator)
    {
        case ConditionOperator.Equal:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " = " + paramName;
        case ConditionOperator.NotEqual:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " <> " + paramName;
        case ConditionOperator.Like:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " LIKE " + paramName;
        case ConditionOperator.Null:
            return columnName + " IS NULL";
        case ConditionOperator.NotNull:
            return columnName + " IS NOT NULL";
        case ConditionOperator.GreaterThan:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " > " + paramName;
        case ConditionOperator.GreaterEqual:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " >= " + paramName;
        case ConditionOperator.LessThan:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " < " + paramName;
        case ConditionOperator.LessEqual:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " <= " + paramName;
        case ConditionOperator.In:
            if (condition.Values.Count == 0)
            {
                return "1 = 0";
            }
            var inParams = new List<string>();
            for (int i = 0; i < condition.Values.Count; i++)
            {
                string inParamName = paramName + "_" + i;
                command.Parameters.AddWithValue(inParamName, condition.Values[i] ?? DBNull.Value);
                inParams.Add(inParamName);
            }
            return columnName + " IN (" + string.Join(", ", inParams) + ")";
        case ConditionOperator.NotIn:
            if (condition.Values.Count == 0)
            {
                return "1 = 1";
            }
            var notInParams = new List<string>();
            for (int i = 0; i < condition.Values.Count; i++)
            {
                string notInParamName = paramName + "_" + i;
                command.Parameters.AddWithValue(notInParamName, condition.Values[i] ?? DBNull.Value);
                notInParams.Add(notInParamName);
            }
            return columnName + " NOT IN (" + string.Join(", ", notInParams) + ")";
        default:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " = " + paramName;
    }
}

private static string GetColumnName(string attributeName)
{
    if (FieldMappings.TryGetValue(attributeName.ToLower(), out FieldMapping mapping))
    {
        return mapping.ColumnName;
    }
    return attributeName;
}
```

## ORDER BY
Ordering is much simpler again, we can just concatenate the mapped column names with comma, the only thing to consider is wether the order is ascending or descending.

``` C#
public static EntityCollection RetrieveMultiple(QueryExpression query)
{
    //...
    if (query.Orders != null && query.Orders.Count > 0)
    {
        sqlQuery.Append(" ORDER BY ");
        var orderClauses = new List<string>();
        foreach (var order in query.Orders)
        {
            string columnName = GetColumnName(order.AttributeName);
            string direction = order.OrderType == OrderType.Descending ? "DESC" : "ASC";
            orderClauses.Add(columnName + " " + direction);
        }
        sqlQuery.Append(string.Join(", ", orderClauses));
    }
    //...
}
```

## TOP
For top or count as it is often called in Dataverse contexts, we have a small problem: It needs to be inserted after the SELECT and before the names of the columns. You may have a different opinion of where to put the code, the pragmatic approach here was to just use the `Insert` method to put it right behind the SELECT.

``` C#
public static EntityCollection RetrieveMultiple(QueryExpression query)
{
    //...
    if (query.TopCount != null && query.TopCount > 0)
    {
        sqlQuery.Insert(6, " TOP " + query.TopCount);
    }
    //...
}
```

## Reading the Output
And finally we need to read the output, again, we can use our initial dictionary to map the DB columns back to an entity. 

``` C#
public static EntityCollection RetrieveMultiple(QueryExpression query)
{
    var entityCollection = new EntityCollection();
    SqlConnection connection = GetConnection();
    using (SqlCommand command = connection.CreateCommand())
    {
        //...
        command.CommandText = sqlQuery.ToString();
        connection.Open();
        try
        {
            using (SqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    Entity entity = ReadEntityFromReader(reader, query.EntityName);
                    entityCollection.Entities.Add(entity);
                }
            }
        }
        finally
        {
            connection.Close();
        }
    }
    return entityCollection;
}

private static Entity ReadEntityFromReader(SqlDataReader reader, string entityName)
{
    var id = reader.GetGuid(reader.GetOrdinal("Id"));
    Entity entity = new Entity(entityName, id);

    foreach (var mapping in FieldMappings)
    {
        string columnName = mapping.Value.IsComputed ? mapping.Value.ComputedColumnAlias : mapping.Value.ColumnName;

        if (!reader.IsDBNull(reader.GetOrdinal(columnName)))
        {
            if (mapping.Value.ColumnType == typeof(Guid))
            {
                entity[mapping.Key] = reader.GetGuid(reader.GetOrdinal(columnName));
            }
            else if (mapping.Value.ColumnType == typeof(string))
            {
                var value = reader.GetString(reader.GetOrdinal(columnName));
                if (!string.IsNullOrEmpty(value))
                {
                    entity[mapping.Key] = value;
                }
            }
        }
    }

    return entity;
}
```

## Summary
Hopefully this saves you some painful experimentation. 
It is also clear now why MS skipped this, as you will see in the full reference code below, implementing all of this already is more than 200 lines of code, which would have blown up their sample. And as discussed, we are still missing condition operators for Date attributes.

I am totally aware that your requirements for the Data Provider will be different and especially your DB might be different but if you feed this article into something like GitHub Copilot or Claude Code with some existing code for your DB, it certainly will do a decent job of translating the code shown here to your technology/table names/column names/...


Consolidated reference code:
``` C#
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Data.SqlClient;
using System.Text;
using System.Collections.Generic;

// ... Code as found in the MS sample, adapted to my table dbo.Persons

private static readonly Dictionary<string, FieldMapping> FieldMappings = new Dictionary<string, FieldMapping>
{
    { "mwo_personid", new FieldMapping { ColumnName = "Id", ColumnType = typeof(Guid), IsComputed = false, IsIdentity = true } },
    { "mwo_firstname", new FieldMapping { ColumnName = "Firstname", ColumnType = typeof(string), IsComputed = false } },
    { "mwo_lastname", new FieldMapping { ColumnName = "Lastname", ColumnType = typeof(string), IsComputed = false } },
    { "mwo_email", new FieldMapping { ColumnName = "Email", ColumnType = typeof(string), IsComputed = false } },
    { "mwo_phone", new FieldMapping { ColumnName = "Phone", ColumnType = typeof(string), IsComputed = false } },
    { "mwo_name", new FieldMapping { ColumnName = "(ISNULL(Firstname, '') + ' ' + ISNULL(Lastname, ''))", ColumnType = typeof(string), IsComputed = true, ComputedColumnAlias = "Name" } }
};

private class FieldMapping
{
    public string ColumnName { get; set; }
    public Type ColumnType { get; set; }
    public bool IsComputed { get; set; }
    public bool IsIdentity { get; set; }
    public string ComputedColumnAlias { get; set; }
}

public static EntityCollection RetrieveMultiple(QueryExpression query)
{
    var entityCollection = new EntityCollection();
    SqlConnection connection = GetConnection();
    using (SqlCommand command = connection.CreateCommand())
    {
        string selectClause = BuildSelectClause(query.ColumnSet);
        var sqlQuery = new StringBuilder("SELECT " + selectClause + " FROM dbo.Persons");

        if (query.Criteria != null && (query.Criteria.Conditions.Count > 0 || query.Criteria.Filters.Count > 0))
        {
            sqlQuery.Append(" WHERE ");
            string whereClause = BuildWhereClause(query.Criteria, command);
            sqlQuery.Append(whereClause);
        }

        if (query.Orders != null && query.Orders.Count > 0)
        {
            sqlQuery.Append(" ORDER BY ");
            var orderClauses = new List<string>();
            foreach (var order in query.Orders)
            {
                string columnName = GetColumnName(order.AttributeName);
                string direction = order.OrderType == OrderType.Descending ? "DESC" : "ASC";
                orderClauses.Add(columnName + " " + direction);
            }
            sqlQuery.Append(string.Join(", ", orderClauses));
        }

        if (query.TopCount != null && query.TopCount > 0)
        {
            sqlQuery.Insert(6, " TOP " + query.TopCount);
        }

        command.CommandText = sqlQuery.ToString();
        connection.Open();
        try
        {
            using (SqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    Entity entity = ReadEntityFromReader(reader, query.EntityName);
                    entityCollection.Entities.Add(entity);
                }
            }
        }
        finally
        {
            connection.Close();
        }
    }
    return entityCollection;
}

private static string BuildWhereClause(FilterExpression filter, SqlCommand command)
{
    var clauses = new List<string>();

    foreach (var condition in filter.Conditions)
    {
        string clause = BuildConditionClause(condition, command);
        if (!string.IsNullOrEmpty(clause))
        {
            clauses.Add(clause);
        }
    }

    foreach (var childFilter in filter.Filters)
    {
        string childClause = BuildWhereClause(childFilter, command);
        if (!string.IsNullOrEmpty(childClause))
        {
            clauses.Add("(" + childClause + ")");
        }
    }

    if (clauses.Count == 0)
    {
        return string.Empty;
    }

    string logicalOperator = filter.FilterOperator == LogicalOperator.And ? " AND " : " OR ";
    return string.Join(logicalOperator, clauses);
}

private static string BuildConditionClause(ConditionExpression condition, SqlCommand command)
{
    string columnName = GetColumnName(condition.AttributeName);
    string paramName = "@" + condition.AttributeName + "_" + Guid.NewGuid().ToString("N").Substring(0, 8);

    switch (condition.Operator)
    {
        case ConditionOperator.Equal:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " = " + paramName;
        case ConditionOperator.NotEqual:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " <> " + paramName;
        case ConditionOperator.Like:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " LIKE " + paramName;
        case ConditionOperator.Null:
            return columnName + " IS NULL";
        case ConditionOperator.NotNull:
            return columnName + " IS NOT NULL";
        case ConditionOperator.GreaterThan:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " > " + paramName;
        case ConditionOperator.GreaterEqual:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " >= " + paramName;
        case ConditionOperator.LessThan:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " < " + paramName;
        case ConditionOperator.LessEqual:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " <= " + paramName;
        case ConditionOperator.In:
            if (condition.Values.Count == 0)
            {
                return "1 = 0";
            }
            var inParams = new List<string>();
            for (int i = 0; i < condition.Values.Count; i++)
            {
                string inParamName = paramName + "_" + i;
                command.Parameters.AddWithValue(inParamName, condition.Values[i] ?? DBNull.Value);
                inParams.Add(inParamName);
            }
            return columnName + " IN (" + string.Join(", ", inParams) + ")";
        case ConditionOperator.NotIn:
            if (condition.Values.Count == 0)
            {
                return "1 = 1";
            }
            var notInParams = new List<string>();
            for (int i = 0; i < condition.Values.Count; i++)
            {
                string notInParamName = paramName + "_" + i;
                command.Parameters.AddWithValue(notInParamName, condition.Values[i] ?? DBNull.Value);
                notInParams.Add(notInParamName);
            }
            return columnName + " NOT IN (" + string.Join(", ", notInParams) + ")";
        default:
            command.Parameters.AddWithValue(paramName, condition.Values[0] ?? DBNull.Value);
            return columnName + " = " + paramName;
    }
}

private static Entity ReadEntityFromReader(SqlDataReader reader, string entityName)
{
    var id = reader.GetGuid(reader.GetOrdinal("Id"));
    Entity entity = new Entity(entityName, id);

    foreach (var mapping in FieldMappings)
    {
        string columnName = mapping.Value.IsComputed ? mapping.Value.ComputedColumnAlias : mapping.Value.ColumnName;

        if (!reader.IsDBNull(reader.GetOrdinal(columnName)))
        {
            if (mapping.Value.ColumnType == typeof(Guid))
            {
                entity[mapping.Key] = reader.GetGuid(reader.GetOrdinal(columnName));
            }
            else if (mapping.Value.ColumnType == typeof(string))
            {
                var value = reader.GetString(reader.GetOrdinal(columnName));
                if (!string.IsNullOrEmpty(value))
                {
                    entity[mapping.Key] = value;
                }
            }
        }
    }

    return entity;
}

private static string BuildSelectClause(ColumnSet columnSet)
{
    var selectColumns = new List<string>();
    var columnsToInclude = new List<string>();

    if (columnSet.AllColumns)
    {
        columnsToInclude.AddRange(FieldMappings.Keys);
    }
    else
    {
        columnsToInclude.AddRange(columnSet.Columns.ToArray());
    }

    foreach (var columnToInclude in columnsToInclude)
    {
        if (FieldMappings.TryGetValue(columnToInclude, out var mapping))
        {
            if (mapping.IsComputed)
            {
                selectColumns.Add(mapping.ColumnName + " AS " + mapping.ComputedColumnAlias);
            }
            else
            {
                selectColumns.Add(mapping.ColumnName);
            }
        }
    }

    if (!selectColumns.Contains("Id"))
    {
        selectColumns.Add("Id");
    }

    return string.Join(", ", selectColumns);
}

private static string GetColumnName(string attributeName)
{
    if (FieldMappings.TryGetValue(attributeName.ToLower(), out FieldMapping mapping))
    {
        return mapping.ColumnName;
    }
    return attributeName;
}
```