--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.instances" /></td></tr>
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
    <td><code>string</code></td>
    <td>Instance id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Instance name</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_id" /></td>
    <td><code>string</code></td>
    <td>Instance flavor id (wire: flavorId)</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>Instance image id (wire: imageId)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key_id" /></td>
    <td><code>string</code></td>
    <td>Instance ssh key id (wire: sshKeyId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the instance (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Instance creation date</td>
</tr>
<tr>
    <td><CopyableCode code="current_month_outgoing_traffic" /></td>
    <td><code>integer</code></td>
    <td>Instance outgoing network traffic for the current month (in bytes) (wire: currentMonthOutgoingTraffic)</td>
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
    <td><CopyableCode code="ip_addresses" /></td>
    <td><code>array</code></td>
    <td>Instance IP addresses (wire: ipAddresses)</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_billing" /></td>
    <td><code>object</code></td>
    <td>Instance monthly billing status (wire: monthlyBilling)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_ids" /></td>
    <td><code>array</code></td>
    <td>Ids of pending public cloud operations (wire: operationIds)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Order plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Instance id</td>
</tr>
<tr>
    <td><CopyableCode code="rescue_password" /></td>
    <td><code>string (password)</code></td>
    <td>Rescue password if instance is in RESCUE status (wire: rescuePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key" /></td>
    <td><code>object</code></td>
    <td>Instance SSH key (wire: sshKey)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Instance status (ACTIVE, BUILD, BUILDING, DELETED, DELETING, ERROR, HARD_REBOOT, MIGRATING, PASSWORD, PAUSED, REBOOT, REBUILD, RESCUE, RESCUED, RESCUING, RESIZE, RESIZED, RESUMING, REVERT_RESIZE, SHELVED, SHELVED_OFFLOADED, SHELVING, SHUTOFF, SNAPSHOTTING, SOFT_DELETED, STOPPED, SUSPENDED, UNKNOWN, UNRESCUING, UNSHELVING, VERIFY_RESIZE)</td>
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
    <td><code>string</code></td>
    <td>Instance id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Instance name</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_id" /></td>
    <td><code>string</code></td>
    <td>Instance flavor id (wire: flavorId)</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>Instance image id (wire: imageId)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key_id" /></td>
    <td><code>string</code></td>
    <td>Instance ssh key id (wire: sshKeyId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the instance (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Instance creation date</td>
</tr>
<tr>
    <td><CopyableCode code="current_month_outgoing_traffic" /></td>
    <td><code>integer</code></td>
    <td>Instance outgoing network traffic for the current month (in bytes) (wire: currentMonthOutgoingTraffic)</td>
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
    <td><CopyableCode code="ip_addresses" /></td>
    <td><code>array</code></td>
    <td>Instance IP addresses (wire: ipAddresses)</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_billing" /></td>
    <td><code>object</code></td>
    <td>Instance monthly billing status (wire: monthlyBilling)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_ids" /></td>
    <td><code>array</code></td>
    <td>Ids of pending public cloud operations (wire: operationIds)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Order plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Instance id</td>
</tr>
<tr>
    <td><CopyableCode code="rescue_password" /></td>
    <td><code>string (password)</code></td>
    <td>Rescue password if instance is in RESCUE status (wire: rescuePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_key" /></td>
    <td><code>object</code></td>
    <td>Instance SSH key (wire: sshKey)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Instance status (ACTIVE, BUILD, BUILDING, DELETED, DELETING, ERROR, HARD_REBOOT, MIGRATING, PASSWORD, PAUSED, REBOOT, REBUILD, RESCUE, RESCUED, RESCUING, RESIZE, RESIZED, RESUMING, REVERT_RESIZE, SHELVED, SHELVED_OFFLOADED, SHELVING, SHUTOFF, SNAPSHOTTING, SOFT_DELETED, STOPPED, SUSPENDED, UNKNOWN, UNRESCUING, UNSHELVING, VERIFY_RESIZE)</td>
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
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get instance</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>Get instance</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-flavor_id"><code>flavor_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new instance</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-instance_name"><code>instance_name</code></a></td>
    <td></td>
    <td>Alter an instance</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an instance</td>
</tr>
<tr>
    <td><a href="#bulk"><CopyableCode code="bulk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-flavorId"><code>flavorId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-number"><code>number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create multiple instances</td>
</tr>
<tr>
    <td><a href="#active_monthly_billing"><CopyableCode code="active_monthly_billing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Activate monthly billing on instance</td>
</tr>
<tr>
    <td><a href="#application_access"><CopyableCode code="application_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Return initial credentials of applications installed from public image</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Reboot an instance</td>
</tr>
<tr>
    <td><a href="#reinstall"><CopyableCode code="reinstall" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-imageId"><code>imageId</code></a></td>
    <td></td>
    <td>Reinstall an instance</td>
</tr>
<tr>
    <td><a href="#rescue_mode"><CopyableCode code="rescue_mode" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-rescue"><code>rescue</code></a></td>
    <td></td>
    <td>Enable or disable rescue mode</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-flavorId"><code>flavorId</code></a></td>
    <td></td>
    <td>Migrate your instance to another flavor</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Resume a suspended instance</td>
</tr>
<tr>
    <td><a href="#shelve"><CopyableCode code="shelve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Shelve an instance. The resources dedicated to the Public Cloud instance are released. The data of the local storage will be stored, the duration of the operation depends on the size of the local disk. The instance can be unshelved at any time. Meanwhile hourly instances will not be billed. The Snapshot Storage used to store the instance's data will be billed.</td>
</tr>
<tr>
    <td><a href="#snapshot"><CopyableCode code="snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-snapshotName"><code>snapshotName</code></a></td>
    <td></td>
    <td>Snapshot an instance</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Start an instance</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Stop an instance. The resources dedicated to the Public Cloud instances are still reserved. The instance can be restarted at any time. Meanwhile, the same price is charged for the instance.</td>
</tr>
<tr>
    <td><a href="#unshelve"><CopyableCode code="unshelve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Unshelve an instance. The resources dedicated to the Public Cloud instance are restored. The duration of the operation depends on the size of the local disk. Instance billing will get back to normal and the snapshot used to store the instance's data will be deleted.</td>
</tr>
<tr>
    <td><a href="#vnc"><CopyableCode code="vnc" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get VNC access to your instance</td>
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
    <td><code>string</code></td>
    <td>Instance ID</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>Instance ID (wire: instanceId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Instance region</td>
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

Get instance

```sql
SELECT
id,
name,
flavor_id,
image_id,
ssh_key_id,
availability_zone,
created,
current_month_outgoing_traffic,
flavor,
image,
ip_addresses,
monthly_billing,
operation_ids,
plan_code,
region,
rescue_password,
ssh_key,
status
FROM ovh.cloud.instances
WHERE instance_id = '{{ instance_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Get instance

```sql
SELECT
id,
name,
flavor_id,
image_id,
ssh_key_id,
availability_zone,
created,
current_month_outgoing_traffic,
flavor,
image,
ip_addresses,
monthly_billing,
operation_ids,
plan_code,
region,
rescue_password,
ssh_key,
status
FROM ovh.cloud.instances
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND region = '{{ region }}'
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

Create a new instance

```sql
INSERT INTO ovh.cloud.instances (
autobackup,
availability_zone,
flavor_id,
group_id,
image_id,
monthly_billing,
name,
networks,
region,
ssh_key_id,
user_data,
volume_id,
service_name
)
SELECT 
'{{ autobackup }}',
'{{ availability_zone }}',
'{{ flavor_id }}' /* required */,
'{{ group_id }}',
'{{ image_id }}',
{{ monthly_billing }},
'{{ name }}' /* required */,
'{{ networks }}',
'{{ region }}' /* required */,
'{{ ssh_key_id }}',
'{{ user_data }}',
'{{ volume_id }}',
'{{ service_name }}'
RETURNING
id,
name,
flavor_id,
image_id,
ssh_key_id,
availability_zone,
created,
current_month_outgoing_traffic,
flavor,
image,
ip_addresses,
monthly_billing,
operation_ids,
plan_code,
region,
rescue_password,
ssh_key,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the instances resource.
    - name: autobackup
      description: |
        Create an autobackup workflow after instance start up
      value:
        cron: "{{ cron }}"
        rotation: {{ rotation }}
    - name: availability_zone
      value: "{{ availability_zone }}"
      description: |
        Availability zone to create the instance on
    - name: flavor_id
      value: "{{ flavor_id }}"
      description: |
        Instance flavor id
    - name: group_id
      value: "{{ group_id }}"
      description: |
        Start instance in group
    - name: image_id
      value: "{{ image_id }}"
      description: |
        Instance image id
    - name: monthly_billing
      value: {{ monthly_billing }}
      description: |
        Active monthly billing
    - name: name
      value: "{{ name }}"
      description: |
        Instance name
    - name: networks
      description: |
        Create network interfaces
      value:
        - ip: "{{ ip }}"
          networkId: "{{ networkId }}"
    - name: region
      value: "{{ region }}"
      description: |
        Instance region
    - name: ssh_key_id
      value: "{{ ssh_key_id }}"
      description: |
        SSH keypair id
    - name: user_data
      value: "{{ user_data }}"
      description: |
        Configuration information or scripts to use upon launch
    - name: volume_id
      value: "{{ volume_id }}"
      description: |
        Specify a volume id to boot from it
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

Alter an instance

```sql
UPDATE ovh.cloud.instances
SET 
instance_name = '{{ instance_name }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND instance_name = '{{ instance_name }}' --required;
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

Delete an instance

```sql
DELETE FROM ovh.cloud.instances
WHERE instance_id = '{{ instance_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="bulk"
    values={[
        { label: 'bulk', value: 'bulk' },
        { label: 'active_monthly_billing', value: 'active_monthly_billing' },
        { label: 'application_access', value: 'application_access' },
        { label: 'reboot', value: 'reboot' },
        { label: 'reinstall', value: 'reinstall' },
        { label: 'rescue_mode', value: 'rescue_mode' },
        { label: 'resize', value: 'resize' },
        { label: 'resume', value: 'resume' },
        { label: 'shelve', value: 'shelve' },
        { label: 'snapshot', value: 'snapshot' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' },
        { label: 'unshelve', value: 'unshelve' },
        { label: 'vnc', value: 'vnc' }
    ]}
>
<TabItem value="bulk">

Create multiple instances

```sql
EXEC ovh.cloud.instances.bulk 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"autobackup": "{{ autobackup }}", 
"availabilityZone": "{{ availabilityZone }}", 
"flavorId": "{{ flavorId }}", 
"groupId": "{{ groupId }}", 
"imageId": "{{ imageId }}", 
"monthlyBilling": {{ monthlyBilling }}, 
"name": "{{ name }}", 
"networks": "{{ networks }}", 
"number": {{ number }}, 
"region": "{{ region }}", 
"sshKeyId": "{{ sshKeyId }}", 
"userData": "{{ userData }}", 
"volumeId": "{{ volumeId }}"
}'
;
```
</TabItem>
<TabItem value="active_monthly_billing">

Activate monthly billing on instance

```sql
EXEC ovh.cloud.instances.active_monthly_billing 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="application_access">

Return initial credentials of applications installed from public image

```sql
EXEC ovh.cloud.instances.application_access 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="reboot">

Reboot an instance

```sql
EXEC ovh.cloud.instances.reboot 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="reinstall">

Reinstall an instance

```sql
EXEC ovh.cloud.instances.reinstall 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"imageId": "{{ imageId }}"
}'
;
```
</TabItem>
<TabItem value="rescue_mode">

Enable or disable rescue mode

```sql
EXEC ovh.cloud.instances.rescue_mode 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"imageId": "{{ imageId }}", 
"rescue": {{ rescue }}
}'
;
```
</TabItem>
<TabItem value="resize">

Migrate your instance to another flavor

```sql
EXEC ovh.cloud.instances.resize 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"flavorId": "{{ flavorId }}"
}'
;
```
</TabItem>
<TabItem value="resume">

Resume a suspended instance

```sql
EXEC ovh.cloud.instances.resume 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="shelve">

Shelve an instance. The resources dedicated to the Public Cloud instance are released. The data of the local storage will be stored, the duration of the operation depends on the size of the local disk. The instance can be unshelved at any time. Meanwhile hourly instances will not be billed. The Snapshot Storage used to store the instance's data will be billed.

```sql
EXEC ovh.cloud.instances.shelve 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="snapshot">

Snapshot an instance

```sql
EXEC ovh.cloud.instances.snapshot 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"snapshotName": "{{ snapshotName }}"
}'
;
```
</TabItem>
<TabItem value="start">

Start an instance

```sql
EXEC ovh.cloud.instances.start 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="stop">

Stop an instance. The resources dedicated to the Public Cloud instances are still reserved. The instance can be restarted at any time. Meanwhile, the same price is charged for the instance.

```sql
EXEC ovh.cloud.instances.stop 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="unshelve">

Unshelve an instance. The resources dedicated to the Public Cloud instance are restored. The duration of the operation depends on the size of the local disk. Instance billing will get back to normal and the snapshot used to store the instance's data will be deleted.

```sql
EXEC ovh.cloud.instances.unshelve 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="vnc">

Get VNC access to your instance

```sql
EXEC ovh.cloud.instances.vnc 
@instanceId='{{ instanceId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
