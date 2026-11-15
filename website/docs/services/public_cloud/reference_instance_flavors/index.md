--- 
title: reference_instance_flavors
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_instance_flavors
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

Creates, updates, deletes, gets or lists a <code>reference_instance_flavors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_instance_flavors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.reference_instance_flavors" /></td></tr>
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
    <td>Identifier. The OpenStack/Nova flavor ID. Stable within a region and used to reference the flavor when creating an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The backend flavor name, for example b2-7, c2-15. This is the commercial/technical name used to identify the sizing in the catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>object</code></td>
    <td>Network bandwidth an instance of the flavor gets in Mbit/s</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form description of the flavor as reported by the backend. Null when no description is advertised for this flavor.</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>Size of the flavor's root disk in GB. This is the primary system disk provisioned for instances created from this flavor.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>integer</code></td>
    <td>Size of the flavor's ephemeral disk in GB. Ephemeral storage is transient. Its contents do not survive a rebuild or deletion of the instance. Zero when the flavor provides no ephemeral disk.</td>
</tr>
<tr>
    <td><CopyableCode code="gpus" /></td>
    <td><code>integer</code></td>
    <td>Number of physical GPUs provided by the flavor. Zero for flavors without GPU.</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Public availability. Whether the flavor is publicly available to the project. Private flavors are only visible to the projects they have been explicitly shared with. (wire: isPublic)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Location. Region where this flavor is offered. The flavor catalog is per-region: a flavor returned for one region is not guaranteed to exist, or to carry the same characteristics, in another. regionActivated tells whether the region is already activated on the project. When false, the region must be activated on the project before use. availabilityZones lists the availability zones of the region, empty for a single-AZ region.</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>integer</code></td>
    <td>RAM in MB. Amount of memory provided by the flavor, expressed in MB.</td>
</tr>
<tr>
    <td><CopyableCode code="swap" /></td>
    <td><code>integer</code></td>
    <td>Size of the flavor's swap space in MB. Zero when the flavor provides no swap.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>vCPUs. Number of virtual CPUs provided by the flavor.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Instance flavor (catalog entry). A single compute flavor as advertised by the backend (OpenStack/Nova) for a given region. This is read-only reference data served under /reference: it describes a hardware sizing (vCPUs, RAM, disks) the project can create instances from, not an existing resource. The catalog is per-region. A flavor returned for one region is not guaranteed to exist, or to carry the same characteristics, in another (see location).

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
    <td>Identifier. The OpenStack/Nova flavor ID. Stable within a region and used to reference the flavor when creating an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The backend flavor name, for example b2-7, c2-15. This is the commercial/technical name used to identify the sizing in the catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>object</code></td>
    <td>Network bandwidth an instance of the flavor gets in Mbit/s</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Free-form description of the flavor as reported by the backend. Null when no description is advertised for this flavor.</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>Size of the flavor's root disk in GB. This is the primary system disk provisioned for instances created from this flavor.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeral" /></td>
    <td><code>integer</code></td>
    <td>Size of the flavor's ephemeral disk in GB. Ephemeral storage is transient. Its contents do not survive a rebuild or deletion of the instance. Zero when the flavor provides no ephemeral disk.</td>
</tr>
<tr>
    <td><CopyableCode code="gpus" /></td>
    <td><code>integer</code></td>
    <td>Number of physical GPUs provided by the flavor. Zero for flavors without GPU.</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Public availability. Whether the flavor is publicly available to the project. Private flavors are only visible to the projects they have been explicitly shared with. (wire: isPublic)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Location. Region where this flavor is offered. The flavor catalog is per-region: a flavor returned for one region is not guaranteed to exist, or to carry the same characteristics, in another. regionActivated tells whether the region is already activated on the project. When false, the region must be activated on the project before use. availabilityZones lists the availability zones of the region, empty for a single-AZ region.</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>integer</code></td>
    <td>RAM in MB. Amount of memory provided by the flavor, expressed in MB.</td>
</tr>
<tr>
    <td><CopyableCode code="swap" /></td>
    <td><code>integer</code></td>
    <td>Size of the flavor's swap space in MB. Zero when the flavor provides no swap.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>vCPUs. Number of virtual CPUs provided by the flavor.</td>
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
    <td>Returns one instance flavor with its vCPUs, RAM and disk. `location.regionActivated` tells whether the flavor's region is already activated on the project. When false, the region must be activated on the project before use. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region. Use its `id` in `targetSpec.flavor` to create or resize an instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>Returns the instance flavors available to the project, in the regions activated on the project and in those the project can activate. `location.regionActivated` on each flavor tells which regions must be activated on the project before use. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region. A region filter on a region that does not exist is rejected. On a region the project can neither use nor activate, it returns an empty list. A flavor is a read-only sizing template (vCPUs, RAM, disk) used to create or resize an instance. A new or disabled flavor, or a private flavor newly granted to the project, can take up to one minute to show in this list.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional flavor name filter, for example b2-7</td>
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

Returns one instance flavor with its vCPUs, RAM and disk. `location.regionActivated` tells whether the flavor's region is already activated on the project. When false, the region must be activated on the project before use. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region. Use its `id` in `targetSpec.flavor` to create or resize an instance.

```sql
SELECT
id,
name,
bandwidth,
description,
disk,
ephemeral,
gpus,
is_public,
location,
ram,
swap,
vcpus
FROM ovh.public_cloud.reference_instance_flavors
WHERE id = '{{ id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the instance flavors available to the project, in the regions activated on the project and in those the project can activate. `location.regionActivated` on each flavor tells which regions must be activated on the project before use. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region. A region filter on a region that does not exist is rejected. On a region the project can neither use nor activate, it returns an empty list. A flavor is a read-only sizing template (vCPUs, RAM, disk) used to create or resize an instance. A new or disabled flavor, or a private flavor newly granted to the project, can take up to one minute to show in this list.

```sql
SELECT
id,
name,
bandwidth,
description,
disk,
ephemeral,
gpus,
is_public,
location,
ram,
swap,
vcpus
FROM ovh.public_cloud.reference_instance_flavors
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND name = '{{ name }}'
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>
