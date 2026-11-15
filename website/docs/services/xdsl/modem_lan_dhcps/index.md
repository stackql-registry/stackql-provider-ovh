--- 
title: modem_lan_dhcps
hide_title: false
hide_table_of_contents: false
keywords:
  - modem_lan_dhcps
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

Creates, updates, deletes, gets or lists a <code>modem_lan_dhcps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modem_lan_dhcps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modem_lan_dhcps" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_name" /></td>
    <td><code>string</code></td>
    <td>Name of the DHCP (wire: dhcpName)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Domain name provided to the clients (wire: domainName)</td>
</tr>
<tr>
    <td><CopyableCode code="default_gateway" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: defaultGateway)</td>
</tr>
<tr>
    <td><CopyableCode code="end_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: endAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="lease_time" /></td>
    <td><code>integer</code></td>
    <td>Lease time in seconds of client assigned address (-1 means infinite) (wire: leaseTime)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_dns" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: primaryDNS)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_dns" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Secondary DNS servers to be given to the clients (example: 192.0.2.0) (wire: secondaryDNS)</td>
</tr>
<tr>
    <td><CopyableCode code="server_enabled" /></td>
    <td><code>boolean</code></td>
    <td>State of the DHCP server of the modem (wire: serverEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="start_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: startAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_mask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: subnetMask)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DHCP Configuration of the Modem

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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_name" /></td>
    <td><code>string</code></td>
    <td>Name of the DHCP (wire: dhcpName)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Domain name provided to the clients (wire: domainName)</td>
</tr>
<tr>
    <td><CopyableCode code="default_gateway" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: defaultGateway)</td>
</tr>
<tr>
    <td><CopyableCode code="end_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: endAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="lease_time" /></td>
    <td><code>integer</code></td>
    <td>Lease time in seconds of client assigned address (-1 means infinite) (wire: leaseTime)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_dns" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: primaryDNS)</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_dns" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Secondary DNS servers to be given to the clients (example: 192.0.2.0) (wire: secondaryDNS)</td>
</tr>
<tr>
    <td><CopyableCode code="server_enabled" /></td>
    <td><code>boolean</code></td>
    <td>State of the DHCP server of the modem (wire: serverEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="start_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: startAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_mask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: subnetMask)</td>
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
    <td><a href="#parameter-dhcp_name"><code>dhcp_name</code></a>, <a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the state, address range, subnet mask, gateway, DNS servers, domain name and lease time of a DHCP server of the modem.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the DHCP servers configured on a LAN of the modem.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dhcp_name"><code>dhcp_name</code></a>, <a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the state, address range, subnet mask, gateway, DNS servers, domain name or lease time of a DHCP server of the modem.</td>
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
<tr id="parameter-dhcp_name">
    <td><CopyableCode code="dhcp_name" /></td>
    <td><code>string</code></td>
    <td>Dhcp name (wire: dhcpName)</td>
</tr>
<tr id="parameter-lan_name">
    <td><CopyableCode code="lan_name" /></td>
    <td><code>string</code></td>
    <td>Lan name (wire: lanName)</td>
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

Returns the state, address range, subnet mask, gateway, DNS servers, domain name and lease time of a DHCP server of the modem.

```sql
SELECT
task_id,
dhcp_name,
domain_name,
default_gateway,
end_address,
lease_time,
primary_dns,
secondary_dns,
server_enabled,
start_address,
subnet_mask
FROM ovh.xdsl.modem_lan_dhcps
WHERE dhcp_name = '{{ dhcp_name }}' -- required
AND lan_name = '{{ lan_name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the DHCP servers configured on a LAN of the modem.

```sql
SELECT
task_id,
dhcp_name,
domain_name,
default_gateway,
end_address,
lease_time,
primary_dns,
secondary_dns,
server_enabled,
start_address,
subnet_mask
FROM ovh.xdsl.modem_lan_dhcps
WHERE lan_name = '{{ lan_name }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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

Changes the state, address range, subnet mask, gateway, DNS servers, domain name or lease time of a DHCP server of the modem.

```sql
UPDATE ovh.xdsl.modem_lan_dhcps
SET 
default_gateway = '{{ default_gateway }}',
domain_name = '{{ domain_name }}',
end_address = '{{ end_address }}',
lease_time = {{ lease_time }},
primary_dns = '{{ primary_dns }}',
secondary_dns = '{{ secondary_dns }}',
server_enabled = {{ server_enabled }},
start_address = '{{ start_address }}',
subnet_mask = '{{ subnet_mask }}'
WHERE 
dhcp_name = '{{ dhcp_name }}' --required
AND lan_name = '{{ lan_name }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
