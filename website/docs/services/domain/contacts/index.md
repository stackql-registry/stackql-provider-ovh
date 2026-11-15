--- 
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
  - domain
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.contacts" /></td></tr>
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
    <td>Unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_id" /></td>
    <td><code>string</code></td>
    <td>Lawyer accreditation number (wire: accreditationId)</td>
</tr>
<tr>
    <td><CopyableCode code="enterprise_id" /></td>
    <td><code>string</code></td>
    <td>Enterprise identifier (wire: enterpriseId)</td>
</tr>
<tr>
    <td><CopyableCode code="trademark_id" /></td>
    <td><code>string</code></td>
    <td>Trademark related to the contact (wire: trademarkId)</td>
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
    <td>Name of organisation (wire: organisationName)</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_country" /></td>
    <td><code>string</code></td>
    <td>Country of lawyer accreditation (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW) (wire: accreditationCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_organism" /></td>
    <td><code>string</code></td>
    <td>Organism of lawyer accreditation (wire: accreditationOrganism)</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_year" /></td>
    <td><code>integer</code></td>
    <td>Year of lawyer accreditation (wire: accreditationYear)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>The address of the contact</td>
</tr>
<tr>
    <td><CopyableCode code="birth_city" /></td>
    <td><code>string</code></td>
    <td>City of birth (wire: birthCity)</td>
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
    <td>Company National Identification Number (wire: companyNationalIdentificationNumber)</td>
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
    <td><CopyableCode code="gender" /></td>
    <td><code>string</code></td>
    <td>Gender (female, male)</td>
</tr>
<tr>
    <td><CopyableCode code="insee" /></td>
    <td><code>string</code></td>
    <td>INSEE identifier</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language (cs_CZ, de_DE, en_AU, en_CA, en_GB, en_IE, en_US, es_ES, fi_FI, fr_CA, fr_FR, fr_MA, fr_SN, fr_TN, it_IT, lt_LT, nl_NL, pl_PL, pt_PT)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_form" /></td>
    <td><code>string</code></td>
    <td>Legal forms a nichandle can be registered as (administration, association, corporation, individual, other, personalcorporation) (wire: legalForm)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_form_category" /></td>
    <td><code>string</code></td>
    <td>category of legalForm (wire: legalFormCategory)</td>
</tr>
<tr>
    <td><CopyableCode code="national_identification_number" /></td>
    <td><code>string</code></td>
    <td>National Identification Number (wire: nationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nationality" /></td>
    <td><code>string</code></td>
    <td>Nationality (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_accountable" /></td>
    <td><code>string</code></td>
    <td>To whom is the organisation accountable (wire: organisationAccountable)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_funding" /></td>
    <td><code>string</code></td>
    <td>What is the source of funding (wire: organisationFunding)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_funding_other" /></td>
    <td><code>string</code></td>
    <td>Explain the source of funding if organisationFunding is other (wire: organisationFundingOther)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_role" /></td>
    <td><code>string</code></td>
    <td>Role of your organisation (wire: organisationRole)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_role_other" /></td>
    <td><code>string</code></td>
    <td>Explain the role of your organisation if organisationRole is other (wire: organisationRoleOther)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_staff_status" /></td>
    <td><code>string</code></td>
    <td>Status of the staff (wire: organisationStaffStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_staff_status_other" /></td>
    <td><code>string</code></td>
    <td>Explain the status of the staff if organisationStaffStatus is other (wire: organisationStaffStatusOther)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_type" /></td>
    <td><code>string</code></td>
    <td>type of organisation (wire: organisationType)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_type_other" /></td>
    <td><code>string</code></td>
    <td>Explain the type of organisation if organisationType is other (wire: organisationTypeOther)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="registrant_document_type" /></td>
    <td><code>string</code></td>
    <td>Type of registrant document (wire: registrantDocumentType)</td>
</tr>
<tr>
    <td><CopyableCode code="registrant_document_type_other" /></td>
    <td><code>string</code></td>
    <td>Explain the type of registrant document if registrantDocumentType is other (wire: registrantDocumentTypeOther)</td>
</tr>
<tr>
    <td><CopyableCode code="role_in_organisation" /></td>
    <td><code>string</code></td>
    <td>The role in the organisation (wire: roleInOrganisation)</td>
</tr>
<tr>
    <td><CopyableCode code="vat" /></td>
    <td><code>string</code></td>
    <td>VAT number</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string</code></td>
    <td>Website</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A contact contains the personal data of a user

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
    <td>Unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_id" /></td>
    <td><code>string</code></td>
    <td>Lawyer accreditation number (wire: accreditationId)</td>
</tr>
<tr>
    <td><CopyableCode code="enterprise_id" /></td>
    <td><code>string</code></td>
    <td>Enterprise identifier (wire: enterpriseId)</td>
</tr>
<tr>
    <td><CopyableCode code="trademark_id" /></td>
    <td><code>string</code></td>
    <td>Trademark related to the contact (wire: trademarkId)</td>
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
    <td>Name of organisation (wire: organisationName)</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_country" /></td>
    <td><code>string</code></td>
    <td>Country of lawyer accreditation (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW) (wire: accreditationCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_organism" /></td>
    <td><code>string</code></td>
    <td>Organism of lawyer accreditation (wire: accreditationOrganism)</td>
</tr>
<tr>
    <td><CopyableCode code="accreditation_year" /></td>
    <td><code>integer</code></td>
    <td>Year of lawyer accreditation (wire: accreditationYear)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>The address of the contact</td>
</tr>
<tr>
    <td><CopyableCode code="birth_city" /></td>
    <td><code>string</code></td>
    <td>City of birth (wire: birthCity)</td>
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
    <td>Company National Identification Number (wire: companyNationalIdentificationNumber)</td>
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
    <td><CopyableCode code="gender" /></td>
    <td><code>string</code></td>
    <td>Gender (female, male)</td>
</tr>
<tr>
    <td><CopyableCode code="insee" /></td>
    <td><code>string</code></td>
    <td>INSEE identifier</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language (cs_CZ, de_DE, en_AU, en_CA, en_GB, en_IE, en_US, es_ES, fi_FI, fr_CA, fr_FR, fr_MA, fr_SN, fr_TN, it_IT, lt_LT, nl_NL, pl_PL, pt_PT)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_form" /></td>
    <td><code>string</code></td>
    <td>Legal forms a nichandle can be registered as (administration, association, corporation, individual, other, personalcorporation) (wire: legalForm)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_form_category" /></td>
    <td><code>string</code></td>
    <td>category of legalForm (wire: legalFormCategory)</td>
</tr>
<tr>
    <td><CopyableCode code="national_identification_number" /></td>
    <td><code>string</code></td>
    <td>National Identification Number (wire: nationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nationality" /></td>
    <td><code>string</code></td>
    <td>Nationality (AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_accountable" /></td>
    <td><code>string</code></td>
    <td>To whom is the organisation accountable (wire: organisationAccountable)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_funding" /></td>
    <td><code>string</code></td>
    <td>What is the source of funding (wire: organisationFunding)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_funding_other" /></td>
    <td><code>string</code></td>
    <td>Explain the source of funding if organisationFunding is other (wire: organisationFundingOther)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_role" /></td>
    <td><code>string</code></td>
    <td>Role of your organisation (wire: organisationRole)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_role_other" /></td>
    <td><code>string</code></td>
    <td>Explain the role of your organisation if organisationRole is other (wire: organisationRoleOther)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_staff_status" /></td>
    <td><code>string</code></td>
    <td>Status of the staff (wire: organisationStaffStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_staff_status_other" /></td>
    <td><code>string</code></td>
    <td>Explain the status of the staff if organisationStaffStatus is other (wire: organisationStaffStatusOther)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_type" /></td>
    <td><code>string</code></td>
    <td>type of organisation (wire: organisationType)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation_type_other" /></td>
    <td><code>string</code></td>
    <td>Explain the type of organisation if organisationType is other (wire: organisationTypeOther)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="registrant_document_type" /></td>
    <td><code>string</code></td>
    <td>Type of registrant document (wire: registrantDocumentType)</td>
</tr>
<tr>
    <td><CopyableCode code="registrant_document_type_other" /></td>
    <td><code>string</code></td>
    <td>Explain the type of registrant document if registrantDocumentType is other (wire: registrantDocumentTypeOther)</td>
</tr>
<tr>
    <td><CopyableCode code="role_in_organisation" /></td>
    <td><code>string</code></td>
    <td>The role in the organisation (wire: roleInOrganisation)</td>
</tr>
<tr>
    <td><CopyableCode code="vat" /></td>
    <td><code>string</code></td>
    <td>VAT number</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string</code></td>
    <td>Website</td>
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
    <td>Get details about a contact</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all contacts</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a contact</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a></td>
    <td></td>
    <td>Update a contact</td>
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

Get details about a contact

```sql
SELECT
id,
accreditation_id,
enterprise_id,
trademark_id,
first_name,
last_name,
organisation_name,
accreditation_country,
accreditation_organism,
accreditation_year,
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
insee,
language,
legal_form,
legal_form_category,
national_identification_number,
nationality,
organisation_accountable,
organisation_funding,
organisation_funding_other,
organisation_role,
organisation_role_other,
organisation_staff_status,
organisation_staff_status_other,
organisation_type,
organisation_type_other,
phone,
registrant_document_type,
registrant_document_type_other,
role_in_organisation,
vat,
website
FROM ovh.domain.contacts
WHERE contact_id = '{{ contact_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all contacts

```sql
SELECT
id,
accreditation_id,
enterprise_id,
trademark_id,
first_name,
last_name,
organisation_name,
accreditation_country,
accreditation_organism,
accreditation_year,
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
insee,
language,
legal_form,
legal_form_category,
national_identification_number,
nationality,
organisation_accountable,
organisation_funding,
organisation_funding_other,
organisation_role,
organisation_role_other,
organisation_staff_status,
organisation_staff_status_other,
organisation_type,
organisation_type_other,
phone,
registrant_document_type,
registrant_document_type_other,
role_in_organisation,
vat,
website
FROM ovh.domain.contacts
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

Create a contact

```sql
INSERT INTO ovh.domain.contacts (
accreditation_country,
accreditation_id,
accreditation_organism,
accreditation_year,
address,
birth_city,
birth_country,
birth_day,
birth_zip,
cell_phone,
company_national_identification_number,
email,
enterprise_id,
fax,
first_name,
gender,
insee,
language,
last_name,
legal_form,
legal_form_category,
national_identification_number,
nationality,
organisation_accountable,
organisation_funding,
organisation_funding_other,
organisation_name,
organisation_role,
organisation_role_other,
organisation_staff_status,
organisation_staff_status_other,
organisation_type,
organisation_type_other,
phone,
registrant_document_type,
registrant_document_type_other,
role_in_organisation,
trademark_id,
vat,
website
)
SELECT 
'{{ accreditation_country }}',
'{{ accreditation_id }}',
'{{ accreditation_organism }}',
{{ accreditation_year }},
'{{ address }}',
'{{ birth_city }}',
'{{ birth_country }}',
'{{ birth_day }}',
'{{ birth_zip }}',
'{{ cell_phone }}',
'{{ company_national_identification_number }}',
'{{ email }}',
'{{ enterprise_id }}',
'{{ fax }}',
'{{ first_name }}',
'{{ gender }}',
'{{ insee }}',
'{{ language }}',
'{{ last_name }}',
'{{ legal_form }}',
'{{ legal_form_category }}',
'{{ national_identification_number }}',
'{{ nationality }}',
'{{ organisation_accountable }}',
'{{ organisation_funding }}',
'{{ organisation_funding_other }}',
'{{ organisation_name }}',
'{{ organisation_role }}',
'{{ organisation_role_other }}',
'{{ organisation_staff_status }}',
'{{ organisation_staff_status_other }}',
'{{ organisation_type }}',
'{{ organisation_type_other }}',
'{{ phone }}',
'{{ registrant_document_type }}',
'{{ registrant_document_type_other }}',
'{{ role_in_organisation }}',
'{{ trademark_id }}',
'{{ vat }}',
'{{ website }}'
RETURNING
id,
accreditation_id,
enterprise_id,
trademark_id,
first_name,
last_name,
organisation_name,
accreditation_country,
accreditation_organism,
accreditation_year,
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
insee,
language,
legal_form,
legal_form_category,
national_identification_number,
nationality,
organisation_accountable,
organisation_funding,
organisation_funding_other,
organisation_role,
organisation_role_other,
organisation_staff_status,
organisation_staff_status_other,
organisation_type,
organisation_type_other,
phone,
registrant_document_type,
registrant_document_type_other,
role_in_organisation,
vat,
website
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contacts
  props:
    - name: accreditation_country
      value: "{{ accreditation_country }}"
      description: |
        Country of lawyer accreditation
      valid_values: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UNKNOWN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
    - name: accreditation_id
      value: "{{ accreditation_id }}"
      description: |
        Lawyer accreditation number
    - name: accreditation_organism
      value: "{{ accreditation_organism }}"
      description: |
        Organism of lawyer accreditation
    - name: accreditation_year
      value: {{ accreditation_year }}
      description: |
        Year of lawyer accreditation
    - name: address
      description: |
        The address of the contact
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
        City of birth
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
        Company National Identification Number
    - name: email
      value: "{{ email }}"
      description: |
        Email address
    - name: enterprise_id
      value: "{{ enterprise_id }}"
      description: |
        Enterprise identifier
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
    - name: insee
      value: "{{ insee }}"
      description: |
        INSEE identifier
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
        Legal forms a nichandle can be registered as
      valid_values: ['administration', 'association', 'corporation', 'individual', 'other', 'personalcorporation']
    - name: legal_form_category
      value: "{{ legal_form_category }}"
      description: |
        category of legalForm
    - name: national_identification_number
      value: "{{ national_identification_number }}"
      description: |
        National Identification Number
    - name: nationality
      value: "{{ nationality }}"
      description: |
        Nationality
      valid_values: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UNKNOWN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
    - name: organisation_accountable
      value: "{{ organisation_accountable }}"
      description: |
        To whom is the organisation accountable
    - name: organisation_funding
      value: "{{ organisation_funding }}"
      description: |
        What is the source of funding
    - name: organisation_funding_other
      value: "{{ organisation_funding_other }}"
      description: |
        Explain the source of funding if organisationFunding is other
    - name: organisation_name
      value: "{{ organisation_name }}"
      description: |
        Name of organisation
    - name: organisation_role
      value: "{{ organisation_role }}"
      description: |
        Role of your organisation
    - name: organisation_role_other
      value: "{{ organisation_role_other }}"
      description: |
        Explain the role of your organisation if organisationRole is other
    - name: organisation_staff_status
      value: "{{ organisation_staff_status }}"
      description: |
        Status of the staff
    - name: organisation_staff_status_other
      value: "{{ organisation_staff_status_other }}"
      description: |
        Explain the status of the staff if organisationStaffStatus is other
    - name: organisation_type
      value: "{{ organisation_type }}"
      description: |
        type of organisation
    - name: organisation_type_other
      value: "{{ organisation_type_other }}"
      description: |
        Explain the type of organisation if organisationType is other
    - name: phone
      value: "{{ phone }}"
      description: |
        Phone number
    - name: registrant_document_type
      value: "{{ registrant_document_type }}"
      description: |
        Type of registrant document
    - name: registrant_document_type_other
      value: "{{ registrant_document_type_other }}"
      description: |
        Explain the type of registrant document if registrantDocumentType is other
    - name: role_in_organisation
      value: "{{ role_in_organisation }}"
      description: |
        The role in the organisation
    - name: trademark_id
      value: "{{ trademark_id }}"
      description: |
        Trademark related to the contact
    - name: vat
      value: "{{ vat }}"
      description: |
        VAT number
    - name: website
      value: "{{ website }}"
      description: |
        Website
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

Update a contact

```sql
UPDATE ovh.domain.contacts
SET 
accreditation_country = '{{ accreditation_country }}',
accreditation_id = '{{ accreditation_id }}',
accreditation_organism = '{{ accreditation_organism }}',
accreditation_year = {{ accreditation_year }},
address = '{{ address }}',
birth_city = '{{ birth_city }}',
birth_country = '{{ birth_country }}',
birth_day = '{{ birth_day }}',
birth_zip = '{{ birth_zip }}',
cell_phone = '{{ cell_phone }}',
company_national_identification_number = '{{ company_national_identification_number }}',
email = '{{ email }}',
enterprise_id = '{{ enterprise_id }}',
fax = '{{ fax }}',
first_name = '{{ first_name }}',
gender = '{{ gender }}',
insee = '{{ insee }}',
language = '{{ language }}',
last_name = '{{ last_name }}',
legal_form = '{{ legal_form }}',
legal_form_category = '{{ legal_form_category }}',
national_identification_number = '{{ national_identification_number }}',
nationality = '{{ nationality }}',
organisation_accountable = '{{ organisation_accountable }}',
organisation_funding = '{{ organisation_funding }}',
organisation_funding_other = '{{ organisation_funding_other }}',
organisation_name = '{{ organisation_name }}',
organisation_role = '{{ organisation_role }}',
organisation_role_other = '{{ organisation_role_other }}',
organisation_staff_status = '{{ organisation_staff_status }}',
organisation_staff_status_other = '{{ organisation_staff_status_other }}',
organisation_type = '{{ organisation_type }}',
organisation_type_other = '{{ organisation_type_other }}',
phone = '{{ phone }}',
registrant_document_type = '{{ registrant_document_type }}',
registrant_document_type_other = '{{ registrant_document_type_other }}',
role_in_organisation = '{{ role_in_organisation }}',
trademark_id = '{{ trademark_id }}',
vat = '{{ vat }}',
website = '{{ website }}'
WHERE 
contact_id = '{{ contact_id }}' --required
RETURNING
id,
accreditation_id,
enterprise_id,
trademark_id,
first_name,
last_name,
organisation_name,
accreditation_country,
accreditation_organism,
accreditation_year,
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
insee,
language,
legal_form,
legal_form_category,
national_identification_number,
nationality,
organisation_accountable,
organisation_funding,
organisation_funding_other,
organisation_role,
organisation_role_other,
organisation_staff_status,
organisation_staff_status_other,
organisation_type,
organisation_type_other,
phone,
registrant_document_type,
registrant_document_type_other,
role_in_organisation,
vat,
website;
```
</TabItem>
</Tabs>
