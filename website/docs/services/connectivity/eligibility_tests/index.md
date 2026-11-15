--- 
title: eligibility_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - eligibility_tests
  - connectivity
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

Creates, updates, deletes, gets or lists an <code>eligibility_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="eligibility_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.connectivity.eligibility_tests" /></td></tr>
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
    <td><CopyableCode code="eligibility_reference" /></td>
    <td><code>string</code></td>
    <td>Eligibility unique reference (wire: eligibilityReference)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>object</code></td>
    <td>Endpoint information</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td>Offers information</td>
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
    <td><a href="#parameter-eligibility_reference"><code>eligibility_reference</code></a></td>
    <td></td>
    <td>Returns the result of an eligibility test from its reference: the tested endpoint (address, copper or fiber details, portability) and the offers with their eligibility, estimated rates and reasons when not eligible.</td>
</tr>
<tr>
    <td><a href="#address"><CopyableCode code="address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Starts an eligibility test on an address, given by its street code and street number or by its Hexacle. Get them with the search/streets and search/streetNumbers/details calls. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
</tr>
<tr>
    <td><a href="#address_partners"><CopyableCode code="address_partners" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Starts an eligibility test on an address, given by its street code and street number or by its Hexacle. Reserved for partners. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
</tr>
<tr>
    <td><a href="#building"><CopyableCode code="building" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-building"><code>building</code></a></td>
    <td></td>
    <td>Starts an eligibility test on a building, for fiber only. Get the building identifier with the search/buildings calls. Set productFamily to scope the test (ISP by default). Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
</tr>
<tr>
    <td><a href="#building_partners"><CopyableCode code="building_partners" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-building"><code>building</code></a></td>
    <td></td>
    <td>Starts an eligibility test on a building, for fiber only. Reserved for partners. Get the building identifier with the search/buildings calls. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
</tr>
<tr>
    <td><a href="#line"><CopyableCode code="line" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lineNumber"><code>lineNumber</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Starts an eligibility test on a line number, for copper only. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
</tr>
<tr>
    <td><a href="#line_partners"><CopyableCode code="line_partners" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lineNumber"><code>lineNumber</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Starts an eligibility test on a line number, for copper only. Reserved for partners. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
</tr>
<tr>
    <td><a href="#otp"><CopyableCode code="otp" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-otp"><code>otp</code></a></td>
    <td></td>
    <td>Starts an eligibility test on an Optical Termination Panel (OTP) identifier, for fiber only. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
</tr>
<tr>
    <td><a href="#otp_partners"><CopyableCode code="otp_partners" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-otp"><code>otp</code></a></td>
    <td></td>
    <td>Starts an eligibility test on an Optical Termination Panel (OTP) identifier, for fiber only. Reserved for partners. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.</td>
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
<tr id="parameter-eligibility_reference">
    <td><CopyableCode code="eligibility_reference" /></td>
    <td><code>string</code></td>
    <td>Eligibility reference (wire: eligibilityReference)</td>
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

Returns the result of an eligibility test from its reference: the tested endpoint (address, copper or fiber details, portability) and the offers with their eligibility, estimated rates and reasons when not eligible.

```sql
SELECT
eligibility_reference,
endpoint,
offers
FROM ovh.connectivity.eligibility_tests
WHERE eligibility_reference = '{{ eligibility_reference }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="address"
    values={[
        { label: 'address', value: 'address' },
        { label: 'address_partners', value: 'address_partners' },
        { label: 'building', value: 'building' },
        { label: 'building_partners', value: 'building_partners' },
        { label: 'line', value: 'line' },
        { label: 'line_partners', value: 'line_partners' },
        { label: 'otp', value: 'otp' },
        { label: 'otp_partners', value: 'otp_partners' }
    ]}
>
<TabItem value="address">

Starts an eligibility test on an address, given by its street code and street number or by its Hexacle. Get them with the search/streets and search/streetNumbers/details calls. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.address 
@@json=
'{
"hexacle": "{{ hexacle }}", 
"productFamily": "{{ productFamily }}", 
"streetAltCode": "{{ streetAltCode }}", 
"streetCode": "{{ streetCode }}", 
"streetNumber": "{{ streetNumber }}"
}'
;
```
</TabItem>
<TabItem value="address_partners">

Starts an eligibility test on an address, given by its street code and street number or by its Hexacle. Reserved for partners. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.address_partners 
@@json=
'{
"hexacle": "{{ hexacle }}", 
"productFamily": "{{ productFamily }}", 
"streetAltCode": "{{ streetAltCode }}", 
"streetCode": "{{ streetCode }}", 
"streetNumber": "{{ streetNumber }}"
}'
;
```
</TabItem>
<TabItem value="building">

Starts an eligibility test on a building, for fiber only. Get the building identifier with the search/buildings calls. Set productFamily to scope the test (ISP by default). Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.building 
@@json=
'{
"building": "{{ building }}", 
"productFamily": "{{ productFamily }}"
}'
;
```
</TabItem>
<TabItem value="building_partners">

Starts an eligibility test on a building, for fiber only. Reserved for partners. Get the building identifier with the search/buildings calls. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.building_partners 
@@json=
'{
"building": "{{ building }}", 
"productFamily": "{{ productFamily }}"
}'
;
```
</TabItem>
<TabItem value="line">

Starts an eligibility test on a line number, for copper only. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.line 
@@json=
'{
"lineNumber": "{{ lineNumber }}", 
"status": "{{ status }}", 
"streetCode": "{{ streetCode }}", 
"streetNumber": "{{ streetNumber }}"
}'
;
```
</TabItem>
<TabItem value="line_partners">

Starts an eligibility test on a line number, for copper only. Reserved for partners. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.line_partners 
@@json=
'{
"lineNumber": "{{ lineNumber }}", 
"status": "{{ status }}", 
"streetCode": "{{ streetCode }}", 
"streetNumber": "{{ streetNumber }}"
}'
;
```
</TabItem>
<TabItem value="otp">

Starts an eligibility test on an Optical Termination Panel (OTP) identifier, for fiber only. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.otp 
@@json=
'{
"otp": "{{ otp }}"
}'
;
```
</TabItem>
<TabItem value="otp_partners">

Starts an eligibility test on an Optical Termination Panel (OTP) identifier, for fiber only. Reserved for partners. Returns an asynchronous task, pending until its result holds the eligibility reference, the endpoint and the eligible offers.

```sql
EXEC ovh.connectivity.eligibility_tests.otp_partners 
@@json=
'{
"otp": "{{ otp }}"
}'
;
```
</TabItem>
</Tabs>
