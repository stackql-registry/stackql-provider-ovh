--- 
title: maintenance_work_planned_partners
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_work_planned_partners
  - connectivity
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

Creates, updates, deletes, gets or lists a <code>maintenance_work_planned_partners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_work_planned_partners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.connectivity.maintenance_work_planned_partners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Work Planned operation structure

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
    <td>Work Planned operation id</td>
</tr>
<tr>
    <td><CopyableCode code="date_begin" /></td>
    <td><code>string</code></td>
    <td>Begin date, the work planned operation starts at this time (wire: dateBegin)</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string</code></td>
    <td>End date, the work planned operation finishes at the time (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="departments" /></td>
    <td><code>array</code></td>
    <td>List of impacted department codes</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the work planned operation</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (duration)</code></td>
    <td>Duration of the work planned operation</td>
</tr>
<tr>
    <td><CopyableCode code="fallback" /></td>
    <td><code>boolean</code></td>
    <td>Fallback planned for the operation</td>
</tr>
<tr>
    <td><CopyableCode code="fallback_date_begin" /></td>
    <td><code>string (date-time)</code></td>
    <td>Fallback operation starts at this time (wire: fallbackDateBegin)</td>
</tr>
<tr>
    <td><CopyableCode code="fallback_date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>Fallback operation ends at this time (wire: fallbackDateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="impact" /></td>
    <td><code>string</code></td>
    <td>Impact of the work planned operation</td>
</tr>
<tr>
    <td><CopyableCode code="intervention_type" /></td>
    <td><code>string</code></td>
    <td>Intervention type (BACKBONE_MAINTENANCE, CARD_SWAP_WITH_IMPACT, CLUSTER_AN_ROUTER_MIGRATION, CORRECTIVE_MAINTENANCE, DSLAM_LINK_UPGRADE_WITHOUT_CARD_SWAP, DSLAM_UPGRADE_WITH_IMPACT, FIBER_CABLE_LINK_SWAP, FIBER_CONNECTION_WITH_IMPACT, FIBER_MAINTENANCE, FIBER_THIRD_PARTY_WORK_WITH_IMPACT, IP_BACKBONE_LINK_MIGRATION_WITH_IMPACT, IP_BACKBONE_SWITCH_UPGRADE_WITH_IMPACT, IP_MAINTENANCE, LEVEL2_DSLAM_MIGRATION, LINK_MIGRATION_WITH_DSL_IMPACT, LL_THIRD_PARTY_MAINTENANCE_WITH_IMPACT, LOOP_AN_ROUTER_MIGRATION, LOOP_AN_ROUTER_UPGRADE, MAINTENANCE, OPTIC_FIBER_WORK_WITH_OUTAGE_DURING_NON_WORKING_HOURS, PLANNED_CORRECTIVE_MAINTENANCE, SENSITIVE_LOOP_LINK_UPGRADE, TRANSMISSION_CORRECTIVE_MAINTENANCE, TRANSMISSION_CUSTOMER_TRANSFERT_MIGRATION_WITH_IMPACT, TRANSMISSION_FIBRE_MAINTENANCE, TRANSMISSION_LINK_COMMISSIONING_PRODUCTION_DECOMMISSIONING_WORK_WITH_IMPACT, TRANSMISSION_LINK_TRANSFERT_MIGRATION_WITH_IMPACT, TRANSMISSION_MAINTENANCE, TRANSMISSION_MOVING_WITH_IMPACT, TRANSMISSION_SWITCH_UPGRADE_WITH_IMPACT, WITH_IMPACT) (wire: interventionType)</td>
</tr>
<tr>
    <td><CopyableCode code="nras" /></td>
    <td><code>array</code></td>
    <td>List of impacted NRA/NRO</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>Operator (AXIONE, BOUYGUES, KOSC, ORANGE, OVH, SFR)</td>
</tr>
<tr>
    <td><CopyableCode code="technology" /></td>
    <td><code>string</code></td>
    <td>Technology impacted by the work planned operation</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of the work planned operation</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns the planned work operations of network operators, with their dates, duration, impact, impacted NRA/NRO and departments. Reserved for partners.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns the planned work operations of network operators, with their dates, duration, impact, impacted NRA/NRO and departments. Reserved for partners.

```sql
SELECT
id,
date_begin,
date_end,
departments,
description,
duration,
fallback,
fallback_date_begin,
fallback_date_end,
impact,
intervention_type,
nras,
operator,
technology,
zone
FROM ovh.connectivity.maintenance_work_planned_partners
;
```
</TabItem>
</Tabs>
