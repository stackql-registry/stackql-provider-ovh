--- 
title: name_task_foas
hide_title: false
hide_table_of_contents: false
keywords:
  - name_task_foas
  - domain_v2
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

Creates, updates, deletes, gets or lists a <code>name_task_foas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="name_task_foas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain_v2.name_task_foas" /></td></tr>
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
    <td>Unique identifier of the FOA</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash of the current state of the FOA. Reflects the latest observed state.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the FOA (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Readiness of the FOA resource (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Form of Authorization (FOA) attached to a domain name task. They are created by OVHcloud when a trade or an outgoing transfer is requested and validated by the involved contacts via email.

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
    <td>Unique identifier of the FOA</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash of the current state of the FOA. Reflects the latest observed state.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the FOA (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Readiness of the FOA resource (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-foa_id"><code>foa_id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>Get a specific FOA (Form of Authorization) attached to a domain name task (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>List the FOAs (Form of Authorization) attached to a domain name task. Trade operations may produce several FOAs (one per involved contact). Outgoing transfers produce a single FOA. (Beta version)</td>
</tr>
<tr>
    <td><a href="#resend"><CopyableCode code="resend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-foaId"><code>foaId</code></a>, <a href="#parameter-taskId"><code>taskId</code></a></td>
    <td></td>
    <td>Resend the FOA (Form of Authorization) email to its recipient. Fails when the FOA has already been answered, when it is expired, or when the underlying task has already finished. (Beta version)</td>
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
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>Domain name</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Domain name (wire: domainName)</td>
</tr>
<tr id="parameter-foaId">
    <td><CopyableCode code="foaId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Foa ID</td>
</tr>
<tr id="parameter-foa_id">
    <td><CopyableCode code="foa_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Foa ID (wire: foaId)</td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Task ID</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Task ID (wire: taskId)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Get a specific FOA (Form of Authorization) attached to a domain name task (Beta version)

```sql
SELECT
id,
checksum,
current_state,
resource_status
FROM ovh.domain_v2.name_task_foas
WHERE domain_name = '{{ domain_name }}' -- required
AND foa_id = '{{ foa_id }}' -- required
AND task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List the FOAs (Form of Authorization) attached to a domain name task. Trade operations may produce several FOAs (one per involved contact). Outgoing transfers produce a single FOA. (Beta version)

```sql
SELECT
id,
checksum,
current_state,
resource_status
FROM ovh.domain_v2.name_task_foas
WHERE domain_name = '{{ domain_name }}' -- required
AND task_id = '{{ task_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="resend"
    values={[
        { label: 'resend', value: 'resend' }
    ]}
>
<TabItem value="resend">

Resend the FOA (Form of Authorization) email to its recipient. Fails when the FOA has already been answered, when it is expired, or when the underlying task has already finished. (Beta version)

```sql
EXEC ovh.domain_v2.name_task_foas.resend 
@domainName='{{ domainName }}' --required, 
@foaId='{{ foaId }}' --required, 
@taskId='{{ taskId }}' --required
;
```
</TabItem>
</Tabs>
