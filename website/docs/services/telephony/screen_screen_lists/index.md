--- 
title: screen_screen_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - screen_screen_lists
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

Creates, updates, deletes, gets or lists a <code>screen_screen_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="screen_screen_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.screen_screen_lists" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="call_number" /></td>
    <td><code>string</code></td>
    <td> (wire: callNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nature" /></td>
    <td><code>string</code></td>
    <td>Nature of screen list (fax, international, services, special, voicemail)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of screen list (incomingBlackList, incomingWhiteList, outgoingBlackList, outgoingWhiteList)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Screen list

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="call_number" /></td>
    <td><code>string</code></td>
    <td> (wire: callNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nature" /></td>
    <td><code>string</code></td>
    <td>Nature of screen list (fax, international, services, special, voicemail)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of screen list (incomingBlackList, incomingWhiteList, outgoingBlackList, outgoingWhiteList)</td>
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
    <td>Get a filtering rule</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List filtering rules</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-nature"><code>nature</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a filtering rule</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a filtering rule</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the object</td>
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

Get a filtering rule

```sql
SELECT
id,
call_number,
nature,
status,
type
FROM ovh.telephony.screen_screen_lists
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List filtering rules

```sql
SELECT
id,
call_number,
nature,
status,
type
FROM ovh.telephony.screen_screen_lists
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

Create a filtering rule

```sql
INSERT INTO ovh.telephony.screen_screen_lists (
call_number,
nature,
type,
billing_account,
service_name
)
SELECT 
'{{ call_number }}',
'{{ nature }}' /* required */,
'{{ type }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: screen_screen_lists
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the screen_screen_lists resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the screen_screen_lists resource.
    - name: call_number
      value: "{{ call_number }}"
      description: |
        The callNumber of the generic screen list
    - name: nature
      value: "{{ nature }}"
      description: |
        The nature of the generic screen list
      valid_values: ['fax', 'international', 'services', 'special', 'voicemail']
    - name: type
      value: "{{ type }}"
      description: |
        The type of the generic screen list
      valid_values: ['incomingBlackList', 'incomingWhiteList', 'outgoingBlackList', 'outgoingWhiteList']
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

Delete a filtering rule

```sql
DELETE FROM ovh.telephony.screen_screen_lists
WHERE billing_account = '{{ billing_account }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
