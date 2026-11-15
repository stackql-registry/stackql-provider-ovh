--- 
title: cluster_retentions
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_retentions
  - dbaas_logs
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

Creates, updates, deletes, gets or lists a <code>cluster_retentions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_retentions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.cluster_retentions" /></td></tr>
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
    <td><CopyableCode code="retention_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Retention ID (wire: retentionId)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (duration)</code></td>
    <td>Indexed duration expressed in ISO-8601 format</td>
</tr>
<tr>
    <td><CopyableCode code="is_supported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if a new stream can use it (wire: isSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_type" /></td>
    <td><code>string</code></td>
    <td>Retention type (LOGS_COLD_STORAGE, LOGS_INDEXING, METRICS_TENANT) (wire: retentionType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Cluster retention

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
    <td><CopyableCode code="retention_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Retention ID (wire: retentionId)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (duration)</code></td>
    <td>Indexed duration expressed in ISO-8601 format</td>
</tr>
<tr>
    <td><CopyableCode code="is_supported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if a new stream can use it (wire: isSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_type" /></td>
    <td><code>string</code></td>
    <td>Retention type (LOGS_COLD_STORAGE, LOGS_INDEXING, METRICS_TENANT) (wire: retentionType)</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-retention_id"><code>retention_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the cluster retention.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the cluster retentions of the Logs Data Platform service.</td>
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
    <td><code>string (uuid)</code></td>
    <td>Cluster ID (wire: clusterId)</td>
</tr>
<tr id="parameter-retention_id">
    <td><CopyableCode code="retention_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Retention ID (wire: retentionId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the cluster retention.

```sql
SELECT
retention_id,
duration,
is_supported,
retention_type
FROM ovh.dbaas_logs.cluster_retentions
WHERE cluster_id = '{{ cluster_id }}' -- required
AND retention_id = '{{ retention_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the cluster retentions of the Logs Data Platform service.

```sql
SELECT
retention_id,
duration,
is_supported,
retention_type
FROM ovh.dbaas_logs.cluster_retentions
WHERE cluster_id = '{{ cluster_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
