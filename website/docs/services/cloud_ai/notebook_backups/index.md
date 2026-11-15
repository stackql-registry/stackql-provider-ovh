--- 
title: notebook_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_backups
  - cloud_ai
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

Creates, updates, deletes, gets or lists a <code>notebook_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebook_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.notebook_backups" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Backup Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Backup creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="eviction_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>date at which the notebook backup will be evicted/deleted according to applicable notebook workspace backup retention policy (wire: evictionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Backup last update date (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

AI Solutions Platform Notebook Backup Object

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Backup Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Backup creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="eviction_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>date at which the notebook backup will be evicted/deleted according to applicable notebook workspace backup retention policy (wire: evictionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Backup last update date (wire: updatedAt)</td>
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
    <td><a href="#parameter-backup_id"><code>backup_id</code></a>, <a href="#parameter-notebook_id"><code>notebook_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get details for a single AI Solutions notebook backup</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-notebook_id"><code>notebook_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-order"><code>order</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-updated_after"><code>updated_after</code></a>, <a href="#parameter-updated_before"><code>updated_before</code></a></td>
    <td>List all backups of an AI Solutions notebook</td>
</tr>
<tr>
    <td><a href="#fork"><CopyableCode code="fork" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-notebookId"><code>notebookId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Starts a new AI Solutions notebook from a backup</td>
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
<tr id="parameter-backupId">
    <td><CopyableCode code="backupId" /></td>
    <td><code>string</code></td>
    <td>Backup ID</td>
</tr>
<tr id="parameter-backup_id">
    <td><CopyableCode code="backup_id" /></td>
    <td><code>string</code></td>
    <td>Backup ID (wire: backupId)</td>
</tr>
<tr id="parameter-notebookId">
    <td><CopyableCode code="notebookId" /></td>
    <td><code>string</code></td>
    <td>Notebook ID</td>
</tr>
<tr id="parameter-notebook_id">
    <td><CopyableCode code="notebook_id" /></td>
    <td><code>string</code></td>
    <td>Notebook ID (wire: notebookId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>Order the result set</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page of the result set</td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the result set</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort the result with this field</td>
</tr>
<tr id="parameter-updated_after">
    <td><CopyableCode code="updated_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter on updatedAt property (&gt;) (wire: updatedAfter)</td>
</tr>
<tr id="parameter-updated_before">
    <td><CopyableCode code="updated_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter on updatedAt property (&lt;) (wire: updatedBefore)</td>
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

Get details for a single AI Solutions notebook backup

```sql
SELECT
id,
created_at,
eviction_date,
updated_at
FROM ovh.cloud_ai.notebook_backups
WHERE backup_id = '{{ backup_id }}' -- required
AND notebook_id = '{{ notebook_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List all backups of an AI Solutions notebook

```sql
SELECT
id,
created_at,
eviction_date,
updated_at
FROM ovh.cloud_ai.notebook_backups
WHERE notebook_id = '{{ notebook_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND order = '{{ order }}'
AND page = '{{ page }}'
AND size = '{{ size }}'
AND sort = '{{ sort }}'
AND updated_after = '{{ updated_after }}'
AND updated_before = '{{ updated_before }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="fork"
    values={[
        { label: 'fork', value: 'fork' }
    ]}
>
<TabItem value="fork">

Starts a new AI Solutions notebook from a backup

```sql
EXEC ovh.cloud_ai.notebook_backups.fork 
@backupId='{{ backupId }}' --required, 
@notebookId='{{ notebookId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
