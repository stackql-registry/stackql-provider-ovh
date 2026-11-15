--- 
title: nashas
hide_title: false
hide_table_of_contents: false
keywords:
  - nashas
  - dedicated_nasha
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

Creates, updates, deletes, gets or lists a <code>nashas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nashas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_nasha.nashas" /></td></tr>
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
    <td><CopyableCode code="custom_name" /></td>
    <td><code>string</code></td>
    <td>The name you give to the nas (wire: customName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The storage service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="can_create_partition" /></td>
    <td><code>boolean</code></td>
    <td>True, if partition creation is allowed on this nas HA (wire: canCreatePartition)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>area of nas</td>
</tr>
<tr>
    <td><CopyableCode code="disk_type" /></td>
    <td><code>string</code></td>
    <td>the disk type of the nasHa (hdd, nvme, ssd) (wire: diskType)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Access ip of nas (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="monitored" /></td>
    <td><code>boolean</code></td>
    <td>Send an email to customer if any issue is detected</td>
</tr>
<tr>
    <td><CopyableCode code="zpool_capacity" /></td>
    <td><code>integer</code></td>
    <td>percentage of nas space used in % (wire: zpoolCapacity)</td>
</tr>
<tr>
    <td><CopyableCode code="zpool_size" /></td>
    <td><code>integer</code></td>
    <td>the size of the nas (wire: zpoolSize)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Storage nas HA

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
    <td><CopyableCode code="custom_name" /></td>
    <td><code>string</code></td>
    <td>The name you give to the nas (wire: customName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The storage service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="can_create_partition" /></td>
    <td><code>boolean</code></td>
    <td>True, if partition creation is allowed on this nas HA (wire: canCreatePartition)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>area of nas</td>
</tr>
<tr>
    <td><CopyableCode code="disk_type" /></td>
    <td><code>string</code></td>
    <td>the disk type of the nasHa (hdd, nvme, ssd) (wire: diskType)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Access ip of nas (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="monitored" /></td>
    <td><code>boolean</code></td>
    <td>Send an email to customer if any issue is detected</td>
</tr>
<tr>
    <td><CopyableCode code="zpool_capacity" /></td>
    <td><code>integer</code></td>
    <td>percentage of nas space used in % (wire: zpoolCapacity)</td>
</tr>
<tr>
    <td><CopyableCode code="zpool_size" /></td>
    <td><code>integer</code></td>
    <td>the size of the nas (wire: zpoolSize)</td>
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
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
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
    <td>The internal name of your storage</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your storage (wire: serviceName)</td>
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
custom_name,
service_name,
can_create_partition,
datacenter,
disk_type,
iam,
ip,
monitored,
zpool_capacity,
zpool_size
FROM ovh.dedicated_nasha.nashas
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available services

```sql
SELECT
custom_name,
service_name,
can_create_partition,
datacenter,
disk_type,
iam,
ip,
monitored,
zpool_capacity,
zpool_size
FROM ovh.dedicated_nasha.nashas
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
UPDATE ovh.dedicated_nasha.nashas
SET 
custom_name = '{{ custom_name }}',
monitored = {{ monitored }}
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.dedicated_nasha.nashas.change_contact 
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
<TabItem value="confirm_termination">

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.

```sql
EXEC ovh.dedicated_nasha.nashas.confirm_termination 
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
EXEC ovh.dedicated_nasha.nashas.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
