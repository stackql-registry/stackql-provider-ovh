--- 
title: service_remote_mailboxes
hide_title: false
hide_table_of_contents: false
keywords:
  - service_remote_mailboxes
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

Creates, updates, deletes, gets or lists a <code>service_remote_mailboxes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_remote_mailboxes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_remote_mailboxes" /></td></tr>
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
    <td>Remote mailbox id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this remote mailbox (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="sam_account_name" /></td>
    <td><code>string</code></td>
    <td>SAM account name (wire: SAMAccountName)</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>city</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Company name</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>Country code (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox domain</td>
</tr>
<tr>
    <td><CopyableCode code="exchange_guid" /></td>
    <td><code>string</code></td>
    <td>exchangeGuid for manual configuration (wire: exchangeGuid)</td>
</tr>
<tr>
    <td><CopyableCode code="fax" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Fax number</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>GUID for user in active directory</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>Hide remote mailbox  in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="initial" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox initials</td>
</tr>
<tr>
    <td><CopyableCode code="job_department" /></td>
    <td><code>string</code></td>
    <td>Job Department (wire: jobDepartment)</td>
</tr>
<tr>
    <td><CopyableCode code="job_title" /></td>
    <td><code>string</code></td>
    <td>Job title (wire: jobTitle)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox login</td>
</tr>
<tr>
    <td><CopyableCode code="mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Mobile phone</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_aliases" /></td>
    <td><code>integer</code></td>
    <td>Count the number of related aliases attached to this account (wire: numberOfAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="office" /></td>
    <td><code>string</code></td>
    <td>Job office</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="postal_code" /></td>
    <td><code>string</code></td>
    <td>Postal code (wire: postalCode)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region</td>
</tr>
<tr>
    <td><CopyableCode code="remote_routing_address" /></td>
    <td><code>string</code></td>
    <td>Email address of associated mailbox (wire: remoteRoutingAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="street_address" /></td>
    <td><code>string</code></td>
    <td>Street address (wire: streetAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of mailbox (equipment, regular, room)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange remote mailbox

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
    <td>Remote mailbox id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this remote mailbox (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="sam_account_name" /></td>
    <td><code>string</code></td>
    <td>SAM account name (wire: SAMAccountName)</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>city</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Company name</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>Country code (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox domain</td>
</tr>
<tr>
    <td><CopyableCode code="exchange_guid" /></td>
    <td><code>string</code></td>
    <td>exchangeGuid for manual configuration (wire: exchangeGuid)</td>
</tr>
<tr>
    <td><CopyableCode code="fax" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Fax number</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>GUID for user in active directory</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>Hide remote mailbox  in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="initial" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox initials</td>
</tr>
<tr>
    <td><CopyableCode code="job_department" /></td>
    <td><code>string</code></td>
    <td>Job Department (wire: jobDepartment)</td>
</tr>
<tr>
    <td><CopyableCode code="job_title" /></td>
    <td><code>string</code></td>
    <td>Job title (wire: jobTitle)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox login</td>
</tr>
<tr>
    <td><CopyableCode code="mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Mobile phone</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_aliases" /></td>
    <td><code>integer</code></td>
    <td>Count the number of related aliases attached to this account (wire: numberOfAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="office" /></td>
    <td><code>string</code></td>
    <td>Job office</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="postal_code" /></td>
    <td><code>string</code></td>
    <td>Postal code (wire: postalCode)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region</td>
</tr>
<tr>
    <td><CopyableCode code="remote_routing_address" /></td>
    <td><code>string</code></td>
    <td>Email address of associated mailbox (wire: remoteRoutingAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Remote mailbox state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="street_address" /></td>
    <td><code>string</code></td>
    <td>Street address (wire: streetAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of mailbox (equipment, regular, room)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Get a remote mailbox. Returns the login, names, type, remote routing address, state, spam settings and contact details of the remote mailbox.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List remote mailboxes. Returns the primary email addresses of the remote mailboxes. Filter them by `primaryEmailAddress` or `id`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-exchange_guid"><code>exchange_guid</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-password"><code>password</code></a>, <a href="#parameter-remote_routing_address"><code>remote_routing_address</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a remote mailbox. Creates a regular, room or equipment remote mailbox from a `login`, a `domain`, a `password`, an `exchangeGuid` and the `remoteRoutingAddress` of the associated mailbox, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Update a remote mailbox. Updates the names, display name, spam settings, Global Address List visibility and contact details of the remote mailbox.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Delete a remote mailbox. Removes the remote mailbox from the Exchange service and returns the task. Its aliases are removed with it.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-primaryEmailAddress"><code>primaryEmailAddress</code></a></td>
    <td></td>
    <td>Change a remote mailbox password. Changes the password and returns the task. Set `forcePasswordChangeAtNextLogon` to make the user change it at the next logon.</td>
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
<tr id="parameter-primaryEmailAddress">
    <td><CopyableCode code="primaryEmailAddress" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox</td>
</tr>
<tr id="parameter-primary_email_address">
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
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

Get a remote mailbox. Returns the login, names, type, remote routing address, state, spam settings and contact details of the remote mailbox.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
city,
company,
country_code,
creation_date,
description,
domain,
exchange_guid,
fax,
guid,
hidden_from_gal,
initial,
job_department,
job_title,
login,
mobile,
number_of_aliases,
office,
phone,
postal_code,
primary_email_address,
region,
remote_routing_address,
spam_and_virus_configuration,
state,
street_address,
type
FROM ovh.email_exchange.service_remote_mailboxes
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND primary_email_address = '{{ primary_email_address }}' -- required
;
```
</TabItem>
<TabItem value="list">

List remote mailboxes. Returns the primary email addresses of the remote mailboxes. Filter them by `primaryEmailAddress` or `id`.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
city,
company,
country_code,
creation_date,
description,
domain,
exchange_guid,
fax,
guid,
hidden_from_gal,
initial,
job_department,
job_title,
login,
mobile,
number_of_aliases,
office,
phone,
postal_code,
primary_email_address,
region,
remote_routing_address,
spam_and_virus_configuration,
state,
street_address,
type
FROM ovh.email_exchange.service_remote_mailboxes
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND id = '{{ id }}'
AND primary_email_address = '{{ primary_email_address }}'
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

Create a remote mailbox. Creates a regular, room or equipment remote mailbox from a `login`, a `domain`, a `password`, an `exchangeGuid` and the `remoteRoutingAddress` of the associated mailbox, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_remote_mailboxes (
city,
company,
country_code,
description,
display_name,
domain,
exchange_guid,
fax,
first_name,
hidden_from_gal,
initials,
job_department,
job_title,
last_name,
login,
mobile,
office,
password,
phone,
postal_code,
region,
remote_routing_address,
spam_and_virus_configuration,
street_address,
type,
exchange_service,
organization_name
)
SELECT 
'{{ city }}',
'{{ company }}',
'{{ country_code }}',
'{{ description }}',
'{{ display_name }}',
'{{ domain }}' /* required */,
'{{ exchange_guid }}' /* required */,
'{{ fax }}',
'{{ first_name }}',
{{ hidden_from_gal }},
'{{ initials }}',
'{{ job_department }}',
'{{ job_title }}',
'{{ last_name }}',
'{{ login }}' /* required */,
'{{ mobile }}',
'{{ office }}',
'{{ password }}' /* required */,
'{{ phone }}',
'{{ postal_code }}',
'{{ region }}',
'{{ remote_routing_address }}' /* required */,
'{{ spam_and_virus_configuration }}',
'{{ street_address }}',
'{{ type }}' /* required */,
'{{ exchange_service }}',
'{{ organization_name }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_remote_mailboxes
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_remote_mailboxes resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_remote_mailboxes resource.
    - name: city
      value: "{{ city }}"
      description: |
        City
    - name: company
      value: "{{ company }}"
      description: |
        Company name
    - name: country_code
      value: "{{ country_code }}"
      description: |
        Country code
      valid_values: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
    - name: description
      value: "{{ description }}"
      description: |
        Description
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Display name
    - name: domain
      value: "{{ domain }}"
      description: |
        Email domain
    - name: exchange_guid
      value: "{{ exchange_guid }}"
      description: |
        Remote exchangeGuid
    - name: fax
      value: "{{ fax }}"
      description: |
        Fax number
    - name: first_name
      value: "{{ first_name }}"
      description: |
        First name
    - name: hidden_from_gal
      value: {{ hidden_from_gal }}
      description: |
        Hide the remote mailbox in Global Address List
    - name: initials
      value: "{{ initials }}"
      description: |
        Initials
    - name: job_department
      value: "{{ job_department }}"
      description: |
        Job department
    - name: job_title
      value: "{{ job_title }}"
      description: |
        Job title
    - name: last_name
      value: "{{ last_name }}"
      description: |
        Last name
    - name: login
      value: "{{ login }}"
      description: |
        Login
    - name: mobile
      value: "{{ mobile }}"
      description: |
        Mobile phone number
    - name: office
      value: "{{ office }}"
      description: |
        Office
    - name: password
      value: "{{ password }}"
      description: |
        Password
    - name: phone
      value: "{{ phone }}"
      description: |
        Phone Number
    - name: postal_code
      value: "{{ postal_code }}"
      description: |
        Postal code
    - name: region
      value: "{{ region }}"
      description: |
        Region
    - name: remote_routing_address
      value: "{{ remote_routing_address }}"
      description: |
        Address of associated mailbox
    - name: spam_and_virus_configuration
      description: |
        Antispam and Antivirus configuration
      value:
        checkDKIM: {{ checkDKIM }}
        checkSPF: {{ checkSPF }}
        deleteSpam: {{ deleteSpam }}
        deleteVirus: {{ deleteVirus }}
        putInJunk: {{ putInJunk }}
        tagSpam: {{ tagSpam }}
        tagVirus: {{ tagVirus }}
    - name: street_address
      value: "{{ street_address }}"
      description: |
        Street address
    - name: type
      value: "{{ type }}"
      description: |
        Type of mailbox
      valid_values: ['equipment', 'regular', 'room']
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

Update a remote mailbox. Updates the names, display name, spam settings, Global Address List visibility and contact details of the remote mailbox.

```sql
UPDATE ovh.email_exchange.service_remote_mailboxes
SET 
city = '{{ city }}',
company = '{{ company }}',
country_code = '{{ country_code }}',
description = '{{ description }}',
display_name = '{{ display_name }}',
domain = '{{ domain }}',
fax = '{{ fax }}',
first_name = '{{ first_name }}',
hidden_from_gal = {{ hidden_from_gal }},
initial = '{{ initial }}',
job_department = '{{ job_department }}',
job_title = '{{ job_title }}',
last_name = '{{ last_name }}',
login = '{{ login }}',
mobile = '{{ mobile }}',
office = '{{ office }}',
phone = '{{ phone }}',
postal_code = '{{ postal_code }}',
region = '{{ region }}',
spam_and_virus_configuration = '{{ spam_and_virus_configuration }}',
street_address = '{{ street_address }}'
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND primary_email_address = '{{ primary_email_address }}' --required;
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

Delete a remote mailbox. Removes the remote mailbox from the Exchange service and returns the task. Its aliases are removed with it.

```sql
DELETE FROM ovh.email_exchange.service_remote_mailboxes
WHERE exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND primary_email_address = '{{ primary_email_address }}' --required
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

Change a remote mailbox password. Changes the password and returns the task. Set `forcePasswordChangeAtNextLogon` to make the user change it at the next logon.

```sql
EXEC ovh.email_exchange.service_remote_mailboxes.change_password 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required, 
@primaryEmailAddress='{{ primaryEmailAddress }}' --required 
@@json=
'{
"forcePasswordChangeAtNextLogon": {{ forcePasswordChangeAtNextLogon }}, 
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
