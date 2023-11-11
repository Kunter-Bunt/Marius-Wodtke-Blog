---
title: "Plugin Self Registration 4: When to use it"
date: 2023-05-07
draft: false
---

After we've explored the use of self-registering logic in the context of the generic name combination in the [previous post](/post/plugin-self-registration/praxis), there is certainly the question "Should we use this everywhere now?" Certainly not!

## When to use it and when not
The added plugin(s) for registering the logic are extra effort that we will try to avoid whenever possible. Think about this requirement: "We want to validate IBANs on incoming orders and mark invalid ones for review". If this was done in the frontend you can easily provide a PCF control (Power Component Framework) to perform the check for any entity. However, if the orders are inserted via the backend - e.g. via integration with a shop system - this would mean that someone has to open every single order to check the result. Therefore a backend solution like a plugin or Flow might be preferred. And then again, if this is regular project work we will just create a regular plugin. If it has to work on several entities, we will implement it generically and just register it manually to the required entities. When it should work on an additional entity we will simply add another registration. However this of course stops working as soon as we'd like to turn this into some sort of ISV solution, we cannot know the entities to register the plugin to in our development environment.

But in this case, we have a different option to avoid self-registration: Making a custom entity for "IBAN". The customer will then add a relationship (e.g. lookup) to their entity instead of a string field and our validation logic can run on creating and updating the IBAN entity. Since we know this entity and its fields in the development environment the registration is static and easily done. 

So we should always look out first for an option to make the registration static before we resort to the dynamic registration explored in this series. This will be most of the time! But now you are prepared for the other few times as well where you a situation that allows for static registration **is not feasible**. The sample of name combinations we've explored came to this situation because it was highly tied to the primary field of custom entities, something we can't bend to a fixed set of entities, unfortunately.

## Conclusion 
With this, the series comes to an end. From the [initial idea](/post/plugin-self-registration/concept), we moved on to [a solution](/post/plugin-self-registration/solution) to ease the process and make it more feasible to implement. Then we looked into a [practical use case](/post/plugin-self-registration/praxis) where plugin self-registration allows us to implement something that is otherwise pretty unthinkable. Finally, I've used this post to calm down my own and your mind a bit to not run out and implement everything with this new possibility and rather use it sensibly. 

Cheers, and see you in the next series!