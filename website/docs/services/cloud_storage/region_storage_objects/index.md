--- 
title: region_storage_objects
hide_title: false
hide_table_of_contents: false
keywords:
  - region_storage_objects
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

Creates, updates, deletes, gets or lists a <code>region_storage_objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_storage_objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_storage_objects" /></td></tr>
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
    <td>The version ID of the object. (wire: versionId)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag is a hash of the object that reflects changes only to the contents. The etag is omitted when isDeleteMarker is true.</td>
</tr>
<tr>
    <td><CopyableCode code="is_delete_marker" /></td>
    <td><code>boolean</code></td>
    <td>True when the entry represents a delete marker. This field is included only when using withVersions set to true. (wire: isDeleteMarker)</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest" /></td>
    <td><code>boolean</code></td>
    <td>True when the entry is the latest version of the object or delete marker. (wire: isLatest)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name assigned to an object. Use the object key to retrieve the object.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification date. (wire: lastModified)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_hold" /></td>
    <td><code>string</code></td>
    <td>Object legal hold status. (off, on) (wire: legalHold)</td>
</tr>
<tr>
    <td><CopyableCode code="lock" /></td>
    <td><code>object</code></td>
    <td>Object lock retention configuration, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_status" /></td>
    <td><code>string</code></td>
    <td>Object replication status. (COMPLETED, FAILED, NONE, PENDING, REPLICA) (wire: replicationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>object</code></td>
    <td>Specifies the restoration status of an object, if any. Objects in certain storage classes must be restored before they can be retrieved. (wire: restoreStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size in bytes of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>The storage class used to store the object. (DEEP_ARCHIVE, GLACIER_IR, HIGH_PERF, STANDARD, STANDARD_IA) (wire: storageClass)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Object

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
    <td>The version ID of the object. (wire: versionId)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag is a hash of the object that reflects changes only to the contents. The etag is omitted when isDeleteMarker or isCommonPrefix is true.</td>
</tr>
<tr>
    <td><CopyableCode code="is_common_prefix" /></td>
    <td><code>boolean</code></td>
    <td>True when the entry represents a common prefix. This field is included only when specifying a delimiter. (wire: isCommonPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="is_delete_marker" /></td>
    <td><code>boolean</code></td>
    <td>True when the entry represents a delete marker. This field is included only when using withVersions set to true. (wire: isDeleteMarker)</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest" /></td>
    <td><code>boolean</code></td>
    <td>True when the entry is the latest version of the object or delete marker. (wire: isLatest)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name assigned to an object. Use the object key to retrieve the object.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification date. This field is omitted when isCommonPrefix is true. (wire: lastModified)</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>object</code></td>
    <td>Specifies the restoration status of an object, if any. Objects in certain storage classes must be restored before they can be retrieved. (wire: restoreStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size in bytes of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>The storage class used to store the object. (DEEP_ARCHIVE, GLACIER_IR, HIGH_PERF, STANDARD, STANDARD_IA) (wire: storageClass)</td>
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
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-key_marker"><code>key_marker</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-version_id_marker"><code>version_id_marker</code></a>, <a href="#parameter-with_versions"><code>with_versions</code></a></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-days"><code>days</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
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
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Key</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name</td>
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
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>A delimiter is a character that you use to group keys</td>
</tr>
<tr id="parameter-key_marker">
    <td><CopyableCode code="key_marker" /></td>
    <td><code>string</code></td>
    <td>Key to start with when listing objects (wire: keyMarker)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Limit the number of objects returned (1000 maximum, defaults to 1000)</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>List objects whose key begins with this prefix</td>
</tr>
<tr id="parameter-version_id_marker">
    <td><CopyableCode code="version_id_marker" /></td>
    <td><code>string</code></td>
    <td>Version ID to start listing from (wire: versionIdMarker)</td>
</tr>
<tr id="parameter-with_versions">
    <td><CopyableCode code="with_versions" /></td>
    <td><code>boolean</code></td>
    <td>List object versions (wire: withVersions)</td>
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
SELECT
version_id,
etag,
is_delete_marker,
is_latest,
key,
last_modified,
legal_hold,
lock,
replication_status,
restore_status,
size,
storage_class
FROM ovh.cloud_storage.region_storage_objects
WHERE key = '{{ key }}' -- required
AND name = '{{ name }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
SELECT
version_id,
etag,
is_common_prefix,
is_delete_marker,
is_latest,
key,
last_modified,
restore_status,
size,
storage_class
FROM ovh.cloud_storage.region_storage_objects
WHERE name = '{{ name }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND delimiter = '{{ delimiter }}'
AND key_marker = '{{ key_marker }}'
AND limit = '{{ limit }}'
AND prefix = '{{ prefix }}'
AND version_id_marker = '{{ version_id_marker }}'
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
UPDATE ovh.cloud_storage.region_storage_objects
SET 
legal_hold = '{{ legal_hold }}',
lock = '{{ lock }}'
WHERE 
key = '{{ key }}' --required
AND name = '{{ name }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
version_id,
etag,
is_delete_marker,
is_latest,
key,
last_modified,
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
DELETE FROM ovh.cloud_storage.region_storage_objects
WHERE key = '{{ key }}' --required
AND name = '{{ name }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="copy"
    values={[
        { label: 'copy', value: 'copy' },
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="copy">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
EXEC ovh.cloud_storage.region_storage_objects.copy 
@key='{{ key }}' --required, 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"storageClass": "{{ storageClass }}", 
"targetBucket": "{{ targetBucket }}", 
"targetKey": "{{ targetKey }}"
}'
;
```
</TabItem>
<TabItem value="restore">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
EXEC ovh.cloud_storage.region_storage_objects.restore 
@key='{{ key }}' --required, 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"days": {{ days }}
}'
;
```
</TabItem>
</Tabs>
