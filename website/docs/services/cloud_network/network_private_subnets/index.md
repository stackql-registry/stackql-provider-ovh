--- 
title: network_private_subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - network_private_subnets
  - cloud_network
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

Creates, updates, deletes, gets or lists a <code>network_private_subnets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_private_subnets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.network_private_subnets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Subnet

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
    <td><code>string</code></td>
    <td>Subnet id</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Subnet CIDR (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Is DHCP enabled for the subnet (wire: dhcpEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Gateway IP in the subnet (example: 192.0.2.0) (wire: gatewayIp)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_pools" /></td>
    <td><code>array</code></td>
    <td>List of ip pools allocated in subnet (wire: ipPools)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get network subnets</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-dhcp"><code>dhcp</code></a>, <a href="#parameter-end"><code>end</code></a>, <a href="#parameter-network"><code>network</code></a>, <a href="#parameter-no_gateway"><code>no_gateway</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-start"><code>start</code></a></td>
    <td></td>
    <td>Create a new network subnet</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-subnet_id"><code>subnet_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a network subnet</td>
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
    <td><code>string</code></td>
    <td>Network ID (wire: networkId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-subnet_id">
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>Subnet ID (wire: subnetId)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get network subnets

```sql
SELECT
id,
cidr,
dhcp_enabled,
gateway_ip,
ip_pools
FROM ovh.cloud_network.network_private_subnets
WHERE network_id = '{{ network_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a new network subnet

```sql
INSERT INTO ovh.cloud_network.network_private_subnets (
dhcp,
end,
network,
no_gateway,
region,
start,
network_id,
service_name
)
SELECT 
{{ dhcp }} /* required */,
'{{ end }}' /* required */,
'{{ network }}' /* required */,
{{ no_gateway }} /* required */,
'{{ region }}' /* required */,
'{{ start }}' /* required */,
'{{ network_id }}',
'{{ service_name }}'
RETURNING
id,
cidr,
dhcp_enabled,
gateway_ip,
ip_pools
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_private_subnets
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the network_private_subnets resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the network_private_subnets resource.
    - name: dhcp
      value: {{ dhcp }}
      description: |
        Enable DHCP
    - name: end
      value: "{{ end }}"
      description: |
        Last IP for this region (eg: 192.168.1.24)
    - name: network
      value: "{{ network }}"
      description: |
        Global network with cidr (eg: 192.168.1.0/24)
    - name: no_gateway
      value: {{ no_gateway }}
      description: |
        Set to true if you don't want to set a default gateway IP
    - name: region
      value: "{{ region }}"
      description: |
        Region where this subnet will be created
    - name: start
      value: "{{ start }}"
      description: |
        First IP for this region (eg: 192.168.1.12)
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

Delete a network subnet

```sql
DELETE FROM ovh.cloud_network.network_private_subnets
WHERE network_id = '{{ network_id }}' --required
AND subnet_id = '{{ subnet_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
