--- 
title: payment_methods
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_methods
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

Creates, updates, deletes, gets or lists a <code>payment_methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_methods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.payment_methods" /></td></tr>
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
    <td><CopyableCode code="billing_contact_id" /></td>
    <td><code>integer</code></td>
    <td>Associated billing contact ID (wire: billingContactId)</td>
</tr>
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
    <td><CopyableCode code="payment_mean_id" /></td>
    <td><code>integer</code></td>
    <td>Payment mean ID associated to this payment method (wire: paymentMeanId)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Payment method ID (wire: paymentMethodId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if payment method is the default one for this account</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Custom customer description</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date (wire: expirationDate)</td>
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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Payment method public label</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="oneclick" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if payment method support the oneclick functionality</td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Payment method status (CANCELED, CANCELING, CREATED, CREATING, ERROR, EXPIRED, FAILED, MAINTENANCE, PAUSED, REJECTED, REPLACED, VALID, VALIDATING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Payment method object

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
    <td><CopyableCode code="billing_contact_id" /></td>
    <td><code>integer</code></td>
    <td>Associated billing contact ID (wire: billingContactId)</td>
</tr>
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
    <td><CopyableCode code="payment_mean_id" /></td>
    <td><code>integer</code></td>
    <td>Payment mean ID associated to this payment method (wire: paymentMeanId)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Payment method ID (wire: paymentMethodId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if payment method is the default one for this account</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Custom customer description</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date (wire: expirationDate)</td>
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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Payment method public label</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="oneclick" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if payment method support the oneclick functionality</td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Payment method status (CANCELED, CANCELING, CREATED, CREATING, ERROR, EXPIRED, FAILED, MAINTENANCE, PAUSED, REJECTED, REPLACED, VALID, VALIDATING)</td>
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
    <td><a href="#parameter-payment_method_id"><code>payment_method_id</code></a></td>
    <td></td>
    <td>Retrieve a payment method</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-default"><code>default</code></a>, <a href="#parameter-payment_type"><code>payment_type</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve payment method list</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-callback_url"><code>callback_url</code></a>, <a href="#parameter-payment_type"><code>payment_type</code></a></td>
    <td></td>
    <td>Register a new payment method</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-payment_method_id"><code>payment_method_id</code></a></td>
    <td></td>
    <td>Edit payment method</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-payment_method_id"><code>payment_method_id</code></a></td>
    <td></td>
    <td>Delete a payment method</td>
</tr>
<tr>
    <td><a href="#challenge"><CopyableCode code="challenge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-paymentMethodId"><code>paymentMethodId</code></a>, <a href="#parameter-challenge"><code>challenge</code></a></td>
    <td></td>
    <td>Challenge your payment method</td>
</tr>
<tr>
    <td><a href="#details"><CopyableCode code="details" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-paymentMethodId"><code>paymentMethodId</code></a></td>
    <td></td>
    <td>Add details to your payment method challenge</td>
</tr>
<tr>
    <td><a href="#finalize"><CopyableCode code="finalize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-paymentMethodId"><code>paymentMethodId</code></a></td>
    <td></td>
    <td>Finalize a payment method registration</td>
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
<tr id="parameter-paymentMethodId">
    <td><CopyableCode code="paymentMethodId" /></td>
    <td><code>integer</code></td>
    <td>Payment method ID</td>
</tr>
<tr id="parameter-payment_method_id">
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Payment method ID (wire: paymentMethodId)</td>
</tr>
<tr id="parameter-default">
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Filter on 'default' property</td>
</tr>
<tr id="parameter-payment_type">
    <td><CopyableCode code="payment_type" /></td>
    <td><code>string</code></td>
    <td>Filter on 'paymentType' property (wire: paymentType)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter on 'status' property</td>
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

Retrieve a payment method

```sql
SELECT
billing_contact_id,
form_session_id,
merchant_id,
payment_mean_id,
payment_method_id,
creation_date,
default,
description,
expiration_date,
icon,
integration,
label,
last_update,
oneclick,
payment_sub_type,
payment_type,
status
FROM ovh.me.payment_methods
WHERE payment_method_id = '{{ payment_method_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve payment method list

```sql
SELECT
billing_contact_id,
form_session_id,
merchant_id,
payment_mean_id,
payment_method_id,
creation_date,
default,
description,
expiration_date,
icon,
integration,
label,
last_update,
oneclick,
payment_sub_type,
payment_type,
status
FROM ovh.me.payment_methods
WHERE default = '{{ default }}'
AND payment_type = '{{ payment_type }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Register a new payment method

```sql
INSERT INTO ovh.me.payment_methods (
billing_contact_id,
callback_url,
default,
description,
form_data,
order_id,
payment_sub_type,
payment_type,
register
)
SELECT 
{{ billing_contact_id }},
'{{ callback_url }}' /* required */,
{{ default }},
'{{ description }}',
'{{ form_data }}',
{{ order_id }},
'{{ payment_sub_type }}',
'{{ payment_type }}' /* required */,
{{ register }}
RETURNING
form_session_id,
merchant_id,
organization_id,
payment_method_id,
transaction_id,
url,
validation_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: payment_methods
  props:
    - name: billing_contact_id
      value: {{ billing_contact_id }}
      description: |
        Associated billing contact ID
    - name: callback_url
      description: |
        Callback URL's necessary to register
      value:
        cancel: "{{ cancel }}"
        error: "{{ error }}"
        failure: "{{ failure }}"
        pending: "{{ pending }}"
        success: "{{ success }}"
    - name: default
      value: {{ default }}
      description: |
        Indicates if this payment method will be set as the default one
    - name: description
      value: "{{ description }}"
      description: |
        Personalized description
    - name: form_data
      value: "{{ form_data }}"
      description: |
        Additional payment information
    - name: order_id
      value: {{ order_id }}
      description: |
        Order ID to pay it if it's possible (in oneshot transaction or while registration)
    - name: payment_sub_type
      value: "{{ payment_sub_type }}"
      description: |
        Payment sub-type
      valid_values: ['CHORUS', 'NONE']
    - name: payment_type
      value: "{{ payment_type }}"
      description: |
        Payment type
    - name: register
      value: {{ register }}
      description: |
        Register this payment method if it's possible (default value is false and will proceed a oneshot transaction)
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Edit payment method

```sql
UPDATE ovh.me.payment_methods
SET 
default = {{ default }},
description = '{{ description }}'
WHERE 
payment_method_id = '{{ payment_method_id }}' --required
RETURNING
billing_contact_id,
form_session_id,
merchant_id,
payment_mean_id,
payment_method_id,
creation_date,
default,
description,
expiration_date,
icon,
integration,
label,
last_update,
oneclick,
payment_sub_type,
payment_type,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a payment method

```sql
DELETE FROM ovh.me.payment_methods
WHERE payment_method_id = '{{ payment_method_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="challenge"
    values={[
        { label: 'challenge', value: 'challenge' },
        { label: 'details', value: 'details' },
        { label: 'finalize', value: 'finalize' }
    ]}
>
<TabItem value="challenge">

Challenge your payment method

```sql
EXEC ovh.me.payment_methods.challenge 
@paymentMethodId='{{ paymentMethodId }}' --required 
@@json=
'{
"challenge": "{{ challenge }}"
}'
;
```
</TabItem>
<TabItem value="details">

Add details to your payment method challenge

```sql
EXEC ovh.me.payment_methods.details 
@paymentMethodId='{{ paymentMethodId }}' --required 
@@json=
'{
"details": "{{ details }}", 
"transactionId": {{ transactionId }}
}'
;
```
</TabItem>
<TabItem value="finalize">

Finalize a payment method registration

```sql
EXEC ovh.me.payment_methods.finalize 
@paymentMethodId='{{ paymentMethodId }}' --required 
@@json=
'{
"expirationMonth": {{ expirationMonth }}, 
"expirationYear": {{ expirationYear }}, 
"formSessionId": "{{ formSessionId }}", 
"registrationId": "{{ registrationId }}"
}'
;
```
</TabItem>
</Tabs>
