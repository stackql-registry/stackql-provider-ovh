--- 
title: conference_participants
hide_title: false
hide_table_of_contents: false
keywords:
  - conference_participants
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

Creates, updates, deletes, gets or lists a <code>conference_participants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conference_participants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.conference_participants" /></td></tr>
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
    <td>The id of the participant</td>
</tr>
<tr>
    <td><CopyableCode code="caller_name" /></td>
    <td><code>string</code></td>
    <td>The caller name of the participant (wire: callerName)</td>
</tr>
<tr>
    <td><CopyableCode code="arrival_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The arrival datetime of the participant in the conference. (wire: arrivalDateTime)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_number" /></td>
    <td><code>string</code></td>
    <td>The caller number of the participant (wire: callerNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="energy" /></td>
    <td><code>integer</code></td>
    <td>The current level of the participant audio transmission</td>
</tr>
<tr>
    <td><CopyableCode code="floor" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant is active in the room</td>
</tr>
<tr>
    <td><CopyableCode code="hear" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant can hear the conference</td>
</tr>
<tr>
    <td><CopyableCode code="speak" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant can talk in the conference</td>
</tr>
<tr>
    <td><CopyableCode code="talking" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant is talking</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Conference service

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
    <td>The id of the participant</td>
</tr>
<tr>
    <td><CopyableCode code="caller_name" /></td>
    <td><code>string</code></td>
    <td>The caller name of the participant (wire: callerName)</td>
</tr>
<tr>
    <td><CopyableCode code="arrival_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The arrival datetime of the participant in the conference. (wire: arrivalDateTime)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_number" /></td>
    <td><code>string</code></td>
    <td>The caller number of the participant (wire: callerNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="energy" /></td>
    <td><code>integer</code></td>
    <td>The current level of the participant audio transmission</td>
</tr>
<tr>
    <td><CopyableCode code="floor" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant is active in the room</td>
</tr>
<tr>
    <td><CopyableCode code="hear" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant can hear the conference</td>
</tr>
<tr>
    <td><CopyableCode code="speak" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant can talk in the conference</td>
</tr>
<tr>
    <td><CopyableCode code="talking" /></td>
    <td><code>boolean</code></td>
    <td>Whether the participant is talking</td>
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
    <td>Get a participant</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List participants</td>
</tr>
<tr>
    <td><a href="#deaf"><CopyableCode code="deaf" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Deafen a participant</td>
</tr>
<tr>
    <td><a href="#energy"><CopyableCode code="energy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Change a participant audio level</td>
</tr>
<tr>
    <td><a href="#kick"><CopyableCode code="kick" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Eject a participant</td>
</tr>
<tr>
    <td><a href="#mute"><CopyableCode code="mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Mute a participant</td>
</tr>
<tr>
    <td><a href="#undeaf"><CopyableCode code="undeaf" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Undeafen a participant</td>
</tr>
<tr>
    <td><a href="#unmute"><CopyableCode code="unmute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Unmute a participant</td>
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

Get a participant

```sql
SELECT
id,
caller_name,
arrival_date_time,
caller_number,
energy,
floor,
hear,
speak,
talking
FROM ovh.telephony.conference_participants
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List participants

```sql
SELECT
id,
caller_name,
arrival_date_time,
caller_number,
energy,
floor,
hear,
speak,
talking
FROM ovh.telephony.conference_participants
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
    defaultValue="deaf"
    values={[
        { label: 'deaf', value: 'deaf' },
        { label: 'energy', value: 'energy' },
        { label: 'kick', value: 'kick' },
        { label: 'mute', value: 'mute' },
        { label: 'undeaf', value: 'undeaf' },
        { label: 'unmute', value: 'unmute' }
    ]}
>
<TabItem value="deaf">

Deafen a participant

```sql
EXEC ovh.telephony.conference_participants.deaf 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="energy">

Change a participant audio level

```sql
EXEC ovh.telephony.conference_participants.energy 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"value": {{ value }}
}'
;
```
</TabItem>
<TabItem value="kick">

Eject a participant

```sql
EXEC ovh.telephony.conference_participants.kick 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="mute">

Mute a participant

```sql
EXEC ovh.telephony.conference_participants.mute 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="undeaf">

Undeafen a participant

```sql
EXEC ovh.telephony.conference_participants.undeaf 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="unmute">

Unmute a participant

```sql
EXEC ovh.telephony.conference_participants.unmute 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
