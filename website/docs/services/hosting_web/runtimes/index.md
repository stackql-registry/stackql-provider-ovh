--- 
title: runtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - runtimes
  - hosting_web
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

Creates, updates, deletes, gets or lists a <code>runtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runtimes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.runtimes" /></td></tr>
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
    <td><code>integer</code></td>
    <td>The runtime configuration ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom display name of the runtime configuration</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The link current task for the runtime configuration (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="app_bootstrap" /></td>
    <td><code>string</code></td>
    <td>The client application bootstrap script (wire: appBootstrap)</td>
</tr>
<tr>
    <td><CopyableCode code="app_env" /></td>
    <td><code>string</code></td>
    <td>The client application environment (development, production) (wire: appEnv)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the runtime configuration (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Is the runtime configuration is the one by default for the hosting (wire: isDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="is_deletable" /></td>
    <td><code>boolean</code></td>
    <td>Return if the runtime configuration can be deleted (wire: isDeletable)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update date of the runtime configuration (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="public_dir" /></td>
    <td><code>string</code></td>
    <td>The client application public directory (wire: publicDir)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the runtime (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The backend type of the runtime (nodejs-10, nodejs-11, nodejs-12, nodejs-14, nodejs-8, nodejs-9, phpfpm-5.6, phpfpm-7.0, phpfpm-7.1, phpfpm-7.2, phpfpm-7.3, phpfpm-7.4, phpfpm-8.0, python-2, python-3, ruby-2.6)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The runtime configuration of an attached domain for cloud web offer

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
    <td><code>integer</code></td>
    <td>The runtime configuration ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom display name of the runtime configuration</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The link current task for the runtime configuration (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="app_bootstrap" /></td>
    <td><code>string</code></td>
    <td>The client application bootstrap script (wire: appBootstrap)</td>
</tr>
<tr>
    <td><CopyableCode code="app_env" /></td>
    <td><code>string</code></td>
    <td>The client application environment (development, production) (wire: appEnv)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the runtime configuration (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Is the runtime configuration is the one by default for the hosting (wire: isDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="is_deletable" /></td>
    <td><code>boolean</code></td>
    <td>Return if the runtime configuration can be deleted (wire: isDeletable)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update date of the runtime configuration (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="public_dir" /></td>
    <td><code>string</code></td>
    <td>The client application public directory (wire: publicDir)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the runtime (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The backend type of the runtime (nodejs-10, nodejs-11, nodejs-12, nodejs-14, nodejs-8, nodejs-9, phpfpm-5.6, phpfpm-7.0, phpfpm-7.1, phpfpm-7.2, phpfpm-7.3, phpfpm-7.4, phpfpm-8.0, python-2, python-3, ruby-2.6)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a runtime configuration. Returns the backend type, environment, bootstrap script, public directory and status of the runtime configuration.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List runtime configurations. Returns the IDs of the runtime configurations of the hosting. Filter them by name or type.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create a runtime configuration. Creates a runtime configuration with a backend type, an environment, a bootstrap script and a public directory, linked to attached domains, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a runtime configuration. Updates the name, backend type, environment, bootstrap script, public directory or default status of the runtime configuration.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a runtime configuration. Deletes the runtime configuration and returns the task. Only a configuration with isDeletable set to true can be deleted.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The runtime configuration ID</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of name property (like)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter the value of type property (=)</td>
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

Get a runtime configuration. Returns the backend type, environment, bootstrap script, public directory and status of the runtime configuration.

```sql
SELECT
id,
name,
task_id,
app_bootstrap,
app_env,
creation_date,
is_default,
is_deletable,
last_update,
public_dir,
status,
type
FROM ovh.hosting_web.runtimes
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List runtime configurations. Returns the IDs of the runtime configurations of the hosting. Filter them by name or type.

```sql
SELECT
id,
name,
task_id,
app_bootstrap,
app_env,
creation_date,
is_default,
is_deletable,
last_update,
public_dir,
status,
type
FROM ovh.hosting_web.runtimes
WHERE service_name = '{{ service_name }}' -- required
AND name = '{{ name }}'
AND type = '{{ type }}'
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

Create a runtime configuration. Creates a runtime configuration with a backend type, an environment, a bootstrap script and a public directory, linked to attached domains, and returns the task.

```sql
INSERT INTO ovh.hosting_web.runtimes (
app_bootstrap,
app_env,
attached_domains,
is_default,
name,
public_dir,
type,
service_name
)
SELECT 
'{{ app_bootstrap }}',
'{{ app_env }}',
'{{ attached_domains }}',
{{ is_default }},
'{{ name }}',
'{{ public_dir }}',
'{{ type }}',
'{{ service_name }}'
RETURNING
id,
object_id,
done_date,
function,
last_update,
object_type,
start_date,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: runtimes
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the runtimes resource.
    - name: app_bootstrap
      value: "{{ app_bootstrap }}"
      description: |
        The client application bootstrap script
    - name: app_env
      value: "{{ app_env }}"
      description: |
        The client application environment
      valid_values: ['development', 'production']
    - name: attached_domains
      value:
        - "{{ attached_domains }}"
      description: |
        The attached domains fqdn to link to this runtime configuration
    - name: is_default
      value: {{ is_default }}
      description: |
        Set if the runtime configuration is the one by default for the hosting
    - name: name
      value: "{{ name }}"
      description: |
        The custom display name of the runtime configuration
    - name: public_dir
      value: "{{ public_dir }}"
      description: |
        The client application public directory
    - name: type
      value: "{{ type }}"
      description: |
        Runtime backend type enum
      valid_values: ['nodejs-10', 'nodejs-11', 'nodejs-12', 'nodejs-14', 'nodejs-8', 'nodejs-9', 'phpfpm-5.6', 'phpfpm-7.0', 'phpfpm-7.1', 'phpfpm-7.2', 'phpfpm-7.3', 'phpfpm-7.4', 'phpfpm-8.0', 'python-2', 'python-3', 'ruby-2.6']
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

Update a runtime configuration. Updates the name, backend type, environment, bootstrap script, public directory or default status of the runtime configuration.

```sql
UPDATE ovh.hosting_web.runtimes
SET 
app_bootstrap = '{{ app_bootstrap }}',
app_env = '{{ app_env }}',
is_default = {{ is_default }},
name = '{{ name }}',
public_dir = '{{ public_dir }}',
type = '{{ type }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required;
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

Delete a runtime configuration. Deletes the runtime configuration and returns the task. Only a configuration with isDeletable set to true can be deleted.

```sql
DELETE FROM ovh.hosting_web.runtimes
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
