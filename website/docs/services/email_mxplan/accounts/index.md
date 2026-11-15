--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - email_mxplan
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_mxplan.accounts" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Account id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending tasks for this account (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Account display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Account first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Account last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="sam_account_name" /></td>
    <td><code>string</code></td>
    <td>SAM account name (wire: SAMAccountName)</td>
</tr>
<tr>
    <td><CopyableCode code="configured" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the account is configured</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="current_usage" /></td>
    <td><code>integer</code></td>
    <td>Mailbox usage (wire: currentUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>delete at expiration (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Email domain</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>expiration date (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_outlook_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>expiration date (wire: expirationOutlookDate)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>Hide account in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="initial" /></td>
    <td><code>string</code></td>
    <td>Account initials</td>
</tr>
<tr>
    <td><CopyableCode code="last_logoff_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logoff (wire: lastLogoffDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_logon_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logon (wire: lastLogonDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Account login</td>
</tr>
<tr>
    <td><CopyableCode code="mailing_filter" /></td>
    <td><code>array</code></td>
    <td>Enable or disable anti-virus and anti-spam (wire: mailingFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="password_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of account's password last update (wire: passwordLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>number</code></td>
    <td>Account maximum size</td>
</tr>
<tr>
    <td><CopyableCode code="renew_period" /></td>
    <td><code>string</code></td>
    <td>change the renew period (monthly, yearly) (wire: renewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_detected" /></td>
    <td><code>boolean</code></td>
    <td>Account was sending spam (wire: spamDetected)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_ticket_number" /></td>
    <td><code>integer</code></td>
    <td>Ticket number of spam detection (wire: spamTicketNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Account state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Mailbox

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Account id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending tasks for this account (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Account display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Account first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Account last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="sam_account_name" /></td>
    <td><code>string</code></td>
    <td>SAM account name (wire: SAMAccountName)</td>
</tr>
<tr>
    <td><CopyableCode code="configured" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the account is configured</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="current_usage" /></td>
    <td><code>integer</code></td>
    <td>Mailbox usage (wire: currentUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>delete at expiration (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Email domain</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>expiration date (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_outlook_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>expiration date (wire: expirationOutlookDate)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>Hide account in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="initial" /></td>
    <td><code>string</code></td>
    <td>Account initials</td>
</tr>
<tr>
    <td><CopyableCode code="last_logoff_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logoff (wire: lastLogoffDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_logon_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last logon (wire: lastLogonDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Account login</td>
</tr>
<tr>
    <td><CopyableCode code="mailing_filter" /></td>
    <td><code>array</code></td>
    <td>Enable or disable anti-virus and anti-spam (wire: mailingFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="password_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of account's password last update (wire: passwordLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>number</code></td>
    <td>Account maximum size</td>
</tr>
<tr>
    <td><CopyableCode code="renew_period" /></td>
    <td><code>string</code></td>
    <td>change the renew period (monthly, yearly) (wire: renewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_detected" /></td>
    <td><code>boolean</code></td>
    <td>Account was sending spam (wire: spamDetected)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_ticket_number" /></td>
    <td><code>integer</code></td>
    <td>Ticket number of spam detection (wire: spamTicketNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Account state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
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
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Get an email account. Returns the login, names, domain, state, quota and usage of the email account, its renewal and expiration settings, and its spam and virus configuration.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List email accounts. Returns the email addresses of the email accounts of the service. Filter them by `primaryEmailAddress` or `id`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Update an email account. Updates the login, names, domain, quota, renewal period, deletion at expiration, Global Address List visibility and spam and virus configuration of the email account.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Delete an email account. Deletes the email account of the MX Plan service and returns the task. Follow it under `task/&#123;id&#125;`.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change an email account password. Sets the new `password` of the email account and returns the task that applies it.</td>
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
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your mxplan organization</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of id property (like)</td>
</tr>
<tr id="parameter-primary_email_address">
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Filter the value of primaryEmailAddress property (like) (wire: primaryEmailAddress)</td>
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

Get an email account. Returns the login, names, domain, state, quota and usage of the email account, its renewal and expiration settings, and its spam and virus configuration.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
configured,
creation_date,
current_usage,
delete_at_expiration,
domain,
expiration_date,
expiration_outlook_date,
hidden_from_gal,
initial,
last_logoff_date,
last_logon_date,
last_update_date,
login,
mailing_filter,
password_last_update,
primary_email_address,
quota,
renew_period,
spam_and_virus_configuration,
spam_detected,
spam_ticket_number,
state
FROM ovh.email_mxplan.accounts
WHERE email = '{{ email }}' -- required
AND service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

List email accounts. Returns the email addresses of the email accounts of the service. Filter them by `primaryEmailAddress` or `id`.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
configured,
creation_date,
current_usage,
delete_at_expiration,
domain,
expiration_date,
expiration_outlook_date,
hidden_from_gal,
initial,
last_logoff_date,
last_logon_date,
last_update_date,
login,
mailing_filter,
password_last_update,
primary_email_address,
quota,
renew_period,
spam_and_virus_configuration,
spam_detected,
spam_ticket_number,
state
FROM ovh.email_mxplan.accounts
WHERE service = '{{ service }}' -- required
AND id = '{{ id }}'
AND primary_email_address = '{{ primary_email_address }}'
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

Update an email account. Updates the login, names, domain, quota, renewal period, deletion at expiration, Global Address List visibility and spam and virus configuration of the email account.

```sql
UPDATE ovh.email_mxplan.accounts
SET 
delete_at_expiration = {{ delete_at_expiration }},
display_name = '{{ display_name }}',
domain = '{{ domain }}',
first_name = '{{ first_name }}',
hidden_from_gal = {{ hidden_from_gal }},
initial = '{{ initial }}',
last_name = '{{ last_name }}',
login = '{{ login }}',
mailing_filter = '{{ mailing_filter }}',
quota = {{ quota }},
renew_period = '{{ renew_period }}',
spam_and_virus_configuration = '{{ spam_and_virus_configuration }}'
WHERE 
email = '{{ email }}' --required
AND service = '{{ service }}' --required;
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

Delete an email account. Deletes the email account of the MX Plan service and returns the task. Follow it under `task/&#123;id&#125;`.

```sql
DELETE FROM ovh.email_mxplan.accounts
WHERE email = '{{ email }}' --required
AND service = '{{ service }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' }
    ]}
>
<TabItem value="change_password">

Change an email account password. Sets the new `password` of the email account and returns the task that applies it.

```sql
EXEC ovh.email_mxplan.accounts.change_password 
@email='{{ email }}' --required, 
@service='{{ service }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
