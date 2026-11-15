--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.databases" /></td></tr>
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
    <td>Database name (like mydb.mysql.db or mydb.postgres.db)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlperso_id" /></td>
    <td><code>integer</code></td>
    <td>Which SQLPerso this database is linked to (if any) (wire: sqlpersoId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this database (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="database_service_deprecated" /></td>
    <td><code>boolean</code></td>
    <td>Whether service database is deprecated (wire: databaseServiceDeprecated)</td>
</tr>
<tr>
    <td><CopyableCode code="database_type" /></td>
    <td><code>string</code></td>
    <td>Database service type (extra, included, optional) (wire: databaseType)</td>
</tr>
<tr>
    <td><CopyableCode code="dumps" /></td>
    <td><code>integer</code></td>
    <td>The number of available dumps associated to this database</td>
</tr>
<tr>
    <td><CopyableCode code="gui_url" /></td>
    <td><code>string</code></td>
    <td>URL for the graphical user interface (wire: guiURL)</td>
</tr>
<tr>
    <td><CopyableCode code="last_check" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last check quota (wire: lastCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Mode of your database (besteffort, classic, module)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port on where to contact this database</td>
</tr>
<tr>
    <td><CopyableCode code="quota_size" /></td>
    <td><code>object</code></td>
    <td>Space allowed (wire: quotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Space used (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Your database server name</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Database state (close, ok, readonly)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The database status (checking, created, creating, deleting, dumping, importing, locked, optimizing, restoring, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your database (mariadb, mongodb, mysql, postgresql, redis)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Database user name</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Database version following the database type (10, 10.1, 10.11, 10.2, 10.3, 10.4, 10.5, 10.6, 11, 12, 13, 15, 3.2, 3.4, 4.0, 5.1, 5.5, 5.6, 5.7, 6.0, 7.0, 8.0, 8.4, 9.4, 9.5, 9.6)</td>
</tr>
<tr>
    <td><CopyableCode code="version_support" /></td>
    <td><code>string</code></td>
    <td>Indicates the current support state of your database version (beta, deprecated, stable) (wire: versionSupport)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Database

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
    <td>Database name (like mydb.mysql.db or mydb.postgres.db)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlperso_id" /></td>
    <td><code>integer</code></td>
    <td>Which SQLPerso this database is linked to (if any) (wire: sqlpersoId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this database (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="database_service_deprecated" /></td>
    <td><code>boolean</code></td>
    <td>Whether service database is deprecated (wire: databaseServiceDeprecated)</td>
</tr>
<tr>
    <td><CopyableCode code="database_type" /></td>
    <td><code>string</code></td>
    <td>Database service type (extra, included, optional) (wire: databaseType)</td>
</tr>
<tr>
    <td><CopyableCode code="dumps" /></td>
    <td><code>integer</code></td>
    <td>The number of available dumps associated to this database</td>
</tr>
<tr>
    <td><CopyableCode code="gui_url" /></td>
    <td><code>string</code></td>
    <td>URL for the graphical user interface (wire: guiURL)</td>
</tr>
<tr>
    <td><CopyableCode code="last_check" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last check quota (wire: lastCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Mode of your database (besteffort, classic, module)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port on where to contact this database</td>
</tr>
<tr>
    <td><CopyableCode code="quota_size" /></td>
    <td><code>object</code></td>
    <td>Space allowed (wire: quotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Space used (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Your database server name</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Database state (close, ok, readonly)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The database status (checking, created, creating, deleting, dumping, importing, locked, optimizing, restoring, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your database (mariadb, mongodb, mysql, postgresql, redis)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Database user name</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Database version following the database type (10, 10.1, 10.11, 10.2, 10.3, 10.4, 10.5, 10.6, 11, 12, 13, 15, 3.2, 3.4, 4.0, 5.1, 5.5, 5.6, 5.7, 6.0, 7.0, 8.0, 8.4, 9.4, 9.5, 9.6)</td>
</tr>
<tr>
    <td><CopyableCode code="version_support" /></td>
    <td><code>string</code></td>
    <td>Indicates the current support state of your database version (beta, deprecated, stable) (wire: versionSupport)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a database. Returns the type, version, server, port, user, quota and status of the database, and the URL of its management tool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-server"><code>server</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-user"><code>user</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List databases. Returns the names of the databases of the hosting. Filter them by mode, name, server, type or user.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-capabilitie"><code>capabilitie</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-user"><code>user</code></a></td>
    <td></td>
    <td>Create a database. Creates a MariaDB, MySQL, PostgreSQL or Redis database with its user, and returns the task. The quota applies only to extraSqlPerso databases.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a database. Deletes the database and returns the task. Its dumps are kept until their automatic deletion date.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change the database password. Changes the password of the database user and returns the task. Available when changePassword is true in the database capabilities.</td>
</tr>
<tr>
    <td><a href="#copy_restore"><CopyableCode code="copy_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-copyId"><code>copyId</code></a></td>
    <td></td>
    <td>Restore a database copy. Restores a copy into the database and returns the task. Set flushDatabase to true to empty the database first.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-documentId"><code>documentId</code></a></td>
    <td></td>
    <td>Import a dump. Imports a dump file uploaded with /me/documents into the database, and returns the task. Set flushDatabase to true to empty the database first.</td>
</tr>
<tr>
    <td><a href="#request"><CopyableCode code="request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Run a database action. Runs an action on the database and returns the task. CHECK_QUOTA refreshes the space used by the database.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-date"><code>date</code></a></td>
    <td></td>
    <td>Restore a database backup. Restores the database from a daily or weekly backup and returns the task. Set sendEmail to true to receive an email when it is done.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Database name (like mydb.mysql.db or mydb.postgres.db)</td>
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
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Filter the value of mode property (=)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of name property (like)</td>
</tr>
<tr id="parameter-server">
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Filter the value of server property (like)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter the value of type property (=)</td>
</tr>
<tr id="parameter-user">
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Filter the value of user property (like)</td>
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

Get a database. Returns the type, version, server, port, user, quota and status of the database, and the URL of its management tool.

```sql
SELECT
name,
sqlperso_id,
task_id,
database_service_deprecated,
database_type,
dumps,
gui_url,
last_check,
mode,
port,
quota_size,
quota_used,
server,
state,
status,
type,
user,
version,
version_support
FROM ovh.hosting_web.databases
WHERE name = '{{ name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List databases. Returns the names of the databases of the hosting. Filter them by mode, name, server, type or user.

```sql
SELECT
name,
sqlperso_id,
task_id,
database_service_deprecated,
database_type,
dumps,
gui_url,
last_check,
mode,
port,
quota_size,
quota_used,
server,
state,
status,
type,
user,
version,
version_support
FROM ovh.hosting_web.databases
WHERE service_name = '{{ service_name }}' -- required
AND mode = '{{ mode }}'
AND name = '{{ name }}'
AND server = '{{ server }}'
AND type = '{{ type }}'
AND user = '{{ user }}'
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

Create a database. Creates a MariaDB, MySQL, PostgreSQL or Redis database with its user, and returns the task. The quota applies only to extraSqlPerso databases.

```sql
INSERT INTO ovh.hosting_web.databases (
capabilitie,
password,
quota,
type,
user,
version,
service_name
)
SELECT 
'{{ capabilitie }}' /* required */,
'{{ password }}',
{{ quota }},
'{{ type }}' /* required */,
'{{ user }}' /* required */,
'{{ version }}',
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
- name: databases
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the databases resource.
    - name: capabilitie
      value: "{{ capabilitie }}"
      description: |
        Type of your database
      valid_values: ['extraSqlPerso', 'local', 'privateDatabase', 'sqlLocal', 'sqlPerso', 'sqlPro']
    - name: password
      value: "{{ password }}"
      description: |
        Database password
    - name: quota
      value: {{ quota }}
      description: |
        Quota assign to your database. Only for extraSql
      valid_values: ['25', '100', '200', '256', '400', '512', '800', '1024']
    - name: type
      value: "{{ type }}"
      description: |
        Type you want for your database
      valid_values: ['mariadb', 'mysql', 'postgresql', 'redis']
    - name: user
      value: "{{ user }}"
      description: |
        Database user name. Must begin with your hosting login and must be in lower case
    - name: version
      value: "{{ version }}"
      description: |
        Version you want for your database following the type
      valid_values: ['10', '10.1', '10.11', '10.2', '10.3', '10.4', '10.5', '10.6', '11', '12', '13', '15', '3.2', '3.4', '4.0', '5.1', '5.5', '5.6', '5.7', '6.0', '7.0', '8.0', '8.4', '9.4', '9.5', '9.6']
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

Delete a database. Deletes the database and returns the task. Its dumps are kept until their automatic deletion date.

```sql
DELETE FROM ovh.hosting_web.databases
WHERE name = '{{ name }}' --required
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
        { label: 'change_password', value: 'change_password' },
        { label: 'copy_restore', value: 'copy_restore' },
        { label: 'import', value: 'import' },
        { label: 'request', value: 'request' },
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="change_password">

Change the database password. Changes the password of the database user and returns the task. Available when changePassword is true in the database capabilities.

```sql
EXEC ovh.hosting_web.databases.change_password 
@name='{{ name }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="copy_restore">

Restore a database copy. Restores a copy into the database and returns the task. Set flushDatabase to true to empty the database first.

```sql
EXEC ovh.hosting_web.databases.copy_restore 
@name='{{ name }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"copyId": "{{ copyId }}", 
"flushDatabase": {{ flushDatabase }}
}'
;
```
</TabItem>
<TabItem value="import">

Import a dump. Imports a dump file uploaded with /me/documents into the database, and returns the task. Set flushDatabase to true to empty the database first.

```sql
EXEC ovh.hosting_web.databases.import 
@name='{{ name }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"documentId": "{{ documentId }}", 
"flushDatabase": {{ flushDatabase }}, 
"sendEmail": {{ sendEmail }}
}'
;
```
</TabItem>
<TabItem value="request">

Run a database action. Runs an action on the database and returns the task. CHECK_QUOTA refreshes the space used by the database.

```sql
EXEC ovh.hosting_web.databases.request 
@name='{{ name }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"action": "{{ action }}"
}'
;
```
</TabItem>
<TabItem value="restore">

Restore a database backup. Restores the database from a daily or weekly backup and returns the task. Set sendEmail to true to receive an email when it is done.

```sql
EXEC ovh.hosting_web.databases.restore 
@name='{{ name }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"date": "{{ date }}", 
"sendEmail": {{ sendEmail }}
}'
;
```
</TabItem>
</Tabs>
