--- 
title: service_custom_isolations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_custom_isolations
  - email_exchange
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

Creates, updates, deletes, gets or lists a <code>service_custom_isolations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_custom_isolations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_custom_isolations" /></td></tr>
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
    <td>Name of the custom isolation</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="isolation_field" /></td>
    <td><code>string</code></td>
    <td>Field used for isolation (company, country) (wire: isolationField)</td>
</tr>
<tr>
    <td><CopyableCode code="isolation_value" /></td>
    <td><code>string</code></td>
    <td>Isolation field value (wire: isolationValue)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Custom isolation status (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

custom exchange isolation

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
    <td>Name of the custom isolation</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="isolation_field" /></td>
    <td><code>string</code></td>
    <td>Field used for isolation (company, country) (wire: isolationField)</td>
</tr>
<tr>
    <td><CopyableCode code="isolation_value" /></td>
    <td><code>string</code></td>
    <td>Isolation field value (wire: isolationValue)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Custom isolation status (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get a custom isolation. Returns the name of the custom isolation, the field and value it isolates on, its status and creation date.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-isolation_field"><code>isolation_field</code></a>, <a href="#parameter-isolation_value"><code>isolation_value</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List custom isolations. Returns the names of the custom isolations. Filter them by `name`, `isolationField` or `isolationValue`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-isolation_field"><code>isolation_field</code></a>, <a href="#parameter-isolation_value"><code>isolation_value</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a custom isolation. Creates a custom isolation from a `name`, an `isolationField` (company or country) and an `isolationValue`, and returns the task.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Delete a custom isolation. Removes the custom isolation from the Exchange service, so that its field no longer isolates users, and returns the task.</td>
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
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the custom isolation</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-isolation_field">
    <td><CopyableCode code="isolation_field" /></td>
    <td><code>string</code></td>
    <td>Filter the value of isolationField property (=) (wire: isolationField)</td>
</tr>
<tr id="parameter-isolation_value">
    <td><CopyableCode code="isolation_value" /></td>
    <td><code>string</code></td>
    <td>Filter the value of isolationValue property (like) (wire: isolationValue)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of name property (like)</td>
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

Get a custom isolation. Returns the name of the custom isolation, the field and value it isolates on, its status and creation date.

```sql
SELECT
name,
creation_date,
isolation_field,
isolation_value,
status
FROM ovh.email_exchange.service_custom_isolations
WHERE exchange_service = '{{ exchange_service }}' -- required
AND name = '{{ name }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List custom isolations. Returns the names of the custom isolations. Filter them by `name`, `isolationField` or `isolationValue`.

```sql
SELECT
name,
creation_date,
isolation_field,
isolation_value,
status
FROM ovh.email_exchange.service_custom_isolations
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND isolation_field = '{{ isolation_field }}'
AND isolation_value = '{{ isolation_value }}'
AND name = '{{ name }}'
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

Create a custom isolation. Creates a custom isolation from a `name`, an `isolationField` (company or country) and an `isolationValue`, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_custom_isolations (
isolation_field,
isolation_value,
name,
exchange_service,
organization_name
)
SELECT 
'{{ isolation_field }}' /* required */,
'{{ isolation_value }}' /* required */,
'{{ name }}' /* required */,
'{{ exchange_service }}',
'{{ organization_name }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_custom_isolations
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_custom_isolations resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_custom_isolations resource.
    - name: isolation_field
      value: "{{ isolation_field }}"
      description: |
        custom exchange isolation field
      valid_values: ['company', 'country']
    - name: isolation_value
      value: "{{ isolation_value }}"
      description: |
        value used for isolation
    - name: name
      value: "{{ name }}"
      description: |
        display name of isolation
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

Delete a custom isolation. Removes the custom isolation from the Exchange service, so that its field no longer isolates users, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_custom_isolations
WHERE exchange_service = '{{ exchange_service }}' --required
AND name = '{{ name }}' --required
AND organization_name = '{{ organization_name }}' --required
;
```
</TabItem>
</Tabs>
