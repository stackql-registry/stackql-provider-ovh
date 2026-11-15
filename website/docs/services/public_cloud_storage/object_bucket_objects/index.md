--- 
title: object_bucket_objects
hide_title: false
hide_table_of_contents: false
keywords:
  - object_bucket_objects
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

Creates, updates, deletes, gets or lists an <code>object_bucket_objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_bucket_objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_storage.object_bucket_objects" /></td></tr>
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
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the version (wire: versionId)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Entity tag (hash of the object content). The etag is omitted when isDeleteMarker is true.</td>
</tr>
<tr>
    <td><CopyableCode code="is_common_prefix" /></td>
    <td><code>boolean</code></td>
    <td>Whether this entry represents a common prefix (virtual directory) (wire: isCommonPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="is_delete_marker" /></td>
    <td><code>boolean</code></td>
    <td>Whether this version is a delete marker (wire: isDeleteMarker)</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the latest version of the object (wire: isLatest)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Object key (path within the bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp. Omitted when the entry is a common prefix. (wire: lastModifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_hold" /></td>
    <td><code>string</code></td>
    <td>Object legal hold status (OFF, ON) (wire: legalHold)</td>
</tr>
<tr>
    <td><CopyableCode code="lock" /></td>
    <td><code>object</code></td>
    <td>Object lock retention configuration</td>
</tr>
<tr>
    <td><CopyableCode code="replication_status" /></td>
    <td><code>string</code></td>
    <td>Replication status of the object (COMPLETED, FAILED, NONE, PENDING, REPLICA) (wire: replicationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>object</code></td>
    <td>Restore status for archived objects (wire: restoreStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Object size in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>Storage class of the object. Omitted when the entry is a delete marker or a common prefix. (DEEP_ARCHIVE, GLACIER_IR, HIGH_PERF, STANDARD, STANDARD_IA) (wire: storageClass)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An object stored in an S3™ compatible bucket

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
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the version (wire: versionId)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Entity tag (hash of the object content). The etag is omitted when isDeleteMarker is true.</td>
</tr>
<tr>
    <td><CopyableCode code="is_common_prefix" /></td>
    <td><code>boolean</code></td>
    <td>Whether this entry represents a common prefix (virtual directory) (wire: isCommonPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="is_delete_marker" /></td>
    <td><code>boolean</code></td>
    <td>Whether this version is a delete marker (wire: isDeleteMarker)</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the latest version of the object (wire: isLatest)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Object key (path within the bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp. Omitted when the entry is a common prefix. (wire: lastModifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_hold" /></td>
    <td><code>string</code></td>
    <td>Object legal hold status (OFF, ON) (wire: legalHold)</td>
</tr>
<tr>
    <td><CopyableCode code="lock" /></td>
    <td><code>object</code></td>
    <td>Object lock retention configuration</td>
</tr>
<tr>
    <td><CopyableCode code="replication_status" /></td>
    <td><code>string</code></td>
    <td>Replication status of the object (COMPLETED, FAILED, NONE, PENDING, REPLICA) (wire: replicationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>object</code></td>
    <td>Restore status for archived objects (wire: restoreStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Object size in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>Storage class of the object. Omitted when the entry is a delete marker or a common prefix. (DEEP_ARCHIVE, GLACIER_IR, HIGH_PERF, STANDARD, STANDARD_IA) (wire: storageClass)</td>
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
    <td><a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the object metadata, without its content. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-with_versions"><code>with_versions</code></a></td>
    <td>Returns the objects of the bucket. Filter by key prefix, and group keys with a delimiter. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Sets the retention period or the legal hold of the object. A locked object cannot be deleted or overwritten. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the object. On a versioned bucket, adds a delete marker instead of removing the object. (Alpha version)</td>
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
<tr id="parameter-bucket_name">
    <td><CopyableCode code="bucket_name" /></td>
    <td><code>string</code></td>
    <td>Bucket name (wire: bucketName)</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Key</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>Delimiter for grouping keys into common prefixes. Defaults to /.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Filter objects whose keys begin with this prefix</td>
</tr>
<tr id="parameter-with_versions">
    <td><CopyableCode code="with_versions" /></td>
    <td><code>boolean</code></td>
    <td>Include all object versions and delete markers (wire: withVersions)</td>
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

Returns the object metadata, without its content. (Alpha version)

```sql
SELECT
version_id,
etag,
is_common_prefix,
is_delete_marker,
is_latest,
key,
last_modified_at,
legal_hold,
lock,
replication_status,
restore_status,
size,
storage_class
FROM ovh.public_cloud_storage.object_bucket_objects
WHERE bucket_name = '{{ bucket_name }}' -- required
AND key = '{{ key }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the objects of the bucket. Filter by key prefix, and group keys with a delimiter. (Alpha version)

```sql
SELECT
version_id,
etag,
is_common_prefix,
is_delete_marker,
is_latest,
key,
last_modified_at,
legal_hold,
lock,
replication_status,
restore_status,
size,
storage_class
FROM ovh.public_cloud_storage.object_bucket_objects
WHERE bucket_name = '{{ bucket_name }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND delimiter = '{{ delimiter }}'
AND prefix = '{{ prefix }}'
AND with_versions = '{{ with_versions }}'
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

Sets the retention period or the legal hold of the object. A locked object cannot be deleted or overwritten. (Alpha version)

```sql
UPDATE ovh.public_cloud_storage.object_bucket_objects
SET 
legal_hold = '{{ legal_hold }}',
lock = '{{ lock }}'
WHERE 
bucket_name = '{{ bucket_name }}' --required
AND key = '{{ key }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
version_id,
etag,
is_common_prefix,
is_delete_marker,
is_latest,
key,
last_modified_at,
legal_hold,
lock,
replication_status,
restore_status,
size,
storage_class;
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

Deletes the object. On a versioned bucket, adds a delete marker instead of removing the object. (Alpha version)

```sql
DELETE FROM ovh.public_cloud_storage.object_bucket_objects
WHERE bucket_name = '{{ bucket_name }}' --required
AND key = '{{ key }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
