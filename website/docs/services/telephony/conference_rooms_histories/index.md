--- 
title: conference_rooms_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - conference_rooms_histories
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

Creates, updates, deletes, gets or lists a <code>conference_rooms_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conference_rooms_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.conference_rooms_histories" /></td></tr>
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
    <td>The id of the conference history</td>
</tr>
<tr>
    <td><CopyableCode code="count_connections" /></td>
    <td><code>integer</code></td>
    <td>The count of connections to the conference (wire: countConnections)</td>
</tr>
<tr>
    <td><CopyableCode code="count_participants" /></td>
    <td><code>integer</code></td>
    <td>The count of unique participants of the conference (wire: countParticipants)</td>
</tr>
<tr>
    <td><CopyableCode code="date_begin" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the conference began (wire: dateBegin)</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the conference end (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the conference in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The events of the conference (participants joining/left)</td>
</tr>
<tr>
    <td><CopyableCode code="record_url" /></td>
    <td><code>string</code></td>
    <td>The audio record url if you set recording (wire: recordUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List past conferences on your number

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
    <td>The id of the conference history</td>
</tr>
<tr>
    <td><CopyableCode code="count_connections" /></td>
    <td><code>integer</code></td>
    <td>The count of connections to the conference (wire: countConnections)</td>
</tr>
<tr>
    <td><CopyableCode code="count_participants" /></td>
    <td><code>integer</code></td>
    <td>The count of unique participants of the conference (wire: countParticipants)</td>
</tr>
<tr>
    <td><CopyableCode code="date_begin" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the conference began (wire: dateBegin)</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the conference end (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the conference in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The events of the conference (participants joining/left)</td>
</tr>
<tr>
    <td><CopyableCode code="record_url" /></td>
    <td><code>string</code></td>
    <td>The audio record url if you set recording (wire: recordUrl)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-room_number"><code>room_number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a past conference</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-room_number"><code>room_number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-date_begin.from"><code>date_begin.from</code></a>, <a href="#parameter-date_begin.to"><code>date_begin.to</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List past conferences</td>
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
    <td>Id of the object</td>
</tr>
<tr id="parameter-room_number">
    <td><CopyableCode code="room_number" /></td>
    <td><code>integer</code></td>
    <td>The conference room number (wire: roomNumber)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr id="parameter-date_begin.from">
    <td><CopyableCode code="date_begin.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of dateBegin property (&gt;=) (wire: dateBegin.from)</td>
</tr>
<tr id="parameter-date_begin.to">
    <td><CopyableCode code="date_begin.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of dateBegin property (&lt;=) (wire: dateBegin.to)</td>
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

Get a past conference

```sql
SELECT
id,
count_connections,
count_participants,
date_begin,
date_end,
duration,
events,
record_url
FROM ovh.telephony.conference_rooms_histories
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND room_number = '{{ room_number }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List past conferences

```sql
SELECT
id,
count_connections,
count_participants,
date_begin,
date_end,
duration,
events,
record_url
FROM ovh.telephony.conference_rooms_histories
WHERE billing_account = '{{ billing_account }}' -- required
AND room_number = '{{ room_number }}' -- required
AND service_name = '{{ service_name }}' -- required
AND date_begin.from = '{{ date_begin.from }}'
AND date_begin.to = '{{ date_begin.to }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
