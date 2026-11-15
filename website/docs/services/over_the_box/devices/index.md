--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - over_the_box
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

Creates, updates, deletes, gets or lists a <code>devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.over_the_box.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The id of the device (wire: deviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="activated" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this device is associated to a service</td>
</tr>
<tr>
    <td><CopyableCode code="available_update" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not an upate is available for this device (wire: availableUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time the device has been seen on the provisionning servers (wire: lastSeen)</td>
</tr>
<tr>
    <td><CopyableCode code="network_interfaces" /></td>
    <td><code>array</code></td>
    <td>Network interfaces of the device (wire: networkInterfaces)</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The public IP of the device (example: 192.0.2.0) (wire: publicIp)</td>
</tr>
<tr>
    <td><CopyableCode code="system" /></td>
    <td><code>object</code></td>
    <td>Device system information</td>
</tr>
<tr>
    <td><CopyableCode code="system_version" /></td>
    <td><code>string</code></td>
    <td>System version of the device (wire: systemVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the device</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the device of an OverTheBox service. Returns the device ID, version, system information, public IP, network interfaces, last seen date and whether an update is available.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Unlink the device of an OverTheBox service. Removes the association between the device and the service. Link another device with linkDevice.</td>
</tr>
<tr>
    <td><a href="#backup"><CopyableCode code="backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Back up an OverTheBox device. Creates the device action that generates a configuration backup of the device, and returns that action.</td>
</tr>
<tr>
    <td><a href="#logs"><CopyableCode code="logs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generate a temporary URL for the device logs. Returns a temporary URL to download the logs of the OverTheBox device, with its expiration date.</td>
</tr>
<tr>
    <td><a href="#restore_backup"><CopyableCode code="restore_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-backupId"><code>backupId</code></a></td>
    <td></td>
    <td>Restore a backup on an OverTheBox device. Creates the group of device actions that restore the given backup on the device, and returns them.</td>
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
    <td>The internal name of your overTheBox offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your overTheBox offer (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the device of an OverTheBox service. Returns the device ID, version, system information, public IP, network interfaces, last seen date and whether an update is available.

```sql
SELECT
device_id,
activated,
available_update,
last_seen,
network_interfaces,
public_ip,
system,
system_version,
version
FROM ovh.over_the_box.devices
WHERE service_name = '{{ service_name }}' -- required
;
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

Unlink the device of an OverTheBox service. Removes the association between the device and the service. Link another device with linkDevice.

```sql
DELETE FROM ovh.over_the_box.devices
WHERE service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="backup"
    values={[
        { label: 'backup', value: 'backup' },
        { label: 'logs', value: 'logs' },
        { label: 'restore_backup', value: 'restore_backup' }
    ]}
>
<TabItem value="backup">

Back up an OverTheBox device. Creates the device action that generates a configuration backup of the device, and returns that action.

```sql
EXEC ovh.over_the_box.devices.backup 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="logs">

Generate a temporary URL for the device logs. Returns a temporary URL to download the logs of the OverTheBox device, with its expiration date.

```sql
EXEC ovh.over_the_box.devices.logs 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="restore_backup">

Restore a backup on an OverTheBox device. Creates the group of device actions that restore the given backup on the device, and returns them.

```sql
EXEC ovh.over_the_box.devices.restore_backup 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"backupId": "{{ backupId }}"
}'
;
```
</TabItem>
</Tabs>
