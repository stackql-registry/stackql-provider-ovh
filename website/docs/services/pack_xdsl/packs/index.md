--- 
title: packs
hide_title: false
hide_table_of_contents: false
keywords:
  - packs
  - pack_xdsl
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

Creates, updates, deletes, gets or lists a <code>packs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="packs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.pack_xdsl.packs" /></td></tr>
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
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>Name of the xdsl pack (wire: packName)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Capabilities of the pack</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Customer pack description</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="offer_description" /></td>
    <td><code>string</code></td>
    <td>Name of the offer (wire: offerDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_price" /></td>
    <td><code>object</code></td>
    <td>Price of the offer (wire: offerPrice)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Pack of xDSL services

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
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>Name of the xdsl pack (wire: packName)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Capabilities of the pack</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Customer pack description</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="offer_description" /></td>
    <td><code>string</code></td>
    <td>Name of the offer (wire: offerDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_price" /></td>
    <td><code>object</code></td>
    <td>Price of the offer (wire: offerPrice)</td>
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
    <td><a href="#parameter-pack_name"><code>pack_name</code></a></td>
    <td></td>
    <td>Get an xDSL pack. Returns the pack name, its offer description and price, the customer description and the pack capabilities.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List xDSL packs. Returns the names of the xDSL packs of the account. Each name is the packName used by the other pack calls.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-pack_name"><code>pack_name</code></a></td>
    <td></td>
    <td>Update an xDSL pack. Changes the settings that can be modified: the customer description of the pack.</td>
</tr>
<tr>
    <td><a href="#address_move_move_offer"><CopyableCode code="address_move_move_offer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a>, <a href="#parameter-acceptContracts"><code>acceptContracts</code></a>, <a href="#parameter-eligibilityReference"><code>eligibilityReference</code></a>, <a href="#parameter-keepCurrentNumber"><code>keepCurrentNumber</code></a>, <a href="#parameter-modem"><code>modem</code></a>, <a href="#parameter-offerName"><code>offerName</code></a>, <a href="#parameter-otp"><code>otp</code></a>, <a href="#parameter-productCode"><code>productCode</code></a></td>
    <td></td>
    <td>Move an xDSL pack to another address. Starts the move to the new address with the chosen offer, modem, installation details and services to keep or delete. Returns an asynchronous task.</td>
</tr>
<tr>
    <td><a href="#address_move_offers"><CopyableCode code="address_move_offers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a>, <a href="#parameter-eligibilityReference"><code>eligibilityReference</code></a></td>
    <td></td>
    <td>Search the address move offers of an xDSL pack. Returns, as an asynchronous task, the offers available at the new address for the given eligibility reference.</td>
</tr>
<tr>
    <td><a href="#address_move_services_to_delete_unpack_terms"><CopyableCode code="address_move_services_to_delete_unpack_terms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a>, <a href="#parameter-eligibilityReference"><code>eligibilityReference</code></a>, <a href="#parameter-offerName"><code>offerName</code></a></td>
    <td></td>
    <td>List the services to delete to move an xDSL pack. Returns, by service type, the number of services to delete and their unpack terms for the offer at the new address.</td>
</tr>
<tr>
    <td><a href="#cancel_resiliation"><CopyableCode code="cancel_resiliation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a></td>
    <td></td>
    <td>Cancel the resiliation of an xDSL pack. Cancels the ongoing resiliation of the pack. Check first that it can be canceled with canCancelResiliation.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#migration_migrate"><CopyableCode code="migration_migrate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a>, <a href="#parameter-acceptContracts"><code>acceptContracts</code></a>, <a href="#parameter-modem"><code>modem</code></a>, <a href="#parameter-offerName"><code>offerName</code></a></td>
    <td></td>
    <td>Migrate an xDSL pack to another offer. Starts the migration to the selected offer with its options, modem, installation details and services to keep or delete. Returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#migration_offers"><CopyableCode code="migration_offers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a></td>
    <td></td>
    <td>Search the migration offers of an xDSL pack. Returns, as an asynchronous task, the offers the pack can migrate to and, for fiber, the buildings to choose from.</td>
</tr>
<tr>
    <td><a href="#migration_services_to_delete_unpack_terms"><CopyableCode code="migration_services_to_delete_unpack_terms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a>, <a href="#parameter-offerName"><code>offerName</code></a></td>
    <td></td>
    <td>List the services to delete to migrate an xDSL pack. Returns, by service type, the number of services to delete and their unpack terms for the target offer.</td>
</tr>
<tr>
    <td><a href="#promotion_code_generate"><CopyableCode code="promotion_code_generate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a></td>
    <td></td>
    <td>Generate a promotion code for an xDSL pack. Creates a new promotion code for the pack. Returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#resiliate"><CopyableCode code="resiliate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a>, <a href="#parameter-resiliationSurvey"><code>resiliationSurvey</code></a></td>
    <td></td>
    <td>Resiliate an xDSL pack. Requests the resiliation of the pack at the given date with a resiliation survey, keeping the listed services. Returns the resiliation follow-up.</td>
</tr>
<tr>
    <td><a href="#voip_line_options_custom_shipping_address"><CopyableCode code="voip_line_options_custom_shipping_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-packName"><code>packName</code></a>, <a href="#parameter-address"><code>address</code></a>, <a href="#parameter-cityName"><code>cityName</code></a>, <a href="#parameter-firstName"><code>firstName</code></a>, <a href="#parameter-lastName"><code>lastName</code></a>, <a href="#parameter-zipCode"><code>zipCode</code></a></td>
    <td></td>
    <td>Create a shipping address for a VoIP line order. Adds an address from a name, street address, zip code and city, and returns its shipping ID.</td>
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
<tr id="parameter-packName">
    <td><CopyableCode code="packName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pack</td>
</tr>
<tr id="parameter-pack_name">
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pack (wire: packName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Get an xDSL pack. Returns the pack name, its offer description and price, the customer description and the pack capabilities.

```sql
SELECT
pack_name,
capabilities,
description,
iam,
offer_description,
offer_price
FROM ovh.pack_xdsl.packs
WHERE pack_name = '{{ pack_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List xDSL packs. Returns the names of the xDSL packs of the account. Each name is the packName used by the other pack calls.

```sql
SELECT
pack_name,
capabilities,
description,
iam,
offer_description,
offer_price
FROM ovh.pack_xdsl.packs
WHERE iam_tags = '{{ iam_tags }}'
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

Update an xDSL pack. Changes the settings that can be modified: the customer description of the pack.

```sql
UPDATE ovh.pack_xdsl.packs
SET 
description = '{{ description }}'
WHERE 
pack_name = '{{ pack_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="address_move_move_offer"
    values={[
        { label: 'address_move_move_offer', value: 'address_move_move_offer' },
        { label: 'address_move_offers', value: 'address_move_offers' },
        { label: 'address_move_services_to_delete_unpack_terms', value: 'address_move_services_to_delete_unpack_terms' },
        { label: 'cancel_resiliation', value: 'cancel_resiliation' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'migration_migrate', value: 'migration_migrate' },
        { label: 'migration_offers', value: 'migration_offers' },
        { label: 'migration_services_to_delete_unpack_terms', value: 'migration_services_to_delete_unpack_terms' },
        { label: 'promotion_code_generate', value: 'promotion_code_generate' },
        { label: 'resiliate', value: 'resiliate' },
        { label: 'voip_line_options_custom_shipping_address', value: 'voip_line_options_custom_shipping_address' }
    ]}
>
<TabItem value="address_move_move_offer">

Move an xDSL pack to another address. Starts the move to the new address with the chosen offer, modem, installation details and services to keep or delete. Returns an asynchronous task.

```sql
EXEC ovh.pack_xdsl.packs.address_move_move_offer 
@packName='{{ packName }}' --required 
@@json=
'{
"acceptContracts": {{ acceptContracts }}, 
"building": "{{ building }}", 
"buildingReference": "{{ buildingReference }}", 
"contactPhone": "{{ contactPhone }}", 
"door": "{{ door }}", 
"eligibilityReference": "{{ eligibilityReference }}", 
"engageMonths": {{ engageMonths }}, 
"floor": "{{ floor }}", 
"installationType": "{{ installationType }}", 
"keepCurrentNumber": {{ keepCurrentNumber }}, 
"meeting": "{{ meeting }}", 
"modem": "{{ modem }}", 
"mondialRelayId": {{ mondialRelayId }}, 
"moveOutDate": "{{ moveOutDate }}", 
"nicShipping": "{{ nicShipping }}", 
"offerName": "{{ offerName }}", 
"ontShippingContact": "{{ ontShippingContact }}", 
"options": "{{ options }}", 
"otp": {{ otp }}, 
"otpReference": "{{ otpReference }}", 
"productCode": "{{ productCode }}", 
"residence": "{{ residence }}", 
"stair": "{{ stair }}", 
"subServicesToDelete": "{{ subServicesToDelete }}", 
"subServicesToKeep": "{{ subServicesToKeep }}"
}'
;
```
</TabItem>
<TabItem value="address_move_offers">

Search the address move offers of an xDSL pack. Returns, as an asynchronous task, the offers available at the new address for the given eligibility reference.

```sql
EXEC ovh.pack_xdsl.packs.address_move_offers 
@packName='{{ packName }}' --required 
@@json=
'{
"eligibilityReference": "{{ eligibilityReference }}"
}'
;
```
</TabItem>
<TabItem value="address_move_services_to_delete_unpack_terms">

List the services to delete to move an xDSL pack. Returns, by service type, the number of services to delete and their unpack terms for the offer at the new address.

```sql
EXEC ovh.pack_xdsl.packs.address_move_services_to_delete_unpack_terms 
@packName='{{ packName }}' --required 
@@json=
'{
"eligibilityReference": "{{ eligibilityReference }}", 
"offerName": "{{ offerName }}", 
"options": "{{ options }}"
}'
;
```
</TabItem>
<TabItem value="cancel_resiliation">

Cancel the resiliation of an xDSL pack. Cancels the ongoing resiliation of the pack. Check first that it can be canceled with canCancelResiliation.

```sql
EXEC ovh.pack_xdsl.packs.cancel_resiliation 
@packName='{{ packName }}' --required
;
```
</TabItem>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.pack_xdsl.packs.change_contact 
@packName='{{ packName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="migration_migrate">

Migrate an xDSL pack to another offer. Starts the migration to the selected offer with its options, modem, installation details and services to keep or delete. Returns the task that performs it.

```sql
EXEC ovh.pack_xdsl.packs.migration_migrate 
@packName='{{ packName }}' --required 
@@json=
'{
"acceptContracts": {{ acceptContracts }}, 
"buildingReference": "{{ buildingReference }}", 
"contactPhone": "{{ contactPhone }}", 
"engageMonths": {{ engageMonths }}, 
"floor": "{{ floor }}", 
"installationType": "{{ installationType }}", 
"meeting": "{{ meeting }}", 
"modem": "{{ modem }}", 
"mondialRelayId": {{ mondialRelayId }}, 
"nicShipping": "{{ nicShipping }}", 
"offerName": "{{ offerName }}", 
"ontShippingContact": "{{ ontShippingContact }}", 
"options": "{{ options }}", 
"otp": {{ otp }}, 
"otpReference": "{{ otpReference }}", 
"productCode": "{{ productCode }}", 
"stair": "{{ stair }}", 
"subServicesToDelete": "{{ subServicesToDelete }}", 
"subServicesToKeep": "{{ subServicesToKeep }}"
}'
;
```
</TabItem>
<TabItem value="migration_offers">

Search the migration offers of an xDSL pack. Returns, as an asynchronous task, the offers the pack can migrate to and, for fiber, the buildings to choose from.

```sql
EXEC ovh.pack_xdsl.packs.migration_offers 
@packName='{{ packName }}' --required 
@@json=
'{
"buildingReference": "{{ buildingReference }}"
}'
;
```
</TabItem>
<TabItem value="migration_services_to_delete_unpack_terms">

List the services to delete to migrate an xDSL pack. Returns, by service type, the number of services to delete and their unpack terms for the target offer.

```sql
EXEC ovh.pack_xdsl.packs.migration_services_to_delete_unpack_terms 
@packName='{{ packName }}' --required 
@@json=
'{
"offerName": "{{ offerName }}", 
"options": "{{ options }}"
}'
;
```
</TabItem>
<TabItem value="promotion_code_generate">

Generate a promotion code for an xDSL pack. Creates a new promotion code for the pack. Returns the task that performs it.

```sql
EXEC ovh.pack_xdsl.packs.promotion_code_generate 
@packName='{{ packName }}' --required
;
```
</TabItem>
<TabItem value="resiliate">

Resiliate an xDSL pack. Requests the resiliation of the pack at the given date with a resiliation survey, keeping the listed services. Returns the resiliation follow-up.

```sql
EXEC ovh.pack_xdsl.packs.resiliate 
@packName='{{ packName }}' --required 
@@json=
'{
"resiliationDate": "{{ resiliationDate }}", 
"resiliationSurvey": "{{ resiliationSurvey }}", 
"servicesToKeep": "{{ servicesToKeep }}"
}'
;
```
</TabItem>
<TabItem value="voip_line_options_custom_shipping_address">

Create a shipping address for a VoIP line order. Adds an address from a name, street address, zip code and city, and returns its shipping ID.

```sql
EXEC ovh.pack_xdsl.packs.voip_line_options_custom_shipping_address 
@packName='{{ packName }}' --required 
@@json=
'{
"address": "{{ address }}", 
"cityName": "{{ cityName }}", 
"firstName": "{{ firstName }}", 
"lastName": "{{ lastName }}", 
"zipCode": "{{ zipCode }}"
}'
;
```
</TabItem>
</Tabs>
