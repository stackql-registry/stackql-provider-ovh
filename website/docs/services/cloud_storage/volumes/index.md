--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
  - cloud_storage
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

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.volumes" /></td></tr>
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
    <td>Volume id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Volume name</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>array</code></td>
    <td>Volume attached to instances id (wire: attachedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the volume (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="bootable" /></td>
    <td><code>boolean</code></td>
    <td>Volume bootable</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Volume creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Volume description</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Order plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Volume region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Volume size (in GB)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Volume status (attaching, available, awaiting-transfer, backing-up, creating, deleted, deleting, detaching, downloading, error, error_backing-up, error_deleting, error_extending, error_restoring, extending, in-use, maintenance, reserved, restoring-backup, retyping, snapshotting, uploading)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Volume type (classic, classic-luks, classic-multiattach, high-speed, high-speed-gen2, high-speed-gen2-luks, high-speed-luks)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Volume

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
    <td>Volume id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Volume name</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>array</code></td>
    <td>Volume attached to instances id (wire: attachedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the volume (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="bootable" /></td>
    <td><code>boolean</code></td>
    <td>Volume bootable</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Volume creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Volume description</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Order plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Volume region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Volume size (in GB)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Volume status (attaching, available, awaiting-transfer, backing-up, creating, deleted, deleting, detaching, downloading, error, error_backing-up, error_deleting, error_extending, error_restoring, extending, in-use, maintenance, reserved, restoring-backup, retyping, snapshotting, uploading)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Volume type (classic, classic-luks, classic-multiattach, high-speed, high-speed-gen2, high-speed-gen2-luks, high-speed-luks)</td>
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
    <td><a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get volume details</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>Get volumes</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a volume</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a volume</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a volume</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td></td>
    <td>Attach a volume on an instance</td>
</tr>
<tr>
    <td><a href="#detach"><CopyableCode code="detach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td></td>
    <td>Detach a volume from an instance</td>
</tr>
<tr>
    <td><a href="#snapshot"><CopyableCode code="snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Snapshot a volume</td>
</tr>
<tr>
    <td><a href="#upsize"><CopyableCode code="upsize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Extend a volume</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-volumeId">
    <td><CopyableCode code="volumeId" /></td>
    <td><code>string</code></td>
    <td>Volume ID</td>
</tr>
<tr id="parameter-volume_id">
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string</code></td>
    <td>Volume ID (wire: volumeId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Volume region</td>
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

Get volume details

```sql
SELECT
id,
name,
attached_to,
availability_zone,
bootable,
creation_date,
description,
plan_code,
region,
size,
status,
type
FROM ovh.cloud_storage.volumes
WHERE volume_id = '{{ volume_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Get volumes

```sql
SELECT
id,
name,
attached_to,
availability_zone,
bootable,
creation_date,
description,
plan_code,
region,
size,
status,
type
FROM ovh.cloud_storage.volumes
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

Create a volume

```sql
INSERT INTO ovh.cloud_storage.volumes (
availability_zone,
description,
image_id,
name,
region,
size,
snapshot_id,
type,
service_name
)
SELECT 
'{{ availability_zone }}',
'{{ description }}',
'{{ image_id }}',
'{{ name }}',
'{{ region }}' /* required */,
{{ size }} /* required */,
'{{ snapshot_id }}',
'{{ type }}' /* required */,
'{{ service_name }}'
RETURNING
id,
name,
attached_to,
availability_zone,
bootable,
creation_date,
description,
plan_code,
region,
size,
status,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volumes
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the volumes resource.
    - name: availability_zone
      value: "{{ availability_zone }}"
      description: |
        Availability zone of the volume (required for 3AZ regions, forbidden for classic type)
    - name: description
      value: "{{ description }}"
      description: |
        Volume description
    - name: image_id
      value: "{{ image_id }}"
      description: |
        Id of image to create a bootable volume
    - name: name
      value: "{{ name }}"
      description: |
        Volume name
    - name: region
      value: "{{ region }}"
      description: |
        Volume region
    - name: size
      value: {{ size }}
      description: |
        Volume size (in GiB)
    - name: snapshot_id
      value: "{{ snapshot_id }}"
      description: |
        Source snapshot id
    - name: type
      value: "{{ type }}"
      description: |
        Volume type
      valid_values: ['classic', 'classic-luks', 'classic-multiattach', 'high-speed', 'high-speed-gen2', 'high-speed-gen2-luks', 'high-speed-luks']
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

Update a volume

```sql
UPDATE ovh.cloud_storage.volumes
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
volume_id = '{{ volume_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
attached_to,
availability_zone,
bootable,
creation_date,
description,
plan_code,
region,
size,
status,
type;
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

Delete a volume

```sql
DELETE FROM ovh.cloud_storage.volumes
WHERE volume_id = '{{ volume_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' },
        { label: 'detach', value: 'detach' },
        { label: 'snapshot', value: 'snapshot' },
        { label: 'upsize', value: 'upsize' }
    ]}
>
<TabItem value="attach">

Attach a volume on an instance

```sql
EXEC ovh.cloud_storage.volumes.attach 
@volumeId='{{ volumeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"instanceId": "{{ instanceId }}"
}'
;
```
</TabItem>
<TabItem value="detach">

Detach a volume from an instance

```sql
EXEC ovh.cloud_storage.volumes.detach 
@volumeId='{{ volumeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"instanceId": "{{ instanceId }}"
}'
;
```
</TabItem>
<TabItem value="snapshot">

Snapshot a volume

```sql
EXEC ovh.cloud_storage.volumes.snapshot 
@volumeId='{{ volumeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"description": "{{ description }}", 
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="upsize">

Extend a volume

```sql
EXEC ovh.cloud_storage.volumes.upsize 
@volumeId='{{ volumeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"size": {{ size }}
}'
;
```
</TabItem>
</Tabs>
