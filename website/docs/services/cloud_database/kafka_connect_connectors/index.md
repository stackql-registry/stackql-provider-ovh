--- 
title: kafka_connect_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_connect_connectors
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

Creates, updates, deletes, gets or lists a <code>kafka_connect_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_connect_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_database.kafka_connect_connectors" /></td></tr>
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
    <td>Connector ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the connector</td>
</tr>
<tr>
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Connector capability ID (wire: connectorId)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration of the connector</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the connector (CREATING, FAILED, PAUSED, RUNNING, UNASSIGNED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

KafkaConnect connector definition

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
    <td>Connector ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the connector</td>
</tr>
<tr>
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Connector capability ID (wire: connectorId)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration of the connector</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the connector (CREATING, FAILED, PAUSED, RUNNING, UNASSIGNED)</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get connector</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List the connectors</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-configuration"><code>configuration</code></a>, <a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a new connector</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Update a connector</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a connector</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-connectorId"><code>connectorId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Pause the kafka connector execution</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-connectorId"><code>connectorId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Restart the kafka connector execution</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-connectorId"><code>connectorId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Resume the kafka connector execution</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID (wire: clusterId)</td>
</tr>
<tr id="parameter-connectorId">
    <td><CopyableCode code="connectorId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Connector ID</td>
</tr>
<tr id="parameter-connector_id">
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Connector ID (wire: connectorId)</td>
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

Get connector

```sql
SELECT
id,
name,
connector_id,
configuration,
status
FROM ovh.cloud_database.kafka_connect_connectors
WHERE cluster_id = '{{ cluster_id }}' -- required
AND connector_id = '{{ connector_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List the connectors

```sql
SELECT
id,
name,
connector_id,
configuration,
status
FROM ovh.cloud_database.kafka_connect_connectors
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

Create a new connector

```sql
INSERT INTO ovh.cloud_database.kafka_connect_connectors (
configuration,
connector_id,
name,
cluster_id,
service_name
)
SELECT 
'{{ configuration }}' /* required */,
'{{ connector_id }}' /* required */,
'{{ name }}' /* required */,
'{{ cluster_id }}',
'{{ service_name }}'
RETURNING
id,
name,
connector_id,
configuration,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_connect_connectors
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the kafka_connect_connectors resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the kafka_connect_connectors resource.
    - name: configuration
      value: "{{ configuration }}"
      description: |
        Configuration of the connector
    - name: connector_id
      value: "{{ connector_id }}"
      description: |
        Connector capability ID
    - name: name
      value: "{{ name }}"
      description: |
        Name of the connector
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

Update a connector

```sql
UPDATE ovh.cloud_database.kafka_connect_connectors
SET 
configuration = '{{ configuration }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND connector_id = '{{ connector_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND configuration = '{{ configuration }}' --required
RETURNING
id,
name,
connector_id,
configuration,
status;
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

Delete a connector

```sql
DELETE FROM ovh.cloud_database.kafka_connect_connectors
WHERE cluster_id = '{{ cluster_id }}' --required
AND connector_id = '{{ connector_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="pause"
    values={[
        { label: 'pause', value: 'pause' },
        { label: 'restart', value: 'restart' },
        { label: 'resume', value: 'resume' }
    ]}
>
<TabItem value="pause">

Pause the kafka connector execution

```sql
EXEC ovh.cloud_database.kafka_connect_connectors.pause 
@clusterId='{{ clusterId }}' --required, 
@connectorId='{{ connectorId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="restart">

Restart the kafka connector execution

```sql
EXEC ovh.cloud_database.kafka_connect_connectors.restart 
@clusterId='{{ clusterId }}' --required, 
@connectorId='{{ connectorId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="resume">

Resume the kafka connector execution

```sql
EXEC ovh.cloud_database.kafka_connect_connectors.resume 
@clusterId='{{ clusterId }}' --required, 
@connectorId='{{ connectorId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
