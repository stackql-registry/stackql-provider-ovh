--- 
title: modems
hide_title: false
hide_table_of_contents: false
keywords:
  - modems
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

Creates, updates, deletes, gets or lists a <code>modems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modems" /></td></tr>
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
    <td><CopyableCode code="brand_name" /></td>
    <td><code>string</code></td>
    <td> (wire: brandName)</td>
</tr>
<tr>
    <td><CopyableCode code="acs_backend" /></td>
    <td><code>string</code></td>
    <td>ACS backend used by the modem (beta, dev, stable) (wire: acsBackend)</td>
</tr>
<tr>
    <td><CopyableCode code="acs_version" /></td>
    <td><code>string</code></td>
    <td>Version of ACS API used (wire: acsVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Describe the capabilities of the Modem</td>
</tr>
<tr>
    <td><CopyableCode code="dmz_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP Address of the DMZ (To modify or delete the DMZ IP on the modem, a re-configuration of your modem has to be made, your configuration will be maintained, but you will lose your connection a few minutes) (example: 192.0.2.0) (wire: dmzIP)</td>
</tr>
<tr>
    <td><CopyableCode code="easy_firewall_level" /></td>
    <td><code>string</code></td>
    <td>Level of the FireWall on the modem (BlockAll, Disabled, Normal) (wire: easyFirewallLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_support" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the modem supports IPv6 (wire: ipv6Support)</td>
</tr>
<tr>
    <td><CopyableCode code="is_bridged" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the modem is in bridge mode. To pass from bridge mode to routed mode, a reset is necessary. If the modem is managedByOvh, the bridge state will be kept after a reset (wire: isBridged)</td>
</tr>
<tr>
    <td><CopyableCode code="last_cwmp_request_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time the modem made a CWMP request to the Auto Configuration Server (wire: lastCwmpRequestDate)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td> (wire: macAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by_ovh" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the user can configure his modem via OVH Interface (will lock telnet and local HTTP configuration page) (wire: managedByOvh)</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mtu_size" /></td>
    <td><code>integer</code></td>
    <td>Size of the Maximum Transmission Unit on the modem's interfaces (1432, 1456, 1492) (wire: mtuSize)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td> (wire: serialNumber)</td>
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
    <td>Returns the modem brand, model, serial and MAC address, its bridge and DMZ settings, MTU, firewall level, IPv6 support, ACS backend and capabilities.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the settings that can be modified: management by OVHcloud, bridge mode, DMZ IP, MTU size and ACS backend.</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reboots the modem of the access, now or at the given date. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#reconfigure_voip"><CopyableCode code="reconfigure_voip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Pushes the VoIP line configuration again to the modem of the access.</td>
</tr>
<tr>
    <td><a href="#refresh_connected_devices"><CopyableCode code="refresh_connected_devices" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reads again from the modem of the access the devices connected to it. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Resets the modem of the access to its default configuration, and optionally the configuration stored by OVHcloud. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#reset_port_mapping_config"><CopyableCode code="reset_port_mapping_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Removes every port mapping rule of the modem of the access.</td>
</tr>
<tr>
    <td><a href="#retrieve_info"><CopyableCode code="retrieve_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reads the general information of the modem of the access. Returns an asynchronous task holding the modem information.</td>
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
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the modem brand, model, serial and MAC address, its bridge and DMZ settings, MTU, firewall level, IPv6 support, ACS backend and capabilities.

```sql
SELECT
brand_name,
acs_backend,
acs_version,
capabilities,
dmz_ip,
easy_firewall_level,
ipv_6_support,
is_bridged,
last_cwmp_request_date,
mac_address,
managed_by_ovh,
model,
mtu_size,
serial_number
FROM ovh.xdsl.modems
WHERE service_name = '{{ service_name }}' -- required
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

Changes the settings that can be modified: management by OVHcloud, bridge mode, DMZ IP, MTU size and ACS backend.

```sql
UPDATE ovh.xdsl.modems
SET 
acs_backend = '{{ acs_backend }}',
dmz_ip = '{{ dmz_ip }}',
is_bridged = {{ is_bridged }},
managed_by_ovh = {{ managed_by_ovh }},
mtu_size = {{ mtu_size }}
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reboot"
    values={[
        { label: 'reboot', value: 'reboot' },
        { label: 'reconfigure_voip', value: 'reconfigure_voip' },
        { label: 'refresh_connected_devices', value: 'refresh_connected_devices' },
        { label: 'reset', value: 'reset' },
        { label: 'reset_port_mapping_config', value: 'reset_port_mapping_config' },
        { label: 'retrieve_info', value: 'retrieve_info' }
    ]}
>
<TabItem value="reboot">

Reboots the modem of the access, now or at the given date. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.modems.reboot 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"todoDate": "{{ todoDate }}"
}'
;
```
</TabItem>
<TabItem value="reconfigure_voip">

Pushes the VoIP line configuration again to the modem of the access.

```sql
EXEC ovh.xdsl.modems.reconfigure_voip 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="refresh_connected_devices">

Reads again from the modem of the access the devices connected to it. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.modems.refresh_connected_devices 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="reset">

Resets the modem of the access to its default configuration, and optionally the configuration stored by OVHcloud. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.modems.reset 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"resetOvhConfig": {{ resetOvhConfig }}
}'
;
```
</TabItem>
<TabItem value="reset_port_mapping_config">

Removes every port mapping rule of the modem of the access.

```sql
EXEC ovh.xdsl.modems.reset_port_mapping_config 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="retrieve_info">

Reads the general information of the modem of the access. Returns an asynchronous task holding the modem information.

```sql
EXEC ovh.xdsl.modems.retrieve_info 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
