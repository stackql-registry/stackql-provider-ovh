--- 
title: own_logs_user_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - own_logs_user_logs
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

Creates, updates, deletes, gets or lists an <code>own_logs_user_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="own_logs_user_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.own_logs_user_logs" /></td></tr>
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
    <td><CopyableCode code="own_logs_id" /></td>
    <td><code>integer</code></td>
    <td>OwnLogs where this userLogs will be enable. Default : main domain ownlogs (wire: ownLogsId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this userLogs (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the user creation (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description field for you</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The userLogs login used to connect to logs.ovh.net</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of this userLogs (created, creating, deleting, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Hosting users logs

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
    <td><CopyableCode code="own_logs_id" /></td>
    <td><code>integer</code></td>
    <td>OwnLogs where this userLogs will be enable. Default : main domain ownlogs (wire: ownLogsId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this userLogs (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the user creation (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description field for you</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The userLogs login used to connect to logs.ovh.net</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of this userLogs (created, creating, deleting, updating)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a log user. Returns the login, description, status and creation date of the log user, and the own logs it can access.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List log users. Returns the logins of the users allowed to access the logs interface. Filter them by login.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Create a log user. Creates a user allowed to access the logs interface. Without ownLogsId, the user accesses the logs of the main domain.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a log user. Updates the description of the log user. The login and the own logs it can access cannot be changed.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a log user. Deletes the log user, who can no longer access the logs interface at logs.ovh.net with its login.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change a log user password. Changes the password the log user enters to access the logs interface at logs.ovh.net.</td>
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
    <td>Id of the object</td>
</tr>
<tr id="parameter-login">
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The userLogs login used to connect to logs.ovh.net</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
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

Get a log user. Returns the login, description, status and creation date of the log user, and the own logs it can access.

```sql
SELECT
own_logs_id,
task_id,
creation_date,
description,
login,
status
FROM ovh.hosting_web.own_logs_user_logs
WHERE id = '{{ id }}' -- required
AND login = '{{ login }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List log users. Returns the logins of the users allowed to access the logs interface. Filter them by login.

```sql
SELECT
own_logs_id,
task_id,
creation_date,
description,
login,
status
FROM ovh.hosting_web.own_logs_user_logs
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Create a log user. Creates a user allowed to access the logs interface. Without ownLogsId, the user accesses the logs of the main domain.

```sql
INSERT INTO ovh.hosting_web.own_logs_user_logs (
description,
login,
own_logs_id,
password,
id,
service_name
)
SELECT 
'{{ description }}' /* required */,
'{{ login }}' /* required */,
{{ own_logs_id }},
'{{ password }}' /* required */,
'{{ id }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: own_logs_user_logs
  props:
    - name: id
      value: {{ id }}
      description: Required parameter for the own_logs_user_logs resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the own_logs_user_logs resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description field for you
    - name: login
      value: "{{ login }}"
      description: |
        The userLogs login used to connect to logs.ovh.net
    - name: own_logs_id
      value: {{ own_logs_id }}
      description: |
        OwnLogs where this userLogs will be enable. Default : main domain ownlogs
    - name: password
      value: "{{ password }}"
      description: |
        The new userLogs password
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

Update a log user. Updates the description of the log user. The login and the own logs it can access cannot be changed.

```sql
UPDATE ovh.hosting_web.own_logs_user_logs
SET 
description = '{{ description }}'
WHERE 
id = '{{ id }}' --required
AND login = '{{ login }}' --required
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

Delete a log user. Deletes the log user, who can no longer access the logs interface at logs.ovh.net with its login.

```sql
DELETE FROM ovh.hosting_web.own_logs_user_logs
WHERE id = '{{ id }}' --required
AND login = '{{ login }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' }
    ]}
>
<TabItem value="change_password">

Change a log user password. Changes the password the log user enters to access the logs interface at logs.ovh.net.

```sql
EXEC ovh.hosting_web.own_logs_user_logs.change_password 
@id='{{ id }}' --required, 
@login='{{ login }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
