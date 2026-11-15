--- 
title: rmas
hide_title: false
hide_table_of_contents: false
keywords:
  - rmas
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>rmas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rmas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.rmas" /></td></tr>
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
    <td><code>string</code></td>
    <td>Return merchandise authorisation identifier</td>
</tr>
<tr>
    <td><CopyableCode code="cancellable" /></td>
    <td><code>boolean</code></td>
    <td>Is the RMA cancellable?</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime of the return merchandise authorisation ticket (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="equipment_reference" /></td>
    <td><code>string</code></td>
    <td>Merchandise reference (wire: equipmentReference)</td>
</tr>
<tr>
    <td><CopyableCode code="new_merchandise" /></td>
    <td><code>string</code></td>
    <td>New merchandise brand in case of exchange (wire: newMerchandise)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_type_new" /></td>
    <td><code>string</code></td>
    <td>Offer type of the new merchandise in case of exchange (deposit, loan, purchase) (wire: offerTypeNew)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_type_old" /></td>
    <td><code>string</code></td>
    <td>Offer type of the return merchandise (deposit, loan, purchase) (wire: offerTypeOld)</td>
</tr>
<tr>
    <td><CopyableCode code="process" /></td>
    <td><code>string</code></td>
    <td>Return merchandise authorisation type (changePhone, phoneRestitution, undefined)</td>
</tr>
<tr>
    <td><CopyableCode code="reception_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Reception datetime of the return merchandise authorisation ticket (wire: receptionDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="shipping_contact" /></td>
    <td><code>object</code></td>
    <td>Contact information structure (wire: shippingContact)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Return merchandise authorisation step (closed, open, received)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Indicates the current status of the RMA with a list of steps</td>
</tr>
<tr>
    <td><CopyableCode code="termination_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Termination datetime of the return merchandise authorisation ticket (wire: terminationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Typology process of merchandise return (after sale equipment service exchange, after sale phone service exchange, equipment restitution, fast exchange, old merchandise reception before exchange, phone restitution, resends due to shipping lost by the carrier, resends due to shipping not withdraw, specific return merchandise authorisation, termination, unknown)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Current Return Merchandise Authorisation

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
    <td><code>string</code></td>
    <td>Return merchandise authorisation identifier</td>
</tr>
<tr>
    <td><CopyableCode code="cancellable" /></td>
    <td><code>boolean</code></td>
    <td>Is the RMA cancellable?</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation datetime of the return merchandise authorisation ticket (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="equipment_reference" /></td>
    <td><code>string</code></td>
    <td>Merchandise reference (wire: equipmentReference)</td>
</tr>
<tr>
    <td><CopyableCode code="new_merchandise" /></td>
    <td><code>string</code></td>
    <td>New merchandise brand in case of exchange (wire: newMerchandise)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_type_new" /></td>
    <td><code>string</code></td>
    <td>Offer type of the new merchandise in case of exchange (deposit, loan, purchase) (wire: offerTypeNew)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_type_old" /></td>
    <td><code>string</code></td>
    <td>Offer type of the return merchandise (deposit, loan, purchase) (wire: offerTypeOld)</td>
</tr>
<tr>
    <td><CopyableCode code="process" /></td>
    <td><code>string</code></td>
    <td>Return merchandise authorisation type (changePhone, phoneRestitution, undefined)</td>
</tr>
<tr>
    <td><CopyableCode code="reception_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Reception datetime of the return merchandise authorisation ticket (wire: receptionDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="shipping_contact" /></td>
    <td><code>object</code></td>
    <td>Contact information structure (wire: shippingContact)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Return merchandise authorisation step (closed, open, received)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Indicates the current status of the RMA with a list of steps</td>
</tr>
<tr>
    <td><CopyableCode code="termination_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Termination datetime of the return merchandise authorisation ticket (wire: terminationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Typology process of merchandise return (after sale equipment service exchange, after sale phone service exchange, equipment restitution, fast exchange, old merchandise reception before exchange, phone restitution, resends due to shipping lost by the carrier, resends due to shipping not withdraw, specific return merchandise authorisation, termination, unknown)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns a return merchandise authorization with its type, process, status and steps, the returned and new equipment, the shipping contact and its dates.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the return merchandise authorizations of the access.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the process or the shipping contact of a return merchandise authorization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Cancels the return merchandise authorization, when it is still cancellable.</td>
</tr>
<tr>
    <td><a href="#change_type"><CopyableCode code="change_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Changes a return merchandise authorization to a resiliation or to a SIP switch.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns a return merchandise authorization with its type, process, status and steps, the returned and new equipment, the shipping contact and its dates.

```sql
SELECT
id,
cancellable,
creation_datetime,
equipment_reference,
new_merchandise,
offer_type_new,
offer_type_old,
process,
reception_datetime,
shipping_contact,
status,
steps,
termination_datetime,
type
FROM ovh.xdsl.rmas
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the return merchandise authorizations of the access.

```sql
SELECT
id,
cancellable,
creation_datetime,
equipment_reference,
new_merchandise,
offer_type_new,
offer_type_old,
process,
reception_datetime,
shipping_contact,
status,
steps,
termination_datetime,
type
FROM ovh.xdsl.rmas
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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

Changes the process or the shipping contact of a return merchandise authorization.

```sql
UPDATE ovh.xdsl.rmas
SET 
process = '{{ process }}',
shipping_contact = '{{ shipping_contact }}'
WHERE 
id = '{{ id }}' --required
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

Cancels the return merchandise authorization, when it is still cancellable.

```sql
DELETE FROM ovh.xdsl.rmas
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_type"
    values={[
        { label: 'change_type', value: 'change_type' }
    ]}
>
<TabItem value="change_type">

Changes a return merchandise authorization to a resiliation or to a SIP switch.

```sql
EXEC ovh.xdsl.rmas.change_type 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
