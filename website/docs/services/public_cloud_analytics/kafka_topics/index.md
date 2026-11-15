--- 
title: kafka_topics
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_topics
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

Creates, updates, deletes, gets or lists a <code>kafka_topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_analytics.kafka_topics" /></td></tr>
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
    <td>Unique identifier of the topic</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Kafka topic</td>
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
    <td><CopyableCode code="minimum_in_sync_replicas" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of in-sync replicas required before a write is acknowledged (wire: minimumInSyncReplicas)</td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>integer</code></td>
    <td>Number of partitions for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>integer</code></td>
    <td>Replication factor for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="retention_bytes" /></td>
    <td><code>integer</code></td>
    <td>Maximum size in bytes retained per partition. -1 means unlimited. (wire: retentionBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_hours" /></td>
    <td><code>integer</code></td>
    <td>Maximum time in hours that messages are retained. -1 means unlimited. (wire: retentionHours)</td>
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

A Kafka topic on a managed Kafka service

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
    <td>Unique identifier of the topic</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Kafka topic</td>
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
    <td><CopyableCode code="minimum_in_sync_replicas" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of in-sync replicas required before a write is acknowledged (wire: minimumInSyncReplicas)</td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>integer</code></td>
    <td>Number of partitions for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>integer</code></td>
    <td>Replication factor for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="retention_bytes" /></td>
    <td><code>integer</code></td>
    <td>Maximum size in bytes retained per partition. -1 means unlimited. (wire: retentionBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_hours" /></td>
    <td><code>integer</code></td>
    <td>Maximum time in hours that messages are retained. -1 means unlimited. (wire: retentionHours)</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the partitions, replication factor, minimum in-sync replicas and retention settings of the topic. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the topics of the service with their partitions, replication and retention settings. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a topic. By default it has 1 partition, a replication factor of 1 and a retention of 168 hours (7 days). The replication factor must not exceed the number of brokers. (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Partially updates the partitions, replication, minimum in-sync replicas or retention of the topic. The number of partitions can only be increased. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Permanently deletes the topic and its messages. (Beta version)</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-topicId"><code>topicId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-minimumInSyncReplicas"><code>minimumInSyncReplicas</code></a>, <a href="#parameter-partitions"><code>partitions</code></a>, <a href="#parameter-replication"><code>replication</code></a>, <a href="#parameter-retentionBytes"><code>retentionBytes</code></a>, <a href="#parameter-retentionHours"><code>retentionHours</code></a></td>
    <td></td>
    <td>Updates the partitions, replication, minimum in-sync replicas and retention of the topic. Every field is required. The number of partitions can only be increased. (Beta version)</td>
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
<tr id="parameter-topicId">
    <td><CopyableCode code="topicId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Topic ID</td>
</tr>
<tr id="parameter-topic_id">
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Topic ID (wire: topicId)</td>
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

Returns the partitions, replication factor, minimum in-sync replicas and retention settings of the topic. (Beta version)

```sql
SELECT
id,
name,
checksum,
created_at,
minimum_in_sync_replicas,
partitions,
replication,
retention_bytes,
retention_hours,
updated_at
FROM ovh.public_cloud_analytics.kafka_topics
WHERE service_id = '{{ service_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the topics of the service with their partitions, replication and retention settings. (Beta version)

```sql
SELECT
id,
name,
checksum,
created_at,
minimum_in_sync_replicas,
partitions,
replication,
retention_bytes,
retention_hours,
updated_at
FROM ovh.public_cloud_analytics.kafka_topics
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

Creates a topic. By default it has 1 partition, a replication factor of 1 and a retention of 168 hours (7 days). The replication factor must not exceed the number of brokers. (Beta version)

```sql
INSERT INTO ovh.public_cloud_analytics.kafka_topics (
minimum_in_sync_replicas,
name,
partitions,
replication,
retention_bytes,
retention_hours,
service_id,
project_id
)
SELECT 
{{ minimum_in_sync_replicas }},
'{{ name }}' /* required */,
{{ partitions }},
{{ replication }},
{{ retention_bytes }},
{{ retention_hours }},
'{{ service_id }}',
'{{ project_id }}'
RETURNING
id,
name,
checksum,
created_at,
minimum_in_sync_replicas,
partitions,
replication,
retention_bytes,
retention_hours,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_topics
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the kafka_topics resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the kafka_topics resource.
    - name: minimum_in_sync_replicas
      value: {{ minimum_in_sync_replicas }}
      description: |
        Minimum number of in-sync replicas. Defaults to 1 when null.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the Kafka topic
    - name: partitions
      value: {{ partitions }}
      description: |
        Number of partitions. Defaults to 1 when null.
    - name: replication
      value: {{ replication }}
      description: |
        Replication factor. Must not exceed the number of brokers. Defaults to 1 when null.
    - name: retention_bytes
      value: {{ retention_bytes }}
      description: |
        Maximum size in bytes retained per partition. -1 means unlimited. Defaults to -1 when null.
    - name: retention_hours
      value: {{ retention_hours }}
      description: |
        Maximum time in hours that messages are retained. -1 means unlimited. Defaults to 168 (7 days) when null.
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

Partially updates the partitions, replication, minimum in-sync replicas or retention of the topic. The number of partitions can only be increased. (Beta version)

```sql
UPDATE ovh.public_cloud_analytics.kafka_topics
SET 
minimum_in_sync_replicas = {{ minimum_in_sync_replicas }},
partitions = {{ partitions }},
replication = {{ replication }},
retention_bytes = {{ retention_bytes }},
retention_hours = {{ retention_hours }}
WHERE 
service_id = '{{ service_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
checksum,
created_at,
minimum_in_sync_replicas,
partitions,
replication,
retention_bytes,
retention_hours,
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

Permanently deletes the topic and its messages. (Beta version)

```sql
DELETE FROM ovh.public_cloud_analytics.kafka_topics
WHERE service_id = '{{ service_id }}' --required
AND topic_id = '{{ topic_id }}' --required
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

Updates the partitions, replication, minimum in-sync replicas and retention of the topic. Every field is required. The number of partitions can only be increased. (Beta version)

```sql
EXEC ovh.public_cloud_analytics.kafka_topics.replace 
@serviceId='{{ serviceId }}' --required, 
@topicId='{{ topicId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"minimumInSyncReplicas": {{ minimumInSyncReplicas }}, 
"partitions": {{ partitions }}, 
"replication": {{ replication }}, 
"retentionBytes": {{ retentionBytes }}, 
"retentionHours": {{ retentionHours }}
}'
;
```
</TabItem>
</Tabs>
