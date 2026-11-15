--- 
title: datacenter_nsxt_edges
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_nsxt_edges
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>datacenter_nsxt_edges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_nsxt_edges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_nsxt_edges" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the NSX-T Edge</td>
</tr>
<tr>
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>Host id where NSX-T Edge is located (wire: hostId)</td>
</tr>
<tr>
    <td><CopyableCode code="nsxt_edge_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the NSX-T Edge (wire: nsxtEdgeId)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_location" /></td>
    <td><code>string</code></td>
    <td>Location of NSX-T Edge disks (wire: diskLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of the NSX-T Edge (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="mo_ref" /></td>
    <td><code>string</code></td>
    <td>The VMware MoRef of the NSX-T Edge (wire: moRef)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>Size of the NSX-T Edge (LARGE, MEDIUM, XLARGE)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the NSX-T Edge (available, delivered, disabled, disabling, error, migrating, provisionning, recycling, reserved, toDisable, toProvision, toRecycle, toRemove, toUnprovision, unprovisionning, upgrading)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

NSX-T Edge

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the NSX-T Edge</td>
</tr>
<tr>
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>Host id where NSX-T Edge is located (wire: hostId)</td>
</tr>
<tr>
    <td><CopyableCode code="nsxt_edge_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the NSX-T Edge (wire: nsxtEdgeId)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_location" /></td>
    <td><code>string</code></td>
    <td>Location of NSX-T Edge disks (wire: diskLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of the NSX-T Edge (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="mo_ref" /></td>
    <td><code>string</code></td>
    <td>The VMware MoRef of the NSX-T Edge (wire: moRef)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>Size of the NSX-T Edge (LARGE, MEDIUM, XLARGE)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the NSX-T Edge (available, delivered, disabled, disabling, error, migrating, provisionning, recycling, reserved, toDisable, toProvision, toRecycle, toRemove, toUnprovision, unprovisionning, upgrading)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-nsxt_edge_id"><code>nsxt_edge_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an edge node</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List edge nodes</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create an edge node</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-nsxt_edge_id"><code>nsxt_edge_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an edge node. Removes the NSX-T edge node from the datacenter. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#relocate_edge"><CopyableCode code="relocate_edge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-nsxtEdgeId"><code>nsxtEdgeId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Relocate an edge node. Moves the compute resources of the edge node to another host, its disks to another datastore, or both. Returns a task to track progress.</td>
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
<tr id="parameter-datacenterId">
    <td><CopyableCode code="datacenterId" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter</td>
</tr>
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr id="parameter-nsxtEdgeId">
    <td><CopyableCode code="nsxtEdgeId" /></td>
    <td><code>integer</code></td>
    <td>Id of the NSX-T Edge</td>
</tr>
<tr id="parameter-nsxt_edge_id">
    <td><CopyableCode code="nsxt_edge_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the NSX-T Edge (wire: nsxtEdgeId)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get an edge node

```sql
SELECT
name,
host_id,
nsxt_edge_id,
disk_location,
ip,
mo_ref,
size,
state
FROM ovh.dedicated_cloud.datacenter_nsxt_edges
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND nsxt_edge_id = '{{ nsxt_edge_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List edge nodes

```sql
SELECT
name,
host_id,
nsxt_edge_id,
disk_location,
ip,
mo_ref,
size,
state
FROM ovh.dedicated_cloud.datacenter_nsxt_edges
WHERE datacenter_id = '{{ datacenter_id }}' -- required
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

Create an edge node

```sql
INSERT INTO ovh.dedicated_cloud.datacenter_nsxt_edges (
datacenter_id,
service_name
)
SELECT 
'{{ datacenter_id }}',
'{{ service_name }}'
RETURNING
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datacenter_nsxt_edges
  props:
    - name: datacenter_id
      value: {{ datacenter_id }}
      description: Required parameter for the datacenter_nsxt_edges resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the datacenter_nsxt_edges resource.
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

Delete an edge node. Removes the NSX-T edge node from the datacenter. Returns a task to track progress.

```sql
DELETE FROM ovh.dedicated_cloud.datacenter_nsxt_edges
WHERE datacenter_id = '{{ datacenter_id }}' --required
AND nsxt_edge_id = '{{ nsxt_edge_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="relocate_edge"
    values={[
        { label: 'relocate_edge', value: 'relocate_edge' }
    ]}
>
<TabItem value="relocate_edge">

Relocate an edge node. Moves the compute resources of the edge node to another host, its disks to another datastore, or both. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_nsxt_edges.relocate_edge 
@datacenterId='{{ datacenterId }}' --required, 
@nsxtEdgeId='{{ nsxtEdgeId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"datastore": "{{ datastore }}", 
"hostId": {{ hostId }}
}'
;
```
</TabItem>
</Tabs>
