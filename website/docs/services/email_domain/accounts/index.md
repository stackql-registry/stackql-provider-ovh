--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - email_domain
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.accounts" /></td></tr>
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
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Name of account (wire: accountName)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Account description</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of domain</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email</td>
</tr>
<tr>
    <td><CopyableCode code="is_blocked" /></td>
    <td><code>boolean</code></td>
    <td>If true your account is blocked (wire: isBlocked)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of your account in bytes</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Account List

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
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Name of account (wire: accountName)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Account description</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of domain</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email</td>
</tr>
<tr>
    <td><CopyableCode code="is_blocked" /></td>
    <td><code>boolean</code></td>
    <td>If true your account is blocked (wire: isBlocked)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of your account in bytes</td>
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
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Get an email account. Returns the email address, description, size in bytes and blocked state of the email account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List email accounts. Returns the names of the email accounts of the domain. Filter them by `accountName` or `description`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Create an email account. Creates an email account with a name, a password, and optionally a description and a size in bytes, and returns the task. The size is 5 GB by default; the allowed sizes are in `allowedAccountSize` of the email domain. The password needs 8 to 30 characters and no accents.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Update an email account. Updates the description or the size in bytes of the email account. The allowed sizes are in `allowedAccountSize` of the email domain.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Delete an email account. Deletes the email account of the domain and returns the task. Follow it under `task/account/&#123;id&#125;`.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accountName"><code>accountName</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change an email account password. Sets a new password and returns the task. The password needs 8 to 30 characters and no accents.</td>
</tr>
<tr>
    <td><a href="#update_usage"><CopyableCode code="update_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accountName"><code>accountName</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Refresh email account usage. Asks for the figures returned by `usage` to be recomputed; they are updated asynchronously.</td>
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
<tr id="parameter-accountName">
    <td><CopyableCode code="accountName" /></td>
    <td><code>string</code></td>
    <td>Name of account</td>
</tr>
<tr id="parameter-account_name">
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Name of account (wire: accountName)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your domain name</td>
</tr>
<tr id="parameter-account_name">
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Account name (wire: accountName)</td>
</tr>
<tr id="parameter-description">
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Account description</td>
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

Get an email account. Returns the email address, description, size in bytes and blocked state of the email account.

```sql
SELECT
account_name,
description,
domain,
email,
is_blocked,
size
FROM ovh.email_domain.accounts
WHERE account_name = '{{ account_name }}' -- required
AND domain = '{{ domain }}' -- required
;
```
</TabItem>
<TabItem value="list">

List email accounts. Returns the names of the email accounts of the domain. Filter them by `accountName` or `description`.

```sql
SELECT
account_name,
description,
domain,
email,
is_blocked,
size
FROM ovh.email_domain.accounts
WHERE domain = '{{ domain }}' -- required
AND account_name = '{{ account_name }}'
AND description = '{{ description }}'
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

Create an email account. Creates an email account with a name, a password, and optionally a description and a size in bytes, and returns the task. The size is 5 GB by default; the allowed sizes are in `allowedAccountSize` of the email domain. The password needs 8 to 30 characters and no accents.

```sql
INSERT INTO ovh.email_domain.accounts (
account_name,
description,
password,
size,
domain
)
SELECT 
'{{ account_name }}' /* required */,
'{{ description }}',
'{{ password }}' /* required */,
{{ size }},
'{{ domain }}'
RETURNING
id,
name,
action,
date,
domain
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: accounts
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the accounts resource.
    - name: account_name
      value: "{{ account_name }}"
      description: |
        Account name
    - name: description
      value: "{{ description }}"
      description: |
        Description Account
    - name: password
      value: "{{ password }}"
      description: |
        Account password
    - name: size
      value: {{ size }}
      description: |
        Account size in bytes (default : 5000000000) (possible values : /email/domain/{domain}/allowedAccountSize )
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

Update an email account. Updates the description or the size in bytes of the email account. The allowed sizes are in `allowedAccountSize` of the email domain.

```sql
UPDATE ovh.email_domain.accounts
SET 
description = '{{ description }}',
size = {{ size }}
WHERE 
account_name = '{{ account_name }}' --required
AND domain = '{{ domain }}' --required;
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

Delete an email account. Deletes the email account of the domain and returns the task. Follow it under `task/account/&#123;id&#125;`.

```sql
DELETE FROM ovh.email_domain.accounts
WHERE account_name = '{{ account_name }}' --required
AND domain = '{{ domain }}' --required
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
        { label: 'update_usage', value: 'update_usage' }
    ]}
>
<TabItem value="change_password">

Change an email account password. Sets a new password and returns the task. The password needs 8 to 30 characters and no accents.

```sql
EXEC ovh.email_domain.accounts.change_password 
@accountName='{{ accountName }}' --required, 
@domain='{{ domain }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="update_usage">

Refresh email account usage. Asks for the figures returned by `usage` to be recomputed; they are updated asynchronously.

```sql
EXEC ovh.email_domain.accounts.update_usage 
@accountName='{{ accountName }}' --required, 
@domain='{{ domain }}' --required
;
```
</TabItem>
</Tabs>
