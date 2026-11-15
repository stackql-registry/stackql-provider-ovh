--- 
title: commercial_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - commercial_ranges
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>commercial_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commercial_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.commercial_ranges" /></td></tr>
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
    <td><CopyableCode code="commercial_range_name" /></td>
    <td><code>string</code></td>
    <td>The name of this commercial range (wire: commercialRangeName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_hypervisor_versions" /></td>
    <td><code>array</code></td>
    <td>The hypervisor versions compliant with this commercial Range (wire: allowedHypervisorVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_network_roles" /></td>
    <td><code>array</code></td>
    <td>The list of NetworkRoles allowed for one user in this commercial range (wire: allowedNetworkRoles)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_cloud_version" /></td>
    <td><code>string</code></td>
    <td>The name of the dedicated Cloud version associated to this commercial range (wire: dedicatedCloudVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="range" /></td>
    <td><code>string</code></td>
    <td>The range of this Datacenter in this VMware on OVHcloud version</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Commercial ranges

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
    <td><CopyableCode code="commercial_range_name" /></td>
    <td><code>string</code></td>
    <td>The name of this commercial range (wire: commercialRangeName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_hypervisor_versions" /></td>
    <td><code>array</code></td>
    <td>The hypervisor versions compliant with this commercial Range (wire: allowedHypervisorVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_network_roles" /></td>
    <td><code>array</code></td>
    <td>The list of NetworkRoles allowed for one user in this commercial range (wire: allowedNetworkRoles)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_cloud_version" /></td>
    <td><code>string</code></td>
    <td>The name of the dedicated Cloud version associated to this commercial range (wire: dedicatedCloudVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="range" /></td>
    <td><code>string</code></td>
    <td>The range of this Datacenter in this VMware on OVHcloud version</td>
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
    <td><a href="#parameter-commercial_range_name"><code>commercial_range_name</code></a></td>
    <td></td>
    <td>Get a commercial range. Returns the commercial range: allowed hypervisor versions, allowed network roles and related version.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List commercial ranges</td>
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
<tr id="parameter-commercial_range_name">
    <td><CopyableCode code="commercial_range_name" /></td>
    <td><code>string</code></td>
    <td>The name of this commercial range (wire: commercialRangeName)</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
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

Get a commercial range. Returns the commercial range: allowed hypervisor versions, allowed network roles and related version.

```sql
SELECT
commercial_range_name,
allowed_hypervisor_versions,
allowed_network_roles,
dedicated_cloud_version,
range
FROM ovh.dedicated_cloud.commercial_ranges
WHERE commercial_range_name = '{{ commercial_range_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List commercial ranges

```sql
SELECT
commercial_range_name,
allowed_hypervisor_versions,
allowed_network_roles,
dedicated_cloud_version,
range
FROM ovh.dedicated_cloud.commercial_ranges
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
