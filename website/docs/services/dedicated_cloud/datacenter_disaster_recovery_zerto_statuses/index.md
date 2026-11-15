--- 
title: datacenter_disaster_recovery_zerto_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_disaster_recovery_zerto_statuses
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>datacenter_disaster_recovery_zerto_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_disaster_recovery_zerto_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_statuses" /></td></tr>
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
    <td><CopyableCode code="drp_type" /></td>
    <td><code>string</code></td>
    <td>Disaster Recovery Plan Type (onPremise, ovh) (wire: drpType)</td>
</tr>
<tr>
    <td><CopyableCode code="local_site_information" /></td>
    <td><code>object</code></td>
    <td>Information about the site installed on this Dedicated Cloud (wire: localSiteInformation)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_site_information" /></td>
    <td><code>object</code></td>
    <td>Deprecated - Information about the first remote paired site (wire: remoteSiteInformation)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_sites_information" /></td>
    <td><code>array</code></td>
    <td>Information about the remote paired sites (wire: remoteSitesInformation)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the disaster recovery service (available, delivered, disabled, disabling, error, migrating, provisionning, recycling, reserved, toDisable, toProvision, toRecycle, toRemove, toUnprovision, unprovisionning, upgrading)</td>
</tr>
<tr>
    <td><CopyableCode code="system_version" /></td>
    <td><code>string</code></td>
    <td>Technical solution used (wire: systemVersion)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get Zerto disaster recovery option status</td>
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
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get Zerto disaster recovery option status

```sql
SELECT
drp_type,
local_site_information,
remote_site_information,
remote_sites_information,
state,
system_version
FROM ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_statuses
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
