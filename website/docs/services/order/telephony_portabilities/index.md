--- 
title: telephony_portabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - telephony_portabilities
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

Creates, updates, deletes, gets or lists a <code>telephony_portabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telephony_portabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.telephony_portabilities" /></td></tr>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-call_number"><code>call_number</code></a>, <a href="#parameter-city"><code>city</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-display_universal_directory"><code>display_universal_directory</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-offer"><code>offer</code></a>, <a href="#parameter-social_reason"><code>social_reason</code></a>, <a href="#parameter-street_name"><code>street_name</code></a>, <a href="#parameter-street_number"><code>street_number</code></a>, <a href="#parameter-zip"><code>zip</code></a></td>
    <td><a href="#parameter-building"><code>building</code></a>, <a href="#parameter-contact_name"><code>contact_name</code></a>, <a href="#parameter-contact_number"><code>contact_number</code></a>, <a href="#parameter-desire_date"><code>desire_date</code></a>, <a href="#parameter-door"><code>door</code></a>, <a href="#parameter-execute_as_soon_as_possible"><code>execute_as_soon_as_possible</code></a>, <a href="#parameter-fiabilisation"><code>fiabilisation</code></a>, <a href="#parameter-first_name"><code>first_name</code></a>, <a href="#parameter-floor"><code>floor</code></a>, <a href="#parameter-line_to_redirect_alias_to"><code>line_to_redirect_alias_to</code></a>, <a href="#parameter-list_numbers"><code>list_numbers</code></a>, <a href="#parameter-mobile_phone"><code>mobile_phone</code></a>, <a href="#parameter-rio"><code>rio</code></a>, <a href="#parameter-siret"><code>siret</code></a>, <a href="#parameter-special_number_category"><code>special_number_category</code></a>, <a href="#parameter-stair"><code>stair</code></a>, <a href="#parameter-street_number_extra"><code>street_number_extra</code></a>, <a href="#parameter-street_type"><code>street_type</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-call_number"><code>call_number</code></a>, <a href="#parameter-city"><code>city</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-display_universal_directory"><code>display_universal_directory</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-offer"><code>offer</code></a>, <a href="#parameter-social_reason"><code>social_reason</code></a>, <a href="#parameter-street_name"><code>street_name</code></a>, <a href="#parameter-street_number"><code>street_number</code></a>, <a href="#parameter-zip"><code>zip</code></a></td>
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
<tr id="parameter-call_number">
    <td><CopyableCode code="call_number" /></td>
    <td><code>string</code></td>
    <td>The number you want to port (wire: callNumber)</td>
</tr>
<tr id="parameter-city">
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>Address city</td>
</tr>
<tr id="parameter-country">
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Country of number</td>
</tr>
<tr id="parameter-display_universal_directory">
    <td><CopyableCode code="display_universal_directory" /></td>
    <td><code>boolean</code></td>
    <td>Publish informations on directory ? (Yellow Pages...) (wire: displayUniversalDirectory)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Your name</td>
</tr>
<tr id="parameter-offer">
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>The offer : individual or company</td>
</tr>
<tr id="parameter-social_reason">
    <td><CopyableCode code="social_reason" /></td>
    <td><code>string</code></td>
    <td>Your social reason (wire: socialReason)</td>
</tr>
<tr id="parameter-street_name">
    <td><CopyableCode code="street_name" /></td>
    <td><code>string</code></td>
    <td>Address street name (wire: streetName)</td>
</tr>
<tr id="parameter-street_number">
    <td><CopyableCode code="street_number" /></td>
    <td><code>number</code></td>
    <td>Address street number (wire: streetNumber)</td>
</tr>
<tr id="parameter-zip">
    <td><CopyableCode code="zip" /></td>
    <td><code>string</code></td>
    <td>Address zip code</td>
</tr>
<tr id="parameter-building">
    <td><CopyableCode code="building" /></td>
    <td><code>string</code></td>
    <td>Address building</td>
</tr>
<tr id="parameter-contact_name">
    <td><CopyableCode code="contact_name" /></td>
    <td><code>string</code></td>
    <td>Your contact name (wire: contactName)</td>
</tr>
<tr id="parameter-contact_number">
    <td><CopyableCode code="contact_number" /></td>
    <td><code>string</code></td>
    <td>Your contact phone number (wire: contactNumber)</td>
</tr>
<tr id="parameter-desire_date">
    <td><CopyableCode code="desire_date" /></td>
    <td><code>string (date)</code></td>
    <td>The date you want for portability execution. Overridden if flag executeAsSoonAsPossible is set (wire: desireDate)</td>
</tr>
<tr id="parameter-door">
    <td><CopyableCode code="door" /></td>
    <td><code>string</code></td>
    <td>Address door</td>
</tr>
<tr id="parameter-execute_as_soon_as_possible">
    <td><CopyableCode code="execute_as_soon_as_possible" /></td>
    <td><code>boolean</code></td>
    <td>Ask to port the number as soon as possible (wire: executeAsSoonAsPossible)</td>
</tr>
<tr id="parameter-fiabilisation">
    <td><CopyableCode code="fiabilisation" /></td>
    <td><code>boolean</code></td>
    <td>Ask for a fiabilisation or not (FR only)</td>
</tr>
<tr id="parameter-first_name">
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Your firstname (wire: firstName)</td>
</tr>
<tr id="parameter-floor">
    <td><CopyableCode code="floor" /></td>
    <td><code>number</code></td>
    <td>Address floor</td>
</tr>
<tr id="parameter-line_to_redirect_alias_to">
    <td><CopyableCode code="line_to_redirect_alias_to" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Redirect ported numbers to the specific line (wire: lineToRedirectAliasTo)</td>
</tr>
<tr id="parameter-list_numbers">
    <td><CopyableCode code="list_numbers" /></td>
    <td><code>string</code></td>
    <td>Extra numbers to be ported, a comma separated list of numbers (wire: listNumbers)</td>
</tr>
<tr id="parameter-mobile_phone">
    <td><CopyableCode code="mobile_phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Mobile phone to use to text portability status (wire: mobilePhone)</td>
</tr>
<tr id="parameter-rio">
    <td><CopyableCode code="rio" /></td>
    <td><code>string</code></td>
    <td>RIO of the number for individual offer</td>
</tr>
<tr id="parameter-siret">
    <td><CopyableCode code="siret" /></td>
    <td><code>string</code></td>
    <td>If you port under your society, the SIRET number</td>
</tr>
<tr id="parameter-special_number_category">
    <td><CopyableCode code="special_number_category" /></td>
    <td><code>string</code></td>
    <td>The special number category (needed if type is special) (wire: specialNumberCategory)</td>
</tr>
<tr id="parameter-stair">
    <td><CopyableCode code="stair" /></td>
    <td><code>number</code></td>
    <td>Address stair</td>
</tr>
<tr id="parameter-street_number_extra">
    <td><CopyableCode code="street_number_extra" /></td>
    <td><code>string</code></td>
    <td>Address street number extra : bis, ter, ... (wire: streetNumberExtra)</td>
</tr>
<tr id="parameter-street_type">
    <td><CopyableCode code="street_type" /></td>
    <td><code>string</code></td>
    <td>Address street type (wire: streetType)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of number : landline or special</td>
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
FROM ovh.order.telephony_portabilities
WHERE billing_account = '{{ billing_account }}' -- required
AND call_number = '{{ call_number }}' -- required
AND city = '{{ city }}' -- required
AND country = '{{ country }}' -- required
AND display_universal_directory = '{{ display_universal_directory }}' -- required
AND name = '{{ name }}' -- required
AND offer = '{{ offer }}' -- required
AND social_reason = '{{ social_reason }}' -- required
AND street_name = '{{ street_name }}' -- required
AND street_number = '{{ street_number }}' -- required
AND zip = '{{ zip }}' -- required
AND building = '{{ building }}'
AND contact_name = '{{ contact_name }}'
AND contact_number = '{{ contact_number }}'
AND desire_date = '{{ desire_date }}'
AND door = '{{ door }}'
AND execute_as_soon_as_possible = '{{ execute_as_soon_as_possible }}'
AND fiabilisation = '{{ fiabilisation }}'
AND first_name = '{{ first_name }}'
AND floor = '{{ floor }}'
AND line_to_redirect_alias_to = '{{ line_to_redirect_alias_to }}'
AND list_numbers = '{{ list_numbers }}'
AND mobile_phone = '{{ mobile_phone }}'
AND rio = '{{ rio }}'
AND siret = '{{ siret }}'
AND special_number_category = '{{ special_number_category }}'
AND stair = '{{ stair }}'
AND street_number_extra = '{{ street_number_extra }}'
AND street_type = '{{ street_type }}'
AND type = '{{ type }}'
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
INSERT INTO ovh.order.telephony_portabilities (
building,
call_number,
city,
contact_name,
contact_number,
country,
desire_date,
display_universal_directory,
door,
execute_as_soon_as_possible,
fiabilisation,
first_name,
floor,
line_to_redirect_alias_to,
list_numbers,
mobile_phone,
name,
offer,
rio,
siret,
social_reason,
special_number_category,
stair,
street_name,
street_number,
street_number_extra,
street_type,
type,
zip,
billing_account
)
SELECT 
'{{ building }}',
'{{ call_number }}' /* required */,
'{{ city }}' /* required */,
'{{ contact_name }}',
'{{ contact_number }}',
'{{ country }}' /* required */,
'{{ desire_date }}',
{{ display_universal_directory }} /* required */,
'{{ door }}',
{{ execute_as_soon_as_possible }},
{{ fiabilisation }},
'{{ first_name }}',
{{ floor }},
'{{ line_to_redirect_alias_to }}',
'{{ list_numbers }}',
'{{ mobile_phone }}',
'{{ name }}' /* required */,
'{{ offer }}' /* required */,
'{{ rio }}',
'{{ siret }}',
'{{ social_reason }}' /* required */,
'{{ special_number_category }}',
{{ stair }},
'{{ street_name }}' /* required */,
{{ street_number }} /* required */,
'{{ street_number_extra }}',
'{{ street_type }}',
'{{ type }}',
'{{ zip }}' /* required */,
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
- name: telephony_portabilities
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the telephony_portabilities resource.
    - name: building
      value: "{{ building }}"
      description: |
        Address building
    - name: call_number
      value: "{{ call_number }}"
      description: |
        The number you want to port
    - name: city
      value: "{{ city }}"
      description: |
        Address city
    - name: contact_name
      value: "{{ contact_name }}"
      description: |
        Your contact name
    - name: contact_number
      value: "{{ contact_number }}"
      description: |
        Your contact phone number
    - name: country
      value: "{{ country }}"
      description: |
        Country of number to port
      valid_values: ['belgium', 'france', 'switzerland']
    - name: desire_date
      value: "{{ desire_date }}"
      description: |
        The date you want for portability execution. Overridden if flag executeAsSoonAsPossible is set
    - name: display_universal_directory
      value: {{ display_universal_directory }}
      description: |
        Publish informations on directory ? (Yellow Pages...)
    - name: door
      value: "{{ door }}"
      description: |
        Address door
    - name: execute_as_soon_as_possible
      value: {{ execute_as_soon_as_possible }}
      description: |
        Ask to port the number as soon as possible
    - name: fiabilisation
      value: {{ fiabilisation }}
      description: |
        Ask for a fiabilisation or not (FR only)
    - name: first_name
      value: "{{ first_name }}"
      description: |
        Your firstname
    - name: floor
      value: {{ floor }}
      description: |
        Address floor
    - name: line_to_redirect_alias_to
      value: "{{ line_to_redirect_alias_to }}"
      description: |
        Phone number
    - name: list_numbers
      value: "{{ list_numbers }}"
      description: |
        Extra numbers to be ported, a comma separated list of numbers
    - name: mobile_phone
      value: "{{ mobile_phone }}"
      description: |
        Phone number
    - name: name
      value: "{{ name }}"
      description: |
        Your name
    - name: offer
      value: "{{ offer }}"
      description: |
        Type of your service offer
      valid_values: ['company', 'individual']
    - name: rio
      value: "{{ rio }}"
      description: |
        RIO of the number for individual offer
    - name: siret
      value: "{{ siret }}"
      description: |
        If you port under your society, the SIRET number
    - name: social_reason
      value: "{{ social_reason }}"
      description: |
        Social reason
      valid_values: ['corporation', 'individual', 'professional']
    - name: special_number_category
      value: "{{ special_number_category }}"
      description: |
        Special number category
      valid_values: ['access', 'announced', 'conferencing', 'contentsAuto', 'contentsManual', 'directory', 'games', 'linking', 'm2m', 'relationship']
    - name: stair
      value: {{ stair }}
      description: |
        Address stair
    - name: street_name
      value: "{{ street_name }}"
      description: |
        Address street name
    - name: street_number
      value: {{ street_number }}
      description: |
        Address street number
    - name: street_number_extra
      value: "{{ street_number_extra }}"
      description: |
        Address street number extra : bis, ter, ...
    - name: street_type
      value: "{{ street_type }}"
      description: |
        Address street type
    - name: type
      value: "{{ type }}"
      description: |
        Type of number
      valid_values: ['landline', 'special']
    - name: zip
      value: "{{ zip }}"
      description: |
        Address zip code
`}</CodeBlock>

</TabItem>
</Tabs>
