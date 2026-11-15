--- 
title: output_opensearch_indices
hide_title: false
hide_table_of_contents: false
keywords:
  - output_opensearch_indices
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

Creates, updates, deletes, gets or lists an <code>output_opensearch_indices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="output_opensearch_indices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.output_opensearch_indices" /></td></tr>
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
    <td>Index name</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Index ID (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If set, notify when size is near 80, 90 or 100 % of its maximum capacity (wire: alertNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Index creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_size" /></td>
    <td><code>integer</code></td>
    <td>Current index size (in bytes) (wire: currentSize)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Index description</td>
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
    <td><CopyableCode code="max_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum index size (in bytes) (wire: maxSize)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_shard" /></td>
    <td><code>integer</code></td>
    <td>Number of shard (wire: nbShard)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Index last update (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Index

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
    <td>Index name</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Index ID (wire: indexId)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If set, notify when size is near 80, 90 or 100 % of its maximum capacity (wire: alertNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Index creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_size" /></td>
    <td><code>integer</code></td>
    <td>Current index size (in bytes) (wire: currentSize)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Index description</td>
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
    <td><CopyableCode code="max_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum index size (in bytes) (wire: maxSize)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_shard" /></td>
    <td><code>integer</code></td>
    <td>Number of shard (wire: nbShard)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Index last update (wire: updatedAt)</td>
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
    <td><a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the index.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the indexes of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-suffix"><code>suffix</code></a></td>
    <td></td>
    <td>Creates an index on the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Updates the index.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the index.</td>
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
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Index ID (wire: indexId)</td>
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

Returns the index.

```sql
SELECT
name,
index_id,
alert_notify_enabled,
created_at,
current_size,
description,
iam,
is_editable,
max_size,
nb_shard,
updated_at
FROM ovh.dbaas_logs.output_opensearch_indices
WHERE index_id = '{{ index_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the indexes of the Logs Data Platform service.

```sql
SELECT
name,
index_id,
alert_notify_enabled,
created_at,
current_size,
description,
iam,
is_editable,
max_size,
nb_shard,
updated_at
FROM ovh.dbaas_logs.output_opensearch_indices
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

Creates an index on the Logs Data Platform service.

```sql
INSERT INTO ovh.dbaas_logs.output_opensearch_indices (
alert_notify_enabled,
description,
nb_shard,
suffix,
service_name
)
SELECT 
{{ alert_notify_enabled }},
'{{ description }}' /* required */,
{{ nb_shard }},
'{{ suffix }}' /* required */,
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
- name: output_opensearch_indices
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the output_opensearch_indices resource.
    - name: alert_notify_enabled
      value: {{ alert_notify_enabled }}
      description: |
        If set, notify when size is near 80, 90 or 100 % of its maximum capacity
    - name: description
      value: "{{ description }}"
      description: |
        Description
    - name: nb_shard
      value: {{ nb_shard }}
      description: |
        Number of shard
    - name: suffix
      value: "{{ suffix }}"
      description: |
        Suffix
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

Updates the index.

```sql
UPDATE ovh.dbaas_logs.output_opensearch_indices
SET 
alert_notify_enabled = {{ alert_notify_enabled }},
description = '{{ description }}'
WHERE 
index_id = '{{ index_id }}' --required
AND service_name = '{{ service_name }}' --required
AND description = '{{ description }}' --required
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

Deletes the index.

```sql
DELETE FROM ovh.dbaas_logs.output_opensearch_indices
WHERE index_id = '{{ index_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
