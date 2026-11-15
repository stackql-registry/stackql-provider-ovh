--- 
title: diagnostics
hide_title: false
hide_table_of_contents: false
keywords:
  - diagnostics
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

Creates, updates, deletes, gets or lists a <code>diagnostics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="diagnostics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.diagnostics" /></td></tr>
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
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Available tests for this access</td>
</tr>
<tr>
    <td><CopyableCode code="diagnostic_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datime of the diagnostic (wire: diagnosticTime)</td>
</tr>
<tr>
    <td><CopyableCode code="incident" /></td>
    <td><code>boolean</code></td>
    <td>Is there an ongoing genericIncident on the access ?</td>
</tr>
<tr>
    <td><CopyableCode code="is_active_on_lns" /></td>
    <td><code>boolean</code></td>
    <td>Is the access active on its primary or secondary LNS (wire: isActiveOnLns)</td>
</tr>
<tr>
    <td><CopyableCode code="is_modem_connected" /></td>
    <td><code>boolean</code></td>
    <td>Is the modem connected ? (wire: isModemConnected)</td>
</tr>
<tr>
    <td><CopyableCode code="line_details" /></td>
    <td><code>array</code></td>
    <td>Test details by line (wire: lineDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance" /></td>
    <td><code>boolean</code></td>
    <td>Is there an ongoing scheduled maintenance by operator on the access ?</td>
</tr>
<tr>
    <td><CopyableCode code="ping" /></td>
    <td><code>boolean</code></td>
    <td>Does the access ping ?</td>
</tr>
<tr>
    <td><CopyableCode code="remaining" /></td>
    <td><code>integer</code></td>
    <td>Remaining number of diagnostic for this access</td>
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
    <td>Returns the last diagnostic of the access: modem connection, ping, LNS activity, ongoing incident or maintenance, line details, available tests and remaining diagnostics.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Starts a diagnostic of the access. Returns the task that performs the change.</td>
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

Returns the last diagnostic of the access: modem connection, ping, LNS activity, ongoing incident or maintenance, line details, available tests and remaining diagnostics.

```sql
SELECT
capabilities,
diagnostic_time,
incident,
is_active_on_lns,
is_modem_connected,
line_details,
maintenance,
ping,
remaining
FROM ovh.xdsl.diagnostics
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Starts a diagnostic of the access. Returns the task that performs the change.

```sql
INSERT INTO ovh.xdsl.diagnostics (
service_name
)
SELECT 
'{{ service_name }}'
RETURNING
id,
done_date,
function,
is_archived,
status,
todo_date,
update_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: diagnostics
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the diagnostics resource.
`}</CodeBlock>

</TabItem>
</Tabs>
