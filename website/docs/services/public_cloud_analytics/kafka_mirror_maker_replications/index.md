--- 
title: kafka_mirror_maker_replications
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_mirror_maker_replications
  - public_cloud_analytics
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

Creates, updates, deletes, gets or lists a <code>kafka_mirror_maker_replications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_mirror_maker_replications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_analytics.kafka_mirror_maker_replications" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the replication flow</td>
</tr>
<tr>
    <td><CopyableCode code="source_integration_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the source integration (wire: sourceIntegrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="target_integration_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the target integration (wire: targetIntegrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="emit_heartbeats" /></td>
    <td><code>boolean</code></td>
    <td>Whether heartbeats are emitted on the replication flow (wire: emitHeartbeats)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether this replication flow is enabled</td>
</tr>
<tr>
    <td><CopyableCode code="replication_policy_class" /></td>
    <td><code>string</code></td>
    <td>Replication policy class used for this replication flow (org.apache.kafka.connect.mirror.DefaultReplicationPolicy, org.apache.kafka.connect.mirror.IdentityReplicationPolicy) (wire: replicationPolicyClass)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_group_offsets_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether consumer group offsets are synced (wire: syncGroupOffsetsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_interval" /></td>
    <td><code>integer</code></td>
    <td>Sync interval in seconds (wire: syncInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="topic_exclude_list" /></td>
    <td><code>array</code></td>
    <td>List of topic patterns to exclude from replication (wire: topicExcludeList)</td>
</tr>
<tr>
    <td><CopyableCode code="topic_include_list" /></td>
    <td><code>array</code></td>
    <td>List of topic patterns to include in replication (wire: topicIncludeList)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last update to the resource (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A replication flow on a managed Kafka MirrorMaker service

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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the replication flow</td>
</tr>
<tr>
    <td><CopyableCode code="source_integration_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the source integration (wire: sourceIntegrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="target_integration_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the target integration (wire: targetIntegrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="emit_heartbeats" /></td>
    <td><code>boolean</code></td>
    <td>Whether heartbeats are emitted on the replication flow (wire: emitHeartbeats)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether this replication flow is enabled</td>
</tr>
<tr>
    <td><CopyableCode code="replication_policy_class" /></td>
    <td><code>string</code></td>
    <td>Replication policy class used for this replication flow (org.apache.kafka.connect.mirror.DefaultReplicationPolicy, org.apache.kafka.connect.mirror.IdentityReplicationPolicy) (wire: replicationPolicyClass)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_group_offsets_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether consumer group offsets are synced (wire: syncGroupOffsetsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_interval" /></td>
    <td><code>integer</code></td>
    <td>Sync interval in seconds (wire: syncInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="topic_exclude_list" /></td>
    <td><code>array</code></td>
    <td>List of topic patterns to exclude from replication (wire: topicExcludeList)</td>
</tr>
<tr>
    <td><CopyableCode code="topic_include_list" /></td>
    <td><code>array</code></td>
    <td>List of topic patterns to include in replication (wire: topicIncludeList)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last update to the resource (wire: updatedAt)</td>
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
    <td><a href="#parameter-replication_id"><code>replication_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the source and target integrations of the flow, its topic patterns and its sync settings. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the replication flows of the service, with their source and target integrations and whether they are enabled. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-source_integration_id"><code>source_integration_id</code></a>, <a href="#parameter-target_integration_id"><code>target_integration_id</code></a></td>
    <td></td>
    <td>Creates a replication flow from a source integration to a target integration. Topics matching the include patterns are replicated, except those matching the exclude patterns. (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-replication_id"><code>replication_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Partially updates the topic patterns, sync settings or state of the flow. The source and target integrations cannot be changed. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-replication_id"><code>replication_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the replication flow and stops the replication. (Beta version)</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-replicationId"><code>replicationId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-emitHeartbeats"><code>emitHeartbeats</code></a>, <a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-replicationPolicyClass"><code>replicationPolicyClass</code></a>, <a href="#parameter-syncGroupOffsetsEnabled"><code>syncGroupOffsetsEnabled</code></a>, <a href="#parameter-syncInterval"><code>syncInterval</code></a>, <a href="#parameter-topicExcludeList"><code>topicExcludeList</code></a>, <a href="#parameter-topicIncludeList"><code>topicIncludeList</code></a></td>
    <td></td>
    <td>Updates the topic patterns, sync settings and state of the flow. Every field is required. The source and target integrations cannot be changed. (Beta version)</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-replicationId">
    <td><CopyableCode code="replicationId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Replication ID</td>
</tr>
<tr id="parameter-replication_id">
    <td><CopyableCode code="replication_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Replication ID (wire: replicationId)</td>
</tr>
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the source and target integrations of the flow, its topic patterns and its sync settings. (Beta version)

```sql
SELECT
id,
source_integration_id,
target_integration_id,
checksum,
created_at,
emit_heartbeats,
enabled,
replication_policy_class,
sync_group_offsets_enabled,
sync_interval,
topic_exclude_list,
topic_include_list,
updated_at
FROM ovh.public_cloud_analytics.kafka_mirror_maker_replications
WHERE replication_id = '{{ replication_id }}' -- required
AND service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the replication flows of the service, with their source and target integrations and whether they are enabled. (Beta version)

```sql
SELECT
id,
source_integration_id,
target_integration_id,
checksum,
created_at,
emit_heartbeats,
enabled,
replication_policy_class,
sync_group_offsets_enabled,
sync_interval,
topic_exclude_list,
topic_include_list,
updated_at
FROM ovh.public_cloud_analytics.kafka_mirror_maker_replications
WHERE service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Creates a replication flow from a source integration to a target integration. Topics matching the include patterns are replicated, except those matching the exclude patterns. (Beta version)

```sql
INSERT INTO ovh.public_cloud_analytics.kafka_mirror_maker_replications (
emit_heartbeats,
enabled,
replication_policy_class,
source_integration_id,
sync_group_offsets_enabled,
sync_interval,
target_integration_id,
topic_exclude_list,
topic_include_list,
service_id,
project_id
)
SELECT 
{{ emit_heartbeats }},
{{ enabled }} /* required */,
'{{ replication_policy_class }}',
'{{ source_integration_id }}' /* required */,
{{ sync_group_offsets_enabled }},
{{ sync_interval }},
'{{ target_integration_id }}' /* required */,
'{{ topic_exclude_list }}',
'{{ topic_include_list }}',
'{{ service_id }}',
'{{ project_id }}'
RETURNING
id,
source_integration_id,
target_integration_id,
checksum,
created_at,
emit_heartbeats,
enabled,
replication_policy_class,
sync_group_offsets_enabled,
sync_interval,
topic_exclude_list,
topic_include_list,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_mirror_maker_replications
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the kafka_mirror_maker_replications resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the kafka_mirror_maker_replications resource.
    - name: emit_heartbeats
      value: {{ emit_heartbeats }}
      description: |
        Whether heartbeats are emitted on the replication flow
    - name: enabled
      value: {{ enabled }}
      description: |
        Whether this replication flow is enabled
    - name: replication_policy_class
      value: "{{ replication_policy_class }}"
      description: |
        Replication policy class used for this replication flow
      valid_values: ['org.apache.kafka.connect.mirror.DefaultReplicationPolicy', 'org.apache.kafka.connect.mirror.IdentityReplicationPolicy']
    - name: source_integration_id
      value: "{{ source_integration_id }}"
      description: |
        Identifier of the source integration
    - name: sync_group_offsets_enabled
      value: {{ sync_group_offsets_enabled }}
      description: |
        Whether to sync consumer group offsets
    - name: sync_interval
      value: {{ sync_interval }}
      description: |
        Sync interval in seconds
    - name: target_integration_id
      value: "{{ target_integration_id }}"
      description: |
        Identifier of the target integration
    - name: topic_exclude_list
      value:
        - "{{ topic_exclude_list }}"
      description: |
        Topic patterns to exclude from replication
    - name: topic_include_list
      value:
        - "{{ topic_include_list }}"
      description: |
        Topic patterns to include in replication
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

Partially updates the topic patterns, sync settings or state of the flow. The source and target integrations cannot be changed. (Beta version)

```sql
UPDATE ovh.public_cloud_analytics.kafka_mirror_maker_replications
SET 
emit_heartbeats = {{ emit_heartbeats }},
enabled = {{ enabled }},
replication_policy_class = '{{ replication_policy_class }}',
sync_group_offsets_enabled = {{ sync_group_offsets_enabled }},
sync_interval = {{ sync_interval }},
topic_exclude_list = '{{ topic_exclude_list }}',
topic_include_list = '{{ topic_include_list }}'
WHERE 
replication_id = '{{ replication_id }}' --required
AND service_id = '{{ service_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
source_integration_id,
target_integration_id,
checksum,
created_at,
emit_heartbeats,
enabled,
replication_policy_class,
sync_group_offsets_enabled,
sync_interval,
topic_exclude_list,
topic_include_list,
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

Deletes the replication flow and stops the replication. (Beta version)

```sql
DELETE FROM ovh.public_cloud_analytics.kafka_mirror_maker_replications
WHERE replication_id = '{{ replication_id }}' --required
AND service_id = '{{ service_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="replace"
    values={[
        { label: 'replace', value: 'replace' }
    ]}
>
<TabItem value="replace">

Updates the topic patterns, sync settings and state of the flow. Every field is required. The source and target integrations cannot be changed. (Beta version)

```sql
EXEC ovh.public_cloud_analytics.kafka_mirror_maker_replications.replace 
@replicationId='{{ replicationId }}' --required, 
@serviceId='{{ serviceId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"emitHeartbeats": {{ emitHeartbeats }}, 
"enabled": {{ enabled }}, 
"replicationPolicyClass": "{{ replicationPolicyClass }}", 
"syncGroupOffsetsEnabled": {{ syncGroupOffsetsEnabled }}, 
"syncInterval": {{ syncInterval }}, 
"topicExcludeList": "{{ topicExcludeList }}", 
"topicIncludeList": "{{ topicIncludeList }}"
}'
;
```
</TabItem>
</Tabs>
