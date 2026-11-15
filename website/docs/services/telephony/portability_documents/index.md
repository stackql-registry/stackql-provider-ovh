--- 
title: portability_documents
hide_title: false
hide_table_of_contents: false
keywords:
  - portability_documents
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

Creates, updates, deletes, gets or lists a <code>portability_documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portability_documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.portability_documents" /></td></tr>
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
    <td>Name of the document</td>
</tr>
<tr>
    <td><CopyableCode code="document_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the document (wire: documentId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the document</td>
</tr>
<tr>
    <td><CopyableCode code="get_url" /></td>
    <td><code>string</code></td>
    <td>URL to get document (wire: getUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="put_url" /></td>
    <td><code>string</code></td>
    <td>URL to upload document (wire: putUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Document size (in bytes)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Document linked to a portability

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
    <td>Name of the document</td>
</tr>
<tr>
    <td><CopyableCode code="document_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the document (wire: documentId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the document</td>
</tr>
<tr>
    <td><CopyableCode code="get_url" /></td>
    <td><code>string</code></td>
    <td>URL to get document (wire: getUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="put_url" /></td>
    <td><code>string</code></td>
    <td>URL to upload document (wire: putUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Document size (in bytes)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a porting document</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List porting documents</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a porting document</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Update a porting document</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a porting document</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the document (wire: documentId)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the portability</td>
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

Get a porting document

```sql
SELECT
name,
document_id,
description,
get_url,
put_url,
size
FROM ovh.telephony.portability_documents
WHERE billing_account = '{{ billing_account }}' -- required
AND document_id = '{{ document_id }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List porting documents

```sql
SELECT
name,
document_id,
description,
get_url,
put_url,
size
FROM ovh.telephony.portability_documents
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
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

Create a porting document

```sql
INSERT INTO ovh.telephony.portability_documents (
description,
name,
billing_account,
id
)
SELECT 
'{{ description }}',
'{{ name }}' /* required */,
'{{ billing_account }}',
'{{ id }}'
RETURNING
name,
document_id,
description,
get_url,
put_url,
size
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: portability_documents
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the portability_documents resource.
    - name: id
      value: {{ id }}
      description: Required parameter for the portability_documents resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the document
    - name: name
      value: "{{ name }}"
      description: |
        Document's name
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

Update a porting document

```sql
UPDATE ovh.telephony.portability_documents
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND document_id = '{{ document_id }}' --required
AND id = '{{ id }}' --required;
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

Delete a porting document

```sql
DELETE FROM ovh.telephony.portability_documents
WHERE billing_account = '{{ billing_account }}' --required
AND document_id = '{{ document_id }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
