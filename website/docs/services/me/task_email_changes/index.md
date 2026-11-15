--- 
title: task_email_changes
hide_title: false
hide_table_of_contents: false
keywords:
  - task_email_changes
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

Creates, updates, deletes, gets or lists a <code>task_email_changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_email_changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.task_email_changes" /></td></tr>
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
    <td><CopyableCode code="date_done" /></td>
    <td><code>string (date-time)</code></td>
    <td>End date of that request (wire: dateDone)</td>
</tr>
<tr>
    <td><CopyableCode code="date_request" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of that request (wire: dateRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="new_email" /></td>
    <td><code>string</code></td>
    <td>The email address to change for (wire: newEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the request (aborted, done, refused, todo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Task running an email change on an account

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
    <td><CopyableCode code="date_done" /></td>
    <td><code>string (date-time)</code></td>
    <td>End date of that request (wire: dateDone)</td>
</tr>
<tr>
    <td><CopyableCode code="date_request" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of that request (wire: dateRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="new_email" /></td>
    <td><code>string</code></td>
    <td>The email address to change for (wire: newEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the request (aborted, done, refused, todo)</td>
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
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of email change tasks you are involved in</td>
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
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of state property (like)</td>
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
date_done,
date_request,
new_email,
state
FROM ovh.me.task_email_changes
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of email change tasks you are involved in

```sql
SELECT
id,
date_done,
date_request,
new_email,
state
FROM ovh.me.task_email_changes
WHERE state = '{{ state }}'
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
        { label: 'refuse', value: 'refuse' }
    ]}
>
<TabItem value="accept">

Accept this change request

```sql
EXEC ovh.me.task_email_changes.accept 
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
EXEC ovh.me.task_email_changes.refuse 
@id='{{ id }}' --required 
@@json=
'{
"token": "{{ token }}"
}'
;
```
</TabItem>
</Tabs>
