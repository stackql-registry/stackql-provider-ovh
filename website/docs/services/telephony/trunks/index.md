--- 
title: trunks
hide_title: false
hide_table_of_contents: false
keywords:
  - trunks
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

Creates, updates, deletes, gets or lists a <code>trunks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trunks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.trunks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_service_name"
    values={[
        { label: 'get_by_service_name', value: 'get_by_service_name' },
        { label: 'get', value: 'get' },
        { label: 'list_by_billing_account', value: 'list_by_billing_account' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_service_name">

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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the service (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the service</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>Type of the service (alias, line) (wire: serviceType)</td>
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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_billing_account">

Trunk service

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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the service (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the service</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>Type of the service (alias, line) (wire: serviceType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Telephony service

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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
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
    <td><a href="#get_by_service_name"><CopyableCode code="get_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a trunk</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a line or trunk</td>
</tr>
<tr>
    <td><a href="#list_by_billing_account"><CopyableCode code="list_by_billing_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List trunks</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List trunks</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Your trunk number</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Your trunk number (wire: serviceName)</td>
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
    defaultValue="get_by_service_name"
    values={[
        { label: 'get_by_service_name', value: 'get_by_service_name' },
        { label: 'get', value: 'get' },
        { label: 'list_by_billing_account', value: 'list_by_billing_account' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_service_name">

Get a trunk

```sql
SELECT
service_name,
description,
service_type
FROM ovh.telephony.trunks
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="get">

Get a line or trunk

```sql
SELECT
service_name,
iam
FROM ovh.telephony.trunks
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list_by_billing_account">

List trunks

```sql
SELECT
service_name,
description,
service_type
FROM ovh.telephony.trunks
WHERE billing_account = '{{ billing_account }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
<TabItem value="list">

List trunks

```sql
SELECT
service_name,
iam
FROM ovh.telephony.trunks
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.telephony.trunks.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
</Tabs>
