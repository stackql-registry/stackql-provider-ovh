--- 
title: virtual_numbers_outgoings
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_numbers_outgoings
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

Creates, updates, deletes, gets or lists a <code>virtual_numbers_outgoings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_numbers_outgoings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.virtual_numbers_outgoings" /></td></tr>
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
    <td>Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of batch linked to the SMS (wire: batchID)</td>
</tr>
<tr>
    <td><CopyableCode code="message_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>SMPP messageID (wire: messageID)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>number</code></td>
    <td>Spent credits</td>
</tr>
<tr>
    <td><CopyableCode code="delivered_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Delivering datetime (wire: deliveredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_receipt" /></td>
    <td><code>integer</code></td>
    <td>Delivery receipt from operator (wire: deliveryReceipt)</td>
</tr>
<tr>
    <td><CopyableCode code="differed_delivery" /></td>
    <td><code>integer</code></td>
    <td>Delay before SMS sending (wire: differedDelivery)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>SMS message</td>
</tr>
<tr>
    <td><CopyableCode code="message_length" /></td>
    <td><code>integer</code></td>
    <td>SMS message length (wire: messageLength)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_sms" /></td>
    <td><code>integer</code></td>
    <td>SMS message's number of parts (wire: numberOfSms)</td>
</tr>
<tr>
    <td><CopyableCode code="ptt" /></td>
    <td><code>integer</code></td>
    <td>Code representing SMS state</td>
</tr>
<tr>
    <td><CopyableCode code="receiver" /></td>
    <td><code>string</code></td>
    <td>SMS receiver</td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>SMS sender</td>
</tr>
<tr>
    <td><CopyableCode code="sent_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Sending datetime (wire: sentAt)</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>Customer label to categorize SMSs</td>
</tr>
<tr>
    <td><CopyableCode code="tariff_code" /></td>
    <td><code>string</code></td>
    <td>Tariff code applied on the sms (wire: tariffCode)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Sent SMS

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
    <td>Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of batch linked to the SMS (wire: batchID)</td>
</tr>
<tr>
    <td><CopyableCode code="message_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>SMPP messageID (wire: messageID)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>number</code></td>
    <td>Spent credits</td>
</tr>
<tr>
    <td><CopyableCode code="delivered_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Delivering datetime (wire: deliveredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_receipt" /></td>
    <td><code>integer</code></td>
    <td>Delivery receipt from operator (wire: deliveryReceipt)</td>
</tr>
<tr>
    <td><CopyableCode code="differed_delivery" /></td>
    <td><code>integer</code></td>
    <td>Delay before SMS sending (wire: differedDelivery)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>SMS message</td>
</tr>
<tr>
    <td><CopyableCode code="message_length" /></td>
    <td><code>integer</code></td>
    <td>SMS message length (wire: messageLength)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_sms" /></td>
    <td><code>integer</code></td>
    <td>SMS message's number of parts (wire: numberOfSms)</td>
</tr>
<tr>
    <td><CopyableCode code="ptt" /></td>
    <td><code>integer</code></td>
    <td>Code representing SMS state</td>
</tr>
<tr>
    <td><CopyableCode code="receiver" /></td>
    <td><code>string</code></td>
    <td>SMS receiver</td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>SMS sender</td>
</tr>
<tr>
    <td><CopyableCode code="sent_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Sending datetime (wire: sentAt)</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>Customer label to categorize SMSs</td>
</tr>
<tr>
    <td><CopyableCode code="tariff_code" /></td>
    <td><code>string</code></td>
    <td>Tariff code applied on the sms (wire: tariffCode)</td>
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
    <td>Get a sent SMS. Returns the sent SMS: receiver, message, delivery status, number of SMS parts and credits used.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-creation_datetime.from"><code>creation_datetime.from</code></a>, <a href="#parameter-creation_datetime.to"><code>creation_datetime.to</code></a>, <a href="#parameter-delivery_receipt"><code>delivery_receipt</code></a>, <a href="#parameter-differed_delivery"><code>differed_delivery</code></a>, <a href="#parameter-ptt"><code>ptt</code></a>, <a href="#parameter-receiver"><code>receiver</code></a>, <a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-tag"><code>tag</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List sent SMS. Returns the identifiers of the sent SMS. Get a sent SMS for its receiver, message, delivery status, number of SMS parts and credits used.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a sent SMS. Deletes the sent SMS from the history. It no longer appears in the list of sent SMS of the user or number.</td>
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
<tr id="parameter-creation_datetime.from">
    <td><CopyableCode code="creation_datetime.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDatetime property (&gt;=) (wire: creationDatetime.from)</td>
</tr>
<tr id="parameter-creation_datetime.to">
    <td><CopyableCode code="creation_datetime.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDatetime property (&lt;=) (wire: creationDatetime.to)</td>
</tr>
<tr id="parameter-delivery_receipt">
    <td><CopyableCode code="delivery_receipt" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of deliveryReceipt property (=) (wire: deliveryReceipt)</td>
</tr>
<tr id="parameter-differed_delivery">
    <td><CopyableCode code="differed_delivery" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of differedDelivery property (=) (wire: differedDelivery)</td>
</tr>
<tr id="parameter-ptt">
    <td><CopyableCode code="ptt" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of ptt property (=)</td>
</tr>
<tr id="parameter-receiver">
    <td><CopyableCode code="receiver" /></td>
    <td><code>string</code></td>
    <td>Filter the value of receiver property (=)</td>
</tr>
<tr id="parameter-sender">
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>Filter the value of sender property (=)</td>
</tr>
<tr id="parameter-tag">
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>Filter the value of tag property (=)</td>
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

Get a sent SMS. Returns the sent SMS: receiver, message, delivery status, number of SMS parts and credits used.

```sql
SELECT
id,
batch_id,
message_id,
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
sent_at,
tag,
tariff_code
FROM ovh.sms.virtual_numbers_outgoings
WHERE id = '{{ id }}' -- required
AND number = '{{ number }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List sent SMS. Returns the identifiers of the sent SMS. Get a sent SMS for its receiver, message, delivery status, number of SMS parts and credits used.

```sql
SELECT
id,
batch_id,
message_id,
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
sent_at,
tag,
tariff_code
FROM ovh.sms.virtual_numbers_outgoings
WHERE number = '{{ number }}' -- required
AND service_name = '{{ service_name }}' -- required
AND creation_datetime.from = '{{ creation_datetime.from }}'
AND creation_datetime.to = '{{ creation_datetime.to }}'
AND delivery_receipt = '{{ delivery_receipt }}'
AND differed_delivery = '{{ differed_delivery }}'
AND ptt = '{{ ptt }}'
AND receiver = '{{ receiver }}'
AND sender = '{{ sender }}'
AND tag = '{{ tag }}'
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

Delete a sent SMS. Deletes the sent SMS from the history. It no longer appears in the list of sent SMS of the user or number.

```sql
DELETE FROM ovh.sms.virtual_numbers_outgoings
WHERE id = '{{ id }}' --required
AND number = '{{ number }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
