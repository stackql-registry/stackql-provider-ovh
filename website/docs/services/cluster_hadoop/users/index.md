--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - cluster_hadoop
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cluster_hadoop.users" /></td></tr>
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
    <td><CopyableCode code="cloudera_manager" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the User is allowed to access to the Cloudera Manager interface (wire: clouderaManager)</td>
</tr>
<tr>
    <td><CopyableCode code="http_frontend" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the User is allowed to access to the WebUI interfaces (wire: httpFrontend)</td>
</tr>
<tr>
    <td><CopyableCode code="hue" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the User is allowed to access to the Hue interface</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the User</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

User allowed to access interfaces on your cluster

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
    <td><CopyableCode code="cloudera_manager" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the User is allowed to access to the Cloudera Manager interface (wire: clouderaManager)</td>
</tr>
<tr>
    <td><CopyableCode code="http_frontend" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the User is allowed to access to the WebUI interfaces (wire: httpFrontend)</td>
</tr>
<tr>
    <td><CopyableCode code="hue" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the User is allowed to access to the Hue interface</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the User</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Users associated with this Hadoop Cluster</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-cloudera_manager"><code>cloudera_manager</code></a>, <a href="#parameter-http_frontend"><code>http_frontend</code></a>, <a href="#parameter-hue"><code>hue</code></a>, <a href="#parameter-password"><code>password</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Add an User to your cluster</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Alter this object properties</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Remove this User</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Reset the password for a given Hadoop Cluster User</td>
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
    <td>The internal name of your cluster</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your cluster (wire: serviceName)</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the User</td>
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

Get this object properties

```sql
SELECT
cloudera_manager,
http_frontend,
hue,
username
FROM ovh.cluster_hadoop.users
WHERE service_name = '{{ service_name }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="list">

Users associated with this Hadoop Cluster

```sql
SELECT
cloudera_manager,
http_frontend,
hue,
username
FROM ovh.cluster_hadoop.users
WHERE service_name = '{{ service_name }}' -- required
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

Add an User to your cluster

```sql
INSERT INTO ovh.cluster_hadoop.users (
cloudera_manager,
http_frontend,
hue,
password,
username,
service_name
)
SELECT 
{{ cloudera_manager }} /* required */,
{{ http_frontend }} /* required */,
{{ hue }} /* required */,
'{{ password }}' /* required */,
'{{ username }}' /* required */,
'{{ service_name }}'
RETURNING
name,
task_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the users resource.
    - name: cloudera_manager
      value: {{ cloudera_manager }}
      description: |
        Whether or not the User is allowed to access to the Cloudera Manager interface
    - name: http_frontend
      value: {{ http_frontend }}
      description: |
        Whether or not the User is allowed to access to the WebUI interfaces
    - name: hue
      value: {{ hue }}
      description: |
        Whether or not the User is allowed to access to the Hue interface
    - name: password
      value: "{{ password }}"
      description: |
        Password of the User
    - name: username
      value: "{{ username }}"
      description: |
        Username of the User
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

Alter this object properties

```sql
UPDATE ovh.cluster_hadoop.users
SET 
cloudera_manager = {{ cloudera_manager }},
http_frontend = {{ http_frontend }},
hue = {{ hue }}
WHERE 
service_name = '{{ service_name }}' --required
AND username = '{{ username }}' --required;
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

Remove this User

```sql
DELETE FROM ovh.cluster_hadoop.users
WHERE service_name = '{{ service_name }}' --required
AND username = '{{ username }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reset_password"
    values={[
        { label: 'reset_password', value: 'reset_password' }
    ]}
>
<TabItem value="reset_password">

Reset the password for a given Hadoop Cluster User

```sql
EXEC ovh.cluster_hadoop.users.reset_password 
@serviceName='{{ serviceName }}' --required, 
@username='{{ username }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
