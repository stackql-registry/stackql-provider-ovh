--- 
title: rsva_scheduled_rate_codes
hide_title: false
hide_table_of_contents: false
keywords:
  - rsva_scheduled_rate_codes
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

Creates, updates, deletes, gets or lists a <code>rsva_scheduled_rate_codes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rsva_scheduled_rate_codes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.rsva_scheduled_rate_codes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="cancel_limit_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Cancelable datetime deadline for the new scheduled rateCode (wire: cancelLimitDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="effective_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Effective datetime (wire: effectiveDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="price_per_call_without_tax" /></td>
    <td><code>object</code></td>
    <td>Price per call (wire: pricePerCallWithoutTax)</td>
</tr>
<tr>
    <td><CopyableCode code="price_per_minute_without_tax" /></td>
    <td><code>object</code></td>
    <td>Price in minute (wire: pricePerMinuteWithoutTax)</td>
</tr>
<tr>
    <td><CopyableCode code="rate_code" /></td>
    <td><code>string</code></td>
    <td>Scheduled rate code (wire: rateCode)</td>
</tr>
<tr>
    <td><CopyableCode code="repayment_price_per_call_without_tax" /></td>
    <td><code>object</code></td>
    <td>Repayment per call (wire: repaymentPricePerCallWithoutTax)</td>
</tr>
<tr>
    <td><CopyableCode code="repayment_price_per_minute_without_tax" /></td>
    <td><code>object</code></td>
    <td>Repayment per minute (wire: repaymentPricePerMinuteWithoutTax)</td>
</tr>
<tr>
    <td><CopyableCode code="update_rate_code_price_without_tax" /></td>
    <td><code>object</code></td>
    <td>Fees concerning rateCode update (wire: updateRateCodePriceWithoutTax)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the scheduled rate code</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the scheduled rate code

```sql
SELECT
cancel_limit_datetime,
effective_datetime,
price_per_call_without_tax,
price_per_minute_without_tax,
rate_code,
repayment_price_per_call_without_tax,
repayment_price_per_minute_without_tax,
update_rate_code_price_without_tax
FROM ovh.telephony.rsva_scheduled_rate_codes
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
