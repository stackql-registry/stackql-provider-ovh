--- 
title: startups
hide_title: false
hide_table_of_contents: false
keywords:
  - startups
  - startup
  - ovh
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage ovh resources using SQL
custom_edit_url: null
image: /img/stackql-ovh-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>startups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="startups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.startup.startups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

successful operation

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="acceptance_status" /></td>
    <td><code>string</code></td>
    <td>Acceptance Status (Advanced, AdvancedHandOperated, AdvancedQualified, Banned, Open, Registered, RegisteredQualified, Rejected) (wire: acceptanceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="awarness" /></td>
    <td><code>string</code></td>
    <td>Where did you hear about OVHcloud (Email, EmpactVenture, Event, Facebook, InternetSearch, LinkedIn, OnlineAdvert, Partner, Twitter, Website, WordOfMouth)</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>object</code></td>
    <td>Company information</td>
</tr>
<tr>
    <td><CopyableCode code="event_code" /></td>
    <td><code>string</code></td>
    <td>Code given to startups during events or partnerships. (wire: eventCode)</td>
</tr>
<tr>
    <td><CopyableCode code="fund_raising" /></td>
    <td><code>object</code></td>
    <td>Fund raising info (wire: fundRaising)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>Project information</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get startup status</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-awarness"><code>awarness</code></a>, <a href="#parameter-company"><code>company</code></a>, <a href="#parameter-fund_raising"><code>fund_raising</code></a>, <a href="#parameter-project"><code>project</code></a></td>
    <td></td>
    <td>Register a startup</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get startup status

```sql
SELECT
acceptance_status,
awarness,
company,
event_code,
fund_raising,
project
FROM ovh.startup.startups
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Register a startup

```sql
INSERT INTO ovh.startup.startups (
awarness,
company,
event_code,
fund_raising,
project
)
SELECT 
'{{ awarness }}' /* required */,
'{{ company }}' /* required */,
'{{ event_code }}',
'{{ fund_raising }}' /* required */,
'{{ project }}' /* required */
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: startups
  props:
    - name: awarness
      value: "{{ awarness }}"
      description: |
        Where did you hear about OVHcloud
      valid_values: ['Email', 'EmpactVenture', 'Event', 'Facebook', 'InternetSearch', 'LinkedIn', 'OnlineAdvert', 'Partner', 'Twitter', 'Website', 'WordOfMouth']
    - name: company
      description: |
        Company information
      value:
        detail:
          creationdate: "{{ creationdate }}"
          lastYearTurnover: {{ lastYearTurnover }}
          vatNumber: "{{ vatNumber }}"
        employeesNumber: "{{ employeesNumber }}"
        incubator:
          city: "{{ city }}"
          country: "{{ country }}"
          name: "{{ name }}"
        name: "{{ name }}"
        relatedIndustry: "{{ relatedIndustry }}"
        socialNetwork:
          linkedin: "{{ linkedin }}"
          twitter: "{{ twitter }}"
        societyWebsite: "{{ societyWebsite }}"
    - name: event_code
      value: "{{ event_code }}"
      description: |
        Code given to startups during events or partnerships.
    - name: fund_raising
      description: |
        Fund raising info
      value:
        lastFundraising: "{{ lastFundraising }}"
        plannedFundRaising: "{{ plannedFundRaising }}"
    - name: project
      description: |
        Project information
      value:
        businessModel: "{{ businessModel }}"
        description: "{{ description }}"
        developmentStage: "{{ developmentStage }}"
        productName: "{{ productName }}"
        relatedTechnology:
          - "{{ relatedTechnology }}"
        requirements:
          infrastructureUsing: "{{ infrastructureUsing }}"
          otherCloudProvider: {{ otherCloudProvider }}
          otherCloudProviderInfo: "{{ otherCloudProviderInfo }}"
          technicalNeeds: "{{ technicalNeeds }}"
`}</CodeBlock>

</TabItem>
</Tabs>
