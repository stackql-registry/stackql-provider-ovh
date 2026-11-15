--- 
title: reference_storage_file_share_types
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_storage_file_share_types
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

Creates, updates, deletes, gets or lists a <code>reference_storage_file_share_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_storage_file_share_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.reference_storage_file_share_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A file storage type and its supported protocols, performance and size limits in one region. A file storage type sold in several regions appears once per region.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>File storage type identifier, to use as the type when creating a file storage (STANDARD_1AZ)</td>
</tr>
<tr>
    <td><CopyableCode code="iops" /></td>
    <td><code>object</code></td>
    <td>Input/output operations per second of a file storage of this type in this region</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Region where the file storage type is sold to the project, whether that region is already activated on the project (regionActivated), and the availability zones of that region (availabilityZones), empty for a single-AZ region</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum size of a file storage of this type in this region in GB (wire: maximumSize)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_size" /></td>
    <td><code>integer</code></td>
    <td>Minimum size of a file storage of this type in this region in GB (wire: minimumSize)</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Protocols a file storage of this type supports</td>
</tr>
<tr>
    <td><CopyableCode code="throughput" /></td>
    <td><code>object</code></td>
    <td>Throughput of a file storage of this type in this region. Null when no throughput figure is published for this region.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>Returns the file storage share types with their minimum and maximum share size in GB, IOPS and throughput, read from the OVHcloud commercial catalog. The list holds one entry per share type and region: a share type sold in several regions appears once per region, with the figures of that region and the region in `location`. The regions already activated on the project and those the project can activate where a share type is sold are both listed. `location.regionActivated` on each entry tells which regions must be activated on the project before use. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region. Entries are sorted by share type name, then by region name. For IOPS and throughput, `level` is the baseline per GB, `maximum` the upper limit, and `guaranteed` tells whether the baseline is guaranteed. Use `name` as the share type when creating a share.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Optional region filter, case-insensitive. Keeps the entries of this region only. A region that does not exist is rejected. One the project can neither use nor activate returns an empty list.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns the file storage share types with their minimum and maximum share size in GB, IOPS and throughput, read from the OVHcloud commercial catalog. The list holds one entry per share type and region: a share type sold in several regions appears once per region, with the figures of that region and the region in `location`. The regions already activated on the project and those the project can activate where a share type is sold are both listed. `location.regionActivated` on each entry tells which regions must be activated on the project before use. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region. Entries are sorted by share type name, then by region name. For IOPS and throughput, `level` is the baseline per GB, `maximum` the upper limit, and `guaranteed` tells whether the baseline is guaranteed. Use `name` as the share type when creating a share.

```sql
SELECT
name,
iops,
location,
maximum_size,
minimum_size,
protocols,
throughput
FROM ovh.public_cloud.reference_storage_file_share_types
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>
