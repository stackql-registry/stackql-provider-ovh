--- 
title: modules
hide_title: false
hide_table_of_contents: false
keywords:
  - modules
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

Creates, updates, deletes, gets or lists a <code>modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.modules" /></td></tr>
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
    <td>Installation ID</td>
</tr>
<tr>
    <td><CopyableCode code="module_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the module associated with this installation (wire: moduleId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this module (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="admin_name" /></td>
    <td><code>string</code></td>
    <td>Login for the admin account (wire: adminName)</td>
</tr>
<tr>
    <td><CopyableCode code="admin_folder" /></td>
    <td><code>string</code></td>
    <td>The admin folder, relative to the module's installation path (wire: adminFolder)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the installation of the module (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="dependencies" /></td>
    <td><code>array</code></td>
    <td>The dependencies to which the module has access. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the module (cz, de, en, es, fi, fr, it, lt, nl, pl, pt)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last module's upgrade (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Where the module is installed, relative to your home directory</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The module status (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="target_url" /></td>
    <td><code>string</code></td>
    <td>The URL from where your module can be reached (wire: targetUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Hosting modules installed

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
    <td>Installation ID</td>
</tr>
<tr>
    <td><CopyableCode code="module_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the module associated with this installation (wire: moduleId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this module (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="admin_name" /></td>
    <td><code>string</code></td>
    <td>Login for the admin account (wire: adminName)</td>
</tr>
<tr>
    <td><CopyableCode code="admin_folder" /></td>
    <td><code>string</code></td>
    <td>The admin folder, relative to the module's installation path (wire: adminFolder)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the installation of the module (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="dependencies" /></td>
    <td><code>array</code></td>
    <td>The dependencies to which the module has access. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the module (cz, de, en, es, fi, fr, it, lt, nl, pl, pt)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last module's upgrade (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Where the module is installed, relative to your home directory</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The module status (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="target_url" /></td>
    <td><code>string</code></td>
    <td>The URL from where your module can be reached (wire: targetUrl)</td>
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
    <td>Get an installed module. Returns the path, URL, admin login, language, dependencies and status of the installed module.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List installed modules. Returns the installation IDs of the modules installed on the hosting. Get the details of one with its installation ID.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-module_id"><code>module_id</code></a></td>
    <td></td>
    <td>Install a module. Installs a module from the available modules in a folder of the hosting, with its admin account and dependencies, and returns the task. The admin password needs at least 8 characters.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an installed module. Deletes the module installation and returns the task. Use the installation ID, not the module ID.</td>
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
    <td>Installation ID</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
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

Get an installed module. Returns the path, URL, admin login, language, dependencies and status of the installed module.

```sql
SELECT
id,
module_id,
task_id,
admin_name,
admin_folder,
creation_date,
dependencies,
language,
last_update,
path,
status,
target_url
FROM ovh.hosting_web.modules
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List installed modules. Returns the installation IDs of the modules installed on the hosting. Get the details of one with its installation ID.

```sql
SELECT
id,
module_id,
task_id,
admin_name,
admin_folder,
creation_date,
dependencies,
language,
last_update,
path,
status,
target_url
FROM ovh.hosting_web.modules
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

Install a module. Installs a module from the available modules in a folder of the hosting, with its admin account and dependencies, and returns the task. The admin password needs at least 8 characters.

```sql
INSERT INTO ovh.hosting_web.modules (
admin_name,
admin_password,
dependencies,
domain,
language,
module_id,
path,
service_name
)
SELECT 
'{{ admin_name }}',
'{{ admin_password }}',
'{{ dependencies }}',
'{{ domain }}',
'{{ language }}',
{{ module_id }} /* required */,
'{{ path }}',
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
- name: modules
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the modules resource.
    - name: admin_name
      value: "{{ admin_name }}"
      description: |
        The login for the admin account (may be a standard string or your email)
    - name: admin_password
      value: "{{ admin_password }}"
      description: |
        The password for the admin account (at least 8 characters)
    - name: dependencies
      description: |
        The dependencies that we have to configure on your module. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
      value:
        - name: "{{ name }}"
          password: "{{ password }}"
          port: {{ port }}
          prefix: "{{ prefix }}"
          server: "{{ server }}"
          type: "{{ type }}"
          user: "{{ user }}"
    - name: domain
      value: "{{ domain }}"
      description: |
        On which domain the module has to be available (it can be a multidomain or a subdomain) - if not set, the module will be available on your serviceName domain
    - name: language
      value: "{{ language }}"
      description: |
        Install language
      valid_values: ['cz', 'de', 'en', 'es', 'fi', 'fr', 'it', 'lt', 'nl', 'pl', 'pt']
    - name: module_id
      value: {{ module_id }}
      description: |
        ID of the module you want to install
    - name: path
      value: "{{ path }}"
      description: |
        Where to install the module, relative to your home directory
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

Delete an installed module. Deletes the module installation and returns the task. Use the installation ID, not the module ID.

```sql
DELETE FROM ovh.hosting_web.modules
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
