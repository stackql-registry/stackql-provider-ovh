--- 
title: storages
hide_title: false
hide_table_of_contents: false
keywords:
  - storages
  - cloud_storage
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

Creates, updates, deletes, gets or lists a <code>storages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.storages" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Container name</td>
</tr>
<tr>
    <td><CopyableCode code="archive" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is an archive container or not</td>
</tr>
<tr>
    <td><CopyableCode code="container_type" /></td>
    <td><code>string</code></td>
    <td>Container type (private, public, static) (wire: containerType)</td>
</tr>
<tr>
    <td><CopyableCode code="cors" /></td>
    <td><code>array</code></td>
    <td>Origins allowed to make Cross Origin Requests</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>array</code></td>
    <td>Objects stored in container</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>Public container (DEPRECATED: see containerType)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Container region</td>
</tr>
<tr>
    <td><CopyableCode code="static_url" /></td>
    <td><code>string</code></td>
    <td>Container static URL (wire: staticUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="stored_bytes" /></td>
    <td><code>integer</code></td>
    <td>Total bytes stored (wire: storedBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="stored_objects" /></td>
    <td><code>integer</code></td>
    <td>Total objects stored (wire: storedObjects)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Container

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
    <td>Storage id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Storage name</td>
</tr>
<tr>
    <td><CopyableCode code="archive" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is an archive container or not</td>
</tr>
<tr>
    <td><CopyableCode code="container_type" /></td>
    <td><code>string</code></td>
    <td>Container type (private, public, static) (wire: containerType)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="stored_bytes" /></td>
    <td><code>integer</code></td>
    <td>Total bytes stored (wire: storedBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="stored_objects" /></td>
    <td><code>integer</code></td>
    <td>Total objects stored (wire: storedObjects)</td>
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
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-no_objects"><code>no_objects</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>Get SWIFT storage container</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-include_type"><code>include_type</code></a></td>
    <td>Get SWIFT storage containers</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-archive"><code>archive</code></a>, <a href="#parameter-container_name"><code>container_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create SWIFT container</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update SWIFT storage container</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-container_id"><code>container_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-recursive"><code>recursive</code></a></td>
    <td>Delete SWIFT container</td>
</tr>
<tr>
    <td><a href="#access"><CopyableCode code="access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Access to SWIFT storage API</td>
</tr>
<tr>
    <td><a href="#delete_cors"><CopyableCode code="delete_cors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-containerId"><code>containerId</code></a>, <a href="#parameter-origin"><code>origin</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete CORS support on SWIFT container</td>
</tr>
<tr>
    <td><a href="#cors"><CopyableCode code="cors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-containerId"><code>containerId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-origin"><code>origin</code></a></td>
    <td></td>
    <td>Add CORS support on SWIFT container</td>
</tr>
<tr>
    <td><a href="#public_url"><CopyableCode code="public_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-containerId"><code>containerId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-expirationDate"><code>expirationDate</code></a>, <a href="#parameter-objectName"><code>objectName</code></a></td>
    <td></td>
    <td>Get a public temporary URL to access one of your SWIFT object</td>
</tr>
<tr>
    <td><a href="#static"><CopyableCode code="static" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-containerId"><code>containerId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deploy your SWIFT container files as a static web site</td>
</tr>
<tr>
    <td><a href="#user"><CopyableCode code="user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-containerId"><code>containerId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-right"><code>right</code></a></td>
    <td></td>
    <td>Create openstack user with only access to this SWIFT container</td>
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
<tr id="parameter-containerId">
    <td><CopyableCode code="containerId" /></td>
    <td><code>string</code></td>
    <td>Container ID</td>
</tr>
<tr id="parameter-container_id">
    <td><CopyableCode code="container_id" /></td>
    <td><code>string</code></td>
    <td>Container ID (wire: containerId)</td>
</tr>
<tr id="parameter-origin">
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>Delete this origin</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-include_type">
    <td><CopyableCode code="include_type" /></td>
    <td><code>boolean</code></td>
    <td>Include container type (wire: includeType)</td>
</tr>
<tr id="parameter-no_objects">
    <td><CopyableCode code="no_objects" /></td>
    <td><code>boolean</code></td>
    <td>Do not return container objects (wire: noObjects)</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Filter objects by name prefix</td>
</tr>
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>boolean</code></td>
    <td>Recursively delete objects and container</td>
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

Get SWIFT storage container

```sql
SELECT
name,
archive,
container_type,
cors,
objects,
public,
region,
static_url,
stored_bytes,
stored_objects
FROM ovh.cloud_storage.storages
WHERE container_id = '{{ container_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND no_objects = '{{ no_objects }}'
AND prefix = '{{ prefix }}'
;
```
</TabItem>
<TabItem value="list">

Get SWIFT storage containers

```sql
SELECT
id,
name,
archive,
container_type,
region,
stored_bytes,
stored_objects
FROM ovh.cloud_storage.storages
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND include_type = '{{ include_type }}'
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

Create SWIFT container

```sql
INSERT INTO ovh.cloud_storage.storages (
archive,
container_name,
region,
service_name
)
SELECT 
{{ archive }} /* required */,
'{{ container_name }}' /* required */,
'{{ region }}' /* required */,
'{{ service_name }}'
RETURNING
id,
name,
archive,
container_type,
region,
stored_bytes,
stored_objects
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: storages
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the storages resource.
    - name: archive
      value: {{ archive }}
      description: |
        Archive container flag
    - name: container_name
      value: "{{ container_name }}"
      description: |
        Container name
    - name: region
      value: "{{ region }}"
      description: |
        Region
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

Update SWIFT storage container

```sql
UPDATE ovh.cloud_storage.storages
SET 
container_type = '{{ container_type }}'
WHERE 
container_id = '{{ container_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set;
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

Delete SWIFT container

```sql
DELETE FROM ovh.cloud_storage.storages
WHERE container_id = '{{ container_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND recursive = '{{ recursive }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="access"
    values={[
        { label: 'access', value: 'access' },
        { label: 'delete_cors', value: 'delete_cors' },
        { label: 'cors', value: 'cors' },
        { label: 'public_url', value: 'public_url' },
        { label: 'static', value: 'static' },
        { label: 'user', value: 'user' }
    ]}
>
<TabItem value="access">

Access to SWIFT storage API

```sql
EXEC ovh.cloud_storage.storages.access 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="delete_cors">

Delete CORS support on SWIFT container

```sql
EXEC ovh.cloud_storage.storages.delete_cors 
@containerId='{{ containerId }}' --required, 
@origin='{{ origin }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="cors">

Add CORS support on SWIFT container

```sql
EXEC ovh.cloud_storage.storages.cors 
@containerId='{{ containerId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"origin": "{{ origin }}"
}'
;
```
</TabItem>
<TabItem value="public_url">

Get a public temporary URL to access one of your SWIFT object

```sql
EXEC ovh.cloud_storage.storages.public_url 
@containerId='{{ containerId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"expirationDate": "{{ expirationDate }}", 
"objectName": "{{ objectName }}"
}'
;
```
</TabItem>
<TabItem value="static">

Deploy your SWIFT container files as a static web site

```sql
EXEC ovh.cloud_storage.storages.static 
@containerId='{{ containerId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="user">

Create openstack user with only access to this SWIFT container

```sql
EXEC ovh.cloud_storage.storages.user 
@containerId='{{ containerId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"description": "{{ description }}", 
"right": "{{ right }}"
}'
;
```
</TabItem>
</Tabs>
