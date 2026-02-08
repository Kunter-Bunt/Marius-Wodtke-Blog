---
title: "Copilot for Sales: Admin Settings"
date: 2026-02-15
draft: false
image: /post/copilot/outlook/cover.jpg
tags: 
    - Copilot for Sales
    - Outlook
---

I'm not a big fan of AI for everything, but that's a story of it's own. Even the earliest versions of GPT already did a great job summarizing texts and thus having such a feature in Outlook to get the hang of long conversations that you didn't follow until someone posted a question to you is a great thing.

MS thought so too and thus we now have the Copilot for Sales now. The obviously diverted all development efforts from the established App for Outlook and has the disadvantage that depending on your existing licensing it will cost extra.  
But of course there is also additional value that might outweigh the cost quickly and especially if it is included in your existing licenses, why shouldn't we prefer this over the App for Outlook?

To skill myself up in this new way of offering Dynamics connectivity to Sellers in Outlook I will explore this tool in this series and as always I will document my experience in here, hoping that you may find some information that the official docs were missing.

## The first pitfall
And here goes the first one: [The docs say](
https://learn.microsoft.com/en-us/microsoft-sales-copilot/install-sales-as-an-integrated-app) simply go to M365 admin center -> Settings -> Integrated apps -> Get apps. Now search for "Sales" and chose get it now. And this is correct! However, the big screenshot right below still has the search term "copilot for sales" and a matching "Copilot for Sales" card shown... Yeah, they've renamed it to Sales, so search for "Sales"! [Here is also a direct link to the App](
https://marketplace.microsoft.com/en-hk/product/office/WA200004460?tab=Overview).

![Integrated Apps is found after selecting "Show All"](M365admin.jpg)

![The App was renamed from "Copilot for Sales" to "Sales"](Search.jpg)

Sadly, I did not screenshot the installation wizard, but the only setting I could make was for which users it is available to. This is also available in the app details afterwards should you want to change it. Note here that for larger organizations you would choose to restrict the app to a group to only deploy it to users with the respective license.

![](Details.jpg)

![](Users.jpg)

Also note the **Teams** integrated app needs extra deployment from the Teams admin center

## Accessing the Admin Settings
Let's first check the app is available, this may take a couple minutes; or up to 48 hours per the documentation, but usually they set absurdly high numbers here to avoid support cases that resolve themselves an hour later.

![](UserView.jpg)

As we can see OOTB the button appears in an email, it connected me to an environment automatically on first open (likely my last used environment on this user) and offers to work with Contacts or saving the Email to Dynamics. So far so similar to the App for Outlook, but "Key sales info" provides a summary of the email as the copilot part. In this sample not really helpful, by the time I've read the summary I've also read the Email, plus, I need to double check because "ai-generated content may be incorrect", but of course we all know those emails/email-chains that are much worse and the summary is a blessing.

![The apps menu is found on the left.](Apps.jpg)

![](Home.jpg)

Most importantly for regular users, the full-screen app contains an environment switcher should the automatic association be incorrect and the user dismissed the initial info box. If you have the System Administrator Role in the environment you will also see the settings tab.

From here on out this article will be a collection of commented screenshots. I hope this helps you as much as it helps when I have to respond to client requests without having an environment and licensed Outlook at hand.

## Tenant Settings

![](Tenant.jpg)

![If you have restrictions on the use of AI for compliance, legal, union or whatever reasons, you can turn off the AI parts of the app, you will miss the summaries etc. but for example saving emails to Dynamics will still be available. If you use the switch at the top, the bottom part will vanish as AI is forbidden for everyone.](Tenant1.jpg)

![This seems to be Teams related, we'll have to check the effects of this in a future article once I got my Teams license issues sorted.](Tenant2.jpg)

## Environment Settings

![](Environment.jpg)

![You can disable the AI features on environment level as well, but here you only disable for everyone not with include/exclude lists.](Environment1.jpg)

![Access Setting has options for Meeting Insights, Access to Sales Chat and Sales Agent.](Environment2.jpg)

![These options again may be used with include/exclude lists.](Environment3.jpg)

![](Environment4.jpg)

![If a feature in this section is turned off, the options to restrict access will vanish, it is forbidden for everyone.](Environment5.jpg)

![These settings affect what can be manually synchronized. Remember that there are also settings for the automatic Server Side Synchronization in Dynamics! Also the field mapping will be interesting because the AI meeting notes being synchronized to the description field by default may have effects here on this existing synchronization!](Environment6.jpg)

![Classifications are offered to the user when saving an email/appointment, this can make the process more cumbersome, but might also be really helpful when your process requires additional information to be logged.](Environment7.jpg)

![](Environment8.jpg)

![The list for adding a record type in Forms only lists tables that have a lookup to the already configured Contact, Account, Opportunity, that's why only 98 tables are shown. Lead is available!](Environment10.jpg)

![](Environment9.jpg)

![Key fields at the bottom do not form a database key, but are important and should be shown alongside the primary field in cards.](Environment11.jpg)

![You may define more required fields in Outlook than in Dynamics.](Environment13.jpg)

![However, if a field is required in Dynamics you can not revert that in Outlook nor lock the field for editing. If you need this, use Business Rules to require the field in Dynamics.](Environment14.jpg)

![Email is never editable!](Environment15.jpg)

![You may also add fields to the form, based on the amount, all field types should be available.](Environment16.jpg)

![View was not editable for Contact! On Opportunity this opens a two step wizard where you first select the relationship to Contact for the synchronization and then which view of Opportunity should be used to select an existing record.](Environment17.jpg)

![](Environment18.jpg)

![When edit is disabled, the settings for Allow Editing are not editable anymore.](Environment19.jpg)

![Strangely this is also the case for required fields although this should also apply to the Create form.](Environment20.jpg)

![](Environment21.jpg)

![Nice move here to allow for fine tuned system prompts with the OOTB sample for Account Summaries! I'm wondering if this will become available in more places.](Environment22.jpg)

## Features

![Well, there is another point for a separate article...](Features1.jpg)

![At least in the european space a highly disputable setting, but worst case always is that you forgot to start the recording/transcription and now have no summary. Maybe the frog boils slowly here and we will accept being recorded in every Daily/Weekly/...](Features2.jpg)


![Meeting preparations don't work well for me as people are not providing much agenda, but if they do in your organization, this may be a great thing.](Features6.jpg)

![Daily Digest delivery is configurable in 30 minute intervals. To be tested if this adapts to the users timezone. Also it would be beneficial if the user has the possibility to overwrite the admins choice here, imagine different cultures where some countries start working at 7 and others at 9...](Features3.jpg)

![The chat feature was already present in other settings to enable it. Here we can fine tune its capabilities, I see adding important custom entities as the primary use case.](Features4.jpg)

![](Features5.jpg)

## Summary
Once you find the app, deployment is straight forward. Think about whom you want to give access and if all of these users should receive all AI features. You can limit access to many features with fine granularity in the Settings of the Copilot for Sales app. And by the way, I will keep calling it Copilot for Sales instead of "Sales", because I think this is confusing in a global context. It might be fine within the Outlook AppSource, but in the Power Platform space or even googling stuff it's way to generic.

This series will continue. For once we will take a general look at the users side of things, but we've also opened up room to investigate settings like required fields on create forms, Teams capabilities, daily digest, default views for contacts, enabling forms for custom tables, classifications, AI summary synchronization and the lead research agent. See you soon!