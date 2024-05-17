---
title: "Teams Integration: Avoid the Creation Limit"
date: 2024-06-02
draft: false
image: cover.jpg
tags: 
    - Teams
    - Power Automate
    - Azure
---

It might be you are here because your users are reporting that they cannot create any new Teams anymore or you followed [the post about creating connected Teams with Power Automate](/post/teams/custom/) and your technical user for the Connection Reference went on strike. Anyhow, here is the solution if there are reports about "AadGroupCreationLimitExceeded".

## Symptom
The Teams integration worked fine, but from one moment to the next, it stopped working, no matter the constellation of data, the user can't make it work anymore. It even extends to creating a team in Teams itself. 

The error messages will contain some reference to "AadGroupCreationLimitExceeded", for a flow, it might look like this:

```json
{
  "error": {
    "code": "BadRequest",
    "message": "Failed to execute Templates backend request CreateTeamFromTemplateRequest. Request Url: https://teams.microsoft.com/fabric/emea/templates/api/team, Request Method: POST, Response Status Code: BadRequest, ErrorMessage : {\"errors\":[{\"message\":\"Error when calling Middle Tier. Message: ''. Error code: 'AadGroupCreationLimitExceeded'. Status code: BadRequest.\",\"errorCode\":\"Unknown\"}],\"operationId\":\"abcd\"}",
    "innerError": {
      "code": "BadRequest",
      "message": "Failed to execute Templates backend request CreateTeamFromTemplateRequest. Request Url: https://teams.microsoft.com/fabric/emea/templates/api/team, Request Method: POST, Response Status Code: BadRequest, ErrorMessage : {\"errors\":[{\"message\":\"Error when calling Middle Tier. Message: ''. Error code: 'AadGroupCreationLimitExceeded'. Status code: BadRequest.\",\"errorCode\":\"Unknown\"}],\"operationId\":\"abcd\"}",
      "details": [
        {
          "message": "Error when calling Middle Tier. Message: ''. Error code: 'AadGroupCreationLimitExceeded'. Status code: BadRequest.",
          "target": "Templates"
        }
      ],
      "date": "2024-05-14TXX:XX:XX",
      "request-id": "00000000-0000-0000-0000-000000000000",
      "client-request-id": "00000000-0000-0000-0000-000000000000"
    }
  }
}
```

## Cause
There is [a limit of 250 Entra Id objects](https://learn.microsoft.com/en-us/entra/identity/users/directory-service-limits-restrictions#:~:text=A%20non%2Dadmin%20user%20can%20create%20no%20more%20than%20250%20Microsoft%20Entra%20resources) that can be created by a single user. Every Teams Team creates a group in Entra, which is counted as an object. So as soon as you create 250 (or less if you also created other objects) Teams, you cannot create any more.

## Resolution
You could get off this limit by deleting some Teams, but since they are soft deleted, they are still counted to your quota until they are finally gone after 30 days. Quite some time to wait if you hit the limit...

And especially with a technical user for a Power Automate Flow, deletion will simply not be possible, since there might be more than 250 Teams needed, so we need something different.  
One option could be the _Teams Service Administrator_ role that you could assign to the technical user as [described here](https://medium.com/365uc/non-admin-users-cannot-create-more-than-250-teams-8ce20f0d9bb2#:~:text=new%20roles%2C%20the-,Teams%20Service%20Administrator%20role,-includes%20(amongst%20other).

If this is too many privileges for an enterprise scenario there is also a specific privilege for this 250 objects limit. [Microsoft describes this](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/quickstart-app-registration-limits) for users hitting this limit with creating AppRegistrations, so I won't reiterate the process here. You will just need to replace the mentioned privilege (`microsoft.directory/applications/create`) with the `microsoft.directory/groups.unified/create` privilege.  
This custom role is also more suited if regular users hit this limit in their daily jobs, as the _Teams Service Administrator_ is overkill in this situation.

## Summary
Depending on how many Teams you create, some users or a technical user might be hitting a limit once they created 250 Teams. This is not a Teams limitation but an Entra Id limitation for non-administrative users and shows by the error "AadGroupCreationLimitExceeded". It can be resolved with administrative privileges, e.g. _Teams Service Administrator_ or with a custom role containing the privilege `microsoft.directory/groups.unified/create`.

I hope this helped you, but before you go, just think about one more thing, [there are more limits](https://learn.microsoft.com/en-us/entra/identity/users/directory-service-limits-restrictions)! In total Entra Id has a limit of 300.000 objects (if you have a domain), will you hit that once you remove the create limitation on the users? Likely not, but it's not a bad idea to reason and make some estimates to avoid this greater limit. Maybe you need to think about a deletion strategy.