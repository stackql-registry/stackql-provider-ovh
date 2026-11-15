--- 
title: telephony_number_specials
hide_title: false
hide_table_of_contents: false
keywords:
  - telephony_number_specials
  - order
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

Creates, updates, deletes, gets or lists a <code>telephony_number_specials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telephony_number_specials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.telephony_number_specials" /></td></tr>
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
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="contracts" /></td>
    <td><code>array</code></td>
    <td>List of contracts related to the order</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Details of the order</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>object</code></td>
    <td>Prices of the order including with and without taxes</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL to download the order</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-display_universal_directory"><code>display_universal_directory</code></a>, <a href="#parameter-legalform"><code>legalform</code></a>, <a href="#parameter-range"><code>range</code></a>, <a href="#parameter-retractation"><code>retractation</code></a>, <a href="#parameter-siret"><code>siret</code></a>, <a href="#parameter-social_nomination"><code>social_nomination</code></a>, <a href="#parameter-typology"><code>typology</code></a></td>
    <td><a href="#parameter-address_extra"><code>address_extra</code></a>, <a href="#parameter-ape"><code>ape</code></a>, <a href="#parameter-cedex"><code>cedex</code></a>, <a href="#parameter-city"><code>city</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-display_search_reverse"><code>display_search_reverse</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-firstname"><code>firstname</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organisation"><code>organisation</code></a>, <a href="#parameter-phone"><code>phone</code></a>, <a href="#parameter-pool"><code>pool</code></a>, <a href="#parameter-post_box"><code>post_box</code></a>, <a href="#parameter-specific_number"><code>specific_number</code></a>, <a href="#parameter-street_name"><code>street_name</code></a>, <a href="#parameter-street_number"><code>street_number</code></a>, <a href="#parameter-street_number_extra"><code>street_number_extra</code></a>, <a href="#parameter-street_type"><code>street_type</code></a>, <a href="#parameter-urban_district"><code>urban_district</code></a>, <a href="#parameter-zip"><code>zip</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-display_universal_directory"><code>display_universal_directory</code></a>, <a href="#parameter-legalform"><code>legalform</code></a>, <a href="#parameter-range"><code>range</code></a>, <a href="#parameter-retractation"><code>retractation</code></a>, <a href="#parameter-siret"><code>siret</code></a>, <a href="#parameter-social_nomination"><code>social_nomination</code></a>, <a href="#parameter-typology"><code>typology</code></a></td>
    <td></td>
    <td>Create order</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-country">
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Number country</td>
</tr>
<tr id="parameter-display_universal_directory">
    <td><CopyableCode code="display_universal_directory" /></td>
    <td><code>boolean</code></td>
    <td>Publish informations on directory ? (Yellow Pages...) (wire: displayUniversalDirectory)</td>
</tr>
<tr id="parameter-legalform">
    <td><CopyableCode code="legalform" /></td>
    <td><code>string</code></td>
    <td>Legal form</td>
</tr>
<tr id="parameter-range">
    <td><CopyableCode code="range" /></td>
    <td><code>string</code></td>
    <td>Special range</td>
</tr>
<tr id="parameter-retractation">
    <td><CopyableCode code="retractation" /></td>
    <td><code>boolean</code></td>
    <td>Retractation rights if set</td>
</tr>
<tr id="parameter-siret">
    <td><CopyableCode code="siret" /></td>
    <td><code>string</code></td>
    <td>Company siret</td>
</tr>
<tr id="parameter-social_nomination">
    <td><CopyableCode code="social_nomination" /></td>
    <td><code>string</code></td>
    <td>Company social nomination (wire: socialNomination)</td>
</tr>
<tr id="parameter-typology">
    <td><CopyableCode code="typology" /></td>
    <td><code>string</code></td>
    <td>Special range typology</td>
</tr>
<tr id="parameter-address_extra">
    <td><CopyableCode code="address_extra" /></td>
    <td><code>string</code></td>
    <td>Contact address extra (wire: addressExtra)</td>
</tr>
<tr id="parameter-ape">
    <td><CopyableCode code="ape" /></td>
    <td><code>string</code></td>
    <td>Company ape</td>
</tr>
<tr id="parameter-cedex">
    <td><CopyableCode code="cedex" /></td>
    <td><code>string</code></td>
    <td>Contact cedex</td>
</tr>
<tr id="parameter-city">
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>Contact city</td>
</tr>
<tr id="parameter-description">
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Line description</td>
</tr>
<tr id="parameter-display_search_reverse">
    <td><CopyableCode code="display_search_reverse" /></td>
    <td><code>boolean</code></td>
    <td>Publish informations on reversed directory ? (wire: displaySearchReverse)</td>
</tr>
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-firstname">
    <td><CopyableCode code="firstname" /></td>
    <td><code>string</code></td>
    <td>Contact firstname</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Contact name</td>
</tr>
<tr id="parameter-organisation">
    <td><CopyableCode code="organisation" /></td>
    <td><code>string</code></td>
    <td>Contact organisation</td>
</tr>
<tr id="parameter-phone">
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>Contact phone</td>
</tr>
<tr id="parameter-pool">
    <td><CopyableCode code="pool" /></td>
    <td><code>integer</code></td>
    <td>Number of alias in case of pool</td>
</tr>
<tr id="parameter-post_box">
    <td><CopyableCode code="post_box" /></td>
    <td><code>string</code></td>
    <td>Contact post box (wire: postBox)</td>
</tr>
<tr id="parameter-specific_number">
    <td><CopyableCode code="specific_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Preselected standard number (wire: specificNumber)</td>
</tr>
<tr id="parameter-street_name">
    <td><CopyableCode code="street_name" /></td>
    <td><code>string</code></td>
    <td>Street name (wire: streetName)</td>
</tr>
<tr id="parameter-street_number">
    <td><CopyableCode code="street_number" /></td>
    <td><code>string</code></td>
    <td>Street number (wire: streetNumber)</td>
</tr>
<tr id="parameter-street_number_extra">
    <td><CopyableCode code="street_number_extra" /></td>
    <td><code>string</code></td>
    <td>Street number extra (wire: streetNumberExtra)</td>
</tr>
<tr id="parameter-street_type">
    <td><CopyableCode code="street_type" /></td>
    <td><code>string</code></td>
    <td>Street type (wire: streetType)</td>
</tr>
<tr id="parameter-urban_district">
    <td><CopyableCode code="urban_district" /></td>
    <td><code>string</code></td>
    <td>Contact urban district (wire: urbanDistrict)</td>
</tr>
<tr id="parameter-zip">
    <td><CopyableCode code="zip" /></td>
    <td><code>string</code></td>
    <td>Contact zip</td>
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

Get prices and contracts information

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.telephony_number_specials
WHERE billing_account = '{{ billing_account }}' -- required
AND country = '{{ country }}' -- required
AND display_universal_directory = '{{ display_universal_directory }}' -- required
AND legalform = '{{ legalform }}' -- required
AND range = '{{ range }}' -- required
AND retractation = '{{ retractation }}' -- required
AND siret = '{{ siret }}' -- required
AND social_nomination = '{{ social_nomination }}' -- required
AND typology = '{{ typology }}' -- required
AND address_extra = '{{ address_extra }}'
AND ape = '{{ ape }}'
AND cedex = '{{ cedex }}'
AND city = '{{ city }}'
AND description = '{{ description }}'
AND display_search_reverse = '{{ display_search_reverse }}'
AND email = '{{ email }}'
AND firstname = '{{ firstname }}'
AND name = '{{ name }}'
AND organisation = '{{ organisation }}'
AND phone = '{{ phone }}'
AND pool = '{{ pool }}'
AND post_box = '{{ post_box }}'
AND specific_number = '{{ specific_number }}'
AND street_name = '{{ street_name }}'
AND street_number = '{{ street_number }}'
AND street_number_extra = '{{ street_number_extra }}'
AND street_type = '{{ street_type }}'
AND urban_district = '{{ urban_district }}'
AND zip = '{{ zip }}'
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

Create order

```sql
INSERT INTO ovh.order.telephony_number_specials (
address_extra,
ape,
cedex,
city,
country,
description,
display_search_reverse,
display_universal_directory,
email,
firstname,
legalform,
name,
organisation,
phone,
pool,
post_box,
range,
retractation,
siret,
social_nomination,
specific_number,
street_name,
street_number,
street_number_extra,
street_type,
typology,
urban_district,
zip,
billing_account
)
SELECT 
'{{ address_extra }}',
'{{ ape }}',
'{{ cedex }}',
'{{ city }}',
'{{ country }}' /* required */,
'{{ description }}',
{{ display_search_reverse }},
{{ display_universal_directory }} /* required */,
'{{ email }}',
'{{ firstname }}',
'{{ legalform }}' /* required */,
'{{ name }}',
'{{ organisation }}',
'{{ phone }}',
{{ pool }},
'{{ post_box }}',
'{{ range }}' /* required */,
{{ retractation }} /* required */,
'{{ siret }}' /* required */,
'{{ social_nomination }}' /* required */,
'{{ specific_number }}',
'{{ street_name }}',
'{{ street_number }}',
'{{ street_number_extra }}',
'{{ street_type }}',
'{{ typology }}' /* required */,
'{{ urban_district }}',
'{{ zip }}',
'{{ billing_account }}'
RETURNING
order_id,
contracts,
details,
prices,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: telephony_number_specials
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the telephony_number_specials resource.
    - name: address_extra
      value: "{{ address_extra }}"
      description: |
        Contact address extra
    - name: ape
      value: "{{ ape }}"
      description: |
        Company ape
    - name: cedex
      value: "{{ cedex }}"
      description: |
        Contact cedex
    - name: city
      value: "{{ city }}"
      description: |
        Contact city
    - name: country
      value: "{{ country }}"
      description: |
        Special number country
      valid_values: ['fr']
    - name: description
      value: "{{ description }}"
      description: |
        Line description
    - name: display_search_reverse
      value: {{ display_search_reverse }}
      description: |
        Publish informations on reversed directory ?
    - name: display_universal_directory
      value: {{ display_universal_directory }}
      description: |
        Publish informations on directory ? (Yellow Pages...)
    - name: email
      value: "{{ email }}"
    - name: firstname
      value: "{{ firstname }}"
      description: |
        Contact firstname
    - name: legalform
      value: "{{ legalform }}"
      description: |
        Legal forms a nichandle can be registered as
      valid_values: ['administration', 'association', 'corporation', 'individual', 'other', 'personalcorporation']
    - name: name
      value: "{{ name }}"
      description: |
        Contact name
    - name: organisation
      value: "{{ organisation }}"
      description: |
        Contact organisation
    - name: phone
      value: "{{ phone }}"
      description: |
        Contact phone
    - name: pool
      value: {{ pool }}
      description: |
        Number quantity contained in the pool
      valid_values: ['10', '50', '100']
    - name: post_box
      value: "{{ post_box }}"
      description: |
        Contact post box
    - name: range
      value: "{{ range }}"
      description: |
        Special range
    - name: retractation
      value: {{ retractation }}
      description: |
        Retractation rights if set
    - name: siret
      value: "{{ siret }}"
      description: |
        Company siret
    - name: social_nomination
      value: "{{ social_nomination }}"
      description: |
        Company social nomination
    - name: specific_number
      value: "{{ specific_number }}"
      description: |
        Phone number
    - name: street_name
      value: "{{ street_name }}"
      description: |
        Street name
    - name: street_number
      value: "{{ street_number }}"
      description: |
        Street number
    - name: street_number_extra
      value: "{{ street_number_extra }}"
      description: |
        Street number extra
    - name: street_type
      value: "{{ street_type }}"
      description: |
        Street type
    - name: typology
      value: "{{ typology }}"
      description: |
        Number special typology
      valid_values: ['fr_access', 'fr_announced', 'fr_conferencing', 'fr_contentsAuto', 'fr_contentsManual', 'fr_games', 'fr_linking', 'fr_m2m', 'fr_relationship']
    - name: urban_district
      value: "{{ urban_district }}"
      description: |
        Contact urban district
    - name: zip
      value: "{{ zip }}"
      description: |
        Contact zip
`}</CodeBlock>

</TabItem>
</Tabs>
