--- 
title: billing_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_accounts
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

Creates, updates, deletes, gets or lists a <code>billing_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.billing_accounts" /></td></tr>
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
    <td><CopyableCode code="allowed_outplan" /></td>
    <td><code>object</code></td>
    <td>Allowed outplan (wire: allowedOutplan)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>Name of the billing account (wire: billingAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_threshold" /></td>
    <td><code>object</code></td>
    <td>Allowed threshold credit (wire: creditThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="current_outplan" /></td>
    <td><code>object</code></td>
    <td>Current outplan (wire: currentOutplan)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the billing account</td>
</tr>
<tr>
    <td><CopyableCode code="has_special_numbers" /></td>
    <td><code>boolean</code></td>
    <td>Check if the billing account contains at least one special number (wire: hasSpecialNumbers)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_external_number" /></td>
    <td><code>boolean</code></td>
    <td>Hide called numbers in end-of-month call details CSV (wire: hiddenExternalNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="override_displayed_number" /></td>
    <td><code>boolean</code></td>
    <td>Override number display for calls between services of your billing account (wire: overrideDisplayedNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="security_deposit" /></td>
    <td><code>object</code></td>
    <td>Security deposit amount (wire: securityDeposit)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of billing account (closed, deleted, enabled, expired)</td>
</tr>
<tr>
    <td><CopyableCode code="trusted" /></td>
    <td><code>boolean</code></td>
    <td>Is the billing account trusted</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Billing Account

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
    <td><CopyableCode code="allowed_outplan" /></td>
    <td><code>object</code></td>
    <td>Allowed outplan (wire: allowedOutplan)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>Name of the billing account (wire: billingAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_threshold" /></td>
    <td><code>object</code></td>
    <td>Allowed threshold credit (wire: creditThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="current_outplan" /></td>
    <td><code>object</code></td>
    <td>Current outplan (wire: currentOutplan)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the billing account</td>
</tr>
<tr>
    <td><CopyableCode code="has_special_numbers" /></td>
    <td><code>boolean</code></td>
    <td>Check if the billing account contains at least one special number (wire: hasSpecialNumbers)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_external_number" /></td>
    <td><code>boolean</code></td>
    <td>Hide called numbers in end-of-month call details CSV (wire: hiddenExternalNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="override_displayed_number" /></td>
    <td><code>boolean</code></td>
    <td>Override number display for calls between services of your billing account (wire: overrideDisplayedNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="security_deposit" /></td>
    <td><code>object</code></td>
    <td>Security deposit amount (wire: securityDeposit)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of billing account (closed, deleted, enabled, expired)</td>
</tr>
<tr>
    <td><CopyableCode code="trusted" /></td>
    <td><code>boolean</code></td>
    <td>Is the billing account trusted</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td></td>
    <td>Get a billing account</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List billing accounts</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td></td>
    <td>Update a billing account</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-reason"><code>reason</code></a></td>
    <td><a href="#parameter-details"><code>details</code></a></td>
    <td>Terminate a billing account</td>
</tr>
<tr>
    <td><a href="#reseller_panel_generate_password"><CopyableCode code="reseller_panel_generate_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Generate a reseller panel password</td>
</tr>
<tr>
    <td><a href="#set_default_sip_domain"><CopyableCode code="set_default_sip_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-country"><code>country</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Set the default SIP domain</td>
</tr>
<tr>
    <td><a href="#can_transfer_security_deposit"><CopyableCode code="can_transfer_security_deposit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-billingAccountDestination"><code>billingAccountDestination</code></a></td>
    <td></td>
    <td>Check a security deposit transfer</td>
</tr>
<tr>
    <td><a href="#cancel_termination"><CopyableCode code="cancel_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a></td>
    <td></td>
    <td>Cancel the billing account termination</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#transfer_security_deposit"><CopyableCode code="transfer_security_deposit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-amount"><code>amount</code></a>, <a href="#parameter-billingAccountDestination"><code>billingAccountDestination</code></a></td>
    <td></td>
    <td>Transfer the security deposit</td>
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
<tr id="parameter-billingAccount">
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount</td>
</tr>
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-reason">
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Termination reason</td>
</tr>
<tr id="parameter-details">
    <td><CopyableCode code="details" /></td>
    <td><code>string</code></td>
    <td>Termination reason details</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Get a billing account

```sql
SELECT
allowed_outplan,
billing_account,
credit_threshold,
current_outplan,
description,
has_special_numbers,
hidden_external_number,
iam,
override_displayed_number,
security_deposit,
status,
trusted
FROM ovh.telephony.billing_accounts
WHERE billing_account = '{{ billing_account }}' -- required
;
```
</TabItem>
<TabItem value="list">

List billing accounts

```sql
SELECT
allowed_outplan,
billing_account,
credit_threshold,
current_outplan,
description,
has_special_numbers,
hidden_external_number,
iam,
override_displayed_number,
security_deposit,
status,
trusted
FROM ovh.telephony.billing_accounts
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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

Update a billing account

```sql
UPDATE ovh.telephony.billing_accounts
SET 
credit_threshold = '{{ credit_threshold }}',
description = '{{ description }}',
hidden_external_number = {{ hidden_external_number }},
override_displayed_number = {{ override_displayed_number }}
WHERE 
billing_account = '{{ billing_account }}' --required;
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

Terminate a billing account

```sql
DELETE FROM ovh.telephony.billing_accounts
WHERE billing_account = '{{ billing_account }}' --required
AND reason = '{{ reason }}' --required
AND details = '{{ details }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reseller_panel_generate_password"
    values={[
        { label: 'reseller_panel_generate_password', value: 'reseller_panel_generate_password' },
        { label: 'set_default_sip_domain', value: 'set_default_sip_domain' },
        { label: 'can_transfer_security_deposit', value: 'can_transfer_security_deposit' },
        { label: 'cancel_termination', value: 'cancel_termination' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'transfer_security_deposit', value: 'transfer_security_deposit' }
    ]}
>
<TabItem value="reseller_panel_generate_password">

Generate a reseller panel password

```sql
EXEC ovh.telephony.billing_accounts.reseller_panel_generate_password 
;
```
</TabItem>
<TabItem value="set_default_sip_domain">

Set the default SIP domain

```sql
EXEC ovh.telephony.billing_accounts.set_default_sip_domain 
@@json=
'{
"country": "{{ country }}", 
"domain": "{{ domain }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="can_transfer_security_deposit">

Check a security deposit transfer

```sql
EXEC ovh.telephony.billing_accounts.can_transfer_security_deposit 
@billingAccount='{{ billingAccount }}' --required 
@@json=
'{
"billingAccountDestination": "{{ billingAccountDestination }}"
}'
;
```
</TabItem>
<TabItem value="cancel_termination">

Cancel the billing account termination

```sql
EXEC ovh.telephony.billing_accounts.cancel_termination 
@billingAccount='{{ billingAccount }}' --required
;
```
</TabItem>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.telephony.billing_accounts.change_contact 
@billingAccount='{{ billingAccount }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="transfer_security_deposit">

Transfer the security deposit

```sql
EXEC ovh.telephony.billing_accounts.transfer_security_deposit 
@billingAccount='{{ billingAccount }}' --required 
@@json=
'{
"amount": {{ amount }}, 
"billingAccountDestination": "{{ billingAccountDestination }}"
}'
;
```
</TabItem>
</Tabs>
