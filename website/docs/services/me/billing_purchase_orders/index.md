--- 
title: billing_purchase_orders
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_purchase_orders
  - me
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

Creates, updates, deletes, gets or lists a <code>billing_purchase_orders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_purchase_orders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.billing_purchase_orders" /></td></tr>
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
    <td>Purchase Order identifier</td>
</tr>
<tr>
    <td><CopyableCode code="billing_group_id" /></td>
    <td><code>integer</code></td>
    <td>Billing Group identifier (wire: billingGroupId)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Active</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>string</code></td>
    <td>Reference</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status (CREATED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of a purchase order (PURCHASE_ORDER, REFERENCE_ORDER)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Purchase Order

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
    <td>Purchase Order identifier</td>
</tr>
<tr>
    <td><CopyableCode code="billing_group_id" /></td>
    <td><code>integer</code></td>
    <td>Billing Group identifier (wire: billingGroupId)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Active</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>string</code></td>
    <td>Reference</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status (CREATED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of a purchase order (PURCHASE_ORDER, REFERENCE_ORDER)</td>
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
    <td>Retrieve information about a purchase order (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-billing_group_id"><code>billing_group_id</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve all purchase orders (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-reference"><code>reference</code></a>, <a href="#parameter-start_date"><code>start_date</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a purchase order (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Update a purchase order (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a purchase order (Beta version)</td>
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
    <td>Id</td>
</tr>
<tr id="parameter-billing_group_id">
    <td><CopyableCode code="billing_group_id" /></td>
    <td><code>integer</code></td>
    <td>Billing Group Identifier (wire: billingGroupId)</td>
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

Retrieve information about a purchase order (Beta version)

```sql
SELECT
id,
billing_group_id,
active,
creation_date,
description,
end_date,
last_update,
reference,
start_date,
status,
type
FROM ovh.me.billing_purchase_orders
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve all purchase orders (Beta version)

```sql
SELECT
id,
billing_group_id,
active,
creation_date,
description,
end_date,
last_update,
reference,
start_date,
status,
type
FROM ovh.me.billing_purchase_orders
WHERE billing_group_id = '{{ billing_group_id }}'
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

Create a purchase order (Beta version)

```sql
INSERT INTO ovh.me.billing_purchase_orders (
active,
billing_group_id,
description,
end_date,
reference,
start_date,
type
)
SELECT 
{{ active }},
{{ billing_group_id }},
'{{ description }}',
'{{ end_date }}',
'{{ reference }}' /* required */,
'{{ start_date }}' /* required */,
'{{ type }}' /* required */
RETURNING
id,
billing_group_id,
active,
creation_date,
description,
end_date,
last_update,
reference,
start_date,
status,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: billing_purchase_orders
  props:
    - name: active
      value: {{ active }}
      description: |
        Active
    - name: billing_group_id
      value: {{ billing_group_id }}
      description: |
        Billing Group identifier
    - name: description
      value: "{{ description }}"
      description: |
        Description
    - name: end_date
      value: "{{ end_date }}"
      description: |
        End date
    - name: reference
      value: "{{ reference }}"
      description: |
        Reference
    - name: start_date
      value: "{{ start_date }}"
      description: |
        Start date
    - name: type
      value: "{{ type }}"
      description: |
        Type of a purchase order
      valid_values: ['PURCHASE_ORDER', 'REFERENCE_ORDER']
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

Update a purchase order (Beta version)

```sql
UPDATE ovh.me.billing_purchase_orders
SET 
active = {{ active }},
billing_group_id = {{ billing_group_id }},
description = '{{ description }}',
end_date = '{{ end_date }}',
reference = '{{ reference }}',
start_date = '{{ start_date }}',
type = '{{ type }}'
WHERE 
id = '{{ id }}' --required;
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

Delete a purchase order (Beta version)

```sql
DELETE FROM ovh.me.billing_purchase_orders
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
