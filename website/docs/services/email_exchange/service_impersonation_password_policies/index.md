--- 
title: service_impersonation_password_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - service_impersonation_password_policies
  - email_exchange
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

Creates, updates, deletes, gets or lists a <code>service_impersonation_password_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_impersonation_password_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_impersonation_password_policies" /></td></tr>
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
    <td><CopyableCode code="complexity_enabled" /></td>
    <td><code>boolean</code></td>
    <td>enable policy for strong and secure passwords (wire: complexityEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_duration" /></td>
    <td><code>integer</code></td>
    <td>number of minutes account will remain locked if it occurs (wire: lockoutDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_threshold" /></td>
    <td><code>integer</code></td>
    <td>number of attempts before account is locked (wire: lockoutThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="max_password_age" /></td>
    <td><code>integer</code></td>
    <td>maximum number of days that account's password is valid before expiration (wire: maxPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_age" /></td>
    <td><code>integer</code></td>
    <td>minimum number of days before being able to change account's password (wire: minPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_length" /></td>
    <td><code>integer</code></td>
    <td>minimum number of characters password must contain (wire: minPasswordLength)</td>
</tr>
<tr>
    <td><CopyableCode code="password_history_count" /></td>
    <td><code>integer</code></td>
    <td>number of historical passwords that cannot be reused (wire: passwordHistoryCount)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get the impersonation password policy. Returns the password policy of the impersonated user: complexity, minimum length, password age, history and lockout settings.</td>
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
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
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

Get the impersonation password policy. Returns the password policy of the impersonated user: complexity, minimum length, password age, history and lockout settings.

```sql
SELECT
complexity_enabled,
lockout_duration,
lockout_threshold,
max_password_age,
min_password_age,
min_password_length,
password_history_count
FROM ovh.email_exchange.service_impersonation_password_policies
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
</Tabs>
