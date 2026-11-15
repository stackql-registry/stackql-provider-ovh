--- 
title: tickets
hide_title: false
hide_table_of_contents: false
keywords:
  - tickets
  - support
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

Creates, updates, deletes, gets or lists a <code>tickets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tickets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.support.tickets" /></td></tr>
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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Customer account identifier (wire: accountId)</td>
</tr>
<tr>
    <td><CopyableCode code="ticket_id" /></td>
    <td><code>integer</code></td>
    <td>Ticket identifier (wire: ticketId)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of service concerned by ticket (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="can_be_closed" /></td>
    <td><code>boolean</code></td>
    <td>Can this ticket be closed or not (wire: canBeClosed)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Ticket request category (assistance, billing, incident)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Ticket creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_message_from" /></td>
    <td><code>string</code></td>
    <td>Sender type of last message (customer, support) (wire: lastMessageFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Product service concerned by ticket (adsl, cdn, dedicated, dedicated-billing, dedicated-other, dedicatedcloud, domain, exchange, fax, hosting, housing, iaas, mail, network, publiccloud, sms, ssl, storage, telecom-billing, telecom-other, vac, voip, vps, web-billing, web-other)</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>string</code></td>
    <td>Ticket score</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of ticket (closed, open, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Ticket subject</td>
</tr>
<tr>
    <td><CopyableCode code="ticket_number" /></td>
    <td><code>integer</code></td>
    <td>Ticket external number (wire: ticketNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Ticket type (criticalIntervention, genericRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Ticket last update date (wire: updateDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Support Ticket

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Customer account identifier (wire: accountId)</td>
</tr>
<tr>
    <td><CopyableCode code="ticket_id" /></td>
    <td><code>integer</code></td>
    <td>Ticket identifier (wire: ticketId)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of service concerned by ticket (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="can_be_closed" /></td>
    <td><code>boolean</code></td>
    <td>Can this ticket be closed or not (wire: canBeClosed)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Ticket request category (assistance, billing, incident)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Ticket creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_message_from" /></td>
    <td><code>string</code></td>
    <td>Sender type of last message (customer, support) (wire: lastMessageFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Product service concerned by ticket (adsl, cdn, dedicated, dedicated-billing, dedicated-other, dedicatedcloud, domain, exchange, fax, hosting, housing, iaas, mail, network, publiccloud, sms, ssl, storage, telecom-billing, telecom-other, vac, voip, vps, web-billing, web-other)</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>string</code></td>
    <td>Ticket score</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of ticket (closed, open, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Ticket subject</td>
</tr>
<tr>
    <td><CopyableCode code="ticket_number" /></td>
    <td><code>integer</code></td>
    <td>Ticket external number (wire: ticketNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Ticket type (criticalIntervention, genericRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Ticket last update date (wire: updateDate)</td>
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
    <td><a href="#parameter-ticket_id"><code>ticket_id</code></a></td>
    <td></td>
    <td>Get ticket</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-archived"><code>archived</code></a>, <a href="#parameter-category"><code>category</code></a>, <a href="#parameter-customer_reply_needed"><code>customer_reply_needed</code></a>, <a href="#parameter-exclude_autogenerated"><code>exclude_autogenerated</code></a>, <a href="#parameter-max_creation_date"><code>max_creation_date</code></a>, <a href="#parameter-min_creation_date"><code>min_creation_date</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-product"><code>product</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-ticket_number"><code>ticket_number</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List support tickets identifiers for this service</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-body"><code>body</code></a>, <a href="#parameter-subject"><code>subject</code></a></td>
    <td></td>
    <td>Create a new ticket</td>
</tr>
<tr>
    <td><a href="#close"><CopyableCode code="close" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ticketId"><code>ticketId</code></a></td>
    <td></td>
    <td>Close ticket</td>
</tr>
<tr>
    <td><a href="#reopen"><CopyableCode code="reopen" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ticketId"><code>ticketId</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Reopen a ticket</td>
</tr>
<tr>
    <td><a href="#reply"><CopyableCode code="reply" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ticketId"><code>ticketId</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Reply to ticket</td>
</tr>
<tr>
    <td><a href="#score"><CopyableCode code="score" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ticketId"><code>ticketId</code></a>, <a href="#parameter-score"><code>score</code></a></td>
    <td></td>
    <td>Set ticket score</td>
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
<tr id="parameter-ticketId">
    <td><CopyableCode code="ticketId" /></td>
    <td><code>integer</code></td>
    <td>internal ticket identifier</td>
</tr>
<tr id="parameter-ticket_id">
    <td><CopyableCode code="ticket_id" /></td>
    <td><code>integer</code></td>
    <td>internal identifier ticket (wire: ticketId)</td>
</tr>
<tr id="parameter-archived">
    <td><CopyableCode code="archived" /></td>
    <td><code>boolean</code></td>
    <td>Search archived tickets</td>
</tr>
<tr id="parameter-category">
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Search by ticket category</td>
</tr>
<tr id="parameter-customer_reply_needed">
    <td><CopyableCode code="customer_reply_needed" /></td>
    <td><code>boolean</code></td>
    <td>Tickets pending a customer reply (wire: customerReplyNeeded)</td>
</tr>
<tr id="parameter-exclude_autogenerated">
    <td><CopyableCode code="exclude_autogenerated" /></td>
    <td><code>boolean</code></td>
    <td>Exclude auto-generated tickets (wire: excludeAutogenerated)</td>
</tr>
<tr id="parameter-max_creation_date">
    <td><CopyableCode code="max_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Maximum creation date (wire: maxCreationDate)</td>
</tr>
<tr id="parameter-min_creation_date">
    <td><CopyableCode code="min_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Minimum creation date (wire: minCreationDate)</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page of tickets to fetch (only if pageSize is defined)</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer</code></td>
    <td>Number of ticket to fetch (wire: pageSize)</td>
</tr>
<tr id="parameter-product">
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Search by ticket product</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Ticket message service name (wire: serviceName)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of ticket</td>
</tr>
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Search by ticket subject</td>
</tr>
<tr id="parameter-ticket_number">
    <td><CopyableCode code="ticket_number" /></td>
    <td><code>string</code></td>
    <td>Search by ticket number (wire: ticketNumber)</td>
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

Get ticket

```sql
SELECT
account_id,
ticket_id,
service_name,
can_be_closed,
category,
creation_date,
last_message_from,
product,
score,
state,
subject,
ticket_number,
type,
update_date
FROM ovh.support.tickets
WHERE ticket_id = '{{ ticket_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List support tickets identifiers for this service

```sql
SELECT
account_id,
ticket_id,
service_name,
can_be_closed,
category,
creation_date,
last_message_from,
product,
score,
state,
subject,
ticket_number,
type,
update_date
FROM ovh.support.tickets
WHERE archived = '{{ archived }}'
AND category = '{{ category }}'
AND customer_reply_needed = '{{ customer_reply_needed }}'
AND exclude_autogenerated = '{{ exclude_autogenerated }}'
AND max_creation_date = '{{ max_creation_date }}'
AND min_creation_date = '{{ min_creation_date }}'
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
AND product = '{{ product }}'
AND service_name = '{{ service_name }}'
AND status = '{{ status }}'
AND subject = '{{ subject }}'
AND ticket_number = '{{ ticket_number }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'close', value: 'close' },
        { label: 'reopen', value: 'reopen' },
        { label: 'reply', value: 'reply' },
        { label: 'score', value: 'score' }
    ]}
>
<TabItem value="create">

Create a new ticket

```sql
EXEC ovh.support.tickets.create 
@@json=
'{
"body": "{{ body }}", 
"category": "{{ category }}", 
"impact": "{{ impact }}", 
"product": "{{ product }}", 
"serviceName": "{{ serviceName }}", 
"subcategory": "{{ subcategory }}", 
"subject": "{{ subject }}", 
"type": "{{ type }}", 
"urgency": "{{ urgency }}", 
"watchers": "{{ watchers }}"
}'
;
```
</TabItem>
<TabItem value="close">

Close ticket

```sql
EXEC ovh.support.tickets.close 
@ticketId='{{ ticketId }}' --required
;
```
</TabItem>
<TabItem value="reopen">

Reopen a ticket

```sql
EXEC ovh.support.tickets.reopen 
@ticketId='{{ ticketId }}' --required 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
<TabItem value="reply">

Reply to ticket

```sql
EXEC ovh.support.tickets.reply 
@ticketId='{{ ticketId }}' --required 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
<TabItem value="score">

Set ticket score

```sql
EXEC ovh.support.tickets.score 
@ticketId='{{ ticketId }}' --required 
@@json=
'{
"score": "{{ score }}", 
"scoreComment": "{{ scoreComment }}"
}'
;
```
</TabItem>
</Tabs>
