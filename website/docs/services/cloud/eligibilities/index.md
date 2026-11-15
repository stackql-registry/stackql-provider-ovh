--- 
title: eligibilities
hide_title: false
hide_table_of_contents: false
keywords:
  - eligibilities
  - cloud
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

Creates, updates, deletes, gets or lists an <code>eligibilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="eligibilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.eligibilities" /></td></tr>
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
    <td><CopyableCode code="actions_required" /></td>
    <td><code>array</code></td>
    <td>Actions to perform to be eligible (wire: actionsRequired)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_credit" /></td>
    <td><code>object</code></td>
    <td>Cloud project order (wire: minimumCredit)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_methods_authorized" /></td>
    <td><code>array</code></td>
    <td>Payment method accepted to order Public Cloud project (wire: paymentMethodsAuthorized)</td>
</tr>
<tr>
    <td><CopyableCode code="voucher" /></td>
    <td><code>object</code></td>
    <td>Information about voucher code</td>
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
    <td></td>
    <td><a href="#parameter-voucher"><code>voucher</code></a></td>
    <td>Check project order eligibility. Returns the actions required before ordering a project, the minimum credit and the accepted payment methods. Give a voucher code to check its credit at the same time. (Beta version)</td>
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
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-voucher">
    <td><CopyableCode code="voucher" /></td>
    <td><code>string (password)</code></td>
    <td>Voucher code</td>
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

Check project order eligibility. Returns the actions required before ordering a project, the minimum credit and the accepted payment methods. Give a voucher code to check its credit at the same time. (Beta version)

```sql
SELECT
actions_required,
minimum_credit,
payment_methods_authorized,
voucher
FROM ovh.cloud.eligibilities
WHERE voucher = '{{ voucher }}'
;
```
</TabItem>
</Tabs>
