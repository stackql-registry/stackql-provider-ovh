--- 
title: pools
hide_title: false
hide_table_of_contents: false
keywords:
  - pools
  - dedicated_ceph
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

Creates, updates, deletes, gets or lists a <code>pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_ceph.pools" /></td></tr>
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
    <td>Name of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>ID of cluster (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="backup" /></td>
    <td><code>boolean</code></td>
    <td>Determine if pool should be backuped</td>
</tr>
<tr>
    <td><CopyableCode code="min_active_replicas" /></td>
    <td><code>integer</code></td>
    <td>Minimum active replicas (wire: minActiveReplicas)</td>
</tr>
<tr>
    <td><CopyableCode code="pool_type" /></td>
    <td><code>string</code></td>
    <td>Type of pool (ERASURE_CODED, REPLICATED) (wire: poolType)</td>
</tr>
<tr>
    <td><CopyableCode code="replica_count" /></td>
    <td><code>integer</code></td>
    <td>Number of replica (wire: replicaCount)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Ceph pool

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
    <td>Name of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>ID of cluster (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="backup" /></td>
    <td><code>boolean</code></td>
    <td>Determine if pool should be backuped</td>
</tr>
<tr>
    <td><CopyableCode code="min_active_replicas" /></td>
    <td><code>integer</code></td>
    <td>Minimum active replicas (wire: minActiveReplicas)</td>
</tr>
<tr>
    <td><CopyableCode code="pool_type" /></td>
    <td><code>string</code></td>
    <td>Type of pool (ERASURE_CODED, REPLICATED) (wire: poolType)</td>
</tr>
<tr>
    <td><CopyableCode code="replica_count" /></td>
    <td><code>integer</code></td>
    <td>Number of replica (wire: replicaCount)</td>
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
    <td><a href="#parameter-pool_name"><code>pool_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns a pool of the cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the pools of the cluster.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-pool_name"><code>pool_name</code></a></td>
    <td></td>
    <td>Creates a pool whose data is replicated three times. The name must contain at least three characters.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pool_name"><code>pool_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the pool from the cluster.</td>
</tr>
<tr>
    <td><a href="#allow_deletion"><CopyableCode code="allow_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-poolName"><code>poolName</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Opens a 5-minute window for deleting the pool. This window is not enforced yet: a pool can currently be deleted at any time.</td>
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
<tr id="parameter-poolName">
    <td><CopyableCode code="poolName" /></td>
    <td><code>string</code></td>
    <td>Pool name</td>
</tr>
<tr id="parameter-pool_name">
    <td><CopyableCode code="pool_name" /></td>
    <td><code>string</code></td>
    <td>Pool name (wire: poolName)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns a pool of the cluster.

```sql
SELECT
name,
service_name,
backup,
min_active_replicas,
pool_type,
replica_count
FROM ovh.dedicated_ceph.pools
WHERE pool_name = '{{ pool_name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the pools of the cluster.

```sql
SELECT
name,
service_name,
backup,
min_active_replicas,
pool_type,
replica_count
FROM ovh.dedicated_ceph.pools
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a pool whose data is replicated three times. The name must contain at least three characters.

```sql
INSERT INTO ovh.dedicated_ceph.pools (
pool_name,
service_name
)
SELECT 
'{{ pool_name }}' /* required */,
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pools
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the pools resource.
    - name: pool_name
      value: "{{ pool_name }}"
      description: |
        Name of the new pool
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the pool from the cluster.

```sql
DELETE FROM ovh.dedicated_ceph.pools
WHERE pool_name = '{{ pool_name }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="allow_deletion"
    values={[
        { label: 'allow_deletion', value: 'allow_deletion' }
    ]}
>
<TabItem value="allow_deletion">

Opens a 5-minute window for deleting the pool. This window is not enforced yet: a pool can currently be deleted at any time.

```sql
EXEC ovh.dedicated_ceph.pools.allow_deletion 
@poolName='{{ poolName }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
