--- 
title: customer_approvals
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_approvals
  - webhosting
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

Creates, updates, deletes, gets or lists a <code>customer_approvals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="customer_approvals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.webhosting.customer_approvals" /></td></tr>
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
    <td>Unique identifier of the customer approval</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the resource the approval targets (wire: resourceId)</td>
</tr>
<tr>
    <td><CopyableCode code="approval_code" /></td>
    <td><code>string</code></td>
    <td>Code identifying the operation the customer approves (CLOUDWEB_MIGRATION) (wire: approvalCode)</td>
</tr>
<tr>
    <td><CopyableCode code="approved" /></td>
    <td><code>boolean</code></td>
    <td>Whether the customer approved the operation</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when the customer approval was registered (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Type of the resource the approval targets (WEB) (wire: resourceType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Customer approval given for an operation on a target resource

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
    <td>Unique identifier of the customer approval</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the resource the approval targets (wire: resourceId)</td>
</tr>
<tr>
    <td><CopyableCode code="approval_code" /></td>
    <td><code>string</code></td>
    <td>Code identifying the operation the customer approves (CLOUDWEB_MIGRATION) (wire: approvalCode)</td>
</tr>
<tr>
    <td><CopyableCode code="approved" /></td>
    <td><code>boolean</code></td>
    <td>Whether the customer approved the operation</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when the customer approval was registered (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Type of the resource the approval targets (WEB) (wire: resourceType)</td>
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
    <td><a href="#parameter-customer_approval_id"><code>customer_approval_id</code></a></td>
    <td></td>
    <td>Get a customer approval</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-approval_code"><code>approval_code</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a></td>
    <td>List customer approvals, optionally filtered by approval code, resource type and resource id</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-approval_code"><code>approval_code</code></a>, <a href="#parameter-approved"><code>approved</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a></td>
    <td></td>
    <td>Register a customer approval</td>
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
<tr id="parameter-customer_approval_id">
    <td><CopyableCode code="customer_approval_id" /></td>
    <td><code>integer</code></td>
    <td>Customer approval ID (wire: customerApprovalId)</td>
</tr>
<tr id="parameter-approval_code">
    <td><CopyableCode code="approval_code" /></td>
    <td><code>string</code></td>
    <td>Code identifying the operation the customer approves (wire: approvalCode)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the resource the approval targets (wire: resourceId)</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Type of the resource the approval targets (wire: resourceType)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Get a customer approval

```sql
SELECT
id,
resource_id,
approval_code,
approved,
created_at,
resource_type
FROM ovh.webhosting.customer_approvals
WHERE customer_approval_id = '{{ customer_approval_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List customer approvals, optionally filtered by approval code, resource type and resource id

```sql
SELECT
id,
resource_id,
approval_code,
approved,
created_at,
resource_type
FROM ovh.webhosting.customer_approvals
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND approval_code = '{{ approval_code }}'
AND resource_id = '{{ resource_id }}'
AND resource_type = '{{ resource_type }}'
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

Register a customer approval

```sql
INSERT INTO ovh.webhosting.customer_approvals (
approval_code,
approved,
resource_id,
resource_type
)
SELECT 
'{{ approval_code }}' /* required */,
{{ approved }} /* required */,
'{{ resource_id }}' /* required */,
'{{ resource_type }}' /* required */
RETURNING
id,
resource_id,
approval_code,
approved,
created_at,
resource_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: customer_approvals
  props:
    - name: approval_code
      value: "{{ approval_code }}"
      description: |
        Code identifying the operation the customer approves
      valid_values: ['CLOUDWEB_MIGRATION']
    - name: approved
      value: {{ approved }}
      description: |
        Whether the customer approved the operation
    - name: resource_id
      value: "{{ resource_id }}"
      description: |
        Identifier of the resource the approval targets
    - name: resource_type
      value: "{{ resource_type }}"
      description: |
        Type of the resource the approval targets
      valid_values: ['WEB']
`}</CodeBlock>

</TabItem>
</Tabs>
