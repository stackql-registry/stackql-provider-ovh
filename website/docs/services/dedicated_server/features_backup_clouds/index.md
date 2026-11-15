--- 
title: features_backup_clouds
hide_title: false
hide_table_of_contents: false
keywords:
  - features_backup_clouds
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>features_backup_clouds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="features_backup_clouds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.features_backup_clouds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="agreements" /></td>
    <td><code>array</code></td>
    <td>Agreement ids waiting for validation</td>
</tr>
<tr>
    <td><CopyableCode code="archive" /></td>
    <td><code>object</code></td>
    <td>Archive space info.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Status of the container.</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Storage space info.</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the cloud backup. Returns the cloud backup of the server: its storage and archive containers, its status and the agreements waiting for validation. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create the cloud backup. Creates the cloud backup of the server, with storage and archive containers in a cloud project. Set cloudProjectId to use an existing project; otherwise a project is created, described by projectDescription. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deactivate the cloud backup. Deactivates the cloud backup of the server. The container data is not deleted. (Beta version)</td>
</tr>
<tr>
    <td><a href="#password"><CopyableCode code="password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Regenerate cloud backup passwords. Regenerates the cloud backup passwords and returns them: the Swift and SFTP passwords of the storage and archive containers. (Beta version)</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the cloud backup. Returns the cloud backup of the server: its storage and archive containers, its status and the agreements waiting for validation. (Beta version)

```sql
SELECT
agreements,
archive,
status,
storage
FROM ovh.dedicated_server.features_backup_clouds
WHERE service_name = '{{ service_name }}' -- required
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

Create the cloud backup. Creates the cloud backup of the server, with storage and archive containers in a cloud project. Set cloudProjectId to use an existing project; otherwise a project is created, described by projectDescription. (Beta version)

```sql
INSERT INTO ovh.dedicated_server.features_backup_clouds (
cloud_project_id,
project_description,
service_name
)
SELECT 
'{{ cloud_project_id }}',
'{{ project_description }}',
'{{ service_name }}'
RETURNING
agreements,
archive,
status,
storage
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: features_backup_clouds
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the features_backup_clouds resource.
    - name: cloud_project_id
      value: "{{ cloud_project_id }}"
      description: |
        cloud project id
    - name: project_description
      value: "{{ project_description }}"
      description: |
        Project description of the project to be created (ignored when an existing project is already specified)
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

Deactivate the cloud backup. Deactivates the cloud backup of the server. The container data is not deleted. (Beta version)

```sql
DELETE FROM ovh.dedicated_server.features_backup_clouds
WHERE service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="password"
    values={[
        { label: 'password', value: 'password' }
    ]}
>
<TabItem value="password">

Regenerate cloud backup passwords. Regenerates the cloud backup passwords and returns them: the Swift and SFTP passwords of the storage and archive containers. (Beta version)

```sql
EXEC ovh.dedicated_server.features_backup_clouds.password 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
