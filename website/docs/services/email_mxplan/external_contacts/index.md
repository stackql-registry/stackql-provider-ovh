--- 
title: external_contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - external_contacts
  - email_mxplan
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

Creates, updates, deletes, gets or lists an <code>external_contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="external_contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_mxplan.external_contacts" /></td></tr>
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
    <td>Contact id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Contact display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Contact first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Contact last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="external_email_address" /></td>
    <td><code>string</code></td>
    <td>Contact email (wire: externalEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>Hide the contact in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="initials" /></td>
    <td><code>string</code></td>
    <td>Contact initals</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Contact state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

External contact for this mxplan service

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
    <td>Contact id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Contact display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Contact first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Contact last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="external_email_address" /></td>
    <td><code>string</code></td>
    <td>Contact email (wire: externalEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>Hide the contact in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="initials" /></td>
    <td><code>string</code></td>
    <td>Contact initals</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Contact state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
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
    <td><a href="#parameter-external_email_address"><code>external_email_address</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Get an external contact. Returns the email address, names, state and Global Address List visibility of the external contact.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-external_email_address"><code>external_email_address</code></a>, <a href="#parameter-first_name"><code>first_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-last_name"><code>last_name</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List external contacts. Returns the email addresses of the external contacts of the service. Filter them by `externalEmailAddress`, `firstName`, `lastName`, `displayName` or `id`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service"><code>service</code></a>, <a href="#parameter-external_email_address"><code>external_email_address</code></a></td>
    <td></td>
    <td>Create an external contact. Creates a contact with an external email address in the service, and returns the task. Set `hiddenFromGAL` to true to hide it from the Global Address List.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-external_email_address"><code>external_email_address</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Update an external contact. Updates the email address, names, initials and Global Address List visibility of the external contact.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-external_email_address"><code>external_email_address</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Delete an external contact. Removes the external contact from the address book of the MX Plan service and returns the task.</td>
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
<tr id="parameter-external_email_address">
    <td><CopyableCode code="external_email_address" /></td>
    <td><code>string</code></td>
    <td>Contact email (wire: externalEmailAddress)</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your mxplan organization</td>
</tr>
<tr id="parameter-display_name">
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of displayName property (like) (wire: displayName)</td>
</tr>
<tr id="parameter-external_email_address">
    <td><CopyableCode code="external_email_address" /></td>
    <td><code>string</code></td>
    <td>Filter the value of externalEmailAddress property (like) (wire: externalEmailAddress)</td>
</tr>
<tr id="parameter-first_name">
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of firstName property (like) (wire: firstName)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of id property (like)</td>
</tr>
<tr id="parameter-last_name">
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of lastName property (like) (wire: lastName)</td>
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

Get an external contact. Returns the email address, names, state and Global Address List visibility of the external contact.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
creation_date,
external_email_address,
hidden_from_gal,
initials,
state
FROM ovh.email_mxplan.external_contacts
WHERE external_email_address = '{{ external_email_address }}' -- required
AND service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

List external contacts. Returns the email addresses of the external contacts of the service. Filter them by `externalEmailAddress`, `firstName`, `lastName`, `displayName` or `id`.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
creation_date,
external_email_address,
hidden_from_gal,
initials,
state
FROM ovh.email_mxplan.external_contacts
WHERE service = '{{ service }}' -- required
AND display_name = '{{ display_name }}'
AND external_email_address = '{{ external_email_address }}'
AND first_name = '{{ first_name }}'
AND id = '{{ id }}'
AND last_name = '{{ last_name }}'
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

Create an external contact. Creates a contact with an external email address in the service, and returns the task. Set `hiddenFromGAL` to true to hide it from the Global Address List.

```sql
INSERT INTO ovh.email_mxplan.external_contacts (
display_name,
external_email_address,
first_name,
hidden_from_gal,
initials,
last_name,
service
)
SELECT 
'{{ display_name }}',
'{{ external_email_address }}' /* required */,
'{{ first_name }}',
{{ hidden_from_gal }},
'{{ initials }}',
'{{ last_name }}',
'{{ service }}'
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
- name: external_contacts
  props:
    - name: service
      value: "{{ service }}"
      description: Required parameter for the external_contacts resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Contact display name
    - name: external_email_address
      value: "{{ external_email_address }}"
      description: |
        Contact email address
    - name: first_name
      value: "{{ first_name }}"
      description: |
        Contact first name
    - name: hidden_from_gal
      value: {{ hidden_from_gal }}
      description: |
        Hide the contact in Global Address List
    - name: initials
      value: "{{ initials }}"
      description: |
        Contact initials
    - name: last_name
      value: "{{ last_name }}"
      description: |
        Contact last name
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

Update an external contact. Updates the email address, names, initials and Global Address List visibility of the external contact.

```sql
UPDATE ovh.email_mxplan.external_contacts
SET 
display_name = '{{ display_name }}',
external_email_address = '{{ external_email_address }}',
first_name = '{{ first_name }}',
hidden_from_gal = {{ hidden_from_gal }},
initials = '{{ initials }}',
last_name = '{{ last_name }}'
WHERE 
external_email_address = '{{ external_email_address }}' --required
AND service = '{{ service }}' --required;
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

Delete an external contact. Removes the external contact from the address book of the MX Plan service and returns the task.

```sql
DELETE FROM ovh.email_mxplan.external_contacts
WHERE external_email_address = '{{ external_email_address }}' --required
AND service = '{{ service }}' --required
;
```
</TabItem>
</Tabs>
