--- 
title: migration_offers
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_offers
  - over_the_box
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

Creates, updates, deletes, gets or lists a <code>migration_offers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migration_offers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.over_the_box.migration_offers" /></td></tr>
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

Migration offer

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
    <td><CopyableCode code="hardware_name" /></td>
    <td><code>string</code></td>
    <td>Name of the hardware (wire: hardwareName)</td>
</tr>
<tr>
    <td><CopyableCode code="current_offer_price" /></td>
    <td><code>object</code></td>
    <td>Monthly price of the current offer (wire: currentOfferPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the offer</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_months" /></td>
    <td><code>integer</code></td>
    <td>Number of months of engagement (wire: engagementMonths)</td>
</tr>
<tr>
    <td><CopyableCode code="hardware_available" /></td>
    <td><code>boolean</code></td>
    <td>Specify if a hardware is available (wire: hardwareAvailable)</td>
</tr>
<tr>
    <td><CopyableCode code="hardware_price" /></td>
    <td><code>object</code></td>
    <td>Hardware purchase price (wire: hardwarePrice)</td>
</tr>
<tr>
    <td><CopyableCode code="hardwares" /></td>
    <td><code>array</code></td>
    <td>Details of available hardwares</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Name of the offer</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>object</code></td>
    <td>Monthly price of the new offer</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List the migration offers of an OverTheBox service. Returns the offers the service can migrate to, with their price, engagement and available hardware.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your overTheBox offer (wire: serviceName)</td>
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

List the migration offers of an OverTheBox service. Returns the offers the service can migrate to, with their price, engagement and available hardware.

```sql
SELECT
hardware_name,
current_offer_price,
description,
engagement_months,
hardware_available,
hardware_price,
hardwares,
offer,
price
FROM ovh.over_the_box.migration_offers
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
