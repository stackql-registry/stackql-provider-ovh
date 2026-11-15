--- 
title: telephony_number_nogeographics
hide_title: false
hide_table_of_contents: false
keywords:
  - telephony_number_nogeographics
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

Creates, updates, deletes, gets or lists a <code>telephony_number_nogeographics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telephony_number_nogeographics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.telephony_number_nogeographics" /></td></tr>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-display_universal_directory"><code>display_universal_directory</code></a>, <a href="#parameter-legalform"><code>legalform</code></a>, <a href="#parameter-offer"><code>offer</code></a>, <a href="#parameter-retractation"><code>retractation</code></a></td>
    <td><a href="#parameter-ape"><code>ape</code></a>, <a href="#parameter-city"><code>city</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-firstname"><code>firstname</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organisation"><code>organisation</code></a>, <a href="#parameter-phone"><code>phone</code></a>, <a href="#parameter-pool"><code>pool</code></a>, <a href="#parameter-siret"><code>siret</code></a>, <a href="#parameter-social_nomination"><code>social_nomination</code></a>, <a href="#parameter-specific_number"><code>specific_number</code></a>, <a href="#parameter-street_name"><code>street_name</code></a>, <a href="#parameter-street_number"><code>street_number</code></a>, <a href="#parameter-zip"><code>zip</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-display_universal_directory"><code>display_universal_directory</code></a>, <a href="#parameter-legalform"><code>legalform</code></a>, <a href="#parameter-offer"><code>offer</code></a>, <a href="#parameter-retractation"><code>retractation</code></a></td>
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
    <td>Publish contact informations on universal directories (wire: displayUniversalDirectory)</td>
</tr>
<tr id="parameter-legalform">
    <td><CopyableCode code="legalform" /></td>
    <td><code>string</code></td>
    <td>Legal form</td>
</tr>
<tr id="parameter-offer">
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Number offer</td>
</tr>
<tr id="parameter-retractation">
    <td><CopyableCode code="retractation" /></td>
    <td><code>boolean</code></td>
    <td>Retractation rights if set</td>
</tr>
<tr id="parameter-ape">
    <td><CopyableCode code="ape" /></td>
    <td><code>string</code></td>
    <td>Company ape</td>
</tr>
<tr id="parameter-city">
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>Contact city</td>
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
FROM ovh.order.telephony_number_nogeographics
WHERE billing_account = '{{ billing_account }}' -- required
AND country = '{{ country }}' -- required
AND display_universal_directory = '{{ display_universal_directory }}' -- required
AND legalform = '{{ legalform }}' -- required
AND offer = '{{ offer }}' -- required
AND retractation = '{{ retractation }}' -- required
AND ape = '{{ ape }}'
AND city = '{{ city }}'
AND email = '{{ email }}'
AND firstname = '{{ firstname }}'
AND name = '{{ name }}'
AND organisation = '{{ organisation }}'
AND phone = '{{ phone }}'
AND pool = '{{ pool }}'
AND siret = '{{ siret }}'
AND social_nomination = '{{ social_nomination }}'
AND specific_number = '{{ specific_number }}'
AND street_name = '{{ street_name }}'
AND street_number = '{{ street_number }}'
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
INSERT INTO ovh.order.telephony_number_nogeographics (
ape,
city,
country,
display_universal_directory,
email,
firstname,
legalform,
name,
offer,
organisation,
phone,
pool,
retractation,
siret,
social_nomination,
specific_number,
street_name,
street_number,
zip,
billing_account
)
SELECT 
'{{ ape }}',
'{{ city }}',
'{{ country }}' /* required */,
{{ display_universal_directory }} /* required */,
'{{ email }}',
'{{ firstname }}',
'{{ legalform }}' /* required */,
'{{ name }}',
'{{ offer }}' /* required */,
'{{ organisation }}',
'{{ phone }}',
{{ pool }},
{{ retractation }} /* required */,
'{{ siret }}',
'{{ social_nomination }}',
'{{ specific_number }}',
'{{ street_name }}',
'{{ street_number }}',
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
- name: telephony_number_nogeographics
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the telephony_number_nogeographics resource.
    - name: ape
      value: "{{ ape }}"
      description: |
        Company ape
    - name: city
      value: "{{ city }}"
      description: |
        Contact city
    - name: country
      value: "{{ country }}"
      description: |
        Number country
      valid_values: ['be', 'ch', 'fr', 'gb', 'uk']
    - name: display_universal_directory
      value: {{ display_universal_directory }}
      description: |
        Publish contact informations on universal directories
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
    - name: offer
      value: "{{ offer }}"
      description: |
        Number offer
      valid_values: ['alias', 'didsOnly']
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
    - name: zip
      value: "{{ zip }}"
      description: |
        Contact zip
`}</CodeBlock>

</TabItem>
</Tabs>
