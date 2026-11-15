--- 
title: payment_available_methods
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_available_methods
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

Creates, updates, deletes, gets or lists a <code>payment_available_methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_available_methods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.payment_available_methods" /></td></tr>
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

Available payment method object

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
    <td><CopyableCode code="form_session_id" /></td>
    <td><code>string</code></td>
    <td>Form session ID (wire: formSessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="merchant_id" /></td>
    <td><code>string</code></td>
    <td>Merchant ID (wire: merchantId)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>Organization ID (wire: organizationId)</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>object</code></td>
    <td>Payment method type icon</td>
</tr>
<tr>
    <td><CopyableCode code="integration" /></td>
    <td><code>string</code></td>
    <td>Payment method integration type (BANK_TRANSFER, COMPONENT, IFRAME_VANTIV, IN_CONTEXT, NONE, OSP, POST_FORM, REDIRECT)</td>
</tr>
<tr>
    <td><CopyableCode code="oneshot" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if payment method type allows to process oneshot payment</td>
</tr>
<tr>
    <td><CopyableCode code="payment_sub_type" /></td>
    <td><code>string</code></td>
    <td>Payment method sub-type (30_DAYS, 45_DAYS, 60_DAYS, AMERICAN_EXPRESS, AURA, CARTE_BANCAIRE, CARTE_BLEUE, CHORUS, DINERS_CLUB, DISCOVER, JCB, MAESTRO, MASTERCARD, NONE, RUPAY, VISA) (wire: paymentSubType)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_type" /></td>
    <td><code>string</code></td>
    <td>Payment method type (wire: paymentType)</td>
</tr>
<tr>
    <td><CopyableCode code="registerable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if payment method type is registerable ?</td>
</tr>
<tr>
    <td><CopyableCode code="registerable_with_transaction" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if payment method type allows payment and registration at the same time (wire: registerableWithTransaction)</td>
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
    <td></td>
    <td></td>
    <td>Retrieve available payment method</td>
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

Retrieve available payment method

```sql
SELECT
form_session_id,
merchant_id,
organization_id,
icon,
integration,
oneshot,
payment_sub_type,
payment_type,
registerable,
registerable_with_transaction
FROM ovh.me.payment_available_methods
;
```
</TabItem>
</Tabs>
