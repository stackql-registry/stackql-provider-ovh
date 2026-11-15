--- 
title: line_click2_call_users
hide_title: false
hide_table_of_contents: false
keywords:
  - line_click2_call_users
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

Creates, updates, deletes, gets or lists a <code>line_click2_call_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_click2_call_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_click2_call_users" /></td></tr>
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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when user was created (wire: creationDateTime)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>login of the click 2 call user</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

User of the click 2 call

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when user was created (wire: creationDateTime)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>login of the click 2 call user</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a click2call user</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List click2call users</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Create a click2call user</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a click2call user</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change the user password</td>
</tr>
<tr>
    <td><a href="#click2_call"><CopyableCode code="click2_call" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-calledNumber"><code>calledNumber</code></a></td>
    <td></td>
    <td>Start a call from the line</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the object</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td></td>
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

Get a click2call user

```sql
SELECT
id,
creation_date_time,
login
FROM ovh.telephony.line_click2_call_users
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List click2call users

```sql
SELECT
id,
creation_date_time,
login
FROM ovh.telephony.line_click2_call_users
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

Create a click2call user

```sql
INSERT INTO ovh.telephony.line_click2_call_users (
login,
password,
billing_account,
service_name
)
SELECT 
'{{ login }}' /* required */,
'{{ password }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: line_click2_call_users
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the line_click2_call_users resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the line_click2_call_users resource.
    - name: login
      value: "{{ login }}"
      description: |
        Name of the contact
    - name: password
      value: "{{ password }}"
      description: |
        The user password
`}</CodeBlock>

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

Delete a click2call user

```sql
DELETE FROM ovh.telephony.line_click2_call_users
WHERE billing_account = '{{ billing_account }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' },
        { label: 'click2_call', value: 'click2_call' }
    ]}
>
<TabItem value="change_password">

Change the user password

```sql
EXEC ovh.telephony.line_click2_call_users.change_password 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="click2_call">

Start a call from the line

```sql
EXEC ovh.telephony.line_click2_call_users.click2_call 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"calledNumber": "{{ calledNumber }}", 
"callingNumber": "{{ callingNumber }}"
}'
;
```
</TabItem>
</Tabs>
