--- 
title: line_calls
hide_title: false
hide_table_of_contents: false
keywords:
  - line_calls
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

Creates, updates, deletes, gets or lists a <code>line_calls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_calls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_calls" /></td></tr>
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
    <td>Name of the caller (or anonymous if unknown) (wire: callerIdName)</td>
</tr>
<tr>
    <td><CopyableCode code="agent" /></td>
    <td><code>string</code></td>
    <td>Name or number of the agent who answered the call</td>
</tr>
<tr>
    <td><CopyableCode code="answered" /></td>
    <td><code>string (date-time)</code></td>
    <td>Answer date of the call</td>
</tr>
<tr>
    <td><CopyableCode code="begin" /></td>
    <td><code>string (date-time)</code></td>
    <td>Begin date of the call</td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_number" /></td>
    <td><code>string</code></td>
    <td>Phone number of the caller (or anonymous if unknown) (wire: callerIdNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string</code></td>
    <td>Phone number called (in case of an outgoing call) (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="end" /></td>
    <td><code>string (date-time)</code></td>
    <td>End date of the call</td>
</tr>
<tr>
    <td><CopyableCode code="on_hold" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the call is on hold (wire: onHold)</td>
</tr>
<tr>
    <td><CopyableCode code="queue" /></td>
    <td><code>string</code></td>
    <td>Name of the queue of the call</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the call (Answered, Waiting)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Live statistics of the queue

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
    <td>Name of the caller (or anonymous if unknown) (wire: callerIdName)</td>
</tr>
<tr>
    <td><CopyableCode code="agent" /></td>
    <td><code>string</code></td>
    <td>Name or number of the agent who answered the call</td>
</tr>
<tr>
    <td><CopyableCode code="answered" /></td>
    <td><code>string (date-time)</code></td>
    <td>Answer date of the call</td>
</tr>
<tr>
    <td><CopyableCode code="begin" /></td>
    <td><code>string (date-time)</code></td>
    <td>Begin date of the call</td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_number" /></td>
    <td><code>string</code></td>
    <td>Phone number of the caller (or anonymous if unknown) (wire: callerIdNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string</code></td>
    <td>Phone number called (in case of an outgoing call) (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="end" /></td>
    <td><code>string (date-time)</code></td>
    <td>End date of the call</td>
</tr>
<tr>
    <td><CopyableCode code="on_hold" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the call is on hold (wire: onHold)</td>
</tr>
<tr>
    <td><CopyableCode code="queue" /></td>
    <td><code>string</code></td>
    <td>Name of the queue of the call</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the call (Answered, Waiting)</td>
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
    <td>Get a live call (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List live calls (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#eavesdrop"><CopyableCode code="eavesdrop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-number"><code>number</code></a></td>
    <td></td>
    <td>Eavesdrop on a call (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#hangup"><CopyableCode code="hangup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Hang up a call (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#hold"><CopyableCode code="hold" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Toggle hold on a call (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#intercept"><CopyableCode code="intercept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-number"><code>number</code></a></td>
    <td></td>
    <td>Intercept an unanswered call (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#transfer"><CopyableCode code="transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-number"><code>number</code></a></td>
    <td></td>
    <td>Transfer an answered call (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#whisper"><CopyableCode code="whisper" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-number"><code>number</code></a>, <a href="#parameter-whisperingMode"><code>whisperingMode</code></a></td>
    <td></td>
    <td>Whisper on a call (Deprecated, will be removed)</td>
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
<tr id="parameter-billingAccount">
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
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

Get a live call (Deprecated, will be removed)

```sql
SELECT
id,
caller_id_name,
agent,
answered,
begin,
caller_id_number,
destination_number,
end,
on_hold,
queue,
state
FROM ovh.telephony.line_calls
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List live calls (Deprecated, will be removed)

```sql
SELECT
id,
caller_id_name,
agent,
answered,
begin,
caller_id_number,
destination_number,
end,
on_hold,
queue,
state
FROM ovh.telephony.line_calls
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="eavesdrop"
    values={[
        { label: 'eavesdrop', value: 'eavesdrop' },
        { label: 'hangup', value: 'hangup' },
        { label: 'hold', value: 'hold' },
        { label: 'intercept', value: 'intercept' },
        { label: 'transfer', value: 'transfer' },
        { label: 'whisper', value: 'whisper' }
    ]}
>
<TabItem value="eavesdrop">

Eavesdrop on a call (Deprecated, will be removed)

```sql
EXEC ovh.telephony.line_calls.eavesdrop 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"number": "{{ number }}"
}'
;
```
</TabItem>
<TabItem value="hangup">

Hang up a call (Deprecated, will be removed)

```sql
EXEC ovh.telephony.line_calls.hangup 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="hold">

Toggle hold on a call (Deprecated, will be removed)

```sql
EXEC ovh.telephony.line_calls.hold 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="intercept">

Intercept an unanswered call (Deprecated, will be removed)

```sql
EXEC ovh.telephony.line_calls.intercept 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"number": "{{ number }}"
}'
;
```
</TabItem>
<TabItem value="transfer">

Transfer an answered call (Deprecated, will be removed)

```sql
EXEC ovh.telephony.line_calls.transfer 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"number": "{{ number }}"
}'
;
```
</TabItem>
<TabItem value="whisper">

Whisper on a call (Deprecated, will be removed)

```sql
EXEC ovh.telephony.line_calls.whisper 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"number": "{{ number }}", 
"whisperingMode": "{{ whisperingMode }}"
}'
;
```
</TabItem>
</Tabs>
