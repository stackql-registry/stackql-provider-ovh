--- 
title: virtual_mac_virtual_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_mac_virtual_addresses
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

Creates, updates, deletes, gets or lists a <code>virtual_mac_virtual_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_mac_virtual_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.virtual_mac_virtual_addresses" /></td></tr>
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
    <td><CopyableCode code="virtual_machine_name" /></td>
    <td><code>string</code></td>
    <td>Friendly name of your Virtual Machine behind this IP/MAC (wire: virtualMachineName)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (example: 192.0.2.0) (wire: ipAddress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

 ip address linked with this virtual mac address

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
    <td><CopyableCode code="virtual_machine_name" /></td>
    <td><code>string</code></td>
    <td>Friendly name of your Virtual Machine behind this IP/MAC (wire: virtualMachineName)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (example: 192.0.2.0) (wire: ipAddress)</td>
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
    <td><a href="#parameter-ip_address"><code>ip_address</code></a>, <a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an IP of a virtual MAC. Returns an IPv4 address associated with the virtual MAC and the friendly name of the virtual machine behind it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List IPs of a virtual MAC. Returns the IPv4 addresses associated with the virtual MAC. A virtual MAC can be associated with one or more IPs.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip_address"><code>ip_address</code></a>, <a href="#parameter-virtual_machine_name"><code>virtual_machine_name</code></a></td>
    <td></td>
    <td>Add an IP to a virtual MAC. Associates an IPv4 address with the virtual MAC, with a friendly name for the virtual machine behind it. Returns a task.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip_address"><code>ip_address</code></a>, <a href="#parameter-mac_address"><code>mac_address</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Remove an IP from a virtual MAC. Removes the IPv4 address from the virtual MAC and returns a task. Removing the last linked IP also deletes the virtual MAC.</td>
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
<tr id="parameter-ip_address">
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (wire: ipAddress)</td>
</tr>
<tr id="parameter-mac_address">
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>Virtual MAC address in 00:00:00:00:00:00 format (wire: macAddress)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
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

Get an IP of a virtual MAC. Returns an IPv4 address associated with the virtual MAC and the friendly name of the virtual machine behind it.

```sql
SELECT
virtual_machine_name,
ip_address
FROM ovh.dedicated_server.virtual_mac_virtual_addresses
WHERE ip_address = '{{ ip_address }}' -- required
AND mac_address = '{{ mac_address }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List IPs of a virtual MAC. Returns the IPv4 addresses associated with the virtual MAC. A virtual MAC can be associated with one or more IPs.

```sql
SELECT
virtual_machine_name,
ip_address
FROM ovh.dedicated_server.virtual_mac_virtual_addresses
WHERE mac_address = '{{ mac_address }}' -- required
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

Add an IP to a virtual MAC. Associates an IPv4 address with the virtual MAC, with a friendly name for the virtual machine behind it. Returns a task.

```sql
INSERT INTO ovh.dedicated_server.virtual_mac_virtual_addresses (
ip_address,
virtual_machine_name,
mac_address,
service_name
)
SELECT 
'{{ ip_address }}' /* required */,
'{{ virtual_machine_name }}' /* required */,
'{{ mac_address }}',
'{{ service_name }}'
RETURNING
planned_intervention_id,
task_id,
change_uuid,
comment,
done_date,
function,
last_update,
need_schedule,
note,
start_date,
status,
tags,
ticket_reference
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_mac_virtual_addresses
  props:
    - name: mac_address
      value: "{{ mac_address }}"
      description: Required parameter for the virtual_mac_virtual_addresses resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the virtual_mac_virtual_addresses resource.
    - name: ip_address
      value: "{{ ip_address }}"
      description: |
        IPv4 address (e.g., 192.0.2.0)
    - name: virtual_machine_name
      value: "{{ virtual_machine_name }}"
      description: |
        Friendly name of your Virtual Machine behind this IP/MAC
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

Remove an IP from a virtual MAC. Removes the IPv4 address from the virtual MAC and returns a task. Removing the last linked IP also deletes the virtual MAC.

```sql
DELETE FROM ovh.dedicated_server.virtual_mac_virtual_addresses
WHERE ip_address = '{{ ip_address }}' --required
AND mac_address = '{{ mac_address }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
