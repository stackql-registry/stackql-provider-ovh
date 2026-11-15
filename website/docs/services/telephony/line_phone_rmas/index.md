--- 
title: line_phone_rmas
hide_title: false
hide_table_of_contents: false
keywords:
  - line_phone_rmas
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

Creates, updates, deletes, gets or lists a <code>line_phone_rmas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_phone_rmas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_phone_rmas" /></td></tr>
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
    <td>Process determined for merchandise returned (changePhone, phoneRestitution, undefined)</td>
</tr>
<tr>
    <td><CopyableCode code="reception_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Reception datetime of the return merchandise authorisation ticket (wire: receptionDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="shipping_contact" /></td>
    <td><code>object</code></td>
    <td>Contact information related to the delivery shipping in case of exchange (wire: shippingContact)</td>
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
    <td>Process determined for merchandise returned (changePhone, phoneRestitution, undefined)</td>
</tr>
<tr>
    <td><CopyableCode code="reception_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Reception datetime of the return merchandise authorisation ticket (wire: receptionDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="shipping_contact" /></td>
    <td><code>object</code></td>
    <td>Contact information related to the delivery shipping in case of exchange (wire: shippingContact)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an RMA</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List RMAs</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create an RMA</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an RMA</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Cancel an RMA</td>
</tr>
<tr>
    <td><a href="#change_type"><CopyableCode code="change_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Change the RMA type</td>
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
    <td><code>string</code></td>
    <td>Return merchandise authorisation identifier</td>
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

Get an RMA

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
FROM ovh.telephony.line_phone_rmas
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List RMAs

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
FROM ovh.telephony.line_phone_rmas
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

Create an RMA

```sql
INSERT INTO ovh.telephony.line_phone_rmas (
mondial_relay_id,
new_merchandise,
shipping_contact_id,
type,
billing_account,
service_name
)
SELECT 
'{{ mondial_relay_id }}',
'{{ new_merchandise }}',
{{ shipping_contact_id }},
'{{ type }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: line_phone_rmas
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the line_phone_rmas resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the line_phone_rmas resource.
    - name: mondial_relay_id
      value: "{{ mondial_relay_id }}"
      description: |
        Use /supply/mondialRelay entry point to specify a relay point and ignore shipping contact address information entry.
    - name: new_merchandise
      value: "{{ new_merchandise }}"
      description: |
        New merchandise brand in case of exchange
    - name: shipping_contact_id
      value: {{ shipping_contact_id }}
      description: |
        Shipping contact information id from /me entry point
    - name: type
      value: "{{ type }}"
      description: |
        Typology process of merchandise return
      valid_values: ['change to another phone/equipment (restitution first and shipping then)', 'restitution but keep the service enable']
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

Update an RMA

```sql
UPDATE ovh.telephony.line_phone_rmas
SET 
process = '{{ process }}',
shipping_contact = '{{ shipping_contact }}'
WHERE 
billing_account = '{{ billing_account }}' --required
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

Cancel an RMA

```sql
DELETE FROM ovh.telephony.line_phone_rmas
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
    defaultValue="change_type"
    values={[
        { label: 'change_type', value: 'change_type' }
    ]}
>
<TabItem value="change_type">

Change the RMA type

```sql
EXEC ovh.telephony.line_phone_rmas.change_type 
@billingAccount='{{ billingAccount }}' --required, 
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
