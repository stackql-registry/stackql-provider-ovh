--- 
title: ovh_pabx_hunting_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_pabx_hunting_queues
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

Creates, updates, deletes, gets or lists an <code>ovh_pabx_hunting_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_pabx_hunting_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.ovh_pabx_hunting_queues" /></td></tr>
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
    <td><CopyableCode code="queue_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: queueId)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_closure" /></td>
    <td><code>string</code></td>
    <td>Action executed when there is no member in queue (playback, voicemail) (wire: actionOnClosure)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_closure_param" /></td>
    <td><code>string</code></td>
    <td>The additionnal parameter of the on closure action (wire: actionOnClosureParam)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_overflow" /></td>
    <td><code>string</code></td>
    <td>Action executed when caller enters a full queue (playback, voicemail) (wire: actionOnOverflow)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_overflow_param" /></td>
    <td><code>string</code></td>
    <td>The additionnal parameter of the overflow action (wire: actionOnOverflowParam)</td>
</tr>
<tr>
    <td><CopyableCode code="ask_for_record_disabling" /></td>
    <td><code>boolean</code></td>
    <td>Allow the caller to disable call record by pressing a key (wire: askForRecordDisabling)</td>
</tr>
<tr>
    <td><CopyableCode code="confirm_key" /></td>
    <td><code>string</code></td>
    <td>The key that tells the IVR that digit-entry is finished. Also used as a "repeat" key in the menus when no input is expected. (#, *, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9) (wire: confirmKey)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The name of the queue</td>
</tr>
<tr>
    <td><CopyableCode code="follow_call_forwards" /></td>
    <td><code>boolean</code></td>
    <td>Follow the calls forwarding (wire: followCallForwards)</td>
</tr>
<tr>
    <td><CopyableCode code="max_member" /></td>
    <td><code>integer</code></td>
    <td>The maximum of people waiting in the queue (wire: maxMember)</td>
</tr>
<tr>
    <td><CopyableCode code="max_wait_time" /></td>
    <td><code>integer</code></td>
    <td>The maximum waiting time (in seconds) in the queue (wire: maxWaitTime)</td>
</tr>
<tr>
    <td><CopyableCode code="record" /></td>
    <td><code>boolean</code></td>
    <td>Enable record on calls in queue</td>
</tr>
<tr>
    <td><CopyableCode code="record_disabling_digit" /></td>
    <td><code>integer</code></td>
    <td>Key to press to disable record (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) (wire: recordDisablingDigit)</td>
</tr>
<tr>
    <td><CopyableCode code="record_disabling_language" /></td>
    <td><code>string</code></td>
    <td>Language of the sound played to the caller to inform that he can disable record (english, french) (wire: recordDisablingLanguage)</td>
</tr>
<tr>
    <td><CopyableCode code="sound_on_hold" /></td>
    <td><code>integer</code></td>
    <td>The id of the OvhPabxSound played to caller when on hold (wire: soundOnHold)</td>
</tr>
<tr>
    <td><CopyableCode code="strategy" /></td>
    <td><code>string</code></td>
    <td>The calls dispatching strategy (cumulationByAgentOrder, longestHangupAgent, longestIdleAgent, random, ringAll, roundRobin, sequentiallyByAgentOrder)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Calls queue

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
    <td><CopyableCode code="queue_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: queueId)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_closure" /></td>
    <td><code>string</code></td>
    <td>Action executed when there is no member in queue (playback, voicemail) (wire: actionOnClosure)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_closure_param" /></td>
    <td><code>string</code></td>
    <td>The additionnal parameter of the on closure action (wire: actionOnClosureParam)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_overflow" /></td>
    <td><code>string</code></td>
    <td>Action executed when caller enters a full queue (playback, voicemail) (wire: actionOnOverflow)</td>
</tr>
<tr>
    <td><CopyableCode code="action_on_overflow_param" /></td>
    <td><code>string</code></td>
    <td>The additionnal parameter of the overflow action (wire: actionOnOverflowParam)</td>
</tr>
<tr>
    <td><CopyableCode code="ask_for_record_disabling" /></td>
    <td><code>boolean</code></td>
    <td>Allow the caller to disable call record by pressing a key (wire: askForRecordDisabling)</td>
</tr>
<tr>
    <td><CopyableCode code="confirm_key" /></td>
    <td><code>string</code></td>
    <td>The key that tells the IVR that digit-entry is finished. Also used as a "repeat" key in the menus when no input is expected. (#, *, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9) (wire: confirmKey)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The name of the queue</td>
</tr>
<tr>
    <td><CopyableCode code="follow_call_forwards" /></td>
    <td><code>boolean</code></td>
    <td>Follow the calls forwarding (wire: followCallForwards)</td>
</tr>
<tr>
    <td><CopyableCode code="max_member" /></td>
    <td><code>integer</code></td>
    <td>The maximum of people waiting in the queue (wire: maxMember)</td>
</tr>
<tr>
    <td><CopyableCode code="max_wait_time" /></td>
    <td><code>integer</code></td>
    <td>The maximum waiting time (in seconds) in the queue (wire: maxWaitTime)</td>
</tr>
<tr>
    <td><CopyableCode code="record" /></td>
    <td><code>boolean</code></td>
    <td>Enable record on calls in queue</td>
</tr>
<tr>
    <td><CopyableCode code="record_disabling_digit" /></td>
    <td><code>integer</code></td>
    <td>Key to press to disable record (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) (wire: recordDisablingDigit)</td>
</tr>
<tr>
    <td><CopyableCode code="record_disabling_language" /></td>
    <td><code>string</code></td>
    <td>Language of the sound played to the caller to inform that he can disable record (english, french) (wire: recordDisablingLanguage)</td>
</tr>
<tr>
    <td><CopyableCode code="sound_on_hold" /></td>
    <td><code>integer</code></td>
    <td>The id of the OvhPabxSound played to caller when on hold (wire: soundOnHold)</td>
</tr>
<tr>
    <td><CopyableCode code="strategy" /></td>
    <td><code>string</code></td>
    <td>The calls dispatching strategy (cumulationByAgentOrder, longestHangupAgent, longestIdleAgent, random, ringAll, roundRobin, sequentiallyByAgentOrder)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a queue</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List queues</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-strategy"><code>strategy</code></a></td>
    <td></td>
    <td>Create a queue</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a queue</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a queue</td>
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
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: queueId)</td>
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

Get a queue

```sql
SELECT
queue_id,
action_on_closure,
action_on_closure_param,
action_on_overflow,
action_on_overflow_param,
ask_for_record_disabling,
confirm_key,
description,
follow_call_forwards,
max_member,
max_wait_time,
record,
record_disabling_digit,
record_disabling_language,
sound_on_hold,
strategy
FROM ovh.telephony.ovh_pabx_hunting_queues
WHERE billing_account = '{{ billing_account }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List queues

```sql
SELECT
queue_id,
action_on_closure,
action_on_closure_param,
action_on_overflow,
action_on_overflow_param,
ask_for_record_disabling,
confirm_key,
description,
follow_call_forwards,
max_member,
max_wait_time,
record,
record_disabling_digit,
record_disabling_language,
sound_on_hold,
strategy
FROM ovh.telephony.ovh_pabx_hunting_queues
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

Create a queue

```sql
INSERT INTO ovh.telephony.ovh_pabx_hunting_queues (
action_on_closure,
action_on_closure_param,
action_on_overflow,
action_on_overflow_param,
ask_for_record_disabling,
description,
max_member,
max_wait_time,
record,
record_disabling_digit,
record_disabling_language,
sound_on_hold,
strategy,
billing_account,
service_name
)
SELECT 
'{{ action_on_closure }}',
'{{ action_on_closure_param }}',
'{{ action_on_overflow }}',
'{{ action_on_overflow_param }}',
{{ ask_for_record_disabling }},
'{{ description }}',
{{ max_member }},
{{ max_wait_time }},
{{ record }},
{{ record_disabling_digit }},
'{{ record_disabling_language }}',
{{ sound_on_hold }},
'{{ strategy }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
queue_id,
action_on_closure,
action_on_closure_param,
action_on_overflow,
action_on_overflow_param,
ask_for_record_disabling,
confirm_key,
description,
follow_call_forwards,
max_member,
max_wait_time,
record,
record_disabling_digit,
record_disabling_language,
sound_on_hold,
strategy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ovh_pabx_hunting_queues
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the ovh_pabx_hunting_queues resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ovh_pabx_hunting_queues resource.
    - name: action_on_closure
      value: "{{ action_on_closure }}"
      description: |
        Action executed when there is no member in queue
      valid_values: ['playback', 'voicemail']
    - name: action_on_closure_param
      value: "{{ action_on_closure_param }}"
      description: |
        The additionnal parameter of the on closure action
    - name: action_on_overflow
      value: "{{ action_on_overflow }}"
      description: |
        Action executed when caller enters a full queue
      valid_values: ['playback', 'voicemail']
    - name: action_on_overflow_param
      value: "{{ action_on_overflow_param }}"
      description: |
        The additionnal parameter of the overflow action
    - name: ask_for_record_disabling
      value: {{ ask_for_record_disabling }}
      description: |
        Allow the caller to disable call record by pressing a key
    - name: description
      value: "{{ description }}"
      description: |
        The name of the queue
    - name: max_member
      value: {{ max_member }}
      description: |
        The maximum of people waiting in the queue
    - name: max_wait_time
      value: {{ max_wait_time }}
      description: |
        The maximum waiting time (in seconds) in the queue
    - name: record
      value: {{ record }}
      description: |
        Enable record on calls in queue
    - name: record_disabling_digit
      value: {{ record_disabling_digit }}
      description: |
        Key to press to disable record
      valid_values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    - name: record_disabling_language
      value: "{{ record_disabling_language }}"
      description: |
        Language of the sound played to the caller to inform that he can disable record
      valid_values: ['english', 'french']
    - name: sound_on_hold
      value: {{ sound_on_hold }}
      description: |
        The id of the OvhPabxSound played to caller when on hold
    - name: strategy
      value: "{{ strategy }}"
      description: |
        The calls dispatching strategy
      valid_values: ['cumulationByAgentOrder', 'longestHangupAgent', 'longestIdleAgent', 'random', 'ringAll', 'roundRobin', 'sequentiallyByAgentOrder']
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

Update a queue

```sql
UPDATE ovh.telephony.ovh_pabx_hunting_queues
SET 
action_on_closure = '{{ action_on_closure }}',
action_on_closure_param = '{{ action_on_closure_param }}',
action_on_overflow = '{{ action_on_overflow }}',
action_on_overflow_param = '{{ action_on_overflow_param }}',
ask_for_record_disabling = {{ ask_for_record_disabling }},
confirm_key = '{{ confirm_key }}',
description = '{{ description }}',
follow_call_forwards = {{ follow_call_forwards }},
max_member = {{ max_member }},
max_wait_time = {{ max_wait_time }},
record = {{ record }},
record_disabling_digit = {{ record_disabling_digit }},
record_disabling_language = '{{ record_disabling_language }}',
sound_on_hold = {{ sound_on_hold }},
strategy = '{{ strategy }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND queue_id = '{{ queue_id }}' --required
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

Delete a queue

```sql
DELETE FROM ovh.telephony.ovh_pabx_hunting_queues
WHERE billing_account = '{{ billing_account }}' --required
AND queue_id = '{{ queue_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
