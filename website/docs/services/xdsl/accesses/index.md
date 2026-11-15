--- 
title: accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - accesses
  - xdsl
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

Creates, updates, deletes, gets or lists an <code>accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.accesses" /></td></tr>
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
    <td><CopyableCode code="access_name" /></td>
    <td><code>string</code></td>
    <td> (wire: accessName)</td>
</tr>
<tr>
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>Pack name, if access is in a pack (wire: packName)</td>
</tr>
<tr>
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>Possible copper or fiber technologies (adsl, ftte, ftth, ftto, sdsl, vdsl) (wire: accessType)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>All components of an address</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Describe the capabilities of the Access</td>
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
    <td><CopyableCode code="ipv_6_enabled" /></td>
    <td><code>boolean</code></td>
    <td> (wire: ipv6Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="lns_rate_limit" /></td>
    <td><code>integer</code></td>
    <td>Rate limit on the LNS in kbps - Only available if canApplyLnsRateLimit capability is set to true - Must be a multiple of 64 - Min value 64 / Max value 100032 (wire: lnsRateLimit)</td>
</tr>
<tr>
    <td><CopyableCode code="mail_sending" /></td>
    <td><code>string</code></td>
    <td>Status of mail sending on the Access (blockedForSpam, disabled, enabled) (wire: mailSending)</td>
</tr>
<tr>
    <td><CopyableCode code="modem_profile" /></td>
    <td><code>string</code></td>
    <td>Get modem profile connection linked to the access (A, B, C, D) (wire: modemProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this access is monitored</td>
</tr>
<tr>
    <td><CopyableCode code="mttr" /></td>
    <td><code>string</code></td>
    <td>Get the Mean Time To Repair (MTTR) of the access (10ho, 20m_10ho, 20m_4ho, 4hno, 4ho, 5m_10ho, 5m_4ho, dplus1, none)</td>
</tr>
<tr>
    <td><CopyableCode code="nra" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pairs_number" /></td>
    <td><code>integer</code></td>
    <td> (wire: pairsNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider (axione, bouygues, ft, ftBySfr, kosc, koscDeg, ovh, sfr)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_infra" /></td>
    <td><code>string</code></td>
    <td>The provider of the infrastructure, if applicable (wire: providerInfra)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Available access roles (backup, main)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the access (active, cancelled, close, deleting, doing, migration, slamming, terminated, upgradeOffer)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

XDSL Access

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
    <td><CopyableCode code="access_name" /></td>
    <td><code>string</code></td>
    <td> (wire: accessName)</td>
</tr>
<tr>
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>Pack name, if access is in a pack (wire: packName)</td>
</tr>
<tr>
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>Possible copper or fiber technologies (adsl, ftte, ftth, ftto, sdsl, vdsl) (wire: accessType)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>All components of an address</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Describe the capabilities of the Access</td>
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
    <td><CopyableCode code="ipv_6_enabled" /></td>
    <td><code>boolean</code></td>
    <td> (wire: ipv6Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="lns_rate_limit" /></td>
    <td><code>integer</code></td>
    <td>Rate limit on the LNS in kbps - Only available if canApplyLnsRateLimit capability is set to true - Must be a multiple of 64 - Min value 64 / Max value 100032 (wire: lnsRateLimit)</td>
</tr>
<tr>
    <td><CopyableCode code="mail_sending" /></td>
    <td><code>string</code></td>
    <td>Status of mail sending on the Access (blockedForSpam, disabled, enabled) (wire: mailSending)</td>
</tr>
<tr>
    <td><CopyableCode code="modem_profile" /></td>
    <td><code>string</code></td>
    <td>Get modem profile connection linked to the access (A, B, C, D) (wire: modemProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this access is monitored</td>
</tr>
<tr>
    <td><CopyableCode code="mttr" /></td>
    <td><code>string</code></td>
    <td>Get the Mean Time To Repair (MTTR) of the access (10ho, 20m_10ho, 20m_4ho, 4hno, 4ho, 5m_10ho, 5m_4ho, dplus1, none)</td>
</tr>
<tr>
    <td><CopyableCode code="nra" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pairs_number" /></td>
    <td><code>integer</code></td>
    <td> (wire: pairsNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider (axione, bouygues, ft, ftBySfr, kosc, koscDeg, ovh, sfr)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_infra" /></td>
    <td><code>string</code></td>
    <td>The provider of the infrastructure, if applicable (wire: providerInfra)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Available access roles (backup, main)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the access (active, cancelled, close, deleting, doing, migration, slamming, terminated, upgradeOffer)</td>
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
    <td>Returns the access type, address, status, provider, NRA, pack name, IPv6 and mail sending status, monitoring, LNS rate limit, mean time to repair and capabilities.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the xDSL accesses of the account. Each name is the serviceName used by the other xDSL calls.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the settings that can be modified: the customer description, the monitoring and the LNS rate limit.</td>
</tr>
<tr>
    <td><a href="#address_move_extra_ip_range_move"><CopyableCode code="address_move_extra_ip_range_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the move of the extra IP range of the access to its new access after an address move. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#apply_template_to_modem"><CopyableCode code="apply_template_to_modem" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-templateName"><code>templateName</code></a></td>
    <td></td>
    <td>Applies a modem template to the modem of the access, except the parameters the template ignores. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#cancel_resiliation"><CopyableCode code="cancel_resiliation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Cancels the ongoing resiliation of the access. Check first that it can be canceled with canCancelResiliation.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts a procedure to change the admin, tech or billing contact of the access. Returns the IDs of the contact change tasks.</td>
</tr>
<tr>
    <td><a href="#ipv6"><CopyableCode code="ipv6" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Turns IPv6 on or off for the access. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
</tr>
<tr>
    <td><a href="#mail_sending"><CopyableCode code="mail_sending" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Allows or blocks outgoing email (SMTP) from the access. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#order_meeting"><CopyableCode code="order_meeting" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-endDate"><code>endDate</code></a>, <a href="#parameter-startDate"><code>startDate</code></a>, <a href="#parameter-uiCode"><code>uiCode</code></a></td>
    <td></td>
    <td>Books one of the time slots returned by searchOrderMeetings for the access and relaunches its order.</td>
</tr>
<tr>
    <td><a href="#request_ppp_login_mail"><CopyableCode code="request_ppp_login_mail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Renews the PPP password of the access and sends the PPP login information to the email address of the admin contact.</td>
</tr>
<tr>
    <td><a href="#request_total_deconsolidation"><CopyableCode code="request_total_deconsolidation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Switches the access to total deconsolidation, porting its line number with its RIO code unless noPortability is set. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#resiliate"><CopyableCode code="resiliate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-resiliationSurvey"><code>resiliationSurvey</code></a></td>
    <td></td>
    <td>Requests the resiliation of the access at the given date with a resiliation survey. Returns the resiliation status, effective date and whether the modem must be returned.</td>
</tr>
<tr>
    <td><a href="#search_order_meetings"><CopyableCode code="search_order_meetings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Returns, as an asynchronous task, the available time slots for the line creation meeting of the access order.</td>
</tr>
<tr>
    <td><a href="#send_order_to_provider"><CopyableCode code="send_order_to_provider" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Sends to the provider an order in waitingCustomer status. Only applies to orders whose modem was sent before anything was forwarded to the provider.</td>
</tr>
<tr>
    <td><a href="#update_invalid_or_missing_rio"><CopyableCode code="update_invalid_or_missing_rio" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-relaunchWithoutPortability"><code>relaunchWithoutPortability</code></a></td>
    <td></td>
    <td>Sets the RIO code of an order in error because of a missing or invalid RIO, or relaunches the order without number portability.</td>
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
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the access type, address, status, provider, NRA, pack name, IPv6 and mail sending status, monitoring, LNS rate limit, mean time to repair and capabilities.

```sql
SELECT
access_name,
pack_name,
access_type,
address,
capabilities,
description,
iam,
ipv_6_enabled,
lns_rate_limit,
mail_sending,
modem_profile,
monitoring,
mttr,
nra,
pairs_number,
provider,
provider_infra,
role,
status
FROM ovh.xdsl.accesses
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the xDSL accesses of the account. Each name is the serviceName used by the other xDSL calls.

```sql
SELECT
access_name,
pack_name,
access_type,
address,
capabilities,
description,
iam,
ipv_6_enabled,
lns_rate_limit,
mail_sending,
modem_profile,
monitoring,
mttr,
nra,
pairs_number,
provider,
provider_infra,
role,
status
FROM ovh.xdsl.accesses
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

Changes the settings that can be modified: the customer description, the monitoring and the LNS rate limit.

```sql
UPDATE ovh.xdsl.accesses
SET 
description = '{{ description }}',
lns_rate_limit = {{ lns_rate_limit }},
monitoring = {{ monitoring }}
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="address_move_extra_ip_range_move"
    values={[
        { label: 'address_move_extra_ip_range_move', value: 'address_move_extra_ip_range_move' },
        { label: 'apply_template_to_modem', value: 'apply_template_to_modem' },
        { label: 'cancel_resiliation', value: 'cancel_resiliation' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'ipv6', value: 'ipv6' },
        { label: 'log_url', value: 'log_url' },
        { label: 'mail_sending', value: 'mail_sending' },
        { label: 'order_meeting', value: 'order_meeting' },
        { label: 'request_ppp_login_mail', value: 'request_ppp_login_mail' },
        { label: 'request_total_deconsolidation', value: 'request_total_deconsolidation' },
        { label: 'resiliate', value: 'resiliate' },
        { label: 'search_order_meetings', value: 'search_order_meetings' },
        { label: 'send_order_to_provider', value: 'send_order_to_provider' },
        { label: 'update_invalid_or_missing_rio', value: 'update_invalid_or_missing_rio' }
    ]}
>
<TabItem value="address_move_extra_ip_range_move">

Starts the move of the extra IP range of the access to its new access after an address move. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.accesses.address_move_extra_ip_range_move 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="apply_template_to_modem">

Applies a modem template to the modem of the access, except the parameters the template ignores. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.accesses.apply_template_to_modem 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"templateName": "{{ templateName }}"
}'
;
```
</TabItem>
<TabItem value="cancel_resiliation">

Cancels the ongoing resiliation of the access. Check first that it can be canceled with canCancelResiliation.

```sql
EXEC ovh.xdsl.accesses.cancel_resiliation 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="change_contact">

Starts a procedure to change the admin, tech or billing contact of the access. Returns the IDs of the contact change tasks.

```sql
EXEC ovh.xdsl.accesses.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="ipv6">

Turns IPv6 on or off for the access. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.accesses.ipv6 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"enabled": {{ enabled }}
}'
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.xdsl.accesses.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="mail_sending">

Allows or blocks outgoing email (SMTP) from the access. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.accesses.mail_sending 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"status": "{{ status }}"
}'
;
```
</TabItem>
<TabItem value="order_meeting">

Books one of the time slots returned by searchOrderMeetings for the access and relaunches its order.

```sql
EXEC ovh.xdsl.accesses.order_meeting 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"endDate": "{{ endDate }}", 
"startDate": "{{ startDate }}", 
"uiCode": "{{ uiCode }}"
}'
;
```
</TabItem>
<TabItem value="request_ppp_login_mail">

Renews the PPP password of the access and sends the PPP login information to the email address of the admin contact.

```sql
EXEC ovh.xdsl.accesses.request_ppp_login_mail 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="request_total_deconsolidation">

Switches the access to total deconsolidation, porting its line number with its RIO code unless noPortability is set. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.accesses.request_total_deconsolidation 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"noPortability": {{ noPortability }}, 
"rio": "{{ rio }}"
}'
;
```
</TabItem>
<TabItem value="resiliate">

Requests the resiliation of the access at the given date with a resiliation survey. Returns the resiliation status, effective date and whether the modem must be returned.

```sql
EXEC ovh.xdsl.accesses.resiliate 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"resiliationDate": "{{ resiliationDate }}", 
"resiliationSurvey": "{{ resiliationSurvey }}"
}'
;
```
</TabItem>
<TabItem value="search_order_meetings">

Returns, as an asynchronous task, the available time slots for the line creation meeting of the access order.

```sql
EXEC ovh.xdsl.accesses.search_order_meetings 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="send_order_to_provider">

Sends to the provider an order in waitingCustomer status. Only applies to orders whose modem was sent before anything was forwarded to the provider.

```sql
EXEC ovh.xdsl.accesses.send_order_to_provider 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="update_invalid_or_missing_rio">

Sets the RIO code of an order in error because of a missing or invalid RIO, or relaunches the order without number portability.

```sql
EXEC ovh.xdsl.accesses.update_invalid_or_missing_rio 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"relaunchWithoutPortability": {{ relaunchWithoutPortability }}, 
"rio": "{{ rio }}"
}'
;
```
</TabItem>
</Tabs>
