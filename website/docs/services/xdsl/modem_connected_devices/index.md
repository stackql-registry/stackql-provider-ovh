--- 
title: modem_connected_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - modem_connected_devices
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>modem_connected_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modem_connected_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modem_connected_devices" /></td></tr>
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
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Host name given by the device to the modem (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>The state of this device on the modem</td>
</tr>
<tr>
    <td><CopyableCode code="address_source" /></td>
    <td><code>string</code></td>
    <td>How did the device got its IP address (DHCP, Static, Unknown) (wire: addressSource)</td>
</tr>
<tr>
    <td><CopyableCode code="information_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date time of the last update of thoses information (wire: informationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_type" /></td>
    <td><code>string</code></td>
    <td>On which interface is connected the device (wire: interfaceType)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The IP address of the device (example: 192.0.2.0) (wire: ipAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="lease_time_remaining" /></td>
    <td><code>integer</code></td>
    <td>The remaining time in seconds of the DHCP lease of this device (-1 means infinite) (wire: leaseTimeRemaining)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>MAC address of the device (wire: macAddress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Connected Device

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
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Host name given by the device to the modem (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>The state of this device on the modem</td>
</tr>
<tr>
    <td><CopyableCode code="address_source" /></td>
    <td><code>string</code></td>
    <td>How did the device got its IP address (DHCP, Static, Unknown) (wire: addressSource)</td>
</tr>
<tr>
    <td><CopyableCode code="information_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date time of the last update of thoses information (wire: informationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_type" /></td>
    <td><code>string</code></td>
    <td>On which interface is connected the device (wire: interfaceType)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The IP address of the device (example: 192.0.2.0) (wire: ipAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="lease_time_remaining" /></td>
    <td><code>integer</code></td>
    <td>The remaining time in seconds of the DHCP lease of this device (-1 means infinite) (wire: leaseTimeRemaining)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>MAC address of the device (wire: macAddress)</td>
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
    <td><a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the host name, IP address, interface, DHCP lease time and state of a device connected to the modem.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the MAC addresses of the devices connected to the modem of the access.</td>
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
<tr id="parameter-mac_address">
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>Mac address (wire: macAddress)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
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

Returns the host name, IP address, interface, DHCP lease time and state of a device connected to the modem.

```sql
SELECT
host_name,
active,
address_source,
information_date,
interface_type,
ip_address,
lease_time_remaining,
mac_address
FROM ovh.xdsl.modem_connected_devices
WHERE mac_address = '{{ mac_address }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the MAC addresses of the devices connected to the modem of the access.

```sql
SELECT
host_name,
active,
address_source,
information_date,
interface_type,
ip_address,
lease_time_remaining,
mac_address
FROM ovh.xdsl.modem_connected_devices
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
