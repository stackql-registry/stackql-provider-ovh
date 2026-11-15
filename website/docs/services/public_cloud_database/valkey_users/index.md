--- 
title: valkey_users
hide_title: false
hide_table_of_contents: false
keywords:
  - valkey_users
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

Creates, updates, deletes, gets or lists a <code>valkey_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="valkey_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_database.valkey_users" /></td></tr>
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
    <td>Unique identifier of the user</td>
</tr>
<tr>
    <td><CopyableCode code="admin" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the service administrator, the user created automatically at provisioning time, which cannot be deleted</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Command category rules granted to the user, each written as a category name prefixed with `+@` when it is allowed or `-@` when it is denied, for example `+@read`, `-@dangerous`</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>Glob patterns of the Pub/Sub channels the user can subscribe to and publish on, for example `news:*`, `chat:room1`. `*` means every channel, and an empty list means the user cannot use any channel.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="commands" /></td>
    <td><code>array</code></td>
    <td>Individual command rules refining the permissions granted through the categories, each written as a Valkey command name prefixed with `+` when it is allowed or `-` when it is denied, for example `+get`, `-flushall`</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user credentials were last updated (wire: credentialsLastUpdatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>Glob patterns of the keys the user can access, for example `cache:*`, `session:user:42`. `*` means every key, and an empty list means the user cannot access any key.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string (password)</code></td>
    <td>Password of the user. Returned only on creation or password reset.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current readiness status of the user (CREATING, DELETING, ERROR, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Login name of the user</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A user account on a managed Valkey service

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
    <td>Unique identifier of the user</td>
</tr>
<tr>
    <td><CopyableCode code="admin" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the service administrator, the user created automatically at provisioning time, which cannot be deleted</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Command category rules granted to the user, each written as a category name prefixed with `+@` when it is allowed or `-@` when it is denied, for example `+@read`, `-@dangerous`</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>Glob patterns of the Pub/Sub channels the user can subscribe to and publish on, for example `news:*`, `chat:room1`. `*` means every channel, and an empty list means the user cannot use any channel.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="commands" /></td>
    <td><code>array</code></td>
    <td>Individual command rules refining the permissions granted through the categories, each written as a Valkey command name prefixed with `+` when it is allowed or `-` when it is denied, for example `+get`, `-flushall`</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user credentials were last updated (wire: credentialsLastUpdatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>Glob patterns of the keys the user can access, for example `cache:*`, `session:user:42`. `*` means every key, and an empty list means the user cannot access any key.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string (password)</code></td>
    <td>Password of the user. Returned only on creation or password reset.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current readiness status of the user (CREATING, DELETING, ERROR, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Login name of the user</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the user, its access rules and its status. The password is not returned. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the users of the service with their access rules and status. Passwords are not returned. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a user with access rules on command categories, commands, keys and Pub/Sub channels. An empty keys or channels list grants no access. The generated password is returned only on creation and on password reset. (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Partially updates the access rules of the user. Each list replaces the current one, and an empty keys or channels list revokes all access. Setting credentialsLastUpdatedAt resets the password and returns the new one. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Permanently deletes the user. (Beta version)</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-categories"><code>categories</code></a>, <a href="#parameter-channels"><code>channels</code></a>, <a href="#parameter-commands"><code>commands</code></a>, <a href="#parameter-keys"><code>keys</code></a></td>
    <td></td>
    <td>Updates the access rules of the user. Each list replaces the current one, and an empty keys or channels list revokes all access. To reset the password, use the resetPassword route of the user or a partial update with credentialsLastUpdatedAt. (Beta version)</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Generates a new password for the user and returns it in the response. Reading the user never returns it. The previous password stops working once the new one is applied, and credentialsLastUpdatedAt becomes the date of this reset. This is the same reset as a partial update of the user that sets credentialsLastUpdatedAt. (Beta version)</td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string (uuid)</code></td>
    <td>User ID</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>User ID (wire: userId)</td>
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

Returns the user, its access rules and its status. The password is not returned. (Beta version)

```sql
SELECT
id,
admin,
categories,
channels,
checksum,
commands,
created_at,
credentials_last_updated_at,
keys,
password,
status,
username
FROM ovh.public_cloud_database.valkey_users
WHERE service_id = '{{ service_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the users of the service with their access rules and status. Passwords are not returned. (Beta version)

```sql
SELECT
id,
admin,
categories,
channels,
checksum,
commands,
created_at,
credentials_last_updated_at,
keys,
password,
status,
username
FROM ovh.public_cloud_database.valkey_users
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

Creates a user with access rules on command categories, commands, keys and Pub/Sub channels. An empty keys or channels list grants no access. The generated password is returned only on creation and on password reset. (Beta version)

```sql
INSERT INTO ovh.public_cloud_database.valkey_users (
categories,
channels,
commands,
keys,
name,
service_id,
project_id
)
SELECT 
'{{ categories }}',
'{{ channels }}',
'{{ commands }}',
'{{ keys }}',
'{{ name }}' /* required */,
'{{ service_id }}',
'{{ project_id }}'
RETURNING
id,
admin,
categories,
channels,
checksum,
commands,
created_at,
credentials_last_updated_at,
keys,
password,
status,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: valkey_users
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the valkey_users resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the valkey_users resource.
    - name: categories
      value:
        - "{{ categories }}"
      description: |
        Command category rules granted to the user, each written as a category name prefixed with \`+@\` to allow it or \`-@\` to deny it, for example \`+@read\`, \`-@dangerous\`. Available categories are all, admin, bitmap, blocking, connection, dangerous, fast, geo, hash, hyperloglog, keyspace, list, pubsub, read, scripting, set, slow, sortedset, stream, string, transaction and write.
    - name: channels
      value:
        - "{{ channels }}"
      description: |
        Glob patterns of the Pub/Sub channels the user can subscribe to and publish on, for example \`news:*\`, \`chat:room1\`. Use \`*\` to allow every channel. When the list is empty, the user cannot use any channel.
    - name: commands
      value:
        - "{{ commands }}"
      description: |
        Individual command rules that refine the permissions granted through the categories, each written as a Valkey command name in lowercase prefixed with \`+\` to allow it or \`-\` to deny it, for example \`+get\`, \`-flushall\`
    - name: keys
      value:
        - "{{ keys }}"
      description: |
        Glob patterns of the keys the user can access, for example \`cache:*\`, \`session:user:42\`. Use \`*\` to allow every key. When the list is empty, the user cannot access any key.
    - name: name
      value: "{{ name }}"
      description: |
        Login name of the new user, unique on the service. It must be 1 to 32 characters long, start with a letter, a digit or an underscore, and contain only letters, digits, underscores, dots and hyphens.
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

Partially updates the access rules of the user. Each list replaces the current one, and an empty keys or channels list revokes all access. Setting credentialsLastUpdatedAt resets the password and returns the new one. (Beta version)

```sql
UPDATE ovh.public_cloud_database.valkey_users
SET 
categories = '{{ categories }}',
channels = '{{ channels }}',
commands = '{{ commands }}',
credentials_last_updated_at = '{{ credentials_last_updated_at }}',
keys = '{{ keys }}'
WHERE 
service_id = '{{ service_id }}' --required
AND user_id = '{{ user_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
admin,
categories,
channels,
checksum,
commands,
created_at,
credentials_last_updated_at,
keys,
password,
status,
username;
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

Permanently deletes the user. (Beta version)

```sql
DELETE FROM ovh.public_cloud_database.valkey_users
WHERE service_id = '{{ service_id }}' --required
AND user_id = '{{ user_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="replace"
    values={[
        { label: 'replace', value: 'replace' },
        { label: 'reset_password', value: 'reset_password' }
    ]}
>
<TabItem value="replace">

Updates the access rules of the user. Each list replaces the current one, and an empty keys or channels list revokes all access. To reset the password, use the resetPassword route of the user or a partial update with credentialsLastUpdatedAt. (Beta version)

```sql
EXEC ovh.public_cloud_database.valkey_users.replace 
@serviceId='{{ serviceId }}' --required, 
@userId='{{ userId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"categories": "{{ categories }}", 
"channels": "{{ channels }}", 
"commands": "{{ commands }}", 
"keys": "{{ keys }}"
}'
;
```
</TabItem>
<TabItem value="reset_password">

Generates a new password for the user and returns it in the response. Reading the user never returns it. The previous password stops working once the new one is applied, and credentialsLastUpdatedAt becomes the date of this reset. This is the same reset as a partial update of the user that sets credentialsLastUpdatedAt. (Beta version)

```sql
EXEC ovh.public_cloud_database.valkey_users.reset_password 
@serviceId='{{ serviceId }}' --required, 
@userId='{{ userId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
