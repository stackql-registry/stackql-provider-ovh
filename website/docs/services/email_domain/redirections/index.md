--- 
title: redirections
hide_title: false
hide_table_of_contents: false
keywords:
  - redirections
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

Creates, updates, deletes, gets or lists a <code>redirections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="redirections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.redirections" /></td></tr>
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
    <td><code>string</code></td>
    <td>Id of redirection</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>Name of redirection</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td>Target of redirection</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Global Redirection

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
    <td><code>string</code></td>
    <td>Id of redirection</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>Name of redirection</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td>Target of redirection</td>
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
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Returns the ID, the source address (`from`) and the target address (`to`) of the redirection. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the redirections of the domain. Filter them by `from` or `to` address. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-local_copy"><code>local_copy</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td></td>
    <td>Creates a redirection from the `from` address to the `to` address, and returns the task. Set `localCopy` to true to keep a local copy. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Deletes the redirection and returns the task. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#change_redirection"><CopyableCode code="change_redirection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td></td>
    <td>Sets the new target address (`to`) of the redirection and returns the task. (Alpha version)</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your domain name</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>Name of redirection</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td>Email of redirection target</td>
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

Returns the ID, the source address (`from`) and the target address (`to`) of the redirection. (Alpha version)

```sql
SELECT
id,
from,
to
FROM ovh.email_domain.redirections
WHERE domain = '{{ domain }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the redirections of the domain. Filter them by `from` or `to` address. (Alpha version)

```sql
SELECT
id,
from,
to
FROM ovh.email_domain.redirections
WHERE domain = '{{ domain }}' -- required
AND from = '{{ from }}'
AND to = '{{ to }}'
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

Creates a redirection from the `from` address to the `to` address, and returns the task. Set `localCopy` to true to keep a local copy. (Alpha version)

```sql
INSERT INTO ovh.email_domain.redirections (
from,
local_copy,
to,
domain
)
SELECT 
'{{ from }}' /* required */,
{{ local_copy }} /* required */,
'{{ to }}' /* required */,
'{{ domain }}'
RETURNING
id,
account,
action,
date,
domain,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: redirections
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the redirections resource.
    - name: from
      value: "{{ from }}"
      description: |
        Name of redirection
    - name: local_copy
      value: {{ local_copy }}
      description: |
        If true keep a local copy
    - name: to
      value: "{{ to }}"
      description: |
        Target of account
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

Deletes the redirection and returns the task. (Alpha version)

```sql
DELETE FROM ovh.email_domain.redirections
WHERE domain = '{{ domain }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_redirection"
    values={[
        { label: 'change_redirection', value: 'change_redirection' }
    ]}
>
<TabItem value="change_redirection">

Sets the new target address (`to`) of the redirection and returns the task. (Alpha version)

```sql
EXEC ovh.email_domain.redirections.change_redirection 
@domain='{{ domain }}' --required, 
@id='{{ id }}' --required 
@@json=
'{
"to": "{{ to }}"
}'
;
```
</TabItem>
</Tabs>
