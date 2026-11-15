--- 
title: compute_instance_compatible_flavors
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_instance_compatible_flavors
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

Creates, updates, deletes, gets or lists a <code>compute_instance_compatible_flavors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_instance_compatible_flavors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.compute_instance_compatible_flavors" /></td></tr>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>### Compatible flavors&lt;br /&gt;&lt;br /&gt;Returns the list of flavors this instance can be resized to. The list is computed from the instance's current flavor and the catalog of flavors available in the instance's region.&lt;br /&gt;&lt;br /&gt;The following rules apply to the returned list:&lt;br /&gt;&lt;br /&gt;- It excludes the instance's current flavor.&lt;br /&gt;- It includes only flavors whose disk size is greater than or equal to the current flavor's disk size (a resize cannot shrink the root disk).&lt;br /&gt;- It includes only flavors in the same region as the instance.&lt;br /&gt;- It includes only flavors whose plan is available in the instance's region.&lt;br /&gt;- It is empty for baremetal instances, which cannot be resized.&lt;br /&gt;&lt;br /&gt;Each item has the same shape as an entry from the flavor reference catalog (`publicCloud.reference.instance.Flavor`). Its `location.regionActivated` is true, since the instance's region is activated on the project. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance ID (wire: instanceId)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

### Compatible flavors&lt;br /&gt;&lt;br /&gt;Returns the list of flavors this instance can be resized to. The list is computed from the instance's current flavor and the catalog of flavors available in the instance's region.&lt;br /&gt;&lt;br /&gt;The following rules apply to the returned list:&lt;br /&gt;&lt;br /&gt;- It excludes the instance's current flavor.&lt;br /&gt;- It includes only flavors whose disk size is greater than or equal to the current flavor's disk size (a resize cannot shrink the root disk).&lt;br /&gt;- It includes only flavors in the same region as the instance.&lt;br /&gt;- It includes only flavors whose plan is available in the instance's region.&lt;br /&gt;- It is empty for baremetal instances, which cannot be resized.&lt;br /&gt;&lt;br /&gt;Each item has the same shape as an entry from the flavor reference catalog (`publicCloud.reference.instance.Flavor`). Its `location.regionActivated` is true, since the instance's region is activated on the project. `location.availabilityZones` lists the availability zones of the region, for example eu-west-par-a, eu-west-par-b and eu-west-par-c, and is empty for a single-AZ region.

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
FROM ovh.public_cloud.compute_instance_compatible_flavors
WHERE instance_id = '{{ instance_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>
