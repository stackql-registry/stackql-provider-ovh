--- 
title: moves
hide_title: false
hide_table_of_contents: false
keywords:
  - moves
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

Creates, updates, deletes, gets or lists a <code>moves</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="moves" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.moves" /></td></tr>
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
    <td><CopyableCode code="cloud_project" /></td>
    <td><code>array</code></td>
    <td>list of public cloud projects (wire: cloudProject)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_cloud" /></td>
    <td><code>array</code></td>
    <td>list of dedicated clouds (wire: dedicatedCloud)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_server" /></td>
    <td><code>array</code></td>
    <td>list of dedicated servers (wire: dedicatedServer)</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_reseller" /></td>
    <td><code>array</code></td>
    <td>list of hosting reseller services (wire: hostingReseller)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_loadbalancing" /></td>
    <td><code>array</code></td>
    <td>list of load balancing services (wire: ipLoadbalancing)</td>
</tr>
<tr>
    <td><CopyableCode code="snc_cloud_platform" /></td>
    <td><code>array</code></td>
    <td>list of SNC Cloud Platform projects (wire: sncCloudPlatform)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_cloud_director" /></td>
    <td><code>array</code></td>
    <td>list of VMware Cloud Director organization services (wire: vmwareCloudDirector)</td>
</tr>
<tr>
    <td><CopyableCode code="vps" /></td>
    <td><code>array</code></td>
    <td>list of vps</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_services_bgp" /></td>
    <td><code>array</code></td>
    <td>list of BGP vrack services services (wire: vrackServicesBgp)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>List move destinations. Returns, per service type, the services this IP can move to and their next hops. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td></td>
    <td>Move an IP. Routes the IP to another service of your account, with an optional next hop (async task).</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

List move destinations. Returns, per service type, the services this IP can move to and their next hops. (Beta version)

```sql
SELECT
cloud_project,
dedicated_cloud,
dedicated_server,
hosting_reseller,
ip_loadbalancing,
snc_cloud_platform,
vmware_cloud_director,
vps,
vrack_services_bgp
FROM ovh.ip.moves
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

Move an IP. Routes the IP to another service of your account, with an optional next hop (async task).

```sql
INSERT INTO ovh.ip.moves (
nexthop,
to,
ip
)
SELECT 
'{{ nexthop }}',
'{{ to }}' /* required */,
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
- name: moves
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the moves resource.
    - name: nexthop
      value: "{{ nexthop }}"
      description: |
        Nexthop of destination service
    - name: to
      value: "{{ to }}"
      description: |
        Service destination
`}</CodeBlock>

</TabItem>
</Tabs>
