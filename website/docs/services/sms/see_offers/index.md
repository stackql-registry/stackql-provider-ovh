--- 
title: see_offers
hide_title: false
hide_table_of_contents: false
keywords:
  - see_offers
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

Creates, updates, deletes, gets or lists a <code>see_offers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="see_offers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.see_offers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A structure describing all information about an sms pack offer

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
    <td><CopyableCode code="country_destination" /></td>
    <td><code>string</code></td>
    <td> (wire: countryDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="gift_price" /></td>
    <td><code>number</code></td>
    <td> (wire: giftPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="gift_quantity" /></td>
    <td><code>number</code></td>
    <td> (wire: giftQuantity)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sms_quantity" /></td>
    <td><code>number</code></td>
    <td> (wire: smsQuantity)</td>
</tr>
<tr>
    <td><CopyableCode code="total_price" /></td>
    <td><code>number</code></td>
    <td> (wire: totalPrice)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-country_currency_price"><code>country_currency_price</code></a>, <a href="#parameter-country_destination"><code>country_destination</code></a>, <a href="#parameter-quantity"><code>quantity</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List SMS offers. Returns the SMS pack offers available for the account, by quantity and destination country.</td>
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
<tr id="parameter-country_currency_price">
    <td><CopyableCode code="country_currency_price" /></td>
    <td><code>string</code></td>
    <td>Filter to have the currency country prices (wire: countryCurrencyPrice)</td>
</tr>
<tr id="parameter-country_destination">
    <td><CopyableCode code="country_destination" /></td>
    <td><code>string</code></td>
    <td>Filter to have the country destination (wire: countryDestination)</td>
</tr>
<tr id="parameter-quantity">
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Sms pack offer quantity</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List SMS offers. Returns the SMS pack offers available for the account, by quantity and destination country.

```sql
SELECT
country_destination,
gift_price,
gift_quantity,
language,
price,
quantity,
sms_quantity,
total_price
FROM ovh.sms.see_offers
WHERE country_currency_price = '{{ country_currency_price }}' -- required
AND country_destination = '{{ country_destination }}' -- required
AND quantity = '{{ quantity }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
