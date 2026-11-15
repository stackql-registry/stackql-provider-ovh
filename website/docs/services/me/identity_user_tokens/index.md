--- 
title: identity_user_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_user_tokens
  - me
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

Creates, updates, deletes, gets or lists an <code>identity_user_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_user_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.identity_user_tokens" /></td></tr>
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
    <td>Name of this token</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of this token</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Personal access token's description</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Personal access token's expiration date (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used" /></td>
    <td><code>string (date-time)</code></td>
    <td>Personal access token's last used date (wire: lastUsed)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A personal access token response

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
    <td>Name of this token</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of this token</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Personal access token's description</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Personal access token's expiration date (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used" /></td>
    <td><code>string (date-time)</code></td>
    <td>Personal access token's last used date (wire: lastUsed)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-user"><code>user</code></a></td>
    <td></td>
    <td>Get a personal access token's information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user"><code>user</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve all personal access tokens from this user</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-user"><code>user</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a new personal access token</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-user"><code>user</code></a></td>
    <td></td>
    <td>Alter a user personal acces token</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-user"><code>user</code></a></td>
    <td></td>
    <td>Delete a personal access token</td>
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
    <td>Name</td>
</tr>
<tr id="parameter-user">
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>User</td>
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

Get a personal access token's information

```sql
SELECT
name,
creation,
description,
expires_at,
last_used
FROM ovh.me.identity_user_tokens
WHERE name = '{{ name }}' -- required
AND user = '{{ user }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve all personal access tokens from this user

```sql
SELECT
name,
creation,
description,
expires_at,
last_used
FROM ovh.me.identity_user_tokens
WHERE user = '{{ user }}' -- required
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

Create a new personal access token

```sql
INSERT INTO ovh.me.identity_user_tokens (
description,
expires_at,
expires_in,
name,
user
)
SELECT 
'{{ description }}' /* required */,
'{{ expires_at }}',
{{ expires_in }},
'{{ name }}' /* required */,
'{{ user }}'
RETURNING
name,
creation,
description,
expires_at,
last_used,
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_user_tokens
  props:
    - name: user
      value: "{{ user }}"
      description: Required parameter for the identity_user_tokens resource.
    - name: description
      value: "{{ description }}"
      description: |
        Personal access token's description
    - name: expires_at
      value: "{{ expires_at }}"
      description: |
        Personal access token's expiration date
    - name: expires_in
      value: {{ expires_in }}
      description: |
        Duration (in seconds) of the token's validity
    - name: name
      value: "{{ name }}"
      description: |
        Personal access token's name
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

Alter a user personal acces token

```sql
UPDATE ovh.me.identity_user_tokens
SET 
description = '{{ description }}',
expires_at = '{{ expires_at }}',
expires_in = {{ expires_in }}
WHERE 
name = '{{ name }}' --required
AND user = '{{ user }}' --required
RETURNING
name,
creation,
description,
expires_at,
last_used;
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

Delete a personal access token

```sql
DELETE FROM ovh.me.identity_user_tokens
WHERE name = '{{ name }}' --required
AND user = '{{ user }}' --required
;
```
</TabItem>
</Tabs>
