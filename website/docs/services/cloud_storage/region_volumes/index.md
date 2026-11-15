--- 
title: region_volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - region_volumes
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

Creates, updates, deletes, gets or lists a <code>region_volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_volumes" /></td></tr>
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
    <td>Volume ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Volume name</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>array</code></td>
    <td>Volume attached to list (wire: attachedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the volume (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>array</code></td>
    <td>Volume backups</td>
</tr>
<tr>
    <td><CopyableCode code="bootable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the volume is bootable</td>
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
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Encryption settings (null when the volume is not encrypted with CMK)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Volume size</td>
</tr>
<tr>
    <td><CopyableCode code="snapshots" /></td>
    <td><code>array</code></td>
    <td>Volume snapshots</td>
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

Region volume

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
    <td>Volume ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Volume name</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>array</code></td>
    <td>Volume attached to list (wire: attachedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone of the volume (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>array</code></td>
    <td>Volume backups</td>
</tr>
<tr>
    <td><CopyableCode code="bootable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the volume is bootable</td>
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
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Encryption settings (null when the volume is not encrypted with CMK)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Volume size</td>
</tr>
<tr>
    <td><CopyableCode code="snapshots" /></td>
    <td><code>array</code></td>
    <td>Volume snapshots</td>
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
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a volume</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List your volumes</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create a volume</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a volume</td>
</tr>
<tr>
    <td><a href="#bulk_delete_snapshots"><CopyableCode code="bulk_delete_snapshots" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete your volume snapshots in bulk</td>
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
<tr id="parameter-volumeId">
    <td><CopyableCode code="volumeId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Volume ID</td>
</tr>
<tr id="parameter-volume_id">
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Volume ID (wire: volumeId)</td>
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

Get a volume

```sql
SELECT
id,
name,
attached_to,
availability_zone,
backups,
bootable,
creation_date,
description,
encryption,
size,
snapshots,
status,
type
FROM ovh.cloud_storage.region_volumes
WHERE region_name = '{{ region_name }}' -- required
AND volume_id = '{{ volume_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your volumes

```sql
SELECT
id,
name,
attached_to,
availability_zone,
backups,
bootable,
creation_date,
description,
encryption,
size,
snapshots,
status,
type
FROM ovh.cloud_storage.region_volumes
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

Create a volume

```sql
INSERT INTO ovh.cloud_storage.region_volumes (
availability_zone,
backup_id,
description,
encryption,
image_id,
instance_id,
name,
size,
snapshot_id,
type,
region_name,
service_name
)
SELECT 
'{{ availability_zone }}',
'{{ backup_id }}',
'{{ description }}',
'{{ encryption }}',
'{{ image_id }}',
'{{ instance_id }}',
'{{ name }}',
{{ size }},
'{{ snapshot_id }}',
'{{ type }}',
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
- name: region_volumes
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_volumes resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_volumes resource.
    - name: availability_zone
      value: "{{ availability_zone }}"
      description: |
        Availability zone to create the volume on
    - name: backup_id
      value: "{{ backup_id }}"
      description: |
        Backup ID
    - name: description
      value: "{{ description }}"
      description: |
        Volume description
    - name: encryption
      description: |
        Optional encryption settings. Set encryption.kms for CMK; omit for OMK.
      value:
        encrypted: {{ encrypted }}
        kms:
          domainId: "{{ domainId }}"
          serviceKeyId: "{{ serviceKeyId }}"
    - name: image_id
      value: "{{ image_id }}"
      description: |
        Image ID
    - name: instance_id
      value: "{{ instance_id }}"
      description: |
        Instance ID
    - name: name
      value: "{{ name }}"
      description: |
        Volume name
    - name: size
      value: {{ size }}
      description: |
        Volume size
    - name: snapshot_id
      value: "{{ snapshot_id }}"
      description: |
        Snapshot ID
    - name: type
      value: "{{ type }}"
      description: |
        Type of the volume
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
UPDATE ovh.cloud_storage.region_volumes
SET 
description = '{{ description }}',
name = '{{ name }}',
size = {{ size }},
type = '{{ type }}'
WHERE 
region_name = '{{ region_name }}' --required
AND volume_id = '{{ volume_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
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
sub_operations;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="bulk_delete_snapshots"
    values={[
        { label: 'bulk_delete_snapshots', value: 'bulk_delete_snapshots' }
    ]}
>
<TabItem value="bulk_delete_snapshots">

Delete your volume snapshots in bulk

```sql
EXEC ovh.cloud_storage.region_volumes.bulk_delete_snapshots 
@regionName='{{ regionName }}' --required, 
@volumeId='{{ volumeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"deleteAll": {{ deleteAll }}, 
"snapshotIds": "{{ snapshotIds }}"
}'
;
```
</TabItem>
</Tabs>
