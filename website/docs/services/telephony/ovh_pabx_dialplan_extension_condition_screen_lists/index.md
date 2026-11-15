--- 
title: ovh_pabx_dialplan_extension_condition_screen_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_pabx_dialplan_extension_condition_screen_lists
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

Creates, updates, deletes, gets or lists an <code>ovh_pabx_dialplan_extension_condition_screen_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_pabx_dialplan_extension_condition_screen_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.ovh_pabx_dialplan_extension_condition_screen_lists" /></td></tr>
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
    <td><CopyableCode code="condition_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: conditionId)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_number" /></td>
    <td><code>string</code></td>
    <td>Screenlist based on the presented caller number (wire: callerIdNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string</code></td>
    <td>Screenlist based on the destination number (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="screen_list_type" /></td>
    <td><code>string</code></td>
    <td>Type of screenlist (destinationBlackList, destinationWhiteList, incomingBlackList, incomingWhiteList) (wire: screenListType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Screenlist condition

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
    <td><CopyableCode code="condition_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: conditionId)</td>
</tr>
<tr>
    <td><CopyableCode code="caller_id_number" /></td>
    <td><code>string</code></td>
    <td>Screenlist based on the presented caller number (wire: callerIdNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_number" /></td>
    <td><code>string</code></td>
    <td>Screenlist based on the destination number (wire: destinationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="screen_list_type" /></td>
    <td><code>string</code></td>
    <td>Type of screenlist (destinationBlackList, destinationWhiteList, incomingBlackList, incomingWhiteList) (wire: screenListType)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a filtering condition</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List filtering conditions</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create a filtering condition</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-condition_id"><code>condition_id</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-extension_id"><code>extension_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a filtering condition</td>
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
<tr id="parameter-condition_id">
    <td><CopyableCode code="condition_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: conditionId)</td>
</tr>
<tr id="parameter-dialplan_id">
    <td><CopyableCode code="dialplan_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: dialplanId)</td>
</tr>
<tr id="parameter-extension_id">
    <td><CopyableCode code="extension_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: extensionId)</td>
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

Get a filtering condition

```sql
SELECT
condition_id,
caller_id_number,
destination_number,
screen_list_type
FROM ovh.telephony.ovh_pabx_dialplan_extension_condition_screen_lists
WHERE billing_account = '{{ billing_account }}' -- required
AND condition_id = '{{ condition_id }}' -- required
AND dialplan_id = '{{ dialplan_id }}' -- required
AND extension_id = '{{ extension_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List filtering conditions

```sql
SELECT
condition_id,
caller_id_number,
destination_number,
screen_list_type
FROM ovh.telephony.ovh_pabx_dialplan_extension_condition_screen_lists
WHERE billing_account = '{{ billing_account }}' -- required
AND dialplan_id = '{{ dialplan_id }}' -- required
AND extension_id = '{{ extension_id }}' -- required
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

Create a filtering condition

```sql
INSERT INTO ovh.telephony.ovh_pabx_dialplan_extension_condition_screen_lists (
caller_id_number,
destination_number,
screen_list_type,
billing_account,
dialplan_id,
extension_id,
service_name
)
SELECT 
'{{ caller_id_number }}',
'{{ destination_number }}',
'{{ screen_list_type }}',
'{{ billing_account }}',
'{{ dialplan_id }}',
'{{ extension_id }}',
'{{ service_name }}'
RETURNING
condition_id,
caller_id_number,
destination_number,
screen_list_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ovh_pabx_dialplan_extension_condition_screen_lists
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_screen_lists resource.
    - name: dialplan_id
      value: {{ dialplan_id }}
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_screen_lists resource.
    - name: extension_id
      value: {{ extension_id }}
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_screen_lists resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ovh_pabx_dialplan_extension_condition_screen_lists resource.
    - name: caller_id_number
      value: "{{ caller_id_number }}"
      description: |
        Add a screenlist based on the presented caller number
    - name: destination_number
      value: "{{ destination_number }}"
      description: |
        Add a screenlist based on the destination number
    - name: screen_list_type
      value: "{{ screen_list_type }}"
      description: |
        Screenlist condition type
      valid_values: ['destinationBlackList', 'destinationWhiteList', 'incomingBlackList', 'incomingWhiteList']
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

Delete a filtering condition

```sql
DELETE FROM ovh.telephony.ovh_pabx_dialplan_extension_condition_screen_lists
WHERE billing_account = '{{ billing_account }}' --required
AND condition_id = '{{ condition_id }}' --required
AND dialplan_id = '{{ dialplan_id }}' --required
AND extension_id = '{{ extension_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
