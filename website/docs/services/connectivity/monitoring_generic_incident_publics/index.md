--- 
title: monitoring_generic_incident_publics
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_generic_incident_publics
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

Creates, updates, deletes, gets or lists a <code>monitoring_generic_incident_publics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_generic_incident_publics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.connectivity.monitoring_generic_incident_publics" /></td></tr>
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

Generic incident structure

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
    <td>Generic incident id</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Task id (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Optional comment, that contains some information and updates about the generic incident</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>Creation date, the generic incident has been detected (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>string</code></td>
    <td>Type of fault</td>
</tr>
<tr>
    <td><CopyableCode code="departments" /></td>
    <td><code>array</code></td>
    <td>List of impacted department codes</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string</code></td>
    <td>End date, the generic incident is resolved and closed (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_resolution_date" /></td>
    <td><code>string</code></td>
    <td>Estimated resolution date for generic incident (wire: estimatedResolutionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="is_national" /></td>
    <td><code>boolean</code></td>
    <td>Identify a national generic incident (wire: isNational)</td>
</tr>
<tr>
    <td><CopyableCode code="nature" /></td>
    <td><code>string</code></td>
    <td>Details about the consequence of the default</td>
</tr>
<tr>
    <td><CopyableCode code="nra" /></td>
    <td><code>array</code></td>
    <td>List of impacted NRA/NRO</td>
</tr>
<tr>
    <td><CopyableCode code="operators" /></td>
    <td><code>array</code></td>
    <td>List of impacted operators</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Generic incident status (closed, detected, validated)</td>
</tr>
<tr>
    <td><CopyableCode code="task_reference" /></td>
    <td><code>string</code></td>
    <td>Task reference created on Ovhcloud status web page (wire: taskReference)</td>
</tr>
<tr>
    <td><CopyableCode code="technologies" /></td>
    <td><code>array</code></td>
    <td>Impacted technologies</td>
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
    <td><a href="#parameter-creation_date"><code>creation_date</code></a>, <a href="#parameter-end_date"><code>end_date</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Returns the validated and recently closed generic incidents, with their impacted operators, technologies, NRA/NRO and departments, and their estimated resolution date. Filter on the dates and the status.</td>
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
<tr id="parameter-creation_date">
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>List only incidents created after this date (wire: creationDate)</td>
</tr>
<tr id="parameter-end_date">
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>List only incidents closed prior to this date (wire: endDate)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by the status of the incident (validated or closed)</td>
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

Returns the validated and recently closed generic incidents, with their impacted operators, technologies, NRA/NRO and departments, and their estimated resolution date. Filter on the dates and the status.

```sql
SELECT
id,
task_id,
comment,
creation_date,
default,
departments,
end_date,
estimated_resolution_date,
is_national,
nature,
nra,
operators,
status,
task_reference,
technologies
FROM ovh.connectivity.monitoring_generic_incident_publics
WHERE creation_date = '{{ creation_date }}'
AND end_date = '{{ end_date }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
