---
title: "eForms with C# 1: Introduction"
date: 2023-05-13
draft: false
---

If you are doing a major tender within the EU, you also need to publish the tender on EU level. 
The eForms 2 interface allows you to do this programmatically, an important feature for organizations which publish tenders on a regular basis. For everyone else, a subject matter expert will just enter the data manually to [the web interface](https://enotices.ted.europa.eu/).

# eForms with C#
Despite the title, the best option to interact with eForms programmatically is probably with Java. Simply because the EU also publishes [an SDK](https://github.com/OP-TED/eForms-SDK) for eForms in Java.
But in fact what we need to do to publish a notice is generate some XML and push that to one or two REST interfaces. Should be doable in C# as well. Spoiler alert: Of course it is! But when doing something by foot without an SDK there is always struggle and this series of articles shall help you get started and concentrate more on the actual business problems rather than spending time on finding out how the interface works.

So whatever your reason is to stick to C#, we will make it work. My reasons are simple: This blog is mainly about Dynamcis Integration, Dynamics only takes C# for its plugins and my task was to integrate Dynamics with eForms. Simple task, but the execution was not that easy due to the lack of information around the internet.

# Important references
First and foremost there is the [TED Developer Docs](https://docs.ted.europa.eu/home/index.html). While we won't really use the [eForms SDK](https://docs.ted.europa.eu/eforms/latest/index.html) and the information around the [TED API](https://docs.ted.europa.eu/api/index.html) is quite sparse at the time of writing there is still the search! And this was quite useful for me, for example with the codelists. 
I need to specify a language but DE (german) is not accepted? Searching for the codelist name [eforms-language](https://docs.ted.europa.eu/eforms/latest/reference/code-lists/eforms-language.html) clarifies that I need to specify it as DEU.

Then there are two APIs for publishing the notices. The first one is technically optional, the [Validation API](https://docs.ted.europa.eu/api/endpoints/cvs-ted-europa-eu.html) only makes sure the uploaded XML is _valid_. Valid here means schematically correct. The schematrons of the API do check quite some plausibility but that does not mean its legally valid as well. I can specify the address of my organization to be _Test 123 in 9999 Testcity, Testcountry_, its a complete address but obviously incorrect information. 
The API has a Swagger documentation as well, find the [preview environment here](https://cvs.preview.ted.europa.eu/swagger-ui/index.html).

The second one is for actually publishing a notice. This is the [Publication API](https://docs.ted.europa.eu/api/endpoints/enotices2-ted-europa-eu-esenders.html). It will also run validation on the notice and you can retrieve the results after the upload. However since it has already saved your notice, you cannot upload a corrected XML with the same ID again. This is why I prefer to check my notices first and then "fire and forget" the notice since I'm sure it will work.
The API has a Swagger documentation as well, find the [preview environment here](https://enotices2.preview.ted.europa.eu/esenders/swagger-ui/).

There are 2 more APIs present: The [Search API](https://docs.ted.europa.eu/api/endpoints/ted-europa-eu.html) and the [Visualisation API](https://docs.ted.europa.eu/api/endpoints/viewer-ted-europa-eu.html). These are for finding and "printing" existing notices. This might be interesting for you if you are not coming from the producer side of notices but from the consumer side and need your application to be able to search and display tenders. 

# Testing an eForms Swagger
The fact that the APIs have Swaggers allows us to try out such APIs quickly. For example if we would have generated an XML file we can push them by hand for testing even if we have not yet implemented clients for interfacing with the API. 

For that we will need an account at the [Developer Portal](https://developer.preview.ted.europa.eu/home). Click _Login_ at the top right, create an account. That account can have any email, even private ones! But this email will be used to send you validation reports when publishing a notice. After confirming the email you will want to actually log in and select the menu point _Manage API Keys_. Generate a new key and head to the swagger of the [Validation API (CVS)](https://cvs.preview.ted.europa.eu/swagger-ui/index.html). 

When we use the `/notices/validation` endpoint with the default values and our API key the result message should be something like _'The notice is an invalid XML file; it cannot be parsed'_ because the default value is of course not valid, but thats fine for now. One thing I'd like to mention with the version: The default values use _eforms-sdk-1.0_ but looking at my results, it seems like the validation was greatly changed between that and version 1.6, so check the `version-range` endpoint for the newest available version when checking with a real XML.

The [Publication API](https://enotices2.preview.ted.europa.eu/esenders/swagger-ui/) works a little different in terms of authentication. There is no simple header in the swagger that you can fill, instead you will need to use the _Authorize_ Button on the top right and enter your API key, _Authorize_ and _Close_. Then you can use an endpoint like `/notice/notices/{business-id}/validation-report` with the default values to try out the API. 

# Summary
So this article was an introduction. It detailed that using C# for eForms should be concious decision, provided links to the documentation and a short overview for the associated APIs. Last we generated an API key for the preview environment of eForms and used it to explore the APIs. In [the next post](/post/eForms-scharp/generating) we will take a deeper dive into the actual programming, generating an XML for a notice. 

# Special Thanks
To [Şevket Çokay](https://www.linkedin.com/in/sevketcokay/) and [Florian Unterberger](https://www.linkedin.com/in/florian-unterberger-3bab39106/) for supporting me with subject matter expertise and contacts in implementing eForms integration!