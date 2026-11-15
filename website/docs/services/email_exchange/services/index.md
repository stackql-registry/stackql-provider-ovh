--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - email_exchange
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.services" /></td></tr>
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
    <td><CopyableCode code="default_authentication_policy_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the authentication policy to apply on a new Exchange account (wire: defaultAuthenticationPolicyId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>service displayName (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="adfs_change_password" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable password change via ADFS (wire: adfsChangePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_dcv_record" /></td>
    <td><code>string</code></td>
    <td>DNS Domain Control Validation record, require for order ssl varification process (wire: cnameDcvRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="complexity_enabled" /></td>
    <td><code>boolean</code></td>
    <td>enable policy for strong and secure passwords (wire: complexityEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="default_smart_host" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that can be used to send all e-mails via default send connector (wire: defaultSmartHost)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Update date (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_duration" /></td>
    <td><code>integer</code></td>
    <td>number of minutes account will remain locked if it occurs (wire: lockoutDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_observation_window" /></td>
    <td><code>integer</code></td>
    <td>number of minutes that must elapse after a failed logon to reset lockout trigger (wire: lockoutObservationWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_threshold" /></td>
    <td><code>integer</code></td>
    <td>number of attempts before account to be locked (wire: lockoutThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="max_password_age" /></td>
    <td><code>integer</code></td>
    <td>maximum number of days that account's password is valid before expiration (wire: maxPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="max_receive_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum message size that You can receive in MB (wire: maxReceiveSize)</td>
</tr>
<tr>
    <td><CopyableCode code="max_send_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum message size that You can send in MB (wire: maxSendSize)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_age" /></td>
    <td><code>integer</code></td>
    <td>minimum number of days before able to change account's password (wire: minPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_length" /></td>
    <td><code>integer</code></td>
    <td>minimum number of characters password must contain (wire: minPasswordLength)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Service Offer name (dedicated, dedicatedCluster, hosted, provider)</td>
</tr>
<tr>
    <td><CopyableCode code="password_history_count" /></td>
    <td><code>integer</code></td>
    <td>number of historical password that cannot be reused (wire: passwordHistoryCount)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_expiration_date" /></td>
    <td><code>string (date)</code></td>
    <td> (wire: sslExpirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Exchange Service State (inMaintenance, ok, suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="web_url" /></td>
    <td><code>string</code></td>
    <td>URL for web interface (wire: webUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange service

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
    <td><CopyableCode code="default_authentication_policy_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the authentication policy to apply on a new Exchange account (wire: defaultAuthenticationPolicyId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>service displayName (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="adfs_change_password" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable password change via ADFS (wire: adfsChangePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_dcv_record" /></td>
    <td><code>string</code></td>
    <td>DNS Domain Control Validation record, require for order ssl varification process (wire: cnameDcvRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="complexity_enabled" /></td>
    <td><code>boolean</code></td>
    <td>enable policy for strong and secure passwords (wire: complexityEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="default_smart_host" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that can be used to send all e-mails via default send connector (wire: defaultSmartHost)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Update date (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_duration" /></td>
    <td><code>integer</code></td>
    <td>number of minutes account will remain locked if it occurs (wire: lockoutDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_observation_window" /></td>
    <td><code>integer</code></td>
    <td>number of minutes that must elapse after a failed logon to reset lockout trigger (wire: lockoutObservationWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_threshold" /></td>
    <td><code>integer</code></td>
    <td>number of attempts before account to be locked (wire: lockoutThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="max_password_age" /></td>
    <td><code>integer</code></td>
    <td>maximum number of days that account's password is valid before expiration (wire: maxPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="max_receive_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum message size that You can receive in MB (wire: maxReceiveSize)</td>
</tr>
<tr>
    <td><CopyableCode code="max_send_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum message size that You can send in MB (wire: maxSendSize)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_age" /></td>
    <td><code>integer</code></td>
    <td>minimum number of days before able to change account's password (wire: minPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_length" /></td>
    <td><code>integer</code></td>
    <td>minimum number of characters password must contain (wire: minPasswordLength)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Service Offer name (dedicated, dedicatedCluster, hosted, provider)</td>
</tr>
<tr>
    <td><CopyableCode code="password_history_count" /></td>
    <td><code>integer</code></td>
    <td>number of historical password that cannot be reused (wire: passwordHistoryCount)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_expiration_date" /></td>
    <td><code>string (date)</code></td>
    <td> (wire: sslExpirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Exchange Service State (inMaintenance, ok, suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="web_url" /></td>
    <td><code>string</code></td>
    <td>URL for web interface (wire: webUrl)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get the Exchange service. Returns the offer, state, hostname, display name, password and lockout policy, message size limits, spam and virus settings and SSL expiration date of the service.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Exchange services. Returns the names of the Exchange services of the organization. Filter them by IAM tags with `iamTags`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Update the Exchange service. Updates the display name, password and lockout policy, message size limits, spam and virus settings, ADFS password change and default authentication policy of the service.</td>
</tr>
<tr>
    <td><a href="#activate_sharepoint"><CopyableCode code="activate_sharepoint" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-primaryEmailAddress"><code>primaryEmailAddress</code></a>, <a href="#parameter-subDomain"><code>subDomain</code></a></td>
    <td></td>
    <td>Activate Sharepoint infra connected to this exchange service (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#change_hostname"><CopyableCode code="change_hostname" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-useDnsAssist"><code>useDnsAssist</code></a></td>
    <td></td>
    <td>Change the SSL hostname. Sets the SSL hostname of the service and returns the task. Validate the hostname with a DCV email (`dcvEmail`) or a CNAME record (`useCname`); `useDnsAssist` sets the DNS records for a domain managed by OVHcloud.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#renew_ssl"><CopyableCode code="renew_ssl" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a></td>
    <td></td>
    <td>Renew the SSL certificate. Renews the SSL certificate when it expires within 30 days, and returns the task. Validate the domain with a DCV email (`dcv`) or a CNAME record (`useCname`), which `useDnsAssist` creates for a domain managed by OVHcloud.</td>
</tr>
<tr>
    <td><a href="#update_device_list"><CopyableCode code="update_device_list" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a></td>
    <td></td>
    <td>Synchronize the device list. Synchronizes the list of ActiveSync devices with the Exchange server, and returns the task. Only available on the Private offer.</td>
</tr>
<tr>
    <td><a href="#update_flags_on_all_accounts"><CopyableCode code="update_flags_on_all_accounts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a></td>
    <td></td>
    <td>Update spam and virus flags. Applies the spam and virus configuration of the service (`spamAndVirusConfiguration`) to all its active email accounts.</td>
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
<tr id="parameter-exchangeService">
    <td><CopyableCode code="exchangeService" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service</td>
</tr>
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-organizationName">
    <td><CopyableCode code="organizationName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
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

Get the Exchange service. Returns the offer, state, hostname, display name, password and lockout policy, message size limits, spam and virus settings and SSL expiration date of the service.

```sql
SELECT
default_authentication_policy_id,
task_pending_id,
display_name,
adfs_change_password,
cname_dcv_record,
complexity_enabled,
default_smart_host,
domain,
hostname,
iam,
last_update_date,
lockout_duration,
lockout_observation_window,
lockout_threshold,
max_password_age,
max_receive_size,
max_send_size,
min_password_age,
min_password_length,
offer,
password_history_count,
spam_and_virus_configuration,
ssl_expiration_date,
state,
web_url
FROM ovh.email_exchange.services
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Exchange services. Returns the names of the Exchange services of the organization. Filter them by IAM tags with `iamTags`.

```sql
SELECT
default_authentication_policy_id,
task_pending_id,
display_name,
adfs_change_password,
cname_dcv_record,
complexity_enabled,
default_smart_host,
domain,
hostname,
iam,
last_update_date,
lockout_duration,
lockout_observation_window,
lockout_threshold,
max_password_age,
max_receive_size,
max_send_size,
min_password_age,
min_password_length,
offer,
password_history_count,
spam_and_virus_configuration,
ssl_expiration_date,
state,
web_url
FROM ovh.email_exchange.services
WHERE organization_name = '{{ organization_name }}' -- required
AND iam_tags = '{{ iam_tags }}'
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

Update the Exchange service. Updates the display name, password and lockout policy, message size limits, spam and virus settings, ADFS password change and default authentication policy of the service.

```sql
UPDATE ovh.email_exchange.services
SET 
adfs_change_password = {{ adfs_change_password }},
complexity_enabled = {{ complexity_enabled }},
default_authentication_policy_id = {{ default_authentication_policy_id }},
display_name = '{{ display_name }}',
lockout_duration = {{ lockout_duration }},
lockout_observation_window = {{ lockout_observation_window }},
lockout_threshold = {{ lockout_threshold }},
max_password_age = {{ max_password_age }},
max_receive_size = {{ max_receive_size }},
max_send_size = {{ max_send_size }},
min_password_age = {{ min_password_age }},
min_password_length = {{ min_password_length }},
password_history_count = {{ password_history_count }},
spam_and_virus_configuration = '{{ spam_and_virus_configuration }}'
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="activate_sharepoint"
    values={[
        { label: 'activate_sharepoint', value: 'activate_sharepoint' },
        { label: 'change_hostname', value: 'change_hostname' },
        { label: 'log_url', value: 'log_url' },
        { label: 'renew_ssl', value: 'renew_ssl' },
        { label: 'update_device_list', value: 'update_device_list' },
        { label: 'update_flags_on_all_accounts', value: 'update_flags_on_all_accounts' }
    ]}
>
<TabItem value="activate_sharepoint">

Activate Sharepoint infra connected to this exchange service (Deprecated, will be removed)

```sql
EXEC ovh.email_exchange.services.activate_sharepoint 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required 
@@json=
'{
"primaryEmailAddress": "{{ primaryEmailAddress }}", 
"subDomain": "{{ subDomain }}"
}'
;
```
</TabItem>
<TabItem value="change_hostname">

Change the SSL hostname. Sets the SSL hostname of the service and returns the task. Validate the hostname with a DCV email (`dcvEmail`) or a CNAME record (`useCname`); `useDnsAssist` sets the DNS records for a domain managed by OVHcloud.

```sql
EXEC ovh.email_exchange.services.change_hostname 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required 
@@json=
'{
"dcvEmail": "{{ dcvEmail }}", 
"hostname": "{{ hostname }}", 
"useCname": {{ useCname }}, 
"useDnsAssist": {{ useDnsAssist }}
}'
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires. (Alpha version)

```sql
EXEC ovh.email_exchange.services.log_url 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="renew_ssl">

Renew the SSL certificate. Renews the SSL certificate when it expires within 30 days, and returns the task. Validate the domain with a DCV email (`dcv`) or a CNAME record (`useCname`), which `useDnsAssist` creates for a domain managed by OVHcloud.

```sql
EXEC ovh.email_exchange.services.renew_ssl 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required 
@@json=
'{
"dcv": "{{ dcv }}", 
"useCname": {{ useCname }}, 
"useDnsAssist": {{ useDnsAssist }}
}'
;
```
</TabItem>
<TabItem value="update_device_list">

Synchronize the device list. Synchronizes the list of ActiveSync devices with the Exchange server, and returns the task. Only available on the Private offer.

```sql
EXEC ovh.email_exchange.services.update_device_list 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required
;
```
</TabItem>
<TabItem value="update_flags_on_all_accounts">

Update spam and virus flags. Applies the spam and virus configuration of the service (`spamAndVirusConfiguration`) to all its active email accounts.

```sql
EXEC ovh.email_exchange.services.update_flags_on_all_accounts 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required
;
```
</TabItem>
</Tabs>
