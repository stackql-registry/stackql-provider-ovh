--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cluster_hadoop.clusters" /></td></tr>
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
    <td>Service name of your Cluster</td>
</tr>
<tr>
    <td><CopyableCode code="cloudera_version" /></td>
    <td><code>string</code></td>
    <td>CDH and Cloudera Manager version (wire: clouderaVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="max_orderable_nodes" /></td>
    <td><code>integer</code></td>
    <td>Maximum quantity of nodes allowed to be ordered in the cluster (wire: maxOrderableNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the Hadoop Cluster (created, creating, deleted, deleting, delivered, delivering, toDeliver)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Managed Hadoop Cluster

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
    <td>Service name of your Cluster</td>
</tr>
<tr>
    <td><CopyableCode code="cloudera_version" /></td>
    <td><code>string</code></td>
    <td>CDH and Cloudera Manager version (wire: clouderaVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="max_orderable_nodes" /></td>
    <td><code>integer</code></td>
    <td>Maximum quantity of nodes allowed to be ordered in the cluster (wire: maxOrderableNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the Hadoop Cluster (created, creating, deleted, deleting, delivered, delivering, toDeliver)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List available services</td>
</tr>
<tr>
    <td><a href="#order_new_node_hourly"><CopyableCode code="order_new_node_hourly" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-nodeProfile"><code>nodeProfile</code></a></td>
    <td></td>
    <td>Order a new node in the cluster</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)</td>
</tr>
<tr>
    <td><a href="#service_restart"><CopyableCode code="service_restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)</td>
</tr>
<tr>
    <td><a href="#service_start"><CopyableCode code="service_start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Start a Cloudera Manager service</td>
</tr>
<tr>
    <td><a href="#service_stop"><CopyableCode code="service_stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Start the Cloudera Manager Hadoop Cluster</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your cluster</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your cluster (wire: serviceName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Get this object properties

```sql
SELECT
name,
cloudera_version,
iam,
max_orderable_nodes,
state
FROM ovh.cluster_hadoop.clusters
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available services

```sql
SELECT
name,
cloudera_version,
iam,
max_orderable_nodes,
state
FROM ovh.cluster_hadoop.clusters
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="order_new_node_hourly"
    values={[
        { label: 'order_new_node_hourly', value: 'order_new_node_hourly' },
        { label: 'restart', value: 'restart' },
        { label: 'service_restart', value: 'service_restart' },
        { label: 'service_start', value: 'service_start' },
        { label: 'service_stop', value: 'service_stop' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="order_new_node_hourly">

Order a new node in the cluster

```sql
EXEC ovh.cluster_hadoop.clusters.order_new_node_hourly 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"nodeProfile": "{{ nodeProfile }}"
}'
;
```
</TabItem>
<TabItem value="restart">

Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)

```sql
EXEC ovh.cluster_hadoop.clusters.restart 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="service_restart">

Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)

```sql
EXEC ovh.cluster_hadoop.clusters.service_restart 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"service": "{{ service }}"
}'
;
```
</TabItem>
<TabItem value="service_start">

Start a Cloudera Manager service

```sql
EXEC ovh.cluster_hadoop.clusters.service_start 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"service": "{{ service }}"
}'
;
```
</TabItem>
<TabItem value="service_stop">

Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)

```sql
EXEC ovh.cluster_hadoop.clusters.service_stop 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"service": "{{ service }}"
}'
;
```
</TabItem>
<TabItem value="start">

Start the Cloudera Manager Hadoop Cluster

```sql
EXEC ovh.cluster_hadoop.clusters.start 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="stop">

Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)

```sql
EXEC ovh.cluster_hadoop.clusters.stop 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="terminate">

Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST

```sql
EXEC ovh.cluster_hadoop.clusters.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
