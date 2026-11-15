--- 
title: lines
hide_title: false
hide_table_of_contents: false
keywords:
  - lines
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

Creates, updates, deletes, gets or lists a <code>lines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.lines" /></td></tr>
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
    <td> (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="can_change_password" /></td>
    <td><code>boolean</code></td>
    <td>Ability to manage SIP password on this service (wire: canChangePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="device_slot" /></td>
    <td><code>integer</code></td>
    <td>The position of the line when attached to a device (0 if the line is not attached to a device) (wire: deviceSlot)</td>
</tr>
<tr>
    <td><CopyableCode code="get_public_offer" /></td>
    <td><code>object</code></td>
    <td>The line offers (wire: getPublicOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure" /></td>
    <td><code>string</code></td>
    <td>The infrastructure where is configured the line</td>
</tr>
<tr>
    <td><CopyableCode code="is_attached_to_other_lines_phone" /></td>
    <td><code>boolean</code></td>
    <td>Is this line attached to a phone that belongs to another line? (wire: isAttachedToOtherLinesPhone)</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>object</code></td>
    <td>Send notifications about Line's diagnosticReports</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td>The line offers (Deprecated, prefer "name" in getPublicOffer)</td>
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

Line service

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
    <td><CopyableCode code="can_change_password" /></td>
    <td><code>boolean</code></td>
    <td>Ability to manage SIP password on this service (wire: canChangePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="device_slot" /></td>
    <td><code>integer</code></td>
    <td>The position of the line when attached to a device (0 if the line is not attached to a device) (wire: deviceSlot)</td>
</tr>
<tr>
    <td><CopyableCode code="get_public_offer" /></td>
    <td><code>object</code></td>
    <td>The line offers (wire: getPublicOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure" /></td>
    <td><code>string</code></td>
    <td>The infrastructure where is configured the line</td>
</tr>
<tr>
    <td><CopyableCode code="is_attached_to_other_lines_phone" /></td>
    <td><code>boolean</code></td>
    <td>Is this line attached to a phone that belongs to another line? (wire: isAttachedToOtherLinesPhone)</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>object</code></td>
    <td>Send notifications about Line's diagnosticReports</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td>The line offers (Deprecated, prefer "name" in getPublicOffer)</td>
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
    <td>Get a line</td>
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
    <td>List lines</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List lines</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a line</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#activate_new_phone"><CopyableCode code="activate_new_phone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Activate a new phone</td>
</tr>
<tr>
    <td><a href="#associate_device"><CopyableCode code="associate_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-macAddress"><code>macAddress</code></a></td>
    <td></td>
    <td>Associate a device</td>
</tr>
<tr>
    <td><a href="#block"><CopyableCode code="block" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Block the line</td>
</tr>
<tr>
    <td><a href="#cancel_convert_to_number"><CopyableCode code="cancel_convert_to_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Cancel a scheduled conversion to number</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change the SIP password</td>
</tr>
<tr>
    <td><a href="#click2_call"><CopyableCode code="click2_call" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-calledNumber"><code>calledNumber</code></a></td>
    <td></td>
    <td>Start a call from the line</td>
</tr>
<tr>
    <td><a href="#convert_to_number"><CopyableCode code="convert_to_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Schedule a conversion to number</td>
</tr>
<tr>
    <td><a href="#dissociate_device"><CopyableCode code="dissociate_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-macAddress"><code>macAddress</code></a></td>
    <td></td>
    <td>Dissociate a device</td>
</tr>
<tr>
    <td><a href="#remove_simultaneous_lines"><CopyableCode code="remove_simultaneous_lines" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-quantityRemove"><code>quantityRemove</code></a></td>
    <td></td>
    <td>Remove extra simultaneous lines</td>
</tr>
<tr>
    <td><a href="#softphone_token"><CopyableCode code="softphone_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generates a token to register a softphone device on the line, and sends it to the given email address.</td>
</tr>
<tr>
    <td><a href="#unblock"><CopyableCode code="unblock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Unblock the line</td>
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
    <td></td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get a line

```sql
SELECT
service_name,
can_change_password,
description,
device_slot,
get_public_offer,
infrastructure,
is_attached_to_other_lines_phone,
notifications,
offers,
service_type,
simultaneous_lines
FROM ovh.telephony.lines
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
FROM ovh.telephony.lines
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list_by_billing_account">

List lines

```sql
SELECT
service_name,
can_change_password,
description,
device_slot,
get_public_offer,
infrastructure,
is_attached_to_other_lines_phone,
notifications,
offers,
service_type,
simultaneous_lines
FROM ovh.telephony.lines
WHERE billing_account = '{{ billing_account }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
<TabItem value="list">

List lines

```sql
SELECT
service_name,
iam
FROM ovh.telephony.lines
WHERE iam_tags = '{{ iam_tags }}'
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

Update a line

```sql
UPDATE ovh.telephony.lines
SET 
description = '{{ description }}',
notifications = '{{ notifications }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'activate_new_phone', value: 'activate_new_phone' },
        { label: 'associate_device', value: 'associate_device' },
        { label: 'block', value: 'block' },
        { label: 'cancel_convert_to_number', value: 'cancel_convert_to_number' },
        { label: 'change_password', value: 'change_password' },
        { label: 'click2_call', value: 'click2_call' },
        { label: 'convert_to_number', value: 'convert_to_number' },
        { label: 'dissociate_device', value: 'dissociate_device' },
        { label: 'remove_simultaneous_lines', value: 'remove_simultaneous_lines' },
        { label: 'softphone_token', value: 'softphone_token' },
        { label: 'unblock', value: 'unblock' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.telephony.lines.change_contact 
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
<TabItem value="activate_new_phone">

Activate a new phone

```sql
EXEC ovh.telephony.lines.activate_new_phone 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="associate_device">

Associate a device

```sql
EXEC ovh.telephony.lines.associate_device 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"ipAddress": "{{ ipAddress }}", 
"macAddress": "{{ macAddress }}", 
"slot": {{ slot }}
}'
;
```
</TabItem>
<TabItem value="block">

Block the line

```sql
EXEC ovh.telephony.lines.block 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"mode": "{{ mode }}"
}'
;
```
</TabItem>
<TabItem value="cancel_convert_to_number">

Cancel a scheduled conversion to number

```sql
EXEC ovh.telephony.lines.cancel_convert_to_number 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="change_password">

Change the SIP password

```sql
EXEC ovh.telephony.lines.change_password 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="click2_call">

Start a call from the line

```sql
EXEC ovh.telephony.lines.click2_call 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"calledNumber": "{{ calledNumber }}", 
"callingNumber": "{{ callingNumber }}", 
"intercom": {{ intercom }}
}'
;
```
</TabItem>
<TabItem value="convert_to_number">

Schedule a conversion to number

```sql
EXEC ovh.telephony.lines.convert_to_number 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="dissociate_device">

Dissociate a device

```sql
EXEC ovh.telephony.lines.dissociate_device 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"ipAddress": "{{ ipAddress }}", 
"macAddress": "{{ macAddress }}"
}'
;
```
</TabItem>
<TabItem value="remove_simultaneous_lines">

Remove extra simultaneous lines

```sql
EXEC ovh.telephony.lines.remove_simultaneous_lines 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"quantityRemove": {{ quantityRemove }}
}'
;
```
</TabItem>
<TabItem value="softphone_token">

Generates a token to register a softphone device on the line, and sends it to the given email address.

```sql
EXEC ovh.telephony.lines.softphone_token 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"email": "{{ email }}"
}'
;
```
</TabItem>
<TabItem value="unblock">

Unblock the line

```sql
EXEC ovh.telephony.lines.unblock 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
