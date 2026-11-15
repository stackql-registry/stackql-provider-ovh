--- 
title: line_phone_phonebook_phonebook_contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - line_phone_phonebook_phonebook_contacts
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

Creates, updates, deletes, gets or lists a <code>line_phone_phonebook_phonebook_contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_phone_phonebook_phonebook_contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_phone_phonebook_phonebook_contacts" /></td></tr>
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
    <td>Contact identifier</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Contact name</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>Group name of the phonebook</td>
</tr>
<tr>
    <td><CopyableCode code="home_mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Home mobile phone number of the contact (wire: homeMobile)</td>
</tr>
<tr>
    <td><CopyableCode code="home_phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Home landline phone number of the contact (wire: homePhone)</td>
</tr>
<tr>
    <td><CopyableCode code="surname" /></td>
    <td><code>string</code></td>
    <td>Contact surname</td>
</tr>
<tr>
    <td><CopyableCode code="work_mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Mobile phone office number of the contact (wire: workMobile)</td>
</tr>
<tr>
    <td><CopyableCode code="work_phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Landline phone office number of the contact (wire: workPhone)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Phone book contact

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
    <td>Contact identifier</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Contact name</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>Group name of the phonebook</td>
</tr>
<tr>
    <td><CopyableCode code="home_mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Home mobile phone number of the contact (wire: homeMobile)</td>
</tr>
<tr>
    <td><CopyableCode code="home_phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Home landline phone number of the contact (wire: homePhone)</td>
</tr>
<tr>
    <td><CopyableCode code="surname" /></td>
    <td><code>string</code></td>
    <td>Contact surname</td>
</tr>
<tr>
    <td><CopyableCode code="work_mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Mobile phone office number of the contact (wire: workMobile)</td>
</tr>
<tr>
    <td><CopyableCode code="work_phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Landline phone office number of the contact (wire: workPhone)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a contact</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List contacts</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-group"><code>group</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-surname"><code>surname</code></a></td>
    <td></td>
    <td>Create a contact</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a contact</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-book_key"><code>book_key</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a contact</td>
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
<tr id="parameter-book_key">
    <td><CopyableCode code="book_key" /></td>
    <td><code>string</code></td>
    <td>Identifier of the phonebook (wire: bookKey)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Contact identifier</td>
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

Get a contact

```sql
SELECT
id,
name,
group,
home_mobile,
home_phone,
surname,
work_mobile,
work_phone
FROM ovh.telephony.line_phone_phonebook_phonebook_contacts
WHERE billing_account = '{{ billing_account }}' -- required
AND book_key = '{{ book_key }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List contacts

```sql
SELECT
id,
name,
group,
home_mobile,
home_phone,
surname,
work_mobile,
work_phone
FROM ovh.telephony.line_phone_phonebook_phonebook_contacts
WHERE billing_account = '{{ billing_account }}' -- required
AND book_key = '{{ book_key }}' -- required
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

Create a contact

```sql
INSERT INTO ovh.telephony.line_phone_phonebook_phonebook_contacts (
group,
home_mobile,
home_phone,
name,
surname,
work_mobile,
work_phone,
billing_account,
book_key,
service_name
)
SELECT 
'{{ group }}' /* required */,
'{{ home_mobile }}',
'{{ home_phone }}',
'{{ name }}' /* required */,
'{{ surname }}' /* required */,
'{{ work_mobile }}',
'{{ work_phone }}',
'{{ billing_account }}',
'{{ book_key }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: line_phone_phonebook_phonebook_contacts
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the line_phone_phonebook_phonebook_contacts resource.
    - name: book_key
      value: "{{ book_key }}"
      description: Required parameter for the line_phone_phonebook_phonebook_contacts resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the line_phone_phonebook_phonebook_contacts resource.
    - name: group
      value: "{{ group }}"
      description: |
        Group name of the phonebook
    - name: home_mobile
      value: "{{ home_mobile }}"
      description: |
        Phone number
    - name: home_phone
      value: "{{ home_phone }}"
      description: |
        Phone number
    - name: name
      value: "{{ name }}"
      description: |
        Name of the contact
    - name: surname
      value: "{{ surname }}"
      description: |
        Contact surname
    - name: work_mobile
      value: "{{ work_mobile }}"
      description: |
        Phone number
    - name: work_phone
      value: "{{ work_phone }}"
      description: |
        Phone number
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

Update a contact

```sql
UPDATE ovh.telephony.line_phone_phonebook_phonebook_contacts
SET 
group = '{{ group }}',
home_mobile = '{{ home_mobile }}',
home_phone = '{{ home_phone }}',
name = '{{ name }}',
surname = '{{ surname }}',
work_mobile = '{{ work_mobile }}',
work_phone = '{{ work_phone }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND book_key = '{{ book_key }}' --required
AND id = '{{ id }}' --required
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

Delete a contact

```sql
DELETE FROM ovh.telephony.line_phone_phonebook_phonebook_contacts
WHERE billing_account = '{{ billing_account }}' --required
AND book_key = '{{ book_key }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
