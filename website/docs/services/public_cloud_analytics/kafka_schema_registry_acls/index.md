--- 
title: kafka_schema_registry_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_schema_registry_acls
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

Creates, updates, deletes, gets or lists a <code>kafka_schema_registry_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_schema_registry_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_analytics.kafka_schema_registry_acls" /></td></tr>
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
    <td>Unique identifier of the Schema Registry ACL entry</td>
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
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>Permission level granted by this ACL entry (READ, READ_WRITE, WRITE)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Schema Registry resource pattern this ACL entry applies to. Supports wildcards (*).</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last update to the resource (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Username this ACL entry applies to</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Schema Registry ACL entry on a managed Kafka service

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
    <td>Unique identifier of the Schema Registry ACL entry</td>
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
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>Permission level granted by this ACL entry (READ, READ_WRITE, WRITE)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Schema Registry resource pattern this ACL entry applies to. Supports wildcards (*).</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last update to the resource (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Username this ACL entry applies to</td>
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
    <td><a href="#parameter-schema_registry_acl_id"><code>schema_registry_acl_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the user, the resource pattern and the permission of the ACL entry. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the Schema Registry ACL entries of the service, each granting a user a permission on a resource pattern. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-permission"><code>permission</code></a>, <a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Grants a user a permission on the Schema Registry resources matching a pattern. Use * to match all subjects. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schema_registry_acl_id"><code>schema_registry_acl_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the ACL entry and revokes the permission it granted. (Beta version)</td>
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
<tr id="parameter-schema_registry_acl_id">
    <td><CopyableCode code="schema_registry_acl_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Schema registry acl ID (wire: schemaRegistryAclId)</td>
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

Returns the user, the resource pattern and the permission of the ACL entry. (Beta version)

```sql
SELECT
id,
checksum,
created_at,
permission,
resource,
updated_at,
username
FROM ovh.public_cloud_analytics.kafka_schema_registry_acls
WHERE schema_registry_acl_id = '{{ schema_registry_acl_id }}' -- required
AND service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the Schema Registry ACL entries of the service, each granting a user a permission on a resource pattern. (Beta version)

```sql
SELECT
id,
checksum,
created_at,
permission,
resource,
updated_at,
username
FROM ovh.public_cloud_analytics.kafka_schema_registry_acls
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

Grants a user a permission on the Schema Registry resources matching a pattern. Use * to match all subjects. (Beta version)

```sql
INSERT INTO ovh.public_cloud_analytics.kafka_schema_registry_acls (
permission,
resource,
username,
service_id,
project_id
)
SELECT 
'{{ permission }}' /* required */,
'{{ resource }}' /* required */,
'{{ username }}' /* required */,
'{{ service_id }}',
'{{ project_id }}'
RETURNING
id,
checksum,
created_at,
permission,
resource,
updated_at,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_schema_registry_acls
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the kafka_schema_registry_acls resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the kafka_schema_registry_acls resource.
    - name: permission
      value: "{{ permission }}"
      description: |
        Permission level to grant on the Schema Registry resource
      valid_values: ['READ', 'READ_WRITE', 'WRITE']
    - name: resource
      value: "{{ resource }}"
      description: |
        Schema Registry resource pattern this ACL applies to. Use * to match all subjects.
    - name: username
      value: "{{ username }}"
      description: |
        Username to grant access to
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

Deletes the ACL entry and revokes the permission it granted. (Beta version)

```sql
DELETE FROM ovh.public_cloud_analytics.kafka_schema_registry_acls
WHERE schema_registry_acl_id = '{{ schema_registry_acl_id }}' --required
AND service_id = '{{ service_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
