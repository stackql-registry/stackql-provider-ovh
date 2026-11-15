--- 
title: line_phones
hide_title: false
hide_table_of_contents: false
keywords:
  - line_phones
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

Creates, updates, deletes, gets or lists a <code>line_phones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_phones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_phones" /></td></tr>
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
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>Brand name</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The phone description</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>Mac Address (wire: macAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="max_simultaneous_calls" /></td>
    <td><code>integer</code></td>
    <td>Maximum simultaneous calls managed by the phone (wire: maxSimultaneousCalls)</td>
</tr>
<tr>
    <td><CopyableCode code="maxline" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of lines managed by a phone</td>
</tr>
<tr>
    <td><CopyableCode code="mgcp_ip_restriction" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The ip restriction of your MGCP phone (example: 192.0.2.0) (wire: mgcpIpRestriction)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_configuration" /></td>
    <td><code>array</code></td>
    <td>Current phone properties (wire: phoneConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Phone protocol (mgcp, sip)</td>
</tr>
<tr>
    <td><CopyableCode code="user_password" /></td>
    <td><code>string (password)</code></td>
    <td>The phone user password (wire: userPassword)</td>
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
    <td>Get the phone</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the phone</td>
</tr>
<tr>
    <td><a href="#change_phone_configuration"><CopyableCode code="change_phone_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change the phone configuration</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reboot the phone</td>
</tr>
<tr>
    <td><a href="#refresh_screen"><CopyableCode code="refresh_screen" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Refresh the phone screen</td>
</tr>
<tr>
    <td><a href="#reset_config"><CopyableCode code="reset_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Reset the phone configuration</td>
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

Get the phone

```sql
SELECT
brand,
description,
mac_address,
max_simultaneous_calls,
maxline,
mgcp_ip_restriction,
phone_configuration,
protocol,
user_password
FROM ovh.telephony.line_phones
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Update the phone

```sql
UPDATE ovh.telephony.line_phones
SET 
mgcp_ip_restriction = '{{ mgcp_ip_restriction }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_phone_configuration"
    values={[
        { label: 'change_phone_configuration', value: 'change_phone_configuration' },
        { label: 'reboot', value: 'reboot' },
        { label: 'refresh_screen', value: 'refresh_screen' },
        { label: 'reset_config', value: 'reset_config' }
    ]}
>
<TabItem value="change_phone_configuration">

Change the phone configuration

```sql
EXEC ovh.telephony.line_phones.change_phone_configuration 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"autoReboot": {{ autoReboot }}, 
"newConfigurations": "{{ newConfigurations }}"
}'
;
```
</TabItem>
<TabItem value="reboot">

Reboot the phone

```sql
EXEC ovh.telephony.line_phones.reboot 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="refresh_screen">

Refresh the phone screen

```sql
EXEC ovh.telephony.line_phones.refresh_screen 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="reset_config">

Reset the phone configuration

```sql
EXEC ovh.telephony.line_phones.reset_config 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"ip": "{{ ip }}"
}'
;
```
</TabItem>
</Tabs>
