---
title: 'Doc tooling: release notes generator'
draft: false
categories: ["samples"]
params:
    ShowBreadCrumbs: true
---

**Description**: The Release Notes Generator is an internally-developed doc tool app that extracts customer summaries from Jira and outputs them in a DITA file. The app saves writers from needing to manually copy, paste, and format content from Jira each time they create release notes.

I took ownership of the Release Notes Generator from our documentation tool developer team. I have made a number of improvements to the code, and I wrote the following internal documentation on it. 

<hr>

## Release Notes Generator user guide

When you have finalized the customer summaries for a release in Jira, you can use the Release Notes Generator to extract the release notes and output them in a DITA table. You can and paste the DITA table into the release notes. 

The Release Notes Generator is hosted as a build in TeamCity. Run the Release Notes Generator manually when you need to generate release notes. 

### Running the Release Notes Generator

1. Navigate to the [Release Notes Generator build](www.example.com).
2. Select `Run`. The `Run Custom Build Documentation Tools/Generators/Run Release Notes Generator` modal appears. 
3. Select `Parameters`.
4. Specify the configuration parameters. These parameters are used to query for Jiras. See the table below for the full reference. 
5. Select `Run Build`.
6. When the build is complete, navigate to `Artifacts`. 
7. Under `out`, Select the generated file to download it.

### Configuration parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| Jira projects | The Jira projects. If there are spaces in the Jira project, wrap it in quotation marks. Separate projects with commas. The Release Note Generator searches for Jira issues in all these projects. | `IERC,IERS,"PORT TEST"` |
| Jira versions | The number. If there are spaces in the release number, wrap it in quotation marks. Separate versions with commas. | `"Sundance (2025.05.0)","Alpine (2025.06.0)"` |
| Jira components (optional) | A value in the `Components` field in the Jira. For example, a Jira in the `IERC` project has a component of `HazardSuite` to specify that the release note should only be included in the HazardSuite release notes. | `HazardSuite` |
| Release notes type | The type of release note. Can be either `Improvements` or `Known issues`. | `Improvements` or `Known issues` |
| Output file name | The name of the file that the Release Notes Generator outputs. | Defaults to "release-notes" |
| Output file title | The title of the file in the DITA. | Defaults to "Release notes" |
| Include "Application" column | Whether to include an additional column with the name of the application in the output table. Used mainly for InsuranceSuite patch release notes. | N/A |

### Criteria for the Release Notes Generator to retrieve a Jira

For a the Release Notes Generator to retrieve a Jira, the Jira must meet all the parameters you specify. Additionally, a Jira must meet the following criteria:
* Have a status of `Closed`.
* "Release note needed" set to "Yes".
* "Release note complete" set to "Yes".
* The "Customer Summary" field must not be empty.

### Specifying profiling attributes/conditionalization for release notes

The Release Note Generator supports DITA profiling attributes in customer summaries. Profiling attributes are used to conditionalize content. For example, if a release note only applies to a certain product, you can apply the `product` profiling attribute.  

To specify profiling attributes for a release note, include the following text at the beginning of the customer summary. 

```
#attr:<attribute>=<value>#
```

> Note: Do not apply styling such as bold, code, italic, etc. to the profiling attribute. Leave it as plain text.

For example, the following conditionalizes a release note for HazardSuite:

```
#attr:product=HazardSuite#
```

The attribute appears on the `row` element for the release note. The following demonstrates how a customer summary with an attribute applied looks in the customer summary in Jira, and how the Release Notes Generator renders that release note.

**Customer summary:**
```
#attr:product=HazardSuite#
Fixed a bug where the HazardSuite API threw a 500 error if you attempted to PATCH an account's primary contact and the account had a biweekly payment plan.
```
**DITA:**
```xml
<row product="HazardSuite">
<entry>AFHS-2283</entry>
<entry>Fixed a bug where the HazardSuite API threw a 500 error if you attempted to PATCH an account's primary contact and the account had a biweekly payment plan.</entry>
</row>
```

<style>
table {
            border-collapse: collapse; /* Merges adjacent borders into a single border */
            width: 100%; /* Optional: Makes the table span the full width */
        }
th, td {
    border: 1px solid grey; /* Applies a 1px solid black border to all header and data cells */
    padding: 8px; /* Adds space between the content and the border for readability */
    text-align: left; /* Optional: Aligns text to the left */
}
</style>




