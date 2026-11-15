--- 
title: kafka_topics
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_topics
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

Creates, updates, deletes, gets or lists a <code>kafka_topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_database.kafka_topics" /></td></tr>
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
    <td>Topic ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the topic</td>
</tr>
<tr>
    <td><CopyableCode code="min_insync_replicas" /></td>
    <td><code>integer</code></td>
    <td>Minimum insync replica accepted for this topic (wire: minInsyncReplicas)</td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>integer</code></td>
    <td>Number of partitions for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>integer</code></td>
    <td>Number of replication for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="retention_bytes" /></td>
    <td><code>integer</code></td>
    <td>Number of bytes for the retention of the data for this topic (wire: retentionBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_hours" /></td>
    <td><code>integer</code></td>
    <td>Number of hours for the retention of the data for this topic (wire: retentionHours)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Cloud database kafka topic definition

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
    <td>Topic ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the topic</td>
</tr>
<tr>
    <td><CopyableCode code="min_insync_replicas" /></td>
    <td><code>integer</code></td>
    <td>Minimum insync replica accepted for this topic (wire: minInsyncReplicas)</td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>integer</code></td>
    <td>Number of partitions for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>integer</code></td>
    <td>Number of replication for this topic</td>
</tr>
<tr>
    <td><CopyableCode code="retention_bytes" /></td>
    <td><code>integer</code></td>
    <td>Number of bytes for the retention of the data for this topic (wire: retentionBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_hours" /></td>
    <td><code>integer</code></td>
    <td>Number of hours for the retention of the data for this topic (wire: retentionHours)</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get kafka topics</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List topics of the kafka</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a new topic on the kafka cluster</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the topic on the kafka cluster</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a kafka topic</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-topic_id">
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Topic ID (wire: topicId)</td>
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

Get kafka topics

```sql
SELECT
id,
name,
min_insync_replicas,
partitions,
replication,
retention_bytes,
retention_hours
FROM ovh.cloud_database.kafka_topics
WHERE cluster_id = '{{ cluster_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List topics of the kafka

```sql
SELECT
id,
name,
min_insync_replicas,
partitions,
replication,
retention_bytes,
retention_hours
FROM ovh.cloud_database.kafka_topics
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

Create a new topic on the kafka cluster

```sql
INSERT INTO ovh.cloud_database.kafka_topics (
min_insync_replicas,
name,
partitions,
replication,
retention_bytes,
retention_hours,
cluster_id,
service_name
)
SELECT 
{{ min_insync_replicas }},
'{{ name }}' /* required */,
{{ partitions }},
{{ replication }},
{{ retention_bytes }},
{{ retention_hours }},
'{{ cluster_id }}',
'{{ service_name }}'
RETURNING
id,
name,
min_insync_replicas,
partitions,
replication,
retention_bytes,
retention_hours
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_topics
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the kafka_topics resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the kafka_topics resource.
    - name: min_insync_replicas
      value: {{ min_insync_replicas }}
      description: |
        Minimum insync replica accepted for this topic
    - name: name
      value: "{{ name }}"
      description: |
        Name of the topic
    - name: partitions
      value: {{ partitions }}
      description: |
        Number of partitions for this topic
    - name: replication
      value: {{ replication }}
      description: |
        Number of replication for this topic
    - name: retention_bytes
      value: {{ retention_bytes }}
      description: |
        Number of bytes for the retention of the data for this topic
    - name: retention_hours
      value: {{ retention_hours }}
      description: |
        Number of hours for the retention of the data for this topic
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

Updates the topic on the kafka cluster

```sql
UPDATE ovh.cloud_database.kafka_topics
SET 
min_insync_replicas = {{ min_insync_replicas }},
partitions = {{ partitions }},
replication = {{ replication }},
retention_bytes = {{ retention_bytes }},
retention_hours = {{ retention_hours }}
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
min_insync_replicas,
partitions,
replication,
retention_bytes,
retention_hours;
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

Delete a kafka topic

```sql
DELETE FROM ovh.cloud_database.kafka_topics
WHERE cluster_id = '{{ cluster_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
