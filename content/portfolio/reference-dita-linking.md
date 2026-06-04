---
title: 'Doc tooling: API crosslink scripting'
draft: false
categories: ["samples"]
params:
    ShowBreadCrumbs: true
---

**Description**: In our API documentation at Guidewire, we have both API reference documentation (see [here](https://docs.guidewire.com/cloud/bc/latest/apiref/)) and user guide documentation (see [here](https://docs.guidewire.com/cloud/is/202603/cloudapibf/cloudAPI/topics/landing_Cloud-API-consumer.html))

Both sets of documentation are incomplete without each other. In an effort to bridge the gap between the reference and the user guide documentation, I engineered a solution which allows us to do the following:
* Create dynamic cross-links from the API reference documentation to the relevant human-written documentation page, based on mappings created by regex and LLM calls
* Insert an AI-generated summary into the API reference documentation based on the relevant human-written documentation

The solution makes use of Javascript scripting and LLM calls to populate OpenAPI overlays, which serve as an easily maintainable source of truth for the doc team's augmentation of the API reference documentation. I regenerate the links and descriptions each release.

<div class="image-toggle-container">
    <div class="toggle-controls">
        <button class="toggle-btn active" onclick="showImage(1, this.closest('.image-toggle-container'))">Before</button>
        <button class="toggle-btn" onclick="showImage(2, this.closest('.image-toggle-container'))">After</button>
    </div>
    
<div class="images-wrapper">
    <div class="image-container">
        <img src="/personal-site/apirefbeforemapping.jpg" alt="Screencap of Guidewire Billing API references with callout that states 'No code samples' with an arrow to where the code samples are supposed to be.">
        <img src="/personal-site/apirefaftermapping.jpg" alt="Screencap of Guidewire Billing API references with callout highlighting code samples. There are samples for cURL, Javascript, Python, Java, and Go.">
    </div>   
</div>
<p style="text-align: center; font-size: 14px; opacity: 50%;">Click image to expand</p>
</div>
    

I'm still working on using these overlays to remove extraneous metadata fields, and I'm experimenting with keeping example requests and responses in them as well.


