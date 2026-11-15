--- 
title: vps
hide_title: false
hide_table_of_contents: false
keywords:
  - vps
  - vps
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

Creates, updates, deletes, gets or lists a <code>vps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vps.vps" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Set the name displayed in ManagerV6 for your VPS (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="keymap" /></td>
    <td><code>string</code></td>
    <td>Set KVM keyboard layout on VPS Cloud. Reboot your VPS after change (fr, us)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_status" /></td>
    <td><code>object</code></td>
    <td>Lock status of the VPS (wire: lockStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_limit" /></td>
    <td><code>integer</code></td>
    <td> (wire: memoryLimit)</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>object</code></td>
    <td>A structure describing characteristics of a VPS model</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_ip_blocks" /></td>
    <td><code>array</code></td>
    <td>Ip blocks for OVH monitoring servers (wire: monitoringIpBlocks)</td>
</tr>
<tr>
    <td><CopyableCode code="netboot_mode" /></td>
    <td><code>string</code></td>
    <td>All values a VPS netboot mode can be in (distant, local, rescue) (wire: netbootMode)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_type" /></td>
    <td><code>string</code></td>
    <td>All offers a VPS can have (beta-classic, classic, cloud, cloudram, game-classic, lowlat, ssd) (wire: offerType)</td>
</tr>
<tr>
    <td><CopyableCode code="sla_monitoring" /></td>
    <td><code>boolean</code></td>
    <td> (wire: slaMonitoring)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>All states a VPS can be in (backuping, installing, maintenance, rebooting, rescued, running, stopped, stopping, upgrading)</td>
</tr>
<tr>
    <td><CopyableCode code="vcore" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zone_type" /></td>
    <td><code>string</code></td>
    <td>Enum values for zone type (localzone, region) (wire: zoneType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

VPS Virtual Machine

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Set the name displayed in ManagerV6 for your VPS (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="keymap" /></td>
    <td><code>string</code></td>
    <td>Set KVM keyboard layout on VPS Cloud. Reboot your VPS after change (fr, us)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_status" /></td>
    <td><code>object</code></td>
    <td>Lock status of the VPS (wire: lockStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_limit" /></td>
    <td><code>integer</code></td>
    <td> (wire: memoryLimit)</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>object</code></td>
    <td>A structure describing characteristics of a VPS model</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_ip_blocks" /></td>
    <td><code>array</code></td>
    <td>Ip blocks for OVH monitoring servers (wire: monitoringIpBlocks)</td>
</tr>
<tr>
    <td><CopyableCode code="netboot_mode" /></td>
    <td><code>string</code></td>
    <td>All values a VPS netboot mode can be in (distant, local, rescue) (wire: netbootMode)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_type" /></td>
    <td><code>string</code></td>
    <td>All offers a VPS can have (beta-classic, classic, cloud, cloudram, game-classic, lowlat, ssd) (wire: offerType)</td>
</tr>
<tr>
    <td><CopyableCode code="sla_monitoring" /></td>
    <td><code>boolean</code></td>
    <td> (wire: slaMonitoring)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>All states a VPS can be in (backuping, installing, maintenance, rebooting, rescued, running, stopped, stopping, upgrading)</td>
</tr>
<tr>
    <td><CopyableCode code="vcore" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zone_type" /></td>
    <td><code>string</code></td>
    <td>Enum values for zone type (localzone, region) (wire: zoneType)</td>
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
    <td>Returns the model, zone, state, netboot mode, keymap, lock status, vCore count, memory limit and IAM metadata of the VPS.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the VPS of the account. Each name is the service name used by the other calls.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the display name, the KVM keyboard layout, the netboot mode and the SLA monitoring of the VPS. A keyboard layout change requires a reboot; a netboot change reboots a Cloud VPS automatically.</td>
</tr>
<tr>
    <td><a href="#abort_snapshot"><CopyableCode code="abort_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Stops the snapshot or automated backup operation in progress on the VPS.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts a contact change procedure for the admin, billing or tech contact of the VPS and returns the IDs of the change tasks.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirms the termination of the VPS with the token sent by email to the admin contact.</td>
</tr>
<tr>
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Creates a snapshot of the VPS and returns the task that performs it. The snapshot option must be active and no snapshot can exist.</td>
</tr>
<tr>
    <td><a href="#get_console_url"><CopyableCode code="get_console_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Returns a URL that opens a console on the VPS.</td>
</tr>
<tr>
    <td><a href="#open_console_access"><CopyableCode code="open_console_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Returns the host, port and password needed to open a VNC connection to the VPS. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reboots the VPS and returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#rebuild"><CopyableCode code="rebuild" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-imageId"><code>imageId</code></a></td>
    <td></td>
    <td>Rebuilds the VPS with the given template and returns the task that performs it. (Beta version)</td>
</tr>
<tr>
    <td><a href="#reinstall"><CopyableCode code="reinstall" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-templateId"><code>templateId</code></a></td>
    <td></td>
    <td>Reinstalls the VPS with the given template and returns the task that performs it. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#set_password"><CopyableCode code="set_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Sets a new root password on the VPS and returns the task that performs it. A Cloud VPS must be rebooted for the change to apply. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the VPS and returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Stops the VPS and returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the termination of the VPS and sends a confirmation token by email to the admin contact.</td>
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
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Returns the model, zone, state, netboot mode, keymap, lock status, vCore count, memory limit and IAM metadata of the VPS.

```sql
SELECT
name,
display_name,
cluster,
iam,
keymap,
lock_status,
memory_limit,
model,
monitoring_ip_blocks,
netboot_mode,
offer_type,
sla_monitoring,
state,
vcore,
zone,
zone_type
FROM ovh.vps.vps
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the VPS of the account. Each name is the service name used by the other calls.

```sql
SELECT
name,
display_name,
cluster,
iam,
keymap,
lock_status,
memory_limit,
model,
monitoring_ip_blocks,
netboot_mode,
offer_type,
sla_monitoring,
state,
vcore,
zone,
zone_type
FROM ovh.vps.vps
WHERE iam_tags = '{{ iam_tags }}'
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

Updates the display name, the KVM keyboard layout, the netboot mode and the SLA monitoring of the VPS. A keyboard layout change requires a reboot; a netboot change reboots a Cloud VPS automatically.

```sql
UPDATE ovh.vps.vps
SET 
display_name = '{{ display_name }}',
keymap = '{{ keymap }}',
netboot_mode = '{{ netboot_mode }}',
sla_monitoring = {{ sla_monitoring }}
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="abort_snapshot"
    values={[
        { label: 'abort_snapshot', value: 'abort_snapshot' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'get_console_url', value: 'get_console_url' },
        { label: 'open_console_access', value: 'open_console_access' },
        { label: 'reboot', value: 'reboot' },
        { label: 'rebuild', value: 'rebuild' },
        { label: 'reinstall', value: 'reinstall' },
        { label: 'set_password', value: 'set_password' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="abort_snapshot">

Stops the snapshot or automated backup operation in progress on the VPS.

```sql
EXEC ovh.vps.vps.abort_snapshot 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="change_contact">

Starts a contact change procedure for the admin, billing or tech contact of the VPS and returns the IDs of the change tasks.

```sql
EXEC ovh.vps.vps.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirms the termination of the VPS with the token sent by email to the admin contact.

```sql
EXEC ovh.vps.vps.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"commentaryFutureUse": "{{ commentaryFutureUse }}", 
"commentaryReason": "{{ commentaryReason }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="create_snapshot">

Creates a snapshot of the VPS and returns the task that performs it. The snapshot option must be active and no snapshot can exist.

```sql
EXEC ovh.vps.vps.create_snapshot 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"description": "{{ description }}"
}'
;
```
</TabItem>
<TabItem value="get_console_url">

Returns a URL that opens a console on the VPS.

```sql
EXEC ovh.vps.vps.get_console_url 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="open_console_access">

Returns the host, port and password needed to open a VNC connection to the VPS. (Deprecated, will be removed)

```sql
EXEC ovh.vps.vps.open_console_access 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"protocol": "{{ protocol }}"
}'
;
```
</TabItem>
<TabItem value="reboot">

Reboots the VPS and returns the task that performs it.

```sql
EXEC ovh.vps.vps.reboot 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="rebuild">

Rebuilds the VPS with the given template and returns the task that performs it. (Beta version)

```sql
EXEC ovh.vps.vps.rebuild 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"doNotSendPassword": {{ doNotSendPassword }}, 
"imageId": "{{ imageId }}", 
"installRTM": {{ installRTM }}, 
"postInstallScript": "{{ postInstallScript }}", 
"publicSshKey": "{{ publicSshKey }}", 
"sshKey": "{{ sshKey }}"
}'
;
```
</TabItem>
<TabItem value="reinstall">

Reinstalls the VPS with the given template and returns the task that performs it. (Deprecated, will be removed)

```sql
EXEC ovh.vps.vps.reinstall 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"doNotSendPassword": {{ doNotSendPassword }}, 
"language": "{{ language }}", 
"publicSshKey": "{{ publicSshKey }}", 
"softwareId": "{{ softwareId }}", 
"sshKey": "{{ sshKey }}", 
"templateId": {{ templateId }}
}'
;
```
</TabItem>
<TabItem value="set_password">

Sets a new root password on the VPS and returns the task that performs it. A Cloud VPS must be rebooted for the change to apply. (Deprecated, will be removed)

```sql
EXEC ovh.vps.vps.set_password 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="start">

Starts the VPS and returns the task that performs it.

```sql
EXEC ovh.vps.vps.start 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="stop">

Stops the VPS and returns the task that performs it.

```sql
EXEC ovh.vps.vps.stop 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="terminate">

Starts the termination of the VPS and sends a confirmation token by email to the admin contact.

```sql
EXEC ovh.vps.vps.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
