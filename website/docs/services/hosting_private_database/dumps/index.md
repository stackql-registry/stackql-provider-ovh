--- 
title: dumps
hide_title: false
hide_table_of_contents: false
keywords:
  - dumps
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

Creates, updates, deletes, gets or lists a <code>dumps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dumps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_private_database.dumps" /></td></tr>
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
    <td><CopyableCode code="dump_id" /></td>
    <td><code>integer</code></td>
    <td>Dump id (wire: dumpId)</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Dump of this database name (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the dump (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Automatic deletion date of the dump (wire: deletionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="orphan" /></td>
    <td><code>boolean</code></td>
    <td>Dump orphan flag (true if database does not exists)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Dump URL access</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Dumps

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
    <td><CopyableCode code="dump_id" /></td>
    <td><code>integer</code></td>
    <td>Dump id (wire: dumpId)</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Dump of this database name (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the dump (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Automatic deletion date of the dump (wire: deletionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="orphan" /></td>
    <td><code>boolean</code></td>
    <td>Dump orphan flag (true if database does not exists)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Dump URL access</td>
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
    <td><a href="#parameter-dump_id"><code>dump_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the database name, creation date, automatic deletion date and download URL of the dump, and whether it is orphan.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-orphan"><code>orphan</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the dumps of all databases of the service, including orphan dumps whose database no longer exists.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dump_id"><code>dump_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the dump before its automatic deletion date. Returns a task to follow the deletion.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dumpId"><code>dumpId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Restores the dump into the given database, which can differ from the database it was taken from. By default, the database is flushed before the restore.</td>
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
<tr id="parameter-dumpId">
    <td><CopyableCode code="dumpId" /></td>
    <td><code>integer</code></td>
    <td>Dump ID</td>
</tr>
<tr id="parameter-dump_id">
    <td><CopyableCode code="dump_id" /></td>
    <td><code>integer</code></td>
    <td>Dump ID (wire: dumpId)</td>
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
<tr id="parameter-database_name">
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of databaseName property (like) (wire: databaseName)</td>
</tr>
<tr id="parameter-orphan">
    <td><CopyableCode code="orphan" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of orphan property (=)</td>
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

Returns the database name, creation date, automatic deletion date and download URL of the dump, and whether it is orphan.

```sql
SELECT
dump_id,
database_name,
creation_date,
deletion_date,
orphan,
url
FROM ovh.hosting_private_database.dumps
WHERE dump_id = '{{ dump_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the dumps of all databases of the service, including orphan dumps whose database no longer exists.

```sql
SELECT
dump_id,
database_name,
creation_date,
deletion_date,
orphan,
url
FROM ovh.hosting_private_database.dumps
WHERE service_name = '{{ service_name }}' -- required
AND database_name = '{{ database_name }}'
AND orphan = '{{ orphan }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
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

Deletes the dump before its automatic deletion date. Returns a task to follow the deletion.

```sql
DELETE FROM ovh.hosting_private_database.dumps
WHERE dump_id = '{{ dump_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="restore">

Restores the dump into the given database, which can differ from the database it was taken from. By default, the database is flushed before the restore.

```sql
EXEC ovh.hosting_private_database.dumps.restore 
@dumpId='{{ dumpId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"databaseName": "{{ databaseName }}", 
"flushDatabase": {{ flushDatabase }}
}'
;
```
</TabItem>
</Tabs>
