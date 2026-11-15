--- 
title: numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - numbers
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

Creates, updates, deletes, gets or lists a <code>numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.numbers" /></td></tr>
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
    <td><CopyableCode code="feature_type" /></td>
    <td><code>string</code></td>
    <td>Feature enabled on the number (aiAgent, carrierSip, cloudHunting, cloudIvr, conference, contactCenterSolution, contactCenterSolutionExpert, ddi, easyHunting, empty, fax, freefax, mgcp, oldConference, plugAndFax, redirect, sip, svi, voicefax, voicemail, vxml) (wire: featureType)</td>
</tr>
<tr>
    <td><CopyableCode code="part_of_pool" /></td>
    <td><code>string</code></td>
    <td>Parent of the service (if it is part of a pool) (wire: partOfPool)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>All existing types (alias, line) (wire: serviceType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Additional number

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
    <td><CopyableCode code="feature_type" /></td>
    <td><code>string</code></td>
    <td>Feature enabled on the number (aiAgent, carrierSip, cloudHunting, cloudIvr, conference, contactCenterSolution, contactCenterSolutionExpert, ddi, easyHunting, empty, fax, freefax, mgcp, oldConference, plugAndFax, redirect, sip, svi, voicefax, voicemail, vxml) (wire: featureType)</td>
</tr>
<tr>
    <td><CopyableCode code="part_of_pool" /></td>
    <td><code>string</code></td>
    <td>Parent of the service (if it is part of a pool) (wire: partOfPool)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>All existing types (alias, line) (wire: serviceType)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a number</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List numbers</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a number</td>
</tr>
<tr>
    <td><a href="#cancel_convert_to_line"><CopyableCode code="cancel_convert_to_line" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Cancel a scheduled conversion to line</td>
</tr>
<tr>
    <td><a href="#change_feature_type"><CopyableCode code="change_feature_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-featureType"><code>featureType</code></a></td>
    <td></td>
    <td>Change the number feature type</td>
</tr>
<tr>
    <td><a href="#convert_to_line"><CopyableCode code="convert_to_line" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-offer"><code>offer</code></a></td>
    <td></td>
    <td>Schedule a conversion to line</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Name of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the service (wire: serviceName)</td>
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

Get a number

```sql
SELECT
service_name,
description,
feature_type,
part_of_pool,
service_type
FROM ovh.telephony.numbers
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List numbers

```sql
SELECT
service_name,
description,
feature_type,
part_of_pool,
service_type
FROM ovh.telephony.numbers
WHERE billing_account = '{{ billing_account }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update a number

```sql
UPDATE ovh.telephony.numbers
SET 
description = '{{ description }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel_convert_to_line"
    values={[
        { label: 'cancel_convert_to_line', value: 'cancel_convert_to_line' },
        { label: 'change_feature_type', value: 'change_feature_type' },
        { label: 'convert_to_line', value: 'convert_to_line' }
    ]}
>
<TabItem value="cancel_convert_to_line">

Cancel a scheduled conversion to line

```sql
EXEC ovh.telephony.numbers.cancel_convert_to_line 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="change_feature_type">

Change the number feature type

```sql
EXEC ovh.telephony.numbers.change_feature_type 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"featureType": "{{ featureType }}"
}'
;
```
</TabItem>
<TabItem value="convert_to_line">

Schedule a conversion to line

```sql
EXEC ovh.telephony.numbers.convert_to_line 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"offer": "{{ offer }}"
}'
;
```
</TabItem>
</Tabs>
