--- 
title: config_pop_datacenter_extras
hide_title: false
hide_table_of_contents: false
keywords:
  - config_pop_datacenter_extras
  - ovh_cloud_connect
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

Creates, updates, deletes, gets or lists a <code>config_pop_datacenter_extras</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="config_pop_datacenter_extras" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ovh_cloud_connect.config_pop_datacenter_extras" /></td></tr>
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
    <td>ID of the extra configuration </td>
</tr>
<tr>
    <td><CopyableCode code="bgp_neighbor_area" /></td>
    <td><code>integer</code></td>
    <td>BGP AS number (wire: bgpNeighborArea)</td>
</tr>
<tr>
    <td><CopyableCode code="bgp_neighbor_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Router IP for BGP (example: 192.0.2.0) (wire: bgpNeighborIp)</td>
</tr>
<tr>
    <td><CopyableCode code="next_hop" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Static route next hop (example: 192.0.2.0) (wire: nextHop)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the pop configuration (active, init, toDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Static route ip (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the configuration (bgp, network)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

OVHcloud Connect Service Datacenter Extra Configuration

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
    <td>ID of the extra configuration </td>
</tr>
<tr>
    <td><CopyableCode code="bgp_neighbor_area" /></td>
    <td><code>integer</code></td>
    <td>BGP AS number (wire: bgpNeighborArea)</td>
</tr>
<tr>
    <td><CopyableCode code="bgp_neighbor_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Router IP for BGP (example: 192.0.2.0) (wire: bgpNeighborIp)</td>
</tr>
<tr>
    <td><CopyableCode code="next_hop" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Static route next hop (example: 192.0.2.0) (wire: nextHop)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the pop configuration (active, init, toDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Static route ip (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the configuration (bgp, network)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-extra_id"><code>extra_id</code></a>, <a href="#parameter-pop_id"><code>pop_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the route type, its BGP peer or static subnet and next hop, and its status.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-pop_id"><code>pop_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the BGP peers and static routes of this availability zone configuration.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-pop_id"><code>pop_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Adds a BGP peer (`bgp`) or a static route (`network`) to this availability zone configuration (async task).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-extra_id"><code>extra_id</code></a>, <a href="#parameter-pop_id"><code>pop_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Removes the BGP peer or static route (async task).</td>
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
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Datacenter ID (wire: datacenterId)</td>
</tr>
<tr id="parameter-extra_id">
    <td><CopyableCode code="extra_id" /></td>
    <td><code>integer</code></td>
    <td>Extra ID (wire: extraId)</td>
</tr>
<tr id="parameter-pop_id">
    <td><CopyableCode code="pop_id" /></td>
    <td><code>integer</code></td>
    <td>Pop ID (wire: popId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the route type, its BGP peer or static subnet and next hop, and its status.

```sql
SELECT
id,
bgp_neighbor_area,
bgp_neighbor_ip,
next_hop,
status,
subnet,
type
FROM ovh.ovh_cloud_connect.config_pop_datacenter_extras
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND extra_id = '{{ extra_id }}' -- required
AND pop_id = '{{ pop_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the BGP peers and static routes of this availability zone configuration.

```sql
SELECT
id,
bgp_neighbor_area,
bgp_neighbor_ip,
next_hop,
status,
subnet,
type
FROM ovh.ovh_cloud_connect.config_pop_datacenter_extras
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND pop_id = '{{ pop_id }}' -- required
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

Adds a BGP peer (`bgp`) or a static route (`network`) to this availability zone configuration (async task).

```sql
INSERT INTO ovh.ovh_cloud_connect.config_pop_datacenter_extras (
bgp_neighbor_area,
bgp_neighbor_ip,
next_hop,
subnet,
type,
datacenter_id,
pop_id,
service_name
)
SELECT 
{{ bgp_neighbor_area }},
'{{ bgp_neighbor_ip }}',
'{{ next_hop }}',
'{{ subnet }}',
'{{ type }}' /* required */,
'{{ datacenter_id }}',
'{{ pop_id }}',
'{{ service_name }}'
RETURNING
id,
resource_id,
function,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: config_pop_datacenter_extras
  props:
    - name: datacenter_id
      value: {{ datacenter_id }}
      description: Required parameter for the config_pop_datacenter_extras resource.
    - name: pop_id
      value: {{ pop_id }}
      description: Required parameter for the config_pop_datacenter_extras resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the config_pop_datacenter_extras resource.
    - name: bgp_neighbor_area
      value: {{ bgp_neighbor_area }}
      description: |
        BGP AS number
    - name: bgp_neighbor_ip
      value: "{{ bgp_neighbor_ip }}"
      description: |
        Router IP for BGP
    - name: next_hop
      value: "{{ next_hop }}"
      description: |
        Static route next hop
    - name: subnet
      value: "{{ subnet }}"
      description: |
        Static route ip
    - name: type
      value: "{{ type }}"
      description: |
        Type of the configuration
      valid_values: ['bgp', 'network']
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

Removes the BGP peer or static route (async task).

```sql
DELETE FROM ovh.ovh_cloud_connect.config_pop_datacenter_extras
WHERE datacenter_id = '{{ datacenter_id }}' --required
AND extra_id = '{{ extra_id }}' --required
AND pop_id = '{{ pop_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
