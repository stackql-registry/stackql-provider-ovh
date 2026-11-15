--- 
title: region_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - region_instances
  - cloud
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

Creates, updates, deletes, gets or lists a <code>region_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.region_instances" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Instance name</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Flavor id (wire: flavorId)</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Image id (wire: imageId)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_name" /></td>
    <td><code>string</code></td>
    <td>Flavor name (wire: flavorName)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>Actions that can be done on the instance</td>
</tr>
<tr>
    <td><CopyableCode code="addresses" /></td>
    <td><code>array</code></td>
    <td>Instance IP addresses</td>
</tr>
<tr>
    <td><CopyableCode code="attached_volumes" /></td>
    <td><code>array</code></td>
    <td>Volumes attached to the instance (wire: attachedVolumes)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the instance (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>array</code></td>
    <td>Instance Backups</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>object</code></td>
    <td>Instance flavor</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Instance image</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>User and address to SSH to your instance</td>
</tr>
<tr>
    <td><CopyableCode code="pending_task" /></td>
    <td><code>boolean</code></td>
    <td>A task is pending for the instance (wire: pendingTask)</td>
</tr>
<tr>
    <td><CopyableCode code="pricings" /></td>
    <td><code>array</code></td>
    <td>Instance Price</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Instance region</td>
</tr>
<tr>
    <td><CopyableCode code="region_type" /></td>
    <td><code>string</code></td>
    <td>Type of the region (localzone, region, region-3-az) (wire: regionType)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key" /></td>
    <td><code>string</code></td>
    <td>Instance SSH key name (wire: sshKey)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Instance status (ACTIVE, BUILD, BUILDING, DELETED, DELETING, ERROR, HARD_REBOOT, MIGRATING, PASSWORD, PAUSED, REBOOT, REBUILD, RESCUE, RESCUED, RESCUING, RESIZE, RESIZED, RESUMING, REVERT_RESIZE, SHELVED, SHELVED_OFFLOADED, SHELVING, SHUTOFF, SNAPSHOTTING, SOFT_DELETED, STOPPED, SUSPENDED, UNKNOWN, UNRESCUING, UNSHELVING, VERIFY_RESIZE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_state" /></td>
    <td><code>string</code></td>
    <td>Instance task state (, block_device_mapping, deleting, image_backup, image_pending_upload, image_snapshot, image_snapshot_pending, image_uploading, migrating, networking, pausing, powering-off, powering-on, reboot_pending, reboot_pending_hard, reboot_started, reboot_started_hard, reboot_starting, rebooting, rebooting_hard, rebooting_pending_hard, rebooting_started_hard, rebuild_block_device_mapping, rebuild_spawning, rebuilding, rescuing, resize_confirming, resize_finish, resize_migrated, resize_migrating, resize_prep, resize_reverting, restoring, resuming, scheduling, shelving, shelving_image_pending_upload, shelving_image_uploading, shelving_offloading, soft_deleting, spawning, starting, stopping, suspending, unknown, unpausing, unrescuing, unshelving, updating_password) (wire: taskState)</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>Instance volumes</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Instance

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Instance name</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Flavor id (wire: flavorId)</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Image id (wire: imageId)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_name" /></td>
    <td><code>string</code></td>
    <td>Flavor name (wire: flavorName)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>Actions that can be done on the instance</td>
</tr>
<tr>
    <td><CopyableCode code="addresses" /></td>
    <td><code>array</code></td>
    <td>Instance IP addresses</td>
</tr>
<tr>
    <td><CopyableCode code="attached_volumes" /></td>
    <td><code>array</code></td>
    <td>Volumes attached to the instance (wire: attachedVolumes)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the instance (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>array</code></td>
    <td>Instance Backups</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>object</code></td>
    <td>Instance flavor</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Instance image</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>User and address to SSH to your instance</td>
</tr>
<tr>
    <td><CopyableCode code="pending_task" /></td>
    <td><code>boolean</code></td>
    <td>A task is pending for the instance (wire: pendingTask)</td>
</tr>
<tr>
    <td><CopyableCode code="pricings" /></td>
    <td><code>array</code></td>
    <td>Instance Price</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Instance region</td>
</tr>
<tr>
    <td><CopyableCode code="region_type" /></td>
    <td><code>string</code></td>
    <td>Type of the region (localzone, region, region-3-az) (wire: regionType)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key" /></td>
    <td><code>string</code></td>
    <td>Instance SSH key name (wire: sshKey)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Instance status (ACTIVE, BUILD, BUILDING, DELETED, DELETING, ERROR, HARD_REBOOT, MIGRATING, PASSWORD, PAUSED, REBOOT, REBUILD, RESCUE, RESCUED, RESCUING, RESIZE, RESIZED, RESUMING, REVERT_RESIZE, SHELVED, SHELVED_OFFLOADED, SHELVING, SHUTOFF, SNAPSHOTTING, SOFT_DELETED, STOPPED, SUSPENDED, UNKNOWN, UNRESCUING, UNSHELVING, VERIFY_RESIZE)</td>
</tr>
<tr>
    <td><CopyableCode code="task_state" /></td>
    <td><code>string</code></td>
    <td>Instance task state (, block_device_mapping, deleting, image_backup, image_pending_upload, image_snapshot, image_snapshot_pending, image_uploading, migrating, networking, pausing, powering-off, powering-on, reboot_pending, reboot_pending_hard, reboot_started, reboot_started_hard, reboot_starting, rebooting, rebooting_hard, rebooting_pending_hard, rebooting_started_hard, rebuild_block_device_mapping, rebuild_spawning, rebuilding, rescuing, resize_confirming, resize_finish, resize_migrated, resize_migrating, resize_prep, resize_reverting, restoring, resuming, scheduling, shelving, shelving_image_pending_upload, shelving_image_uploading, shelving_offloading, soft_deleting, spawning, starting, stopping, suspending, unknown, unpausing, unrescuing, unshelving, updating_password) (wire: taskState)</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>Instance volumes</td>
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
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-with_backups"><code>with_backups</code></a>, <a href="#parameter-with_image"><code>with_image</code></a>, <a href="#parameter-with_networks"><code>with_networks</code></a>, <a href="#parameter-with_volumes"><code>with_volumes</code></a></td>
    <td>Get a specific instance on a specific region for a public cloud project</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List all instances of a specific region for a public cloud project</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-billing_period"><code>billing_period</code></a>, <a href="#parameter-boot_from"><code>boot_from</code></a>, <a href="#parameter-flavor"><code>flavor</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td></td>
    <td>Create an instance with its associated components (ssh key, private network, floating ip)</td>
</tr>
<tr>
    <td><a href="#abort_snapshot"><CopyableCode code="abort_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Abort an instance snapshot creation for a specific instance on a specific region for a public cloud project</td>
</tr>
<tr>
    <td><a href="#associate_floating_ip"><CopyableCode code="associate_floating_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-floatingIpId"><code>floatingIpId</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Associate an existing floating IP to an instance on a specific region for a public cloud project</td>
</tr>
<tr>
    <td><a href="#autobackup"><CopyableCode code="autobackup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-cron"><code>cron</code></a>, <a href="#parameter-rotation"><code>rotation</code></a></td>
    <td></td>
    <td>Create an automatic instance backup workflow</td>
</tr>
<tr>
    <td><a href="#floating_ip"><CopyableCode code="floating_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Create a floating IP and attach it to an instance on a specific region for a public cloud project</td>
</tr>
<tr>
    <td><a href="#reinstall"><CopyableCode code="reinstall" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-imageRegionName"><code>imageRegionName</code></a></td>
    <td></td>
    <td>Reinstall an instance with a new image</td>
</tr>
<tr>
    <td><a href="#snapshot"><CopyableCode code="snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create an instance snapshot for a specific instance on a specific region for a public cloud project</td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance ID</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance ID (wire: instanceId)</td>
</tr>
<tr id="parameter-regionName">
    <td><CopyableCode code="regionName" /></td>
    <td><code>string</code></td>
    <td>Region name</td>
</tr>
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Return instance even if it is deleted</td>
</tr>
<tr id="parameter-with_backups">
    <td><CopyableCode code="with_backups" /></td>
    <td><code>boolean</code></td>
    <td>Add backup information in response (wire: withBackups)</td>
</tr>
<tr id="parameter-with_image">
    <td><CopyableCode code="with_image" /></td>
    <td><code>boolean</code></td>
    <td>Add image information in response (wire: withImage)</td>
</tr>
<tr id="parameter-with_networks">
    <td><CopyableCode code="with_networks" /></td>
    <td><code>boolean</code></td>
    <td>Add network information in response (wire: withNetworks)</td>
</tr>
<tr id="parameter-with_volumes">
    <td><CopyableCode code="with_volumes" /></td>
    <td><code>boolean</code></td>
    <td>Add volume information in response (wire: withVolumes)</td>
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

Get a specific instance on a specific region for a public cloud project

```sql
SELECT
id,
name,
flavor_id,
image_id,
flavor_name,
actions,
addresses,
attached_volumes,
availability_zone,
backups,
flavor,
image,
login,
pending_task,
pricings,
region,
region_type,
ssh_key,
status,
task_state,
volumes
FROM ovh.cloud.region_instances
WHERE instance_id = '{{ instance_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND deleted = '{{ deleted }}'
AND with_backups = '{{ with_backups }}'
AND with_image = '{{ with_image }}'
AND with_networks = '{{ with_networks }}'
AND with_volumes = '{{ with_volumes }}'
;
```
</TabItem>
<TabItem value="list">

List all instances of a specific region for a public cloud project

```sql
SELECT
id,
name,
flavor_id,
image_id,
flavor_name,
actions,
addresses,
attached_volumes,
availability_zone,
backups,
flavor,
image,
login,
pending_task,
pricings,
region,
region_type,
ssh_key,
status,
task_state,
volumes
FROM ovh.cloud.region_instances
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create an instance with its associated components (ssh key, private network, floating ip)

```sql
INSERT INTO ovh.cloud.region_instances (
autobackup,
availability_zone,
billing_period,
boot_from,
bulk,
flavor,
group,
name,
network,
ssh_key,
ssh_key_create,
user_data,
volume,
region_name,
service_name
)
SELECT 
'{{ autobackup }}',
'{{ availability_zone }}',
'{{ billing_period }}' /* required */,
'{{ boot_from }}' /* required */,
{{ bulk }},
'{{ flavor }}' /* required */,
'{{ group }}',
'{{ name }}',
'{{ network }}' /* required */,
'{{ ssh_key }}',
'{{ ssh_key_create }}',
'{{ user_data }}',
'{{ volume }}',
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
resource_id,
action,
completed_at,
created_at,
progress,
regions,
started_at,
status,
sub_operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_instances
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_instances resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_instances resource.
    - name: autobackup
      description: |
        Create an autobackup workflow after instance start up
      value:
        cron: "{{ cron }}"
        distantImageName: "{{ distantImageName }}"
        distantRegionName: "{{ distantRegionName }}"
        imageName: "{{ imageName }}"
        name: "{{ name }}"
        rotation: {{ rotation }}
    - name: availability_zone
      value: "{{ availability_zone }}"
      description: |
        The availability zone where the instance will be created
    - name: billing_period
      value: "{{ billing_period }}"
      description: |
        Billing period
      valid_values: ['hourly', 'monthly']
    - name: boot_from
      description: |
        Boot the instance from an image or a volume
      value:
        imageId: "{{ imageId }}"
        imageRegionName: "{{ imageRegionName }}"
        volumeId: "{{ volumeId }}"
    - name: bulk
      value: {{ bulk }}
      description: |
        Create multiple instances
    - name: flavor
      description: |
        Flavor information
      value:
        id: "{{ id }}"
    - name: group
      description: |
        Start instance in group
      value:
        id: "{{ id }}"
    - name: name
      value: "{{ name }}"
      description: |
        Instance name
    - name: network
      description: |
        Networks information
      value:
        private:
          floatingIp:
            id: "{{ id }}"
          floatingIpCreate:
            description: "{{ description }}"
          gateway:
            id: "{{ id }}"
          gatewayCreate:
            model: "{{ model }}"
            name: "{{ name }}"
          ip: "{{ ip }}"
          network:
            id: "{{ id }}"
            subnetId: "{{ subnetId }}"
          networkCreate:
            name: "{{ name }}"
            subnet:
              cidr: "{{ cidr }}"
              dnsNameServers:
                - "{{ dnsNameServers }}"
              enableDhcp: {{ enableDhcp }}
              enableGatewayIP: {{ enableGatewayIP }}
              ipVersion: {{ ipVersion }}
            vlanId: {{ vlanId }}
        public: {{ public }}
    - name: ssh_key
      description: |
        Existing SSH Keypair
      value:
        name: "{{ name }}"
    - name: ssh_key_create
      description: |
        Information to create a new SSH Keypair
      value:
        name: "{{ name }}"
        publicKey: "{{ publicKey }}"
    - name: user_data
      value: "{{ user_data }}"
      description: |
        Configuration information or scripts to use upon launch
    - name: volume
      description: |
        Volume to create and/or attach to the instance
      value:
        id: "{{ id }}"
        name: "{{ name }}"
        size: {{ size }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="abort_snapshot"
    values={[
        { label: 'abort_snapshot', value: 'abort_snapshot' },
        { label: 'associate_floating_ip', value: 'associate_floating_ip' },
        { label: 'autobackup', value: 'autobackup' },
        { label: 'floating_ip', value: 'floating_ip' },
        { label: 'reinstall', value: 'reinstall' },
        { label: 'snapshot', value: 'snapshot' }
    ]}
>
<TabItem value="abort_snapshot">

Abort an instance snapshot creation for a specific instance on a specific region for a public cloud project

```sql
EXEC ovh.cloud.region_instances.abort_snapshot 
@instanceId='{{ instanceId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="associate_floating_ip">

Associate an existing floating IP to an instance on a specific region for a public cloud project

```sql
EXEC ovh.cloud.region_instances.associate_floating_ip 
@instanceId='{{ instanceId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"floatingIpId": "{{ floatingIpId }}", 
"gateway": "{{ gateway }}", 
"ip": "{{ ip }}"
}'
;
```
</TabItem>
<TabItem value="autobackup">

Create an automatic instance backup workflow

```sql
EXEC ovh.cloud.region_instances.autobackup 
@instanceId='{{ instanceId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"cron": "{{ cron }}", 
"distantImageName": "{{ distantImageName }}", 
"distantRegionName": "{{ distantRegionName }}", 
"imageName": "{{ imageName }}", 
"name": "{{ name }}", 
"rotation": {{ rotation }}
}'
;
```
</TabItem>
<TabItem value="floating_ip">

Create a floating IP and attach it to an instance on a specific region for a public cloud project

```sql
EXEC ovh.cloud.region_instances.floating_ip 
@instanceId='{{ instanceId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"gateway": "{{ gateway }}", 
"ip": "{{ ip }}"
}'
;
```
</TabItem>
<TabItem value="reinstall">

Reinstall an instance with a new image

```sql
EXEC ovh.cloud.region_instances.reinstall 
@instanceId='{{ instanceId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"imageId": "{{ imageId }}", 
"imageRegionName": "{{ imageRegionName }}"
}'
;
```
</TabItem>
<TabItem value="snapshot">

Create an instance snapshot for a specific instance on a specific region for a public cloud project

```sql
EXEC ovh.cloud.region_instances.snapshot 
@instanceId='{{ instanceId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"distantRegionName": "{{ distantRegionName }}", 
"distantSnapshotName": "{{ distantSnapshotName }}", 
"snapshotName": "{{ snapshotName }}"
}'
;
```
</TabItem>
</Tabs>
