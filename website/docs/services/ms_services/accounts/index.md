--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ms_services.accounts" /></td></tr>
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
    <td>Pending task for this account (wire: taskPendingId)</td>
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
    <td><CopyableCode code="user_principal_name" /></td>
    <td><code>string</code></td>
    <td>User Principal Name (wire: userPrincipalName)</td>
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
    <td><CopyableCode code="entra_id_synced" /></td>
    <td><code>boolean</code></td>
    <td>Is synced to Entra ID (wire: entraIdSynced)</td>
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
    <td><CopyableCode code="initials" /></td>
    <td><code>string</code></td>
    <td>Account initials</td>
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
    <td><CopyableCode code="mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Mobile phone</td>
</tr>
<tr>
    <td><CopyableCode code="office" /></td>
    <td><code>string</code></td>
    <td>Job office</td>
</tr>
<tr>
    <td><CopyableCode code="password_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of account's password last update (wire: passwordLastUpdate)</td>
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
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Account state (creating, deleting, disabled, modifying, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="street_address" /></td>
    <td><code>string</code></td>
    <td>Street address (wire: streetAddress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Active Directory Account

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
    <td>Pending task for this account (wire: taskPendingId)</td>
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
    <td><CopyableCode code="user_principal_name" /></td>
    <td><code>string</code></td>
    <td>User Principal Name (wire: userPrincipalName)</td>
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
    <td><CopyableCode code="entra_id_synced" /></td>
    <td><code>boolean</code></td>
    <td>Is synced to Entra ID (wire: entraIdSynced)</td>
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
    <td><CopyableCode code="initials" /></td>
    <td><code>string</code></td>
    <td>Account initials</td>
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
    <td><CopyableCode code="mobile" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Mobile phone</td>
</tr>
<tr>
    <td><CopyableCode code="office" /></td>
    <td><code>string</code></td>
    <td>Job office</td>
</tr>
<tr>
    <td><CopyableCode code="password_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of account's password last update (wire: passwordLastUpdate)</td>
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
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Account state (creating, deleting, disabled, modifying, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="street_address" /></td>
    <td><code>string</code></td>
    <td>Street address (wire: streetAddress)</td>
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
    <td>Get an Active Directory account. Returns the identity, contact details, job information, state and last logon and logoff dates of the account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-company"><code>company</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Active Directory accounts. Returns the user principal names of the accounts of the Active Directory service. Filter them by `company`, `id` or `userPrincipalName`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a></td>
    <td></td>
    <td>Update an Active Directory account. Updates the user principal name, names, contact details and job information of the account.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userPrincipalName"><code>userPrincipalName</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change the Active Directory password. Changes the password of the Active Directory account and returns the task.</td>
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
<tr id="parameter-company">
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Filter the value of company property (like)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of id property (like)</td>
</tr>
<tr id="parameter-user_principal_name">
    <td><CopyableCode code="user_principal_name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of userPrincipalName property (like) (wire: userPrincipalName)</td>
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

Get an Active Directory account. Returns the identity, contact details, job information, state and last logon and logoff dates of the account.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
user_principal_name,
city,
company,
country_code,
creation_date,
description,
entra_id_synced,
fax,
guid,
initials,
job_department,
job_title,
last_logoff_date,
last_logon_date,
last_update_date,
mobile,
office,
password_last_update,
phone,
postal_code,
region,
state,
street_address
FROM ovh.ms_services.accounts
WHERE service_name = '{{ service_name }}' -- required
AND user_principal_name = '{{ user_principal_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Active Directory accounts. Returns the user principal names of the accounts of the Active Directory service. Filter them by `company`, `id` or `userPrincipalName`.

```sql
SELECT
id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
user_principal_name,
city,
company,
country_code,
creation_date,
description,
entra_id_synced,
fax,
guid,
initials,
job_department,
job_title,
last_logoff_date,
last_logon_date,
last_update_date,
mobile,
office,
password_last_update,
phone,
postal_code,
region,
state,
street_address
FROM ovh.ms_services.accounts
WHERE service_name = '{{ service_name }}' -- required
AND company = '{{ company }}'
AND id = '{{ id }}'
AND user_principal_name = '{{ user_principal_name }}'
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

Update an Active Directory account. Updates the user principal name, names, contact details and job information of the account.

```sql
UPDATE ovh.ms_services.accounts
SET 
city = '{{ city }}',
company = '{{ company }}',
country_code = '{{ country_code }}',
description = '{{ description }}',
display_name = '{{ display_name }}',
entra_id_synced = {{ entra_id_synced }},
fax = '{{ fax }}',
first_name = '{{ first_name }}',
initials = '{{ initials }}',
job_department = '{{ job_department }}',
job_title = '{{ job_title }}',
last_name = '{{ last_name }}',
mobile = '{{ mobile }}',
office = '{{ office }}',
phone = '{{ phone }}',
postal_code = '{{ postal_code }}',
region = '{{ region }}',
street_address = '{{ street_address }}',
user_principal_name = '{{ user_principal_name }}'
WHERE 
service_name = '{{ service_name }}' --required
AND user_principal_name = '{{ user_principal_name }}' --required;
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

Change the Active Directory password. Changes the password of the Active Directory account and returns the task.

```sql
EXEC ovh.ms_services.accounts.change_password 
@serviceName='{{ serviceName }}' --required, 
@userPrincipalName='{{ userPrincipalName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
