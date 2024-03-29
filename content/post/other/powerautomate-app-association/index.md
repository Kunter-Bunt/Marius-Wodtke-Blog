---
title: "Powerautomate: Multiplexing and App Association"
date: 2023-10-08
draft: false
image: cover.png
tags:
    - Power Automate
---

Are you using PowerAutomate (Flows) with Data? Then get ready for this change by Microsoft! 

## Multiplexing
Multiplexing is something that forbids leveraging the fact that only the owner of the flow needs a _Flow Premium_ license to offer automation to other users. If premium connectors are used within the flow and it offers direct value to other users, those users will need a _Flow Premium_ license as well.
There is a hole in this though: If one of the two ends (trigger or action) is directly related to a Dataverse app and the value is provided to the users of this app, the entitlement for this value can be derived from the license they have for Dataverse (e.g. _Sales Professional_, _Customer Service Enterprise_ and so on).
In some situations, you still need to be careful, e.g. think about a Flow that triggers from Dataverse and stores a document in Sharepoint. Now if this is stored for the Dataverse user that should be no problem, but if the user using the document is not a Dataverse user they might need a _Flow Premium_ license to be entitled to gain the value from that flow.

## What's new?
We will actually have to mark the flows that fall under this exception. That's not too hard, it's only the effort I'm just afraid of the effort for existing implementations with dozens or even a hundred flows.
But let's do this, select a Flow, navigate to the _Details_ and you will find the _App Association_ section at the bottom right. Then _Add Association_ and then select one or more of your Dataverse Apps. After saving the Apps will be displayed in this view as well as the _Details_ of the Flow.

![The _Associated Apps_ are found in the bottom right](Associate1.png)

![Select _Add Association_ to add apps to the Flow](Associate2.png)

![After saving the apps, they will appear in the view](Associate3.png)

![The associated apps viewed from the _Details_ pane of the Flow](Associate4.png)

And that's it! Now repeat this for all Flows and think about what apps they relate to. If you can't pin a certain app, that might be the red flag that you are currently multiplexing and the users "using" the Flow might need a license.

## When does it need to be done?
Microsoft announced notifications going out on October 15th and the enforcement (the flow being turned off) will happen after 90 days. So this means you have until after Christmas before this needs to be completed. This should be a sufficient time frame to perform the association, but still needs to be planned because it will be forgotten otherwise. The official documentation is [found here](https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/faqs#what-are-the-different-enforcements), check it for updates regarding the timeline.

![](Timeline.png)

## Summary
This was something completely different for me, I hope you did not get bored with all that legal talk. While we talk about that: Be aware that nothing here is legal advice and the licensing guides do change regularly which may render the statements made here useless. 
For the actual matter: The change here is not too big and it should be possible to find a few hours to complete the app association within 90 days. Yet you should be aware and to be honest I think the idea of this move is for you to reevaluate if you are multiplexing and should buy additional licenses.