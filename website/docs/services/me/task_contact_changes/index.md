--- 
title: task_contact_changes
hide_title: false
hide_table_of_contents: false
keywords:
  - task_contact_changes
  - me
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

Creates, updates, deletes, gets or lists a <code>task_contact_changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_contact_changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.task_contact_changes" /></td></tr>
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
    <td><CopyableCode code="asking_account" /></td>
    <td><code>string</code></td>
    <td>Account who asked the contact change (wire: askingAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_types" /></td>
    <td><code>array</code></td>
    <td>Contacts to be changed (wire: contactTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="date_done" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the contact change has been finished (wire: dateDone)</td>
</tr>
<tr>
    <td><CopyableCode code="date_request" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the request has been made (wire: dateRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="from_account" /></td>
    <td><code>string</code></td>
    <td>Account to change contact from (wire: fromAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="service_domain" /></td>
    <td><code>string</code></td>
    <td>The service on which the task runs (wire: serviceDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the request (aborted, checkValidity, doing, done, error, expired, refused, todo, validatingByCustomers)</td>
</tr>
<tr>
    <td><CopyableCode code="to_account" /></td>
    <td><code>string</code></td>
    <td>Account to change contact to (wire: toAccount)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Task running a contact change on a service

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
    <td><CopyableCode code="asking_account" /></td>
    <td><code>string</code></td>
    <td>Account who asked the contact change (wire: askingAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_types" /></td>
    <td><code>array</code></td>
    <td>Contacts to be changed (wire: contactTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="date_done" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the contact change has been finished (wire: dateDone)</td>
</tr>
<tr>
    <td><CopyableCode code="date_request" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the request has been made (wire: dateRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="from_account" /></td>
    <td><code>string</code></td>
    <td>Account to change contact from (wire: fromAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="service_domain" /></td>
    <td><code>string</code></td>
    <td>The service on which the task runs (wire: serviceDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the request (aborted, checkValidity, doing, done, error, expired, refused, todo, validatingByCustomers)</td>
</tr>
<tr>
    <td><CopyableCode code="to_account" /></td>
    <td><code>string</code></td>
    <td>Account to change contact to (wire: toAccount)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-asking_account"><code>asking_account</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-to_account"><code>to_account</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of service contact change tasks you are involved in</td>
</tr>
<tr>
    <td><a href="#accept"><CopyableCode code="accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Accept this change request</td>
</tr>
<tr>
    <td><a href="#refuse"><CopyableCode code="refuse" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Refuse this change request</td>
</tr>
<tr>
    <td><a href="#resend_email"><CopyableCode code="resend_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>This call will send you a new email, containing a new token</td>
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
    <td></td>
</tr>
<tr id="parameter-asking_account">
    <td><CopyableCode code="asking_account" /></td>
    <td><code>string</code></td>
    <td>Filter the value of askingAccount property (like) (wire: askingAccount)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of state property (like)</td>
</tr>
<tr id="parameter-to_account">
    <td><CopyableCode code="to_account" /></td>
    <td><code>string</code></td>
    <td>Filter the value of toAccount property (like) (wire: toAccount)</td>
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

Get this object properties

```sql
SELECT
id,
asking_account,
contact_types,
date_done,
date_request,
from_account,
service_domain,
state,
to_account
FROM ovh.me.task_contact_changes
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of service contact change tasks you are involved in

```sql
SELECT
id,
asking_account,
contact_types,
date_done,
date_request,
from_account,
service_domain,
state,
to_account
FROM ovh.me.task_contact_changes
WHERE asking_account = '{{ asking_account }}'
AND state = '{{ state }}'
AND to_account = '{{ to_account }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="accept"
    values={[
        { label: 'accept', value: 'accept' },
        { label: 'refuse', value: 'refuse' },
        { label: 'resend_email', value: 'resend_email' }
    ]}
>
<TabItem value="accept">

Accept this change request

```sql
EXEC ovh.me.task_contact_changes.accept 
@id='{{ id }}' --required 
@@json=
'{
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="refuse">

Refuse this change request

```sql
EXEC ovh.me.task_contact_changes.refuse 
@id='{{ id }}' --required 
@@json=
'{
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="resend_email">

This call will send you a new email, containing a new token

```sql
EXEC ovh.me.task_contact_changes.resend_email 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
