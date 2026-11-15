--- 
title: procedures
hide_title: false
hide_table_of_contents: false
keywords:
  - procedures
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

Creates, updates, deletes, gets or lists a <code>procedures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="procedures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.procedures" /></td></tr>
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
    <td>Procedure ID</td>
</tr>
<tr>
    <td><CopyableCode code="finish_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date at which the procedure was closed. (wire: finishDate)</td>
</tr>
<tr>
    <td><CopyableCode code="pdf_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the procedure document. (wire: pdfUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="request_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date at which the procedure was opened. (wire: requestDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the procedure. (cancelled, doing, done, todo, waiting_for_customer)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Procedure linked to your account

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
    <td>Procedure ID</td>
</tr>
<tr>
    <td><CopyableCode code="finish_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date at which the procedure was closed. (wire: finishDate)</td>
</tr>
<tr>
    <td><CopyableCode code="pdf_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the procedure document. (wire: pdfUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="request_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date at which the procedure was opened. (wire: requestDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the procedure. (cancelled, doing, done, todo, waiting_for_customer)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a procedure</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List procedures (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a procedure (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Cancel a procedure</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Procedure ID</td>
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

Get a procedure

```sql
SELECT
id,
finish_date,
pdf_url,
request_date,
status
FROM ovh.telephony.procedures
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List procedures (Deprecated, will be removed)

```sql
SELECT
id,
finish_date,
pdf_url,
request_date,
status
FROM ovh.telephony.procedures
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a procedure (Deprecated, will be removed)

```sql
INSERT INTO ovh.telephony.procedures (
bic,
iban,
owner_address,
owner_name,
payment_mean_id
)
SELECT 
'{{ bic }}',
'{{ iban }}',
'{{ owner_address }}',
'{{ owner_name }}',
{{ payment_mean_id }}
RETURNING
id,
finish_date,
pdf_url,
request_date,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: procedures
  props:
    - name: bic
      value: "{{ bic }}"
      description: |
        Account's BIC
    - name: iban
      value: "{{ iban }}"
      description: |
        Account's IBAN
    - name: owner_address
      value: "{{ owner_address }}"
      description: |
        Account owner's address
    - name: owner_name
      value: "{{ owner_name }}"
      description: |
        Account owner's name
    - name: payment_mean_id
      value: {{ payment_mean_id }}
      description: |
        The ID of your registered SEPA account payment mean.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancel a procedure

```sql
EXEC ovh.telephony.procedures.cancel 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
