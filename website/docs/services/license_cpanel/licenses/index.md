--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
  - license_cpanel
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

Creates, updates, deletes, gets or lists a <code>licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="licenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.license_cpanel.licenses" /></td></tr>
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
    <td><CopyableCode code="license_id" /></td>
    <td><code>string</code></td>
    <td>The license id on license provider side (wire: licenseId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>This license creation date</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Shall we delete this on expiration ? (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The internal name of your license</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The ip on which this license is attached (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This license state (ok, released, terminated, toDeliver)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version (VERSION_11_FOR_LINUX, VERSION_11_FOR_VIRTUOZZO, VERSION_11_FOR_VPS, cpanel-license-version-11, cpanel-license-version-11-for-virtuozzo, cpanel-license-version-11-for-vps, version-admin-cloud, version-plus-cloud, version-premier-cloud-100, version-premier-cloud-1000, version-premier-cloud-10000, version-premier-cloud-1100, version-premier-cloud-1200, version-premier-cloud-1300, version-premier-cloud-1400, version-premier-cloud-150, version-premier-cloud-1500, version-premier-cloud-1600, version-premier-cloud-1700, version-premier-cloud-1800, version-premier-cloud-1900, version-premier-cloud-200, version-premier-cloud-2000, version-premier-cloud-2100, version-premier-cloud-2200, version-premier-cloud-2300, version-premier-cloud-2400, version-premier-cloud-250, version-premier-cloud-2500, version-premier-cloud-2600, version-premier-cloud-2700, version-premier-cloud-2800, version-premier-cloud-2900, version-premier-cloud-300, version-premier-cloud-3000, version-premier-cloud-3100, version-premier-cloud-3200, version-premier-cloud-3300, version-premier-cloud-3400, version-premier-cloud-3500, version-premier-cloud-3600, version-premier-cloud-3700, version-premier-cloud-3800, version-premier-cloud-3900, version-premier-cloud-400, version-premier-cloud-4000, version-premier-cloud-4100, version-premier-cloud-4200, version-premier-cloud-4300, version-premier-cloud-4400, version-premier-cloud-4500, version-premier-cloud-4600, version-premier-cloud-4700, version-premier-cloud-4800, version-premier-cloud-4900, version-premier-cloud-500, version-premier-cloud-5000, version-premier-cloud-5100, version-premier-cloud-5200, version-premier-cloud-5300, version-premier-cloud-5400, version-premier-cloud-5500, version-premier-cloud-5600, version-premier-cloud-5700, version-premier-cloud-5800, version-premier-cloud-5900, version-premier-cloud-600, version-premier-cloud-6000, version-premier-cloud-6100, version-premier-cloud-6200, version-premier-cloud-6300, version-premier-cloud-6400, version-premier-cloud-6500, version-premier-cloud-6600, version-premier-cloud-6700, version-premier-cloud-6800, version-premier-cloud-6900, version-premier-cloud-700, version-premier-cloud-7000, version-premier-cloud-7100, version-premier-cloud-7200, version-premier-cloud-7300, version-premier-cloud-7400, version-premier-cloud-7500, version-premier-cloud-7600, version-premier-cloud-7700, version-premier-cloud-7800, version-premier-cloud-7900, version-premier-cloud-800, version-premier-cloud-8000, version-premier-cloud-8100, version-premier-cloud-8200, version-premier-cloud-8300, version-premier-cloud-8400, version-premier-cloud-8500, version-premier-cloud-8600, version-premier-cloud-8700, version-premier-cloud-8800, version-premier-cloud-8900, version-premier-cloud-900, version-premier-cloud-9000, version-premier-cloud-9100, version-premier-cloud-9200, version-premier-cloud-9300, version-premier-cloud-9400, version-premier-cloud-9500, version-premier-cloud-9600, version-premier-cloud-9700, version-premier-cloud-9800, version-premier-cloud-9900, version-premier-metal-100, version-premier-metal-1000, version-premier-metal-10000, version-premier-metal-1100, version-premier-metal-1200, version-premier-metal-1300, version-premier-metal-1400, version-premier-metal-150, version-premier-metal-1500, version-premier-metal-1600, version-premier-metal-1700, version-premier-metal-1800, version-premier-metal-1900, version-premier-metal-200, version-premier-metal-2000, version-premier-metal-2100, version-premier-metal-2200, version-premier-metal-2300, version-premier-metal-2400, version-premier-metal-250, version-premier-metal-2500, version-premier-metal-2600, version-premier-metal-2700, version-premier-metal-2800, version-premier-metal-2900, version-premier-metal-300, version-premier-metal-3000, version-premier-metal-3100, version-premier-metal-3200, version-premier-metal-3300, version-premier-metal-3400, version-premier-metal-3500, version-premier-metal-3600, version-premier-metal-3700, version-premier-metal-3800, version-premier-metal-3900, version-premier-metal-400, version-premier-metal-4000, version-premier-metal-4100, version-premier-metal-4200, version-premier-metal-4300, version-premier-metal-4400, version-premier-metal-4500, version-premier-metal-4600, version-premier-metal-4700, version-premier-metal-4800, version-premier-metal-4900, version-premier-metal-500, version-premier-metal-5000, version-premier-metal-5100, version-premier-metal-5200, version-premier-metal-5300, version-premier-metal-5400, version-premier-metal-5500, version-premier-metal-5600, version-premier-metal-5700, version-premier-metal-5800, version-premier-metal-5900, version-premier-metal-600, version-premier-metal-6000, version-premier-metal-6100, version-premier-metal-6200, version-premier-metal-6300, version-premier-metal-6400, version-premier-metal-6500, version-premier-metal-6600, version-premier-metal-6700, version-premier-metal-6800, version-premier-metal-6900, version-premier-metal-700, version-premier-metal-7000, version-premier-metal-7100, version-premier-metal-7200, version-premier-metal-7300, version-premier-metal-7400, version-premier-metal-7500, version-premier-metal-7600, version-premier-metal-7700, version-premier-metal-7800, version-premier-metal-7900, version-premier-metal-800, version-premier-metal-8000, version-premier-metal-8100, version-premier-metal-8200, version-premier-metal-8300, version-premier-metal-8400, version-premier-metal-8500, version-premier-metal-8600, version-premier-metal-8700, version-premier-metal-8800, version-premier-metal-8900, version-premier-metal-900, version-premier-metal-9000, version-premier-metal-9100, version-premier-metal-9200, version-premier-metal-9300, version-premier-metal-9400, version-premier-metal-9500, version-premier-metal-9600, version-premier-metal-9700, version-premier-metal-9800, version-premier-metal-9900, version-pro-cloud, version-solo-cloud, version-solo-metal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your Cpanel license

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
    <td><CopyableCode code="license_id" /></td>
    <td><code>string</code></td>
    <td>The license id on license provider side (wire: licenseId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>This license creation date</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Shall we delete this on expiration ? (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The internal name of your license</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The ip on which this license is attached (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This license state (ok, released, terminated, toDeliver)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version (VERSION_11_FOR_LINUX, VERSION_11_FOR_VIRTUOZZO, VERSION_11_FOR_VPS, cpanel-license-version-11, cpanel-license-version-11-for-virtuozzo, cpanel-license-version-11-for-vps, version-admin-cloud, version-plus-cloud, version-premier-cloud-100, version-premier-cloud-1000, version-premier-cloud-10000, version-premier-cloud-1100, version-premier-cloud-1200, version-premier-cloud-1300, version-premier-cloud-1400, version-premier-cloud-150, version-premier-cloud-1500, version-premier-cloud-1600, version-premier-cloud-1700, version-premier-cloud-1800, version-premier-cloud-1900, version-premier-cloud-200, version-premier-cloud-2000, version-premier-cloud-2100, version-premier-cloud-2200, version-premier-cloud-2300, version-premier-cloud-2400, version-premier-cloud-250, version-premier-cloud-2500, version-premier-cloud-2600, version-premier-cloud-2700, version-premier-cloud-2800, version-premier-cloud-2900, version-premier-cloud-300, version-premier-cloud-3000, version-premier-cloud-3100, version-premier-cloud-3200, version-premier-cloud-3300, version-premier-cloud-3400, version-premier-cloud-3500, version-premier-cloud-3600, version-premier-cloud-3700, version-premier-cloud-3800, version-premier-cloud-3900, version-premier-cloud-400, version-premier-cloud-4000, version-premier-cloud-4100, version-premier-cloud-4200, version-premier-cloud-4300, version-premier-cloud-4400, version-premier-cloud-4500, version-premier-cloud-4600, version-premier-cloud-4700, version-premier-cloud-4800, version-premier-cloud-4900, version-premier-cloud-500, version-premier-cloud-5000, version-premier-cloud-5100, version-premier-cloud-5200, version-premier-cloud-5300, version-premier-cloud-5400, version-premier-cloud-5500, version-premier-cloud-5600, version-premier-cloud-5700, version-premier-cloud-5800, version-premier-cloud-5900, version-premier-cloud-600, version-premier-cloud-6000, version-premier-cloud-6100, version-premier-cloud-6200, version-premier-cloud-6300, version-premier-cloud-6400, version-premier-cloud-6500, version-premier-cloud-6600, version-premier-cloud-6700, version-premier-cloud-6800, version-premier-cloud-6900, version-premier-cloud-700, version-premier-cloud-7000, version-premier-cloud-7100, version-premier-cloud-7200, version-premier-cloud-7300, version-premier-cloud-7400, version-premier-cloud-7500, version-premier-cloud-7600, version-premier-cloud-7700, version-premier-cloud-7800, version-premier-cloud-7900, version-premier-cloud-800, version-premier-cloud-8000, version-premier-cloud-8100, version-premier-cloud-8200, version-premier-cloud-8300, version-premier-cloud-8400, version-premier-cloud-8500, version-premier-cloud-8600, version-premier-cloud-8700, version-premier-cloud-8800, version-premier-cloud-8900, version-premier-cloud-900, version-premier-cloud-9000, version-premier-cloud-9100, version-premier-cloud-9200, version-premier-cloud-9300, version-premier-cloud-9400, version-premier-cloud-9500, version-premier-cloud-9600, version-premier-cloud-9700, version-premier-cloud-9800, version-premier-cloud-9900, version-premier-metal-100, version-premier-metal-1000, version-premier-metal-10000, version-premier-metal-1100, version-premier-metal-1200, version-premier-metal-1300, version-premier-metal-1400, version-premier-metal-150, version-premier-metal-1500, version-premier-metal-1600, version-premier-metal-1700, version-premier-metal-1800, version-premier-metal-1900, version-premier-metal-200, version-premier-metal-2000, version-premier-metal-2100, version-premier-metal-2200, version-premier-metal-2300, version-premier-metal-2400, version-premier-metal-250, version-premier-metal-2500, version-premier-metal-2600, version-premier-metal-2700, version-premier-metal-2800, version-premier-metal-2900, version-premier-metal-300, version-premier-metal-3000, version-premier-metal-3100, version-premier-metal-3200, version-premier-metal-3300, version-premier-metal-3400, version-premier-metal-3500, version-premier-metal-3600, version-premier-metal-3700, version-premier-metal-3800, version-premier-metal-3900, version-premier-metal-400, version-premier-metal-4000, version-premier-metal-4100, version-premier-metal-4200, version-premier-metal-4300, version-premier-metal-4400, version-premier-metal-4500, version-premier-metal-4600, version-premier-metal-4700, version-premier-metal-4800, version-premier-metal-4900, version-premier-metal-500, version-premier-metal-5000, version-premier-metal-5100, version-premier-metal-5200, version-premier-metal-5300, version-premier-metal-5400, version-premier-metal-5500, version-premier-metal-5600, version-premier-metal-5700, version-premier-metal-5800, version-premier-metal-5900, version-premier-metal-600, version-premier-metal-6000, version-premier-metal-6100, version-premier-metal-6200, version-premier-metal-6300, version-premier-metal-6400, version-premier-metal-6500, version-premier-metal-6600, version-premier-metal-6700, version-premier-metal-6800, version-premier-metal-6900, version-premier-metal-700, version-premier-metal-7000, version-premier-metal-7100, version-premier-metal-7200, version-premier-metal-7300, version-premier-metal-7400, version-premier-metal-7500, version-premier-metal-7600, version-premier-metal-7700, version-premier-metal-7800, version-premier-metal-7900, version-premier-metal-800, version-premier-metal-8000, version-premier-metal-8100, version-premier-metal-8200, version-premier-metal-8300, version-premier-metal-8400, version-premier-metal-8500, version-premier-metal-8600, version-premier-metal-8700, version-premier-metal-8800, version-premier-metal-8900, version-premier-metal-900, version-premier-metal-9000, version-premier-metal-9100, version-premier-metal-9200, version-premier-metal-9300, version-premier-metal-9400, version-premier-metal-9500, version-premier-metal-9600, version-premier-metal-9700, version-premier-metal-9800, version-premier-metal-9900, version-pro-cloud, version-solo-cloud, version-solo-metal)</td>
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
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List available services</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Alter this object properties</td>
</tr>
<tr>
    <td><a href="#change_ip"><CopyableCode code="change_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-destinationIp"><code>destinationIp</code></a></td>
    <td></td>
    <td>Move this license to another Ip</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The name of your Cpanel license</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of your Cpanel license (wire: serviceName)</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get this object properties

```sql
SELECT
license_id,
creation,
delete_at_expiration,
domain,
iam,
ip,
status,
version
FROM ovh.license_cpanel.licenses
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available services

```sql
SELECT
license_id,
creation,
delete_at_expiration,
domain,
iam,
ip,
status,
version
FROM ovh.license_cpanel.licenses
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

Alter this object properties

```sql
UPDATE ovh.license_cpanel.licenses
SET 
delete_at_expiration = {{ delete_at_expiration }}
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_ip"
    values={[
        { label: 'change_ip', value: 'change_ip' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_ip">

Move this license to another Ip

```sql
EXEC ovh.license_cpanel.licenses.change_ip 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"destinationIp": "{{ destinationIp }}"
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.

```sql
EXEC ovh.license_cpanel.licenses.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.

```sql
EXEC ovh.license_cpanel.licenses.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
