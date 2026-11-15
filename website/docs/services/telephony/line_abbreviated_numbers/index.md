--- 
title: line_abbreviated_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - line_abbreviated_numbers
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

Creates, updates, deletes, gets or lists a <code>line_abbreviated_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_abbreviated_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_abbreviated_numbers" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="abbreviated_number" /></td>
    <td><code>integer</code></td>
    <td>The abbreviated number which must start with "2" and must have a length of 3 or 4 digits (wire: abbreviatedNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>The destination of the abbreviated number (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="surname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Abbreviated number

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="abbreviated_number" /></td>
    <td><code>integer</code></td>
    <td>The abbreviated number which must start with "2" and must have a length of 3 or 4 digits (wire: abbreviatedNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>The destination of the abbreviated number (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="surname" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#parameter-abbreviated_number"><code>abbreviated_number</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a speed dial number</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List speed dial numbers</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-abbreviated_number"><code>abbreviated_number</code></a>, <a href="#parameter-destination_number"><code>destination_number</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-surname"><code>surname</code></a></td>
    <td></td>
    <td>Create a speed dial number</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-abbreviated_number"><code>abbreviated_number</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a speed dial number</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-abbreviated_number"><code>abbreviated_number</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a speed dial number</td>
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
<tr id="parameter-abbreviated_number">
    <td><CopyableCode code="abbreviated_number" /></td>
    <td><code>integer</code></td>
    <td>The abbreviated number which must start with "2" and must have a length of 3 or 4 digits (wire: abbreviatedNumber)</td>
</tr>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get a speed dial number

```sql
SELECT
name,
abbreviated_number,
destination_number,
surname
FROM ovh.telephony.line_abbreviated_numbers
WHERE abbreviated_number = '{{ abbreviated_number }}' -- required
AND billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List speed dial numbers

```sql
SELECT
name,
abbreviated_number,
destination_number,
surname
FROM ovh.telephony.line_abbreviated_numbers
WHERE billing_account = '{{ billing_account }}' -- required
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

Create a speed dial number

```sql
INSERT INTO ovh.telephony.line_abbreviated_numbers (
abbreviated_number,
destination_number,
name,
surname,
billing_account,
service_name
)
SELECT 
{{ abbreviated_number }} /* required */,
'{{ destination_number }}' /* required */,
'{{ name }}' /* required */,
'{{ surname }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
name,
abbreviated_number,
destination_number,
surname
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: line_abbreviated_numbers
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the line_abbreviated_numbers resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the line_abbreviated_numbers resource.
    - name: abbreviated_number
      value: {{ abbreviated_number }}
      description: |
        The abbreviated number which must start with "2" and must have a length of 3 or 4 digits
    - name: destination_number
      value: "{{ destination_number }}"
      description: |
        Phone number
    - name: name
      value: "{{ name }}"
    - name: surname
      value: "{{ surname }}"
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

Update a speed dial number

```sql
UPDATE ovh.telephony.line_abbreviated_numbers
SET 
destination_number = '{{ destination_number }}',
name = '{{ name }}',
surname = '{{ surname }}'
WHERE 
abbreviated_number = '{{ abbreviated_number }}' --required
AND billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
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

Delete a speed dial number

```sql
DELETE FROM ovh.telephony.line_abbreviated_numbers
WHERE abbreviated_number = '{{ abbreviated_number }}' --required
AND billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
