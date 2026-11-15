--- 
title: virtual_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_numbers
  - sms
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

Creates, updates, deletes, gets or lists a <code>virtual_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.virtual_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_number"
    values={[
        { label: 'get_by_number', value: 'get_by_number' },
        { label: 'get', value: 'get' },
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_number">

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
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The ISO formated country code of the number (be, ch, de, es, fr, uk) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The virtual number</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The ISO formated country code of the number (be, ch, de, es, fr, uk) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The virtual number</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_service_name">

Virtual numbers

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
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The ISO formated country code of the number (be, ch, de, es, fr, uk) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The virtual number</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Virtual numbers

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
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The ISO formated country code of the number (be, ch, de, es, fr, uk) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The virtual number</td>
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
    <td><a href="#get_by_number"><CopyableCode code="get_by_number" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a virtual number. Returns the virtual number attached to the SMS account and the ISO code of its country.</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-number"><code>number</code></a></td>
    <td></td>
    <td>Get a virtual number service. Returns the virtual number service, with the number and the ISO code of its country.</td>
</tr>
<tr>
    <td><a href="#list_by_service_name"><CopyableCode code="list_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List virtual numbers. Returns the virtual numbers of the account. A virtual number receives SMS and lets receivers reply.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List virtual numbers. Returns the virtual numbers of the customer, as services. A virtual number receives SMS and lets receivers reply to the messages sent.</td>
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
<tr id="parameter-number">
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>Your virtual number</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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
    defaultValue="get_by_number"
    values={[
        { label: 'get_by_number', value: 'get_by_number' },
        { label: 'get', value: 'get' },
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_number">

Get a virtual number. Returns the virtual number attached to the SMS account and the ISO code of its country.

```sql
SELECT
country_code,
number
FROM ovh.sms.virtual_numbers
WHERE number = '{{ number }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="get">

Get a virtual number service. Returns the virtual number service, with the number and the ISO code of its country.

```sql
SELECT
country_code,
iam,
number
FROM ovh.sms.virtual_numbers
WHERE number = '{{ number }}' -- required
;
```
</TabItem>
<TabItem value="list_by_service_name">

List virtual numbers. Returns the virtual numbers of the account. A virtual number receives SMS and lets receivers reply.

```sql
SELECT
country_code,
number
FROM ovh.sms.virtual_numbers
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
<TabItem value="list">

List virtual numbers. Returns the virtual numbers of the customer, as services. A virtual number receives SMS and lets receivers reply to the messages sent.

```sql
SELECT
country_code,
iam,
number
FROM ovh.sms.virtual_numbers
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
