--- 
title: users_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - users_jobs
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

Creates, updates, deletes, gets or lists a <code>users_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.users_jobs" /></td></tr>
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
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="delivered_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: deliveredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_receipt" /></td>
    <td><code>integer</code></td>
    <td> (wire: deliveryReceipt)</td>
</tr>
<tr>
    <td><CopyableCode code="differed_delivery" /></td>
    <td><code>integer</code></td>
    <td> (wire: differedDelivery)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="message_length" /></td>
    <td><code>integer</code></td>
    <td> (wire: messageLength)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_sms" /></td>
    <td><code>integer</code></td>
    <td> (wire: numberOfSms)</td>
</tr>
<tr>
    <td><CopyableCode code="ptt" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="receiver" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sent_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: sentAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Sms job

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
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="delivered_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: deliveredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_receipt" /></td>
    <td><code>integer</code></td>
    <td> (wire: deliveryReceipt)</td>
</tr>
<tr>
    <td><CopyableCode code="differed_delivery" /></td>
    <td><code>integer</code></td>
    <td> (wire: differedDelivery)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="message_length" /></td>
    <td><code>integer</code></td>
    <td> (wire: messageLength)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_sms" /></td>
    <td><code>integer</code></td>
    <td> (wire: numberOfSms)</td>
</tr>
<tr>
    <td><CopyableCode code="ptt" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="receiver" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sent_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: sentAt)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a pending job. Returns the SMS waiting to be sent: receiver, message, number of SMS parts and credits.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List pending jobs. Returns the identifiers of the SMS waiting to be sent. Get a pending job for its receiver, message, number of SMS parts and credits.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Send SMS. Sends an SMS to one or several receivers, given as a list, a CSV document URL or a receiver list. Sending can be delayed, and a validity period drops the message if it is not delivered in time.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a pending job. Cancels the sending of an SMS that is still waiting to be sent, such as a delayed SMS. Sent SMS are in the sent SMS history.</td>
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
    <td><code>integer</code></td>
    <td>Id of the object</td>
</tr>
<tr id="parameter-login">
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The sms user login</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Get a pending job. Returns the SMS waiting to be sent: receiver, message, number of SMS parts and credits.

```sql
SELECT
id,
creation_datetime,
credits,
delivered_at,
delivery_receipt,
differed_delivery,
message,
message_length,
number_of_sms,
ptt,
receiver,
sender,
sent_at
FROM ovh.sms.users_jobs
WHERE id = '{{ id }}' -- required
AND login = '{{ login }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List pending jobs. Returns the identifiers of the SMS waiting to be sent. Get a pending job for its receiver, message, number of SMS parts and credits.

```sql
SELECT
id,
creation_datetime,
credits,
delivered_at,
delivery_receipt,
differed_delivery,
message,
message_length,
number_of_sms,
ptt,
receiver,
sender,
sent_at
FROM ovh.sms.users_jobs
WHERE login = '{{ login }}' -- required
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

Send SMS. Sends an SMS to one or several receivers, given as a list, a CSV document URL or a receiver list. Sending can be delayed, and a validity period drops the message if it is not delivered in time.

```sql
INSERT INTO ovh.sms.users_jobs (
charset,
class,
coding,
differed_period,
message,
no_stop_clause,
priority,
receivers,
receivers_document_url,
receivers_slot_id,
sender,
sender_for_response,
tag,
validity_period,
login,
service_name
)
SELECT 
'{{ charset }}',
'{{ class }}',
'{{ coding }}',
{{ differed_period }},
'{{ message }}' /* required */,
{{ no_stop_clause }},
'{{ priority }}',
'{{ receivers }}',
'{{ receivers_document_url }}',
'{{ receivers_slot_id }}',
'{{ sender }}',
{{ sender_for_response }},
'{{ tag }}',
{{ validity_period }},
'{{ login }}',
'{{ service_name }}'
RETURNING
credits_left,
ids,
invalid_receivers,
tag,
total_credits_removed,
valid_receivers
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users_jobs
  props:
    - name: login
      value: "{{ login }}"
      description: Required parameter for the users_jobs resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the users_jobs resource.
    - name: charset
      value: "{{ charset }}"
      description: |
        The sms coding
      valid_values: ['UTF-8']
    - name: class
      value: "{{ class }}"
      description: |
        Deprecated: The sms class
      valid_values: ['flash', 'phoneDisplay', 'sim', 'toolkit']
    - name: coding
      value: "{{ coding }}"
      description: |
        Deprecated: the coding is deduced from the message and its charset
      valid_values: ['7bit', '8bit']
    - name: differed_period
      value: {{ differed_period }}
      description: |
        The time -in minute(s)- to wait before sending the message
    - name: message
      value: "{{ message }}"
      description: |
        The sms message
    - name: no_stop_clause
      value: {{ no_stop_clause }}
      description: |
        Do not display STOP clause in the message, this requires that this is not an advertising message
    - name: priority
      value: "{{ priority }}"
      description: |
        The priority of the message
      valid_values: ['high', 'low', 'medium', 'veryLow']
    - name: receivers
      value:
        - "{{ receivers }}"
      description: |
        The receivers list
    - name: receivers_document_url
      value: "{{ receivers_document_url }}"
      description: |
        The receivers document url link in csv format
    - name: receivers_slot_id
      value: "{{ receivers_slot_id }}"
      description: |
        The receivers document slot id
    - name: sender
      value: "{{ sender }}"
      description: |
        The sender
    - name: sender_for_response
      value: {{ sender_for_response }}
      description: |
        Set the flag to send a special sms which can be reply by the receiver (smsResponse).
    - name: tag
      value: "{{ tag }}"
      description: |
        The identifier group tag
    - name: validity_period
      value: {{ validity_period }}
      description: |
        The maximum time -in minute(s)- before the message is dropped
`}</CodeBlock>

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

Delete a pending job. Cancels the sending of an SMS that is still waiting to be sent, such as a delayed SMS. Sent SMS are in the sent SMS history.

```sql
DELETE FROM ovh.sms.users_jobs
WHERE id = '{{ id }}' --required
AND login = '{{ login }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
