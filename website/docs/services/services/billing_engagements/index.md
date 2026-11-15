--- 
title: billing_engagements
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_engagements
  - services
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

Creates, updates, deletes, gets or lists a <code>billing_engagements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_engagements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.services.billing_engagements" /></td></tr>
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
    <td><CopyableCode code="current_period" /></td>
    <td><code>object</code></td>
    <td>Current engagement period (wire: currentPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="end_rule" /></td>
    <td><code>object</code></td>
    <td>Describes the rule applied at the end of the Engagement (wire: endRule)</td>
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
    <td>Get engagement details (Beta version)</td>
</tr>
<tr>
    <td><a href="#update_end_rule"><CopyableCode code="update_end_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-strategy"><code>strategy</code></a></td>
    <td></td>
    <td>Change your Engagement end rules (Beta version)</td>
</tr>
<tr>
    <td><a href="#flush"><CopyableCode code="flush" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Flush the engagement of this service (Beta version)</td>
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
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
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

Get engagement details (Beta version)

```sql
SELECT
current_period,
end_rule
FROM ovh.services.billing_engagements
WHERE service_id = '{{ service_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_end_rule"
    values={[
        { label: 'update_end_rule', value: 'update_end_rule' },
        { label: 'flush', value: 'flush' }
    ]}
>
<TabItem value="update_end_rule">

Change your Engagement end rules (Beta version)

```sql
EXEC ovh.services.billing_engagements.update_end_rule 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"strategy": "{{ strategy }}"
}'
;
```
</TabItem>
<TabItem value="flush">

Flush the engagement of this service (Beta version)

```sql
EXEC ovh.services.billing_engagements.flush 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"autoPayWithPreferredPaymentMethod": {{ autoPayWithPreferredPaymentMethod }}, 
"dryRun": {{ dryRun }}, 
"terminateSubscription": {{ terminateSubscription }}
}'
;
```
</TabItem>
</Tabs>
