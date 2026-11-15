--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - hosting_private_database
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_private_database.databases" /></td></tr>
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
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Database name (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_time" /></td>
    <td><code>string (time)</code></td>
    <td>Time of the next backup (every day) (example: 15:04:05) (wire: backupTime)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the database (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Space used by the database (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>Users granted to this database</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Databases

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
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Database name (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_time" /></td>
    <td><code>string (time)</code></td>
    <td>Time of the next backup (every day) (example: 15:04:05) (wire: backupTime)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the database (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Space used by the database (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>Users granted to this database</td>
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
    <td><a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the size and creation date of the database, its daily backup time and the users granted on it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the databases of the service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-database_name"><code>database_name</code></a></td>
    <td></td>
    <td>Creates an empty database on the service and returns a task to follow the creation. To also create a user with access to it, use the database wizard.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the database and returns a task to follow the deletion. Its dumps are kept as orphan dumps.</td>
</tr>
<tr>
    <td><a href="#copy_restore"><CopyableCode code="copy_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseName"><code>databaseName</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-copyId"><code>copyId</code></a></td>
    <td></td>
    <td>Restores a copy into the database. The database is not flushed before the restore unless requested.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseName"><code>databaseName</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-documentId"><code>documentId</code></a></td>
    <td></td>
    <td>Imports a dump file stored in /me/document into the database. The database is not flushed before the import unless requested.</td>
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
<tr id="parameter-databaseName">
    <td><CopyableCode code="databaseName" /></td>
    <td><code>string</code></td>
    <td>Database name</td>
</tr>
<tr id="parameter-database_name">
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Database name (wire: databaseName)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the size and creation date of the database, its daily backup time and the users granted on it.

```sql
SELECT
database_name,
backup_time,
creation_date,
quota_used,
users
FROM ovh.hosting_private_database.databases
WHERE database_name = '{{ database_name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the databases of the service.

```sql
SELECT
database_name,
backup_time,
creation_date,
quota_used,
users
FROM ovh.hosting_private_database.databases
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

Creates an empty database on the service and returns a task to follow the creation. To also create a user with access to it, use the database wizard.

```sql
INSERT INTO ovh.hosting_private_database.databases (
database_name,
service_name
)
SELECT 
'{{ database_name }}' /* required */,
'{{ service_name }}'
RETURNING
id,
dump_id,
database_name,
user_name,
done_date,
function,
last_update,
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
    - name: database_name
      value: "{{ database_name }}"
      description: |
        Name of your new database
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

Deletes the database and returns a task to follow the deletion. Its dumps are kept as orphan dumps.

```sql
DELETE FROM ovh.hosting_private_database.databases
WHERE database_name = '{{ database_name }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="copy_restore"
    values={[
        { label: 'copy_restore', value: 'copy_restore' },
        { label: 'import', value: 'import' }
    ]}
>
<TabItem value="copy_restore">

Restores a copy into the database. The database is not flushed before the restore unless requested.

```sql
EXEC ovh.hosting_private_database.databases.copy_restore 
@databaseName='{{ databaseName }}' --required, 
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

Imports a dump file stored in /me/document into the database. The database is not flushed before the import unless requested.

```sql
EXEC ovh.hosting_private_database.databases.import 
@databaseName='{{ databaseName }}' --required, 
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
</Tabs>
