--- 
title: own_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - own_logs
  - hosting_web
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

Creates, updates, deletes, gets or lists an <code>own_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="own_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.own_logs" /></td></tr>
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
    <td><code>integer</code></td>
    <td>Identifier of this ownLogs</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this ownLogs (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="fqdn" /></td>
    <td><code>string</code></td>
    <td>The ownlogs fqdn available on logs.clusterXX.hosting.ovh.net</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>URL to access this ownLogs logs</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>string</code></td>
    <td>URL to access this ownLogs stats</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of this ownLogs (created, creating, deleting)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Hosting own logs

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
    <td><code>integer</code></td>
    <td>Identifier of this ownLogs</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this ownLogs (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="fqdn" /></td>
    <td><code>string</code></td>
    <td>The ownlogs fqdn available on logs.clusterXX.hosting.ovh.net</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>URL to access this ownLogs logs</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>string</code></td>
    <td>URL to access this ownLogs stats</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of this ownLogs (created, creating, deleting)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get own logs. Returns the FQDN, logs URL, statistics URL and status of the own logs, which separate the logs and statistics of a domain.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-fqdn"><code>fqdn</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List own logs. Returns the IDs of the own logs of the hosting, which separate the logs and statistics of a domain. Filter them by FQDN.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the object</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
</tr>
<tr id="parameter-fqdn">
    <td><CopyableCode code="fqdn" /></td>
    <td><code>string</code></td>
    <td>Filter the value of fqdn property (like)</td>
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

Get own logs. Returns the FQDN, logs URL, statistics URL and status of the own logs, which separate the logs and statistics of a domain.

```sql
SELECT
id,
task_id,
fqdn,
logs,
stats,
status
FROM ovh.hosting_web.own_logs
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List own logs. Returns the IDs of the own logs of the hosting, which separate the logs and statistics of a domain. Filter them by FQDN.

```sql
SELECT
id,
task_id,
fqdn,
logs,
stats,
status
FROM ovh.hosting_web.own_logs
WHERE service_name = '{{ service_name }}' -- required
AND fqdn = '{{ fqdn }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
