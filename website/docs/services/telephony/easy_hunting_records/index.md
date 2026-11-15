--- 
title: easy_hunting_records
hide_title: false
hide_table_of_contents: false
keywords:
  - easy_hunting_records
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

Creates, updates, deletes, gets or lists an <code>easy_hunting_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="easy_hunting_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.easy_hunting_records" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_name" /></td>
    <td><code>string</code></td>
    <td>The caller name of the recorded call (wire: callerIdName)</td>
</tr>
<tr>
    <td><CopyableCode code="agent" /></td>
    <td><code>string</code></td>
    <td>The agent number of the recorded call</td>
</tr>
<tr>
    <td><CopyableCode code="call_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the recorded call (wire: callEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="call_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The begin date of the recorded call (wire: callStart)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_number" /></td>
    <td><code>string</code></td>
    <td>The caller number of the recorded call (wire: callerIdNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string</code></td>
    <td>The destination number of the recorded call (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration in seconds of the recorded call</td>
</tr>
<tr>
    <td><CopyableCode code="file_url" /></td>
    <td><code>string</code></td>
    <td>The record sound url (wire: fileUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The PABX records

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_name" /></td>
    <td><code>string</code></td>
    <td>The caller name of the recorded call (wire: callerIdName)</td>
</tr>
<tr>
    <td><CopyableCode code="agent" /></td>
    <td><code>string</code></td>
    <td>The agent number of the recorded call</td>
</tr>
<tr>
    <td><CopyableCode code="call_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the recorded call (wire: callEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="call_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The begin date of the recorded call (wire: callStart)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_number" /></td>
    <td><code>string</code></td>
    <td>The caller number of the recorded call (wire: callerIdNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string</code></td>
    <td>The destination number of the recorded call (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration in seconds of the recorded call</td>
</tr>
<tr>
    <td><CopyableCode code="file_url" /></td>
    <td><code>string</code></td>
    <td>The record sound url (wire: fileUrl)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a call recording</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List call recordings</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a call recording</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td></td>
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

Get a call recording

```sql
SELECT
id,
caller_id_name,
agent,
call_end,
call_start,
caller_id_number,
destination_number,
duration,
file_url
FROM ovh.telephony.easy_hunting_records
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List call recordings

```sql
SELECT
id,
caller_id_name,
agent,
call_end,
call_start,
caller_id_number,
destination_number,
duration,
file_url
FROM ovh.telephony.easy_hunting_records
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
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

Delete a call recording

```sql
DELETE FROM ovh.telephony.easy_hunting_records
WHERE billing_account = '{{ billing_account }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
