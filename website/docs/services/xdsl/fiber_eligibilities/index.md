--- 
title: fiber_eligibilities
hide_title: false
hide_table_of_contents: false
keywords:
  - fiber_eligibilities
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>fiber_eligibilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fiber_eligibilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.fiber_eligibilities" /></td></tr>
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
    <td>Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="building_seq_id" /></td>
    <td><code>integer</code></td>
    <td>Building sequence id (wire: buildingSeqId)</td>
</tr>
<tr>
    <td><CopyableCode code="building_name" /></td>
    <td><code>string</code></td>
    <td>Building name (wire: buildingName)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Availability date (wire: availabilityDate)</td>
</tr>
<tr>
    <td><CopyableCode code="building_reference" /></td>
    <td><code>string</code></td>
    <td>Building reference (wire: buildingReference)</td>
</tr>
<tr>
    <td><CopyableCode code="copper_grid_closure_trajectory" /></td>
    <td><code>object</code></td>
    <td>Copper grid closure trajectory (wire: copperGridClosureTrajectory)</td>
</tr>
<tr>
    <td><CopyableCode code="copper_nra_closure_trajectory" /></td>
    <td><code>object</code></td>
    <td>Copper NRA closure trajectory (wire: copperNraClosureTrajectory)</td>
</tr>
<tr>
    <td><CopyableCode code="first_copper_closure" /></td>
    <td><code>object</code></td>
    <td>First copper closure details, if applicable (wire: firstCopperClosure)</td>
</tr>
<tr>
    <td><CopyableCode code="first_eligible_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>First eligible date (wire: firstEligibleDate)</td>
</tr>
<tr>
    <td><CopyableCode code="grts" /></td>
    <td><code>array</code></td>
    <td>Available GRTs</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>object</code></td>
    <td>Offer</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>Provider</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status (eligible, no_building, not_eligible, not_yet_eligible)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Fiber eligibility

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
    <td>Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="building_seq_id" /></td>
    <td><code>integer</code></td>
    <td>Building sequence id (wire: buildingSeqId)</td>
</tr>
<tr>
    <td><CopyableCode code="building_name" /></td>
    <td><code>string</code></td>
    <td>Building name (wire: buildingName)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Availability date (wire: availabilityDate)</td>
</tr>
<tr>
    <td><CopyableCode code="building_reference" /></td>
    <td><code>string</code></td>
    <td>Building reference (wire: buildingReference)</td>
</tr>
<tr>
    <td><CopyableCode code="copper_grid_closure_trajectory" /></td>
    <td><code>object</code></td>
    <td>Copper grid closure trajectory (wire: copperGridClosureTrajectory)</td>
</tr>
<tr>
    <td><CopyableCode code="copper_nra_closure_trajectory" /></td>
    <td><code>object</code></td>
    <td>Copper NRA closure trajectory (wire: copperNraClosureTrajectory)</td>
</tr>
<tr>
    <td><CopyableCode code="first_copper_closure" /></td>
    <td><code>object</code></td>
    <td>First copper closure details, if applicable (wire: firstCopperClosure)</td>
</tr>
<tr>
    <td><CopyableCode code="first_eligible_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>First eligible date (wire: firstEligibleDate)</td>
</tr>
<tr>
    <td><CopyableCode code="grts" /></td>
    <td><code>array</code></td>
    <td>Available GRTs</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>object</code></td>
    <td>Offer</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>Provider</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status (eligible, no_building, not_eligible, not_yet_eligible)</td>
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
    <td>Returns the fiber offer, provider, status, building and availability date of the access address, and the copper network closure schedule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the fiber eligibility checks of the access address. Filter by status: eligible, not_eligible, not_yet_eligible or no_building.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the value of status property (=)</td>
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

Returns the fiber offer, provider, status, building and availability date of the access address, and the copper network closure schedule.

```sql
SELECT
id,
building_seq_id,
building_name,
availability_date,
building_reference,
copper_grid_closure_trajectory,
copper_nra_closure_trajectory,
first_copper_closure,
first_eligible_date,
grts,
last_update,
offer,
provider,
status
FROM ovh.xdsl.fiber_eligibilities
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the fiber eligibility checks of the access address. Filter by status: eligible, not_eligible, not_yet_eligible or no_building.

```sql
SELECT
id,
building_seq_id,
building_name,
availability_date,
building_reference,
copper_grid_closure_trajectory,
copper_nra_closure_trajectory,
first_copper_closure,
first_eligible_date,
grts,
last_update,
offer,
provider,
status
FROM ovh.xdsl.fiber_eligibilities
WHERE service_name = '{{ service_name }}' -- required
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
