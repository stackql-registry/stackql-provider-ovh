--- 
title: valkey_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - valkey_integrations
  - public_cloud_database
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

Creates, updates, deletes, gets or lists a <code>valkey_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="valkey_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_database.valkey_integrations" /></td></tr>
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
    <td>Unique identifier of the integration</td>
</tr>
<tr>
    <td><CopyableCode code="destination_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the destination service. Null for external integrations. (wire: destinationServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the source service (wire: sourceServiceId)</td>
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
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Engine-specific configuration parameters for the integration</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current readiness status of the integration (CREATING, DELETING, ERROR, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the integration (GRAFANA_DASHBOARD, GRAFANA_DATASOURCE, KAFKA_CONNECT, KAFKA_LOGS, KAFKA_MIRROR_MAKER, OPENSEARCH_LOGS, POSTGRESQL_METRICS, PROMETHEUS, RSYSLOG)</td>
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

An integration linking two managed database services

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
    <td>Unique identifier of the integration</td>
</tr>
<tr>
    <td><CopyableCode code="destination_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the destination service. Null for external integrations. (wire: destinationServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the source service (wire: sourceServiceId)</td>
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
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Engine-specific configuration parameters for the integration</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current readiness status of the integration (CREATING, DELETING, ERROR, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the integration (GRAFANA_DASHBOARD, GRAFANA_DATASOURCE, KAFKA_CONNECT, KAFKA_LOGS, KAFKA_MIRROR_MAKER, OPENSEARCH_LOGS, POSTGRESQL_METRICS, PROMETHEUS, RSYSLOG)</td>
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
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the integration type, its source and destination services and its status. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the integrations of the service with other services. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-destination_service_id"><code>destination_service_id</code></a>, <a href="#parameter-source_service_id"><code>source_service_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Integrates the service with another database or analytics service. sourceServiceId must be the identifier of this service. Compatible engine pairs are listed on the capabilities endpoint. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the integration. (Beta version)</td>
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
<tr id="parameter-integration_id">
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Integration ID (wire: integrationId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Returns the integration type, its source and destination services and its status. (Beta version)

```sql
SELECT
id,
destination_service_id,
source_service_id,
checksum,
created_at,
parameters,
status,
type,
updated_at
FROM ovh.public_cloud_database.valkey_integrations
WHERE integration_id = '{{ integration_id }}' -- required
AND service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the integrations of the service with other services. (Beta version)

```sql
SELECT
id,
destination_service_id,
source_service_id,
checksum,
created_at,
parameters,
status,
type,
updated_at
FROM ovh.public_cloud_database.valkey_integrations
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

Integrates the service with another database or analytics service. sourceServiceId must be the identifier of this service. Compatible engine pairs are listed on the capabilities endpoint. (Beta version)

```sql
INSERT INTO ovh.public_cloud_database.valkey_integrations (
destination_service_id,
parameters,
source_service_id,
type,
service_id,
project_id
)
SELECT 
'{{ destination_service_id }}' /* required */,
'{{ parameters }}',
'{{ source_service_id }}' /* required */,
'{{ type }}' /* required */,
'{{ service_id }}',
'{{ project_id }}'
RETURNING
id,
destination_service_id,
source_service_id,
checksum,
created_at,
parameters,
status,
type,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: valkey_integrations
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the valkey_integrations resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the valkey_integrations resource.
    - name: destination_service_id
      value: "{{ destination_service_id }}"
      description: |
        Identifier of the destination service. Compatible source and destination engine pairs can be retrieved from the capabilities endpoint.
    - name: parameters
      value: "{{ parameters }}"
      description: |
        Engine-specific configuration parameters for the integration
    - name: source_service_id
      value: "{{ source_service_id }}"
      description: |
        Identifier of the source service
    - name: type
      value: "{{ type }}"
      description: |
        Type of the integration
      valid_values: ['GRAFANA_DASHBOARD', 'GRAFANA_DATASOURCE', 'KAFKA_CONNECT', 'KAFKA_LOGS', 'KAFKA_MIRROR_MAKER', 'OPENSEARCH_LOGS', 'POSTGRESQL_METRICS', 'PROMETHEUS', 'RSYSLOG']
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

Deletes the integration. (Beta version)

```sql
DELETE FROM ovh.public_cloud_database.valkey_integrations
WHERE integration_id = '{{ integration_id }}' --required
AND service_id = '{{ service_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
