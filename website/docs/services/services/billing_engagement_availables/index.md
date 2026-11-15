--- 
title: billing_engagement_availables
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_engagement_availables
  - services
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

Creates, updates, deletes, gets or lists a <code>billing_engagement_availables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_engagement_availables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.services.billing_engagement_availables" /></td></tr>
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

Representation of a service pricing

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
    <td><CopyableCode code="capacities" /></td>
    <td><code>array</code></td>
    <td>Capacities of the pricing (type of pricing)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the pricing</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (duration)</code></td>
    <td>Default renew interval displayed using ISO8601</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_configuration" /></td>
    <td><code>object</code></td>
    <td>Pricing's engagement configuration (wire: engagementConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="interval" /></td>
    <td><code>integer</code></td>
    <td>Interval of renewal</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_quantity" /></td>
    <td><code>integer</code></td>
    <td>Maximum quantity that can be ordered (wire: maximumQuantity)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_repeat" /></td>
    <td><code>integer</code></td>
    <td>Maximum repeat for renewal (wire: maximumRepeat)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_quantity" /></td>
    <td><code>integer</code></td>
    <td>Minimum quantity that can be ordered (wire: minimumQuantity)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_repeat" /></td>
    <td><code>integer</code></td>
    <td>Minimum repeat for renewal (wire: minimumRepeat)</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>object</code></td>
    <td>Price of the product</td>
</tr>
<tr>
    <td><CopyableCode code="price_in_ucents" /></td>
    <td><code>integer</code></td>
    <td>Price of the product in micro-centims (wire: priceInUcents)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_mode" /></td>
    <td><code>string</code></td>
    <td>Pricing model identifier (wire: pricingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_type" /></td>
    <td><code>string</code></td>
    <td>Pricing type (consumption, purchase, rental) (wire: pricingType)</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>List all available engagements a given service can subscribe to (Beta version)</td>
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
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
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

List all available engagements a given service can subscribe to (Beta version)

```sql
SELECT
capacities,
description,
duration,
engagement_configuration,
interval,
maximum_quantity,
maximum_repeat,
minimum_quantity,
minimum_repeat,
price,
price_in_ucents,
pricing_mode,
pricing_type
FROM ovh.services.billing_engagement_availables
WHERE service_id = '{{ service_id }}' -- required
;
```
</TabItem>
</Tabs>
