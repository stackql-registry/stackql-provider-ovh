--- 
title: ovh_pabx_dialplan_extension_condition_times
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_pabx_dialplan_extension_condition_times
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

Creates, updates, deletes, gets or lists an <code>ovh_pabx_dialplan_extension_condition_times</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_pabx_dialplan_extension_condition_times" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.ovh_pabx_dialplan_extension_condition_times" /></td></tr>
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

Time condition

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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a time condition</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List time conditions</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-time_from"><code>time_from</code></a>, <a href="#parameter-time_to"><code>time_to</code></a>, <a href="#parameter-week_day"><code>week_day</code></a></td>
    <td></td>
    <td>Create a time condition</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a time condition</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
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
<tr id="parameter-dialplan_id">
    <td><CopyableCode code="dialplan_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: dialplanId)</td>
</tr>
<tr id="parameter-extension_id">
    <td><CopyableCode code="extension_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: extensionId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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
time_from,
time_to,
week_day
FROM ovh.telephony.ovh_pabx_dialplan_extension_condition_times
WHERE billing_account = '{{ billing_account }}' -- required
AND condition_id = '{{ condition_id }}' -- required
AND dialplan_id = '{{ dialplan_id }}' -- required
AND extension_id = '{{ extension_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List time conditions

```sql
SELECT
condition_id,
time_from,
time_to,
week_day
FROM ovh.telephony.ovh_pabx_dialplan_extension_condition_times
WHERE billing_account = '{{ billing_account }}' -- required
AND dialplan_id = '{{ dialplan_id }}' -- required
AND extension_id = '{{ extension_id }}' -- required
AND service_name = '{{ service_name }}' -- required
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
INSERT INTO ovh.telephony.ovh_pabx_dialplan_extension_condition_times (
time_from,
time_to,
week_day,
billing_account,
dialplan_id,
extension_id,
service_name
)
SELECT 
'{{ time_from }}' /* required */,
'{{ time_to }}' /* required */,
'{{ week_day }}' /* required */,
'{{ billing_account }}',
'{{ dialplan_id }}',
'{{ extension_id }}',
'{{ service_name }}'
RETURNING
condition_id,
time_from,
time_to,
week_day
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ovh_pabx_dialplan_extension_condition_times
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_times resource.
    - name: dialplan_id
      value: {{ dialplan_id }}
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_times resource.
    - name: extension_id
      value: {{ extension_id }}
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_times resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_times resource.
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
UPDATE ovh.telephony.ovh_pabx_dialplan_extension_condition_times
SET 
time_from = '{{ time_from }}',
time_to = '{{ time_to }}',
week_day = '{{ week_day }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND condition_id = '{{ condition_id }}' --required
AND dialplan_id = '{{ dialplan_id }}' --required
AND extension_id = '{{ extension_id }}' --required
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
DELETE FROM ovh.telephony.ovh_pabx_dialplan_extension_condition_times
WHERE billing_account = '{{ billing_account }}' --required
AND condition_id = '{{ condition_id }}' --required
AND dialplan_id = '{{ dialplan_id }}' --required
AND extension_id = '{{ extension_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
