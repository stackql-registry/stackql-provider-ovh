--- 
title: ips
hide_title: false
hide_table_of_contents: false
keywords:
  - ips
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

Creates, updates, deletes, gets or lists an <code>ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.ips" /></td></tr>
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
    <td><CopyableCode code="network_name" /></td>
    <td><code>string</code></td>
    <td>Network name (wire: networkName)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Gateway value (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="netmask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Netmask value (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>IP ex: 213.186.33.34/24 (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="register" /></td>
    <td><code>string</code></td>
    <td>The Regional Internet Registry of this Ip Block (arin, ripe)</td>
</tr>
<tr>
    <td><CopyableCode code="vlan_number" /></td>
    <td><code>integer</code></td>
    <td>Vlan where this network is routed (wire: vlanNumber)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

IP block

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
    <td><CopyableCode code="network_name" /></td>
    <td><code>string</code></td>
    <td>Network name (wire: networkName)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Gateway value (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="netmask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Netmask value (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>IP ex: 213.186.33.34/24 (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="register" /></td>
    <td><code>string</code></td>
    <td>The Regional Internet Registry of this Ip Block (arin, ripe)</td>
</tr>
<tr>
    <td><CopyableCode code="vlan_number" /></td>
    <td><code>integer</code></td>
    <td>Vlan where this network is routed (wire: vlanNumber)</td>
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
    <td><a href="#parameter-network"><code>network</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an IP block</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List IP blocks</td>
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
<tr id="parameter-network">
    <td><CopyableCode code="network" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>IP ex: 213.186.33.34/24</td>
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

Get an IP block

```sql
SELECT
network_name,
country,
description,
gateway,
netmask,
network,
register,
vlan_number
FROM ovh.dedicated_cloud.ips
WHERE network = '{{ network }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List IP blocks

```sql
SELECT
network_name,
country,
description,
gateway,
netmask,
network,
register,
vlan_number
FROM ovh.dedicated_cloud.ips
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
