--- 
title: account_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - account_aliases
  - email_pro
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

Creates, updates, deletes, gets or lists an <code>account_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_pro.account_aliases" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Alias</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Aliases on this mailbox

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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Alias</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
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
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Returns the alias address, its creation date and the ID of its pending task, if any (`taskPendingId`). (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the aliases of the email account: extra addresses that deliver to the same mailbox. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-alias"><code>alias</code></a></td>
    <td></td>
    <td>Create an account alias. Adds the `alias` address to the email account, so that it receives its emails, and returns the task.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Delete an account alias. Removes the alias address from the email account, which no longer receives its emails, and returns the task.</td>
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
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Alias</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pro organization</td>
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

Returns the alias address, its creation date and the ID of its pending task, if any (`taskPendingId`). (Alpha version)

```sql
SELECT
task_pending_id,
alias,
creation_date
FROM ovh.email_pro.account_aliases
WHERE alias = '{{ alias }}' -- required
AND email = '{{ email }}' -- required
AND service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the aliases of the email account: extra addresses that deliver to the same mailbox. (Alpha version)

```sql
SELECT
task_pending_id,
alias,
creation_date
FROM ovh.email_pro.account_aliases
WHERE email = '{{ email }}' -- required
AND service = '{{ service }}' -- required
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

Create an account alias. Adds the `alias` address to the email account, so that it receives its emails, and returns the task.

```sql
INSERT INTO ovh.email_pro.account_aliases (
alias,
email,
service
)
SELECT 
'{{ alias }}' /* required */,
'{{ email }}',
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
- name: account_aliases
  props:
    - name: email
      value: "{{ email }}"
      description: Required parameter for the account_aliases resource.
    - name: service
      value: "{{ service }}"
      description: Required parameter for the account_aliases resource.
    - name: alias
      value: "{{ alias }}"
      description: |
        Alias
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

Delete an account alias. Removes the alias address from the email account, which no longer receives its emails, and returns the task.

```sql
DELETE FROM ovh.email_pro.account_aliases
WHERE alias = '{{ alias }}' --required
AND email = '{{ email }}' --required
AND service = '{{ service }}' --required
;
```
</TabItem>
</Tabs>
