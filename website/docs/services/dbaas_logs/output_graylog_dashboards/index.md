--- 
title: output_graylog_dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - output_graylog_dashboards
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

Creates, updates, deletes, gets or lists an <code>output_graylog_dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="output_graylog_dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.output_graylog_dashboards" /></td></tr>
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
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Dashboard ID (wire: dashboardId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Dashboard creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Dashboard description</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="is_editable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if you are allowed to edit entry (wire: isEditable)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Dashboard description</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Dashboard last update (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Graylog dashboard

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
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Dashboard ID (wire: dashboardId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Dashboard creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Dashboard description</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="is_editable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if you are allowed to edit entry (wire: isEditable)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Dashboard description</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Dashboard last update (wire: updatedAt)</td>
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
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the dashboard.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the dashboards of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a dashboard on the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Updates the dashboard.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the dashboard.</td>
</tr>
<tr>
    <td><a href="#duplicate"><CopyableCode code="duplicate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dashboardId"><code>dashboardId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a copy of the dashboard.</td>
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
<tr id="parameter-dashboardId">
    <td><CopyableCode code="dashboardId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Dashboard ID</td>
</tr>
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Dashboard ID (wire: dashboardId)</td>
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

Returns the dashboard.

```sql
SELECT
dashboard_id,
created_at,
description,
iam,
is_editable,
title,
updated_at
FROM ovh.dbaas_logs.output_graylog_dashboards
WHERE dashboard_id = '{{ dashboard_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the dashboards of the Logs Data Platform service.

```sql
SELECT
dashboard_id,
created_at,
description,
iam,
is_editable,
title,
updated_at
FROM ovh.dbaas_logs.output_graylog_dashboards
WHERE service_name = '{{ service_name }}' -- required
AND iam_tags = '{{ iam_tags }}'
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

Creates a dashboard on the Logs Data Platform service.

```sql
INSERT INTO ovh.dbaas_logs.output_graylog_dashboards (
description,
title,
service_name
)
SELECT 
'{{ description }}' /* required */,
'{{ title }}' /* required */,
'{{ service_name }}'
RETURNING
alias_id,
dashboard_id,
encryption_key_id,
index_id,
input_id,
operation_id,
osd_id,
role_id,
stream_id,
subscription_id,
tenant_id,
token_id,
service_name,
created_at,
state,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: output_graylog_dashboards
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the output_graylog_dashboards resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description
    - name: title
      value: "{{ title }}"
      description: |
        Title
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the dashboard.

```sql
UPDATE ovh.dbaas_logs.output_graylog_dashboards
SET 
description = '{{ description }}',
title = '{{ title }}'
WHERE 
dashboard_id = '{{ dashboard_id }}' --required
AND service_name = '{{ service_name }}' --required
AND description = '{{ description }}' --required
AND title = '{{ title }}' --required
RETURNING
alias_id,
dashboard_id,
encryption_key_id,
index_id,
input_id,
operation_id,
osd_id,
role_id,
stream_id,
subscription_id,
tenant_id,
token_id,
service_name,
created_at,
state,
updated_at;
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

Deletes the dashboard.

```sql
DELETE FROM ovh.dbaas_logs.output_graylog_dashboards
WHERE dashboard_id = '{{ dashboard_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="duplicate"
    values={[
        { label: 'duplicate', value: 'duplicate' }
    ]}
>
<TabItem value="duplicate">

Creates a copy of the dashboard.

```sql
EXEC ovh.dbaas_logs.output_graylog_dashboards.duplicate 
@dashboardId='{{ dashboardId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"description": "{{ description }}", 
"streamId": "{{ streamId }}", 
"title": "{{ title }}"
}'
;
```
</TabItem>
</Tabs>
