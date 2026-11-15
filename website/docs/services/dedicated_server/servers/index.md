--- 
title: servers
hide_title: false
hide_table_of_contents: false
keywords:
  - servers
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

Creates, updates, deletes, gets or lists a <code>servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.servers" /></td></tr>
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
    <td>dedicated server name</td>
</tr>
<tr>
    <td><CopyableCode code="boot_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: bootId)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>integer</code></td>
    <td>your server id (wire: serverId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>dedicated AZ localisation (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="boot_script" /></td>
    <td><code>string</code></td>
    <td>Ipxe script served on boot (wire: bootScript)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_range" /></td>
    <td><code>string</code></td>
    <td>dedicater server commercial range (wire: commercialRange)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>dedicated datacenter localisation (bhs1, bhs2, bhs3, bhs4, bhs5, bhs6, bhs7, bhs8, cch01, crx1, crx2, dc1, eri1, eri2, frcrx41, frcrx42, frcrx43, gra04, gra1, gra2, gra3, gsw, hdf01, hil1, ieb01, itbsi01, itmil01, itzvf01, lil1-int1, lim1, lim2, lim3, mr901, p19, rbx, rbx-hz, rbx1, rbx10, rbx2, rbx3, rbx4, rbx5, rbx6, rbx7, rbx8, rbx9, sbg1, sbg2, sbg3, sbg4, sbg5, sgp02, sgp1, syd03, syd1, syd2, vin1, waw1, ynm1, yyz01)</td>
</tr>
<tr>
    <td><CopyableCode code="efi_bootloader_path" /></td>
    <td><code>string</code></td>
    <td>EfiBootloader path (wire: efiBootloaderPath)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>dedicated server ip (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="link_speed" /></td>
    <td><code>integer</code></td>
    <td> (wire: linkSpeed)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring" /></td>
    <td><code>boolean</code></td>
    <td>Icmp monitoring state</td>
</tr>
<tr>
    <td><CopyableCode code="new_upgrade_system" /></td>
    <td><code>boolean</code></td>
    <td> (wire: newUpgradeSystem)</td>
</tr>
<tr>
    <td><CopyableCode code="no_intervention" /></td>
    <td><code>boolean</code></td>
    <td>Prevent datacenter intervention (wire: noIntervention)</td>
</tr>
<tr>
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>Operating system</td>
</tr>
<tr>
    <td><CopyableCode code="power_state" /></td>
    <td><code>string</code></td>
    <td>Power state of the server (poweroff, poweron) (wire: powerState)</td>
</tr>
<tr>
    <td><CopyableCode code="professional_use" /></td>
    <td><code>boolean</code></td>
    <td>Does this server have professional use option (wire: professionalUse)</td>
</tr>
<tr>
    <td><CopyableCode code="rack" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>dedicated region localisation</td>
</tr>
<tr>
    <td><CopyableCode code="rescue_mail" /></td>
    <td><code>string</code></td>
    <td>Custom email used to receive rescue credentials (wire: rescueMail)</td>
</tr>
<tr>
    <td><CopyableCode code="rescue_ssh_key" /></td>
    <td><code>string</code></td>
    <td>Public SSH Key used in the rescue mode (wire: rescueSshKey)</td>
</tr>
<tr>
    <td><CopyableCode code="reverse" /></td>
    <td><code>string</code></td>
    <td>dedicated server reverse</td>
</tr>
<tr>
    <td><CopyableCode code="root_device" /></td>
    <td><code>string</code></td>
    <td> (wire: rootDevice)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>All states a Dedicated can in (error, hacked, hackedBlocked, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="support_level" /></td>
    <td><code>string</code></td>
    <td>Dedicated server support level (critical, fastpath, gs, pro) (wire: supportLevel)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Server informations

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
    <td>dedicated server name</td>
</tr>
<tr>
    <td><CopyableCode code="boot_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: bootId)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>integer</code></td>
    <td>your server id (wire: serverId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>dedicated AZ localisation (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="boot_script" /></td>
    <td><code>string</code></td>
    <td>Ipxe script served on boot (wire: bootScript)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_range" /></td>
    <td><code>string</code></td>
    <td>dedicater server commercial range (wire: commercialRange)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>dedicated datacenter localisation (bhs1, bhs2, bhs3, bhs4, bhs5, bhs6, bhs7, bhs8, cch01, crx1, crx2, dc1, eri1, eri2, frcrx41, frcrx42, frcrx43, gra04, gra1, gra2, gra3, gsw, hdf01, hil1, ieb01, itbsi01, itmil01, itzvf01, lil1-int1, lim1, lim2, lim3, mr901, p19, rbx, rbx-hz, rbx1, rbx10, rbx2, rbx3, rbx4, rbx5, rbx6, rbx7, rbx8, rbx9, sbg1, sbg2, sbg3, sbg4, sbg5, sgp02, sgp1, syd03, syd1, syd2, vin1, waw1, ynm1, yyz01)</td>
</tr>
<tr>
    <td><CopyableCode code="efi_bootloader_path" /></td>
    <td><code>string</code></td>
    <td>EfiBootloader path (wire: efiBootloaderPath)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>dedicated server ip (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="link_speed" /></td>
    <td><code>integer</code></td>
    <td> (wire: linkSpeed)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring" /></td>
    <td><code>boolean</code></td>
    <td>Icmp monitoring state</td>
</tr>
<tr>
    <td><CopyableCode code="new_upgrade_system" /></td>
    <td><code>boolean</code></td>
    <td> (wire: newUpgradeSystem)</td>
</tr>
<tr>
    <td><CopyableCode code="no_intervention" /></td>
    <td><code>boolean</code></td>
    <td>Prevent datacenter intervention (wire: noIntervention)</td>
</tr>
<tr>
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>Operating system</td>
</tr>
<tr>
    <td><CopyableCode code="power_state" /></td>
    <td><code>string</code></td>
    <td>Power state of the server (poweroff, poweron) (wire: powerState)</td>
</tr>
<tr>
    <td><CopyableCode code="professional_use" /></td>
    <td><code>boolean</code></td>
    <td>Does this server have professional use option (wire: professionalUse)</td>
</tr>
<tr>
    <td><CopyableCode code="rack" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>dedicated region localisation</td>
</tr>
<tr>
    <td><CopyableCode code="rescue_mail" /></td>
    <td><code>string</code></td>
    <td>Custom email used to receive rescue credentials (wire: rescueMail)</td>
</tr>
<tr>
    <td><CopyableCode code="rescue_ssh_key" /></td>
    <td><code>string</code></td>
    <td>Public SSH Key used in the rescue mode (wire: rescueSshKey)</td>
</tr>
<tr>
    <td><CopyableCode code="reverse" /></td>
    <td><code>string</code></td>
    <td>dedicated server reverse</td>
</tr>
<tr>
    <td><CopyableCode code="root_device" /></td>
    <td><code>string</code></td>
    <td> (wire: rootDevice)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>All states a Dedicated can in (error, hacked, hackedBlocked, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="support_level" /></td>
    <td><code>string</code></td>
    <td>Dedicated server support level (critical, fastpath, gs, pro) (wire: supportLevel)</td>
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
    <td>Get a server. Returns the properties of the server, such as its datacenter, IP address, operating system, power state, and boot and rescue settings. The response also contains the IAM metadata of the server.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List servers. Returns the names of the dedicated servers the account can access. Each name is the serviceName used by the other calls on a server.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a server. Updates the writable properties of the server, such as its boot, rescue, monitoring and datacenter intervention settings. The other properties are read-only.</td>
</tr>
<tr>
    <td><a href="#authentication_secret"><CopyableCode code="authentication_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Get access credentials. Returns the credentials to connect to the server or to an application installed on it, such as SSH, RDP, SQL Server or a web control panel. Each entry gives the access type, URL, login and password.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.</td>
</tr>
<tr>
    <td><a href="#ip_block_merge"><CopyableCode code="ip_block_merge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-block"><code>block</code></a></td>
    <td></td>
    <td>Merge a split IP block. Merges a split IP block and routes it to the server. This operation cannot be undone. Returns the task that performs the merge.</td>
</tr>
<tr>
    <td><a href="#ip_move"><CopyableCode code="ip_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Move a failover IP to the server. Moves the given failover IP block to the server. Returns the task that performs the move.</td>
</tr>
<tr>
    <td><a href="#license_windows"><CopyableCode code="license_windows" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-licenseId"><code>licenseId</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Add an existing Windows license. Attaches an existing Windows license serial number to the server, for the given license version. The license can then be managed under /license/windows. Returns a task.</td>
</tr>
<tr>
    <td><a href="#ola_aggregation"><CopyableCode code="ola_aggregation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-virtualNetworkInterfaces"><code>virtualNetworkInterfaces</code></a></td>
    <td></td>
    <td>Aggregate network interfaces. Groups virtual network interfaces into one link aggregation, under the given name. Returns a task. (Beta version)</td>
</tr>
<tr>
    <td><a href="#ola_reset"><CopyableCode code="ola_reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-virtualNetworkInterface"><code>virtualNetworkInterface</code></a></td>
    <td></td>
    <td>Reset a network interface. Resets a virtual network interface to its default configuration. Returns a task. (Beta version)</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reboot the server. Performs a hard reboot of the server: the power is cycled without a clean shutdown of the operating system. Returns the reboot task, with its status and completion date.</td>
</tr>
<tr>
    <td><a href="#reinstall"><CopyableCode code="reinstall" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-operatingSystem"><code>operatingSystem</code></a></td>
    <td></td>
    <td>Installs an operating system on the server and returns the installation task. operatingSystem must be one of the names returned by GET /dedicated/server/&#123;serviceName&#125;/install/compatibleTemplates. By default, all disks of the disk group are erased.</td>
</tr>
<tr>
    <td><a href="#support_replace_cooling"><CopyableCode code="support_replace_cooling" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-comment"><code>comment</code></a>, <a href="#parameter-details"><code>details</code></a></td>
    <td></td>
    <td>Request a cooling module replacement. Opens a support request to replace a cooling module of the server, with a comment and technical details or logs. Returns the identifiers of the created support ticket and message. (Beta version)</td>
</tr>
<tr>
    <td><a href="#support_replace_hard_disk_drive"><CopyableCode code="support_replace_hard_disk_drive" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-comment"><code>comment</code></a>, <a href="#parameter-disks"><code>disks</code></a>, <a href="#parameter-inverse"><code>inverse</code></a></td>
    <td></td>
    <td>Request a disk replacement. Opens a support request to replace disks of the server, identified by serial number or slot. With inverse set to true, the listed disks are kept and all the other disks are replaced. Returns the identifiers of the created support ticket and message. (Beta version)</td>
</tr>
<tr>
    <td><a href="#support_replace_memory"><CopyableCode code="support_replace_memory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-comment"><code>comment</code></a>, <a href="#parameter-details"><code>details</code></a></td>
    <td></td>
    <td>Request a memory module replacement. Opens a support request to replace a faulty RAM module of the server, with a comment and technical details or logs. The faulty slots can be listed if known. Returns the identifiers of the created support ticket and message. (Beta version)</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.</td>
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
    <td>The internal name of your dedicated server</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
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

Get a server. Returns the properties of the server, such as its datacenter, IP address, operating system, power state, and boot and rescue settings. The response also contains the IAM metadata of the server.

```sql
SELECT
name,
boot_id,
server_id,
availability_zone,
boot_script,
commercial_range,
datacenter,
efi_bootloader_path,
iam,
ip,
link_speed,
monitoring,
new_upgrade_system,
no_intervention,
os,
power_state,
professional_use,
rack,
region,
rescue_mail,
rescue_ssh_key,
reverse,
root_device,
state,
support_level
FROM ovh.dedicated_server.servers
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List servers. Returns the names of the dedicated servers the account can access. Each name is the serviceName used by the other calls on a server.

```sql
SELECT
name,
boot_id,
server_id,
availability_zone,
boot_script,
commercial_range,
datacenter,
efi_bootloader_path,
iam,
ip,
link_speed,
monitoring,
new_upgrade_system,
no_intervention,
os,
power_state,
professional_use,
rack,
region,
rescue_mail,
rescue_ssh_key,
reverse,
root_device,
state,
support_level
FROM ovh.dedicated_server.servers
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

Update a server. Updates the writable properties of the server, such as its boot, rescue, monitoring and datacenter intervention settings. The other properties are read-only.

```sql
UPDATE ovh.dedicated_server.servers
SET 
boot_id = {{ boot_id }},
boot_script = '{{ boot_script }}',
efi_bootloader_path = '{{ efi_bootloader_path }}',
monitoring = {{ monitoring }},
no_intervention = {{ no_intervention }},
rescue_mail = '{{ rescue_mail }}',
rescue_ssh_key = '{{ rescue_ssh_key }}',
root_device = '{{ root_device }}',
state = '{{ state }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="authentication_secret"
    values={[
        { label: 'authentication_secret', value: 'authentication_secret' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'ip_block_merge', value: 'ip_block_merge' },
        { label: 'ip_move', value: 'ip_move' },
        { label: 'license_windows', value: 'license_windows' },
        { label: 'ola_aggregation', value: 'ola_aggregation' },
        { label: 'ola_reset', value: 'ola_reset' },
        { label: 'reboot', value: 'reboot' },
        { label: 'reinstall', value: 'reinstall' },
        { label: 'support_replace_cooling', value: 'support_replace_cooling' },
        { label: 'support_replace_hard_disk_drive', value: 'support_replace_hard_disk_drive' },
        { label: 'support_replace_memory', value: 'support_replace_memory' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="authentication_secret">

Get access credentials. Returns the credentials to connect to the server or to an application installed on it, such as SSH, RDP, SQL Server or a web control panel. Each entry gives the access type, URL, login and password.

```sql
EXEC ovh.dedicated_server.servers.authentication_secret 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.dedicated_server.servers.change_contact 
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

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.

```sql
EXEC ovh.dedicated_server.servers.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="ip_block_merge">

Merge a split IP block. Merges a split IP block and routes it to the server. This operation cannot be undone. Returns the task that performs the merge.

```sql
EXEC ovh.dedicated_server.servers.ip_block_merge 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"block": "{{ block }}"
}'
;
```
</TabItem>
<TabItem value="ip_move">

Move a failover IP to the server. Moves the given failover IP block to the server. Returns the task that performs the move.

```sql
EXEC ovh.dedicated_server.servers.ip_move 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"ip": "{{ ip }}"
}'
;
```
</TabItem>
<TabItem value="license_windows">

Add an existing Windows license. Attaches an existing Windows license serial number to the server, for the given license version. The license can then be managed under /license/windows. Returns a task.

```sql
EXEC ovh.dedicated_server.servers.license_windows 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"licenseId": "{{ licenseId }}", 
"version": "{{ version }}"
}'
;
```
</TabItem>
<TabItem value="ola_aggregation">

Aggregate network interfaces. Groups virtual network interfaces into one link aggregation, under the given name. Returns a task. (Beta version)

```sql
EXEC ovh.dedicated_server.servers.ola_aggregation 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"name": "{{ name }}", 
"virtualNetworkInterfaces": "{{ virtualNetworkInterfaces }}"
}'
;
```
</TabItem>
<TabItem value="ola_reset">

Reset a network interface. Resets a virtual network interface to its default configuration. Returns a task. (Beta version)

```sql
EXEC ovh.dedicated_server.servers.ola_reset 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"virtualNetworkInterface": "{{ virtualNetworkInterface }}"
}'
;
```
</TabItem>
<TabItem value="reboot">

Reboot the server. Performs a hard reboot of the server: the power is cycled without a clean shutdown of the operating system. Returns the reboot task, with its status and completion date.

```sql
EXEC ovh.dedicated_server.servers.reboot 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="reinstall">

Installs an operating system on the server and returns the installation task. operatingSystem must be one of the names returned by GET /dedicated/server/&#123;serviceName&#125;/install/compatibleTemplates. By default, all disks of the disk group are erased.

```sql
EXEC ovh.dedicated_server.servers.reinstall 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"customizations": "{{ customizations }}", 
"operatingSystem": "{{ operatingSystem }}", 
"properties": "{{ properties }}", 
"storage": "{{ storage }}"
}'
;
```
</TabItem>
<TabItem value="support_replace_cooling">

Request a cooling module replacement. Opens a support request to replace a cooling module of the server, with a comment and technical details or logs. Returns the identifiers of the created support ticket and message. (Beta version)

```sql
EXEC ovh.dedicated_server.servers.support_replace_cooling 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"comment": "{{ comment }}", 
"details": "{{ details }}"
}'
;
```
</TabItem>
<TabItem value="support_replace_hard_disk_drive">

Request a disk replacement. Opens a support request to replace disks of the server, identified by serial number or slot. With inverse set to true, the listed disks are kept and all the other disks are replaced. Returns the identifiers of the created support ticket and message. (Beta version)

```sql
EXEC ovh.dedicated_server.servers.support_replace_hard_disk_drive 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"comment": "{{ comment }}", 
"disks": "{{ disks }}", 
"inverse": {{ inverse }}
}'
;
```
</TabItem>
<TabItem value="support_replace_memory">

Request a memory module replacement. Opens a support request to replace a faulty RAM module of the server, with a comment and technical details or logs. The faulty slots can be listed if known. Returns the identifiers of the created support ticket and message. (Beta version)

```sql
EXEC ovh.dedicated_server.servers.support_replace_memory 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"comment": "{{ comment }}", 
"details": "{{ details }}", 
"slots": "{{ slots }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.

```sql
EXEC ovh.dedicated_server.servers.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
