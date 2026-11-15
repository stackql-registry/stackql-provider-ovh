--- 
title: incidents
hide_title: false
hide_table_of_contents: false
keywords:
  - incidents
  - xdsl
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

Creates, updates, deletes, gets or lists an <code>incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incidents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.incidents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_by_service_name', value: 'get_by_service_name' },
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
    <td>ID of the incident</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Task ID on travaux.ovh.com (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Estimated start date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="departments" /></td>
    <td><code>array</code></td>
    <td>Department list</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Estimated end date (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="nra" /></td>
    <td><code>array</code></td>
    <td>NRA list</td>
</tr>
<tr>
    <td><CopyableCode code="operators" /></td>
    <td><code>array</code></td>
    <td>Operator</td>
</tr>
<tr>
    <td><CopyableCode code="task_reference" /></td>
    <td><code>string</code></td>
    <td> (wire: taskReference)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_by_service_name">

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
    <td>ID of the incident</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Task ID on travaux.ovh.com (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Estimated start date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="departments" /></td>
    <td><code>array</code></td>
    <td>Department list</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Estimated end date (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="nra" /></td>
    <td><code>array</code></td>
    <td>NRA list</td>
</tr>
<tr>
    <td><CopyableCode code="operators" /></td>
    <td><code>array</code></td>
    <td>Operator</td>
</tr>
<tr>
    <td><CopyableCode code="task_reference" /></td>
    <td><code>string</code></td>
    <td> (wire: taskReference)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Detected incident

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
    <td>ID of the incident</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Task ID on travaux.ovh.com (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Estimated start date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="departments" /></td>
    <td><code>array</code></td>
    <td>Department list</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Estimated end date (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="nra" /></td>
    <td><code>array</code></td>
    <td>NRA list</td>
</tr>
<tr>
    <td><CopyableCode code="operators" /></td>
    <td><code>array</code></td>
    <td>Operator</td>
</tr>
<tr>
    <td><CopyableCode code="task_reference" /></td>
    <td><code>string</code></td>
    <td> (wire: taskReference)</td>
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
    <td>Returns an incident with its estimated start and end dates, impacted operators, NRA and departments, and comment.</td>
</tr>
<tr>
    <td><a href="#get_by_service_name"><CopyableCode code="get_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the generic incident that impacts the access, if any, with its estimated start and end dates, operators, NRA and departments.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-creation_date"><code>creation_date</code></a>, <a href="#parameter-end_date"><code>end_date</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the incidents impacting xDSL accesses. Filter on the creation and end dates.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-creation_date">
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDate property (&gt;) (wire: creationDate)</td>
</tr>
<tr id="parameter-end_date">
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of endDate property (&lt;) (wire: endDate)</td>
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
        { label: 'get_by_service_name', value: 'get_by_service_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns an incident with its estimated start and end dates, impacted operators, NRA and departments, and comment.

```sql
SELECT
id,
task_id,
comment,
creation_date,
departments,
end_date,
nra,
operators,
task_reference
FROM ovh.xdsl.incidents
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="get_by_service_name">

Returns the generic incident that impacts the access, if any, with its estimated start and end dates, operators, NRA and departments.

```sql
SELECT
id,
task_id,
comment,
creation_date,
departments,
end_date,
nra,
operators,
task_reference
FROM ovh.xdsl.incidents
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the incidents impacting xDSL accesses. Filter on the creation and end dates.

```sql
SELECT
id,
task_id,
comment,
creation_date,
departments,
end_date,
nra,
operators,
task_reference
FROM ovh.xdsl.incidents
WHERE creation_date = '{{ creation_date }}'
AND end_date = '{{ end_date }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
