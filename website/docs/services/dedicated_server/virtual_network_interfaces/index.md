--- 
title: virtual_network_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_network_interfaces
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>virtual_network_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_network_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.virtual_network_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_uuid"
    values={[
        { label: 'get_by_uuid', value: 'get_by_uuid' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_uuid">

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
    <td>User defined VirtualNetworkInterface name</td>
</tr>
<tr>
    <td><CopyableCode code="server_name" /></td>
    <td><code>string</code></td>
    <td>Server bound to this VirtualNetworkInterface (wire: serverName)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>VirtualNetworkInterface activation state</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>VirtualNetworkInterface mode (public, public_aggregation, vrack, vrack_aggregation)</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_controller" /></td>
    <td><code>array</code></td>
    <td>NetworkInterfaceControllers bound to this VirtualNetworkInterface (wire: networkInterfaceController)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>VirtualNetworkInterface unique id</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vRack name</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td>User defined VirtualNetworkInterface name</td>
</tr>
<tr>
    <td><CopyableCode code="server_name" /></td>
    <td><code>string</code></td>
    <td>Server bound to this VirtualNetworkInterface (wire: serverName)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>VirtualNetworkInterface activation state</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Available VirtualNetworkInterface modes (public, public_aggregation, vrack, vrack_aggregation)</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_controller" /></td>
    <td><code>array</code></td>
    <td>NetworkInterfaceControllers bound to this VirtualNetworkInterface (wire: networkInterfaceController)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>VirtualNetworkInterface unique id</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vRack name</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your VirtualNetworkInterface

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
    <td>User defined VirtualNetworkInterface name</td>
</tr>
<tr>
    <td><CopyableCode code="server_name" /></td>
    <td><code>string</code></td>
    <td>Server bound to this VirtualNetworkInterface (wire: serverName)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>VirtualNetworkInterface activation state</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>VirtualNetworkInterface mode (public, public_aggregation, vrack, vrack_aggregation)</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_controller" /></td>
    <td><code>array</code></td>
    <td>NetworkInterfaceControllers bound to this VirtualNetworkInterface (wire: networkInterfaceController)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>VirtualNetworkInterface unique id</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vRack name</td>
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
    <td><a href="#get_by_uuid"><CopyableCode code="get_by_uuid" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>Get a virtual network interface. Returns the name, mode, activation state and vRack of a virtual network interface, and the network interface controllers bound to it. (Beta version)</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>Returns a virtual network interface from its UUID alone, without the server name in the path. The response includes the server it is bound to, its mode, its vRack and its network interface controllers.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-vrack"><code>vrack</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List virtual network interfaces. Returns the UUIDs of the virtual network interfaces of the server. Filter them by enabled, mode, vrack or name. (Beta version)</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>Uuid</td>
</tr>
<tr id="parameter-enabled">
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of enabled property (=)</td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Filter the value of mode property (=)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of name property (=)</td>
</tr>
<tr id="parameter-vrack">
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>Filter the value of vrack property (=)</td>
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
    defaultValue="get_by_uuid"
    values={[
        { label: 'get_by_uuid', value: 'get_by_uuid' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_uuid">

Get a virtual network interface. Returns the name, mode, activation state and vRack of a virtual network interface, and the network interface controllers bound to it. (Beta version)

```sql
SELECT
name,
server_name,
enabled,
mode,
network_interface_controller,
uuid,
vrack
FROM ovh.dedicated_server.virtual_network_interfaces
WHERE service_name = '{{ service_name }}' -- required
AND uuid = '{{ uuid }}' -- required
;
```
</TabItem>
<TabItem value="get">

Returns a virtual network interface from its UUID alone, without the server name in the path. The response includes the server it is bound to, its mode, its vRack and its network interface controllers.

```sql
SELECT
name,
server_name,
enabled,
mode,
network_interface_controller,
uuid,
vrack
FROM ovh.dedicated_server.virtual_network_interfaces
WHERE uuid = '{{ uuid }}' -- required
;
```
</TabItem>
<TabItem value="list">

List virtual network interfaces. Returns the UUIDs of the virtual network interfaces of the server. Filter them by enabled, mode, vrack or name. (Beta version)

```sql
SELECT
name,
server_name,
enabled,
mode,
network_interface_controller,
uuid,
vrack
FROM ovh.dedicated_server.virtual_network_interfaces
WHERE service_name = '{{ service_name }}' -- required
AND enabled = '{{ enabled }}'
AND mode = '{{ mode }}'
AND name = '{{ name }}'
AND vrack = '{{ vrack }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
