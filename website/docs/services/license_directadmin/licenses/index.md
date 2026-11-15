--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
  - license_directadmin
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.license_directadmin.licenses" /></td></tr>
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
    <td><CopyableCode code="client_id" /></td>
    <td><code>integer</code></td>
    <td>The client id on license provider side (wire: clientId)</td>
</tr>
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
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>This license operating system (CentOs_5.0_32, CentOs_5.0_64, CentOs_6_32, CentOs_6_64, CentOs_7_64, CentOs_8_64, Debian_10.0_64, Debian_11.0_64, Debian_5.0_32, Debian_5.0_64, Debian_6.0_32, Debian_6.0_64, Debian_7.0_64, Debian_8.0_64, Debian_9.0_64, FreeBSD_11.x_64, FreeBSD_12.x_64, FreeBSD_7.x_32, FreeBSD_7.x_64, FreeBSD_8.x_64, FreeBSD_9.x_64)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This license state (ok, released, terminated, toDeliver)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version (DIRECTADMIN_1, directadmin-license)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your DirectAdmin license

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
    <td><CopyableCode code="client_id" /></td>
    <td><code>integer</code></td>
    <td>The client id on license provider side (wire: clientId)</td>
</tr>
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
    <td><CopyableCode code="os" /></td>
    <td><code>string</code></td>
    <td>This license operating system (CentOs_5.0_32, CentOs_5.0_64, CentOs_6_32, CentOs_6_64, CentOs_7_64, CentOs_8_64, Debian_10.0_64, Debian_11.0_64, Debian_5.0_32, Debian_5.0_64, Debian_6.0_32, Debian_6.0_64, Debian_7.0_64, Debian_8.0_64, Debian_9.0_64, FreeBSD_11.x_64, FreeBSD_12.x_64, FreeBSD_7.x_32, FreeBSD_7.x_64, FreeBSD_8.x_64, FreeBSD_9.x_64)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This license state (ok, released, terminated, toDeliver)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version (DIRECTADMIN_1, directadmin-license)</td>
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
    <td><a href="#change_os"><CopyableCode code="change_os" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-os"><code>os</code></a></td>
    <td></td>
    <td>Change the Operating System for a license</td>
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
    <td>The name of your DirectAdmin license</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of your DirectAdmin license (wire: serviceName)</td>
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
client_id,
license_id,
creation,
delete_at_expiration,
domain,
iam,
ip,
os,
status,
version
FROM ovh.license_directadmin.licenses
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available services

```sql
SELECT
client_id,
license_id,
creation,
delete_at_expiration,
domain,
iam,
ip,
os,
status,
version
FROM ovh.license_directadmin.licenses
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
UPDATE ovh.license_directadmin.licenses
SET 
delete_at_expiration = {{ delete_at_expiration }},
os = '{{ os }}'
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
        { label: 'change_os', value: 'change_os' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_ip">

Move this license to another Ip

```sql
EXEC ovh.license_directadmin.licenses.change_ip 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"destinationIp": "{{ destinationIp }}"
}'
;
```
</TabItem>
<TabItem value="change_os">

Change the Operating System for a license

```sql
EXEC ovh.license_directadmin.licenses.change_os 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"os": "{{ os }}"
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.

```sql
EXEC ovh.license_directadmin.licenses.confirm_termination 
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
EXEC ovh.license_directadmin.licenses.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
