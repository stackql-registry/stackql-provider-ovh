--- 
title: extra_sql_persos
hide_title: false
hide_table_of_contents: false
keywords:
  - extra_sql_persos
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

Creates, updates, deletes, gets or lists an <code>extra_sql_persos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="extra_sql_persos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.extra_sql_persos" /></td></tr>
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
    <td>Identifier of the (additional) SQL slot</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The extraSqlPerso option name</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this extraSqlPerso (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Billing name of the matching subscription (or internal naming otherwise) (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="database" /></td>
    <td><code>integer</code></td>
    <td>Number of database allowed by this option</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Quota size allowed per each database by this option</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The extraSqlPerso option status</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>array</code></td>
    <td>Linked databases</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Sqlperso service

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
    <td>Identifier of the (additional) SQL slot</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The extraSqlPerso option name</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this extraSqlPerso (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Billing name of the matching subscription (or internal naming otherwise) (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="database" /></td>
    <td><code>integer</code></td>
    <td>Number of database allowed by this option</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Quota size allowed per each database by this option</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The extraSqlPerso option status</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>array</code></td>
    <td>Linked databases</td>
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
    <td>Get an extra SQL option. Returns the number of databases allowed, the quota per database, the linked databases and the status of the option.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List extra SQL options. Returns the IDs of the additional SQL options of the hosting. Each option adds databases, each with its own quota.</td>
</tr>
<tr>
    <td><a href="#service_infos_update"><CopyableCode code="service_infos_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-renew"><code>renew</code></a></td>
    <td></td>
    <td>Update extra SQL option renewal. Updates the renewal settings of the additional SQL option: automatic renewal, renewal period and deletion at expiration.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Terminate an extra SQL option. Requests the termination of the additional SQL option. A link to confirm it is sent by email to the administrator contact.</td>
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
    <td>Identifier of the (additional) SQL slot</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
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

Get an extra SQL option. Returns the number of databases allowed, the quota per database, the linked databases and the status of the option.

```sql
SELECT
id,
name,
task_id,
service_name,
database,
size,
status,
usage
FROM ovh.hosting_web.extra_sql_persos
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List extra SQL options. Returns the IDs of the additional SQL options of the hosting. Each option adds databases, each with its own quota.

```sql
SELECT
id,
name,
task_id,
service_name,
database,
size,
status,
usage
FROM ovh.hosting_web.extra_sql_persos
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="service_infos_update"
    values={[
        { label: 'service_infos_update', value: 'service_infos_update' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="service_infos_update">

Update extra SQL option renewal. Updates the renewal settings of the additional SQL option: automatic renewal, renewal period and deletion at expiration.

```sql
EXEC ovh.hosting_web.extra_sql_persos.service_infos_update 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"renew": "{{ renew }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Terminate an extra SQL option. Requests the termination of the additional SQL option. A link to confirm it is sent by email to the administrator contact.

```sql
EXEC ovh.hosting_web.extra_sql_persos.terminate 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
