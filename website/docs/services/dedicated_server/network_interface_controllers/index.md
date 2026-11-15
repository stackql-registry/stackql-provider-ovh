--- 
title: network_interface_controllers
hide_title: false
hide_table_of_contents: false
keywords:
  - network_interface_controllers
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

Creates, updates, deletes, gets or lists a <code>network_interface_controllers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_interface_controllers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.network_interface_controllers" /></td></tr>
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
    <td><CopyableCode code="link_type" /></td>
    <td><code>string</code></td>
    <td>NetworkInterfaceController linkType (isolated, private, private_lag, provisioning, provisioning_lag, public, public_lag) (wire: linkType)</td>
</tr>
<tr>
    <td><CopyableCode code="mac" /></td>
    <td><code>string (mac-address)</code></td>
    <td>NetworkInterfaceController mac (example: 00:00:5e:00:53:01)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_network_interface" /></td>
    <td><code>string (uuid)</code></td>
    <td>VirtualNetworkInterface bound to this NetworkInterfaceController (wire: virtualNetworkInterface)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your networkInterfaceController

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
    <td><CopyableCode code="link_type" /></td>
    <td><code>string</code></td>
    <td>NetworkInterfaceController linkType (isolated, private, private_lag, provisioning, provisioning_lag, public, public_lag) (wire: linkType)</td>
</tr>
<tr>
    <td><CopyableCode code="mac" /></td>
    <td><code>string (mac-address)</code></td>
    <td>NetworkInterfaceController mac (example: 00:00:5e:00:53:01)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_network_interface" /></td>
    <td><code>string (uuid)</code></td>
    <td>VirtualNetworkInterface bound to this NetworkInterfaceController (wire: virtualNetworkInterface)</td>
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
    <td><a href="#parameter-mac"><code>mac</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a network interface controller. Returns the MAC address of a network interface controller, its link type, such as public, private or isolated, and the virtual network interface bound to it. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-link_type"><code>link_type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List network interface controllers. Returns the MAC addresses of the network interface controllers of the server. Filter them by link type with the linkType parameter. (Beta version)</td>
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
<tr id="parameter-mac">
    <td><CopyableCode code="mac" /></td>
    <td><code>string (mac-address)</code></td>
    <td>NetworkInterfaceController mac</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
<tr id="parameter-link_type">
    <td><CopyableCode code="link_type" /></td>
    <td><code>string</code></td>
    <td>Filter the value of linkType property (=) (wire: linkType)</td>
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

Get a network interface controller. Returns the MAC address of a network interface controller, its link type, such as public, private or isolated, and the virtual network interface bound to it. (Beta version)

```sql
SELECT
link_type,
mac,
virtual_network_interface
FROM ovh.dedicated_server.network_interface_controllers
WHERE mac = '{{ mac }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List network interface controllers. Returns the MAC addresses of the network interface controllers of the server. Filter them by link type with the linkType parameter. (Beta version)

```sql
SELECT
link_type,
mac,
virtual_network_interface
FROM ovh.dedicated_server.network_interface_controllers
WHERE service_name = '{{ service_name }}' -- required
AND link_type = '{{ link_type }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
