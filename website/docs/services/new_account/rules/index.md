--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - new_account
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.new_account.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Give all the rules to follow in order to create and update an OVH identifier</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Give all the rules to follow in order to create and update an OVH identifier

```sql
INSERT INTO ovh.new_account.rules (
action,
address,
area,
birth_city,
birth_day,
city,
company_national_identification_number,
corporation_type,
country,
einvoicing_billing_address,
email,
fax,
firstname,
italian_sdi,
language,
legalform,
name,
national_identification_number,
organisation,
ovh_company,
ovh_subsidiary,
phone,
phone_country,
phone_type,
purpose_of_purchase,
sex,
spare_email,
vat,
zip
)
SELECT 
'{{ action }}',
'{{ address }}',
'{{ area }}',
'{{ birth_city }}',
'{{ birth_day }}',
'{{ city }}',
'{{ company_national_identification_number }}',
'{{ corporation_type }}',
'{{ country }}',
'{{ einvoicing_billing_address }}',
'{{ email }}',
'{{ fax }}',
'{{ firstname }}',
'{{ italian_sdi }}',
'{{ language }}',
'{{ legalform }}',
'{{ name }}',
'{{ national_identification_number }}',
'{{ organisation }}',
'{{ ovh_company }}',
'{{ ovh_subsidiary }}',
'{{ phone }}',
'{{ phone_country }}',
'{{ phone_type }}',
'{{ purpose_of_purchase }}',
'{{ sex }}',
'{{ spare_email }}',
'{{ vat }}',
'{{ zip }}'
RETURNING
field_name,
default_value,
examples,
in,
mandatory,
max_length,
min_length,
prefix,
regular_expression
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: action
      value: "{{ action }}"
      description: |
        Action a nichandle can perform on his account.
      valid_values: ['create', 'update']
    - name: address
      value: "{{ address }}"
    - name: area
      value: "{{ area }}"
    - name: birth_city
      value: "{{ birth_city }}"
    - name: birth_day
      value: "{{ birth_day }}"
    - name: city
      value: "{{ city }}"
    - name: company_national_identification_number
      value: "{{ company_national_identification_number }}"
    - name: corporation_type
      value: "{{ corporation_type }}"
    - name: country
      value: "{{ country }}"
      description: |
        Countries a nichandle can choose
      valid_values: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UNKNOWN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
    - name: einvoicing_billing_address
      value: "{{ einvoicing_billing_address }}"
    - name: email
      value: "{{ email }}"
    - name: fax
      value: "{{ fax }}"
    - name: firstname
      value: "{{ firstname }}"
    - name: italian_sdi
      value: "{{ italian_sdi }}"
    - name: language
      value: "{{ language }}"
      description: |
        Languages a nichandle can choose
      valid_values: ['cs_CZ', 'de_DE', 'en_AU', 'en_CA', 'en_GB', 'en_IE', 'en_US', 'es_ES', 'fi_FI', 'fr_CA', 'fr_FR', 'fr_MA', 'fr_SN', 'fr_TN', 'it_IT', 'lt_LT', 'nl_NL', 'pl_PL', 'pt_PT']
    - name: legalform
      value: "{{ legalform }}"
      description: |
        Legal forms a nichandle can be registered as
      valid_values: ['administration', 'association', 'corporation', 'individual', 'other', 'personalcorporation']
    - name: name
      value: "{{ name }}"
    - name: national_identification_number
      value: "{{ national_identification_number }}"
    - name: organisation
      value: "{{ organisation }}"
    - name: ovh_company
      value: "{{ ovh_company }}"
      description: |
        OVH companies
      valid_values: ['kimsufi', 'ovh', 'soyoustart']
    - name: ovh_subsidiary
      value: "{{ ovh_subsidiary }}"
      description: |
        OVH subsidiaries
      valid_values: ['ASIA', 'AU', 'CA', 'CZ', 'DE', 'ES', 'EU', 'FI', 'FR', 'GB', 'IE', 'IN', 'IT', 'LT', 'MA', 'NL', 'PL', 'PT', 'QC', 'SG', 'SN', 'TN', 'US', 'WE', 'WS']
    - name: phone
      value: "{{ phone }}"
    - name: phone_country
      value: "{{ phone_country }}"
      description: |
        Countries a nichandle can choose
      valid_values: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DG', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EA', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'IC', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'UNKNOWN', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
    - name: phone_type
      value: "{{ phone_type }}"
      description: |
        Phone Type a nichandle can have
      valid_values: ['landline', 'mobile']
    - name: purpose_of_purchase
      value: "{{ purpose_of_purchase }}"
    - name: sex
      value: "{{ sex }}"
      description: |
        All genders a person can choose
      valid_values: ['female', 'male']
    - name: spare_email
      value: "{{ spare_email }}"
    - name: vat
      value: "{{ vat }}"
    - name: zip
      value: "{{ zip }}"
`}</CodeBlock>

</TabItem>
</Tabs>
