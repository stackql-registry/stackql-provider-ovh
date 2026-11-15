--- 
title: splas
hide_title: false
hide_table_of_contents: false
keywords:
  - splas
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>splas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="splas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.splas" /></td></tr>
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
    <td>License id</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update timestamp (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td>License serial number (wire: serialNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of license (terminated, used, waitingToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>License type (os, sqlstd, sqlweb)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

SPLA licenses management

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
    <td>License id</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update timestamp (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td>License serial number (wire: serialNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of license (terminated, used, waitingToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>License type (os, sqlstd, sqlweb)</td>
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
    <td>Get an SPLA license. Returns an SPLA license attached to the server: its serial number, type, status and last update date. The status is waitingToCheck, used or terminated.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List SPLA licenses. Returns the IDs of your own SPLA licenses attached to the server. The list can be filtered by status and by license type.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-serial_number"><code>serial_number</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Add an SPLA license. Attaches an SPLA license to the server from its serial number and its type: os, sqlstd or sqlweb. Returns the ID of the new license.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an SPLA license. Updates the serial number of an SPLA license. The serial number is the only writable field of the license.</td>
</tr>
<tr>
    <td><a href="#revoke"><CopyableCode code="revoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Revoke an SPLA license. Revokes an SPLA license attached to the server, identified by its license ID. The call returns no content.</td>
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
    <td>License id</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the value of status property (=)</td>
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

Get an SPLA license. Returns an SPLA license attached to the server: its serial number, type, status and last update date. The status is waitingToCheck, used or terminated.

```sql
SELECT
id,
last_update,
serial_number,
status,
type
FROM ovh.dedicated_server.splas
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List SPLA licenses. Returns the IDs of your own SPLA licenses attached to the server. The list can be filtered by status and by license type.

```sql
SELECT
id,
last_update,
serial_number,
status,
type
FROM ovh.dedicated_server.splas
WHERE service_name = '{{ service_name }}' -- required
AND status = '{{ status }}'
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

Add an SPLA license. Attaches an SPLA license to the server from its serial number and its type: os, sqlstd or sqlweb. Returns the ID of the new license.

```sql
INSERT INTO ovh.dedicated_server.splas (
serial_number,
type,
service_name
)
SELECT 
'{{ serial_number }}' /* required */,
'{{ type }}' /* required */,
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: splas
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the splas resource.
    - name: serial_number
      value: "{{ serial_number }}"
      description: |
        License serial number
    - name: type
      value: "{{ type }}"
      description: |
        SPLA license type
      valid_values: ['os', 'sqlstd', 'sqlweb']
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

Update an SPLA license. Updates the serial number of an SPLA license. The serial number is the only writable field of the license.

```sql
UPDATE ovh.dedicated_server.splas
SET 
serial_number = '{{ serial_number }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="revoke"
    values={[
        { label: 'revoke', value: 'revoke' }
    ]}
>
<TabItem value="revoke">

Revoke an SPLA license. Revokes an SPLA license attached to the server, identified by its license ID. The call returns no content.

```sql
EXEC ovh.dedicated_server.splas.revoke 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
