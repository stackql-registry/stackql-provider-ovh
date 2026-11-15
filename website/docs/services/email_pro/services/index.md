--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - email_pro
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_pro.services" /></td></tr>
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
    <td><CopyableCode code="complexity_enabled" /></td>
    <td><code>boolean</code></td>
    <td>enable policy for strong and secure passwords (wire: complexityEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain name of your service</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname of your service</td>
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
    <td>Type of your offer (emailpro)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of your service (creating, deleting, inMaintenance, ok, reopening, suspended, suspending)</td>
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

Email pro service

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
    <td><CopyableCode code="complexity_enabled" /></td>
    <td><code>boolean</code></td>
    <td>enable policy for strong and secure passwords (wire: complexityEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain name of your service</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname of your service</td>
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
    <td>Type of your offer (emailpro)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of your service (creating, deleting, inMaintenance, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Returns the state, offer, hostname and web interface URL of the service, its message size limits, its password and lockout policy, and its spam and virus configuration. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the Email Pro services of the account. Filter them by IAM tags with `iamTags`. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Update the Email Pro service. Updates the display name, message size limits, password and lockout policy, and spam and virus configuration of the service.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#update_flags_on_all_accounts"><CopyableCode code="update_flags_on_all_accounts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
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
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pro organization</td>
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

Returns the state, offer, hostname and web interface URL of the service, its message size limits, its password and lockout policy, and its spam and virus configuration. (Alpha version)

```sql
SELECT
task_pending_id,
display_name,
complexity_enabled,
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
spam_and_virus_configuration,
state,
web_url
FROM ovh.email_pro.services
WHERE service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the Email Pro services of the account. Filter them by IAM tags with `iamTags`. (Alpha version)

```sql
SELECT
task_pending_id,
display_name,
complexity_enabled,
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
spam_and_virus_configuration,
state,
web_url
FROM ovh.email_pro.services
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

Update the Email Pro service. Updates the display name, message size limits, password and lockout policy, and spam and virus configuration of the service.

```sql
UPDATE ovh.email_pro.services
SET 
complexity_enabled = {{ complexity_enabled }},
display_name = '{{ display_name }}',
lockout_duration = {{ lockout_duration }},
lockout_observation_window = {{ lockout_observation_window }},
lockout_threshold = {{ lockout_threshold }},
max_password_age = {{ max_password_age }},
max_receive_size = {{ max_receive_size }},
max_send_size = {{ max_send_size }},
min_password_age = {{ min_password_age }},
min_password_length = {{ min_password_length }},
spam_and_virus_configuration = '{{ spam_and_virus_configuration }}'
WHERE 
service = '{{ service }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'update_flags_on_all_accounts', value: 'update_flags_on_all_accounts' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.email_pro.services.change_contact 
@service='{{ service }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="update_flags_on_all_accounts">

Update spam and virus flags. Applies the spam and virus configuration of the service (`spamAndVirusConfiguration`) to all its active email accounts.

```sql
EXEC ovh.email_pro.services.update_flags_on_all_accounts 
@service='{{ service }}' --required
;
```
</TabItem>
</Tabs>
