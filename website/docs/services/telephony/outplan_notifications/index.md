--- 
title: outplan_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - outplan_notifications
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

Creates, updates, deletes, gets or lists an <code>outplan_notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outplan_notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.outplan_notifications" /></td></tr>
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
    <td>The id of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="block" /></td>
    <td><code>string</code></td>
    <td>The blocking type of the associate lines (blockAllCalls, blockIncomingCalls, blockOutgoingCalls, none)</td>
</tr>
<tr>
    <td><CopyableCode code="notify_email" /></td>
    <td><code>string</code></td>
    <td>Override the nichandle email for this notification (wire: notifyEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="percentage" /></td>
    <td><code>number</code></td>
    <td>The notification percentage of maximum outplan</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The outplan notifications configured for your billing account

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
    <td>The id of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="block" /></td>
    <td><code>string</code></td>
    <td>The blocking type of the associate lines (blockAllCalls, blockIncomingCalls, blockOutgoingCalls, none)</td>
</tr>
<tr>
    <td><CopyableCode code="notify_email" /></td>
    <td><code>string</code></td>
    <td>Override the nichandle email for this notification (wire: notifyEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="percentage" /></td>
    <td><code>number</code></td>
    <td>The notification percentage of maximum outplan</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get an out-of-plan alert</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List out-of-plan alerts</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-block"><code>block</code></a>, <a href="#parameter-percentage"><code>percentage</code></a></td>
    <td></td>
    <td>Create an out-of-plan alert</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an out-of-plan alert</td>
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

Get an out-of-plan alert

```sql
SELECT
id,
block,
notify_email,
percentage
FROM ovh.telephony.outplan_notifications
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List out-of-plan alerts

```sql
SELECT
id,
block,
notify_email,
percentage
FROM ovh.telephony.outplan_notifications
WHERE billing_account = '{{ billing_account }}' -- required
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

Create an out-of-plan alert

```sql
INSERT INTO ovh.telephony.outplan_notifications (
block,
notify_email,
percentage,
billing_account
)
SELECT 
'{{ block }}' /* required */,
'{{ notify_email }}',
{{ percentage }} /* required */,
'{{ billing_account }}'
RETURNING
id,
block,
notify_email,
percentage
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: outplan_notifications
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the outplan_notifications resource.
    - name: block
      value: "{{ block }}"
      description: |
        The blocking type of the associate lines
      valid_values: ['blockAllCalls', 'blockIncomingCalls', 'blockOutgoingCalls', 'none']
    - name: notify_email
      value: "{{ notify_email }}"
      description: |
        Override the nichandle email for this notification
    - name: percentage
      value: {{ percentage }}
      description: |
        The notification percentage of maximum outplan
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

Delete an out-of-plan alert

```sql
DELETE FROM ovh.telephony.outplan_notifications
WHERE billing_account = '{{ billing_account }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
