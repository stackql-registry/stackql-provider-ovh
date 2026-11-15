--- 
title: blacklists
hide_title: false
hide_table_of_contents: false
keywords:
  - blacklists
  - sms
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

Creates, updates, deletes, gets or lists a <code>blacklists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blacklists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.blacklists" /></td></tr>
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
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the batch responsible of the blacklist (wire: batchID)</td>
</tr>
<tr>
    <td><CopyableCode code="sms_outgoing_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the outgoing SMS responsible of the blacklist (wire: smsOutgoingID)</td>
</tr>
<tr>
    <td><CopyableCode code="date_creation" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: dateCreation)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The sms number blacklisted</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

SMS blacklist

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
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the batch responsible of the blacklist (wire: batchID)</td>
</tr>
<tr>
    <td><CopyableCode code="sms_outgoing_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the outgoing SMS responsible of the blacklist (wire: smsOutgoingID)</td>
</tr>
<tr>
    <td><CopyableCode code="date_creation" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: dateCreation)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The sms number blacklisted</td>
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
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a blacklisted number. Returns a blacklisted number, the date it was added, and the sent SMS or batch whose STOP reply added it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-batch_id"><code>batch_id</code></a>, <a href="#parameter-sms_outgoing_id"><code>sms_outgoing_id</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List blacklisted numbers. Returns the numbers that replied STOP and no longer receive SMS from the account.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a blacklisted number. Removes the number from the blacklist of the account, so it can receive SMS from the account again.</td>
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
<tr id="parameter-number">
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The sms number blacklisted</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
</tr>
<tr id="parameter-batch_id">
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter the value of batchID property (=) (wire: batchID)</td>
</tr>
<tr id="parameter-sms_outgoing_id">
    <td><CopyableCode code="sms_outgoing_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of smsOutgoingID property (=) (wire: smsOutgoingID)</td>
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

Get a blacklisted number. Returns a blacklisted number, the date it was added, and the sent SMS or batch whose STOP reply added it.

```sql
SELECT
batch_id,
sms_outgoing_id,
date_creation,
number
FROM ovh.sms.blacklists
WHERE number = '{{ number }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List blacklisted numbers. Returns the numbers that replied STOP and no longer receive SMS from the account.

```sql
SELECT
batch_id,
sms_outgoing_id,
date_creation,
number
FROM ovh.sms.blacklists
WHERE service_name = '{{ service_name }}' -- required
AND batch_id = '{{ batch_id }}'
AND sms_outgoing_id = '{{ sms_outgoing_id }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
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

Delete a blacklisted number. Removes the number from the blacklist of the account, so it can receive SMS from the account again.

```sql
DELETE FROM ovh.sms.blacklists
WHERE number = '{{ number }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
