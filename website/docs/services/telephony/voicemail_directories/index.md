--- 
title: voicemail_directories
hide_title: false
hide_table_of_contents: false
keywords:
  - voicemail_directories
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

Creates, updates, deletes, gets or lists a <code>voicemail_directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voicemail_directories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.voicemail_directories" /></td></tr>
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
    <td>Uniq voicemail message identifier</td>
</tr>
<tr>
    <td><CopyableCode code="callee" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Callee number in international format</td>
</tr>
<tr>
    <td><CopyableCode code="caller" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Caller number in international format</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Message datetime creation (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="dir" /></td>
    <td><code>string</code></td>
    <td>Voicemessage directory (family, friends, inbox, old, urgent, work)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>Message duration (in seconds)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Voicemail message

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
    <td>Uniq voicemail message identifier</td>
</tr>
<tr>
    <td><CopyableCode code="callee" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Callee number in international format</td>
</tr>
<tr>
    <td><CopyableCode code="caller" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Caller number in international format</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Message datetime creation (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="dir" /></td>
    <td><code>string</code></td>
    <td>Voicemessage directory (family, friends, inbox, old, urgent, work)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>Message duration (in seconds)</td>
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
    <td>Get a voicemail message</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-dir"><code>dir</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List voicemail messages</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a voicemail message</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-dir"><code>dir</code></a></td>
    <td></td>
    <td>Move a voicemail message</td>
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
<tr id="parameter-dir">
    <td><CopyableCode code="dir" /></td>
    <td><code>string</code></td>
    <td>Filter the value of dir property (=)</td>
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

Get a voicemail message

```sql
SELECT
id,
callee,
caller,
creation_datetime,
dir,
duration
FROM ovh.telephony.voicemail_directories
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List voicemail messages

```sql
SELECT
id,
callee,
caller,
creation_datetime,
dir,
duration
FROM ovh.telephony.voicemail_directories
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND dir = '{{ dir }}'
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

Delete a voicemail message

```sql
DELETE FROM ovh.telephony.voicemail_directories
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
    defaultValue="move"
    values={[
        { label: 'move', value: 'move' }
    ]}
>
<TabItem value="move">

Move a voicemail message

```sql
EXEC ovh.telephony.voicemail_directories.move 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"dir": "{{ dir }}"
}'
;
```
</TabItem>
</Tabs>
