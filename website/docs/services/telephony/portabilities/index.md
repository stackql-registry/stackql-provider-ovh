--- 
title: portabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - portabilities
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

Creates, updates, deletes, gets or lists a <code>portabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.portabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the portability</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the portability order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The billing account where the numbers will be inserted (wire: billingAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The portability's creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_infos" /></td>
    <td><code>object</code></td>
    <td>Customer informations about this portability (wire: customerInfos)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the portability will be done and when numbers will be ported (wire: desiredExecutionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that portability is in error</td>
</tr>
<tr>
    <td><CopyableCode code="error_codes" /></td>
    <td><code>array</code></td>
    <td>Codes representing the error in current portability (wire: errorCodes)</td>
</tr>
<tr>
    <td><CopyableCode code="line_to_redirect_to" /></td>
    <td><code>string</code></td>
    <td>Show the redirection that will be configured when the portability will be done (wire: lineToRedirectTo)</td>
</tr>
<tr>
    <td><CopyableCode code="numbers_list" /></td>
    <td><code>array</code></td>
    <td>The list of numbers that is going to be ported (wire: numbersList)</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The operator that currently holds the numbers</td>
</tr>
<tr>
    <td><CopyableCode code="portability_country" /></td>
    <td><code>string</code></td>
    <td>Country that defines the portability kind (belgium, france, switzerland) (wire: portabilityCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="rio" /></td>
    <td><code>string</code></td>
    <td>RIO of the portability (France only)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Portability informations

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the portability</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the portability order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The billing account where the numbers will be inserted (wire: billingAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The portability's creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_infos" /></td>
    <td><code>object</code></td>
    <td>Customer informations about this portability (wire: customerInfos)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the portability will be done and when numbers will be ported (wire: desiredExecutionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that portability is in error</td>
</tr>
<tr>
    <td><CopyableCode code="error_codes" /></td>
    <td><code>array</code></td>
    <td>Codes representing the error in current portability (wire: errorCodes)</td>
</tr>
<tr>
    <td><CopyableCode code="line_to_redirect_to" /></td>
    <td><code>string</code></td>
    <td>Show the redirection that will be configured when the portability will be done (wire: lineToRedirectTo)</td>
</tr>
<tr>
    <td><CopyableCode code="numbers_list" /></td>
    <td><code>array</code></td>
    <td>The list of numbers that is going to be ported (wire: numbersList)</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The operator that currently holds the numbers</td>
</tr>
<tr>
    <td><CopyableCode code="portability_country" /></td>
    <td><code>string</code></td>
    <td>Country that defines the portability kind (belgium, france, switzerland) (wire: portabilityCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="rio" /></td>
    <td><code>string</code></td>
    <td>RIO of the portability (France only)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a number porting</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List number portings</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Cancel the porting</td>
</tr>
<tr>
    <td><a href="#change_date"><CopyableCode code="change_date" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-date"><code>date</code></a></td>
    <td></td>
    <td>Change the porting date</td>
</tr>
<tr>
    <td><a href="#execute"><CopyableCode code="execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Execute the porting</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the portability</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a number porting

```sql
SELECT
id,
order_id,
billing_account,
creation_date,
customer_infos,
desired_execution_date,
error,
error_codes,
line_to_redirect_to,
numbers_list,
operator,
portability_country,
rio
FROM ovh.telephony.portabilities
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List number portings

```sql
SELECT
id,
order_id,
billing_account,
creation_date,
customer_infos,
desired_execution_date,
error,
error_codes,
line_to_redirect_to,
numbers_list,
operator,
portability_country,
rio
FROM ovh.telephony.portabilities
WHERE billing_account = '{{ billing_account }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' },
        { label: 'change_date', value: 'change_date' },
        { label: 'execute', value: 'execute' }
    ]}
>
<TabItem value="cancel">

Cancel the porting

```sql
EXEC ovh.telephony.portabilities.cancel 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="change_date">

Change the porting date

```sql
EXEC ovh.telephony.portabilities.change_date 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required 
@@json=
'{
"date": "{{ date }}"
}'
;
```
</TabItem>
<TabItem value="execute">

Execute the porting

```sql
EXEC ovh.telephony.portabilities.execute 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
