--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.images" /></td></tr>
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
    <td>Image id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Image name</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Image creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_type" /></td>
    <td><code>string</code></td>
    <td>Image usable only for this type of flavor if not null (wire: flavorType)</td>
</tr>
<tr>
    <td><CopyableCode code="min_disk" /></td>
    <td><code>integer</code></td>
    <td>Minimum disks required to use image (in GB) (wire: minDisk)</td>
</tr>
<tr>
    <td><CopyableCode code="min_ram" /></td>
    <td><code>integer</code></td>
    <td>Minimum RAM required to use image (in MB) (wire: minRam)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Order plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Image region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>number</code></td>
    <td>Image size (in GiB)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Image status</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags about the image</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Image type</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>User to connect with</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Image visibility</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Image

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
    <td>Image id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Image name</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Image creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_type" /></td>
    <td><code>string</code></td>
    <td>Image usable only for this type of flavor if not null (wire: flavorType)</td>
</tr>
<tr>
    <td><CopyableCode code="min_disk" /></td>
    <td><code>integer</code></td>
    <td>Minimum disks required to use image (in GB) (wire: minDisk)</td>
</tr>
<tr>
    <td><CopyableCode code="min_ram" /></td>
    <td><code>integer</code></td>
    <td>Minimum RAM required to use image (in MB) (wire: minRam)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Order plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Image region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>number</code></td>
    <td>Image size (in GiB)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Image status</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags about the image</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Image type</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>User to connect with</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Image visibility</td>
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
    <td><a href="#parameter-image_id"><code>image_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get image</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-flavor_type"><code>flavor_type</code></a>, <a href="#parameter-os_type"><code>os_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>Get images</td>
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
<tr id="parameter-image_id">
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>Image ID (wire: imageId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-flavor_type">
    <td><CopyableCode code="flavor_type" /></td>
    <td><code>string</code></td>
    <td>Get compatible images with flavor type (wire: flavorType)</td>
</tr>
<tr id="parameter-os_type">
    <td><CopyableCode code="os_type" /></td>
    <td><code>string</code></td>
    <td>Image OS (wire: osType)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Image region</td>
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

Get image

```sql
SELECT
id,
name,
creation_date,
flavor_type,
min_disk,
min_ram,
plan_code,
region,
size,
status,
tags,
type,
user,
visibility
FROM ovh.cloud.images
WHERE image_id = '{{ image_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Get images

```sql
SELECT
id,
name,
creation_date,
flavor_type,
min_disk,
min_ram,
plan_code,
region,
size,
status,
tags,
type,
user,
visibility
FROM ovh.cloud.images
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND flavor_type = '{{ flavor_type }}'
AND os_type = '{{ os_type }}'
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>
