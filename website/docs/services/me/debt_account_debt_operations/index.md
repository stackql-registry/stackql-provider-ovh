--- 
title: debt_account_debt_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - debt_account_debt_operations
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

Creates, updates, deletes, gets or lists a <code>debt_account_debt_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="debt_account_debt_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.debt_account_debt_operations" /></td></tr>
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
    <td><CopyableCode code="deposit_order_id" /></td>
    <td><code>integer</code></td>
    <td>Order id associated to the deposit (wire: depositOrderId)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: operationId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Amount of the operation</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the operation took place on</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the operation (CANCELLED, DONE, FAILED, PAID, PENDING, TODO)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of movement this operation represents (BANK_TRANSFER_MANUAL, CANCEL, CASH_MANUAL, CHECK_MANUAL, CREDITCARD, CREDITCARD_AUTOMATIC, CREDITCARD_MANUAL, CREDIT_ACCOUNT_AUTOMATIC, CREDIT_CARD_AUTOMATIC, CREDIT_CARD_MANUAL, CURRENT_ACCOUNT_AUTOMATIC, CURRENT_ACCOUNT_MANUAL, DOMESTIC_CARD_AUTOMATIC, DOMESTIC_CARD_MANUAL, EDINAR_MANUAL, ENTERPRISE_AUTOMATIC, ENTERPRISE_MANUAL, IDEAL_AUTOMATIC, IDEAL_MANUAL, INTERNAL_TRUSTED_ACCOUNT_AUTOMATIC, INTERNAL_TRUSTED_ACCOUNT_MANUAL, MULTIBANCO_AUTOMATIC, MULTIBANCO_MANUAL, ORDER, PAYPAL_AUTOMATIC, PAYPAL_MANUAL, PAYU_AUTOMATIC, PAYU_MANUAL, RECOVERY_TRANSFER_AUTOMATIC, REFUND, REFUND_CHECK, REFUND_CREDITCARD, REFUND_CREDIT_ACCOUNT, REFUND_CREDIT_CARD, REFUND_CURRENT_ACCOUNT, REFUND_DOMESTIC_CARD, REFUND_ENTERPRISE, REFUND_IDEAL, REFUND_INTERNAL_TRUSTED_ACCOUNT, REFUND_LOSS, REFUND_MULTIBANCO, REFUND_PAYPAL, REFUND_PAYU, REFUND_RUPAY, REFUND_SEPA, REFUND_SEPA_DIRECT_DEBIT, REFUND_TRANSFER, REFUND_UNKNOWN, RUPAY_AUTOMATIC, RUPAY_MANUAL, SEPA_AUTOMATIC, SEPA_DIRECT_DEBIT_AUTOMATIC, SEPA_DIRECT_DEBIT_MANUAL, TRANSFER_MANUAL, UNPAID_CHECK, UNPAID_CREDITCARD, UNPAID_CREDIT_ACCOUNT, UNPAID_CREDIT_CARD, UNPAID_CURRENT_ACCOUNT, UNPAID_DOMESTIC_CARD, UNPAID_ENTERPRISE, UNPAID_IDEAL, UNPAID_INTERNAL_TRUSTED_ACCOUNT, UNPAID_MULTIBANCO, UNPAID_PAYPAL, UNPAID_PAYU, UNPAID_RUPAY, UNPAID_SEPA, UNPAID_SEPA_DIRECT_DEBIT, UNPAID_WITHDRAW, WARRANT_MANUAL, WITHDRAW_AUTOMATIC)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Operation that happend on a debt

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
    <td><CopyableCode code="deposit_order_id" /></td>
    <td><code>integer</code></td>
    <td>Order id associated to the deposit (wire: depositOrderId)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: operationId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Amount of the operation</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the operation took place on</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the operation (CANCELLED, DONE, FAILED, PAID, PENDING, TODO)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of movement this operation represents (BANK_TRANSFER_MANUAL, CANCEL, CASH_MANUAL, CHECK_MANUAL, CREDITCARD, CREDITCARD_AUTOMATIC, CREDITCARD_MANUAL, CREDIT_ACCOUNT_AUTOMATIC, CREDIT_CARD_AUTOMATIC, CREDIT_CARD_MANUAL, CURRENT_ACCOUNT_AUTOMATIC, CURRENT_ACCOUNT_MANUAL, DOMESTIC_CARD_AUTOMATIC, DOMESTIC_CARD_MANUAL, EDINAR_MANUAL, ENTERPRISE_AUTOMATIC, ENTERPRISE_MANUAL, IDEAL_AUTOMATIC, IDEAL_MANUAL, INTERNAL_TRUSTED_ACCOUNT_AUTOMATIC, INTERNAL_TRUSTED_ACCOUNT_MANUAL, MULTIBANCO_AUTOMATIC, MULTIBANCO_MANUAL, ORDER, PAYPAL_AUTOMATIC, PAYPAL_MANUAL, PAYU_AUTOMATIC, PAYU_MANUAL, RECOVERY_TRANSFER_AUTOMATIC, REFUND, REFUND_CHECK, REFUND_CREDITCARD, REFUND_CREDIT_ACCOUNT, REFUND_CREDIT_CARD, REFUND_CURRENT_ACCOUNT, REFUND_DOMESTIC_CARD, REFUND_ENTERPRISE, REFUND_IDEAL, REFUND_INTERNAL_TRUSTED_ACCOUNT, REFUND_LOSS, REFUND_MULTIBANCO, REFUND_PAYPAL, REFUND_PAYU, REFUND_RUPAY, REFUND_SEPA, REFUND_SEPA_DIRECT_DEBIT, REFUND_TRANSFER, REFUND_UNKNOWN, RUPAY_AUTOMATIC, RUPAY_MANUAL, SEPA_AUTOMATIC, SEPA_DIRECT_DEBIT_AUTOMATIC, SEPA_DIRECT_DEBIT_MANUAL, TRANSFER_MANUAL, UNPAID_CHECK, UNPAID_CREDITCARD, UNPAID_CREDIT_ACCOUNT, UNPAID_CREDIT_CARD, UNPAID_CURRENT_ACCOUNT, UNPAID_DOMESTIC_CARD, UNPAID_ENTERPRISE, UNPAID_IDEAL, UNPAID_INTERNAL_TRUSTED_ACCOUNT, UNPAID_MULTIBANCO, UNPAID_PAYPAL, UNPAID_PAYU, UNPAID_RUPAY, UNPAID_SEPA, UNPAID_SEPA_DIRECT_DEBIT, UNPAID_WITHDRAW, WARRANT_MANUAL, WITHDRAW_AUTOMATIC)</td>
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
    <td><a href="#parameter-debt_id"><code>debt_id</code></a>, <a href="#parameter-operation_id"><code>operation_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-debt_id"><code>debt_id</code></a></td>
    <td><a href="#parameter-deposit_order_id"><code>deposit_order_id</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>All operations related to these debts</td>
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
<tr id="parameter-debt_id">
    <td><CopyableCode code="debt_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: debtId)</td>
</tr>
<tr id="parameter-operation_id">
    <td><CopyableCode code="operation_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: operationId)</td>
</tr>
<tr id="parameter-deposit_order_id">
    <td><CopyableCode code="deposit_order_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of depositOrderId property (=) (wire: depositOrderId)</td>
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

Get this object properties

```sql
SELECT
deposit_order_id,
operation_id,
amount,
date,
status,
type
FROM ovh.me.debt_account_debt_operations
WHERE debt_id = '{{ debt_id }}' -- required
AND operation_id = '{{ operation_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

All operations related to these debts

```sql
SELECT
deposit_order_id,
operation_id,
amount,
date,
status,
type
FROM ovh.me.debt_account_debt_operations
WHERE debt_id = '{{ debt_id }}' -- required
AND deposit_order_id = '{{ deposit_order_id }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
