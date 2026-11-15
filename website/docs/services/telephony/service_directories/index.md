--- 
title: service_directories
hide_title: false
hide_table_of_contents: false
keywords:
  - service_directories
  - telephony
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

Creates, updates, deletes, gets or lists a <code>service_directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_directories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.service_directories" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="display_first_name" /></td>
    <td><code>boolean</code></td>
    <td> (wire: displayFirstName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td> (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="way_name" /></td>
    <td><code>string</code></td>
    <td> (wire: wayName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="address_extra" /></td>
    <td><code>string</code></td>
    <td> (wire: addressExtra)</td>
</tr>
<tr>
    <td><CopyableCode code="ape" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="area_code" /></td>
    <td><code>integer</code></td>
    <td> (wire: areaCode)</td>
</tr>
<tr>
    <td><CopyableCode code="birth_date" /></td>
    <td><code>string (date)</code></td>
    <td> (wire: birthDate)</td>
</tr>
<tr>
    <td><CopyableCode code="cedex" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="directory_service_code" /></td>
    <td><code>string</code></td>
    <td> (wire: directoryServiceCode)</td>
</tr>
<tr>
    <td><CopyableCode code="display_marketing_directory" /></td>
    <td><code>boolean</code></td>
    <td> (wire: displayMarketingDirectory)</td>
</tr>
<tr>
    <td><CopyableCode code="display_only_city" /></td>
    <td><code>boolean</code></td>
    <td> (wire: displayOnlyCity)</td>
</tr>
<tr>
    <td><CopyableCode code="display_search_reverse" /></td>
    <td><code>boolean</code></td>
    <td> (wire: displaySearchReverse)</td>
</tr>
<tr>
    <td><CopyableCode code="display_universal_directory" /></td>
    <td><code>boolean</code></td>
    <td> (wire: displayUniversalDirectory)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="gender" /></td>
    <td><code>string</code></td>
    <td>All genders a person can choose (female, male)</td>
</tr>
<tr>
    <td><CopyableCode code="insee_code" /></td>
    <td><code>integer</code></td>
    <td> (wire: inseeCode)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_form" /></td>
    <td><code>string</code></td>
    <td> (wire: legalForm)</td>
</tr>
<tr>
    <td><CopyableCode code="line_description" /></td>
    <td><code>string</code></td>
    <td> (wire: lineDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="modification_date" /></td>
    <td><code>string</code></td>
    <td> (wire: modificationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="modification_type" /></td>
    <td><code>string</code></td>
    <td> (wire: modificationType)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="occupation" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="post_box" /></td>
    <td><code>string</code></td>
    <td> (wire: postBox)</td>
</tr>
<tr>
    <td><CopyableCode code="post_code" /></td>
    <td><code>string</code></td>
    <td> (wire: postCode)</td>
</tr>
<tr>
    <td><CopyableCode code="siret" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="social_nomination" /></td>
    <td><code>string</code></td>
    <td> (wire: socialNomination)</td>
</tr>
<tr>
    <td><CopyableCode code="social_nomination_extra" /></td>
    <td><code>string</code></td>
    <td> (wire: socialNominationExtra)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="urban_district" /></td>
    <td><code>string</code></td>
    <td> (wire: urbanDistrict)</td>
</tr>
<tr>
    <td><CopyableCode code="way_number" /></td>
    <td><code>string</code></td>
    <td> (wire: wayNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="way_number_extra" /></td>
    <td><code>string</code></td>
    <td> (wire: wayNumberExtra)</td>
</tr>
<tr>
    <td><CopyableCode code="way_type" /></td>
    <td><code>string</code></td>
    <td> (wire: wayType)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the directory listing</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the directory listing</td>
</tr>
<tr>
    <td><a href="#fetch_entreprise_informations"><CopyableCode code="fetch_entreprise_informations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-entrepriseNumber"><code>entrepriseNumber</code></a></td>
    <td></td>
    <td>Fetch company information</td>
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
<tr id="parameter-billingAccount">
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount</td>
</tr>
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get the directory listing

```sql
SELECT
name,
display_first_name,
first_name,
way_name,
address,
address_extra,
ape,
area_code,
birth_date,
cedex,
city,
country,
directory_service_code,
display_marketing_directory,
display_only_city,
display_search_reverse,
display_universal_directory,
email,
gender,
insee_code,
legal_form,
line_description,
modification_date,
modification_type,
number,
occupation,
post_box,
post_code,
siret,
social_nomination,
social_nomination_extra,
status,
urban_district,
way_number,
way_number_extra,
way_type
FROM ovh.telephony.service_directories
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Update the directory listing

```sql
UPDATE ovh.telephony.service_directories
SET 
address = '{{ address }}',
address_extra = '{{ address_extra }}',
ape = '{{ ape }}',
birth_date = '{{ birth_date }}',
cedex = '{{ cedex }}',
city = '{{ city }}',
country = '{{ country }}',
directory_service_code = '{{ directory_service_code }}',
display_first_name = {{ display_first_name }},
display_marketing_directory = {{ display_marketing_directory }},
display_only_city = {{ display_only_city }},
display_search_reverse = {{ display_search_reverse }},
display_universal_directory = {{ display_universal_directory }},
email = '{{ email }}',
first_name = '{{ first_name }}',
gender = '{{ gender }}',
legal_form = '{{ legal_form }}',
line_description = '{{ line_description }}',
name = '{{ name }}',
occupation = '{{ occupation }}',
post_box = '{{ post_box }}',
post_code = '{{ post_code }}',
siret = '{{ siret }}',
social_nomination = '{{ social_nomination }}',
social_nomination_extra = '{{ social_nomination_extra }}',
urban_district = '{{ urban_district }}',
way_name = '{{ way_name }}',
way_number = '{{ way_number }}',
way_number_extra = '{{ way_number_extra }}',
way_type = '{{ way_type }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="fetch_entreprise_informations"
    values={[
        { label: 'fetch_entreprise_informations', value: 'fetch_entreprise_informations' }
    ]}
>
<TabItem value="fetch_entreprise_informations">

Fetch company information

```sql
EXEC ovh.telephony.service_directories.fetch_entreprise_informations 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"entrepriseNumber": "{{ entrepriseNumber }}"
}'
;
```
</TabItem>
</Tabs>
