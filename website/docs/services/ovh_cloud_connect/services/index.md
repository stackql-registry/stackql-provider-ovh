--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - ovh_cloud_connect
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ovh_cloud_connect.services" /></td></tr>
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
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>Service bandwidth (100g, 100m, 10g, 1g, 200m, 20g, 2g, 500m, 50m, 5g)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Service description</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>Service family</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="interface_list" /></td>
    <td><code>array</code></td>
    <td>List of interfaces linked to a service (wire: interfaceList)</td>
</tr>
<tr>
    <td><CopyableCode code="pop" /></td>
    <td><code>string</code></td>
    <td>Pop reference where the service is delivered</td>
</tr>
<tr>
    <td><CopyableCode code="port_quantity" /></td>
    <td><code>string</code></td>
    <td>Port quantity (1, 2) (wire: portQuantity)</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Product name of the service</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Service provider (OVHcloud, RISQ, consoleconnect, dcexp, digitalrealty, edge, equinix, fibrenoire, google, intercloud, internal, interxion, megaport, orange)</td>
</tr>
<tr>
    <td><CopyableCode code="sector" /></td>
    <td><code>string</code></td>
    <td>Service sector</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Service status (active, closed)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service UUID</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack linked to the service</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

OVHcloud Connect Service

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
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>Service bandwidth (100g, 100m, 10g, 1g, 200m, 20g, 2g, 500m, 50m, 5g)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Service description</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>Service family</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="interface_list" /></td>
    <td><code>array</code></td>
    <td>List of interfaces linked to a service (wire: interfaceList)</td>
</tr>
<tr>
    <td><CopyableCode code="pop" /></td>
    <td><code>string</code></td>
    <td>Pop reference where the service is delivered</td>
</tr>
<tr>
    <td><CopyableCode code="port_quantity" /></td>
    <td><code>string</code></td>
    <td>Port quantity (1, 2) (wire: portQuantity)</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Product name of the service</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Service provider (OVHcloud, RISQ, consoleconnect, dcexp, digitalrealty, edge, equinix, fibrenoire, google, intercloud, internal, interxion, megaport, orange)</td>
</tr>
<tr>
    <td><CopyableCode code="sector" /></td>
    <td><code>string</code></td>
    <td>Service sector</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Service status (active, closed)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service UUID</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack linked to the service</td>
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
    <td>Returns the service's provider, PoP, bandwidth, port count, vRack and status.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the UUIDs of your OVHcloud Connect services, filterable by IAM tags.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the service's free-text description, its only editable field.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the change of the admin, tech or billing contact and returns the request IDs.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirms the termination with the emailed token and records your reason.</td>
</tr>
<tr>
    <td><a href="#loa"><CopyableCode code="loa" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generates the Letter of Authorization the PoP operator needs to set up your cross-connect.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
</tr>
<tr>
    <td><a href="#pairing_key"><CopyableCode code="pairing_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pairingKey"><code>pairingKey</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Consumes a Google Cloud Partner Interconnect pairing key to create a circuit; the service needs a vRack (async task).</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Emails a termination token to the admin contact, to use with *Confirm termination*.</td>
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
<tr id="parameter-pairingKey">
    <td><CopyableCode code="pairingKey" /></td>
    <td><code>string</code></td>
    <td>Google pairing key</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the service's provider, PoP, bandwidth, port count, vRack and status.

```sql
SELECT
bandwidth,
description,
family,
iam,
interface_list,
pop,
port_quantity,
product,
provider,
sector,
status,
uuid,
vrack
FROM ovh.ovh_cloud_connect.services
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the UUIDs of your OVHcloud Connect services, filterable by IAM tags.

```sql
SELECT
bandwidth,
description,
family,
iam,
interface_list,
pop,
port_quantity,
product,
provider,
sector,
status,
uuid,
vrack
FROM ovh.ovh_cloud_connect.services
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

Changes the service's free-text description, its only editable field.

```sql
UPDATE ovh.ovh_cloud_connect.services
SET 
description = '{{ description }}'
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
        { label: 'loa', value: 'loa' },
        { label: 'log_url', value: 'log_url' },
        { label: 'pairing_key', value: 'pairing_key' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Starts the change of the admin, tech or billing contact and returns the request IDs.

```sql
EXEC ovh.ovh_cloud_connect.services.change_contact 
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

Confirms the termination with the emailed token and records your reason.

```sql
EXEC ovh.ovh_cloud_connect.services.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"commentaryFutureUse": "{{ commentaryFutureUse }}", 
"commentaryReason": "{{ commentaryReason }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="loa">

Generates the Letter of Authorization the PoP operator needs to set up your cross-connect.

```sql
EXEC ovh.ovh_cloud_connect.services.loa 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.ovh_cloud_connect.services.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="pairing_key">

Consumes a Google Cloud Partner Interconnect pairing key to create a circuit; the service needs a vRack (async task).

```sql
EXEC ovh.ovh_cloud_connect.services.pairing_key 
@pairingKey='{{ pairingKey }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="terminate">

Emails a termination token to the admin contact, to use with *Confirm termination*.

```sql
EXEC ovh.ovh_cloud_connect.services.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
