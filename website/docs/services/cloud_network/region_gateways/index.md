--- 
title: region_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - region_gateways
  - cloud_network
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

Creates, updates, deletes, gets or lists a <code>region_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_gateways" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>ID of the gateway</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the gateway</td>
</tr>
<tr>
    <td><CopyableCode code="external_information" /></td>
    <td><code>object</code></td>
    <td>External information (wire: externalInformation)</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>Interfaces list of the gateway</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Model of the gateway (2xl, 3xl, l, m, s, xl)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Gateway region</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the gateway (active, building, down, error)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type fo the gateway (private, public)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Gateway

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
    <td><code>string (uuid)</code></td>
    <td>ID of the gateway</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the gateway</td>
</tr>
<tr>
    <td><CopyableCode code="external_information" /></td>
    <td><code>object</code></td>
    <td>External information (wire: externalInformation)</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>Interfaces list of the gateway</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Model of the gateway (2xl, 3xl, l, m, s, xl)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Gateway region</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the gateway (active, building, down, error)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type fo the gateway (private, public)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get gateway</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-subnet_id"><code>subnet_id</code></a>, <a href="#parameter-with_subnets"><code>with_subnets</code></a></td>
    <td>List gateways</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td></td>
    <td>Create new Gateway and new Private Network with new Subnet</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update a gateway</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete gateway</td>
</tr>
<tr>
    <td><a href="#expose"><CopyableCode code="expose" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Expose gateway to public network by adding a public port on it.</td>
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
    <td><code>string (uuid)</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-regionName">
    <td><CopyableCode code="regionName" /></td>
    <td><code>string</code></td>
    <td>Region name</td>
</tr>
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Gateway listing limit (default and max is 50)</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Gateway to start listing from</td>
</tr>
<tr id="parameter-subnet_id">
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>Attached interface's subnet id (wire: subnetId)</td>
</tr>
<tr id="parameter-with_subnets">
    <td><CopyableCode code="with_subnets" /></td>
    <td><code>boolean</code></td>
    <td>Include subnets to response (wire: withSubnets)</td>
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

Get gateway

```sql
SELECT
id,
name,
external_information,
interfaces,
model,
region,
status,
type
FROM ovh.cloud_network.region_gateways
WHERE id = '{{ id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List gateways

```sql
SELECT
id,
name,
external_information,
interfaces,
model,
region,
status,
type
FROM ovh.cloud_network.region_gateways
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
AND subnet_id = '{{ subnet_id }}'
AND with_subnets = '{{ with_subnets }}'
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

Create new Gateway and new Private Network with new Subnet

```sql
INSERT INTO ovh.cloud_network.region_gateways (
model,
name,
network,
region_name,
service_name
)
SELECT 
'{{ model }}' /* required */,
'{{ name }}' /* required */,
'{{ network }}' /* required */,
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
resource_id,
action,
completed_at,
created_at,
progress,
regions,
started_at,
status,
sub_operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_gateways
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_gateways resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_gateways resource.
    - name: model
      value: "{{ model }}"
      description: |
        Model of the gateway
      valid_values: ['2xl', '3xl', 'l', 'm', 's', 'xl']
    - name: name
      value: "{{ name }}"
      description: |
        Name of the gateway
    - name: network
      description: |
        Information to create the network for the gateway
      value:
        name: "{{ name }}"
        subnet:
          allocationPools:
            - end: "{{ end }}"
              start: "{{ start }}"
          cidr: "{{ cidr }}"
          dnsNameServers:
            - "{{ dnsNameServers }}"
          enableDhcp: {{ enableDhcp }}
          gatewayIp: "{{ gatewayIp }}"
          hostRoutes:
            - destination: "{{ destination }}"
              nextHop: "{{ nextHop }}"
          ipVersion: {{ ipVersion }}
          name: "{{ name }}"
          useDefaultPublicDNSResolver: {{ useDefaultPublicDNSResolver }}
        vlanId: {{ vlanId }}
`}</CodeBlock>

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

Update a gateway

```sql
UPDATE ovh.cloud_network.region_gateways
SET 
model = '{{ model }}',
name = '{{ name }}'
WHERE 
id = '{{ id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND model = '{{ model }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
external_information,
interfaces,
model,
region,
status,
type;
```
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

Delete gateway

```sql
DELETE FROM ovh.cloud_network.region_gateways
WHERE id = '{{ id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="expose"
    values={[
        { label: 'expose', value: 'expose' }
    ]}
>
<TabItem value="expose">

Expose gateway to public network by adding a public port on it.

```sql
EXEC ovh.cloud_network.region_gateways.expose 
@id='{{ id }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
