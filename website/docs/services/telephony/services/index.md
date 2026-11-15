--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.services" /></td></tr>
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
    <td> (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_device_mac" /></td>
    <td><code>string (mac-address)</code></td>
    <td>MAC address of the associated device if there is one. (example: 00:00:5e:00:53:01) (wire: associatedDeviceMac)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The country of the number (be, ch, de, es, fr, gb, uk)</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>integer</code></td>
    <td>The country code of the number (32, 33, 34, 41, 44, 49) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="current_outplan" /></td>
    <td><code>object</code></td>
    <td>Current outplan (wire: currentOutplan)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="feature_type" /></td>
    <td><code>string</code></td>
    <td>All existing types of line or alias (aiAgent, carrierSip, cloudHunting, cloudIvr, conference, contactCenterSolution, contactCenterSolutionExpert, ddi, easyHunting, empty, fax, freefax, mgcp, oldConference, plugAndFax, redirect, sip, svi, voicefax, voicemail, vxml) (wire: featureType)</td>
</tr>
<tr>
    <td><CopyableCode code="get_public_offer" /></td>
    <td><code>object</code></td>
    <td>The service offers (wire: getPublicOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="has_fax_capabilities" /></td>
    <td><code>boolean</code></td>
    <td>Does this service have fax capabilities? (wire: hasFaxCapabilities)</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rio" /></td>
    <td><code>string</code></td>
    <td>The identifier to use to port the number</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>All existing types (alias, line) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="simultaneous_lines" /></td>
    <td><code>integer</code></td>
    <td> (wire: simultaneousLines)</td>
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
    <td><CopyableCode code="associated_device_mac" /></td>
    <td><code>string (mac-address)</code></td>
    <td>MAC address of the associated device if there is one. (example: 00:00:5e:00:53:01) (wire: associatedDeviceMac)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The country of the number (be, ch, de, es, fr, gb, uk)</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>integer</code></td>
    <td>The country code of the number (32, 33, 34, 41, 44, 49) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="current_outplan" /></td>
    <td><code>object</code></td>
    <td>Current outplan (wire: currentOutplan)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="feature_type" /></td>
    <td><code>string</code></td>
    <td>All existing types of line or alias (aiAgent, carrierSip, cloudHunting, cloudIvr, conference, contactCenterSolution, contactCenterSolutionExpert, ddi, easyHunting, empty, fax, freefax, mgcp, oldConference, plugAndFax, redirect, sip, svi, voicefax, voicemail, vxml) (wire: featureType)</td>
</tr>
<tr>
    <td><CopyableCode code="get_public_offer" /></td>
    <td><code>object</code></td>
    <td>The service offers (wire: getPublicOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="has_fax_capabilities" /></td>
    <td><code>boolean</code></td>
    <td>Does this service have fax capabilities? (wire: hasFaxCapabilities)</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rio" /></td>
    <td><code>string</code></td>
    <td>The identifier to use to port the number</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>All existing types (alias, line) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="simultaneous_lines" /></td>
    <td><code>integer</code></td>
    <td> (wire: simultaneousLines)</td>
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
    <td>Get a service</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List services</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a service</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-reason"><code>reason</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-details"><code>details</code></a></td>
    <td>Terminate a service</td>
</tr>
<tr>
    <td><a href="#cancel_termination"><CopyableCode code="cancel_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Cancel the service termination</td>
</tr>
<tr>
    <td><a href="#change_of_billing_account"><CopyableCode code="change_of_billing_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-billingAccountDestination"><code>billingAccountDestination</code></a></td>
    <td></td>
    <td>Move a service to another billing account</td>
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
<tr id="parameter-reason">
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Termination reason</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr id="parameter-details">
    <td><CopyableCode code="details" /></td>
    <td><code>string</code></td>
    <td>Termination reason details</td>
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

Get a service

```sql
SELECT
service_name,
associated_device_mac,
country,
country_code,
current_outplan,
description,
feature_type,
get_public_offer,
has_fax_capabilities,
offers,
properties,
rio,
service_type,
simultaneous_lines
FROM ovh.telephony.services
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List services

```sql
SELECT
service_name,
associated_device_mac,
country,
country_code,
current_outplan,
description,
feature_type,
get_public_offer,
has_fax_capabilities,
offers,
properties,
rio,
service_type,
simultaneous_lines
FROM ovh.telephony.services
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

Update a service

```sql
UPDATE ovh.telephony.services
SET 
description = '{{ description }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Terminate a service

```sql
DELETE FROM ovh.telephony.services
WHERE billing_account = '{{ billing_account }}' --required
AND reason = '{{ reason }}' --required
AND service_name = '{{ service_name }}' --required
AND details = '{{ details }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel_termination"
    values={[
        { label: 'cancel_termination', value: 'cancel_termination' },
        { label: 'change_of_billing_account', value: 'change_of_billing_account' }
    ]}
>
<TabItem value="cancel_termination">

Cancel the service termination

```sql
EXEC ovh.telephony.services.cancel_termination 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="change_of_billing_account">

Move a service to another billing account

```sql
EXEC ovh.telephony.services.change_of_billing_account 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"billingAccountDestination": "{{ billingAccountDestination }}"
}'
;
```
</TabItem>
</Tabs>
