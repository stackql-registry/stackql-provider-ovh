--- 
title: partition_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - partition_snapshots
  - dedicated_nasha
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

Creates, updates, deletes, gets or lists a <code>partition_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partition_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_nasha.partition_snapshots" /></td></tr>
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
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>the interval of snapshot (day-1, day-2, day-3, day-7, hour-1, hour-6) (wire: snapshotType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Partition Snapshot

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
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>the interval of snapshot (day-1, day-2, day-3, day-7, hour-1, hour-6) (wire: snapshotType)</td>
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
    <td><a href="#parameter-partition_name"><code>partition_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-snapshot_type"><code>snapshot_type</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-partition_name"><code>partition_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Get scheduled snapshot types for this partition</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-partition_name"><code>partition_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-snapshot_type"><code>snapshot_type</code></a></td>
    <td></td>
    <td>Schedule a new snapshot type</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-partition_name"><code>partition_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-snapshot_type"><code>snapshot_type</code></a></td>
    <td></td>
    <td>Delete a given snapshot</td>
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
<tr id="parameter-partition_name">
    <td><CopyableCode code="partition_name" /></td>
    <td><code>string</code></td>
    <td>the given name of partition (wire: partitionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your storage (wire: serviceName)</td>
</tr>
<tr id="parameter-snapshot_type">
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>the interval of snapshot (wire: snapshotType)</td>
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
snapshot_type
FROM ovh.dedicated_nasha.partition_snapshots
WHERE partition_name = '{{ partition_name }}' -- required
AND service_name = '{{ service_name }}' -- required
AND snapshot_type = '{{ snapshot_type }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get scheduled snapshot types for this partition

```sql
SELECT
snapshot_type
FROM ovh.dedicated_nasha.partition_snapshots
WHERE partition_name = '{{ partition_name }}' -- required
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

Schedule a new snapshot type

```sql
INSERT INTO ovh.dedicated_nasha.partition_snapshots (
snapshot_type,
partition_name,
service_name
)
SELECT 
'{{ snapshot_type }}' /* required */,
'{{ partition_name }}',
'{{ service_name }}'
RETURNING
task_id,
partition_name,
storage_name,
details,
done_date,
last_update,
operation,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partition_snapshots
  props:
    - name: partition_name
      value: "{{ partition_name }}"
      description: Required parameter for the partition_snapshots resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the partition_snapshots resource.
    - name: snapshot_type
      value: "{{ snapshot_type }}"
      description: |
        Snapshot interval to add
      valid_values: ['day-1', 'day-2', 'day-3', 'day-7', 'hour-1', 'hour-6']
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

Delete a given snapshot

```sql
DELETE FROM ovh.dedicated_nasha.partition_snapshots
WHERE partition_name = '{{ partition_name }}' --required
AND service_name = '{{ service_name }}' --required
AND snapshot_type = '{{ snapshot_type }}' --required
;
```
</TabItem>
</Tabs>
