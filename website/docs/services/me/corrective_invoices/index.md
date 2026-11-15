--- 
title: corrective_invoices
hide_title: false
hide_table_of_contents: false
keywords:
  - corrective_invoices
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

Creates, updates, deletes, gets or lists a <code>corrective_invoices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="corrective_invoices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.corrective_invoices" /></td></tr>
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
    <td><CopyableCode code="corrected_invoice_id" /></td>
    <td><code>string</code></td>
    <td> (wire: correctedInvoiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="corrective_invoice_id" /></td>
    <td><code>string</code></td>
    <td> (wire: correctiveInvoiceId)</td>
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

Details about a CorrectiveInvoice

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
    <td><CopyableCode code="corrected_invoice_id" /></td>
    <td><code>string</code></td>
    <td> (wire: correctedInvoiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="corrective_invoice_id" /></td>
    <td><code>string</code></td>
    <td> (wire: correctiveInvoiceId)</td>
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
    <td><a href="#parameter-corrective_invoice_id"><code>corrective_invoice_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-category"><code>category</code></a>, <a href="#parameter-date.from"><code>date.from</code></a>, <a href="#parameter-date.to"><code>date.to</code></a>, <a href="#parameter-order_id"><code>order_id</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of all the correctiveInvoice the logged account has</td>
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
<tr id="parameter-category">
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Filter the value of category property (=)</td>
</tr>
<tr id="parameter-date.from">
    <td><CopyableCode code="date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of date property (&gt;=)</td>
</tr>
<tr id="parameter-date.to">
    <td><CopyableCode code="date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of date property (&lt;=)</td>
</tr>
<tr id="parameter-order_id">
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of orderId property (=) (wire: orderId)</td>
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
corrected_invoice_id,
corrective_invoice_id,
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
FROM ovh.me.corrective_invoices
WHERE corrective_invoice_id = '{{ corrective_invoice_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of all the correctiveInvoice the logged account has

```sql
SELECT
corrected_invoice_id,
corrective_invoice_id,
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
FROM ovh.me.corrective_invoices
WHERE category = '{{ category }}'
AND date.from = '{{ date.from }}'
AND date.to = '{{ date.to }}'
AND order_id = '{{ order_id }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
