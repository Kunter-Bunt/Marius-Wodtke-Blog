---
title: "Having the right view on data"
date: 2026-05-10
draft: false
image: cover.jpg
tags: 
    - Data Modeling
    - Customization
---

No, this is not going to be a political discussion about data interpretation, it's about which view does what. You will certainly be familiar with the so called _Public Views_, these are the ones the Model Driven App displays when you select a table in the navigation, but what's a _Quick Find View_ and a _Advanced Find View_? Let's find out!


## Public View
This is the only view type that you can create for an existing table! You will not be able to choose a type when creating a new view, it will always be a _Public View_.

But that means, in contrast to the other view types, that you will have to choose a default view for a table. This view will be used when the table is selected in the navigation of an app (at least if the view is part of the app) and as well in customization when adding a subgrid to a form. 

![](SetDefault.jpg)

Two public views are created for you when create a table X, "Active Xs" and "Inactive Xs". This may not make sense for your table, you can change, rename, add and remove public views at will, only the default view cannot be removed, which also ensures there is always at least one public view present.

No matter if you chose to add a new view or change an existing one, the editor offers options, to add/remove columns and change their width. You can also manipulate sorting and filters. 

![](Edit1.jpg) ![](Edit2.jpg)

If you are changing filters, make sure to reflect that on the name, ending up with "Active Xs" that actually shows all Xs will confuse everyone!

And finally, don't forget to _Save and Publish_.

## Lookup View
Now we have customizing out of the way, we can focus on the special views. Since you can't create new ones, you will edit the existing view if required.

This view used by default for Lookups. This can be changed on forms, but there are parts where you do not have such a selection! Examples will be the _Lookup Objects_ dialog that is opened when associating records N:N or the _Assign_ dialog where the default _Lookup View_ is fixed.

The first two columns will be shown to the user in the dialog, by default, those are the primary field (usually Name) and Created On. In my experience Created On is rarely helpful for the user, but fortunately we can change that. You can also go beyond those two columns, they will not directly be shown but can be unfolded per record with the chevron icon, so make sure to put the two most distinguishing columns up first.  
All columns shown can also be searched, but they are search with a "begins with", which should also be considered. For example with alphanumeric key with a prefix, e.g "TST-4234", here you won't find the record by typing "4234"!

![](Lookup1.jpg) ![](Lookup2.jpg)

2 more notes regarding the column order: If say the third column is matched by a search it will move up to the spot of the second column, overwriting the set column sorting. This makes it more transparent to the user why this record is shown for their search.  
And if the second column is empty, the third column will also move up. This also makes sense, but can be a bit confusing if the second column is empty for some records creating a mix of columns being shown in the results.

If you choose not to use the primary field (usually Name) as first column or at all, be aware that it will still be taken as the value shown in the Lookup after selecting a record.

## Quick Find View
The quick find as such has actually vanished on my apps. This view was shown when you used the search bar on the top right of a view. Instead the Copilot search bar is available to "Ask about data in this table". 

But that does not make this view useless! While the columns configured on the left pane are not relevant anymore as the Copilot search will keep the columns of the selected view (so for example "Active Xs"), the _Find By_ columns in the right pane are still important. This section is only found on the _Quick Find View_ and determines what fields the user can search for. They are also relevant for the _Dataverse Search_, but that's something for a separate article.

![](QuickFind1.jpg)

Now that we have configured the Owning Business Unit (my BU is called "mariuswodtke-mvp"), we can search for it. Even though the column is not present in the view! But sadly, this is not a "contains" search, but a "begins with", making the second query not find the record although it would fit with a contains search.

![The Copilot search bar replaced the old quick find.](QuickFind2.jpg)

![Even though not present, records of the given Owning Business Unit "mariuswodtke-mvp" can be search.](QuickFind3.jpg)

![But they are searched with begins with, and "mariuswodtke-mvp" does not begin with "wodtke-".](QuickFind4.jpg)

For me right now, the "Advanced Filters" do not display the added filter, making me unable to produce a screenshot, but here is the filter from the downloaded FetchXml:
``` HTML
<filter type="or" isquickfindfields="1">
    <condition attribute="mwo_name" operator="like" value="mariuswodtke%" />
    <condition attribute="owningbusinessunitname" operator="like" value="mariuswodtke%" />
</filter>
<filter type="and">
    <condition attribute="statecode" operator="eq" value="0" />
</filter>
```

## Associated View
This view is shown by default whenever you select a Relationship in the _Related_ navigation of a form. The user can switch to other views in the app, but of course they would prefer you to configure meaningful columns for this view so that they may save the extra clicks. And think about the filter as well, the default one for active records is not always the right way to go.

![](Associated1.jpg)

## Advanced Find View
Now this one is really obsolete by now, I wouldn't worry about. Advanced Find is still a thing, you can use to for example explore tables that are in your app, but not in the navigation, but this will show the default _Public View_.


![](AdvancedFind1.jpg)

![](AdvancedFind2.jpg) ![The filters of the view are automatically opened.](AdvancedFind3.jpg)

The _Advanced Find View_ is still accessible with detours:

![Go to the Power Platform Environment Settings app, use the filter icon and then _Switch to Classic_.](AdvancedFind4.jpg)


![Select the table in _Look for_, now _Use Saved View_ with the name "[new]" is preselected for you. This is the _Advanced Find view_, the custom filter I applied in customization (on the right) is also applied here.](AdvancedFind6.jpg)
![](AdvancedFind5.jpg)

## Summary
For every situation the right view. _Public Views_ are the only ones creatable by you and are usually the ones you can select manually in several customization spaces like Form- and App-Designer. But sometimes those options are not given, then the other views become important. 

The _Lookup View_ is used by default for any lookups to the given table, in the Form Designer you can usually adapt this, but some dialogs and for example Business Process Flows do not have an option to change away from that view.

The _Quick Find View_ has special options for _Find by_, these are used by the search bar and Dataverse search. Just keep in mind that these work with a "begins with" filter.

The _Associated View_ is used for the _Related_ navigation in a form, the user can switch here to other views, but that requires extra clicks every time they open the related subgrid.

The _Advanced Find View_ became irrelevant with the move to the modern UI as it is only used in the classic advanced find accessible trough the Power Platform Environment Settings app.