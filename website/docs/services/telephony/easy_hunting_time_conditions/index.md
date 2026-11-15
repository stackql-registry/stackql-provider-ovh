--- 
title: easy_hunting_time_conditions
hide_title: false
hide_table_of_contents: false
keywords:
  - easy_hunting_time_conditions
  - telephony
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

Creates, updates, deletes, gets or lists an <code>easy_hunting_time_conditions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="easy_hunting_time_conditions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.easy_hunting_time_conditions" /></td></tr>
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
    <td><CopyableCode code="enable" /></td>
    <td><code>boolean</code></td>
    <td>Status of time conditions</td>
</tr>
<tr>
    <td><CopyableCode code="slot_1_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Number associated to the first slot action (wire: slot1Number)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_1_type" /></td>
    <td><code>string</code></td>
    <td>Action type executed when the first slot is used (number, voicemail) (wire: slot1Type)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_2_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Number associated to the second slot action (wire: slot2Number)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_2_type" /></td>
    <td><code>string</code></td>
    <td>Action type executed when the second slot is used (number, voicemail) (wire: slot2Type)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_3_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Number associated to the third slot action (wire: slot3Number)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_3_type" /></td>
    <td><code>string</code></td>
    <td>Action type executed when the third slot is used (number, voicemail) (wire: slot3Type)</td>
</tr>
<tr>
    <td><CopyableCode code="unavailable_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Number associated to the unavailable slot action (wire: unavailableNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="unavailable_type" /></td>
    <td><code>string</code></td>
    <td>Action type executed when the unavailable slot is used (number, voicemail) (wire: unavailableType)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the time condition settings</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the time condition settings</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get the time condition settings

```sql
SELECT
enable,
slot_1_number,
slot_1_type,
slot_2_number,
slot_2_type,
slot_3_number,
slot_3_type,
unavailable_number,
unavailable_type
FROM ovh.telephony.easy_hunting_time_conditions
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update the time condition settings

```sql
UPDATE ovh.telephony.easy_hunting_time_conditions
SET 
enable = {{ enable }},
slot_1_number = '{{ slot_1_number }}',
slot_1_type = '{{ slot_1_type }}',
slot_2_number = '{{ slot_2_number }}',
slot_2_type = '{{ slot_2_type }}',
slot_3_number = '{{ slot_3_number }}',
slot_3_type = '{{ slot_3_type }}',
unavailable_number = '{{ unavailable_number }}',
unavailable_type = '{{ unavailable_type }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
