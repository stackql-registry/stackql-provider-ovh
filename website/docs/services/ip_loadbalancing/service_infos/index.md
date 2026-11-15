--- 
title: service_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - service_infos
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>service_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.service_infos" /></td></tr>
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
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: serviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="can_delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the service can be set up to be deleted at expiration (wire: canDeleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_admin" /></td>
    <td><code>string</code></td>
    <td> (wire: contactAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_billing" /></td>
    <td><code>string</code></td>
    <td> (wire: contactBilling)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_tech" /></td>
    <td><code>string</code></td>
    <td> (wire: contactTech)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="engaged_up_to" /></td>
    <td><code>string (date)</code></td>
    <td> (wire: engagedUpTo)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="possible_renew_period" /></td>
    <td><code>array</code></td>
    <td>All the possible renew period of your service in month (wire: possibleRenewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="renew" /></td>
    <td><code>object</code></td>
    <td>Way of handling the renew</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_type" /></td>
    <td><code>string</code></td>
    <td>Detailed renewal type of a service (automaticForcedProduct, automaticV2012, automaticV2014, automaticV2016, automaticV2024, manual, oneShot, option) (wire: renewalType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (autorenewInProgress, expired, inCreation, ok, pendingDebt, unPaid)</td>
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
    <td>Get service information. Returns the status, creation and expiration dates, contacts and renewal settings of the service.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update service information. Updates the renewal settings of the service: automatic renewal, period, or deletion at expiration.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
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

Get service information. Returns the status, creation and expiration dates, contacts and renewal settings of the service.

```sql
SELECT
service_id,
can_delete_at_expiration,
contact_admin,
contact_billing,
contact_tech,
creation,
domain,
engaged_up_to,
expiration,
possible_renew_period,
renew,
renewal_type,
status
FROM ovh.ip_loadbalancing.service_infos
WHERE service_name = '{{ service_name }}' -- required
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

Update service information. Updates the renewal settings of the service: automatic renewal, period, or deletion at expiration.

```sql
UPDATE ovh.ip_loadbalancing.service_infos
SET 
renew = '{{ renew }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
