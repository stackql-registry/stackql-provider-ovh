--- 
title: number_detailed_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - number_detailed_zones
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

Creates, updates, deletes, gets or lists a <code>number_detailed_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="number_detailed_zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.number_detailed_zones" /></td></tr>
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

A geographic zone from a country

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
    <td><CopyableCode code="asked_city" /></td>
    <td><code>string</code></td>
    <td>The searched value (wire: askedCity)</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>The city of the zone</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The country of the zone (be, ch, fr, gb, uk)</td>
</tr>
<tr>
    <td><CopyableCode code="international_number" /></td>
    <td><code>string</code></td>
    <td>The number's range of this zone, in international format (wire: internationalNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="matching_criteria" /></td>
    <td><code>string</code></td>
    <td>The criteria that matched the searched value (city, internationalNumber, number, zne) (wire: matchingCriteria)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The number's range of this zone</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>integer</code></td>
    <td>The country code of the number's range (32, 33, 34, 41, 44, 49)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of number's range of this zone (geographic, non-geographic, special)</td>
</tr>
<tr>
    <td><CopyableCode code="zip_code" /></td>
    <td><code>string</code></td>
    <td>The zip code of the zone (wire: zipCode)</td>
</tr>
<tr>
    <td><CopyableCode code="zne_list" /></td>
    <td><code>array</code></td>
    <td>The list of ZNE of this zone (wire: zneList)</td>
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
    <td><a href="#parameter-country"><code>country</code></a></td>
    <td><a href="#parameter-axiom"><code>axiom</code></a></td>
    <td>Get all available geographic zone with some details, from a country</td>
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
<tr id="parameter-country">
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The country</td>
</tr>
<tr id="parameter-axiom">
    <td><CopyableCode code="axiom" /></td>
    <td><code>string</code></td>
    <td>Enter a part of a city name or a zip for specific zne returns</td>
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

Get all available geographic zone with some details, from a country

```sql
SELECT
asked_city,
city,
country,
international_number,
matching_criteria,
number,
prefix,
type,
zip_code,
zne_list
FROM ovh.telephony.number_detailed_zones
WHERE country = '{{ country }}' -- required
AND axiom = '{{ axiom }}'
;
```
</TabItem>
</Tabs>
