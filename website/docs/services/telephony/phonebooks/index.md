--- 
title: phonebooks
hide_title: false
hide_table_of_contents: false
keywords:
  - phonebooks
  - telephony
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

Creates, updates, deletes, gets or lists a <code>phonebooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phonebooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.phonebooks" /></td></tr>
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
    <td>Phone book name</td>
</tr>
<tr>
    <td><CopyableCode code="book_key" /></td>
    <td><code>string</code></td>
    <td>Identifier of the phonebook (wire: bookKey)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Phone book on group

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
    <td>Phone book name</td>
</tr>
<tr>
    <td><CopyableCode code="book_key" /></td>
    <td><code>string</code></td>
    <td>Identifier of the phonebook (wire: bookKey)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a></td>
    <td></td>
    <td>Get a phonebook</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List phonebooks</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a phonebook</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a></td>
    <td></td>
    <td>Update a phonebook</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a></td>
    <td></td>
    <td>Delete a phonebook</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-bookKey"><code>bookKey</code></a>, <a href="#parameter-documentId"><code>documentId</code></a></td>
    <td></td>
    <td>Import contacts</td>
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
<tr id="parameter-billingAccount">
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount</td>
</tr>
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-bookKey">
    <td><CopyableCode code="bookKey" /></td>
    <td><code>string</code></td>
    <td>Identifier of the phonebook</td>
</tr>
<tr id="parameter-book_key">
    <td><CopyableCode code="book_key" /></td>
    <td><code>string</code></td>
    <td>Identifier of the phonebook (wire: bookKey)</td>
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

Get a phonebook

```sql
SELECT
name,
book_key
FROM ovh.telephony.phonebooks
WHERE billing_account = '{{ billing_account }}' -- required
AND book_key = '{{ book_key }}' -- required
;
```
</TabItem>
<TabItem value="list">

List phonebooks

```sql
SELECT
name,
book_key
FROM ovh.telephony.phonebooks
WHERE billing_account = '{{ billing_account }}' -- required
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

Create a phonebook

```sql
INSERT INTO ovh.telephony.phonebooks (
name,
billing_account
)
SELECT 
'{{ name }}' /* required */,
'{{ billing_account }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: phonebooks
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the phonebooks resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the wanted phonebook
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

Update a phonebook

```sql
UPDATE ovh.telephony.phonebooks
SET 
name = '{{ name }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND book_key = '{{ book_key }}' --required;
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

Delete a phonebook

```sql
DELETE FROM ovh.telephony.phonebooks
WHERE billing_account = '{{ billing_account }}' --required
AND book_key = '{{ book_key }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' }
    ]}
>
<TabItem value="import">

Import contacts

```sql
EXEC ovh.telephony.phonebooks.import 
@billingAccount='{{ billingAccount }}' --required, 
@bookKey='{{ bookKey }}' --required 
@@json=
'{
"documentId": "{{ documentId }}"
}'
;
```
</TabItem>
</Tabs>
