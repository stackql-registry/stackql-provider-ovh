--- 
title: database_dumps
hide_title: false
hide_table_of_contents: false
keywords:
  - database_dumps
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

Creates, updates, deletes, gets or lists a <code>database_dumps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="database_dumps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.database_dumps" /></td></tr>
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
    <td>Dump id</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this dump (wire: taskId)</td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The dump status (created, creating, deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Dump type (daily.1, now, weekly.1)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Dump url access</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Dump

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
    <td>Dump id</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this dump (wire: taskId)</td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The dump status (created, creating, deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Dump type (daily.1, now, weekly.1)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Dump url access</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a database dump. Returns the status, type, download URL and automatic deletion date of the dump. The type tells whether it comes from the current database or from a daily or weekly backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-creation_date.from"><code>creation_date.from</code></a>, <a href="#parameter-creation_date.to"><code>creation_date.to</code></a>, <a href="#parameter-deletion_date.from"><code>deletion_date.from</code></a>, <a href="#parameter-deletion_date.to"><code>deletion_date.to</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List database dumps. Returns the IDs of the dumps of the database. Filter them by creation or deletion date.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-date"><code>date</code></a></td>
    <td></td>
    <td>Create a database dump. Creates a dump of the current database or of a daily or weekly backup, and returns the task. An email is sent when the dump is ready, unless sendEmail is false.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a database dump. Deletes the dump before its automatic deletion date and returns the task. Otherwise, the dump is deleted on that date.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Restore a database dump. Restores the dump into the database and returns the task. The current content of the database is replaced by the dump.</td>
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
    <td>Dump id</td>
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
<tr id="parameter-creation_date.from">
    <td><CopyableCode code="creation_date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDate property (&gt;=) (wire: creationDate.from)</td>
</tr>
<tr id="parameter-creation_date.to">
    <td><CopyableCode code="creation_date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDate property (&lt;=) (wire: creationDate.to)</td>
</tr>
<tr id="parameter-deletion_date.from">
    <td><CopyableCode code="deletion_date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of deletionDate property (&gt;=) (wire: deletionDate.from)</td>
</tr>
<tr id="parameter-deletion_date.to">
    <td><CopyableCode code="deletion_date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of deletionDate property (&lt;=) (wire: deletionDate.to)</td>
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

Get a database dump. Returns the status, type, download URL and automatic deletion date of the dump. The type tells whether it comes from the current database or from a daily or weekly backup.

```sql
SELECT
id,
task_id,
creation_date,
deletion_date,
status,
type,
url
FROM ovh.hosting_web.database_dumps
WHERE id = '{{ id }}' -- required
AND name = '{{ name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List database dumps. Returns the IDs of the dumps of the database. Filter them by creation or deletion date.

```sql
SELECT
id,
task_id,
creation_date,
deletion_date,
status,
type,
url
FROM ovh.hosting_web.database_dumps
WHERE name = '{{ name }}' -- required
AND service_name = '{{ service_name }}' -- required
AND creation_date.from = '{{ creation_date.from }}'
AND creation_date.to = '{{ creation_date.to }}'
AND deletion_date.from = '{{ deletion_date.from }}'
AND deletion_date.to = '{{ deletion_date.to }}'
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

Create a database dump. Creates a dump of the current database or of a daily or weekly backup, and returns the task. An email is sent when the dump is ready, unless sendEmail is false.

```sql
INSERT INTO ovh.hosting_web.database_dumps (
date,
send_email,
name,
service_name
)
SELECT 
'{{ date }}' /* required */,
{{ send_email }},
'{{ name }}',
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
- name: database_dumps
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the database_dumps resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the database_dumps resource.
    - name: date
      value: "{{ date }}"
      description: |
        List of dump types
      valid_values: ['daily.1', 'now', 'weekly.1']
    - name: send_email
      value: {{ send_email }}
      description: |
        Send an email when dump will be available? Default: true
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

Delete a database dump. Deletes the dump before its automatic deletion date and returns the task. Otherwise, the dump is deleted on that date.

```sql
DELETE FROM ovh.hosting_web.database_dumps
WHERE id = '{{ id }}' --required
AND name = '{{ name }}' --required
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

Restore a database dump. Restores the dump into the database and returns the task. The current content of the database is replaced by the dump.

```sql
EXEC ovh.hosting_web.database_dumps.restore 
@id='{{ id }}' --required, 
@name='{{ name }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
