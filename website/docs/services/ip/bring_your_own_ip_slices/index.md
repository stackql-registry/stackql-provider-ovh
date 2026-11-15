--- 
title: bring_your_own_ip_slices
hide_title: false
hide_table_of_contents: false
keywords:
  - bring_your_own_ip_slices
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

Creates, updates, deletes, gets or lists a <code>bring_your_own_ip_slices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bring_your_own_ip_slices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.bring_your_own_ip_slices" /></td></tr>
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

Preview of an IP slicing on BYOIP Additional IPs

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
    <td><CopyableCode code="children_ips" /></td>
    <td><code>array</code></td>
    <td>Additional IP(s) that will be created (wire: childrenIps)</td>
</tr>
<tr>
    <td><CopyableCode code="slicing_size" /></td>
    <td><code>integer</code></td>
    <td>Slicing size (wire: slicingSize)</td>
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
    <td>List slicing options. Returns, for each allowed size, the Additional IPs that slicing this one would create. Slicing applies to IPv4 blocks only. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-slicing_size"><code>slicing_size</code></a></td>
    <td></td>
    <td>Slice an IPv4 block. Splits this BYOIP Additional IP into smaller Additional IPs of the chosen size (async task). (Beta version)</td>
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

List slicing options. Returns, for each allowed size, the Additional IPs that slicing this one would create. Slicing applies to IPv4 blocks only. (Beta version)

```sql
SELECT
children_ips,
slicing_size
FROM ovh.ip.bring_your_own_ip_slices
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

Slice an IPv4 block. Splits this BYOIP Additional IP into smaller Additional IPs of the chosen size (async task). (Beta version)

```sql
INSERT INTO ovh.ip.bring_your_own_ip_slices (
slicing_size,
ip
)
SELECT 
{{ slicing_size }} /* required */,
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
- name: bring_your_own_ip_slices
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the bring_your_own_ip_slices resource.
    - name: slicing_size
      value: {{ slicing_size }}
      description: |
        Size (ip mask) of the IPs to create inside given IP
`}</CodeBlock>

</TabItem>
</Tabs>
