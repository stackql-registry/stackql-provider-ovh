--- 
title: datacenter_cluster_filer_vsans
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_cluster_filer_vsans
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

Creates, updates, deletes, gets or lists a <code>datacenter_cluster_filer_vsans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_cluster_filer_vsans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_cluster_filer_vsans" /></td></tr>
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
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>integer</code></td>
    <td>Id of Cluster. (wire: clusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the datacenter. (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the vsan datastore. (wire: datastoreId)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_name" /></td>
    <td><code>string</code></td>
    <td>Name of the datastore. (wire: datastoreName)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>Datastore connection state. (offline, online) (wire: connectionState)</td>
</tr>
<tr>
    <td><CopyableCode code="space_free" /></td>
    <td><code>number</code></td>
    <td>Available space of this datastore, in GB (wire: spaceFree)</td>
</tr>
<tr>
    <td><CopyableCode code="space_provisioned" /></td>
    <td><code>number</code></td>
    <td>Provisioned space of this datastore, in GB (wire: spaceProvisioned)</td>
</tr>
<tr>
    <td><CopyableCode code="space_used" /></td>
    <td><code>number</code></td>
    <td>Used Space of this datastore, in GB (wire: spaceUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_total" /></td>
    <td><code>integer</code></td>
    <td>Number of virtual machine on the datastore (wire: vmTotal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

vSAN datastore

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
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>integer</code></td>
    <td>Id of Cluster. (wire: clusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the datacenter. (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the vsan datastore. (wire: datastoreId)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_name" /></td>
    <td><code>string</code></td>
    <td>Name of the datastore. (wire: datastoreName)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>Datastore connection state. (offline, online) (wire: connectionState)</td>
</tr>
<tr>
    <td><CopyableCode code="space_free" /></td>
    <td><code>number</code></td>
    <td>Available space of this datastore, in GB (wire: spaceFree)</td>
</tr>
<tr>
    <td><CopyableCode code="space_provisioned" /></td>
    <td><code>number</code></td>
    <td>Provisioned space of this datastore, in GB (wire: spaceProvisioned)</td>
</tr>
<tr>
    <td><CopyableCode code="space_used" /></td>
    <td><code>number</code></td>
    <td>Used Space of this datastore, in GB (wire: spaceUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_total" /></td>
    <td><code>integer</code></td>
    <td>Number of virtual machine on the datastore (wire: vmTotal)</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a vSAN datastore. Returns the vSAN datastore: used, free and provisioned space, connection state and number of virtual machines.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List vSAN datastores</td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the cluster (wire: clusterId)</td>
</tr>
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr id="parameter-datastore_id">
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the vsan datastore. (wire: datastoreId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get a vSAN datastore. Returns the vSAN datastore: used, free and provisioned space, connection state and number of virtual machines.

```sql
SELECT
cluster_id,
datacenter_id,
datastore_id,
datastore_name,
connection_state,
space_free,
space_provisioned,
space_used,
vm_total
FROM ovh.dedicated_cloud.datacenter_cluster_filer_vsans
WHERE cluster_id = '{{ cluster_id }}' -- required
AND datacenter_id = '{{ datacenter_id }}' -- required
AND datastore_id = '{{ datastore_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List vSAN datastores

```sql
SELECT
cluster_id,
datacenter_id,
datastore_id,
datastore_name,
connection_state,
space_free,
space_provisioned,
space_used,
vm_total
FROM ovh.dedicated_cloud.datacenter_cluster_filer_vsans
WHERE cluster_id = '{{ cluster_id }}' -- required
AND datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
