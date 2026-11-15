--- 
title: lines
hide_title: false
hide_table_of_contents: false
keywords:
  - lines
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

Creates, updates, deletes, gets or lists a <code>lines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.lines" /></td></tr>
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
    <td><CopyableCode code="concentration_point" /></td>
    <td><code>object</code></td>
    <td>Data to identify the line at the concentration point (wire: concentrationPoint)</td>
</tr>
<tr>
    <td><CopyableCode code="deconsolidation" /></td>
    <td><code>string</code></td>
    <td>Deconsolidation of the line. (createNeighbour, creation, creationNeighbour, partial, total)</td>
</tr>
<tr>
    <td><CopyableCode code="direct_distribution" /></td>
    <td><code>boolean</code></td>
    <td>True if the line is directly wired on the DSLAM (wire: directDistribution)</td>
</tr>
<tr>
    <td><CopyableCode code="distance" /></td>
    <td><code>integer</code></td>
    <td>Distance in meters from the DSLAM</td>
</tr>
<tr>
    <td><CopyableCode code="fault_repair_time" /></td>
    <td><code>string</code></td>
    <td>Maximum time needed to repair a landline (10HO, 4HNO, 4HO, DPLUS1, NORMAL) (wire: faultRepairTime)</td>
</tr>
<tr>
    <td><CopyableCode code="line_sections_length" /></td>
    <td><code>array</code></td>
    <td>Detailed information about the sections between the DSLAM and the telephone jack (wire: lineSectionsLength)</td>
</tr>
<tr>
    <td><CopyableCode code="mitigation" /></td>
    <td><code>number</code></td>
    <td>Mitigation of the line in dB</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The number of the line</td>
</tr>
<tr>
    <td><CopyableCode code="original_number" /></td>
    <td><code>string</code></td>
    <td>The number used to place the order. Null if the same as the current number. (wire: originalNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="portability" /></td>
    <td><code>boolean</code></td>
    <td>Whether the line number has been ported to OVH, to be used with VoIP service</td>
</tr>
<tr>
    <td><CopyableCode code="sync_down" /></td>
    <td><code>number</code></td>
    <td>The download synchronisation on the DSLAM in Kbps (wire: syncDown)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_up" /></td>
    <td><code>number</code></td>
    <td>The upload synchronisation on the DSLAM in Kbps (wire: syncUp)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Information about the physical copper line

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
    <td><CopyableCode code="concentration_point" /></td>
    <td><code>object</code></td>
    <td>Data to identify the line at the concentration point (wire: concentrationPoint)</td>
</tr>
<tr>
    <td><CopyableCode code="deconsolidation" /></td>
    <td><code>string</code></td>
    <td>Deconsolidation of the line. (createNeighbour, creation, creationNeighbour, partial, total)</td>
</tr>
<tr>
    <td><CopyableCode code="direct_distribution" /></td>
    <td><code>boolean</code></td>
    <td>True if the line is directly wired on the DSLAM (wire: directDistribution)</td>
</tr>
<tr>
    <td><CopyableCode code="distance" /></td>
    <td><code>integer</code></td>
    <td>Distance in meters from the DSLAM</td>
</tr>
<tr>
    <td><CopyableCode code="fault_repair_time" /></td>
    <td><code>string</code></td>
    <td>Maximum time needed to repair a landline (10HO, 4HNO, 4HO, DPLUS1, NORMAL) (wire: faultRepairTime)</td>
</tr>
<tr>
    <td><CopyableCode code="line_sections_length" /></td>
    <td><code>array</code></td>
    <td>Detailed information about the sections between the DSLAM and the telephone jack (wire: lineSectionsLength)</td>
</tr>
<tr>
    <td><CopyableCode code="mitigation" /></td>
    <td><code>number</code></td>
    <td>Mitigation of the line in dB</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string</code></td>
    <td>The number of the line</td>
</tr>
<tr>
    <td><CopyableCode code="original_number" /></td>
    <td><code>string</code></td>
    <td>The number used to place the order. Null if the same as the current number. (wire: originalNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="portability" /></td>
    <td><code>boolean</code></td>
    <td>Whether the line number has been ported to OVH, to be used with VoIP service</td>
</tr>
<tr>
    <td><CopyableCode code="sync_down" /></td>
    <td><code>number</code></td>
    <td>The download synchronisation on the DSLAM in Kbps (wire: syncDown)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_up" /></td>
    <td><code>number</code></td>
    <td>The upload synchronisation on the DSLAM in Kbps (wire: syncUp)</td>
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
    <td>Returns the line number, distance and sections to the DSLAM, synchronization rates, mitigation, deconsolidation, portability and fault repair time.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the numbers of the copper lines of the access.</td>
</tr>
<tr>
    <td><a href="#diagnostic_cancel"><CopyableCode code="diagnostic_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Cancels the ongoing advanced diagnostic of the line, when it can still be canceled.</td>
</tr>
<tr>
    <td><a href="#diagnostic_run"><CopyableCode code="diagnostic_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-number"><code>number</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-faultType"><code>faultType</code></a></td>
    <td></td>
    <td>Starts or continues the advanced diagnostic of the line with the customer answers and actions done. Returns the diagnostic with its status, fault type and data.</td>
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

Returns the line number, distance and sections to the DSLAM, synchronization rates, mitigation, deconsolidation, portability and fault repair time.

```sql
SELECT
concentration_point,
deconsolidation,
direct_distribution,
distance,
fault_repair_time,
line_sections_length,
mitigation,
number,
original_number,
portability,
sync_down,
sync_up
FROM ovh.xdsl.lines
WHERE number = '{{ number }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the numbers of the copper lines of the access.

```sql
SELECT
concentration_point,
deconsolidation,
direct_distribution,
distance,
fault_repair_time,
line_sections_length,
mitigation,
number,
original_number,
portability,
sync_down,
sync_up
FROM ovh.xdsl.lines
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="diagnostic_cancel"
    values={[
        { label: 'diagnostic_cancel', value: 'diagnostic_cancel' },
        { label: 'diagnostic_run', value: 'diagnostic_run' }
    ]}
>
<TabItem value="diagnostic_cancel">

Cancels the ongoing advanced diagnostic of the line, when it can still be canceled.

```sql
EXEC ovh.xdsl.lines.diagnostic_cancel 
@number='{{ number }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="diagnostic_run">

Starts or continues the advanced diagnostic of the line with the customer answers and actions done. Returns the diagnostic with its status, fault type and data.

```sql
EXEC ovh.xdsl.lines.diagnostic_run 
@number='{{ number }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"actionsDone": "{{ actionsDone }}", 
"answers": "{{ answers }}", 
"faultType": "{{ faultType }}"
}'
;
```
</TabItem>
</Tabs>
