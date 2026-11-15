--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - sms
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.accounts" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="automatic_recredit_amount" /></td>
    <td><code>integer</code></td>
    <td>Pack quantity automatic recredit possibilities (100, 200, 250, 500, 1000, 5000, 10000) (wire: automaticRecreditAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when state of a sent SMS changes (wire: callBack)</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>For what purpose this account can be used for (both, marketing, transactional)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_threshold_for_automatic_recredit" /></td>
    <td><code>number</code></td>
    <td>Credit threshold after which an automatic recredit is launched (wire: creditThresholdForAutomaticRecredit)</td>
</tr>
<tr>
    <td><CopyableCode code="credits_hold_by_quota" /></td>
    <td><code>number</code></td>
    <td> (wire: creditsHoldByQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="credits_left" /></td>
    <td><code>number</code></td>
    <td> (wire: creditsLeft)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="smpp" /></td>
    <td><code>boolean</code></td>
    <td>Whether the account can be used for smpp or not</td>
</tr>
<tr>
    <td><CopyableCode code="sms_response" /></td>
    <td><code>object</code></td>
    <td>A structure describing how to manage an sms Response (wire: smsResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Account status (disable, enable)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when a STOP is received after a receiver replied stop to a SMS (wire: stopCallBack)</td>
</tr>
<tr>
    <td><CopyableCode code="templates" /></td>
    <td><code>object</code></td>
    <td>A structure describing all information about templates informations</td>
</tr>
<tr>
    <td><CopyableCode code="user_quantity_with_quota" /></td>
    <td><code>integer</code></td>
    <td> (wire: userQuantityWithQuota)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

SMS details

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="automatic_recredit_amount" /></td>
    <td><code>integer</code></td>
    <td>Pack quantity automatic recredit possibilities (100, 200, 250, 500, 1000, 5000, 10000) (wire: automaticRecreditAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when state of a sent SMS changes (wire: callBack)</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>For what purpose this account can be used for (both, marketing, transactional)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_threshold_for_automatic_recredit" /></td>
    <td><code>number</code></td>
    <td>Credit threshold after which an automatic recredit is launched (wire: creditThresholdForAutomaticRecredit)</td>
</tr>
<tr>
    <td><CopyableCode code="credits_hold_by_quota" /></td>
    <td><code>number</code></td>
    <td> (wire: creditsHoldByQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="credits_left" /></td>
    <td><code>number</code></td>
    <td> (wire: creditsLeft)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="smpp" /></td>
    <td><code>boolean</code></td>
    <td>Whether the account can be used for smpp or not</td>
</tr>
<tr>
    <td><CopyableCode code="sms_response" /></td>
    <td><code>object</code></td>
    <td>A structure describing how to manage an sms Response (wire: smsResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Account status (disable, enable)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when a STOP is received after a receiver replied stop to a SMS (wire: stopCallBack)</td>
</tr>
<tr>
    <td><CopyableCode code="templates" /></td>
    <td><code>object</code></td>
    <td>A structure describing all information about templates informations</td>
</tr>
<tr>
    <td><CopyableCode code="user_quantity_with_quota" /></td>
    <td><code>integer</code></td>
    <td> (wire: userQuantityWithQuota)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an SMS account. Returns the SMS account: status, credits left, callback URLs, automatic recredit settings and channel.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List SMS accounts. Returns the service names of the SMS accounts of the customer. Get an SMS account for its status, credits left and settings.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an SMS account. Updates the SMS account settings, such as the callback URLs, the templates and the automatic recredit.</td>
</tr>
<tr>
    <td><a href="#estimate"><CopyableCode code="estimate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-message"><code>message</code></a>, <a href="#parameter-noStopClause"><code>noStopClause</code></a>, <a href="#parameter-senderType"><code>senderType</code></a></td>
    <td></td>
    <td>Estimate a message. Returns the encoding, the length and the number of SMS parts needed to send a text message.</td>
</tr>
<tr>
    <td><a href="#smpp_password"><CopyableCode code="smpp_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generates a new password for the SMPP account.</td>
</tr>
<tr>
    <td><a href="#transfer_credits"><CopyableCode code="transfer_credits" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-credits"><code>credits</code></a>, <a href="#parameter-smsAccountTarget"><code>smsAccountTarget</code></a></td>
    <td></td>
    <td>Transfer credits. Transfers an amount of credits from this SMS account to another SMS account, given by its service name.</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Get an SMS account. Returns the SMS account: status, credits left, callback URLs, automatic recredit settings and channel.

```sql
SELECT
name,
automatic_recredit_amount,
call_back,
channel,
credit_threshold_for_automatic_recredit,
credits_hold_by_quota,
credits_left,
description,
iam,
smpp,
sms_response,
status,
stop_call_back,
templates,
user_quantity_with_quota
FROM ovh.sms.accounts
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List SMS accounts. Returns the service names of the SMS accounts of the customer. Get an SMS account for its status, credits left and settings.

```sql
SELECT
name,
automatic_recredit_amount,
call_back,
channel,
credit_threshold_for_automatic_recredit,
credits_hold_by_quota,
credits_left,
description,
iam,
smpp,
sms_response,
status,
stop_call_back,
templates,
user_quantity_with_quota
FROM ovh.sms.accounts
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

Update an SMS account. Updates the SMS account settings, such as the callback URLs, the templates and the automatic recredit.

```sql
UPDATE ovh.sms.accounts
SET 
automatic_recredit_amount = {{ automatic_recredit_amount }},
call_back = '{{ call_back }}',
credit_threshold_for_automatic_recredit = {{ credit_threshold_for_automatic_recredit }},
description = '{{ description }}',
sms_response = '{{ sms_response }}',
stop_call_back = '{{ stop_call_back }}',
templates = '{{ templates }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="estimate"
    values={[
        { label: 'estimate', value: 'estimate' },
        { label: 'smpp_password', value: 'smpp_password' },
        { label: 'transfer_credits', value: 'transfer_credits' }
    ]}
>
<TabItem value="estimate">

Estimate a message. Returns the encoding, the length and the number of SMS parts needed to send a text message.

```sql
EXEC ovh.sms.accounts.estimate 
@@json=
'{
"message": "{{ message }}", 
"noStopClause": {{ noStopClause }}, 
"senderType": "{{ senderType }}"
}'
;
```
</TabItem>
<TabItem value="smpp_password">

Generates a new password for the SMPP account.

```sql
EXEC ovh.sms.accounts.smpp_password 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="transfer_credits">

Transfer credits. Transfers an amount of credits from this SMS account to another SMS account, given by its service name.

```sql
EXEC ovh.sms.accounts.transfer_credits 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"credits": {{ credits }}, 
"smsAccountTarget": "{{ smsAccountTarget }}"
}'
;
```
</TabItem>
</Tabs>
