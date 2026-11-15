--- 
title: responders
hide_title: false
hide_table_of_contents: false
keywords:
  - responders
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

Creates, updates, deletes, gets or lists a <code>responders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="responders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.responders" /></td></tr>
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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Name of account</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Content of responder</td>
</tr>
<tr>
    <td><CopyableCode code="copy" /></td>
    <td><code>boolean</code></td>
    <td>If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address</td>
</tr>
<tr>
    <td><CopyableCode code="copy_to" /></td>
    <td><code>string</code></td>
    <td>Account where copy emails (wire: copyTo)</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of start responder</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of end responder</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Responder

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Name of account</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Content of responder</td>
</tr>
<tr>
    <td><CopyableCode code="copy" /></td>
    <td><code>boolean</code></td>
    <td>If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address</td>
</tr>
<tr>
    <td><CopyableCode code="copy_to" /></td>
    <td><code>string</code></td>
    <td>Account where copy emails (wire: copyTo)</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of start responder</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of end responder</td>
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
    <td><a href="#parameter-account"><code>account</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Get a responder. Returns the account, content, start and end dates and copy settings of the responder.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-account"><code>account</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List responders. Returns the account names of the responders of the domain. Filter them by `account`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-account"><code>account</code></a>, <a href="#parameter-content"><code>content</code></a>, <a href="#parameter-copy"><code>copy</code></a></td>
    <td></td>
    <td>Create a responder. Creates an automatic reply for an account with its content and optional start and end dates, and returns the task. With `copy` false, emails are dropped; with `copy` true, they go to the mailbox, or to `copyTo` when set.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account"><code>account</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Update a responder. Changes the `content` of the automatic reply and the dates it is active (`from`, `to`) for the email account.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account"><code>account</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Delete a responder. Removes the automatic reply of the email account and returns the task. Follow it under `task/responder/&#123;id&#125;`.</td>
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
<tr id="parameter-account">
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Name of account</td>
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
<tr id="parameter-account">
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Responder name</td>
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

Get a responder. Returns the account, content, start and end dates and copy settings of the responder.

```sql
SELECT
account,
content,
copy,
copy_to,
from,
to
FROM ovh.email_domain.responders
WHERE account = '{{ account }}' -- required
AND domain = '{{ domain }}' -- required
;
```
</TabItem>
<TabItem value="list">

List responders. Returns the account names of the responders of the domain. Filter them by `account`.

```sql
SELECT
account,
content,
copy,
copy_to,
from,
to
FROM ovh.email_domain.responders
WHERE domain = '{{ domain }}' -- required
AND account = '{{ account }}'
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

Create a responder. Creates an automatic reply for an account with its content and optional start and end dates, and returns the task. With `copy` false, emails are dropped; with `copy` true, they go to the mailbox, or to `copyTo` when set.

```sql
INSERT INTO ovh.email_domain.responders (
account,
content,
copy,
copy_to,
from,
to,
domain
)
SELECT 
'{{ account }}' /* required */,
'{{ content }}' /* required */,
{{ copy }} /* required */,
'{{ copy_to }}',
'{{ from }}',
'{{ to }}',
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
- name: responders
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the responders resource.
    - name: account
      value: "{{ account }}"
      description: |
        Account of domain
    - name: content
      value: "{{ content }}"
      description: |
        Content of responder
    - name: copy
      value: {{ copy }}
      description: |
        If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address
    - name: copy_to
      value: "{{ copy_to }}"
      description: |
        Account where copy emails
    - name: from
      value: "{{ from }}"
      description: |
        Date of start responder
    - name: to
      value: "{{ to }}"
      description: |
        Date of end responder
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

Update a responder. Changes the `content` of the automatic reply and the dates it is active (`from`, `to`) for the email account.

```sql
UPDATE ovh.email_domain.responders
SET 
content = '{{ content }}',
from = '{{ from }}',
to = '{{ to }}'
WHERE 
account = '{{ account }}' --required
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

Delete a responder. Removes the automatic reply of the email account and returns the task. Follow it under `task/responder/&#123;id&#125;`.

```sql
DELETE FROM ovh.email_domain.responders
WHERE account = '{{ account }}' --required
AND domain = '{{ domain }}' --required
;
```
</TabItem>
</Tabs>
