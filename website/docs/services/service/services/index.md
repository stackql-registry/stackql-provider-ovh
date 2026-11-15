--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - service
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.service.services" /></td></tr>
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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Resource details</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_date" /></td>
    <td><code>string (date)</code></td>
    <td>Engagement date (wire: engagementDate)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date)</code></td>
    <td>Expiration date (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="next_billing_date" /></td>
    <td><code>string (date)</code></td>
    <td>The next billing date (wire: nextBillingDate)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td>Plan service description</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Quantity</td>
</tr>
<tr>
    <td><CopyableCode code="renew" /></td>
    <td><code>object</code></td>
    <td>Renew service description</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Resource service description</td>
</tr>
<tr>
    <td><CopyableCode code="route" /></td>
    <td><code>object</code></td>
    <td>Route to use in API</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Billing state of your service (expired, ok, pending, unpaid)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details about a Service

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Resource details</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_date" /></td>
    <td><code>string (date)</code></td>
    <td>Engagement date (wire: engagementDate)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date)</code></td>
    <td>Expiration date (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="next_billing_date" /></td>
    <td><code>string (date)</code></td>
    <td>The next billing date (wire: nextBillingDate)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td>Plan service description</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Quantity</td>
</tr>
<tr>
    <td><CopyableCode code="renew" /></td>
    <td><code>object</code></td>
    <td>Renew service description</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Resource service description</td>
</tr>
<tr>
    <td><CopyableCode code="route" /></td>
    <td><code>object</code></td>
    <td>Route to use in API</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Billing state of your service (expired, ok, pending, unpaid)</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Get this object properties (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Services (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Alter this object properties (Beta version)</td>
</tr>
<tr>
    <td><a href="#reopen"><CopyableCode code="reopen" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Reopen a suspended service (Beta version)</td>
</tr>
<tr>
    <td><a href="#suspend"><CopyableCode code="suspend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Suspend the service. The service won't be accessible, but you will still be charged for it (Beta version)</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Terminates a suspended service (Beta version)</td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>integer</code></td>
    <td>The internal ID of your service</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>The internal ID of your service (wire: serviceId)</td>
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

Get this object properties (Beta version)

```sql
SELECT
creation_date,
details,
engagement_date,
expiration_date,
next_billing_date,
plan,
quantity,
renew,
resource,
route,
state
FROM ovh.service.services
WHERE service_id = '{{ service_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Services (Beta version)

```sql
SELECT
creation_date,
details,
engagement_date,
expiration_date,
next_billing_date,
plan,
quantity,
renew,
resource,
route,
state
FROM ovh.service.services
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
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

Alter this object properties (Beta version)

```sql
UPDATE ovh.service.services
SET 
resource = '{{ resource }}'
WHERE 
service_id = '{{ service_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reopen"
    values={[
        { label: 'reopen', value: 'reopen' },
        { label: 'suspend', value: 'suspend' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="reopen">

Reopen a suspended service (Beta version)

```sql
EXEC ovh.service.services.reopen 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
<TabItem value="suspend">

Suspend the service. The service won't be accessible, but you will still be charged for it (Beta version)

```sql
EXEC ovh.service.services.suspend 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
<TabItem value="terminate">

Terminates a suspended service (Beta version)

```sql
EXEC ovh.service.services.terminate 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
</Tabs>
