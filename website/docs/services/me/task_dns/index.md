--- 
title: task_dns
hide_title: false
hide_table_of_contents: false
keywords:
  - task_dns
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

Creates, updates, deletes, gets or lists a <code>task_dns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_dns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.task_dns" /></td></tr>
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
    <td>Id of the task</td>
</tr>
<tr>
    <td><CopyableCode code="can_accelerate" /></td>
    <td><code>boolean</code></td>
    <td>Can accelerate the task (wire: canAccelerate)</td>
</tr>
<tr>
    <td><CopyableCode code="can_cancel" /></td>
    <td><code>boolean</code></td>
    <td>Can cancel the task (wire: canCancel)</td>
</tr>
<tr>
    <td><CopyableCode code="can_relaunch" /></td>
    <td><code>boolean</code></td>
    <td>Can relaunch the task (wire: canRelaunch)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Comment about the task</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the task (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Done date of the task (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function of the task (DnsAnycastActivate, DnsAnycastDeactivate, DnssecDisable, DnssecEnable, DnssecResigning, DnssecRollKsk, DnssecRollZsk, ZoneCheck, ZoneCreate, ZoneCut, ZoneDelete, ZoneImport, ZoneRefresh, ZoneRestore)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the task (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the task (cancelled, doing, done, error, problem, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Todo date of the task (wire: todoDate)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone related to the task</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DNS task

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
    <td>Id of the task</td>
</tr>
<tr>
    <td><CopyableCode code="can_accelerate" /></td>
    <td><code>boolean</code></td>
    <td>Can accelerate the task (wire: canAccelerate)</td>
</tr>
<tr>
    <td><CopyableCode code="can_cancel" /></td>
    <td><code>boolean</code></td>
    <td>Can cancel the task (wire: canCancel)</td>
</tr>
<tr>
    <td><CopyableCode code="can_relaunch" /></td>
    <td><code>boolean</code></td>
    <td>Can relaunch the task (wire: canRelaunch)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Comment about the task</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the task (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Done date of the task (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function of the task (DnsAnycastActivate, DnsAnycastDeactivate, DnssecDisable, DnssecEnable, DnssecResigning, DnssecRollKsk, DnssecRollZsk, ZoneCheck, ZoneCreate, ZoneCut, ZoneDelete, ZoneImport, ZoneRefresh, ZoneRestore)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the task (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the task (cancelled, doing, done, error, problem, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Todo date of the task (wire: todoDate)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone related to the task</td>
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
    <td>Get a zone task</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-function"><code>function</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List zone tasks</td>
</tr>
<tr>
    <td><a href="#accelerate"><CopyableCode code="accelerate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Accelerate the task</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Cancel the task</td>
</tr>
<tr>
    <td><a href="#relaunch"><CopyableCode code="relaunch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Relaunch the task</td>
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
    <td>Id</td>
</tr>
<tr id="parameter-function">
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
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

Get a zone task

```sql
SELECT
id,
can_accelerate,
can_cancel,
can_relaunch,
comment,
creation_date,
done_date,
function,
last_update,
status,
todo_date,
zone
FROM ovh.me.task_dns
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List zone tasks

```sql
SELECT
id,
can_accelerate,
can_cancel,
can_relaunch,
comment,
creation_date,
done_date,
function,
last_update,
status,
todo_date,
zone
FROM ovh.me.task_dns
WHERE function = '{{ function }}'
AND status = '{{ status }}'
AND zone = '{{ zone }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="accelerate"
    values={[
        { label: 'accelerate', value: 'accelerate' },
        { label: 'cancel', value: 'cancel' },
        { label: 'relaunch', value: 'relaunch' }
    ]}
>
<TabItem value="accelerate">

Accelerate the task

```sql
EXEC ovh.me.task_dns.accelerate 
@id='{{ id }}' --required
;
```
</TabItem>
<TabItem value="cancel">

Cancel the task

```sql
EXEC ovh.me.task_dns.cancel 
@id='{{ id }}' --required
;
```
</TabItem>
<TabItem value="relaunch">

Relaunch the task

```sql
EXEC ovh.me.task_dns.relaunch 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
