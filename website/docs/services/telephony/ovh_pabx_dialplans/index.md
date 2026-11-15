--- 
title: ovh_pabx_dialplans
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_pabx_dialplans
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

Creates, updates, deletes, gets or lists an <code>ovh_pabx_dialplans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_pabx_dialplans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.ovh_pabx_dialplans" /></td></tr>
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
    <td>The dialplan name</td>
</tr>
<tr>
    <td><CopyableCode code="dialplan_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: dialplanId)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_rejection" /></td>
    <td><code>boolean</code></td>
    <td>Reject (hangup) anonymous calls (wire: anonymousRejection)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="show_caller_number" /></td>
    <td><code>string</code></td>
    <td>The presented number when bridging calls (alias, both, caller) (wire: showCallerNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout (in seconds) when bridging calls (wire: transferTimeout)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Dialplan

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
    <td>The dialplan name</td>
</tr>
<tr>
    <td><CopyableCode code="dialplan_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: dialplanId)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_rejection" /></td>
    <td><code>boolean</code></td>
    <td>Reject (hangup) anonymous calls (wire: anonymousRejection)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="show_caller_number" /></td>
    <td><code>string</code></td>
    <td>The presented number when bridging calls (alias, both, caller) (wire: showCallerNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout (in seconds) when bridging calls (wire: transferTimeout)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a dialplan</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List dialplans</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-anonymous_rejection"><code>anonymous_rejection</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-show_caller_number"><code>show_caller_number</code></a>, <a href="#parameter-transfer_timeout"><code>transfer_timeout</code></a></td>
    <td></td>
    <td>Create a dialplan</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a dialplan</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-dialplan_id"><code>dialplan_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a dialplan</td>
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
<tr id="parameter-dialplan_id">
    <td><CopyableCode code="dialplan_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: dialplanId)</td>
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

Get a dialplan

```sql
SELECT
name,
dialplan_id,
anonymous_rejection,
last_update,
show_caller_number,
transfer_timeout
FROM ovh.telephony.ovh_pabx_dialplans
WHERE billing_account = '{{ billing_account }}' -- required
AND dialplan_id = '{{ dialplan_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List dialplans

```sql
SELECT
name,
dialplan_id,
anonymous_rejection,
last_update,
show_caller_number,
transfer_timeout
FROM ovh.telephony.ovh_pabx_dialplans
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

Create a dialplan

```sql
INSERT INTO ovh.telephony.ovh_pabx_dialplans (
anonymous_rejection,
name,
show_caller_number,
transfer_timeout,
billing_account,
service_name
)
SELECT 
{{ anonymous_rejection }} /* required */,
'{{ name }}' /* required */,
'{{ show_caller_number }}' /* required */,
{{ transfer_timeout }} /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
name,
dialplan_id,
anonymous_rejection,
last_update,
show_caller_number,
transfer_timeout
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ovh_pabx_dialplans
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the ovh_pabx_dialplans resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ovh_pabx_dialplans resource.
    - name: anonymous_rejection
      value: {{ anonymous_rejection }}
      description: |
        Reject (hangup) anonymous calls
    - name: name
      value: "{{ name }}"
      description: |
        The dialplan name
    - name: show_caller_number
      value: "{{ show_caller_number }}"
      description: |
        The presented number when bridging calls
      valid_values: ['alias', 'both', 'caller']
    - name: transfer_timeout
      value: {{ transfer_timeout }}
      description: |
        The timeout (in seconds) when bridging calls
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

Update a dialplan

```sql
UPDATE ovh.telephony.ovh_pabx_dialplans
SET 
anonymous_rejection = {{ anonymous_rejection }},
name = '{{ name }}',
show_caller_number = '{{ show_caller_number }}',
transfer_timeout = {{ transfer_timeout }}
WHERE 
billing_account = '{{ billing_account }}' --required
AND dialplan_id = '{{ dialplan_id }}' --required
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

Delete a dialplan

```sql
DELETE FROM ovh.telephony.ovh_pabx_dialplans
WHERE billing_account = '{{ billing_account }}' --required
AND dialplan_id = '{{ dialplan_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
