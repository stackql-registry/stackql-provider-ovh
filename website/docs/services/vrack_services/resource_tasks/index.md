--- 
title: resource_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_tasks
  - vrack_services
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

Creates, updates, deletes, gets or lists a <code>resource_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack_services.resource_tasks" /></td></tr>
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
    <td>Unique identifier of the task</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the task (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors that occurred on the task</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Ending date of the task (wire: finishedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="link" /></td>
    <td><code>string</code></td>
    <td>Link to the related resource</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Description of the task</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>array</code></td>
    <td>Progress steps of the asynchronous operation</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Starting date of the task (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current global status of the task (DONE, ERROR, PENDING, RUNNING, SCHEDULED, WAITING_USER_INPUT)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the task</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update of the task (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Asynchronous operation

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
    <td>Unique identifier of the task</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the task (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors that occurred on the task</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Ending date of the task (wire: finishedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="link" /></td>
    <td><code>string</code></td>
    <td>Link to the related resource</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Description of the task</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>array</code></td>
    <td>Progress steps of the asynchronous operation</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Starting date of the task (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current global status of the task (DONE, ERROR, PENDING, RUNNING, SCHEDULED, WAITING_USER_INPUT)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the task</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update of the task (wire: updatedAt)</td>
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
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-vrack_services_id"><code>vrack_services_id</code></a></td>
    <td></td>
    <td>Returns the type, status, progress steps and errors of the task.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vrack_services_id"><code>vrack_services_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the asynchronous operations run on the vRack Services, with their status and progress steps.</td>
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
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Task ID (wire: taskId)</td>
</tr>
<tr id="parameter-vrack_services_id">
    <td><CopyableCode code="vrack_services_id" /></td>
    <td><code>string</code></td>
    <td>Vrack services ID (wire: vrackServicesId)</td>
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

Returns the type, status, progress steps and errors of the task.

```sql
SELECT
id,
created_at,
errors,
finished_at,
link,
message,
progress,
started_at,
status,
type,
updated_at
FROM ovh.vrack_services.resource_tasks
WHERE task_id = '{{ task_id }}' -- required
AND vrack_services_id = '{{ vrack_services_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the asynchronous operations run on the vRack Services, with their status and progress steps.

```sql
SELECT
id,
created_at,
errors,
finished_at,
link,
message,
progress,
started_at,
status,
type,
updated_at
FROM ovh.vrack_services.resource_tasks
WHERE vrack_services_id = '{{ vrack_services_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>
