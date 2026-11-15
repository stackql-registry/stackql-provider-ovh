--- 
title: delegated_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_accounts
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

Creates, updates, deletes, gets or lists a <code>delegated_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegated_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.delegated_accounts" /></td></tr>
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
    <td><CopyableCode code="allowed_account_size" /></td>
    <td><code>array</code></td>
    <td>List of allowed sizes for this account in bytes (wire: allowedAccountSize)</td>
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
    <td><CopyableCode code="allowed_account_size" /></td>
    <td><code>array</code></td>
    <td>List of allowed sizes for this account in bytes (wire: allowedAccountSize)</td>
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
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Get a delegated account. Returns the email address, description, size in bytes, allowed sizes and blocked state of the delegated email account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List delegated accounts. Returns the email addresses of the email accounts delegated to the customer account. Filter them by `domain` or `accountName`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Update a delegated account. Updates the description or the size in bytes of the delegated email account. The allowed sizes are in `allowedAccountSize`.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change a delegated account password. Sets a new password and returns the task. The password needs 8 to 30 characters and no accents.</td>
</tr>
<tr>
    <td><a href="#update_usage"><CopyableCode code="update_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Refresh delegated account usage. Asks for the figures returned by `usage` to be recomputed; they are updated asynchronously.</td>
</tr>
<tr>
    <td><a href="#usage"><CopyableCode code="usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Get delegated account usage. Returns the number of emails, the maximum size in bytes of the mailbox (`quota`) and the date of the measure.</td>
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
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email</td>
</tr>
<tr id="parameter-account_name">
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Name of email address (wire: accountName)</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain of email address</td>
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

Get a delegated account. Returns the email address, description, size in bytes, allowed sizes and blocked state of the delegated email account.

```sql
SELECT
account_name,
allowed_account_size,
description,
domain,
email,
is_blocked,
size
FROM ovh.email_domain.delegated_accounts
WHERE email = '{{ email }}' -- required
;
```
</TabItem>
<TabItem value="list">

List delegated accounts. Returns the email addresses of the email accounts delegated to the customer account. Filter them by `domain` or `accountName`.

```sql
SELECT
account_name,
allowed_account_size,
description,
domain,
email,
is_blocked,
size
FROM ovh.email_domain.delegated_accounts
WHERE account_name = '{{ account_name }}'
AND domain = '{{ domain }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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

Update a delegated account. Updates the description or the size in bytes of the delegated email account. The allowed sizes are in `allowedAccountSize`.

```sql
UPDATE ovh.email_domain.delegated_accounts
SET 
description = '{{ description }}',
size = {{ size }}
WHERE 
email = '{{ email }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' },
        { label: 'update_usage', value: 'update_usage' },
        { label: 'usage', value: 'usage' }
    ]}
>
<TabItem value="change_password">

Change a delegated account password. Sets a new password and returns the task. The password needs 8 to 30 characters and no accents.

```sql
EXEC ovh.email_domain.delegated_accounts.change_password 
@email='{{ email }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="update_usage">

Refresh delegated account usage. Asks for the figures returned by `usage` to be recomputed; they are updated asynchronously.

```sql
EXEC ovh.email_domain.delegated_accounts.update_usage 
@email='{{ email }}' --required
;
```
</TabItem>
<TabItem value="usage">

Get delegated account usage. Returns the number of emails, the maximum size in bytes of the mailbox (`quota`) and the date of the measure.

```sql
EXEC ovh.email_domain.delegated_accounts.usage 
@email='{{ email }}' --required
;
```
</TabItem>
</Tabs>
