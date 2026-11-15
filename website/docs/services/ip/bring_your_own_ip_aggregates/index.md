--- 
title: bring_your_own_ip_aggregates
hide_title: false
hide_table_of_contents: false
keywords:
  - bring_your_own_ip_aggregates
  - ip
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

Creates, updates, deletes, gets or lists a <code>bring_your_own_ip_aggregates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bring_your_own_ip_aggregates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.bring_your_own_ip_aggregates" /></td></tr>
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

Preview of an IP aggregation on BYOIP Additional IPs

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
    <td><CopyableCode code="aggregation_ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Aggregation Additional IP that will be created (example: 192.0.2.0/24) (wire: aggregationIp)</td>
</tr>
<tr>
    <td><CopyableCode code="children_ips" /></td>
    <td><code>array</code></td>
    <td>Existing Additional IP(s) that will be aggregated (wire: childrenIps)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>List aggregation options. Returns the larger Additional IPs this one can merge into, with the neighbors each would absorb. Aggregation applies to IPv4 blocks only. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-aggregation_ip"><code>aggregation_ip</code></a></td>
    <td></td>
    <td>Aggregate IPv4 blocks. Merges this BYOIP Additional IP and its neighbors into the chosen larger block (async task). (Beta version)</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
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

List aggregation options. Returns the larger Additional IPs this one can merge into, with the neighbors each would absorb. Aggregation applies to IPv4 blocks only. (Beta version)

```sql
SELECT
aggregation_ip,
children_ips
FROM ovh.ip.bring_your_own_ip_aggregates
WHERE ip = '{{ ip }}' -- required
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

Aggregate IPv4 blocks. Merges this BYOIP Additional IP and its neighbors into the chosen larger block (async task). (Beta version)

```sql
INSERT INTO ovh.ip.bring_your_own_ip_aggregates (
aggregation_ip,
ip
)
SELECT 
'{{ aggregation_ip }}' /* required */,
'{{ ip }}'
RETURNING
task_id,
comment,
destination,
done_date,
function,
last_update,
start_date,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bring_your_own_ip_aggregates
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the bring_your_own_ip_aggregates resource.
    - name: aggregation_ip
      value: "{{ aggregation_ip }}"
      description: |
        IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
`}</CodeBlock>

</TabItem>
</Tabs>
