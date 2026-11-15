--- 
title: role_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - role_permissions
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

Creates, updates, deletes, gets or lists a <code>role_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.role_permissions" /></td></tr>
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
    <td><CopyableCode code="alias_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Elasticsearch alias (wire: aliasId)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Graylog dashboard (wire: dashboardId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Elasticsearch index (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="osd_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated OpenSearch Dashboards instance (wire: osdId)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Permission ID (wire: permissionId)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Graylog stream (wire: streamId)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_type" /></td>
    <td><code>string</code></td>
    <td>Permission type (READ_ONLY, READ_WRITE) (wire: permissionType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Role permission

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
    <td><CopyableCode code="alias_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Elasticsearch alias (wire: aliasId)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Graylog dashboard (wire: dashboardId)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Elasticsearch index (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="osd_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated OpenSearch Dashboards instance (wire: osdId)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Permission ID (wire: permissionId)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Graylog stream (wire: streamId)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_type" /></td>
    <td><code>string</code></td>
    <td>Permission type (READ_ONLY, READ_WRITE) (wire: permissionType)</td>
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
    <td><a href="#parameter-permission_id"><code>permission_id</code></a>, <a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the role permission. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the role permissions of the Logs Data Platform service. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-permission_id"><code>permission_id</code></a>, <a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the role permission. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#alias"><CopyableCode code="alias" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-aliasId"><code>aliasId</code></a></td>
    <td></td>
    <td>Grants the role permission on an alias. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#dashboard"><CopyableCode code="dashboard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-dashboardId"><code>dashboardId</code></a></td>
    <td></td>
    <td>Grants the role permission on a dashboard. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#index"><CopyableCode code="index" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-indexId"><code>indexId</code></a></td>
    <td></td>
    <td>Grants the role permission on an index. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#osd"><CopyableCode code="osd" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-osdId"><code>osdId</code></a></td>
    <td></td>
    <td>Grants the role permission on an OpenSearch Dashboards instance. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#stream"><CopyableCode code="stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-roleId"><code>roleId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-streamId"><code>streamId</code></a></td>
    <td></td>
    <td>Grants the role permission on a data stream. (Deprecated, will be removed)</td>
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
<tr id="parameter-permission_id">
    <td><CopyableCode code="permission_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Permission ID (wire: permissionId)</td>
</tr>
<tr id="parameter-roleId">
    <td><CopyableCode code="roleId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Role ID</td>
</tr>
<tr id="parameter-role_id">
    <td><CopyableCode code="role_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Role ID (wire: roleId)</td>
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

Returns the role permission. (Deprecated, will be removed)

```sql
SELECT
alias_id,
dashboard_id,
index_id,
osd_id,
permission_id,
stream_id,
permission_type
FROM ovh.dbaas_logs.role_permissions
WHERE permission_id = '{{ permission_id }}' -- required
AND role_id = '{{ role_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the role permissions of the Logs Data Platform service. (Deprecated, will be removed)

```sql
SELECT
alias_id,
dashboard_id,
index_id,
osd_id,
permission_id,
stream_id,
permission_type
FROM ovh.dbaas_logs.role_permissions
WHERE role_id = '{{ role_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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

Deletes the role permission. (Deprecated, will be removed)

```sql
DELETE FROM ovh.dbaas_logs.role_permissions
WHERE permission_id = '{{ permission_id }}' --required
AND role_id = '{{ role_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="alias"
    values={[
        { label: 'alias', value: 'alias' },
        { label: 'dashboard', value: 'dashboard' },
        { label: 'index', value: 'index' },
        { label: 'osd', value: 'osd' },
        { label: 'stream', value: 'stream' }
    ]}
>
<TabItem value="alias">

Grants the role permission on an alias. (Deprecated, will be removed)

```sql
EXEC ovh.dbaas_logs.role_permissions.alias 
@roleId='{{ roleId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"aliasId": "{{ aliasId }}"
}'
;
```
</TabItem>
<TabItem value="dashboard">

Grants the role permission on a dashboard. (Deprecated, will be removed)

```sql
EXEC ovh.dbaas_logs.role_permissions.dashboard 
@roleId='{{ roleId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"dashboardId": "{{ dashboardId }}", 
"permissionType": "{{ permissionType }}"
}'
;
```
</TabItem>
<TabItem value="index">

Grants the role permission on an index. (Deprecated, will be removed)

```sql
EXEC ovh.dbaas_logs.role_permissions.index 
@roleId='{{ roleId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"indexId": "{{ indexId }}", 
"permissionType": "{{ permissionType }}"
}'
;
```
</TabItem>
<TabItem value="osd">

Grants the role permission on an OpenSearch Dashboards instance. (Deprecated, will be removed)

```sql
EXEC ovh.dbaas_logs.role_permissions.osd 
@roleId='{{ roleId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"osdId": "{{ osdId }}", 
"permissionType": "{{ permissionType }}"
}'
;
```
</TabItem>
<TabItem value="stream">

Grants the role permission on a data stream. (Deprecated, will be removed)

```sql
EXEC ovh.dbaas_logs.role_permissions.stream 
@roleId='{{ roleId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"streamId": "{{ streamId }}"
}'
;
```
</TabItem>
</Tabs>
