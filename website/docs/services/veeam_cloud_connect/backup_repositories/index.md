--- 
title: backup_repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_repositories
  - veeam_cloud_connect
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.veeam_cloud_connect.backup_repositories" /></td></tr>
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
    <td><CopyableCode code="inventory_name" /></td>
    <td><code>string</code></td>
    <td>The inventory name of your backup repository (wire: inventoryName)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>The quota allowed on this Backup repository</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>The quota used on this Backup repository (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_zone" /></td>
    <td><code>string</code></td>
    <td>The replication zone of your repository (bhs1, rbx2, sbg1) (wire: replicationZone)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of your backup repository (configuring, delivered, disabled, disabling, error, migrating, removing)</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>integer</code></td>
    <td>The usage in percent of this backup repository</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Veeam backup repository

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
    <td><CopyableCode code="inventory_name" /></td>
    <td><code>string</code></td>
    <td>The inventory name of your backup repository (wire: inventoryName)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>The quota allowed on this Backup repository</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>The quota used on this Backup repository (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_zone" /></td>
    <td><code>string</code></td>
    <td>The replication zone of your repository (bhs1, rbx2, sbg1) (wire: replicationZone)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of your backup repository (configuring, delivered, disabled, disabling, error, migrating, removing)</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>integer</code></td>
    <td>The usage in percent of this backup repository</td>
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
    <td><a href="#parameter-inventory_name"><code>inventory_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get Veeam backup repository</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Veeam backup repositories</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create backup repository</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-inventory_name"><code>inventory_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete backup repository</td>
</tr>
<tr>
    <td><a href="#upgrade_quota"><CopyableCode code="upgrade_quota" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-inventoryName"><code>inventoryName</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-newQuota"><code>newQuota</code></a></td>
    <td></td>
    <td>Change quota</td>
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
<tr id="parameter-inventoryName">
    <td><CopyableCode code="inventoryName" /></td>
    <td><code>string</code></td>
    <td>The inventory name of your backup repository</td>
</tr>
<tr id="parameter-inventory_name">
    <td><CopyableCode code="inventory_name" /></td>
    <td><code>string</code></td>
    <td>The inventory name of your backup repository (wire: inventoryName)</td>
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

Get Veeam backup repository

```sql
SELECT
inventory_name,
quota,
quota_used,
replication_zone,
state,
usage
FROM ovh.veeam_cloud_connect.backup_repositories
WHERE inventory_name = '{{ inventory_name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Veeam backup repositories

```sql
SELECT
inventory_name,
quota,
quota_used,
replication_zone,
state,
usage
FROM ovh.veeam_cloud_connect.backup_repositories
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create backup repository

```sql
INSERT INTO ovh.veeam_cloud_connect.backup_repositories (
service_name
)
SELECT 
'{{ service_name }}'
RETURNING
name,
task_id,
end_date,
progress,
start_date,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backup_repositories
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the backup_repositories resource.
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

Delete backup repository

```sql
DELETE FROM ovh.veeam_cloud_connect.backup_repositories
WHERE inventory_name = '{{ inventory_name }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="upgrade_quota"
    values={[
        { label: 'upgrade_quota', value: 'upgrade_quota' }
    ]}
>
<TabItem value="upgrade_quota">

Change quota

```sql
EXEC ovh.veeam_cloud_connect.backup_repositories.upgrade_quota 
@inventoryName='{{ inventoryName }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"newQuota": {{ newQuota }}
}'
;
```
</TabItem>
</Tabs>
