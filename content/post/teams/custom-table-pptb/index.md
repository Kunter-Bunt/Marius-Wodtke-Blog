---
title: "Announcement: Teams Integration Enabler now available for Power Platform Toolbox"
date: 2026-08-02
draft: false
image: cover.jpg
tags: 
    - Teams
    - PPTB
---

Are you aware that you can enable the basic or [basic](/post/teams/collab-basic/) and [enhanced teams collaboration experience](/post/teams/collab-enhanced/) for custom tables? if not I highly recommend to read [this article](/post/teams/custom-table/) as well. 

And now the reveal: This is now also possible with the XrmToolbox challenger [Power Platform ToolBox](https://www.powerplatformtoolbox.com/)! At first glance a similar tool to the well known XTB, but this a different foundation, that leverages modern web-development techniques instead of Win-Forms. This makes it look more modern, enables cross platform compatibility and is currently under rapid development. I'm most looking forward to the announced VS Code Plugin, enabling me to use my favorite tool directly within the editor. 

And naturally I tried this, told GitHub Copilot to migrate the existing tool and apart from some minor publishing bugs it did it first try. So now we can hopefully soon enable Teams integration directly from VS Code. Well that is if we are not doing it via Coding Agents and the [Skills for Dataverse](https://github.com/microsoft/dataverse-skills) anyway ;)

Operationally, not much changed, just visually as you can see below.  
That also means that my known issue still exists: The MS API just seem to trigger an asynchronous activation, meaning the table refresh might complete before the change is done. Check again in 30-60 seconds to confirm.

![](Step1.jpg)

![](Step2.jpg)

![This view was refreshed about 30s after the success appeared allowing the modification to propagate to Metadata.](Step3.jpg)

Cheers and see you in the next one!