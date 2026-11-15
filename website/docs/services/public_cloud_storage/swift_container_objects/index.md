--- 
title: swift_container_objects
hide_title: false
hide_table_of_contents: false
keywords:
  - swift_container_objects
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

Creates, updates, deletes, gets or lists a <code>swift_container_objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="swift_container_objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_storage.swift_container_objects" /></td></tr>
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
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>MIME type of the object content (Content-Type header), for example image/png (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Entity tag of the object: the MD5 hash of its content, or a hash of the segment hashes for a large object</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Object key, which is its full path within the container, for example documents/report.pdf</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp of the object (wire: lastModifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_delay" /></td>
    <td><code>integer</code></td>
    <td>Seconds to wait before the object becomes readable, only set while retrievalState is UNSEALING (wire: retrievalDelay)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_state" /></td>
    <td><code>string</code></td>
    <td>Retrieval state of the object, only meaningful in an archive container: SEALED objects must be unsealed before download, UNSEALING objects are being retrieved, UNSEALED objects can be downloaded. Absent in a standard container. (SEALED, UNSEALED, UNSEALING) (wire: retrievalState)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Object size in bytes</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An object stored in a Swift object storage container

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
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>MIME type of the object content (Content-Type header), for example image/png (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Entity tag of the object: the MD5 hash of its content, or a hash of the segment hashes for a large object</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Object key, which is its full path within the container, for example documents/report.pdf</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification timestamp of the object (wire: lastModifiedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_delay" /></td>
    <td><code>integer</code></td>
    <td>Seconds to wait before the object becomes readable, only set while retrievalState is UNSEALING (wire: retrievalDelay)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_state" /></td>
    <td><code>string</code></td>
    <td>Retrieval state of the object, only meaningful in an archive container: SEALED objects must be unsealed before download, UNSEALING objects are being retrieved, UNSEALED objects can be downloaded. Absent in a standard container. (SEALED, UNSEALED, UNSEALING) (wire: retrievalState)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Object size in bytes</td>
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
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the object metadata, without its content.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>Returns the objects of the container, at most 500 per page. Filter by key prefix, and page with the marker: the key of the last object of the previous page.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the object from the container.</td>
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
<tr id="parameter-container_id">
    <td><CopyableCode code="container_id" /></td>
    <td><code>string</code></td>
    <td>Container ID (wire: containerId)</td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of objects to return. Defaults to 500. At most 500.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Only return objects whose keys sort after this one. Pass the key of the last object of the previous page to get the next page.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Only return objects whose keys begin with this prefix</td>
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

Returns the object metadata, without its content.

```sql
SELECT
content_type,
etag,
key,
last_modified_at,
retrieval_delay,
retrieval_state,
size
FROM ovh.public_cloud_storage.swift_container_objects
WHERE container_id = '{{ container_id }}' -- required
AND key = '{{ key }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the objects of the container, at most 500 per page. Filter by key prefix, and page with the marker: the key of the last object of the previous page.

```sql
SELECT
content_type,
etag,
key,
last_modified_at,
retrieval_delay,
retrieval_state,
size
FROM ovh.public_cloud_storage.swift_container_objects
WHERE container_id = '{{ container_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
AND prefix = '{{ prefix }}'
;
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

Deletes the object from the container.

```sql
DELETE FROM ovh.public_cloud_storage.swift_container_objects
WHERE container_id = '{{ container_id }}' --required
AND key = '{{ key }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
