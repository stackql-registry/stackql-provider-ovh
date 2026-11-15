--- 
title: virtual_numbers_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_numbers_jobs
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

Creates, updates, deletes, gets or lists a <code>virtual_numbers_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_numbers_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.virtual_numbers_jobs" /></td></tr>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a pending job. Returns the SMS waiting to be sent: receiver, message, number of SMS parts and credits.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List pending jobs. Returns the identifiers of the SMS waiting to be sent. Get a pending job for its receiver, message, number of SMS parts and credits.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Send SMS. Sends an SMS to one or several receivers, given as a list, a CSV document URL or a receiver list. Sending can be delayed, and a validity period drops the message if it is not delivered in time.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
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
<tr id="parameter-number">
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The virtual number</td>
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
delivery_receipt,
differed_delivery,
message,
message_length,
number_of_sms,
ptt,
receiver
FROM ovh.sms.virtual_numbers_jobs
WHERE id = '{{ id }}' -- required
AND number = '{{ number }}' -- required
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
delivery_receipt,
differed_delivery,
message,
message_length,
number_of_sms,
ptt,
receiver
FROM ovh.sms.virtual_numbers_jobs
WHERE number = '{{ number }}' -- required
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
INSERT INTO ovh.sms.virtual_numbers_jobs (
charset,
class,
coding,
differed_period,
message,
priority,
receivers,
receivers_document_url,
receivers_slot_id,
tag,
validity_period,
number,
service_name
)
SELECT 
'{{ charset }}',
'{{ class }}',
'{{ coding }}',
{{ differed_period }},
'{{ message }}' /* required */,
'{{ priority }}',
'{{ receivers }}',
'{{ receivers_document_url }}',
'{{ receivers_slot_id }}',
'{{ tag }}',
{{ validity_period }},
'{{ number }}',
'{{ service_name }}'
RETURNING
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
- name: virtual_numbers_jobs
  props:
    - name: number
      value: "{{ number }}"
      description: Required parameter for the virtual_numbers_jobs resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the virtual_numbers_jobs resource.
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
DELETE FROM ovh.sms.virtual_numbers_jobs
WHERE id = '{{ id }}' --required
AND number = '{{ number }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
