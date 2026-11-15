--- 
title: creation_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - creation_rules
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

Creates, updates, deletes, gets or lists a <code>creation_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="creation_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.new_account.creation_rules" /></td></tr>
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
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="area" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="birth_city" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: birthCity)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_day" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: birthDay)</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="company_national_identification_number" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: companyNationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="corporation_type" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: corporationType)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="fax" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="firstname" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="italian_sdi" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: italianSDI)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="legalform" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="national_identification_number" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: nationalIdentificationNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="organisation" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="ovh_company" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: ovhCompany)</td>
</tr>
<tr>
    <td><CopyableCode code="ovh_subsidiary" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: ovhSubsidiary)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="phone_country" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: phoneCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_type" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: phoneType)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose_of_purchase" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: purposeOfPurchase)</td>
</tr>
<tr>
    <td><CopyableCode code="sex" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="spare_email" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field (wire: spareEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="vat" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
</tr>
<tr>
    <td><CopyableCode code="zip" /></td>
    <td><code>object</code></td>
    <td>Describe all rules for a given field</td>
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
    <td><a href="#parameter-country"><code>country</code></a>, <a href="#parameter-legalform"><code>legalform</code></a>, <a href="#parameter-ovh_company"><code>ovh_company</code></a>, <a href="#parameter-ovh_subsidiary"><code>ovh_subsidiary</code></a></td>
    <td></td>
    <td>Give all the rules to follow in order to create an OVH identifier</td>
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
<tr id="parameter-country">
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-legalform">
    <td><CopyableCode code="legalform" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ovh_company">
    <td><CopyableCode code="ovh_company" /></td>
    <td><code>string</code></td>
    <td> (wire: ovhCompany)</td>
</tr>
<tr id="parameter-ovh_subsidiary">
    <td><CopyableCode code="ovh_subsidiary" /></td>
    <td><code>string</code></td>
    <td> (wire: ovhSubsidiary)</td>
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

Give all the rules to follow in order to create an OVH identifier

```sql
SELECT
name,
address,
area,
birth_city,
birth_day,
city,
company_national_identification_number,
corporation_type,
country,
email,
fax,
firstname,
italian_sdi,
language,
legalform,
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
FROM ovh.new_account.creation_rules
WHERE country = '{{ country }}' -- required
AND legalform = '{{ legalform }}' -- required
AND ovh_company = '{{ ovh_company }}' -- required
AND ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
;
```
</TabItem>
</Tabs>
