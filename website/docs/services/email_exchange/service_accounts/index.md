--- 
title: service_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_accounts
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

Creates, updates, deletes, gets or lists a <code>service_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_accounts" /></td></tr>
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
    <td><CopyableCode code="authentication_policy_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the authentication policy to apply on this account (wire: authenticationPolicyId)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_isolation_id" /></td>
    <td><code>integer</code></td>
    <td>custom isolation apply on this account (wire: customIsolationId)</td>
</tr>
<tr>
    <td><CopyableCode code="send_connector_id" /></td>
    <td><code>integer</code></td>
    <td>Custom sendConnectorId used to send mails when SBR is configured (wire: sendConnectorId)</td>
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
    <td><CopyableCode code="account_license" /></td>
    <td><code>string</code></td>
    <td>Exchange account type (basic, enterprise, standard) (wire: accountLicense)</td>
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
    <td><CopyableCode code="configured" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the account is configured</td>
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
    <td><CopyableCode code="delete_outlook_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>delete outlook at expiration (wire: deleteOutlookAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Email domain</td>
</tr>
<tr>
    <td><CopyableCode code="exchange_guid" /></td>
    <td><code>string</code></td>
    <td>exchangeGuid for manual configuration (wire: exchangeGuid)</td>
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
    <td><CopyableCode code="fax" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Fax number</td>
</tr>
<tr>
    <td><CopyableCode code="forwarding_email" /></td>
    <td><code>string</code></td>
    <td>Email address to forward email (wire: forwardingEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>GUID for user in active directory</td>
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
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Account login</td>
</tr>
<tr>
    <td><CopyableCode code="mail_sender_display" /></td>
    <td><code>string</code></td>
    <td>Email display as sender (wire: mailSenderDisplay)</td>
</tr>
<tr>
    <td><CopyableCode code="mailing_filter" /></td>
    <td><code>array</code></td>
    <td>Enable or disable anti-virus and anti-spam (wire: mailingFilter)</td>
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
    <td><CopyableCode code="outlook_license" /></td>
    <td><code>boolean</code></td>
    <td>Outlook licence (wire: outlookLicense)</td>
</tr>
<tr>
    <td><CopyableCode code="owa_limited" /></td>
    <td><code>boolean</code></td>
    <td>OWA policy restriction is applied (wire: owaLimited)</td>
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
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Account maximum size</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region</td>
</tr>
<tr>
    <td><CopyableCode code="renew_outlook_period" /></td>
    <td><code>string</code></td>
    <td>change the renew period for outlook (monthly, yearly) (wire: renewOutlookPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="renew_period" /></td>
    <td><code>string</code></td>
    <td>change the renew period (monthly, yearly) (wire: renewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="sbr_destination" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that will be used to all e-mails send from this account (wire: sbrDestination)</td>
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
    <td>Account state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="store_copy_of_email" /></td>
    <td><code>boolean</code></td>
    <td>Store copy of email when forward is enable (wire: storeCopyOfEmail)</td>
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

Exchange mailbox

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
    <td><CopyableCode code="authentication_policy_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the authentication policy to apply on this account (wire: authenticationPolicyId)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_isolation_id" /></td>
    <td><code>integer</code></td>
    <td>custom isolation apply on this account (wire: customIsolationId)</td>
</tr>
<tr>
    <td><CopyableCode code="send_connector_id" /></td>
    <td><code>integer</code></td>
    <td>Custom sendConnectorId used to send mails when SBR is configured (wire: sendConnectorId)</td>
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
    <td><CopyableCode code="account_license" /></td>
    <td><code>string</code></td>
    <td>Exchange account type (basic, enterprise, standard) (wire: accountLicense)</td>
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
    <td><CopyableCode code="configured" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the account is configured</td>
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
    <td><CopyableCode code="delete_outlook_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>delete outlook at expiration (wire: deleteOutlookAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Email domain</td>
</tr>
<tr>
    <td><CopyableCode code="exchange_guid" /></td>
    <td><code>string</code></td>
    <td>exchangeGuid for manual configuration (wire: exchangeGuid)</td>
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
    <td><CopyableCode code="fax" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Fax number</td>
</tr>
<tr>
    <td><CopyableCode code="forwarding_email" /></td>
    <td><code>string</code></td>
    <td>Email address to forward email (wire: forwardingEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>GUID for user in active directory</td>
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
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Account login</td>
</tr>
<tr>
    <td><CopyableCode code="mail_sender_display" /></td>
    <td><code>string</code></td>
    <td>Email display as sender (wire: mailSenderDisplay)</td>
</tr>
<tr>
    <td><CopyableCode code="mailing_filter" /></td>
    <td><code>array</code></td>
    <td>Enable or disable anti-virus and anti-spam (wire: mailingFilter)</td>
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
    <td><CopyableCode code="outlook_license" /></td>
    <td><code>boolean</code></td>
    <td>Outlook licence (wire: outlookLicense)</td>
</tr>
<tr>
    <td><CopyableCode code="owa_limited" /></td>
    <td><code>boolean</code></td>
    <td>OWA policy restriction is applied (wire: owaLimited)</td>
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
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Account maximum size</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region</td>
</tr>
<tr>
    <td><CopyableCode code="renew_outlook_period" /></td>
    <td><code>string</code></td>
    <td>change the renew period for outlook (monthly, yearly) (wire: renewOutlookPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="renew_period" /></td>
    <td><code>string</code></td>
    <td>change the renew period (monthly, yearly) (wire: renewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="sbr_destination" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that will be used to all e-mails send from this account (wire: sbrDestination)</td>
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
    <td>Account state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="store_copy_of_email" /></td>
    <td><code>boolean</code></td>
    <td>Store copy of email when forward is enable (wire: storeCopyOfEmail)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Get an email account. Returns the login, names, license, quota, usage, state, spam settings, forwarding, litigation hold and contact details of the email account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-account_license"><code>account_license</code></a>, <a href="#parameter-company"><code>company</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List email accounts. Returns the primary email addresses of the email accounts. Filter them by `primaryEmailAddress`, `id`, `accountLicense` or `company`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-license"><code>license</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Create an email account. Creates an email account from a `login`, a `domain`, a `password` and a `license`, and returns the task. Set `quota` in GB.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Update an email account. Updates the names, license, quota, renewal, forwarding, litigation hold, spam settings, authentication policy and contact details of the email account.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Delete an email account. Deletes the email account and returns the task. On Hosted Exchange, the account is reset instead: its content is deleted and it becomes an unconfigured slot in `configureme.me` that keeps its subscription.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-primaryEmailAddress"><code>primaryEmailAddress</code></a></td>
    <td></td>
    <td>Change an email account password. Changes the password and returns the task. Set `forcePasswordChangeAtNextLogon` to make the user change it at the next logon.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-primaryEmailAddress"><code>primaryEmailAddress</code></a></td>
    <td></td>
    <td>Terminate an email account at expiration. Sets the email account to be suspended at its expiration date, and returns a message giving that date. Set `deleteAtExpiration` to false on the account to cancel.</td>
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
<tr id="parameter-account_license">
    <td><CopyableCode code="account_license" /></td>
    <td><code>string</code></td>
    <td>Filter the value of accountLicense property (=) (wire: accountLicense)</td>
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

Get an email account. Returns the login, names, license, quota, usage, state, spam settings, forwarding, litigation hold and contact details of the email account.

```sql
SELECT
id,
authentication_policy_id,
custom_isolation_id,
send_connector_id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
account_license,
city,
company,
configured,
country_code,
creation_date,
current_usage,
delete_at_expiration,
delete_outlook_at_expiration,
description,
domain,
exchange_guid,
expiration_date,
expiration_outlook_date,
fax,
forwarding_email,
guid,
hidden_from_gal,
initial,
job_department,
job_title,
last_logoff_date,
last_logon_date,
last_update_date,
litigation,
litigation_period,
login,
mail_sender_display,
mailing_filter,
mobile,
number_of_aliases,
office,
outlook_license,
owa_limited,
password_last_update,
phone,
postal_code,
primary_email_address,
quota,
region,
renew_outlook_period,
renew_period,
sbr_destination,
spam_and_virus_configuration,
spam_detected,
spam_ticket_number,
state,
store_copy_of_email,
street_address
FROM ovh.email_exchange.service_accounts
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND primary_email_address = '{{ primary_email_address }}' -- required
;
```
</TabItem>
<TabItem value="list">

List email accounts. Returns the primary email addresses of the email accounts. Filter them by `primaryEmailAddress`, `id`, `accountLicense` or `company`.

```sql
SELECT
id,
authentication_policy_id,
custom_isolation_id,
send_connector_id,
task_pending_id,
display_name,
first_name,
last_name,
sam_account_name,
account_license,
city,
company,
configured,
country_code,
creation_date,
current_usage,
delete_at_expiration,
delete_outlook_at_expiration,
description,
domain,
exchange_guid,
expiration_date,
expiration_outlook_date,
fax,
forwarding_email,
guid,
hidden_from_gal,
initial,
job_department,
job_title,
last_logoff_date,
last_logon_date,
last_update_date,
litigation,
litigation_period,
login,
mail_sender_display,
mailing_filter,
mobile,
number_of_aliases,
office,
outlook_license,
owa_limited,
password_last_update,
phone,
postal_code,
primary_email_address,
quota,
region,
renew_outlook_period,
renew_period,
sbr_destination,
spam_and_virus_configuration,
spam_detected,
spam_ticket_number,
state,
store_copy_of_email,
street_address
FROM ovh.email_exchange.service_accounts
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND account_license = '{{ account_license }}'
AND company = '{{ company }}'
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

Create an email account. Creates an email account from a `login`, a `domain`, a `password` and a `license`, and returns the task. Set `quota` in GB.

```sql
INSERT INTO ovh.email_exchange.service_accounts (
sam_account_name,
authentication_policy_id,
city,
company,
country_code,
description,
display_name,
domain,
fax,
first_name,
forwarding_email,
hidden_from_gal,
initials,
job_department,
job_title,
last_name,
license,
litigation,
litigation_period,
login,
mail_sender_display,
mailing_filter,
mobile,
office,
outlook_license,
password,
phone,
postal_code,
quota,
region,
sbr_destination,
send_connector_id,
spam_and_virus_configuration,
store_copy_of_email,
street_address,
exchange_service,
organization_name
)
SELECT 
'{{ sam_account_name }}',
{{ authentication_policy_id }},
'{{ city }}',
'{{ company }}',
'{{ country_code }}',
'{{ description }}',
'{{ display_name }}',
'{{ domain }}' /* required */,
'{{ fax }}',
'{{ first_name }}',
'{{ forwarding_email }}',
{{ hidden_from_gal }},
'{{ initials }}',
'{{ job_department }}',
'{{ job_title }}',
'{{ last_name }}',
'{{ license }}' /* required */,
{{ litigation }},
{{ litigation_period }},
'{{ login }}' /* required */,
'{{ mail_sender_display }}',
'{{ mailing_filter }}',
'{{ mobile }}',
'{{ office }}',
{{ outlook_license }},
'{{ password }}' /* required */,
'{{ phone }}',
'{{ postal_code }}',
{{ quota }},
'{{ region }}',
'{{ sbr_destination }}',
{{ send_connector_id }},
'{{ spam_and_virus_configuration }}',
{{ store_copy_of_email }},
'{{ street_address }}',
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
- name: service_accounts
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_accounts resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_accounts resource.
    - name: sam_account_name
      value: "{{ sam_account_name }}"
      description: |
        SAM account name (exchange 2010 login)
    - name: authentication_policy_id
      value: {{ authentication_policy_id }}
      description: |
        ID of the authentication policy
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
        Account display name
    - name: domain
      value: "{{ domain }}"
      description: |
        Email domain
    - name: fax
      value: "{{ fax }}"
      description: |
        Fax number
    - name: first_name
      value: "{{ first_name }}"
      description: |
        Account first name
    - name: forwarding_email
      value: "{{ forwarding_email }}"
      description: |
        Email address to forward email
    - name: hidden_from_gal
      value: {{ hidden_from_gal }}
      description: |
        Hide the account in Global Address List
    - name: initials
      value: "{{ initials }}"
      description: |
        Account initials
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
        Account last name
    - name: license
      value: "{{ license }}"
      description: |
        OVH licence account
      valid_values: ['basic', 'enterprise', 'standard']
    - name: litigation
      value: {{ litigation }}
      description: |
        Litigation status
    - name: litigation_period
      value: {{ litigation_period }}
      description: |
        Litigation length in days, 0 means unlimited
    - name: login
      value: "{{ login }}"
      description: |
        Account login
    - name: mail_sender_display
      value: "{{ mail_sender_display }}"
      description: |
        Email display as sender
    - name: mailing_filter
      value:
        - "{{ mailing_filter }}"
      description: |
        Enable mailing filtrering
    - name: mobile
      value: "{{ mobile }}"
      description: |
        Mobile phone number
    - name: office
      value: "{{ office }}"
      description: |
        office
    - name: outlook_license
      value: {{ outlook_license }}
      description: |
        Buy outlook license
    - name: password
      value: "{{ password }}"
      description: |
        Account password
    - name: phone
      value: "{{ phone }}"
      description: |
        Phone Number
    - name: postal_code
      value: "{{ postal_code }}"
      description: |
        Postal code
    - name: quota
      value: {{ quota }}
      description: |
        Quota specified in GB. Check pricing table before use
    - name: region
      value: "{{ region }}"
      description: |
        Region
    - name: sbr_destination
      value: "{{ sbr_destination }}"
      description: |
        Sender base routing destination domain
    - name: send_connector_id
      value: {{ send_connector_id }}
      description: |
        Send connector id used to send mails when SBR is defined
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
    - name: store_copy_of_email
      value: {{ store_copy_of_email }}
      description: |
        Store copy of email when forward is enable
    - name: street_address
      value: "{{ street_address }}"
      description: |
        Street address
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

Update an email account. Updates the names, license, quota, renewal, forwarding, litigation hold, spam settings, authentication policy and contact details of the email account.

```sql
UPDATE ovh.email_exchange.service_accounts
SET 
account_license = '{{ account_license }}',
authentication_policy_id = {{ authentication_policy_id }},
city = '{{ city }}',
company = '{{ company }}',
country_code = '{{ country_code }}',
delete_at_expiration = {{ delete_at_expiration }},
delete_outlook_at_expiration = {{ delete_outlook_at_expiration }},
description = '{{ description }}',
display_name = '{{ display_name }}',
domain = '{{ domain }}',
fax = '{{ fax }}',
first_name = '{{ first_name }}',
forwarding_email = '{{ forwarding_email }}',
hidden_from_gal = {{ hidden_from_gal }},
initial = '{{ initial }}',
job_department = '{{ job_department }}',
job_title = '{{ job_title }}',
last_name = '{{ last_name }}',
litigation = {{ litigation }},
litigation_period = {{ litigation_period }},
login = '{{ login }}',
mail_sender_display = '{{ mail_sender_display }}',
mailing_filter = '{{ mailing_filter }}',
mobile = '{{ mobile }}',
office = '{{ office }}',
outlook_license = {{ outlook_license }},
phone = '{{ phone }}',
postal_code = '{{ postal_code }}',
quota = {{ quota }},
region = '{{ region }}',
renew_outlook_period = '{{ renew_outlook_period }}',
renew_period = '{{ renew_period }}',
sbr_destination = '{{ sbr_destination }}',
send_connector_id = {{ send_connector_id }},
spam_and_virus_configuration = '{{ spam_and_virus_configuration }}',
store_copy_of_email = {{ store_copy_of_email }},
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

Delete an email account. Deletes the email account and returns the task. On Hosted Exchange, the account is reset instead: its content is deleted and it becomes an unconfigured slot in `configureme.me` that keeps its subscription.

```sql
DELETE FROM ovh.email_exchange.service_accounts
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
        { label: 'change_password', value: 'change_password' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_password">

Change an email account password. Changes the password and returns the task. Set `forcePasswordChangeAtNextLogon` to make the user change it at the next logon.

```sql
EXEC ovh.email_exchange.service_accounts.change_password 
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
<TabItem value="terminate">

Terminate an email account at expiration. Sets the email account to be suspended at its expiration date, and returns a message giving that date. Set `deleteAtExpiration` to false on the account to cancel.

```sql
EXEC ovh.email_exchange.service_accounts.terminate 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required, 
@primaryEmailAddress='{{ primaryEmailAddress }}' --required
;
```
</TabItem>
</Tabs>
