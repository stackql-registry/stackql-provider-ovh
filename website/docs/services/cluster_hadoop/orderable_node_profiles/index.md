--- 
title: orderable_node_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - orderable_node_profiles
  - cluster_hadoop
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

Creates, updates, deletes, gets or lists an <code>orderable_node_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orderable_node_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cluster_hadoop.orderable_node_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_by_service_name"
    values={[
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_service_name">

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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Detailed information on a node billing profile

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
    <td><CopyableCode code="cpu_frequency" /></td>
    <td><code>object</code></td>
    <td>Frequency of one CPU core (wire: CPUFrequency)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_capacity" /></td>
    <td><code>object</code></td>
    <td>Total capacity available for HDFS (wire: diskCapacity)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_cpu_cores" /></td>
    <td><code>integer</code></td>
    <td>Total number of the CPU cores (wire: nbCPUCores)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_cpu_threads" /></td>
    <td><code>integer</code></td>
    <td>Total number of the CPU threads (wire: nbCPUThreads)</td>
</tr>
<tr>
    <td><CopyableCode code="network_bandwidth" /></td>
    <td><code>object</code></td>
    <td>Network speed of the link used for the Hadoop process (wire: networkBandwidth)</td>
</tr>
<tr>
    <td><CopyableCode code="node_profile" /></td>
    <td><code>string</code></td>
    <td>Name of the Node billing profile (wire: nodeProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="ram_quantity" /></td>
    <td><code>object</code></td>
    <td>Total amount of RAM (wire: ramQuantity)</td>
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
    <td><a href="#list_by_service_name"><CopyableCode code="list_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List of orderable Node profiles</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the orderable node profiles and their characteristics</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your cluster (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_by_service_name"
    values={[
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_service_name">

List of orderable Node profiles

```sql
SELECT
value
FROM ovh.cluster_hadoop.orderable_node_profiles
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get the orderable node profiles and their characteristics

```sql
SELECT
cpu_frequency,
disk_capacity,
nb_cpu_cores,
nb_cpu_threads,
network_bandwidth,
node_profile,
ram_quantity
FROM ovh.cluster_hadoop.orderable_node_profiles
;
```
</TabItem>
</Tabs>
