---
title: 'API reference doc improvements'
draft: false
categories: ["samples"]
params:
    ShowBreadCrumbs: true
---

**Explanation**: At Guidewire, developers write and maintain the OpenAPI spec files, and I generate documentation from them using Docusaurus with a modified Redoc plugin. 

Based on feedback we got from developers and doc site users, I made the following improvements to our API reference documentation. I wrote custom Javascript to process and render the specs, and CSS to make visual improvements.

See the API refs live at: [https://docs.guidewire.com/cloud/bc/202511/apiref/](https://docs.guidewire.com/cloud/bc/202511/apiref/)

### 1. Sidebar overhaul

**Problem**: The sidebar placed all the endpoints in an OpenAPI spec together at the same level, and the sidebar only listed the paths, not the resources themselves. This made it hard to find information for specs with many endpoints and longer paths.

**Solution**: Dynamically generate sidebar with logical endpoint grouping. 

<div class="images-wrapper">
    <div class="image-container">
    <img src="/personal-site/sidebar.png" alt="A screencap of an page with documentation for a schema object called 'Note.' The page describes fields such as Account, Author, Body, and BodySummary. The page is the first item in the sidebar underneath the heading 'Billing API Schema Reference'. ">
    </div>
</div>
<p style="text-align: center; font-size: 14px; opacity: 50%;">Click image to expand</p>

### 2. Centralized schema documentation

**Problem**: There was no centralized documentation for schema object themselves. The properties for individual schemas were only accessible by drilling down into the request or responses on each individual endpoint page.

**Solution**: Generate pages for individual schema objects and list them at the top of the sidebar for each API.
<div class="images-wrapper">
    <div class="image-container">
    <img src="/personal-site/schema.png" alt="A screencap of an page with documentation for a schema object called 'Note.' The page describes fields such as Account, Author, Body, and BodySummary. The page is the first item in the sidebar underneath the heading 'Billing API Schema Reference'. ">
    </div>
</div>
<p style="text-align: center; font-size: 14px; opacity: 50%;">Click image to expand</p>

### 3. Schema property descriptions 

**Problem**: The descriptions for some properties were not being properly displayed: for properties that were references to other schemas, the description of the property was replaced with a generic description.

**Solution**: Write script to go through the spec and wrap `$refs` in `allOf` keyword before the documentation is generated. The correct descriptions are displayed now. 

<div class="image-toggle-container">
    <div class="toggle-controls">
        <button class="toggle-btn active" onclick="showImage(1, this.closest('.image-toggle-container'))">Before</button>
        <button class="toggle-btn" onclick="showImage(2, this.closest('.image-toggle-container'))">After</button>
    </div>
    
<div class="images-wrapper">
    <div class="image-container">
        <img src="/personal-site/newscreencapswcallouts/sidebar-before-callouts.png" alt="Screencap of Guidewire Billing API references with callouts highlighting the old sidebar layout and generic property descriptions. The old sidebar has consists of a API endpoints such as 'GET /accounts/{accountId}' and the generic property description reads 'A reference to an element'.">
        <img src="/personal-site/newscreencapswcallouts/sidebar-after-callouts.png" alt="Screencap of Guidewire Billing API references with callouts highlighting centralized schema documentation, correct property descriptions, and a new sidebar layout. The centralized schema documentation appears at the top of the sidebar, underneath the subheading for 'Billing API', and the rest of the items under the Billing API subheading are resources, such as Account Charges, Account Contacts, and so on. Additionally, the correct property description reads 'A reference to the PaymentPlan in use on this policy period'.">
    </div>   
</div>
<p style="text-align: center; font-size: 14px; opacity: 50%;">Click image to expand</p>
</div>

### 4. CSS improvements

**Problem**: A lot of the CSS styling was OOTB Redoc. The fonts, colors, and 

**Solution**: Make some manual modifications to the fonts, colors, and spacing to make the API references look more like the rest of our doc site. 

### 5. (WIP) Code samples

**Problem**: There were no request/response code samples, there were only JSON . 

**Solution**: Generate code samples with a Javascript library and insert them in a spec processing step. (This has not hit the doc site yet.)

<div class="image-toggle-container">
    <div class="toggle-controls">
        <button class="toggle-btn active" onclick="showImage(1, this.closest('.image-toggle-container'))">Before</button>
        <button class="toggle-btn" onclick="showImage(2, this.closest('.image-toggle-container'))">After</button>
    </div>
    
<div class="images-wrapper">
    <div class="image-container">
        <img src="/personal-site/newscreencapswcallouts/overall-before-callouts.png" alt="Screencap of Guidewire Billing API references with callout that states 'No code samples' with an arrow to where the code samples are supposed to be.">
        <img src="/personal-site/newscreencapswcallouts/overall-after-callouts.png" alt="Screencap of Guidewire Billing API references with callout highlighting code samples. There are samples for cURL, Javascript, Python, Java, and Go.">
    </div>   
</div>
<p style="text-align: center; font-size: 14px; opacity: 50%;">Click image to expand</p>
</div>
    

