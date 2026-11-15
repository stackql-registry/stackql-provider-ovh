--- 
title: lines_dslam_ports
hide_title: false
hide_table_of_contents: false
keywords:
  - lines_dslam_ports
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

Creates, updates, deletes, gets or lists a <code>lines_dslam_ports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lines_dslam_ports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.lines_dslam_ports" /></td></tr>
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
    <td><CopyableCode code="last_desync_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time the port lost the synchronization (wire: lastDesyncDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_sync_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time the port synchronized (wire: lastSyncDate)</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>object</code></td>
    <td>Profile on the DSLAM</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Different states of a DSLAM port (activated, deactivated, outofsync)</td>
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
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the status and profile of the DSLAM port of the line, with its last synchronization and desynchronization dates.</td>
</tr>
<tr>
    <td><a href="#change_profile"><CopyableCode code="change_profile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-dslamProfileId"><code>dslamProfileId</code></a></td>
    <td></td>
    <td>Applies one of the available profiles to the DSLAM port of the line. Returns the task that performs the change.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Resets the port of the line on the DSLAM. Returns the task that performs the change.</td>
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
<tr id="parameter-number">
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>Number</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the status and profile of the DSLAM port of the line, with its last synchronization and desynchronization dates.

```sql
SELECT
last_desync_date,
last_sync_date,
profile,
status
FROM ovh.xdsl.lines_dslam_ports
WHERE number = '{{ number }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_profile"
    values={[
        { label: 'change_profile', value: 'change_profile' },
        { label: 'reset', value: 'reset' }
    ]}
>
<TabItem value="change_profile">

Applies one of the available profiles to the DSLAM port of the line. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.lines_dslam_ports.change_profile 
@number='{{ number }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"dslamProfileId": {{ dslamProfileId }}
}'
;
```
</TabItem>
<TabItem value="reset">

Resets the port of the line on the DSLAM. Returns the task that performs the change.

```sql
EXEC ovh.xdsl.lines_dslam_ports.reset 
@number='{{ number }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
