--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - me
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.accounts" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Customer name</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name shown instead of the organisation name. (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>Address of nichandle</td>
</tr>
<tr>
    <td><CopyableCode code="area" /></td>
    <td><code>string</code></td>
    <td>Area of nichandle</td>
</tr>
<tr>
    <td><CopyableCode code="birth_city" /></td>
    <td><code>string</code></td>
    <td>City of birth (wire: birthCity)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_day" /></td>
    <td><code>string</code></td>
    <td>Birth date (wire: birthDay)</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>City of nichandle</td>
</tr>
<tr>
    <td><CopyableCode code="company_national_identification_number" /></td>
    <td><code>string</code></td>
    <td>Company National Identification Number (wire: companyNationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="complementary_address" /></td>
    <td><code>string</code></td>
    <td>Complementary Address (wire: complementaryAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="corporation_type" /></td>
    <td><code>string</code></td>
    <td>Corporation type (wire: corporationType)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Customer country (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="currency" /></td>
    <td><code>object</code></td>
    <td>Customer currency</td>
</tr>
<tr>
    <td><CopyableCode code="customer_code" /></td>
    <td><code>string</code></td>
    <td>Your customer code (a numerical value used for identification when contacting support via phone call) (wire: customerCode)</td>
</tr>
<tr>
    <td><CopyableCode code="einvoicing_billing_address" /></td>
    <td><code>string</code></td>
    <td>Default e-invoicing billing address (wire: einvoicingBillingAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address</td>
</tr>
<tr>
    <td><CopyableCode code="fax" /></td>
    <td><code>string</code></td>
    <td>Fax number</td>
</tr>
<tr>
    <td><CopyableCode code="firstname" /></td>
    <td><code>string</code></td>
    <td>First name</td>
</tr>
<tr>
    <td><CopyableCode code="italian_sdi" /></td>
    <td><code>string</code></td>
    <td>Italian SDI (wire: italianSDI)</td>
</tr>
<tr>
    <td><CopyableCode code="kyc_validated" /></td>
    <td><code>boolean</code></td>
    <td>KYC validation state (wire: kycValidated)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language (cs_CZ, de_DE, en_AU, en_CA, en_GB, en_IE, en_US, es_ES, fi_FI, fr_CA, fr_FR, fr_MA, fr_SN, fr_TN, it_IT, lt_LT, nl_NL, pl_PL, pt_PT)</td>
</tr>
<tr>
    <td><CopyableCode code="legalform" /></td>
    <td><code>string</code></td>
    <td>Customer legal form (administration, association, corporation, individual, other, personalcorporation)</td>
</tr>
<tr>
    <td><CopyableCode code="national_identification_number" /></td>
    <td><code>string</code></td>
    <td>National Identification Number (wire: nationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nichandle" /></td>
    <td><code>string</code></td>
    <td>Customer identifier</td>
</tr>
<tr>
    <td><CopyableCode code="organisation" /></td>
    <td><code>string</code></td>
    <td>Name of organisation</td>
</tr>
<tr>
    <td><CopyableCode code="ovh_company" /></td>
    <td><code>string</code></td>
    <td>OVH company (kimsufi, ovh, soyoustart) (wire: ovhCompany)</td>
</tr>
<tr>
    <td><CopyableCode code="ovh_subsidiary" /></td>
    <td><code>string</code></td>
    <td>OVH subsidiary (CZ, DE, ES, EU, FI, FR, GB, IE, IT, LT, MA, NL, PL, PT, SN, TN) (wire: ovhSubsidiary)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="phone_country" /></td>
    <td><code>string</code></td>
    <td>Countries a nichandle can choose (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW) (wire: phoneCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_type" /></td>
    <td><code>string</code></td>
    <td>Type of phone(mobile, landline) (landline, mobile) (wire: phoneType)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose_of_purchase" /></td>
    <td><code>string</code></td>
    <td>Customer purpose of purchase (wire: purposeOfPurchase)</td>
</tr>
<tr>
    <td><CopyableCode code="sex" /></td>
    <td><code>string</code></td>
    <td>Gender (female, male)</td>
</tr>
<tr>
    <td><CopyableCode code="spare_email" /></td>
    <td><code>string</code></td>
    <td>Spare email (wire: spareEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Nichandle state (complete, incomplete)</td>
</tr>
<tr>
    <td><CopyableCode code="vat" /></td>
    <td><code>string</code></td>
    <td>VAT number</td>
</tr>
<tr>
    <td><CopyableCode code="zip" /></td>
    <td><code>string</code></td>
    <td>Zipcode</td>
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
    <td></td>
    <td></td>
    <td>Get details about your nichandle</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>Update details of your nichandle</td>
</tr>
<tr>
    <td><a href="#account"><CopyableCode code="account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Create a new account whose billing will be linked to your current account's billing (Alpha version)</td>
</tr>
<tr>
    <td><a href="#api_log_url"><CopyableCode code="api_log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generate a temporary URL to retrieve logs</td>
</tr>
<tr>
    <td><a href="#carbon_calculator_csv"><CopyableCode code="carbon_calculator_csv" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endMonth"><code>endMonth</code></a>, <a href="#parameter-startMonth"><code>startMonth</code></a></td>
    <td></td>
    <td>Create a carbon footprint csv generation task</td>
</tr>
<tr>
    <td><a href="#carbon_calculator_pdf"><CopyableCode code="carbon_calculator_pdf" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-month"><code>month</code></a></td>
    <td></td>
    <td>Create a carbon footprint pdf generation task</td>
</tr>
<tr>
    <td><a href="#change_email"><CopyableCode code="change_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-newEmail"><code>newEmail</code></a></td>
    <td></td>
    <td>Initiate an email change procedure</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Initiate a password change procedure</td>
</tr>
<tr>
    <td><a href="#credit_code"><CopyableCode code="credit_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-inputCode"><code>inputCode</code></a></td>
    <td></td>
    <td>Validate a code to generate associated credit movement</td>
</tr>
<tr>
    <td><a href="#geolocation"><CopyableCode code="geolocation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Fetch visitor country & region</td>
</tr>
<tr>
    <td><a href="#mailing_list_subscribe"><CopyableCode code="mailing_list_subscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-mailingList"><code>mailingList</code></a></td>
    <td></td>
    <td>Subscribe an email to a restricted mailing list</td>
</tr>
<tr>
    <td><a href="#password_recover"><CopyableCode code="password_recover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ovhCompany"><code>ovhCompany</code></a>, <a href="#parameter-ovhId"><code>ovhId</code></a></td>
    <td></td>
    <td>Request a password recover</td>
</tr>
<tr>
    <td><a href="#voucher_check_validity"><CopyableCode code="voucher_check_validity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-voucher"><code>voucher</code></a></td>
    <td></td>
    <td>Verify existing voucher</td>
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

Get details about your nichandle

```sql
SELECT
name,
display_name,
address,
area,
birth_city,
birth_day,
city,
company_national_identification_number,
complementary_address,
corporation_type,
country,
currency,
customer_code,
einvoicing_billing_address,
email,
fax,
firstname,
italian_sdi,
kyc_validated,
language,
legalform,
national_identification_number,
nichandle,
organisation,
ovh_company,
ovh_subsidiary,
phone,
phone_country,
phone_type,
purpose_of_purchase,
sex,
spare_email,
state,
vat,
zip
FROM ovh.me.accounts
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

Update details of your nichandle

```sql
UPDATE ovh.me.accounts
SET 
address = '{{ address }}',
area = '{{ area }}',
birth_city = '{{ birth_city }}',
birth_day = '{{ birth_day }}',
city = '{{ city }}',
company_national_identification_number = '{{ company_national_identification_number }}',
complementary_address = '{{ complementary_address }}',
corporation_type = '{{ corporation_type }}',
country = '{{ country }}',
display_name = '{{ display_name }}',
einvoicing_billing_address = '{{ einvoicing_billing_address }}',
fax = '{{ fax }}',
firstname = '{{ firstname }}',
italian_sdi = '{{ italian_sdi }}',
language = '{{ language }}',
legalform = '{{ legalform }}',
name = '{{ name }}',
national_identification_number = '{{ national_identification_number }}',
organisation = '{{ organisation }}',
phone = '{{ phone }}',
phone_country = '{{ phone_country }}',
phone_type = '{{ phone_type }}',
purpose_of_purchase = '{{ purpose_of_purchase }}',
sex = '{{ sex }}',
spare_email = '{{ spare_email }}',
vat = '{{ vat }}',
zip = '{{ zip }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="account"
    values={[
        { label: 'account', value: 'account' },
        { label: 'api_log_url', value: 'api_log_url' },
        { label: 'carbon_calculator_csv', value: 'carbon_calculator_csv' },
        { label: 'carbon_calculator_pdf', value: 'carbon_calculator_pdf' },
        { label: 'change_email', value: 'change_email' },
        { label: 'change_password', value: 'change_password' },
        { label: 'credit_code', value: 'credit_code' },
        { label: 'geolocation', value: 'geolocation' },
        { label: 'mailing_list_subscribe', value: 'mailing_list_subscribe' },
        { label: 'password_recover', value: 'password_recover' },
        { label: 'voucher_check_validity', value: 'voucher_check_validity' }
    ]}
>
<TabItem value="account">

Create a new account whose billing will be linked to your current account's billing (Alpha version)

```sql
EXEC ovh.me.accounts.account 
@@json=
'{
"address": "{{ address }}", 
"area": "{{ area }}", 
"billingAccount": "{{ billingAccount }}", 
"birthCity": "{{ birthCity }}", 
"birthDay": "{{ birthDay }}", 
"city": "{{ city }}", 
"companyNationalIdentificationNumber": "{{ companyNationalIdentificationNumber }}", 
"complementaryAddress": "{{ complementaryAddress }}", 
"corporationType": "{{ corporationType }}", 
"country": "{{ country }}", 
"einvoicingBillingAddress": "{{ einvoicingBillingAddress }}", 
"email": "{{ email }}", 
"fax": "{{ fax }}", 
"firstname": "{{ firstname }}", 
"italianSDI": "{{ italianSDI }}", 
"language": "{{ language }}", 
"legalform": "{{ legalform }}", 
"name": "{{ name }}", 
"nationalIdentificationNumber": "{{ nationalIdentificationNumber }}", 
"organisation": "{{ organisation }}", 
"phone": "{{ phone }}", 
"phoneCountry": "{{ phoneCountry }}", 
"phoneType": "{{ phoneType }}", 
"purposeOfPurchase": "{{ purposeOfPurchase }}", 
"sex": "{{ sex }}", 
"spareEmail": "{{ spareEmail }}", 
"vat": "{{ vat }}", 
"zip": "{{ zip }}"
}'
;
```
</TabItem>
<TabItem value="api_log_url">

Generate a temporary URL to retrieve logs

```sql
EXEC ovh.me.accounts.api_log_url 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="carbon_calculator_csv">

Create a carbon footprint csv generation task

```sql
EXEC ovh.me.accounts.carbon_calculator_csv 
@@json=
'{
"endMonth": "{{ endMonth }}", 
"startMonth": "{{ startMonth }}"
}'
;
```
</TabItem>
<TabItem value="carbon_calculator_pdf">

Create a carbon footprint pdf generation task

```sql
EXEC ovh.me.accounts.carbon_calculator_pdf 
@@json=
'{
"month": "{{ month }}"
}'
;
```
</TabItem>
<TabItem value="change_email">

Initiate an email change procedure

```sql
EXEC ovh.me.accounts.change_email 
@@json=
'{
"newEmail": "{{ newEmail }}"
}'
;
```
</TabItem>
<TabItem value="change_password">

Initiate a password change procedure

```sql
EXEC ovh.me.accounts.change_password 
;
```
</TabItem>
<TabItem value="credit_code">

Validate a code to generate associated credit movement

```sql
EXEC ovh.me.accounts.credit_code 
@@json=
'{
"inputCode": "{{ inputCode }}", 
"serviceId": {{ serviceId }}
}'
;
```
</TabItem>
<TabItem value="geolocation">

Fetch visitor country & region

```sql
EXEC ovh.me.accounts.geolocation 
;
```
</TabItem>
<TabItem value="mailing_list_subscribe">

Subscribe an email to a restricted mailing list

```sql
EXEC ovh.me.accounts.mailing_list_subscribe 
@@json=
'{
"email": "{{ email }}", 
"mailingList": "{{ mailingList }}"
}'
;
```
</TabItem>
<TabItem value="password_recover">

Request a password recover

```sql
EXEC ovh.me.accounts.password_recover 
@@json=
'{
"ovhCompany": "{{ ovhCompany }}", 
"ovhId": "{{ ovhId }}"
}'
;
```
</TabItem>
<TabItem value="voucher_check_validity">

Verify existing voucher

```sql
EXEC ovh.me.accounts.voucher_check_validity 
@@json=
'{
"voucher": "{{ voucher }}"
}'
;
```
</TabItem>
</Tabs>
