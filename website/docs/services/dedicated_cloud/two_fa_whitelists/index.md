--- 
title: two_fa_whitelists
hide_title: false
hide_table_of_contents: false
keywords:
  - two_fa_whitelists
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

Creates, updates, deletes, gets or lists a <code>two_fa_whitelists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="two_fa_whitelists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.two_fa_whitelists" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the trusted IP</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_netmask" /></td>
    <td><code>integer</code></td>
    <td>IP netmask (CIDR notation) of the remote service (wire: cidrNetmask)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the trusted IP</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the remote service (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the whitelist (enabled, enabling, error, migrating, removed, removing)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Two factor authentication whitelisted network

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
    <td>Id of the trusted IP</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_netmask" /></td>
    <td><code>integer</code></td>
    <td>IP netmask (CIDR notation) of the remote service (wire: cidrNetmask)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the trusted IP</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the remote service (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the whitelist (enabled, enabling, error, migrating, removed, removing)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a 2FA whitelisted network. Returns the IP address, netmask, description and state of the exempted network.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List 2FA whitelisted networks. Returns the IDs of the networks exempted from two-factor authentication.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Create a 2FA whitelisted network. Exempts an IP address or network from two-factor authentication. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a 2FA whitelisted network</td>
</tr>
<tr>
    <td><a href="#change_properties"><CopyableCode code="change_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Update a 2FA whitelisted network</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the trusted IP</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get a 2FA whitelisted network. Returns the IP address, netmask, description and state of the exempted network.

```sql
SELECT
id,
cidr_netmask,
description,
ip,
state
FROM ovh.dedicated_cloud.two_fa_whitelists
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List 2FA whitelisted networks. Returns the IDs of the networks exempted from two-factor authentication.

```sql
SELECT
id,
cidr_netmask,
description,
ip,
state
FROM ovh.dedicated_cloud.two_fa_whitelists
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a 2FA whitelisted network. Exempts an IP address or network from two-factor authentication. Returns a task to track progress.

```sql
INSERT INTO ovh.dedicated_cloud.two_fa_whitelists (
description,
ip,
service_name
)
SELECT 
'{{ description }}' /* required */,
'{{ ip }}' /* required */,
'{{ service_name }}'
RETURNING
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: two_fa_whitelists
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the two_fa_whitelists resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the exception
    - name: ip
      value: "{{ ip }}"
      description: |
        IP address or network of the remote service, e.g. 123.100.200.0
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a 2FA whitelisted network

```sql
DELETE FROM ovh.dedicated_cloud.two_fa_whitelists
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_properties"
    values={[
        { label: 'change_properties', value: 'change_properties' }
    ]}
>
<TabItem value="change_properties">

Update a 2FA whitelisted network

```sql
EXEC ovh.dedicated_cloud.two_fa_whitelists.change_properties 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"description": "{{ description }}"
}'
;
```
</TabItem>
</Tabs>
