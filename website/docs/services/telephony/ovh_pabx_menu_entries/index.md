--- 
title: ovh_pabx_menu_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_pabx_menu_entries
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

Creates, updates, deletes, gets or lists an <code>ovh_pabx_menu_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_pabx_menu_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.ovh_pabx_menu_entries" /></td></tr>
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
    <td><CopyableCode code="entry_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: entryId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action triggered by the DTMF (bridge, callcenter, menuBack, menuExit, menuSub, menuTop, playback, readDtmf, setCallerName)</td>
</tr>
<tr>
    <td><CopyableCode code="action_param" /></td>
    <td><code>string</code></td>
    <td>The additionnal parameter of the action (wire: actionParam)</td>
</tr>
<tr>
    <td><CopyableCode code="dtmf" /></td>
    <td><code>string</code></td>
    <td>The DTMF that triggers the action</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The position of the entry in the menu</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

IVR menu entry

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
    <td><CopyableCode code="entry_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: entryId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action triggered by the DTMF (bridge, callcenter, menuBack, menuExit, menuSub, menuTop, playback, readDtmf, setCallerName)</td>
</tr>
<tr>
    <td><CopyableCode code="action_param" /></td>
    <td><code>string</code></td>
    <td>The additionnal parameter of the action (wire: actionParam)</td>
</tr>
<tr>
    <td><CopyableCode code="dtmf" /></td>
    <td><code>string</code></td>
    <td>The DTMF that triggers the action</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The position of the entry in the menu</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-entry_id"><code>entry_id</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a menu entry</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List menu entries</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-dtmf"><code>dtmf</code></a>, <a href="#parameter-position"><code>position</code></a></td>
    <td></td>
    <td>Create a menu entry</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-entry_id"><code>entry_id</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a menu entry</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-entry_id"><code>entry_id</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a menu entry</td>
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
<tr id="parameter-entry_id">
    <td><CopyableCode code="entry_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: entryId)</td>
</tr>
<tr id="parameter-menu_id">
    <td><CopyableCode code="menu_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: menuId)</td>
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

Get a menu entry

```sql
SELECT
entry_id,
action,
action_param,
dtmf,
position
FROM ovh.telephony.ovh_pabx_menu_entries
WHERE billing_account = '{{ billing_account }}' -- required
AND entry_id = '{{ entry_id }}' -- required
AND menu_id = '{{ menu_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List menu entries

```sql
SELECT
entry_id,
action,
action_param,
dtmf,
position
FROM ovh.telephony.ovh_pabx_menu_entries
WHERE billing_account = '{{ billing_account }}' -- required
AND menu_id = '{{ menu_id }}' -- required
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

Create a menu entry

```sql
INSERT INTO ovh.telephony.ovh_pabx_menu_entries (
action,
action_param,
dtmf,
position,
billing_account,
menu_id,
service_name
)
SELECT 
'{{ action }}' /* required */,
'{{ action_param }}',
'{{ dtmf }}' /* required */,
{{ position }} /* required */,
'{{ billing_account }}',
'{{ menu_id }}',
'{{ service_name }}'
RETURNING
entry_id,
action,
action_param,
dtmf,
position
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ovh_pabx_menu_entries
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the ovh_pabx_menu_entries resource.
    - name: menu_id
      value: {{ menu_id }}
      description: Required parameter for the ovh_pabx_menu_entries resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ovh_pabx_menu_entries resource.
    - name: action
      value: "{{ action }}"
      description: |
        The action triggered by the DTMF
      valid_values: ['bridge', 'callcenter', 'menuBack', 'menuExit', 'menuSub', 'menuTop', 'playback', 'readDtmf', 'setCallerName']
    - name: action_param
      value: "{{ action_param }}"
      description: |
        The additionnal parameter of the action
    - name: dtmf
      value: "{{ dtmf }}"
      description: |
        The DTMF that triggers the action
    - name: position
      value: {{ position }}
      description: |
        The position of the entry in the menu
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

Update a menu entry

```sql
UPDATE ovh.telephony.ovh_pabx_menu_entries
SET 
action = '{{ action }}',
action_param = '{{ action_param }}',
dtmf = '{{ dtmf }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND entry_id = '{{ entry_id }}' --required
AND menu_id = '{{ menu_id }}' --required
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

Delete a menu entry

```sql
DELETE FROM ovh.telephony.ovh_pabx_menu_entries
WHERE billing_account = '{{ billing_account }}' --required
AND entry_id = '{{ entry_id }}' --required
AND menu_id = '{{ menu_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
