--- 
title: key_manager_container_consumers
hide_title: false
hide_table_of_contents: false
keywords:
  - key_manager_container_consumers
  - public_cloud
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

Creates, updates, deletes, gets or lists a <code>key_manager_container_consumers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_manager_container_consumers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.key_manager_container_consumers" /></td></tr>
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
    <td><code>string</code></td>
    <td>Computed consumer identifier</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>UUID of the resource consuming the container (wire: resourceId)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Type of the resource consuming the container (IMAGE, INSTANCE, LOADBALANCER) (wire: resourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>OpenStack service type of the consumer (COMPUTE, IMAGE, LOADBALANCER, NETWORK)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A consumer registered for a Key Manager container

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
    <td><code>string</code></td>
    <td>Computed consumer identifier</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>UUID of the resource consuming the container (wire: resourceId)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Type of the resource consuming the container (IMAGE, INSTANCE, LOADBALANCER) (wire: resourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>OpenStack service type of the consumer (COMPUTE, IMAGE, LOADBALANCER, NETWORK)</td>
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
    <td><a href="#parameter-consumer_id"><code>consumer_id</code></a>, <a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns one resource registered as using the container, with its type and service. Relies on the OpenStack Barbican component.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the resources registered as using the container: instances, images or load balancers. Relies on the OpenStack Barbican component.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Records that an instance, an image or a load balancer uses the container. Relies on the OpenStack Barbican component.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-consumer_id"><code>consumer_id</code></a>, <a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Removes the consumer registration. The resource itself is not deleted. Relies on the OpenStack Barbican component.</td>
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
<tr id="parameter-consumer_id">
    <td><CopyableCode code="consumer_id" /></td>
    <td><code>string</code></td>
    <td>Consumer ID (wire: consumerId)</td>
</tr>
<tr id="parameter-container_id">
    <td><CopyableCode code="container_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Container ID (wire: containerId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Returns one resource registered as using the container, with its type and service. Relies on the OpenStack Barbican component.

```sql
SELECT
id,
resource_id,
resource_type,
service
FROM ovh.public_cloud.key_manager_container_consumers
WHERE consumer_id = '{{ consumer_id }}' -- required
AND container_id = '{{ container_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the resources registered as using the container: instances, images or load balancers. Relies on the OpenStack Barbican component.

```sql
SELECT
id,
resource_id,
resource_type,
service
FROM ovh.public_cloud.key_manager_container_consumers
WHERE container_id = '{{ container_id }}' -- required
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

Records that an instance, an image or a load balancer uses the container. Relies on the OpenStack Barbican component.

```sql
INSERT INTO ovh.public_cloud.key_manager_container_consumers (
resource_id,
resource_type,
service,
container_id,
project_id
)
SELECT 
'{{ resource_id }}' /* required */,
'{{ resource_type }}' /* required */,
'{{ service }}' /* required */,
'{{ container_id }}',
'{{ project_id }}'
RETURNING
id,
resource_id,
resource_type,
service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: key_manager_container_consumers
  props:
    - name: container_id
      value: "{{ container_id }}"
      description: Required parameter for the key_manager_container_consumers resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the key_manager_container_consumers resource.
    - name: resource_id
      value: "{{ resource_id }}"
      description: |
        UUID of the resource consuming the container
    - name: resource_type
      value: "{{ resource_type }}"
      description: |
        Type of the resource consuming the container
      valid_values: ['IMAGE', 'INSTANCE', 'LOADBALANCER']
    - name: service
      value: "{{ service }}"
      description: |
        OpenStack service type of the consumer
      valid_values: ['COMPUTE', 'IMAGE', 'LOADBALANCER', 'NETWORK']
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

Removes the consumer registration. The resource itself is not deleted. Relies on the OpenStack Barbican component.

```sql
DELETE FROM ovh.public_cloud.key_manager_container_consumers
WHERE consumer_id = '{{ consumer_id }}' --required
AND container_id = '{{ container_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
