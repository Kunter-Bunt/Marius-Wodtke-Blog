---
title: "Plugin Self Registration: The Concept"
date: 2023-04-19T19:49:52+02:00
draft: true
---

Tools like [spkl](https://github.com/scottdurow/SparkleXrm) do a great job at registering plugins. 
But did you ever had to turn down an idea due to the reasoning "I cant determine on which entities this would need to run when I implement this"?
While most of the time you can determine quite well at the design time which entities and fields need to be part of the trigger, sometimes, especially in very generic or configured logic you run into the problem of design time registrations. 

Lets take a look at some requirements that are problematic:
"We need to export all changes to certain entities in a specific format, we want to configure the entities and fields on the fly, because we cant determine a complete list now."  
"We have a specific pattern how to build the primary fields for our custom entities, implement that pattern for us so our admin can apply it to the new entities." 

If you had a generic logic that can run on any entity of course you could just deliver the plugin to the production and then tell the key user/admin/whomever to use the plugin registration tool to add a step to your plugin type, but lets be honest here, the audience for that is quite small. Something like a configuration entity would be beneficial for those scenarios. Even a key user would know the entity and field name to create record in CRM, but creating a plugin step is a whole different story.

And if we think about highly configurable logics that you might want to release to multiple customers as an ISV solution: It becomes unfeasable to train them on the Plugin Registration Tool and at the same time you it is absolutely impossible to preconfigure the solution in development because you dont have the customers custom entities and fields to register to.

So for this problem, let me pose an idea to you: What if we just create a regular entity for configuring your logic. Then we create a plugin reacting to changes of your configuration entity and that will handle the registration of a plugin step for the real logic based on what someone just did at the configuration entity?
Of course we will then always have two plugins, one with the actual logic and one that will make sure that the logic is triggered in the right moment.

To come with a more visual representation of this idea: "Lets transform a configuration entity into a [spkl-CrmPluginRegistration](https://github.com/scottdurow/SparkleXrm/wiki/spkl#how) at runtime".

That sounds quite simple actually, but the devil lies in the detail: For registering a plugin step you will need to interface the following entities:
sdkmessage
sdkmessagefilter
plugintype
(serviceendpoint)
sdkmessageprocessingstep
sdkmessageprocessingstepimage
(sdkmessageprocessingstepsecureconfig)

Thats quite something, right? On top of that you cannot create relationships from or to these entities, so you cannot simply link your configuration and will have to somehow keep the connection to your sdkmessageprocessingstep as well.
But fear not and stay tuned for the next post in this series where I will show you some help to simplify the process to only managing one regular entity, so that you can focus on translating your configuration entity into a plugin step!