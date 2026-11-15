--- 
title: eligibility_search_meetings
hide_title: false
hide_table_of_contents: false
keywords:
  - eligibility_search_meetings
  - connectivity
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

Creates, updates, deletes, gets or lists an <code>eligibility_search_meetings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="eligibility_search_meetings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.connectivity.eligibility_search_meetings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-eligibility_reference"><code>eligibility_reference</code></a></td>
    <td></td>
    <td>Returns, as an asynchronous task, the available time slots for a copper line creation or a fiber installation meeting, for an eligibility test reference and a chosen offer.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Returns, as an asynchronous task, the available time slots for a copper line creation or a fiber installation meeting, for an eligibility test reference and a chosen offer.

```sql
INSERT INTO ovh.connectivity.eligibility_search_meetings (
eligibility_reference,
installation_type,
otp,
plan_code,
product_code,
site_company_name,
technical_visit,
type,
unbundling_type
)
SELECT 
'{{ eligibility_reference }}' /* required */,
'{{ installation_type }}',
'{{ otp }}',
'{{ plan_code }}',
'{{ product_code }}',
'{{ site_company_name }}',
'{{ technical_visit }}',
'{{ type }}',
'{{ unbundling_type }}'
RETURNING
error,
result,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: eligibility_search_meetings
  props:
    - name: eligibility_reference
      value: "{{ eligibility_reference }}"
      description: |
        Eligibility test reference
    - name: installation_type
      value: "{{ installation_type }}"
      description: |
        Installation type, for fiber only
      valid_values: ['activate', 'activate_undefined', 'create', 'multiOtp']
    - name: otp
      value: "{{ otp }}"
      description: |
        Fill in this field with your OTP reference if you have one
    - name: plan_code
      value: "{{ plan_code }}"
      description: |
        Offer plan code
    - name: product_code
      value: "{{ product_code }}"
      description: |
        Choosen offer product code
    - name: site_company_name
      value: "{{ site_company_name }}"
      description: |
        Site company name, please use the name and firstname for an individual
    - name: technical_visit
      value: "{{ technical_visit }}"
      description: |
        Special case to ask a technical visit on Fiber installation
      valid_values: ['complex', 'simple']
    - name: type
      value: "{{ type }}"
      description: |
        Offer product type
      valid_values: ['ADSL', 'FTTE', 'FTTH', 'FTTO', 'SDSL', 'VDSL']
    - name: unbundling_type
      value: "{{ unbundling_type }}"
      description: |
        Offer product unbundling type
      valid_values: ['full', 'partial']
`}</CodeBlock>

</TabItem>
</Tabs>
