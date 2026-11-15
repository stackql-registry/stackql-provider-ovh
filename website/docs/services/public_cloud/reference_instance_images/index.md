--- 
title: reference_instance_images
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_instance_images
  - public_cloud
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

Creates, updates, deletes, gets or lists a <code>reference_instance_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_instance_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.reference_instance_images" /></td></tr>
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
    <td>Identifier. The OpenStack/Glance image ID. Stable within a region and used to reference the image when creating an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name of the image as reported by the backend, for example the distribution and version, such as Debian 12</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date. Timestamp at which the image was created on the backend, in RFC 3339 format. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="default_user" /></td>
    <td><code>string</code></td>
    <td>Default login user of the image, as set by its publisher, for example almalinux or ubuntu. Null when the image declares none. (wire: defaultUser)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Location. Region (and, where applicable, availability zone) where this image is offered. The image catalog is per-region: an image returned for one region is not guaranteed to exist in another.</td>
</tr>
<tr>
    <td><CopyableCode code="min_disk" /></td>
    <td><code>integer</code></td>
    <td>Minimum root disk size in GB that an instance must provide to boot from this image. A flavor whose disk is smaller than this value cannot be used with the image. (wire: minDisk)</td>
</tr>
<tr>
    <td><CopyableCode code="min_ram" /></td>
    <td><code>integer</code></td>
    <td>Minimum amount of memory in MB that an instance must provide to boot from this image. A flavor whose RAM is below this value cannot be used with the image. (wire: minRam)</td>
</tr>
<tr>
    <td><CopyableCode code="os_type" /></td>
    <td><code>string</code></td>
    <td>Operating system type. Operating system family of the image (see ImageOSTypeEnum). Windows images can only boot on Windows flavors. (BAREMETAL_LINUX, LINUX, WINDOWS) (wire: osType)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the image on the backend, expressed in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Availability status of the image as reported by the backend (see ImageStatusEnum). Only images in an active status can be used to create an instance. (ACTIVE, DEACTIVATED, DELETED, IMPORTING, KILLED, PENDING_DELETE, QUEUED, SAVING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date. Timestamp of the last modification of the image on the backend, in RFC 3339 format. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Visibility scope of the image (see ImageVisibilityEnum), for example whether it is a public OVHcloud-provided image or private to the project (COMMUNITY, PRIVATE, PUBLIC, SHARED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Instance image (catalog entry). A single OS image as advertised by the backend (OpenStack/Glance) for a given region. This is read-only reference data served under /reference: it describes a bootable image the project can create instances from, not an existing resource. The image catalog is read-only in APIv2. There is no create, update or delete on images. The catalog is per-region: an image returned for one region is not guaranteed to exist in another (see location).

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
    <td>Identifier. The OpenStack/Glance image ID. Stable within a region and used to reference the image when creating an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name of the image as reported by the backend, for example the distribution and version, such as Debian 12</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date. Timestamp at which the image was created on the backend, in RFC 3339 format. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="default_user" /></td>
    <td><code>string</code></td>
    <td>Default login user of the image, as set by its publisher, for example almalinux or ubuntu. Null when the image declares none. (wire: defaultUser)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Location. Region (and, where applicable, availability zone) where this image is offered. The image catalog is per-region: an image returned for one region is not guaranteed to exist in another.</td>
</tr>
<tr>
    <td><CopyableCode code="min_disk" /></td>
    <td><code>integer</code></td>
    <td>Minimum root disk size in GB that an instance must provide to boot from this image. A flavor whose disk is smaller than this value cannot be used with the image. (wire: minDisk)</td>
</tr>
<tr>
    <td><CopyableCode code="min_ram" /></td>
    <td><code>integer</code></td>
    <td>Minimum amount of memory in MB that an instance must provide to boot from this image. A flavor whose RAM is below this value cannot be used with the image. (wire: minRam)</td>
</tr>
<tr>
    <td><CopyableCode code="os_type" /></td>
    <td><code>string</code></td>
    <td>Operating system type. Operating system family of the image (see ImageOSTypeEnum). Windows images can only boot on Windows flavors. (BAREMETAL_LINUX, LINUX, WINDOWS) (wire: osType)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the image on the backend, expressed in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Availability status of the image as reported by the backend (see ImageStatusEnum). Only images in an active status can be used to create an instance. (ACTIVE, DEACTIVATED, DELETED, IMPORTING, KILLED, PENDING_DELETE, QUEUED, SAVING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date. Timestamp of the last modification of the image on the backend, in RFC 3339 format. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Visibility scope of the image (see ImageVisibilityEnum), for example whether it is a public OVHcloud-provided image or private to the project (COMMUNITY, PRIVATE, PUBLIC, SHARED)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns one operating system image. Use its `id` in `targetSpec.image` to create or rebuild an instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>Returns the operating system images available to the project. Images are provided by the platform and are read-only.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Optional region filter</td>
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

Returns one operating system image. Use its `id` in `targetSpec.image` to create or rebuild an instance.

```sql
SELECT
id,
name,
created_at,
default_user,
location,
min_disk,
min_ram,
os_type,
size,
status,
updated_at,
visibility
FROM ovh.public_cloud.reference_instance_images
WHERE id = '{{ id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the operating system images available to the project. Images are provided by the platform and are read-only.

```sql
SELECT
id,
name,
created_at,
default_user,
location,
min_disk,
min_ram,
os_type,
size,
status,
updated_at,
visibility
FROM ovh.public_cloud.reference_instance_images
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>
