--- 
title: conference_rooms
hide_title: false
hide_table_of_contents: false
keywords:
  - conference_rooms
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

Creates, updates, deletes, gets or lists a <code>conference_rooms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conference_rooms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.conference_rooms" /></td></tr>
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
    <td><CopyableCode code="announce_sound_id" /></td>
    <td><code>integer</code></td>
    <td>The announce sound id (wire: announceSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="announce_file" /></td>
    <td><code>boolean</code></td>
    <td>Whether announce file is played before entrance (wire: announceFile)</td>
</tr>
<tr>
    <td><CopyableCode code="announce_filename" /></td>
    <td><code>string</code></td>
    <td>The announce file name (wire: announceFilename)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_rejection" /></td>
    <td><code>boolean</code></td>
    <td>Whether anonymous participants are allowed (wire: anonymousRejection)</td>
</tr>
<tr>
    <td><CopyableCode code="enter_muted" /></td>
    <td><code>boolean</code></td>
    <td>Whether participants enter conference room muted (wire: enterMuted)</td>
</tr>
<tr>
    <td><CopyableCode code="events_channel" /></td>
    <td><code>string</code></td>
    <td>The events channel hash (wire: eventsChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date of the conference room. (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The conference sounds language (de, en, es, fr, it)</td>
</tr>
<tr>
    <td><CopyableCode code="pin" /></td>
    <td><code>string (password)</code></td>
    <td>The conference pin number</td>
</tr>
<tr>
    <td><CopyableCode code="record_status" /></td>
    <td><code>boolean</code></td>
    <td>Whether conference is recorded (wire: recordStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="report_email" /></td>
    <td><code>string</code></td>
    <td>The email address to send conference report to (wire: reportEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="report_status" /></td>
    <td><code>string</code></td>
    <td>The status of the reporting (customer, none, other) (wire: reportStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="room_number" /></td>
    <td><code>integer</code></td>
    <td>The conference room number (wire: roomNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="white_label_report" /></td>
    <td><code>boolean</code></td>
    <td>True if you want to receive a white-labelled mail report of your conference (wire: whiteLabelReport)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Conference room

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
    <td><CopyableCode code="announce_sound_id" /></td>
    <td><code>integer</code></td>
    <td>The announce sound id (wire: announceSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="announce_file" /></td>
    <td><code>boolean</code></td>
    <td>Whether announce file is played before entrance (wire: announceFile)</td>
</tr>
<tr>
    <td><CopyableCode code="announce_filename" /></td>
    <td><code>string</code></td>
    <td>The announce file name (wire: announceFilename)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_rejection" /></td>
    <td><code>boolean</code></td>
    <td>Whether anonymous participants are allowed (wire: anonymousRejection)</td>
</tr>
<tr>
    <td><CopyableCode code="enter_muted" /></td>
    <td><code>boolean</code></td>
    <td>Whether participants enter conference room muted (wire: enterMuted)</td>
</tr>
<tr>
    <td><CopyableCode code="events_channel" /></td>
    <td><code>string</code></td>
    <td>The events channel hash (wire: eventsChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date of the conference room. (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The conference sounds language (de, en, es, fr, it)</td>
</tr>
<tr>
    <td><CopyableCode code="pin" /></td>
    <td><code>string (password)</code></td>
    <td>The conference pin number</td>
</tr>
<tr>
    <td><CopyableCode code="record_status" /></td>
    <td><code>boolean</code></td>
    <td>Whether conference is recorded (wire: recordStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="report_email" /></td>
    <td><code>string</code></td>
    <td>The email address to send conference report to (wire: reportEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="report_status" /></td>
    <td><code>string</code></td>
    <td>The status of the reporting (customer, none, other) (wire: reportStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="room_number" /></td>
    <td><code>integer</code></td>
    <td>The conference room number (wire: roomNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="white_label_report" /></td>
    <td><code>boolean</code></td>
    <td>True if you want to receive a white-labelled mail report of your conference (wire: whiteLabelReport)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-room_number"><code>room_number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a conference room</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List conference rooms</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create a conference room</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-room_number"><code>room_number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a conference room</td>
</tr>
<tr>
    <td><a href="#lock"><CopyableCode code="lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-roomNumber"><code>roomNumber</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Lock the conference room</td>
</tr>
<tr>
    <td><a href="#unlock"><CopyableCode code="unlock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-roomNumber"><code>roomNumber</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Unlock the conference room</td>
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
<tr id="parameter-roomNumber">
    <td><CopyableCode code="roomNumber" /></td>
    <td><code>integer</code></td>
    <td>The conference room number</td>
</tr>
<tr id="parameter-room_number">
    <td><CopyableCode code="room_number" /></td>
    <td><code>integer</code></td>
    <td>The conference room number (wire: roomNumber)</td>
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

Get a conference room

```sql
SELECT
announce_sound_id,
announce_file,
announce_filename,
anonymous_rejection,
enter_muted,
events_channel,
expiration_date,
language,
pin,
record_status,
report_email,
report_status,
room_number,
white_label_report
FROM ovh.telephony.conference_rooms
WHERE billing_account = '{{ billing_account }}' -- required
AND room_number = '{{ room_number }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List conference rooms

```sql
SELECT
announce_sound_id,
announce_file,
announce_filename,
anonymous_rejection,
enter_muted,
events_channel,
expiration_date,
language,
pin,
record_status,
report_email,
report_status,
room_number,
white_label_report
FROM ovh.telephony.conference_rooms
WHERE billing_account = '{{ billing_account }}' -- required
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

Create a conference room

```sql
INSERT INTO ovh.telephony.conference_rooms (
room_number,
billing_account,
service_name
)
SELECT 
{{ room_number }},
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
announce_sound_id,
announce_file,
announce_filename,
anonymous_rejection,
enter_muted,
events_channel,
expiration_date,
language,
pin,
record_status,
report_email,
report_status,
room_number,
white_label_report
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: conference_rooms
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the conference_rooms resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the conference_rooms resource.
    - name: room_number
      value: {{ room_number }}
      description: |
        The room number (a random number will be generated if not specified)
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

Update a conference room

```sql
UPDATE ovh.telephony.conference_rooms
SET 
announce_file = {{ announce_file }},
announce_sound_id = {{ announce_sound_id }},
anonymous_rejection = {{ anonymous_rejection }},
enter_muted = {{ enter_muted }},
expiration_date = '{{ expiration_date }}',
language = '{{ language }}',
pin = '{{ pin }}',
record_status = {{ record_status }},
report_email = '{{ report_email }}',
report_status = '{{ report_status }}',
white_label_report = {{ white_label_report }}
WHERE 
billing_account = '{{ billing_account }}' --required
AND room_number = '{{ room_number }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="lock"
    values={[
        { label: 'lock', value: 'lock' },
        { label: 'unlock', value: 'unlock' }
    ]}
>
<TabItem value="lock">

Lock the conference room

```sql
EXEC ovh.telephony.conference_rooms.lock 
@billingAccount='{{ billingAccount }}' --required, 
@roomNumber='{{ roomNumber }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="unlock">

Unlock the conference room

```sql
EXEC ovh.telephony.conference_rooms.unlock 
@billingAccount='{{ billingAccount }}' --required, 
@roomNumber='{{ roomNumber }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
