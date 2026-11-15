--- 
title: corrective_invoice_debt_operation_associated_objects
hide_title: false
hide_table_of_contents: false
keywords:
  - corrective_invoice_debt_operation_associated_objects
  - me
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

Creates, updates, deletes, gets or lists a <code>corrective_invoice_debt_operation_associated_objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="corrective_invoice_debt_operation_associated_objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.corrective_invoice_debt_operation_associated_objects" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sub_id" /></td>
    <td><code>string</code></td>
    <td> (wire: subId)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_info" /></td>
    <td><code>object</code></td>
    <td>The payment infos linked to this debt entry (wire: paymentInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of objects an order can be linked to (Bill, DebtOperation, Deposit, Order, OvhAccountMovement, Refund, Withdrawal)</td>
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
    <td><a href="#parameter-corrective_invoice_id"><code>corrective_invoice_id</code></a>, <a href="#parameter-operation_id"><code>operation_id</code></a></td>
    <td></td>
    <td>Return main data about the object related to this debt operation</td>
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
<tr id="parameter-corrective_invoice_id">
    <td><CopyableCode code="corrective_invoice_id" /></td>
    <td><code>string</code></td>
    <td> (wire: correctiveInvoiceId)</td>
</tr>
<tr id="parameter-operation_id">
    <td><CopyableCode code="operation_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: operationId)</td>
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

Return main data about the object related to this debt operation

```sql
SELECT
id,
sub_id,
payment_info,
type
FROM ovh.me.corrective_invoice_debt_operation_associated_objects
WHERE corrective_invoice_id = '{{ corrective_invoice_id }}' -- required
AND operation_id = '{{ operation_id }}' -- required
;
```
</TabItem>
</Tabs>
