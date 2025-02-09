---
title: "Power Pages Actions: Pass any Parameter"
date: 2024-08-18
draft: false
image: cover.jpg
tags: 
    - Power Pages
    - Custom Apis
---

Previous videos showed passing [a string](/post/power-pages/custom-api/) and [an entity reference](/post/power-pages/custom-api-bound/), but the other parameters are missing an explanation. And while for some types, like integer, this might not be needed, but with complex types, like EntityCollection, it's not that clear. So here is a reference for all possible inputs for Custom APIs and their respective outputs.

## General concepts
The Actions Adapter needs to guess your input, so you will find, that for complex types, there is something chosen to identify them correctly. For example, both OptionSetValue (Picklist) and Money have a Value property in their definition in C#. But how would the Actions Adapter would decide what `{ Value: 3 }` is?* So instead `{ OptionSetValue: 3 }` and `{ Money: 3 }` make for a clear differentiation.

This concept does not apply to the outputs. They are pretty much left untouched and passed as is. So both an OptionSetValue as well as a Money field might be passed back to you as `{ Value: 3 }` assuming you know by the name of the output what field type is behind this.

> *: The adapter could evaluate the Metadata to be sure, but that would have a performance impact with additional queries to Dynamics.

Should the automatic parsing fail to recognize a type due to the value matching multiple types (e.g. "5" can be an integer, but also a string), the correct type can be annotated with an @, see the respective section ("Parser overwrite") for the correct name and [this article](/post/power-pages/custom-api-parser/) for more details. Sample:

``` JS
// likely to be misinterpreted as Integer
var inputs = {
   String: "5"
}
// Will be passed to the Custom API as String
var inputs2 = {
   ["String@string"]: "5"
}
```

## Field Types
For this article, I created a simple Custom API that returns all inputs to the outputs. For every type, there was an input and output defined named like the type. So both the `Custom API Request Parameter` and `Custom API Response Property` for the type `String` are called _String_. 

The following sections will show an example of an input object passing exactly one `Custom API Request Parameter` and the construction of an output object with the corresponding `Custom API Response Property`. Some sections may contain additional explanations.

### String
``` JS
var inputs = {
   String: "Hello"
}
```

``` JS
var outputs = {
    String: "Hello"
}
```

Parser overwrite: @string

### StringArray
``` JS
var inputs = {
   StringArray: ["Hello", "World"],
}
```

``` JS
var outputs = {
    StringArray: ["Hello", "World"],
}
```

### Guid
If a string is parsable as Guid, it will be converted accordingly.
``` JS
var inputs = {
   Guid: "00000000-0000-0000-0000-000000000001"
}
```

``` JS
var outputs = {
    Guid: "00000000-0000-0000-0000-000000000001"
}
```

Parser overwrite: @guid

### Integer
``` JS
var inputs = {
   Integer: 1
}
```

``` JS
var outputs = {
    Integer: 1
}
```

Parser overwrite: @int

### Float
``` JS
var inputs = {
   Float: 5.5
}
```

``` JS
var outputs = {
    Float: 5.5
}
```

Parser overwrite: @float

### Decimal
To mark something as a decimal, pass it as a string with an "m" at the end.
``` JS
var inputs = {
   Decimal: "10.4m"
}
```

``` JS
var outputs = {
    Decimal: 10.4
}
```

Parser overwrite: @decimal

### Boolean
``` JS
var inputs = {
   Boolean: true
}
```

``` JS
var outputs = {
    Boolean: true
}
```

Parser overwrite: @bool

### DateTime
``` JS
var inputs = {
   DateTime: "2024-08-03T15:27:41Z"
}
```

``` JS
var outputs = {
    DateTime: "2024-08-03T15:27:41Z"
}
```

Parser overwrite: @datetime

### Picklist
Notice here that the required property for the input is `OptionSetValue` while in the output it is called `Value`.
``` JS
var inputs = {
    Picklist: {
        OptionSetValue: 1
    }
} 
// or
var inputs2 = {
    ["Picklist@picklist"]: 1
}
```

``` JS
var outputs = {
    Picklist: {
        Value: 1
    }
}
```

Parser overwrite: @picklist

### Money
Notice here that the required property for the input is `Money` while in the output it is called `Value`.
``` JS
var inputs = {
    Money: {
        Money: 7.8
    }
}
// or
var inputs2 = {
    ["Money@money"]: 7.8
}
```

``` JS
var outputs = {
    Money: {
        Value: 7.8
    }
}
```

Parser overwrite: @money

### EntityReference
To be recognized as an EntityReference, the properties `LogicalName` and `Id` should be present.
``` JS
var inputs = {
    EntityReference: { 
        LogicalName: "contact",
        Id: "4121902e-0530-ef11-8409-6045bd9e7366"
    }
}
```

``` JS
var outputs = {
    EntityReference: {
        Id: "4121902e-0530-ef11-8409-6045bd9e7366", 
        LogicalName: "contact", 
        Name: null, 
        KeyAttributes: [], 
        RowVersion: null
    }
}
```

### Entity
To be recognized as an Entity, the properties `LogicalName` and `Attributes` should be present. `Id` is optional but is displayed here as a common use case.
``` JS
var inputs = {
    Entity: { 
            LogicalName: "contact",
            Id: "4121902e-0530-ef11-8409-6045bd9e7366",
            Attributes: {
                firstname: "Marius",
                lastname: "Wodtke"
            }
        }
}
```

``` JS
var outputs = {
    Entity: {
        Id: "4121902e-0530-ef11-8409-6045bd9e7366", 
        LogicalName: "contact", 
        Attributes: [
            {           
                Key: "firstname", 
                Value: "Marius"
            },
            {
                Key: "lastname", 
                Value: "Wodtke"
            }
        ], 
        EntityState: null, 
        FormattedValues: [], 
        KeyAttributes: [], 
        RelatedEntities: []
        RowVersion: null
    }
}
```

### EntityCollection
To be recognized as an EntityEntityCollection, the properties `EntityName` and `Entities` should be present. `Entities` then contains [Entity objects as seen above](#entity).
``` JS
var inputs = {
    EntityCollection: {
        EntityName: "contact",
        Entities: [
            { 
                LogicalName: "contact",
                Id: userid,
                Attributes: {
                    firstname: "Marius",
                    lastname: "Wodtke"
                }
            }
        ]
    }

}
```

``` JS
var outputs = {
    Entities: [
        {
            Id: "4121902e-0530-ef11-8409-6045bd9e7366", 
            LogicalName: "contact", 
            Attributes: [
                {           
                    Key: "firstname", 
                    Value: "Marius"
                },
                {
                    Key: "lastname", 
                    Value: "Wodtke"
                }
            ], 
            EntityState: null, 
            FormattedValues: [], 
            KeyAttributes: [], 
            RelatedEntities: []
            RowVersion: null
        }
    ]
    EntityName: "contact"
    MinActiveRowVersion: null
    MoreRecords: false
    PagingCookie: null
    TotalRecordCount: 0
    TotalRecordCountLimitExceeded: false
}
```

## Summary
The Power Pages Actions solution can handle all possible input types. Some types like Decimal might need special handling and complex parameters like Entity need extra care to ensure that the properties are named correctly. 

The solution can hand out all possible output parameters. Here the properties are what you would find in C#.