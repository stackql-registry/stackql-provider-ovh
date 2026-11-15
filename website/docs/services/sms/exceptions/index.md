--- 
title: exceptions
hide_title: false
hide_table_of_contents: false
keywords:
  - exceptions
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

Creates, updates, deletes, gets or lists an <code>exceptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exceptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.exceptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Sms reach list

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
    <td><CopyableCode code="country_suffixe" /></td>
    <td><code>string</code></td>
    <td>The abreviated country code. (wire: countrySuffixe)</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>The exception message</td>
</tr>
<tr>
    <td><CopyableCode code="operators" /></td>
    <td><code>string</code></td>
    <td>The list of operators impacted.</td>
</tr>
<tr>
    <td><CopyableCode code="restriction_code" /></td>
    <td><code>string</code></td>
    <td>The type of routing restriction imposed by the operator (ALPHA, BAD_DLR, BLOCKED, CODING, DLR, FLASHONLY, MSISDN) (wire: restrictionCode)</td>
</tr>
<tr>
    <td><CopyableCode code="substitution" /></td>
    <td><code>string</code></td>
    <td>The substitution sender used to bypass operator filter</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-receiver"><code>receiver</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List sending restrictions for a number. Returns the operator restrictions and substitutions that apply when sending SMS to the given number.</td>
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
<tr id="parameter-receiver">
    <td><CopyableCode code="receiver" /></td>
    <td><code>string</code></td>
    <td>The receiver number to check</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List sending restrictions for a number. Returns the operator restrictions and substitutions that apply when sending SMS to the given number.

```sql
SELECT
country_suffixe,
messages,
operators,
restriction_code,
substitution
FROM ovh.sms.exceptions
WHERE receiver = '{{ receiver }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
