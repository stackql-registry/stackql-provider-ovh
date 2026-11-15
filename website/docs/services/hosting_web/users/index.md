--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.users" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this user (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="home" /></td>
    <td><code>string</code></td>
    <td>Home directory</td>
</tr>
<tr>
    <td><CopyableCode code="is_primary_account" /></td>
    <td><code>boolean</code></td>
    <td>Is this user primary (wire: isPrimaryAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Login used to connect on FTP and SSH</td>
</tr>
<tr>
    <td><CopyableCode code="service_management_credentials" /></td>
    <td><code>object</code></td>
    <td>Credentials to manage your webhosting (wire: serviceManagementCredentials)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_state" /></td>
    <td><code>string</code></td>
    <td>User ssh status (active, none, sftponly) (wire: sshState)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>User state (off, rw)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The user status (created, creating, deleting, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Hosting users

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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this user (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="home" /></td>
    <td><code>string</code></td>
    <td>Home directory</td>
</tr>
<tr>
    <td><CopyableCode code="is_primary_account" /></td>
    <td><code>boolean</code></td>
    <td>Is this user primary (wire: isPrimaryAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Login used to connect on FTP and SSH</td>
</tr>
<tr>
    <td><CopyableCode code="service_management_credentials" /></td>
    <td><code>object</code></td>
    <td>Credentials to manage your webhosting (wire: serviceManagementCredentials)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_state" /></td>
    <td><code>string</code></td>
    <td>User ssh status (active, none, sftponly) (wire: sshState)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>User state (off, rw)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The user status (created, creating, deleting, updating)</td>
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
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a user. Returns the home directory, SSH state, state and status of the user, and whether it is the primary account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-home"><code>home</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List users. Returns the logins of the FTP and SSH users of the hosting. Filter them by home or login.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-home"><code>home</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Create a user. Creates an FTP and SSH user with a login, a password and a home directory, and returns the task. sshState is none by default.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a user. Updates the home directory, SSH state or state of the user. Set state to off to disable the FTP and SSH access of the user.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a user. Permanently deletes the user and returns the task. The files in its home folder are kept.</td>
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
<tr id="parameter-login">
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Login used to connect on FTP and SSH</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
</tr>
<tr id="parameter-home">
    <td><CopyableCode code="home" /></td>
    <td><code>string</code></td>
    <td>Filter the value of home property (like)</td>
</tr>
<tr id="parameter-login">
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Filter the value of login property (like)</td>
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

Get a user. Returns the home directory, SSH state, state and status of the user, and whether it is the primary account.

```sql
SELECT
task_id,
home,
is_primary_account,
login,
service_management_credentials,
ssh_state,
state,
status
FROM ovh.hosting_web.users
WHERE login = '{{ login }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List users. Returns the logins of the FTP and SSH users of the hosting. Filter them by home or login.

```sql
SELECT
task_id,
home,
is_primary_account,
login,
service_management_credentials,
ssh_state,
state,
status
FROM ovh.hosting_web.users
WHERE service_name = '{{ service_name }}' -- required
AND home = '{{ home }}'
AND login = '{{ login }}'
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

Create a user. Creates an FTP and SSH user with a login, a password and a home directory, and returns the task. sshState is none by default.

```sql
INSERT INTO ovh.hosting_web.users (
home,
login,
password,
ssh_state,
service_name
)
SELECT 
'{{ home }}' /* required */,
'{{ login }}' /* required */,
'{{ password }}' /* required */,
'{{ ssh_state }}',
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
- name: users
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the users resource.
    - name: home
      value: "{{ home }}"
      description: |
        Home directory
    - name: login
      value: "{{ login }}"
      description: |
        Login use for your new user
    - name: password
      value: "{{ password }}"
      description: |
        Password
    - name: ssh_state
      value: "{{ ssh_state }}"
      description: |
        Ssh state for this user. Default: none
      valid_values: ['active', 'none', 'sftponly']
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

Update a user. Updates the home directory, SSH state or state of the user. Set state to off to disable the FTP and SSH access of the user.

```sql
UPDATE ovh.hosting_web.users
SET 
home = '{{ home }}',
ssh_state = '{{ ssh_state }}',
state = '{{ state }}'
WHERE 
login = '{{ login }}' --required
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

Delete a user. Permanently deletes the user and returns the task. The files in its home folder are kept.

```sql
DELETE FROM ovh.hosting_web.users
WHERE login = '{{ login }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
