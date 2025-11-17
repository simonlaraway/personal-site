---
title: 'API documentation'
date: 2023-11-05T19:07:40-07:00
draft: true
categories: ["samples"]
params:
    ShowBreadCrumbs: true
---

This topic details a behavior of APIs in Guidewire's CloudAPI platform. This topic supplements existing API documentation 

For some background, request inclusion is a technique in which a single API call contains nested HTTP requests. (Request inclusion is explained in the Guidewire Cloud API docs [here](https://docs.guidewire.com/cloud/pc/202306/cloudapibf/cloudAPI/topics/102-Optim/03-request-inclusion/c_request-inclusion.html).) It is used to minimize the amount of calls that need to be made. For example, a POST request to create a resource might have a nested POST request to create a related resource. 

The topic provides information on using PATCH HTTP requests in request inclusion and how this necessitates different fields in the body of the request from POSTs, which were documented already.

I wrote this topic with the supervision of a senior tech writer after discovering this behavior with my own Postman test calls.

I wrote it in the Oxygen XML editor. After merging it into the main repo, it was published to [docs.guidewire.com](https://docs.guidewire.com/) and then I generated the PDF from that HTML.

**Tools used:** *Oxygen XML Editor, Postman*

[![Screencap of API documentation](patches.png)](patches.pdf)
Click the image to see the full text.


