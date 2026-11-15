--- 
title: reference_product_availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_product_availabilities
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

Creates, updates, deletes, gets or lists a <code>reference_product_availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_product_availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.reference_product_availabilities" /></td></tr>
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

Product type availability (read-only reference data). Groups the offerings of a single product type available to a Public Cloud project. The endpoint returns one group per product type. This is read-only reference data computed from the OVHcloud commercial catalog combined with the project's entitlements. It does not reflect existing resources and triggers no OpenStack call.

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
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>The offerings of this product type available to the project, each with its per-location availability. Null or empty when no model is available.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Product type. The product family this group describes. Groups come in this order: INSTANCE, VOLUME, LOADBALANCER, GATEWAY, FLOATING_IP, PUBLIC_IP, VOLUME_SNAPSHOT, VOLUME_BACKUP, INSTANCE_SNAPSHOT, SHARE, SHARE_SNAPSHOT, OBJECT_STORAGE, SWIFT. (FLOATING_IP, GATEWAY, INSTANCE, INSTANCE_SNAPSHOT, LOADBALANCER, OBJECT_STORAGE, PUBLIC_IP, SHARE, SHARE_SNAPSHOT, SWIFT, VOLUME, VOLUME_BACKUP, VOLUME_SNAPSHOT)</td>
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
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-name_contains"><code>name_contains</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>### Product availability&lt;br /&gt;&lt;br /&gt;Returns the products available to this Public Cloud project, grouped by product type.&lt;br /&gt;&lt;br /&gt;This is read-only reference data: the response is computed from the OVHcloud commercial catalog combined with the project's entitlements and its quota usage. It does not reflect existing resources and triggers no OpenStack call.&lt;br /&gt;&lt;br /&gt;The response is an array with one entry per product type, in this order: `INSTANCE`, `VOLUME`, `LOADBALANCER`, `GATEWAY`, `FLOATING_IP`, `PUBLIC_IP`, `VOLUME_SNAPSHOT`, `VOLUME_BACKUP`, `INSTANCE_SNAPSHOT`, `SHARE`, `SHARE_SNAPSHOT`, `OBJECT_STORAGE`, `SWIFT`. Each type group carries its `models`. Each model carries the `locations` where it is sold to the project, in the regions activated on the project and in those the project can activate. Each location reports its availability zones, `regionActivated`, a `quotaStatus` with the quota resources that block it (`quotaLimitedBy`) and, for the `INSTANCE` type only, a `stockStatus` per availability zone.&lt;br /&gt;&lt;br /&gt;`links` point to related operations: a `SPECS` link on a model leads to the reference route describing it, and a location whose `quotaStatus` is `INSUFFICIENT` carries a `QUOTA` link.&lt;br /&gt;&lt;br /&gt;Every filter is optional: `type` keeps the group of that product type only, `region` the locations of that region (letter case ignored), `name` the models with exactly that name and `nameContains` the models whose name contains that value (letter case ignored).</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional exact model name filter, for example b3-8</td>
</tr>
<tr id="parameter-name_contains">
    <td><CopyableCode code="name_contains" /></td>
    <td><code>string</code></td>
    <td>Optional model name filter keeping the names that contain this value, letter case ignored (wire: nameContains)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Optional region filter, letter case ignored</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional product type filter</td>
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

### Product availability&lt;br /&gt;&lt;br /&gt;Returns the products available to this Public Cloud project, grouped by product type.&lt;br /&gt;&lt;br /&gt;This is read-only reference data: the response is computed from the OVHcloud commercial catalog combined with the project's entitlements and its quota usage. It does not reflect existing resources and triggers no OpenStack call.&lt;br /&gt;&lt;br /&gt;The response is an array with one entry per product type, in this order: `INSTANCE`, `VOLUME`, `LOADBALANCER`, `GATEWAY`, `FLOATING_IP`, `PUBLIC_IP`, `VOLUME_SNAPSHOT`, `VOLUME_BACKUP`, `INSTANCE_SNAPSHOT`, `SHARE`, `SHARE_SNAPSHOT`, `OBJECT_STORAGE`, `SWIFT`. Each type group carries its `models`. Each model carries the `locations` where it is sold to the project, in the regions activated on the project and in those the project can activate. Each location reports its availability zones, `regionActivated`, a `quotaStatus` with the quota resources that block it (`quotaLimitedBy`) and, for the `INSTANCE` type only, a `stockStatus` per availability zone.&lt;br /&gt;&lt;br /&gt;`links` point to related operations: a `SPECS` link on a model leads to the reference route describing it, and a location whose `quotaStatus` is `INSUFFICIENT` carries a `QUOTA` link.&lt;br /&gt;&lt;br /&gt;Every filter is optional: `type` keeps the group of that product type only, `region` the locations of that region (letter case ignored), `name` the models with exactly that name and `nameContains` the models whose name contains that value (letter case ignored).

```sql
SELECT
models,
type
FROM ovh.public_cloud.reference_product_availabilities
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND name = '{{ name }}'
AND name_contains = '{{ name_contains }}'
AND region = '{{ region }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>
