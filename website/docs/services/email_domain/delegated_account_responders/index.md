--- 
title: delegated_account_responders
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_account_responders
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

Creates, updates, deletes, gets or lists a <code>delegated_account_responders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegated_account_responders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.delegated_account_responders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td>If true, emails will be copy to emailToCopy address</td>
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
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Get a delegated account responder. Returns the content, the start and end dates and the copy settings of the responder of the delegated email account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-content"><code>content</code></a>, <a href="#parameter-copy"><code>copy</code></a></td>
    <td></td>
    <td>Create a delegated account responder. Creates the automatic reply of the delegated email account with its content and optional start and end dates, and returns the task. Set `copy` to true to copy the emails to `copyTo`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Update a delegated account responder. Updates the content and the start and end dates of the responder.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Delete a delegated account responder. Removes the automatic reply of the delegated email account and returns the task.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get a delegated account responder. Returns the content, the start and end dates and the copy settings of the responder of the delegated email account.

```sql
SELECT
account,
content,
copy,
copy_to,
from,
to
FROM ovh.email_domain.delegated_account_responders
WHERE email = '{{ email }}' -- required
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

Create a delegated account responder. Creates the automatic reply of the delegated email account with its content and optional start and end dates, and returns the task. Set `copy` to true to copy the emails to `copyTo`.

```sql
INSERT INTO ovh.email_domain.delegated_account_responders (
content,
copy,
copy_to,
from,
to,
email
)
SELECT 
'{{ content }}' /* required */,
{{ copy }} /* required */,
'{{ copy_to }}',
'{{ from }}',
'{{ to }}',
'{{ email }}'
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
- name: delegated_account_responders
  props:
    - name: email
      value: "{{ email }}"
      description: Required parameter for the delegated_account_responders resource.
    - name: content
      value: "{{ content }}"
      description: |
        Content of responder
    - name: copy
      value: {{ copy }}
      description: |
        If true, emails will be copy to emailToCopy address
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

Update a delegated account responder. Updates the content and the start and end dates of the responder.

```sql
UPDATE ovh.email_domain.delegated_account_responders
SET 
content = '{{ content }}',
from = '{{ from }}',
to = '{{ to }}'
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

Delete a delegated account responder. Removes the automatic reply of the delegated email account and returns the task.

```sql
DELETE FROM ovh.email_domain.delegated_account_responders
WHERE email = '{{ email }}' --required
;
```
</TabItem>
</Tabs>
