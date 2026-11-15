--- 
title: kafka_mirror_maker_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_mirror_maker_integrations
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

Creates, updates, deletes, gets or lists a <code>kafka_mirror_maker_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_mirror_maker_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_database.kafka_mirror_maker_integrations" /></td></tr>
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
    <td><CopyableCode code="destination_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the destination service (wire: destinationServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the source service (wire: sourceServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Parameters for the integration</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the integration (READY)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the integration (grafanaDashboard, grafanaDatasource, kafkaConnect, kafkaLogs, kafkaMirrorMaker, opensearchLogs, postgresqlMetrics)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Cloud database service integration definition

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
    <td><CopyableCode code="destination_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the destination service (wire: destinationServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the source service (wire: sourceServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Parameters for the integration</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the integration (READY)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the integration (grafanaDashboard, grafanaDatasource, kafkaConnect, kafkaLogs, kafkaMirrorMaker, opensearchLogs, postgresqlMetrics)</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an integration</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List integrations</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-destination_service_id"><code>destination_service_id</code></a>, <a href="#parameter-source_service_id"><code>source_service_id</code></a></td>
    <td></td>
    <td>Create a new integration</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an integration</td>
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
<tr id="parameter-integration_id">
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Integration ID (wire: integrationId)</td>
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

Get an integration

```sql
SELECT
id,
destination_service_id,
source_service_id,
parameters,
status,
type
FROM ovh.cloud_database.kafka_mirror_maker_integrations
WHERE cluster_id = '{{ cluster_id }}' -- required
AND integration_id = '{{ integration_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List integrations

```sql
SELECT
id,
destination_service_id,
source_service_id,
parameters,
status,
type
FROM ovh.cloud_database.kafka_mirror_maker_integrations
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

Create a new integration

```sql
INSERT INTO ovh.cloud_database.kafka_mirror_maker_integrations (
destination_service_id,
parameters,
source_service_id,
type,
cluster_id,
service_name
)
SELECT 
'{{ destination_service_id }}' /* required */,
'{{ parameters }}',
'{{ source_service_id }}' /* required */,
'{{ type }}',
'{{ cluster_id }}',
'{{ service_name }}'
RETURNING
id,
destination_service_id,
source_service_id,
parameters,
status,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_mirror_maker_integrations
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the kafka_mirror_maker_integrations resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the kafka_mirror_maker_integrations resource.
    - name: destination_service_id
      value: "{{ destination_service_id }}"
      description: |
        ID of the destination service
    - name: parameters
      value: "{{ parameters }}"
      description: |
        Parameters for the integration
    - name: source_service_id
      value: "{{ source_service_id }}"
      description: |
        ID of the source service
    - name: type
      value: "{{ type }}"
      description: |
        Type of the integration
      valid_values: ['grafanaDashboard', 'grafanaDatasource', 'kafkaConnect', 'kafkaLogs', 'kafkaMirrorMaker', 'opensearchLogs', 'postgresqlMetrics']
`}</CodeBlock>

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

Delete an integration

```sql
DELETE FROM ovh.cloud_database.kafka_mirror_maker_integrations
WHERE cluster_id = '{{ cluster_id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
