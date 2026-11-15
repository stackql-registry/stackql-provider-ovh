--- 
title: region_network_subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - region_network_subnets
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

Creates, updates, deletes, gets or lists a <code>region_network_subnets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_network_subnets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_network_subnets" /></td></tr>
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
    <td><code>string</code></td>
    <td>Subnet id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Subnet name</td>
</tr>
<tr>
    <td><CopyableCode code="allocation_pools" /></td>
    <td><code>array</code></td>
    <td>List of ip pools allocated in subnet (wire: allocationPools)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Subnet CIDR (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If DHCP is enabled on subnet (wire: dhcpEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name_servers" /></td>
    <td><code>array</code></td>
    <td>DNS nameservers (wire: dnsNameServers)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Gateway IP (example: 192.0.2.0) (wire: gatewayIp)</td>
</tr>
<tr>
    <td><CopyableCode code="host_routes" /></td>
    <td><code>array</code></td>
    <td>Subnet host routes (wire: hostRoutes)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_version" /></td>
    <td><code>integer</code></td>
    <td>IP Version (4 or 6) (wire: ipVersion)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Subnet name</td>
</tr>
<tr>
    <td><CopyableCode code="allocation_pools" /></td>
    <td><code>array</code></td>
    <td>List of ip pools allocated in subnet (wire: allocationPools)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Subnet CIDR (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If DHCP is enabled on subnet (wire: dhcpEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name_servers" /></td>
    <td><code>array</code></td>
    <td>DNS nameservers (wire: dnsNameServers)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Gateway IP (example: 192.0.2.0) (wire: gatewayIp)</td>
</tr>
<tr>
    <td><CopyableCode code="host_routes" /></td>
    <td><code>array</code></td>
    <td>Subnet host routes (wire: hostRoutes)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_version" /></td>
    <td><code>integer</code></td>
    <td>IP Version (4 or 6) (wire: ipVersion)</td>
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
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-subnet_id"><code>subnet_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get subnet</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List subnets</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-cidr"><code>cidr</code></a>, <a href="#parameter-enable_dhcp"><code>enable_dhcp</code></a>, <a href="#parameter-enable_gateway_ip"><code>enable_gateway_ip</code></a>, <a href="#parameter-ip_version"><code>ip_version</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create subnet</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-subnet_id"><code>subnet_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete subnet</td>
</tr>
<tr>
    <td><a href="#gateway"><CopyableCode code="gateway" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-networkId"><code>networkId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create Gateway for existing subnet</td>
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
<tr id="parameter-networkId">
    <td><CopyableCode code="networkId" /></td>
    <td><code>string</code></td>
    <td>Network ID</td>
</tr>
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>Network ID (wire: networkId)</td>
</tr>
<tr id="parameter-regionName">
    <td><CopyableCode code="regionName" /></td>
    <td><code>string</code></td>
    <td>Region name</td>
</tr>
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-subnetId">
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>Subnet ID</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get subnet

```sql
SELECT
id,
name,
allocation_pools,
cidr,
dhcp_enabled,
dns_name_servers,
gateway_ip,
host_routes,
ip_version
FROM ovh.cloud_network.region_network_subnets
WHERE network_id = '{{ network_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND subnet_id = '{{ subnet_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List subnets

```sql
SELECT
id,
name,
allocation_pools,
cidr,
dhcp_enabled,
dns_name_servers,
gateway_ip,
host_routes,
ip_version
FROM ovh.cloud_network.region_network_subnets
WHERE network_id = '{{ network_id }}' -- required
AND region_name = '{{ region_name }}' -- required
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

Create subnet

```sql
INSERT INTO ovh.cloud_network.region_network_subnets (
allocation_pools,
cidr,
dns_name_servers,
enable_dhcp,
enable_gateway_ip,
gateway_ip,
host_routes,
ip_version,
name,
use_default_public_dns_resolver,
network_id,
region_name,
service_name
)
SELECT 
'{{ allocation_pools }}',
'{{ cidr }}' /* required */,
'{{ dns_name_servers }}',
{{ enable_dhcp }} /* required */,
{{ enable_gateway_ip }} /* required */,
'{{ gateway_ip }}',
'{{ host_routes }}',
{{ ip_version }} /* required */,
'{{ name }}' /* required */,
{{ use_default_public_dns_resolver }},
'{{ network_id }}',
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
allocation_pools,
cidr,
dhcp_enabled,
dns_name_servers,
gateway_ip,
host_routes,
ip_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_network_subnets
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the region_network_subnets resource.
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_network_subnets resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_network_subnets resource.
    - name: allocation_pools
      description: |
        List of ip pools allocated in subnet
      value:
        - end: "{{ end }}"
          start: "{{ start }}"
    - name: cidr
      value: "{{ cidr }}"
      description: |
        Subnet range in CIDR notation
    - name: dns_name_servers
      value:
        - "{{ dns_name_servers }}"
      description: |
        DNS nameservers
    - name: enable_dhcp
      value: {{ enable_dhcp }}
      description: |
        Enable DHCP for the subnet
    - name: enable_gateway_ip
      value: {{ enable_gateway_ip }}
      description: |
        Set a gateway IP for the subnet
    - name: gateway_ip
      value: "{{ gateway_ip }}"
      description: |
        Gateway IP
    - name: host_routes
      description: |
        Host routes
      value:
        - destination: "{{ destination }}"
          nextHop: "{{ nextHop }}"
    - name: ip_version
      value: {{ ip_version }}
      description: |
        IP version
    - name: name
      value: "{{ name }}"
      description: |
        Subnet name
    - name: use_default_public_dns_resolver
      value: {{ use_default_public_dns_resolver }}
      description: |
        Use default DNS
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

Delete subnet

```sql
DELETE FROM ovh.cloud_network.region_network_subnets
WHERE network_id = '{{ network_id }}' --required
AND region_name = '{{ region_name }}' --required
AND subnet_id = '{{ subnet_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="gateway"
    values={[
        { label: 'gateway', value: 'gateway' }
    ]}
>
<TabItem value="gateway">

Create Gateway for existing subnet

```sql
EXEC ovh.cloud_network.region_network_subnets.gateway 
@networkId='{{ networkId }}' --required, 
@regionName='{{ regionName }}' --required, 
@subnetId='{{ subnetId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"model": "{{ model }}", 
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
