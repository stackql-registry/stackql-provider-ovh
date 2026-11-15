--- 
title: email_pros
hide_title: false
hide_table_of_contents: false
keywords:
  - email_pros
  - xdsl
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

Creates, updates, deletes, gets or lists an <code>email_pros</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_pros" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.email_pros" /></td></tr>
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
    <td>Account id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending tasks for this account (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Account display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Account first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Account last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="current_usage" /></td>
    <td><code>object</code></td>
    <td>Mailbox usage (wire: currentUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Email domain</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="initial" /></td>
    <td><code>string</code></td>
    <td>Account initials</td>
</tr>
<tr>
    <td><CopyableCode code="last_logoff_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logoff (wire: lastLogoffDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_logon_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logon (wire: lastLogonDate)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Account login</td>
</tr>
<tr>
    <td><CopyableCode code="password_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of account's password last update (wire: passwordLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>Account maximum size</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Account state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

XDSL Email Pro

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
    <td>Account id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending tasks for this account (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Account display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Account first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Account last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="current_usage" /></td>
    <td><code>object</code></td>
    <td>Mailbox usage (wire: currentUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Email domain</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="initial" /></td>
    <td><code>string</code></td>
    <td>Account initials</td>
</tr>
<tr>
    <td><CopyableCode code="last_logoff_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logoff (wire: lastLogoffDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_logon_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logon (wire: lastLogonDate)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Account login</td>
</tr>
<tr>
    <td><CopyableCode code="password_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of account's password last update (wire: passwordLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>Account maximum size</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Account state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
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
    <td>Returns the login, names, primary address, quota and usage, state and last logon and logoff dates of an Email Pro account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the email addresses of the Email Pro accounts provided with the xDSL accesses.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Changes the first name, last name, initials and display name of the Email Pro account.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Deletes the Email Pro account and its mailbox.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Sets a new password for the Email Pro account. Returns the task that performs the change.</td>
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
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Returns the login, names, primary address, quota and usage, state and last logon and logoff dates of an Email Pro account.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
current_usage,
domain,
iam,
initial,
last_logoff_date,
last_logon_date,
login,
password_last_update,
primary_email_address,
quota,
state
FROM ovh.xdsl.email_pros
WHERE email = '{{ email }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the email addresses of the Email Pro accounts provided with the xDSL accesses.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
current_usage,
domain,
iam,
initial,
last_logoff_date,
last_logon_date,
login,
password_last_update,
primary_email_address,
quota,
state
FROM ovh.xdsl.email_pros
WHERE iam_tags = '{{ iam_tags }}'
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

Changes the first name, last name, initials and display name of the Email Pro account.

```sql
UPDATE ovh.xdsl.email_pros
SET 
display_name = '{{ display_name }}',
first_name = '{{ first_name }}',
initial = '{{ initial }}',
last_name = '{{ last_name }}'
WHERE 
email = '{{ email }}' --required;
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

Deletes the Email Pro account and its mailbox.

```sql
DELETE FROM ovh.xdsl.email_pros
WHERE email = '{{ email }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' }
    ]}
>
<TabItem value="change_password">

Sets a new password for the Email Pro account. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.email_pros.change_password 
@email='{{ email }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
