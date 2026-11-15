--- 
title: senders_documents
hide_title: false
hide_table_of_contents: false
keywords:
  - senders_documents
  - sms
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

Creates, updates, deletes, gets or lists a <code>senders_documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="senders_documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.senders_documents" /></td></tr>
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
    <td>Document name</td>
</tr>
<tr>
    <td><CopyableCode code="document_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Document ID (wire: documentID)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Document description</td>
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

SMS senders' document

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
    <td>Document name</td>
</tr>
<tr>
    <td><CopyableCode code="document_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Document ID (wire: documentID)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Document description</td>
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
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a validation document. Returns the validation document: name, description, size, creation date and the URL to download it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List validation documents. Returns the identifiers of the documents sent to validate the sender. Get a validation document for its name, size and download URL.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a validation document. Creates an empty validation document with a name and a description. Returns the URL to upload the file.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a validation document. Updates the name and the description of the validation document. The file itself is uploaded with the URL given at creation.</td>
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
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Document ID (wire: documentID)</td>
</tr>
<tr id="parameter-sender">
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>The sms sender</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Get a validation document. Returns the validation document: name, description, size, creation date and the URL to download it.

```sql
SELECT
name,
document_id,
created_at,
description,
get_url,
put_url,
size
FROM ovh.sms.senders_documents
WHERE document_id = '{{ document_id }}' -- required
AND sender = '{{ sender }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List validation documents. Returns the identifiers of the documents sent to validate the sender. Get a validation document for its name, size and download URL.

```sql
SELECT
name,
document_id,
created_at,
description,
get_url,
put_url,
size
FROM ovh.sms.senders_documents
WHERE sender = '{{ sender }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Create a validation document. Creates an empty validation document with a name and a description. Returns the URL to upload the file.

```sql
INSERT INTO ovh.sms.senders_documents (
description,
name,
sender,
service_name
)
SELECT 
'{{ description }}',
'{{ name }}' /* required */,
'{{ sender }}',
'{{ service_name }}'
RETURNING
name,
document_id,
created_at,
description,
get_url,
put_url,
size
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: senders_documents
  props:
    - name: sender
      value: "{{ sender }}"
      description: Required parameter for the senders_documents resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the senders_documents resource.
    - name: description
      value: "{{ description }}"
      description: |
        Document description
    - name: name
      value: "{{ name }}"
      description: |
        Document name
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

Update a validation document. Updates the name and the description of the validation document. The file itself is uploaded with the URL given at creation.

```sql
UPDATE ovh.sms.senders_documents
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
document_id = '{{ document_id }}' --required
AND sender = '{{ sender }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
