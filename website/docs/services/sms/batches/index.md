--- 
title: batches
hide_title: false
hide_table_of_contents: false
keywords:
  - batches
  - sms
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

Creates, updates, deletes, gets or lists a <code>batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.batches" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>Batch ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Batch name</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>integer</code></td>
    <td>SMS account ID (wire: accountID)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_id" /></td>
    <td><code>string</code></td>
    <td>Slot ID (wire: slotID)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Details on error(s) on the batch, if any</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_credits" /></td>
    <td><code>number</code></td>
    <td>The estimated cost of the batch in credits (wire: estimatedCredits)</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime when the batch finished processing SMSs (wire: finishedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>SMS sender</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>SMS message</td>
</tr>
<tr>
    <td><CopyableCode code="processed_records" /></td>
    <td><code>integer</code></td>
    <td>Number of processed records in this batch (wire: processedRecords)</td>
</tr>
<tr>
    <td><CopyableCode code="receivers" /></td>
    <td><code>array</code></td>
    <td>SMS receivers list</td>
</tr>
<tr>
    <td><CopyableCode code="sent_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime when the SMSs of the batch are sent (based on deferred time if exists) (wire: sentAt)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime when the batch started processing SMSs (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Batch status (CANCELED, CANCELING, COMPLETED, FAILED, INSERTED, INSERTING, PENDING, TO_CANCEL)</td>
</tr>
<tr>
    <td><CopyableCode code="total_records" /></td>
    <td><code>integer</code></td>
    <td>Total number of records in this batch (wire: totalRecords)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update datetime (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Batch of SMS to send

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
    <td><code>string (uuid)</code></td>
    <td>Batch ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Batch name</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>integer</code></td>
    <td>SMS account ID (wire: accountID)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_id" /></td>
    <td><code>string</code></td>
    <td>Slot ID (wire: slotID)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Details on error(s) on the batch, if any</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_credits" /></td>
    <td><code>number</code></td>
    <td>The estimated cost of the batch in credits (wire: estimatedCredits)</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime when the batch finished processing SMSs (wire: finishedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>SMS sender</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>SMS message</td>
</tr>
<tr>
    <td><CopyableCode code="processed_records" /></td>
    <td><code>integer</code></td>
    <td>Number of processed records in this batch (wire: processedRecords)</td>
</tr>
<tr>
    <td><CopyableCode code="receivers" /></td>
    <td><code>array</code></td>
    <td>SMS receivers list</td>
</tr>
<tr>
    <td><CopyableCode code="sent_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime when the SMSs of the batch are sent (based on deferred time if exists) (wire: sentAt)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime when the batch started processing SMSs (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Batch status (CANCELED, CANCELING, COMPLETED, FAILED, INSERTED, INSERTING, PENDING, TO_CANCEL)</td>
</tr>
<tr>
    <td><CopyableCode code="total_records" /></td>
    <td><code>integer</code></td>
    <td>Total number of records in this batch (wire: totalRecords)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update datetime (wire: updatedAt)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the batch: message, sender, receivers, status, estimated credits and errors.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the batches of the SMS account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Creates a batch that sends one message to a list of receivers or to a receiver list. Set a sender, or ask for one that allows replies. Sending can be deferred to a later date.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the batch name.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the batch.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Cancels a batch scheduled for later. Only possible if no SMS of the batch has been sent yet.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Returns the batch: message, sender, receivers, status, estimated credits and errors.

```sql
SELECT
id,
name,
account_id,
slot_id,
created_at,
errors,
estimated_credits,
finished_at,
from,
message,
processed_records,
receivers,
sent_at,
started_at,
status,
total_records,
updated_at
FROM ovh.sms.batches
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the batches of the SMS account.

```sql
SELECT
id,
name,
account_id,
slot_id,
created_at,
errors,
estimated_credits,
finished_at,
from,
message,
processed_records,
receivers,
sent_at,
started_at,
status,
total_records,
updated_at
FROM ovh.sms.batches
WHERE service_name = '{{ service_name }}' -- required
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

Creates a batch that sends one message to a list of receivers or to a receiver list. Set a sender, or ask for one that allows replies. Sending can be deferred to a later date.

```sql
INSERT INTO ovh.sms.batches (
class,
deferred,
from,
message,
name,
no_stop,
sender_for_response,
slot_id,
tag,
to,
service_name
)
SELECT 
'{{ class }}',
'{{ deferred }}',
'{{ from }}',
'{{ message }}' /* required */,
'{{ name }}',
{{ no_stop }},
{{ sender_for_response }},
'{{ slot_id }}',
'{{ tag }}',
'{{ to }}',
'{{ service_name }}'
RETURNING
id,
name,
account_id,
slot_id,
created_at,
errors,
estimated_credits,
finished_at,
from,
message,
processed_records,
receivers,
sent_at,
started_at,
status,
total_records,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: batches
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the batches resource.
    - name: class
      value: "{{ class }}"
      description: |
        Deprecated: SMS class
      valid_values: ['FLASH', 'PHONE', 'SIM']
    - name: deferred
      value: "{{ deferred }}"
      description: |
        SMS deferred sending date
    - name: from
      value: "{{ from }}"
      description: |
        SMS sender. Either "from" or "senderForResponse" must be passed
    - name: message
      value: "{{ message }}"
      description: |
        SMS message
    - name: name
      value: "{{ name }}"
      description: |
        Batch name
    - name: no_stop
      value: {{ no_stop }}
      description: |
        STOP clause not needed
    - name: sender_for_response
      value: {{ sender_for_response }}
      description: |
        Ask to compute a sender that allows response. Either "from" or "senderForResponse" must be passed
    - name: slot_id
      value: "{{ slot_id }}"
      description: |
        SMS receivers slot ID. Either "to" or "slotID" must be passed
    - name: tag
      value: "{{ tag }}"
      description: |
        SMS tag
    - name: to
      value:
        - "{{ to }}"
      description: |
        SMS receivers list. Either "to" or "slotID" must be passed
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

Updates the batch name.

```sql
UPDATE ovh.sms.batches
SET 
name = '{{ name }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
account_id,
slot_id,
created_at,
errors,
estimated_credits,
finished_at,
from,
message,
processed_records,
receivers,
sent_at,
started_at,
status,
total_records,
updated_at;
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

Deletes the batch.

```sql
DELETE FROM ovh.sms.batches
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels a batch scheduled for later. Only possible if no SMS of the batch has been sent yet.

```sql
EXEC ovh.sms.batches.cancel 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
