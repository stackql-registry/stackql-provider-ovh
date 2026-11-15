--- 
title: file_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - file_shares
  - public_cloud_storage
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

Creates, updates, deletes, gets or lists a <code>file_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_storage.file_shares" /></td></tr>
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
    <td>Unique identifier of the file storage</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the file storage (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current observed state of the file storage from the infrastructure (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the file storage (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>File storage readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the file storage (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the file storage (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Public Cloud file storage (NFS share)

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
    <td>Unique identifier of the file storage</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the file storage (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current observed state of the file storage from the infrastructure (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the file storage (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>File storage readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the file storage (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the file storage (wire: updatedAt)</td>
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
    <td><a href="#parameter-file_storage_id"><code>file_storage_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the file storage configuration and its current state, including the NFS export paths to mount it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the file storages of the project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates a file storage, either empty or from a snapshot.&lt;br /&gt;&lt;br /&gt;Without `createFrom`, `shareType`, `shareNetwork` and `size` are required.&lt;br /&gt;&lt;br /&gt;With `createFrom.snapshotId`, the file storage is created from that snapshot, which must belong to the same project and be in the region set in `location.region`. An unknown snapshot is rejected with a 404. The snapshot must be available: a snapshot in any other status is rejected with a 409. `shareType` and `encryption` are the values of the snapshot's source file storage and are returned in `targetSpec`: requesting `encryption.enabled` true from a snapshot of an unencrypted file storage is rejected as an invalid parameter, and requesting `encryption.enabled` false from a snapshot of an encrypted file storage is ignored. `size` is optional: when omitted, the snapshot's size is used and returned in `targetSpec`, and a size smaller than the snapshot's size is rejected. `shareNetwork` is optional: when omitted, the share network of the snapshot's source file storage is used and returned in `targetSpec`, and a different share network is rejected.&lt;br /&gt;&lt;br /&gt;`createFrom` is set at creation only and cannot be changed afterward.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-file_storage_id"><code>file_storage_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Replaces the file storage's target specification as a whole. The body carries the complete desired state of every field `publicCloud.storage.file.FileStorageUpdateTargetSpec` exposes (`description`, `name` and `size`), so read the file storage first and restate every value you want to keep: a field left out of `targetSpec` is cleared, not carried over from the stored specification. Leaving `description` out clears the description.&lt;br /&gt;&lt;br /&gt;The create-only fields `protocol`, `shareType`, `shareNetwork`, `location`, `encryption` and `createFrom` cannot be changed once the file storage exists. They are deliberately absent from the update model, and sending one is rejected with a 400.&lt;br /&gt;&lt;br /&gt;`name` and `size` are both required. `size` can only grow: restate the current size to keep it, or send a larger value to extend the file storage, because shrinking one is not supported.&lt;br /&gt;&lt;br /&gt;The optional `checksum` guards against a lost update: when supplied it must match the file storage's current checksum or the request is rejected with a 409 checksum mismatch. Omitting it skips the check and forces the write (last-write-wins).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-file_storage_id"><code>file_storage_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the file storage. A file storage that still has snapshots cannot be deleted: delete them first.</td>
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
<tr id="parameter-file_storage_id">
    <td><CopyableCode code="file_storage_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>File storage ID (wire: fileStorageId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the file storage configuration and its current state, including the NFS export paths to mount it.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_storage.file_shares
WHERE file_storage_id = '{{ file_storage_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the file storages of the project.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_storage.file_shares
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Creates a file storage, either empty or from a snapshot.&lt;br /&gt;&lt;br /&gt;Without `createFrom`, `shareType`, `shareNetwork` and `size` are required.&lt;br /&gt;&lt;br /&gt;With `createFrom.snapshotId`, the file storage is created from that snapshot, which must belong to the same project and be in the region set in `location.region`. An unknown snapshot is rejected with a 404. The snapshot must be available: a snapshot in any other status is rejected with a 409. `shareType` and `encryption` are the values of the snapshot's source file storage and are returned in `targetSpec`: requesting `encryption.enabled` true from a snapshot of an unencrypted file storage is rejected as an invalid parameter, and requesting `encryption.enabled` false from a snapshot of an encrypted file storage is ignored. `size` is optional: when omitted, the snapshot's size is used and returned in `targetSpec`, and a size smaller than the snapshot's size is rejected. `shareNetwork` is optional: when omitted, the share network of the snapshot's source file storage is used and returned in `targetSpec`, and a different share network is rejected.&lt;br /&gt;&lt;br /&gt;`createFrom` is set at creation only and cannot be changed afterward.

```sql
INSERT INTO ovh.public_cloud_storage.file_shares (
target_spec,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ project_id }}'
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: file_shares
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the file_shares resource.
    - name: target_spec
      description: |
        Desired target specification for the file storage
      value:
        createFrom:
          snapshotId: "{{ snapshotId }}"
        description: "{{ description }}"
        encryption:
          enabled: {{ enabled }}
        location:
          availabilityZone: "{{ availabilityZone }}"
          region: "{{ region }}"
        name: "{{ name }}"
        protocol: "{{ protocol }}"
        shareNetwork:
          id: "{{ id }}"
        shareType: "{{ shareType }}"
        size: {{ size }}
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

Replaces the file storage's target specification as a whole. The body carries the complete desired state of every field `publicCloud.storage.file.FileStorageUpdateTargetSpec` exposes (`description`, `name` and `size`), so read the file storage first and restate every value you want to keep: a field left out of `targetSpec` is cleared, not carried over from the stored specification. Leaving `description` out clears the description.&lt;br /&gt;&lt;br /&gt;The create-only fields `protocol`, `shareType`, `shareNetwork`, `location`, `encryption` and `createFrom` cannot be changed once the file storage exists. They are deliberately absent from the update model, and sending one is rejected with a 400.&lt;br /&gt;&lt;br /&gt;`name` and `size` are both required. `size` can only grow: restate the current size to keep it, or send a larger value to extend the file storage, because shrinking one is not supported.&lt;br /&gt;&lt;br /&gt;The optional `checksum` guards against a lost update: when supplied it must match the file storage's current checksum or the request is rejected with a 409 checksum mismatch. Omitting it skips the check and forces the write (last-write-wins).

```sql
UPDATE ovh.public_cloud_storage.file_shares
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
file_storage_id = '{{ file_storage_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at;
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

Deletes the file storage. A file storage that still has snapshots cannot be deleted: delete them first.

```sql
DELETE FROM ovh.public_cloud_storage.file_shares
WHERE file_storage_id = '{{ file_storage_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
