--- 
title: datacenter_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_clusters
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

Creates, updates, deletes, gets or lists a <code>datacenter_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_clusters" /></td></tr>
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
    <td>Name of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the cluster (wire: clusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The VMware MoRef of the cluster (wire: vmwareClusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>object</code></td>
    <td>AutoScale associated to this cluster</td>
</tr>
<tr>
    <td><CopyableCode code="drs_mode" /></td>
    <td><code>string</code></td>
    <td>Drs mode of the cluster (fullyAutomated, manual, partiallyAutomated) (wire: drsMode)</td>
</tr>
<tr>
    <td><CopyableCode code="drs_status" /></td>
    <td><code>string</code></td>
    <td>Drs status of the cluster (disabled, enabled, unknown) (wire: drsStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evc_mode" /></td>
    <td><code>string</code></td>
    <td>Evc mode of the cluster (wire: evcMode)</td>
</tr>
<tr>
    <td><CopyableCode code="ha_status" /></td>
    <td><code>string</code></td>
    <td>High availability status of the cluster (disabled, enabled, unknown) (wire: haStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Cluster

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
    <td>Name of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the cluster (wire: clusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The VMware MoRef of the cluster (wire: vmwareClusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>object</code></td>
    <td>AutoScale associated to this cluster</td>
</tr>
<tr>
    <td><CopyableCode code="drs_mode" /></td>
    <td><code>string</code></td>
    <td>Drs mode of the cluster (fullyAutomated, manual, partiallyAutomated) (wire: drsMode)</td>
</tr>
<tr>
    <td><CopyableCode code="drs_status" /></td>
    <td><code>string</code></td>
    <td>Drs status of the cluster (disabled, enabled, unknown) (wire: drsStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evc_mode" /></td>
    <td><code>string</code></td>
    <td>Evc mode of the cluster (wire: evcMode)</td>
</tr>
<tr>
    <td><CopyableCode code="ha_status" /></td>
    <td><code>string</code></td>
    <td>High availability status of the cluster (disabled, enabled, unknown) (wire: haStatus)</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a cluster. Returns the cluster: name, VMware MoRef, DRS and HA status, EVC mode and autoscale settings.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List clusters</td>
</tr>
<tr>
    <td><a href="#delete_nsxt"><CopyableCode code="delete_nsxt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Delete the cluster NSX-T configuration. Removes the NSX-T configuration from the cluster. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#nsxt"><CopyableCode code="nsxt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Configure NSX-T on a cluster</td>
</tr>
<tr>
    <td><a href="#update_nsxt"><CopyableCode code="update_nsxt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reapply NSX-T on a cluster. Reapplies the NSX-T configuration of the cluster. Returns a task to track progress.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>integer</code></td>
    <td>Id of the cluster</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the cluster (wire: clusterId)</td>
</tr>
<tr id="parameter-datacenterId">
    <td><CopyableCode code="datacenterId" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter</td>
</tr>
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
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

Get a cluster. Returns the cluster: name, VMware MoRef, DRS and HA status, EVC mode and autoscale settings.

```sql
SELECT
name,
cluster_id,
vmware_cluster_id,
autoscale,
drs_mode,
drs_status,
evc_mode,
ha_status
FROM ovh.dedicated_cloud.datacenter_clusters
WHERE cluster_id = '{{ cluster_id }}' -- required
AND datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List clusters

```sql
SELECT
name,
cluster_id,
vmware_cluster_id,
autoscale,
drs_mode,
drs_status,
evc_mode,
ha_status
FROM ovh.dedicated_cloud.datacenter_clusters
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_nsxt"
    values={[
        { label: 'delete_nsxt', value: 'delete_nsxt' },
        { label: 'nsxt', value: 'nsxt' },
        { label: 'update_nsxt', value: 'update_nsxt' }
    ]}
>
<TabItem value="delete_nsxt">

Delete the cluster NSX-T configuration. Removes the NSX-T configuration from the cluster. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_clusters.delete_nsxt 
@clusterId='{{ clusterId }}' --required, 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="nsxt">

Configure NSX-T on a cluster

```sql
EXEC ovh.dedicated_cloud.datacenter_clusters.nsxt 
@clusterId='{{ clusterId }}' --required, 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="update_nsxt">

Reapply NSX-T on a cluster. Reapplies the NSX-T configuration of the cluster. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_clusters.update_nsxt 
@clusterId='{{ clusterId }}' --required, 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
