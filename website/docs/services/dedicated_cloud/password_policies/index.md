--- 
title: password_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - password_policies
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>password_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="password_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.password_policies" /></td></tr>
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
    <td><CopyableCode code="denied_chars" /></td>
    <td><code>array</code></td>
    <td>List of denied characters in the password (wire: deniedChars)</td>
</tr>
<tr>
    <td><CopyableCode code="digit_mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not a digit (0-9) is mandatory in the password (wire: digitMandatory)</td>
</tr>
<tr>
    <td><CopyableCode code="history_check" /></td>
    <td><code>integer</code></td>
    <td>Number of previous passwords to keep (wire: historyCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="letter_mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not a letter (a-z or A-Z) is mandatory in the password (wire: letterMandatory)</td>
</tr>
<tr>
    <td><CopyableCode code="lowercase_letter_mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not a lowercase letter (a-z) is mandatory in the password (wire: lowercaseLetterMandatory)</td>
</tr>
<tr>
    <td><CopyableCode code="max_length" /></td>
    <td><code>integer</code></td>
    <td>Maximum lenght of the password (wire: maxLength)</td>
</tr>
<tr>
    <td><CopyableCode code="min_length" /></td>
    <td><code>integer</code></td>
    <td>Minimum lenght of the password (wire: minLength)</td>
</tr>
<tr>
    <td><CopyableCode code="special_mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not a special character (\W or _) is mandatory in the password (wire: specialMandatory)</td>
</tr>
<tr>
    <td><CopyableCode code="uppercase_letter_mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not an uppercase letter (A-Z) is mandatory in the password (wire: uppercaseLetterMandatory)</td>
</tr>
<tr>
    <td><CopyableCode code="validity_period" /></td>
    <td><code>integer</code></td>
    <td>Password validity period (in days) (wire: validityPeriod)</td>
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
    <td></td>
    <td>Get the password policy. Returns the password rules for users: length, mandatory and denied characters, history and validity period.</td>
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
    <td>Domain of the service (wire: serviceName)</td>
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

Get the password policy. Returns the password rules for users: length, mandatory and denied characters, history and validity period.

```sql
SELECT
denied_chars,
digit_mandatory,
history_check,
letter_mandatory,
lowercase_letter_mandatory,
max_length,
min_length,
special_mandatory,
uppercase_letter_mandatory,
validity_period
FROM ovh.dedicated_cloud.password_policies
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
