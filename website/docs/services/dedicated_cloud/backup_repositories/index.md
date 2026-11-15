--- 
title: backup_repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_repositories
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

Creates, updates, deletes, gets or lists a <code>backup_repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.backup_repositories" /></td></tr>
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
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>Repository Id (wire: repositoryId)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>Repository Name (wire: repositoryName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_replication_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Replication last successful date (wire: lastSuccessfulReplicationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>string</code></td>
    <td>Replication status (disabled, disabling, enabled, enabling, error, migrating, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_zone" /></td>
    <td><code>string</code></td>
    <td>Replication zone (wire: replicationZone)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_status" /></td>
    <td><code>string</code></td>
    <td>Replication sync status (ok, out-of-sync, sync-required, unknown) (wire: syncStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Backup repository

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
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>Repository Id (wire: repositoryId)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>Repository Name (wire: repositoryName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_replication_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Replication last successful date (wire: lastSuccessfulReplicationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>string</code></td>
    <td>Replication status (disabled, disabling, enabled, enabling, error, migrating, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_zone" /></td>
    <td><code>string</code></td>
    <td>Replication zone (wire: replicationZone)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_status" /></td>
    <td><code>string</code></td>
    <td>Replication sync status (ok, out-of-sync, sync-required, unknown) (wire: syncStatus)</td>
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
    <td><a href="#parameter-repository_id"><code>repository_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a backup repository. Returns the backup repository: name, replication zone, replication status and last successful replication date.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List backup repositories</td>
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
<tr id="parameter-repository_id">
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>Repository Id (wire: repositoryId)</td>
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

Get a backup repository. Returns the backup repository: name, replication zone, replication status and last successful replication date.

```sql
SELECT
repository_id,
repository_name,
last_successful_replication_date,
replication,
replication_zone,
sync_status
FROM ovh.dedicated_cloud.backup_repositories
WHERE repository_id = '{{ repository_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List backup repositories

```sql
SELECT
repository_id,
repository_name,
last_successful_replication_date,
replication,
replication_zone,
sync_status
FROM ovh.dedicated_cloud.backup_repositories
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
