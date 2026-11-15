--- 
title: netapp_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - netapp_shares
  - storage
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

Creates, updates, deletes, gets or lists a <code>netapp_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="netapp_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.storage.netapp_shares" /></td></tr>
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
    <td>Share ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Share name</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>Snapshot ID used to create the share (wire: snapshotID)</td>
</tr>
<tr>
    <td><CopyableCode code="mount_point_name" /></td>
    <td><code>string</code></td>
    <td>User-defined name used to generate human readable access path for the share (wire: mountPointName)</td>
</tr>
<tr>
    <td><CopyableCode code="access_mode" /></td>
    <td><code>string</code></td>
    <td>Share access mode (ro, rw) (wire: accessMode)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Share creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share description</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Share protocol (NFS)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Share size in GiB</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Share status (available, awaiting_replication, creating, creating_from_snapshot, deleted, deleting, error, error_deleting, extending, extending_error, inactive, manage_error, manage_starting, migrating, migrating_to, replication_change, reverting, reverting_error, shrinking, shrinking_error, shrinking_possible_data_loss_error, unmanage_error, unmanage_starting, unmanaged)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A share

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
    <td>Share ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Share name</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>Snapshot ID used to create the share (wire: snapshotID)</td>
</tr>
<tr>
    <td><CopyableCode code="mount_point_name" /></td>
    <td><code>string</code></td>
    <td>User-defined name used to generate human readable access path for the share (wire: mountPointName)</td>
</tr>
<tr>
    <td><CopyableCode code="access_mode" /></td>
    <td><code>string</code></td>
    <td>Share access mode (ro, rw) (wire: accessMode)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Share creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share description</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Share protocol (NFS)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Share size in GiB</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Share status (available, awaiting_replication, creating, creating_from_snapshot, deleted, deleting, error, error_deleting, extending, extending_error, inactive, manage_error, manage_starting, migrating, migrating_to, replication_change, reverting, reverting_error, shrinking, shrinking_error, shrinking_possible_data_loss_error, unmanage_error, unmanage_starting, unmanaged)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td></td>
    <td>Returns the share properties, its status and its access mode. To get the paths used to mount the share, list its access paths.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-detail"><code>detail</code></a>, <a href="#parameter-mount_point_name"><code>mount_point_name</code></a></td>
    <td>Returns the ID and name of each share of the service. Set `detail` to true to get all share properties.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Creates an NFS share, empty or from a manual snapshot, in which case the share must be at least the size of the snapshot. Creation is asynchronous: the share is returned with status creating, follow its status until available. The total size of the shares cannot exceed the service capacity.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td></td>
    <td>Updates the share name and description. To change the size, use *Extend a share* or *Shrink a share*.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td></td>
    <td>Permanently deletes the share and its ACLs. Deletion is asynchronous. Delete the snapshots and replications of the share first.</td>
</tr>
<tr>
    <td><a href="#extend"><CopyableCode code="extend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shareId"><code>shareId</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Increases the share to the given size in GB, which must be greater than its current size. The share must be available, and the change is asynchronous: its status moves to extending, then back to available, or to extending_error if it fails.</td>
</tr>
<tr>
    <td><a href="#revert"><CopyableCode code="revert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shareId"><code>shareId</code></a>, <a href="#parameter-snapshotID"><code>snapshotID</code></a></td>
    <td></td>
    <td>Restores the share content to the given snapshot, which must be the most recent snapshot of the share. Data written after this snapshot is permanently lost. The share and the snapshot must be available, and the revert is asynchronous: follow the share status until it is available, or reverting_error if it fails. (Beta version)</td>
</tr>
<tr>
    <td><a href="#shrink"><CopyableCode code="shrink" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shareId"><code>shareId</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Reduces the share to the given size in GB, which must be smaller than its current size. The share must be available, and the change is asynchronous: follow the share status until it is available again. If the new size is smaller than the space already used, the share keeps its current size.</td>
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
    <td><code>string (uuid)</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-shareId">
    <td><CopyableCode code="shareId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share ID</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share ID (wire: shareId)</td>
</tr>
<tr id="parameter-detail">
    <td><CopyableCode code="detail" /></td>
    <td><code>boolean</code></td>
    <td>Get detailed information about each share</td>
</tr>
<tr id="parameter-mount_point_name">
    <td><CopyableCode code="mount_point_name" /></td>
    <td><code>string</code></td>
    <td>If specified, returns only shares with given mount point name (wire: mountPointName)</td>
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

Returns the share properties, its status and its access mode. To get the paths used to mount the share, list its access paths.

```sql
SELECT
id,
name,
snapshot_id,
mount_point_name,
access_mode,
created_at,
description,
protocol,
size,
status
FROM ovh.storage.netapp_shares
WHERE service_name = '{{ service_name }}' -- required
AND share_id = '{{ share_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the ID and name of each share of the service. Set `detail` to true to get all share properties.

```sql
SELECT
id,
name,
snapshot_id,
mount_point_name,
access_mode,
created_at,
description,
protocol,
size,
status
FROM ovh.storage.netapp_shares
WHERE service_name = '{{ service_name }}' -- required
AND detail = '{{ detail }}'
AND mount_point_name = '{{ mount_point_name }}'
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

Creates an NFS share, empty or from a manual snapshot, in which case the share must be at least the size of the snapshot. Creation is asynchronous: the share is returned with status creating, follow its status until available. The total size of the shares cannot exceed the service capacity.

```sql
INSERT INTO ovh.storage.netapp_shares (
description,
mount_point_name,
name,
protocol,
size,
snapshot_id,
service_name
)
SELECT 
'{{ description }}',
'{{ mount_point_name }}',
'{{ name }}',
'{{ protocol }}' /* required */,
{{ size }} /* required */,
'{{ snapshot_id }}',
'{{ service_name }}'
RETURNING
id,
name,
snapshot_id,
mount_point_name,
access_mode,
created_at,
description,
protocol,
size,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: netapp_shares
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the netapp_shares resource.
    - name: description
      value: "{{ description }}"
      description: |
        Share description
    - name: mount_point_name
      value: "{{ mount_point_name }}"
      description: |
        User-defined name used to generate human readable access path for the share
    - name: name
      value: "{{ name }}"
      description: |
        Share name
    - name: protocol
      value: "{{ protocol }}"
      description: |
        Share protocol
      valid_values: ['NFS']
    - name: size
      value: {{ size }}
      description: |
        Share size in GiB
    - name: snapshot_id
      value: "{{ snapshot_id }}"
      description: |
        Snapshot ID used to create the share
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

Updates the share name and description. To change the size, use *Extend a share* or *Shrink a share*.

```sql
UPDATE ovh.storage.netapp_shares
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
service_name = '{{ service_name }}' --required
AND share_id = '{{ share_id }}' --required
RETURNING
id,
name,
snapshot_id,
mount_point_name,
access_mode,
created_at,
description,
protocol,
size,
status;
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

Permanently deletes the share and its ACLs. Deletion is asynchronous. Delete the snapshots and replications of the share first.

```sql
DELETE FROM ovh.storage.netapp_shares
WHERE service_name = '{{ service_name }}' --required
AND share_id = '{{ share_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="extend"
    values={[
        { label: 'extend', value: 'extend' },
        { label: 'revert', value: 'revert' },
        { label: 'shrink', value: 'shrink' }
    ]}
>
<TabItem value="extend">

Increases the share to the given size in GB, which must be greater than its current size. The share must be available, and the change is asynchronous: its status moves to extending, then back to available, or to extending_error if it fails.

```sql
EXEC ovh.storage.netapp_shares.extend 
@serviceName='{{ serviceName }}' --required, 
@shareId='{{ shareId }}' --required 
@@json=
'{
"size": {{ size }}
}'
;
```
</TabItem>
<TabItem value="revert">

Restores the share content to the given snapshot, which must be the most recent snapshot of the share. Data written after this snapshot is permanently lost. The share and the snapshot must be available, and the revert is asynchronous: follow the share status until it is available, or reverting_error if it fails. (Beta version)

```sql
EXEC ovh.storage.netapp_shares.revert 
@serviceName='{{ serviceName }}' --required, 
@shareId='{{ shareId }}' --required 
@@json=
'{
"snapshotID": "{{ snapshotID }}"
}'
;
```
</TabItem>
<TabItem value="shrink">

Reduces the share to the given size in GB, which must be smaller than its current size. The share must be available, and the change is asynchronous: follow the share status until it is available again. If the new size is smaller than the space already used, the share keeps its current size.

```sql
EXEC ovh.storage.netapp_shares.shrink 
@serviceName='{{ serviceName }}' --required, 
@shareId='{{ shareId }}' --required 
@@json=
'{
"size": {{ size }}
}'
;
```
</TabItem>
</Tabs>
