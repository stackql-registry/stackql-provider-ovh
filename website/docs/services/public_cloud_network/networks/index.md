--- 
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
  - public_cloud_network
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

Creates, updates, deletes, gets or lists a <code>networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_network.networks" /></td></tr>
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
    <td>Unique identifier of the network</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the network (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the network (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the network (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Network readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the network (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the network (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Public Cloud network

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
    <td>Unique identifier of the network</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the network (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the network (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the network (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Network readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the network (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the network (wire: updatedAt)</td>
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
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the network, including its VLAN segmentation ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>Returns the networks of the project. Filter by region with the `region` query parameter.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates a private network, optionally on a VLAN. VLAN segmentation is not supported on localzone regions.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Updates the network's name. Description, location and VLAN ID are immutable after creation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the network.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Network ID (wire: networkId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Optional region filter</td>
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

Returns the network, including its VLAN segmentation ID.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_network.networks
WHERE network_id = '{{ network_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the networks of the project. Filter by region with the `region` query parameter.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_network.networks
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND region = '{{ region }}'
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

Creates a private network, optionally on a VLAN. VLAN segmentation is not supported on localzone regions.

```sql
INSERT INTO ovh.public_cloud_network.networks (
target_spec,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ project_id }}'
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: networks
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the networks resource.
    - name: target_spec
      description: |
        Desired target specification for the network to create
      value:
        description: "{{ description }}"
        location:
          availabilityZone: "{{ availabilityZone }}"
          region: "{{ region }}"
        name: "{{ name }}"
        vlanId: {{ vlanId }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the network's name. Description, location and VLAN ID are immutable after creation.

```sql
UPDATE ovh.public_cloud_network.networks
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
network_id = '{{ network_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at;
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

Deletes the network.

```sql
DELETE FROM ovh.public_cloud_network.networks
WHERE network_id = '{{ network_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
