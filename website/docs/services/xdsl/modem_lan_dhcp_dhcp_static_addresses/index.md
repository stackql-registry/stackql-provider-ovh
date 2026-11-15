--- 
title: modem_lan_dhcp_dhcp_static_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - modem_lan_dhcp_dhcp_static_addresses
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

Creates, updates, deletes, gets or lists a <code>modem_lan_dhcp_dhcp_static_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modem_lan_dhcp_dhcp_static_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modem_lan_dhcp_dhcp_static_addresses" /></td></tr>
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
    <td>Name of the DHCP Static lease</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: IPAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>The MAC address of the device (wire: MACAddress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DHCP Static Address

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
    <td>Name of the DHCP Static lease</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: IPAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>The MAC address of the device (wire: MACAddress)</td>
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
    <td><a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-dhcp_name"><code>dhcp_name</code></a>, <a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the name, MAC address and reserved IP address of a static lease.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dhcp_name"><code>dhcp_name</code></a>, <a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the MAC addresses of the devices with a static lease on a DHCP server of the modem.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dhcp_name"><code>dhcp_name</code></a>, <a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip_address"><code>ip_address</code></a>, <a href="#parameter-mac_address"><code>mac_address</code></a></td>
    <td></td>
    <td>Reserves an IP address for a device MAC address on a DHCP server of the modem. Returns the created lease.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-dhcp_name"><code>dhcp_name</code></a>, <a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the name or the reserved IP address of a static lease.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-dhcp_name"><code>dhcp_name</code></a>, <a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Removes the static lease from the DHCP server of the modem. Returns the task that performs the change.</td>
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
<tr id="parameter-mac_address">
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td> macaddress (wire: MACAddress)</td>
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

Returns the name, MAC address and reserved IP address of a static lease.

```sql
SELECT
name,
task_id,
ip_address,
mac_address
FROM ovh.xdsl.modem_lan_dhcp_dhcp_static_addresses
WHERE mac_address = '{{ mac_address }}' -- required
AND dhcp_name = '{{ dhcp_name }}' -- required
AND lan_name = '{{ lan_name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the MAC addresses of the devices with a static lease on a DHCP server of the modem.

```sql
SELECT
name,
task_id,
ip_address,
mac_address
FROM ovh.xdsl.modem_lan_dhcp_dhcp_static_addresses
WHERE dhcp_name = '{{ dhcp_name }}' -- required
AND lan_name = '{{ lan_name }}' -- required
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

Reserves an IP address for a device MAC address on a DHCP server of the modem. Returns the created lease.

```sql
INSERT INTO ovh.xdsl.modem_lan_dhcp_dhcp_static_addresses (
ip_address,
mac_address,
name,
dhcp_name,
lan_name,
service_name
)
SELECT 
'{{ ip_address }}' /* required */,
'{{ mac_address }}' /* required */,
'{{ name }}',
'{{ dhcp_name }}',
'{{ lan_name }}',
'{{ service_name }}'
RETURNING
name,
task_id,
ip_address,
mac_address
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: modem_lan_dhcp_dhcp_static_addresses
  props:
    - name: dhcp_name
      value: "{{ dhcp_name }}"
      description: Required parameter for the modem_lan_dhcp_dhcp_static_addresses resource.
    - name: lan_name
      value: "{{ lan_name }}"
      description: Required parameter for the modem_lan_dhcp_dhcp_static_addresses resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the modem_lan_dhcp_dhcp_static_addresses resource.
    - name: ip_address
      value: "{{ ip_address }}"
      description: |
        IP address (e.g., 192.0.2.0)
    - name: mac_address
      value: "{{ mac_address }}"
      description: |
        The MAC address of the device
    - name: name
      value: "{{ name }}"
      description: |
        Name of the DHCP static lease
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

Changes the name or the reserved IP address of a static lease.

```sql
UPDATE ovh.xdsl.modem_lan_dhcp_dhcp_static_addresses
SET 
ip_address = '{{ ip_address }}',
name = '{{ name }}'
WHERE 
mac_address = '{{ mac_address }}' --required
AND dhcp_name = '{{ dhcp_name }}' --required
AND lan_name = '{{ lan_name }}' --required
AND service_name = '{{ service_name }}' --required;
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

Removes the static lease from the DHCP server of the modem. Returns the task that performs the change.

```sql
DELETE FROM ovh.xdsl.modem_lan_dhcp_dhcp_static_addresses
WHERE mac_address = '{{ mac_address }}' --required
AND dhcp_name = '{{ dhcp_name }}' --required
AND lan_name = '{{ lan_name }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
