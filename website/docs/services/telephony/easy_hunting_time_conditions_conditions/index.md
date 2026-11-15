--- 
title: easy_hunting_time_conditions_conditions
hide_title: false
hide_table_of_contents: false
keywords:
  - easy_hunting_time_conditions_conditions
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

Creates, updates, deletes, gets or lists an <code>easy_hunting_time_conditions_conditions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="easy_hunting_time_conditions_conditions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.easy_hunting_time_conditions_conditions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
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
    <td><CopyableCode code="condition_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: conditionId)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The policy of time condition (available, slot1, slot2, slot3)</td>
</tr>
<tr>
    <td><CopyableCode code="time_from" /></td>
    <td><code>string (time)</code></td>
    <td>The time of the day when the extension will start to be executed (example: 15:04:05) (wire: timeFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="time_to" /></td>
    <td><code>string (time)</code></td>
    <td>The time of the day when the extension will stop to be executed (example: 15:04:05) (wire: timeTo)</td>
</tr>
<tr>
    <td><CopyableCode code="week_day" /></td>
    <td><code>string</code></td>
    <td>The day of the week when the extension will be executed (friday, monday, saturday, sunday, thursday, tuesday, wednesday) (wire: weekDay)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Easy hunting time conditions

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
    <td><CopyableCode code="condition_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: conditionId)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The policy of time condition (available, slot1, slot2, slot3)</td>
</tr>
<tr>
    <td><CopyableCode code="time_from" /></td>
    <td><code>string (time)</code></td>
    <td>The time of the day when the extension will start to be executed (example: 15:04:05) (wire: timeFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="time_to" /></td>
    <td><code>string (time)</code></td>
    <td>The time of the day when the extension will stop to be executed (example: 15:04:05) (wire: timeTo)</td>
</tr>
<tr>
    <td><CopyableCode code="week_day" /></td>
    <td><code>string</code></td>
    <td>The day of the week when the extension will be executed (friday, monday, saturday, sunday, thursday, tuesday, wednesday) (wire: weekDay)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a time condition</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-policy"><code>policy</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List time conditions</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-policy"><code>policy</code></a>, <a href="#parameter-time_from"><code>time_from</code></a>, <a href="#parameter-time_to"><code>time_to</code></a>, <a href="#parameter-week_day"><code>week_day</code></a></td>
    <td></td>
    <td>Create a time condition</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a time condition</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a time condition</td>
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
<tr id="parameter-condition_id">
    <td><CopyableCode code="condition_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: conditionId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr id="parameter-policy">
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>Filter the value of policy property (=)</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a time condition

```sql
SELECT
condition_id,
policy,
time_from,
time_to,
week_day
FROM ovh.telephony.easy_hunting_time_conditions_conditions
WHERE billing_account = '{{ billing_account }}' -- required
AND condition_id = '{{ condition_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List time conditions

```sql
SELECT
condition_id,
policy,
time_from,
time_to,
week_day
FROM ovh.telephony.easy_hunting_time_conditions_conditions
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND policy = '{{ policy }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a time condition

```sql
INSERT INTO ovh.telephony.easy_hunting_time_conditions_conditions (
policy,
time_from,
time_to,
week_day,
billing_account,
service_name
)
SELECT 
'{{ policy }}' /* required */,
'{{ time_from }}' /* required */,
'{{ time_to }}' /* required */,
'{{ week_day }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
condition_id,
policy,
time_from,
time_to,
week_day
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: easy_hunting_time_conditions_conditions
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the easy_hunting_time_conditions_conditions resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the easy_hunting_time_conditions_conditions resource.
    - name: policy
      value: "{{ policy }}"
      description: |
        Policy of the time condition
      valid_values: ['available', 'slot1', 'slot2', 'slot3']
    - name: time_from
      value: "{{ time_from }}"
      description: |
        The time of the day when the extension will start to be executed
    - name: time_to
      value: "{{ time_to }}"
      description: |
        The time of the day when the extension will stop to be executed
    - name: week_day
      value: "{{ week_day }}"
      description: |
        The day of the week when the extension will be executed
      valid_values: ['friday', 'monday', 'saturday', 'sunday', 'thursday', 'tuesday', 'wednesday']
`}</CodeBlock>

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

Update a time condition

```sql
UPDATE ovh.telephony.easy_hunting_time_conditions_conditions
SET 
policy = '{{ policy }}',
time_from = '{{ time_from }}',
time_to = '{{ time_to }}',
week_day = '{{ week_day }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND condition_id = '{{ condition_id }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a time condition

```sql
DELETE FROM ovh.telephony.easy_hunting_time_conditions_conditions
WHERE billing_account = '{{ billing_account }}' --required
AND condition_id = '{{ condition_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
