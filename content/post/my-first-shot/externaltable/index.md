---
title: "My first shot at External Tables with SQL"
date: 2023-06-12
draft: true
---

So this week I've looked into the "Virtual Entities", or as they are now called "External Tables" again. The problem the first time around was that it worked with the OData connector if you did absolutely everything right, but any minor mistake in configuring the attributes was immediately breaking the whole interface and debug information was not present. And in mistake I mean something like the server defines a string attribute and you create that as an optional string field in Dynamics; it needs to be required because it is not nullable...

Nethertheless, there is a beautiful new Interface for configuring this now and it should also map the fields automatically, theoretically eliminating the human error here.

# The server
The new interface has only _Sharepoint_ and _SQL Server_ on offer for. And Sharepoint lists needing to be integrated frankly just has not happened to me yet, so I went with the SQL Server. It is interesting in itself because it can handle big amounts of data better than Dynamics (e.g. mass inserts) and a lot of applications can already write an SQL Database. Furthermore there are synchronization features for example to OnPremise Servers and you can even integrate External Tables to the SQL Server as well, making it kind of a gateway to other databases as well.

In Azure I created an _SQL Server_ and an _SQL Database_ below. For the pricing tier I chose serverless, cranked everything to its bare minimum and set auto-pause to one hour in order to reduce the cost to an absolute minimum. I always have that server running for SQL experiments and with its "maybe once a week" usage and only a couple MB of occupied storage it cost me 1.33 Euros in 05/2023. This is of course no advise on pricing, you would have to calculate that [here](https://azure.microsoft.com/de-de/pricing/details/azure-sql-database/single/), but it gives you at least an idea how low the cost for a PoC can be.

With [SSMS](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16) I created a new table, according to the requirements for being integrated as external table.

# Table requirements
I did not find direct requirements for the sql tables, only [the docs for OData tables](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/virtual-entity-odata-provider-requirements?view=op-9-1). But with the variety of field type those were not a problem, with SQL I could imagine that you can have something with the bigger integer types that would not work. 

But the real requirement is that you need a Guid column. Often other data sources do not have this, they use an integer key or something similar. You can use those as alternate keys but the primary key for Dynamics is still the Guid, you need it. Fortunately you can let the SQL Server generate that Guid for you, here is an example: `ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_Id]  DEFAULT (newid()) FOR [Id]` where Id is defined as `[Id] [uniqueidentifier] NOT NULL`. This can be integrated to any table and it will be fit for purpose.

But consider this: What if this table is not the source of the data but its rather copied there from somewhere else? Maybe as straight copy or as an enriched dataset. No matter, you could get into the situation that you want to empty the table and fill it again from source, but that will regenerate the guids! All existing relationships with Lookups to the external table and all N:N relationships to it will be broken. So make sure to generate the guid in the "real source" already. The other option to prevent this to make an extra table with the guid and the alternate key and then join them in a view. If you drop and reload the real table this matching table would persist and thus the guids persist. But this adds overhead to manage the second table, so it might also be an option to only use this as a measure for the drop: Generate this helper table before you need to drop the main data table, then reimport the data and overwrite the newly generated guids with the saved guids from the helper table, matching by the alternate key. 

For reference, this is my table for tests:
```
CREATE TABLE [dbo].[Products](
	[Name] [nvarchar](50) NULL,
	[EAN] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NULL,
	[Id] [uniqueidentifier] NOT NULL,
	[LastModified] [datetime] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_Id]  DEFAULT (newid()) FOR [Id]
GO
```

# Creating the external table
Some pictures say more than a thousand words, let them speak and we will discuss the problems I've encountered afterwards.

![The external tables is within the new table menu](NewButton.png)

![The connection options are currently limited, we will create a SQL Server connection](NewScreen.png)

![Several authentication mechanisms are offered, _SQL Server Authentication_ even has the option for an _OnPremise Data Gateway_](AuthenticationMechanisms.png)

![AD Integrated sounded particularly intresting because I assumed this would work with the users account actually requesting the data, but in fact this uses a central service account as well](ADIntegrated.png)

![](Tables.png)

![In the mapping you can only change names, a good descision considering the problems with defining the data types manually](Mapping.png)

![](Summary.png)

![All fields show well in a view](View.png)

![And in a form as well! Keep in mind: As every custom entity, the form was initially empty, so some further customizing was required](Form.png)

# The learnings
- Service Principle did not show up
- Needed "Manually manage Connection Reference" Option from Advanced Options
![](Error.png)

# Summary
So in total I think Microsoft did a good step forward in easing the integration of external data with the new experience of external tables. The whole feature is not quite there yet, its definitely not as easy as using something like a Power Automate Dataverse Connector or creating a regular table but the new wizard is a leap forward and we can see that MS cares about this feature and is willing to push it forward. 
