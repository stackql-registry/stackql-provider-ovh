--- 
title: vrack_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - vrack_networks
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>vrack_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vrack_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.vrack_networks" /></td></tr>
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
    <td><CopyableCode code="farm_id" /></td>
    <td><code>array</code></td>
    <td>Farm Id your vrack network is attached to and their type (wire: farmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network description (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your vrack network (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="nat_ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>An IP block used as a pool of IPs by this Load Balancer to connect to the servers in this private network. The block must be in the private network and reserved for the Load Balancer (example: 192.0.2.0/24) (wire: natIp)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP block of the private network in the vRack (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="vlan" /></td>
    <td><code>integer</code></td>
    <td>VLAN of the private network in the vRack. 0 if the private network is not in a VLAN</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents a private network in the vRack

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
    <td><CopyableCode code="farm_id" /></td>
    <td><code>array</code></td>
    <td>Farm Id your vrack network is attached to and their type (wire: farmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network description (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your vrack network (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="nat_ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>An IP block used as a pool of IPs by this Load Balancer to connect to the servers in this private network. The block must be in the private network and reserved for the Load Balancer (example: 192.0.2.0/24) (wire: natIp)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP block of the private network in the vRack (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="vlan" /></td>
    <td><code>integer</code></td>
    <td>VLAN of the private network in the vRack. 0 if the private network is not in a VLAN</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-vrack_network_id"><code>vrack_network_id</code></a></td>
    <td></td>
    <td>Get a private network (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-subnet"><code>subnet</code></a>, <a href="#parameter-vlan"><code>vlan</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List private networks (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-nat_ip"><code>nat_ip</code></a>, <a href="#parameter-subnet"><code>subnet</code></a></td>
    <td></td>
    <td>Create a private network (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-vrack_network_id"><code>vrack_network_id</code></a></td>
    <td></td>
    <td>Update a private network (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-vrack_network_id"><code>vrack_network_id</code></a></td>
    <td></td>
    <td>Delete a private network. It must not be used by any farm server (Beta version)</td>
</tr>
<tr>
    <td><a href="#update_farm_id"><CopyableCode code="update_farm_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vrackNetworkId"><code>vrackNetworkId</code></a>, <a href="#parameter-farmId"><code>farmId</code></a></td>
    <td></td>
    <td>Update the farm of a private network (Beta version)</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-vrackNetworkId">
    <td><CopyableCode code="vrackNetworkId" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network description</td>
</tr>
<tr id="parameter-vrack_network_id">
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network description (wire: vrackNetworkId)</td>
</tr>
<tr id="parameter-subnet">
    <td><CopyableCode code="subnet" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Filter the value of subnet property (=)</td>
</tr>
<tr id="parameter-vlan">
    <td><CopyableCode code="vlan" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of vlan property (=)</td>
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

Get a private network (Beta version)

```sql
SELECT
farm_id,
vrack_network_id,
display_name,
nat_ip,
subnet,
vlan
FROM ovh.ip_loadbalancing.vrack_networks
WHERE service_name = '{{ service_name }}' -- required
AND vrack_network_id = '{{ vrack_network_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List private networks (Beta version)

```sql
SELECT
farm_id,
vrack_network_id,
display_name,
nat_ip,
subnet,
vlan
FROM ovh.ip_loadbalancing.vrack_networks
WHERE service_name = '{{ service_name }}' -- required
AND subnet = '{{ subnet }}'
AND vlan = '{{ vlan }}'
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

Create a private network (Beta version)

```sql
INSERT INTO ovh.ip_loadbalancing.vrack_networks (
display_name,
farm_id,
nat_ip,
subnet,
vlan,
service_name
)
SELECT 
'{{ display_name }}',
'{{ farm_id }}',
'{{ nat_ip }}' /* required */,
'{{ subnet }}' /* required */,
{{ vlan }},
'{{ service_name }}'
RETURNING
farm_id,
vrack_network_id,
display_name,
nat_ip,
subnet,
vlan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vrack_networks
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the vrack_networks resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your vrack network
    - name: farm_id
      value:
        - {{ farm_id }}
      description: |
        Farm Id you want to attach to that vrack network
    - name: nat_ip
      value: "{{ nat_ip }}"
      description: |
        IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
    - name: subnet
      value: "{{ subnet }}"
      description: |
        IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
    - name: vlan
      value: {{ vlan }}
      description: |
        VLAN of the private network in the vRack. 0 if the private network is not in a VLAN
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

Update a private network (Beta version)

```sql
UPDATE ovh.ip_loadbalancing.vrack_networks
SET 
display_name = '{{ display_name }}',
nat_ip = '{{ nat_ip }}',
vlan = {{ vlan }}
WHERE 
service_name = '{{ service_name }}' --required
AND vrack_network_id = '{{ vrack_network_id }}' --required;
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

Delete a private network. It must not be used by any farm server (Beta version)

```sql
DELETE FROM ovh.ip_loadbalancing.vrack_networks
WHERE service_name = '{{ service_name }}' --required
AND vrack_network_id = '{{ vrack_network_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_farm_id"
    values={[
        { label: 'update_farm_id', value: 'update_farm_id' }
    ]}
>
<TabItem value="update_farm_id">

Update the farm of a private network (Beta version)

```sql
EXEC ovh.ip_loadbalancing.vrack_networks.update_farm_id 
@serviceName='{{ serviceName }}' --required, 
@vrackNetworkId='{{ vrackNetworkId }}' --required 
@@json=
'{
"farmId": "{{ farmId }}"
}'
;
```
</TabItem>
</Tabs>
