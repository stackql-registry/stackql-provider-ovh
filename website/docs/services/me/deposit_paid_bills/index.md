--- 
title: deposit_paid_bills
hide_title: false
hide_table_of_contents: false
keywords:
  - deposit_paid_bills
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

Creates, updates, deletes, gets or lists a <code>deposit_paid_bills</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deposit_paid_bills" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.deposit_paid_bills" /></td></tr>
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
    <td><CopyableCode code="bill_id" /></td>
    <td><code>string</code></td>
    <td> (wire: billId)</td>
</tr>
<tr>
    <td><CopyableCode code="e_invoicing_id" /></td>
    <td><code>string</code></td>
    <td> (wire: eInvoicingId)</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Types of plans (autorenew, earlyrenewal, purchase, purchase-cloud, purchase-servers, purchase-telecom, purchase-web)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="e_invoicing_status" /></td>
    <td><code>string</code></td>
    <td>List of available eInvoicing Status types (accepted, error, ignored, invalid, new, ok, processing, readyToSubmit, rejected, submitted) (wire: eInvoicingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pdf_url" /></td>
    <td><code>string</code></td>
    <td> (wire: pdfUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="price_with_tax" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: priceWithTax)</td>
</tr>
<tr>
    <td><CopyableCode code="price_without_tax" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: priceWithoutTax)</td>
</tr>
<tr>
    <td><CopyableCode code="tax" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details about a Bill

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
    <td><CopyableCode code="bill_id" /></td>
    <td><code>string</code></td>
    <td> (wire: billId)</td>
</tr>
<tr>
    <td><CopyableCode code="e_invoicing_id" /></td>
    <td><code>string</code></td>
    <td> (wire: eInvoicingId)</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Types of plans (autorenew, earlyrenewal, purchase, purchase-cloud, purchase-servers, purchase-telecom, purchase-web)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="e_invoicing_status" /></td>
    <td><code>string</code></td>
    <td>List of available eInvoicing Status types (accepted, error, ignored, invalid, new, ok, processing, readyToSubmit, rejected, submitted) (wire: eInvoicingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pdf_url" /></td>
    <td><code>string</code></td>
    <td> (wire: pdfUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="price_with_tax" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: priceWithTax)</td>
</tr>
<tr>
    <td><CopyableCode code="price_without_tax" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: priceWithoutTax)</td>
</tr>
<tr>
    <td><CopyableCode code="tax" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#parameter-bill_id"><code>bill_id</code></a>, <a href="#parameter-deposit_id"><code>deposit_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deposit_id"><code>deposit_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Get invoices paid by this deposit</td>
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
<tr id="parameter-bill_id">
    <td><CopyableCode code="bill_id" /></td>
    <td><code>string</code></td>
    <td> (wire: billId)</td>
</tr>
<tr id="parameter-deposit_id">
    <td><CopyableCode code="deposit_id" /></td>
    <td><code>string</code></td>
    <td> (wire: depositId)</td>
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
bill_id,
e_invoicing_id,
order_id,
category,
date,
e_invoicing_status,
password,
pdf_url,
price_with_tax,
price_without_tax,
tax,
url
FROM ovh.me.deposit_paid_bills
WHERE bill_id = '{{ bill_id }}' -- required
AND deposit_id = '{{ deposit_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get invoices paid by this deposit

```sql
SELECT
bill_id,
e_invoicing_id,
order_id,
category,
date,
e_invoicing_status,
password,
pdf_url,
price_with_tax,
price_without_tax,
tax,
url
FROM ovh.me.deposit_paid_bills
WHERE deposit_id = '{{ deposit_id }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
