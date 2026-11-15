--- 
title: output_graylog_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - output_graylog_streams
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

Creates, updates, deletes, gets or lists an <code>output_graylog_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="output_graylog_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.output_graylog_streams" /></td></tr>
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
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID (wire: clusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Parent stream ID (wire: parentStreamId)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Retention ID (wire: retentionId)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream ID (wire: streamId)</td>
</tr>
<tr>
    <td><CopyableCode code="can_alert" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the current user can create alert on the stream (wire: canAlert)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_compression" /></td>
    <td><code>string</code></td>
    <td>Cold storage compression method (DEFLATED, GZIP, LZMA, ZSTD) (wire: coldStorageCompression)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_content" /></td>
    <td><code>string</code></td>
    <td>ColdStorage content (ALL, GELF, PLAIN) (wire: coldStorageContent)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Is Cold storage enabled? (wire: coldStorageEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Notify on new Cold storage archive (wire: coldStorageNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_retention" /></td>
    <td><code>integer</code></td>
    <td>Cold storage retention in year (wire: coldStorageRetention)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Stream creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Stream description</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_keys_ids" /></td>
    <td><code>array</code></td>
    <td>Encryption keys used to encrypt stream archives (wire: encryptionKeysIds)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_current_size" /></td>
    <td><code>integer</code></td>
    <td>Indexing current size (in bytes) (wire: indexingCurrentSize)</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable ES indexing (wire: indexingEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_max_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum indexing size (in GB) (wire: indexingMaxSize)</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If set, notify when size is near 80, 90 or 100 % of the maximum configured setting (wire: indexingNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="is_editable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if you are allowed to edit entry (wire: isEditable)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_alert_condition" /></td>
    <td><code>integer</code></td>
    <td>Number of alert condition (wire: nbAlertCondition)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_archive" /></td>
    <td><code>integer</code></td>
    <td>Number of coldstored archives (wire: nbArchive)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_subscription" /></td>
    <td><code>integer</code></td>
    <td>Number of subscriptions targeting this stream (wire: nbSubscription)</td>
</tr>
<tr>
    <td><CopyableCode code="pause_indexing_on_max_size" /></td>
    <td><code>boolean</code></td>
    <td>If set, pause indexing when maximum size is reach (wire: pauseIndexingOnMaxSize)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Stream name</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Stream last update (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="web_socket_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable Websocket (wire: webSocketEnabled)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Graylog stream

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
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID (wire: clusterId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Parent stream ID (wire: parentStreamId)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Retention ID (wire: retentionId)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream ID (wire: streamId)</td>
</tr>
<tr>
    <td><CopyableCode code="can_alert" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the current user can create alert on the stream (wire: canAlert)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_compression" /></td>
    <td><code>string</code></td>
    <td>Cold storage compression method (DEFLATED, GZIP, LZMA, ZSTD) (wire: coldStorageCompression)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_content" /></td>
    <td><code>string</code></td>
    <td>ColdStorage content (ALL, GELF, PLAIN) (wire: coldStorageContent)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Is Cold storage enabled? (wire: coldStorageEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Notify on new Cold storage archive (wire: coldStorageNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="cold_storage_retention" /></td>
    <td><code>integer</code></td>
    <td>Cold storage retention in year (wire: coldStorageRetention)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Stream creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Stream description</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_keys_ids" /></td>
    <td><code>array</code></td>
    <td>Encryption keys used to encrypt stream archives (wire: encryptionKeysIds)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_current_size" /></td>
    <td><code>integer</code></td>
    <td>Indexing current size (in bytes) (wire: indexingCurrentSize)</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable ES indexing (wire: indexingEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_max_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum indexing size (in GB) (wire: indexingMaxSize)</td>
</tr>
<tr>
    <td><CopyableCode code="indexing_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If set, notify when size is near 80, 90 or 100 % of the maximum configured setting (wire: indexingNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="is_editable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if you are allowed to edit entry (wire: isEditable)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_alert_condition" /></td>
    <td><code>integer</code></td>
    <td>Number of alert condition (wire: nbAlertCondition)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_archive" /></td>
    <td><code>integer</code></td>
    <td>Number of coldstored archives (wire: nbArchive)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_subscription" /></td>
    <td><code>integer</code></td>
    <td>Number of subscriptions targeting this stream (wire: nbSubscription)</td>
</tr>
<tr>
    <td><CopyableCode code="pause_indexing_on_max_size" /></td>
    <td><code>boolean</code></td>
    <td>If set, pause indexing when maximum size is reach (wire: pauseIndexingOnMaxSize)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Stream name</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Stream last update (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="web_socket_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable Websocket (wire: webSocketEnabled)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td></td>
    <td>Returns the data stream.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the data streams of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a data stream on the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Updates the data stream.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td></td>
    <td>Deletes the data stream.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-stream_id">
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream ID (wire: streamId)</td>
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

Returns the data stream.

```sql
SELECT
cluster_id,
parent_stream_id,
retention_id,
stream_id,
can_alert,
cold_storage_compression,
cold_storage_content,
cold_storage_enabled,
cold_storage_notify_enabled,
cold_storage_retention,
created_at,
description,
encryption_keys_ids,
iam,
indexing_current_size,
indexing_enabled,
indexing_max_size,
indexing_notify_enabled,
is_editable,
nb_alert_condition,
nb_archive,
nb_subscription,
pause_indexing_on_max_size,
title,
updated_at,
web_socket_enabled
FROM ovh.dbaas_logs.output_graylog_streams
WHERE service_name = '{{ service_name }}' -- required
AND stream_id = '{{ stream_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the data streams of the Logs Data Platform service.

```sql
SELECT
cluster_id,
parent_stream_id,
retention_id,
stream_id,
can_alert,
cold_storage_compression,
cold_storage_content,
cold_storage_enabled,
cold_storage_notify_enabled,
cold_storage_retention,
created_at,
description,
encryption_keys_ids,
iam,
indexing_current_size,
indexing_enabled,
indexing_max_size,
indexing_notify_enabled,
is_editable,
nb_alert_condition,
nb_archive,
nb_subscription,
pause_indexing_on_max_size,
title,
updated_at,
web_socket_enabled
FROM ovh.dbaas_logs.output_graylog_streams
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

Creates a data stream on the Logs Data Platform service.

```sql
INSERT INTO ovh.dbaas_logs.output_graylog_streams (
cold_storage_compression,
cold_storage_content,
cold_storage_enabled,
cold_storage_notify_enabled,
cold_storage_retention,
description,
encryption_keys_ids,
indexing_enabled,
indexing_max_size,
indexing_notify_enabled,
parent_stream_id,
pause_indexing_on_max_size,
retention_id,
title,
web_socket_enabled,
service_name
)
SELECT 
'{{ cold_storage_compression }}',
'{{ cold_storage_content }}',
{{ cold_storage_enabled }},
{{ cold_storage_notify_enabled }},
{{ cold_storage_retention }},
'{{ description }}' /* required */,
'{{ encryption_keys_ids }}',
{{ indexing_enabled }},
{{ indexing_max_size }},
{{ indexing_notify_enabled }},
'{{ parent_stream_id }}',
{{ pause_indexing_on_max_size }},
'{{ retention_id }}',
'{{ title }}' /* required */,
{{ web_socket_enabled }},
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
- name: output_graylog_streams
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the output_graylog_streams resource.
    - name: cold_storage_compression
      value: "{{ cold_storage_compression }}"
      description: |
        Cold storage compression
      valid_values: ['DEFLATED', 'GZIP', 'LZMA', 'ZSTD']
    - name: cold_storage_content
      value: "{{ cold_storage_content }}"
      description: |
        Cold storage archive content
      valid_values: ['ALL', 'GELF', 'PLAIN']
    - name: cold_storage_enabled
      value: {{ cold_storage_enabled }}
      description: |
        Cold storage enabled
    - name: cold_storage_notify_enabled
      value: {{ cold_storage_notify_enabled }}
      description: |
        Cold storage notify enabled
    - name: cold_storage_retention
      value: {{ cold_storage_retention }}
      description: |
        Cold storage retention time
    - name: description
      value: "{{ description }}"
      description: |
        Description
    - name: encryption_keys_ids
      value:
        - "{{ encryption_keys_ids }}"
      description: |
        Encryption keys used to encrypt stream archives
    - name: indexing_enabled
      value: {{ indexing_enabled }}
      description: |
        ES indexing enabled
    - name: indexing_max_size
      value: {{ indexing_max_size }}
      description: |
        Maximum indexing size (in GB)
    - name: indexing_notify_enabled
      value: {{ indexing_notify_enabled }}
      description: |
        If set, notify when size is near 80, 90 or 100 % of the maximum configured setting
    - name: parent_stream_id
      value: "{{ parent_stream_id }}"
      description: |
        Parent stream ID
    - name: pause_indexing_on_max_size
      value: {{ pause_indexing_on_max_size }}
      description: |
        If set, pause indexing when maximum size is reach
    - name: retention_id
      value: "{{ retention_id }}"
      description: |
        Retention ID
    - name: title
      value: "{{ title }}"
      description: |
        Title
    - name: web_socket_enabled
      value: {{ web_socket_enabled }}
      description: |
        Web Socket enabled
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

Updates the data stream.

```sql
UPDATE ovh.dbaas_logs.output_graylog_streams
SET 
cold_storage_compression = '{{ cold_storage_compression }}',
cold_storage_content = '{{ cold_storage_content }}',
cold_storage_enabled = {{ cold_storage_enabled }},
cold_storage_notify_enabled = {{ cold_storage_notify_enabled }},
cold_storage_retention = {{ cold_storage_retention }},
description = '{{ description }}',
encryption_keys_ids = '{{ encryption_keys_ids }}',
indexing_enabled = {{ indexing_enabled }},
indexing_max_size = {{ indexing_max_size }},
indexing_notify_enabled = {{ indexing_notify_enabled }},
pause_indexing_on_max_size = {{ pause_indexing_on_max_size }},
title = '{{ title }}',
web_socket_enabled = {{ web_socket_enabled }}
WHERE 
service_name = '{{ service_name }}' --required
AND stream_id = '{{ stream_id }}' --required
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

Deletes the data stream.

```sql
DELETE FROM ovh.dbaas_logs.output_graylog_streams
WHERE service_name = '{{ service_name }}' --required
AND stream_id = '{{ stream_id }}' --required
;
```
</TabItem>
</Tabs>
