--- 
title: reference_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_regions
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

Creates, updates, deletes, gets or lists a <code>reference_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.reference_regions" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Region identifier, for example GRA1</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_name" /></td>
    <td><code>string</code></td>
    <td>Datacenter display name (wire: datacenterName)</td>
</tr>
<tr>
    <td><CopyableCode code="activated" /></td>
    <td><code>boolean</code></td>
    <td>Whether the region is activated on the project. When false, the region exists but has not yet been activated for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>Availability zones in this region (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="continent" /></td>
    <td><code>string</code></td>
    <td>Continent code</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Country code</td>
</tr>
<tr>
    <td><CopyableCode code="object_storage" /></td>
    <td><code>object</code></td>
    <td>Object storage capabilities of the region. Null when the region offers no object storage. (wire: objectStorage)</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>Available services. Includes objectStorage when S3™ object storage is available in the region, that is the region has a non-null objectStorage block whose bareContainerOnly is false.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Region status (DISABLED, ENABLED, MAINTENANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Region type. Null when the catalog reports an unrecognized type. (LOCAL-ZONE, REGION-1-AZ, REGION-3-AZ)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Public Cloud region (read-only reference data)

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
    <td>Region identifier, for example GRA1</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_name" /></td>
    <td><code>string</code></td>
    <td>Datacenter display name (wire: datacenterName)</td>
</tr>
<tr>
    <td><CopyableCode code="activated" /></td>
    <td><code>boolean</code></td>
    <td>Whether the region is activated on the project. When false, the region exists but has not yet been activated for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>Availability zones in this region (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="continent" /></td>
    <td><code>string</code></td>
    <td>Continent code</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Country code</td>
</tr>
<tr>
    <td><CopyableCode code="object_storage" /></td>
    <td><code>object</code></td>
    <td>Object storage capabilities of the region. Null when the region offers no object storage. (wire: objectStorage)</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>Available services. Includes objectStorage when S3™ object storage is available in the region, that is the region has a non-null objectStorage block whose bareContainerOnly is false.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Region status (DISABLED, ENABLED, MAINTENANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Region type. Null when the catalog reports an unrecognized type. (LOCAL-ZONE, REGION-1-AZ, REGION-3-AZ)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns one region: its availability zones, location, status and available services, including its object storage capabilities. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the regions with their type, status, location and available services. (Beta version)</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name</td>
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

Returns one region: its availability zones, location, status and available services, including its object storage capabilities. (Beta version)

```sql
SELECT
name,
datacenter_name,
activated,
availability_zones,
continent,
country,
object_storage,
services,
status,
type
FROM ovh.public_cloud.reference_regions
WHERE name = '{{ name }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the regions with their type, status, location and available services. (Beta version)

```sql
SELECT
name,
datacenter_name,
activated,
availability_zones,
continent,
country,
object_storage,
services,
status,
type
FROM ovh.public_cloud.reference_regions
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>
