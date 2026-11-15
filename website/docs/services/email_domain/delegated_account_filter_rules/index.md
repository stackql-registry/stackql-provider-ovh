--- 
title: delegated_account_filter_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_account_filter_rules
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

Creates, updates, deletes, gets or lists a <code>delegated_account_filter_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegated_account_filter_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.delegated_account_filter_rules" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="header" /></td>
    <td><code>string</code></td>
    <td>Header to be filtered</td>
</tr>
<tr>
    <td><CopyableCode code="operand" /></td>
    <td><code>string</code></td>
    <td>Rule of filter (checkspf, contains, noContains)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Rule parameter of filter</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Rule List

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="header" /></td>
    <td><code>string</code></td>
    <td>Header to be filtered</td>
</tr>
<tr>
    <td><CopyableCode code="operand" /></td>
    <td><code>string</code></td>
    <td>Rule of filter (checkspf, contains, noContains)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Rule parameter of filter</td>
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
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Get a filter rule. Returns the header, the operand (checkspf, contains or noContains) and the value of the rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List filter rules. Returns the IDs of the rules of the filter. Get one to read the header it checks, its operand and its value.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-header"><code>header</code></a>, <a href="#parameter-operand"><code>operand</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Create a filter rule. Adds a rule to the filter on a `header`, with an `operand` (checkspf, contains or noContains) and a `value`, and returns the task.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Delete a filter rule. Removes the rule from the filter and returns the tasks. The filter keeps applying its other rules.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td></td>
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

Get a filter rule. Returns the header, the operand (checkspf, contains or noContains) and the value of the rule.

```sql
SELECT
id,
header,
operand,
value
FROM ovh.email_domain.delegated_account_filter_rules
WHERE email = '{{ email }}' -- required
AND id = '{{ id }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List filter rules. Returns the IDs of the rules of the filter. Get one to read the header it checks, its operand and its value.

```sql
SELECT
id,
header,
operand,
value
FROM ovh.email_domain.delegated_account_filter_rules
WHERE email = '{{ email }}' -- required
AND name = '{{ name }}' -- required
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

Create a filter rule. Adds a rule to the filter on a `header`, with an `operand` (checkspf, contains or noContains) and a `value`, and returns the task.

```sql
INSERT INTO ovh.email_domain.delegated_account_filter_rules (
header,
operand,
value,
email,
name
)
SELECT 
'{{ header }}' /* required */,
'{{ operand }}' /* required */,
'{{ value }}' /* required */,
'{{ email }}',
'{{ name }}'
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
- name: delegated_account_filter_rules
  props:
    - name: email
      value: "{{ email }}"
      description: Required parameter for the delegated_account_filter_rules resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the delegated_account_filter_rules resource.
    - name: header
      value: "{{ header }}"
      description: |
        Header to be filtered
    - name: operand
      value: "{{ operand }}"
      description: |
        Rule of filter
      valid_values: ['checkspf', 'contains', 'noContains']
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

Delete a filter rule. Removes the rule from the filter and returns the tasks. The filter keeps applying its other rules.

```sql
DELETE FROM ovh.email_domain.delegated_account_filter_rules
WHERE email = '{{ email }}' --required
AND id = '{{ id }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
