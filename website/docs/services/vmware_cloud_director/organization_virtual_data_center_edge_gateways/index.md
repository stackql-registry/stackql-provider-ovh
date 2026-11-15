--- 
title: organization_virtual_data_center_edge_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_virtual_data_center_edge_gateways
  - vmware_cloud_director
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

Creates, updates, deletes, gets or lists an <code>organization_virtual_data_center_edge_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_virtual_data_center_edge_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vmware_cloud_director.organization_virtual_data_center_edge_gateways" /></td></tr>
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
    <td>Universal Unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Configuration currently in force on the platform. It catches up with targetSpec once the requested change has been applied. (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Asynchronous operations ongoing on the organization Virtual DataCenter edge gateway (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the organization Virtual DataCenter edge gateway resource. A new target specification request will be accepted only in `READY` status. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>New target specification for the VMware Cloud Director organization edge gateway (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time this resource was last modified (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Organization Virtual DataCenter edge gateway resource

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
    <td>Universal Unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Configuration currently in force on the platform. It catches up with targetSpec once the requested change has been applied. (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Asynchronous operations ongoing on the organization Virtual DataCenter edge gateway (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the organization Virtual DataCenter edge gateway resource. A new target specification request will be accepted only in `READY` status. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>New target specification for the VMware Cloud Director organization edge gateway (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time this resource was last modified (wire: updatedAt)</td>
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
    <td><a href="#parameter-edge_gateway_id"><code>edge_gateway_id</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-virtual_data_center_id"><code>virtual_data_center_id</code></a></td>
    <td></td>
    <td>Returns the edge gateway: name, deployment mode, provider gateway and VMware Cloud Director ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-virtual_data_center_id"><code>virtual_data_center_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the edge gateways of the virtual datacenter.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-virtual_data_center_id"><code>virtual_data_center_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates an edge gateway in the virtual datacenter, with the name given in `targetSpec`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-edge_gateway_id"><code>edge_gateway_id</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-virtual_data_center_id"><code>virtual_data_center_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Renames the edge gateway. Accepted only when the edge gateway is `READY`, then applied asynchronously: `currentState` catches up with `targetSpec`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-edge_gateway_id"><code>edge_gateway_id</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-virtual_data_center_id"><code>virtual_data_center_id</code></a></td>
    <td></td>
    <td>Deletes the edge gateway from the virtual datacenter.</td>
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
<tr id="parameter-edge_gateway_id">
    <td><CopyableCode code="edge_gateway_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Edge gateway ID (wire: edgeGatewayId)</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>Organization ID (wire: organizationId)</td>
</tr>
<tr id="parameter-virtual_data_center_id">
    <td><CopyableCode code="virtual_data_center_id" /></td>
    <td><code>string</code></td>
    <td>Virtual data center ID (wire: virtualDataCenterId)</td>
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

Returns the edge gateway: name, deployment mode, provider gateway and VMware Cloud Director ID.

```sql
SELECT
id,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.vmware_cloud_director.organization_virtual_data_center_edge_gateways
WHERE edge_gateway_id = '{{ edge_gateway_id }}' -- required
AND organization_id = '{{ organization_id }}' -- required
AND virtual_data_center_id = '{{ virtual_data_center_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the edge gateways of the virtual datacenter.

```sql
SELECT
id,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.vmware_cloud_director.organization_virtual_data_center_edge_gateways
WHERE organization_id = '{{ organization_id }}' -- required
AND virtual_data_center_id = '{{ virtual_data_center_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Creates an edge gateway in the virtual datacenter, with the name given in `targetSpec`.

```sql
INSERT INTO ovh.vmware_cloud_director.organization_virtual_data_center_edge_gateways (
target_spec,
organization_id,
virtual_data_center_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ organization_id }}',
'{{ virtual_data_center_id }}'
RETURNING
id,
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
- name: organization_virtual_data_center_edge_gateways
  props:
    - name: organization_id
      value: "{{ organization_id }}"
      description: Required parameter for the organization_virtual_data_center_edge_gateways resource.
    - name: virtual_data_center_id
      value: "{{ virtual_data_center_id }}"
      description: Required parameter for the organization_virtual_data_center_edge_gateways resource.
    - name: target_spec
      description: |
        New target specification for the VMware Cloud Director organization edge gateway
      value:
        name: "{{ name }}"
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

Renames the edge gateway. Accepted only when the edge gateway is `READY`, then applied asynchronously: `currentState` catches up with `targetSpec`.

```sql
UPDATE ovh.vmware_cloud_director.organization_virtual_data_center_edge_gateways
SET 
target_spec = '{{ target_spec }}'
WHERE 
edge_gateway_id = '{{ edge_gateway_id }}' --required
AND organization_id = '{{ organization_id }}' --required
AND virtual_data_center_id = '{{ virtual_data_center_id }}' --required
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
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

Deletes the edge gateway from the virtual datacenter.

```sql
DELETE FROM ovh.vmware_cloud_director.organization_virtual_data_center_edge_gateways
WHERE edge_gateway_id = '{{ edge_gateway_id }}' --required
AND organization_id = '{{ organization_id }}' --required
AND virtual_data_center_id = '{{ virtual_data_center_id }}' --required
;
```
</TabItem>
</Tabs>
