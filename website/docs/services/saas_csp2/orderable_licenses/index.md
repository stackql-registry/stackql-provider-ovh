--- 
title: orderable_licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - orderable_licenses
  - saas_csp2
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

Creates, updates, deletes, gets or lists an <code>orderable_licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orderable_licenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.saas_csp2.orderable_licenses" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>License unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>License name</td>
</tr>
<tr>
    <td><CopyableCode code="licence_type" /></td>
    <td><code>string</code></td>
    <td>License's type, indicates if the licence is standalone or an addon (ADDON, NON-SPECIFIC) (wire: licenceType)</td>
</tr>
<tr>
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum purchasable license</td>
</tr>
<tr>
    <td><CopyableCode code="new_seats_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not it is possible to add new seats on subscriptions of this licence type (wire: newSeatsAllowed)</td>
</tr>
<tr>
    <td><CopyableCode code="new_subscriptions_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this licence type is allowed for new subscriptions (wire: newSubscriptionsAllowed)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Office licence

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>License unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>License name</td>
</tr>
<tr>
    <td><CopyableCode code="licence_type" /></td>
    <td><code>string</code></td>
    <td>License's type, indicates if the licence is standalone or an addon (ADDON, NON-SPECIFIC) (wire: licenceType)</td>
</tr>
<tr>
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum purchasable license</td>
</tr>
<tr>
    <td><CopyableCode code="new_seats_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not it is possible to add new seats on subscriptions of this licence type (wire: newSeatsAllowed)</td>
</tr>
<tr>
    <td><CopyableCode code="new_subscriptions_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this licence type is allowed for new subscriptions (wire: newSubscriptionsAllowed)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the name and type of the license, standalone or add-on, the maximum quantity that can be purchased, and whether it allows new subscriptions and new seats. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the licenses that can be ordered for the tenant. (Alpha version)</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the name and type of the license, standalone or add-on, the maximum quantity that can be purchased, and whether it allows new subscriptions and new seats. (Alpha version)

```sql
SELECT
id,
name,
licence_type,
limit,
new_seats_allowed,
new_subscriptions_allowed
FROM ovh.saas_csp2.orderable_licenses
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the licenses that can be ordered for the tenant. (Alpha version)

```sql
SELECT
id,
name,
licence_type,
limit,
new_seats_allowed,
new_subscriptions_allowed
FROM ovh.saas_csp2.orderable_licenses
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
