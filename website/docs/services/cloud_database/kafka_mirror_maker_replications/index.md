--- 
title: kafka_mirror_maker_replications
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_mirror_maker_replications
  - cloud_database
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_database.kafka_mirror_maker_replications" /></td></tr>
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
    <td>Service ID</td>
</tr>
<tr>
    <td><CopyableCode code="emit_heartbeats" /></td>
    <td><code>boolean</code></td>
    <td>Defines whether heartbeats are emitted (wire: emitHeartbeats)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Defines whether the replication is actived</td>
</tr>
<tr>
    <td><CopyableCode code="replication_policy_class" /></td>
    <td><code>string</code></td>
    <td>ReplicationPolicyClass used for the replication (org.apache.kafka.connect.mirror.DefaultReplicationPolicy, org.apache.kafka.connect.mirror.IdentityReplicationPolicy) (wire: replicationPolicyClass)</td>
</tr>
<tr>
    <td><CopyableCode code="source_integration" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the integration source (wire: sourceIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_group_offsets" /></td>
    <td><code>boolean</code></td>
    <td>Defines whether the group offsets must be sync (wire: syncGroupOffsets)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_interval" /></td>
    <td><code>integer</code></td>
    <td>Defines the interval in second between 2 sync (wire: syncInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="target_integration" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the integration target (wire: targetIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="topic_exclude_list" /></td>
    <td><code>array</code></td>
    <td>Patterns of the topics to exclude from the replication (wire: topicExcludeList)</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>Patterns of the topics to replicate</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Cloud database service replication definition

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
    <td>Service ID</td>
</tr>
<tr>
    <td><CopyableCode code="emit_heartbeats" /></td>
    <td><code>boolean</code></td>
    <td>Defines whether heartbeats are emitted (wire: emitHeartbeats)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Defines whether the replication is actived</td>
</tr>
<tr>
    <td><CopyableCode code="replication_policy_class" /></td>
    <td><code>string</code></td>
    <td>ReplicationPolicyClass used for the replication (org.apache.kafka.connect.mirror.DefaultReplicationPolicy, org.apache.kafka.connect.mirror.IdentityReplicationPolicy) (wire: replicationPolicyClass)</td>
</tr>
<tr>
    <td><CopyableCode code="source_integration" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the integration source (wire: sourceIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_group_offsets" /></td>
    <td><code>boolean</code></td>
    <td>Defines whether the group offsets must be sync (wire: syncGroupOffsets)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_interval" /></td>
    <td><code>integer</code></td>
    <td>Defines the interval in second between 2 sync (wire: syncInterval)</td>
</tr>
<tr>
    <td><CopyableCode code="target_integration" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the integration target (wire: targetIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="topic_exclude_list" /></td>
    <td><code>array</code></td>
    <td>Patterns of the topics to exclude from the replication (wire: topicExcludeList)</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>Patterns of the topics to replicate</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-replication_id"><code>replication_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get kafkaMirrorMaker replication</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List replication of the kafkaMirrorMaker</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-source_integration"><code>source_integration</code></a>, <a href="#parameter-target_integration"><code>target_integration</code></a></td>
    <td></td>
    <td>Create a new replication</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-replication_id"><code>replication_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Updates a replication</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-replication_id"><code>replication_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an replication</td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID (wire: clusterId)</td>
</tr>
<tr id="parameter-replication_id">
    <td><CopyableCode code="replication_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Replication ID (wire: replicationId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get kafkaMirrorMaker replication

```sql
SELECT
id,
emit_heartbeats,
enabled,
replication_policy_class,
source_integration,
sync_group_offsets,
sync_interval,
target_integration,
topic_exclude_list,
topics
FROM ovh.cloud_database.kafka_mirror_maker_replications
WHERE cluster_id = '{{ cluster_id }}' -- required
AND replication_id = '{{ replication_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List replication of the kafkaMirrorMaker

```sql
SELECT
id,
emit_heartbeats,
enabled,
replication_policy_class,
source_integration,
sync_group_offsets,
sync_interval,
target_integration,
topic_exclude_list,
topics
FROM ovh.cloud_database.kafka_mirror_maker_replications
WHERE cluster_id = '{{ cluster_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a new replication

```sql
INSERT INTO ovh.cloud_database.kafka_mirror_maker_replications (
emit_heartbeats,
enabled,
replication_policy_class,
source_integration,
sync_group_offsets,
sync_interval,
target_integration,
topic_exclude_list,
topics,
cluster_id,
service_name
)
SELECT 
{{ emit_heartbeats }},
{{ enabled }} /* required */,
'{{ replication_policy_class }}',
'{{ source_integration }}' /* required */,
{{ sync_group_offsets }},
{{ sync_interval }},
'{{ target_integration }}' /* required */,
'{{ topic_exclude_list }}',
'{{ topics }}',
'{{ cluster_id }}',
'{{ service_name }}'
RETURNING
id,
emit_heartbeats,
enabled,
replication_policy_class,
source_integration,
sync_group_offsets,
sync_interval,
target_integration,
topic_exclude_list,
topics
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_mirror_maker_replications
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the kafka_mirror_maker_replications resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the kafka_mirror_maker_replications resource.
    - name: emit_heartbeats
      value: {{ emit_heartbeats }}
      description: |
        Defines whether heartbeats are emitted
    - name: enabled
      value: {{ enabled }}
      description: |
        Defines whether the replication is actived
    - name: replication_policy_class
      value: "{{ replication_policy_class }}"
      description: |
        ReplicationPolicyClass used for the replication
      valid_values: ['org.apache.kafka.connect.mirror.DefaultReplicationPolicy', 'org.apache.kafka.connect.mirror.IdentityReplicationPolicy']
    - name: source_integration
      value: "{{ source_integration }}"
      description: |
        ID of the integration source
    - name: sync_group_offsets
      value: {{ sync_group_offsets }}
      description: |
        Defines whether the group offsets must be sync
    - name: sync_interval
      value: {{ sync_interval }}
      description: |
        Defines the interval in second between 2 sync
    - name: target_integration
      value: "{{ target_integration }}"
      description: |
        ID of the integration target
    - name: topic_exclude_list
      value:
        - "{{ topic_exclude_list }}"
      description: |
        Patterns of the topics to exclude from the replication
    - name: topics
      value:
        - "{{ topics }}"
      description: |
        Patterns of the topics to replicate
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

Updates a replication

```sql
UPDATE ovh.cloud_database.kafka_mirror_maker_replications
SET 
emit_heartbeats = {{ emit_heartbeats }},
enabled = {{ enabled }},
replication_policy_class = '{{ replication_policy_class }}',
sync_group_offsets = {{ sync_group_offsets }},
sync_interval = {{ sync_interval }},
topic_exclude_list = '{{ topic_exclude_list }}',
topics = '{{ topics }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND replication_id = '{{ replication_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND enabled = {{ enabled }} --required
RETURNING
id,
emit_heartbeats,
enabled,
replication_policy_class,
source_integration,
sync_group_offsets,
sync_interval,
target_integration,
topic_exclude_list,
topics;
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

Delete an replication

```sql
DELETE FROM ovh.cloud_database.kafka_mirror_maker_replications
WHERE cluster_id = '{{ cluster_id }}' --required
AND replication_id = '{{ replication_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
