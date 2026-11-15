--- 
title: account_exchanges
hide_title: false
hide_table_of_contents: false
keywords:
  - account_exchanges
  - ms_services
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

Creates, updates, deletes, gets or lists an <code>account_exchanges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_exchanges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ms_services.account_exchanges" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Account id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id for this account (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="account_license" /></td>
    <td><code>string</code></td>
    <td>Exchange account license (basic, enterprise, standard) (wire: accountLicense)</td>
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
    <td>Mailbox usage in KB (wire: currentUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Delete mailbox at expiration date (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_outlook_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Delete Outlook license at expiration date (wire: deleteOutlookAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="exchange_guid" /></td>
    <td><code>string</code></td>
    <td>Property needed for mailbox manual configuration (GUID) (wire: exchangeGuid)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_outlook_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date of Outlook license (wire: expirationOutlookDate)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>Visibility in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="litigation" /></td>
    <td><code>boolean</code></td>
    <td>Litigation hold feature enabled on this mailbox</td>
</tr>
<tr>
    <td><CopyableCode code="litigation_period" /></td>
    <td><code>integer</code></td>
    <td>Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox. (wire: litigationPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="mailing_filter" /></td>
    <td><code>array</code></td>
    <td>Enable or disable anti-virus and anti-spam (wire: mailingFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_aliases" /></td>
    <td><code>integer</code></td>
    <td>Count the number of related aliases attached to this account (wire: numberOfAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="outlook_license" /></td>
    <td><code>boolean</code></td>
    <td>Outlook licence attached (wire: outlookLicense)</td>
</tr>
<tr>
    <td><CopyableCode code="owa_limited" /></td>
    <td><code>boolean</code></td>
    <td>OWA policy restriction is applied (wire: owaLimited)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Primary address of the mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Maximum mailbox usage in GB (overall size)</td>
</tr>
<tr>
    <td><CopyableCode code="renew_outlook_period" /></td>
    <td><code>string</code></td>
    <td>Frequency of Outlook license renewals (monthly, yearly) (wire: renewOutlookPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="renew_period" /></td>
    <td><code>string</code></td>
    <td>Frequency of mailbox license renewals (monthly, yearly) (wire: renewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_detected" /></td>
    <td><code>boolean</code></td>
    <td>Spam activity detected on this mailbox (wire: spamDetected)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_ticket_number" /></td>
    <td><code>integer</code></td>
    <td>Ticket number of spam detection (wire: spamTicketNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Mailbox state (creating, deleting, disabled, modifying, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a></td>
    <td></td>
    <td>Get an account mailbox. Returns the Exchange mailbox of the Active Directory account: primary address, license, quota, usage, Outlook license, renewal and expiration settings, and spam and antivirus configuration.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a></td>
    <td></td>
    <td>Update an account mailbox. Updates the license, quota, Outlook license, renewal and deletion at expiration settings, litigation hold, Global Address List visibility and spam and antivirus configuration of the mailbox.</td>
</tr>
<tr>
    <td><a href="#configure"><CopyableCode code="configure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userPrincipalName"><code>userPrincipalName</code></a></td>
    <td></td>
    <td>Configure mailbox to be operational (Deprecated, will be removed)</td>
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
    <td>The internal name of your Active Directory organization</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your Active Directory organization (wire: serviceName)</td>
</tr>
<tr id="parameter-userPrincipalName">
    <td><CopyableCode code="userPrincipalName" /></td>
    <td><code>string</code></td>
    <td>User Principal Name</td>
</tr>
<tr id="parameter-user_principal_name">
    <td><CopyableCode code="user_principal_name" /></td>
    <td><code>string</code></td>
    <td>User Principal Name (wire: userPrincipalName)</td>
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

Get an account mailbox. Returns the Exchange mailbox of the Active Directory account: primary address, license, quota, usage, Outlook license, renewal and expiration settings, and spam and antivirus configuration.

```sql
SELECT
id,
task_pending_id,
account_license,
configured,
creation_date,
current_usage,
delete_at_expiration,
delete_outlook_at_expiration,
exchange_guid,
expiration_date,
expiration_outlook_date,
hidden_from_gal,
litigation,
litigation_period,
mailing_filter,
number_of_aliases,
outlook_license,
owa_limited,
primary_email_address,
quota,
renew_outlook_period,
renew_period,
spam_and_virus_configuration,
spam_detected,
spam_ticket_number,
state
FROM ovh.ms_services.account_exchanges
WHERE service_name = '{{ service_name }}' -- required
AND user_principal_name = '{{ user_principal_name }}' -- required
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

Update an account mailbox. Updates the license, quota, Outlook license, renewal and deletion at expiration settings, litigation hold, Global Address List visibility and spam and antivirus configuration of the mailbox.

```sql
UPDATE ovh.ms_services.account_exchanges
SET 
account_license = '{{ account_license }}',
delete_at_expiration = {{ delete_at_expiration }},
delete_outlook_at_expiration = {{ delete_outlook_at_expiration }},
hidden_from_gal = {{ hidden_from_gal }},
litigation = {{ litigation }},
litigation_period = {{ litigation_period }},
mailing_filter = '{{ mailing_filter }}',
outlook_license = {{ outlook_license }},
quota = {{ quota }},
renew_outlook_period = '{{ renew_outlook_period }}',
renew_period = '{{ renew_period }}',
spam_and_virus_configuration = '{{ spam_and_virus_configuration }}'
WHERE 
service_name = '{{ service_name }}' --required
AND user_principal_name = '{{ user_principal_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="configure"
    values={[
        { label: 'configure', value: 'configure' }
    ]}
>
<TabItem value="configure">

Configure mailbox to be operational (Deprecated, will be removed)

```sql
EXEC ovh.ms_services.account_exchanges.configure 
@serviceName='{{ serviceName }}' --required, 
@userPrincipalName='{{ userPrincipalName }}' --required
;
```
</TabItem>
</Tabs>
