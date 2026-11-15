--- 
title: account_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - account_filters
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

Creates, updates, deletes, gets or lists an <code>account_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.account_filters" /></td></tr>
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
    <td>Filter name</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action of filter (accept, account, delete, redirect)</td>
</tr>
<tr>
    <td><CopyableCode code="action_param" /></td>
    <td><code>string</code></td>
    <td>Action parameter of filter (wire: actionParam)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>If true filter is active</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain name of filter</td>
</tr>
<tr>
    <td><CopyableCode code="pop" /></td>
    <td><code>string</code></td>
    <td>Account name of filter</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>Priority of filter</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Filter List

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
    <td>Filter name</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action of filter (accept, account, delete, redirect)</td>
</tr>
<tr>
    <td><CopyableCode code="action_param" /></td>
    <td><code>string</code></td>
    <td>Action parameter of filter (wire: actionParam)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>If true filter is active</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain name of filter</td>
</tr>
<tr>
    <td><CopyableCode code="pop" /></td>
    <td><code>string</code></td>
    <td>Account name of filter</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>Priority of filter</td>
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
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Get a filter. Returns the account, priority, active state, action (accept, account, delete or redirect) and action parameter of the filter.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List filters. Returns the names of the filters of the email account. Get one to read its action, its priority and whether it is active.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-active"><code>active</code></a>, <a href="#parameter-header"><code>header</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-operand"><code>operand</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Create a filter. Creates a filter with a rule on a `header` (`operand` and `value`), an `action`, a `priority` and an `active` state, and returns the task.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Delete a filter. Removes the filter and its rules from the email account, and returns the tasks. Incoming emails are no longer filtered by it.</td>
</tr>
<tr>
    <td><a href="#change_activity"><CopyableCode code="change_activity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accountName"><code>accountName</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-activity"><code>activity</code></a></td>
    <td></td>
    <td>Enable or disable a filter. Set `activity` to true to apply the filter to incoming emails, or to false to suspend it.</td>
</tr>
<tr>
    <td><a href="#change_priority"><CopyableCode code="change_priority" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accountName"><code>accountName</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-priority"><code>priority</code></a></td>
    <td></td>
    <td>Change filter priority. Sets the `priority` of the filter, which gives the order the filters of the account are applied in.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter name</td>
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

Get a filter. Returns the account, priority, active state, action (accept, account, delete or redirect) and action parameter of the filter.

```sql
SELECT
name,
action,
action_param,
active,
domain,
pop,
priority
FROM ovh.email_domain.account_filters
WHERE account_name = '{{ account_name }}' -- required
AND domain = '{{ domain }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List filters. Returns the names of the filters of the email account. Get one to read its action, its priority and whether it is active.

```sql
SELECT
name,
action,
action_param,
active,
domain,
pop,
priority
FROM ovh.email_domain.account_filters
WHERE account_name = '{{ account_name }}' -- required
AND domain = '{{ domain }}' -- required
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

Create a filter. Creates a filter with a rule on a `header` (`operand` and `value`), an `action`, a `priority` and an `active` state, and returns the task.

```sql
INSERT INTO ovh.email_domain.account_filters (
action,
action_param,
active,
header,
name,
operand,
priority,
value,
account_name,
domain
)
SELECT 
'{{ action }}' /* required */,
'{{ action_param }}',
{{ active }} /* required */,
'{{ header }}' /* required */,
'{{ name }}' /* required */,
'{{ operand }}' /* required */,
{{ priority }} /* required */,
'{{ value }}' /* required */,
'{{ account_name }}',
'{{ domain }}'
RETURNING
id,
account,
action,
domain,
timestamp
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_filters
  props:
    - name: account_name
      value: "{{ account_name }}"
      description: Required parameter for the account_filters resource.
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the account_filters resource.
    - name: action
      value: "{{ action }}"
      description: |
        Action of filter
      valid_values: ['accept', 'account', 'delete', 'redirect']
    - name: action_param
      value: "{{ action_param }}"
      description: |
        Action parameter of filter
    - name: active
      value: {{ active }}
      description: |
        If true filter is active
    - name: header
      value: "{{ header }}"
      description: |
        Header to be filtered
    - name: name
      value: "{{ name }}"
      description: |
        Filter name
    - name: operand
      value: "{{ operand }}"
      description: |
        Rule of filter
      valid_values: ['checkspf', 'contains', 'noContains']
    - name: priority
      value: {{ priority }}
      description: |
        Priority of filter
    - name: value
      value: "{{ value }}"
      description: |
        Rule parameter of filter
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

Delete a filter. Removes the filter and its rules from the email account, and returns the tasks. Incoming emails are no longer filtered by it.

```sql
DELETE FROM ovh.email_domain.account_filters
WHERE account_name = '{{ account_name }}' --required
AND domain = '{{ domain }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_activity"
    values={[
        { label: 'change_activity', value: 'change_activity' },
        { label: 'change_priority', value: 'change_priority' }
    ]}
>
<TabItem value="change_activity">

Enable or disable a filter. Set `activity` to true to apply the filter to incoming emails, or to false to suspend it.

```sql
EXEC ovh.email_domain.account_filters.change_activity 
@accountName='{{ accountName }}' --required, 
@domain='{{ domain }}' --required, 
@name='{{ name }}' --required 
@@json=
'{
"activity": {{ activity }}
}'
;
```
</TabItem>
<TabItem value="change_priority">

Change filter priority. Sets the `priority` of the filter, which gives the order the filters of the account are applied in.

```sql
EXEC ovh.email_domain.account_filters.change_priority 
@accountName='{{ accountName }}' --required, 
@domain='{{ domain }}' --required, 
@name='{{ name }}' --required 
@@json=
'{
"priority": {{ priority }}
}'
;
```
</TabItem>
</Tabs>
