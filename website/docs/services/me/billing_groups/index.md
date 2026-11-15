--- 
title: billing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_groups
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

Creates, updates, deletes, gets or lists a <code>billing_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.billing_groups" /></td></tr>
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
    <td>Billing group unique name</td>
</tr>
<tr>
    <td><CopyableCode code="contact_id" /></td>
    <td><code>integer</code></td>
    <td>Contact ID from /me/contact (wire: contactId)</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>integer</code></td>
    <td>Billing group ID (wire: groupId)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Payment method ID associated to the billing group (wire: paymentMethodId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Missing description

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
    <td>Billing group unique name</td>
</tr>
<tr>
    <td><CopyableCode code="contact_id" /></td>
    <td><code>integer</code></td>
    <td>Contact ID from /me/contact (wire: contactId)</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>integer</code></td>
    <td>Billing group ID (wire: groupId)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Payment method ID associated to the billing group (wire: paymentMethodId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
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
    <td><a href="#parameter-group_id"><code>group_id</code></a></td>
    <td></td>
    <td>Retrieve information about a billing group (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve all billing groups (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new billing group (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a></td>
    <td></td>
    <td>Edit billing group (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a></td>
    <td></td>
    <td>Delete a billing group (Beta version)</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>integer</code></td>
    <td>Group ID (wire: groupId)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter by name</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Filter by Service ID (wire: serviceId)</td>
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

Retrieve information about a billing group (Beta version)

```sql
SELECT
name,
contact_id,
group_id,
payment_method_id,
creation_date,
last_update
FROM ovh.me.billing_groups
WHERE group_id = '{{ group_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve all billing groups (Beta version)

```sql
SELECT
name,
contact_id,
group_id,
payment_method_id,
creation_date,
last_update
FROM ovh.me.billing_groups
WHERE name = '{{ name }}'
AND service_id = '{{ service_id }}'
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

Create a new billing group (Beta version)

```sql
INSERT INTO ovh.me.billing_groups (
contact_id,
name,
payment_method_id
)
SELECT 
{{ contact_id }},
'{{ name }}',
{{ payment_method_id }}
RETURNING
name,
contact_id,
group_id,
payment_method_id,
creation_date,
last_update
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: billing_groups
  props:
    - name: contact_id
      value: {{ contact_id }}
      description: |
        Contact ID from /me/contact
    - name: name
      value: "{{ name }}"
      description: |
        Billing group unique name
    - name: payment_method_id
      value: {{ payment_method_id }}
      description: |
        Payment method ID associated to the billing group
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

Edit billing group (Beta version)

```sql
UPDATE ovh.me.billing_groups
SET 
contact_id = {{ contact_id }},
name = '{{ name }}',
payment_method_id = {{ payment_method_id }}
WHERE 
group_id = '{{ group_id }}' --required;
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

Delete a billing group (Beta version)

```sql
DELETE FROM ovh.me.billing_groups
WHERE group_id = '{{ group_id }}' --required
;
```
</TabItem>
</Tabs>
