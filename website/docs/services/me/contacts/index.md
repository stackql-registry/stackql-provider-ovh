--- 
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
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

Creates, updates, deletes, gets or lists a <code>contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.contacts" /></td></tr>
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
    <td>Contact Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>First name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_name" /></td>
    <td><code>string</code></td>
    <td>Organisation name (wire: organisationName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>Address for this contact</td>
</tr>
<tr>
    <td><CopyableCode code="birth_city" /></td>
    <td><code>string</code></td>
    <td>Birth city (wire: birthCity)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_country" /></td>
    <td><code>string</code></td>
    <td>Birth Country (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW) (wire: birthCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_day" /></td>
    <td><code>string (date)</code></td>
    <td>Birth date (wire: birthDay)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_zip" /></td>
    <td><code>string</code></td>
    <td>Birth Zipcode (wire: birthZip)</td>
</tr>
<tr>
    <td><CopyableCode code="cell_phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Cellphone number (wire: cellPhone)</td>
</tr>
<tr>
    <td><CopyableCode code="company_national_identification_number" /></td>
    <td><code>string</code></td>
    <td>National identification number of your company (wire: companyNationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address</td>
</tr>
<tr>
    <td><CopyableCode code="fax" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Fax number</td>
</tr>
<tr>
    <td><CopyableCode code="gender" /></td>
    <td><code>string</code></td>
    <td>Gender (female, male)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language (cs_CZ, de_DE, en_AU, en_CA, en_GB, en_IE, en_US, es_ES, fi_FI, fr_CA, fr_FR, fr_MA, fr_SN, fr_TN, it_IT, lt_LT, nl_NL, pl_PL, pt_PT)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_form" /></td>
    <td><code>string</code></td>
    <td>Legal form of the contact (administration, association, corporation, individual, other, personalcorporation) (wire: legalForm)</td>
</tr>
<tr>
    <td><CopyableCode code="national_identification_number" /></td>
    <td><code>string</code></td>
    <td>National identification number of the contact (wire: nationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nationality" /></td>
    <td><code>string</code></td>
    <td>Nationality (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_type" /></td>
    <td><code>string</code></td>
    <td>Organisation type (wire: organisationType)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Telephone number</td>
</tr>
<tr>
    <td><CopyableCode code="spare_email" /></td>
    <td><code>string</code></td>
    <td>Spare email address (wire: spareEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="vat" /></td>
    <td><code>string</code></td>
    <td>VAT number</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contact definition

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
    <td>Contact Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>First name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_name" /></td>
    <td><code>string</code></td>
    <td>Organisation name (wire: organisationName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>Address for this contact</td>
</tr>
<tr>
    <td><CopyableCode code="birth_city" /></td>
    <td><code>string</code></td>
    <td>Birth city (wire: birthCity)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_country" /></td>
    <td><code>string</code></td>
    <td>Birth Country (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW) (wire: birthCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_day" /></td>
    <td><code>string (date)</code></td>
    <td>Birth date (wire: birthDay)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_zip" /></td>
    <td><code>string</code></td>
    <td>Birth Zipcode (wire: birthZip)</td>
</tr>
<tr>
    <td><CopyableCode code="cell_phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Cellphone number (wire: cellPhone)</td>
</tr>
<tr>
    <td><CopyableCode code="company_national_identification_number" /></td>
    <td><code>string</code></td>
    <td>National identification number of your company (wire: companyNationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address</td>
</tr>
<tr>
    <td><CopyableCode code="fax" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Fax number</td>
</tr>
<tr>
    <td><CopyableCode code="gender" /></td>
    <td><code>string</code></td>
    <td>Gender (female, male)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language (cs_CZ, de_DE, en_AU, en_CA, en_GB, en_IE, en_US, es_ES, fi_FI, fr_CA, fr_FR, fr_MA, fr_SN, fr_TN, it_IT, lt_LT, nl_NL, pl_PL, pt_PT)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_form" /></td>
    <td><code>string</code></td>
    <td>Legal form of the contact (administration, association, corporation, individual, other, personalcorporation) (wire: legalForm)</td>
</tr>
<tr>
    <td><CopyableCode code="national_identification_number" /></td>
    <td><code>string</code></td>
    <td>National identification number of the contact (wire: nationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nationality" /></td>
    <td><code>string</code></td>
    <td>Nationality (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_type" /></td>
    <td><code>string</code></td>
    <td>Organisation type (wire: organisationType)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Telephone number</td>
</tr>
<tr>
    <td><CopyableCode code="spare_email" /></td>
    <td><code>string</code></td>
    <td>Spare email address (wire: spareEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="vat" /></td>
    <td><code>string</code></td>
    <td>VAT number</td>
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
    <td><a href="#parameter-contact_id"><code>contact_id</code></a></td>
    <td></td>
    <td>Retrieve information about a contact</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve every contact your created</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new contact</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a></td>
    <td></td>
    <td>Update an existing contact</td>
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
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>integer</code></td>
    <td>Contact ID (wire: contactId)</td>
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

Retrieve information about a contact

```sql
SELECT
id,
first_name,
last_name,
organisation_name,
address,
birth_city,
birth_country,
birth_day,
birth_zip,
cell_phone,
company_national_identification_number,
email,
fax,
gender,
language,
legal_form,
national_identification_number,
nationality,
organisation_type,
phone,
spare_email,
vat
FROM ovh.me.contacts
WHERE contact_id = '{{ contact_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve every contact your created

```sql
SELECT
id,
first_name,
last_name,
organisation_name,
address,
birth_city,
birth_country,
birth_day,
birth_zip,
cell_phone,
company_national_identification_number,
email,
fax,
gender,
language,
legal_form,
national_identification_number,
nationality,
organisation_type,
phone,
spare_email,
vat
FROM ovh.me.contacts
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a new contact

```sql
INSERT INTO ovh.me.contacts (
address,
birth_city,
birth_country,
birth_day,
birth_zip,
cell_phone,
company_national_identification_number,
email,
fax,
first_name,
gender,
language,
last_name,
legal_form,
national_identification_number,
nationality,
organisation_name,
organisation_type,
phone,
spare_email,
vat
)
SELECT 
'{{ address }}',
'{{ birth_city }}',
'{{ birth_country }}',
'{{ birth_day }}',
'{{ birth_zip }}',
'{{ cell_phone }}',
'{{ company_national_identification_number }}',
'{{ email }}',
'{{ fax }}',
'{{ first_name }}',
'{{ gender }}',
'{{ language }}',
'{{ last_name }}',
'{{ legal_form }}',
'{{ national_identification_number }}',
'{{ nationality }}',
'{{ organisation_name }}',
'{{ organisation_type }}',
'{{ phone }}',
'{{ spare_email }}',
'{{ vat }}'
RETURNING
id,
first_name,
last_name,
organisation_name,
address,
birth_city,
birth_country,
birth_day,
birth_zip,
cell_phone,
company_national_identification_number,
email,
fax,
gender,
language,
legal_form,
national_identification_number,
nationality,
organisation_type,
phone,
spare_email,
vat
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contacts
  props:
    - name: address
      description: |
        Address for this contact
      value:
        city: "{{ city }}"
        country: "{{ country }}"
        line1: "{{ line1 }}"
        line2: "{{ line2 }}"
        line3: "{{ line3 }}"
        otherDetails: "{{ otherDetails }}"
        province: "{{ province }}"
        zip: "{{ zip }}"
    - name: birth_city
      value: "{{ birth_city }}"
      description: |
        Birth city
    - name: birth_country
      value: "{{ birth_country }}"
      description: |
        Birth Country
      valid_values: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UNKNOWN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
    - name: birth_day
      value: "{{ birth_day }}"
      description: |
        Birth date
    - name: birth_zip
      value: "{{ birth_zip }}"
      description: |
        Birth Zipcode
    - name: cell_phone
      value: "{{ cell_phone }}"
      description: |
        Cellphone number
    - name: company_national_identification_number
      value: "{{ company_national_identification_number }}"
      description: |
        National identification number of your company
    - name: email
      value: "{{ email }}"
      description: |
        Email address
    - name: fax
      value: "{{ fax }}"
      description: |
        Fax number
    - name: first_name
      value: "{{ first_name }}"
      description: |
        First name
    - name: gender
      value: "{{ gender }}"
      description: |
        Gender
      valid_values: ['female', 'male']
    - name: language
      value: "{{ language }}"
      description: |
        Language
      valid_values: ['cs_CZ', 'de_DE', 'en_AU', 'en_CA', 'en_GB', 'en_IE', 'en_US', 'es_ES', 'fi_FI', 'fr_CA', 'fr_FR', 'fr_MA', 'fr_SN', 'fr_TN', 'it_IT', 'lt_LT', 'nl_NL', 'pl_PL', 'pt_PT']
    - name: last_name
      value: "{{ last_name }}"
      description: |
        Last name
    - name: legal_form
      value: "{{ legal_form }}"
      description: |
        Legal form of the contact
      valid_values: ['administration', 'association', 'corporation', 'individual', 'other', 'personalcorporation']
    - name: national_identification_number
      value: "{{ national_identification_number }}"
      description: |
        National identification number of the contact
    - name: nationality
      value: "{{ nationality }}"
      description: |
        Nationality
      valid_values: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UNKNOWN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
    - name: organisation_name
      value: "{{ organisation_name }}"
      description: |
        Organisation name
    - name: organisation_type
      value: "{{ organisation_type }}"
      description: |
        Organisation type
    - name: phone
      value: "{{ phone }}"
      description: |
        Telephone number
    - name: spare_email
      value: "{{ spare_email }}"
      description: |
        Spare email address
    - name: vat
      value: "{{ vat }}"
      description: |
        VAT number
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

Update an existing contact

```sql
UPDATE ovh.me.contacts
SET 
address = '{{ address }}',
birth_city = '{{ birth_city }}',
birth_country = '{{ birth_country }}',
birth_day = '{{ birth_day }}',
birth_zip = '{{ birth_zip }}',
cell_phone = '{{ cell_phone }}',
company_national_identification_number = '{{ company_national_identification_number }}',
email = '{{ email }}',
fax = '{{ fax }}',
first_name = '{{ first_name }}',
gender = '{{ gender }}',
language = '{{ language }}',
last_name = '{{ last_name }}',
legal_form = '{{ legal_form }}',
national_identification_number = '{{ national_identification_number }}',
nationality = '{{ nationality }}',
organisation_name = '{{ organisation_name }}',
organisation_type = '{{ organisation_type }}',
phone = '{{ phone }}',
spare_email = '{{ spare_email }}',
vat = '{{ vat }}'
WHERE 
contact_id = '{{ contact_id }}' --required
RETURNING
id,
first_name,
last_name,
organisation_name,
address,
birth_city,
birth_country,
birth_day,
birth_zip,
cell_phone,
company_national_identification_number,
email,
fax,
gender,
language,
legal_form,
national_identification_number,
nationality,
organisation_type,
phone,
spare_email,
vat;
```
</TabItem>
</Tabs>
