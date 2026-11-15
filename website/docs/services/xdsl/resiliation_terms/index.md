--- 
title: resiliation_terms
hide_title: false
hide_table_of_contents: false
keywords:
  - resiliation_terms
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>resiliation_terms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resiliation_terms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.resiliation_terms" /></td></tr>
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
    <td><CopyableCode code="due" /></td>
    <td><code>object</code></td>
    <td>Price with it's currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="engage_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date until which the customer is engaged (wire: engageDate)</td>
</tr>
<tr>
    <td><CopyableCode code="min_resiliation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Minumum resiliationDate (wire: minResiliationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="resiliation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the access will be resiliated (wire: resiliationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="resiliation_reasons" /></td>
    <td><code>array</code></td>
    <td>List of available resiliation reasons (wire: resiliationReasons)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-resiliation_date"><code>resiliation_date</code></a></td>
    <td>Returns, for a resiliation date, the amount due, the engagement end date, the minimum resiliation date and the available resiliation reasons.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-resiliation_date">
    <td><CopyableCode code="resiliation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The desired resiliation date (wire: resiliationDate)</td>
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

Returns, for a resiliation date, the amount due, the engagement end date, the minimum resiliation date and the available resiliation reasons.

```sql
SELECT
due,
engage_date,
min_resiliation_date,
resiliation_date,
resiliation_reasons
FROM ovh.xdsl.resiliation_terms
WHERE service_name = '{{ service_name }}' -- required
AND resiliation_date = '{{ resiliation_date }}'
;
```
</TabItem>
</Tabs>
