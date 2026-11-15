--- 
title: region_loadbalancing_loadbalancers
hide_title: false
hide_table_of_contents: false
keywords:
  - region_loadbalancing_loadbalancers
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

Creates, updates, deletes, gets or lists a <code>region_loadbalancing_loadbalancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_loadbalancing_loadbalancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_loadbalancing_loadbalancers" /></td></tr>
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
    <td>ID of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the flavor (wire: flavorId)</td>
</tr>
<tr>
    <td><CopyableCode code="vip_network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Openstack ID of the network for the Virtual IP (wire: vipNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="vip_subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the subnet for the Virtual IP (wire: vipSubnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="floating_ip" /></td>
    <td><code>object</code></td>
    <td>Information about floating IP (wire: floatingIp)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>Provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>UTC date and timestamp when the resource was created (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the Virtual IP (example: 192.0.2.0) (wire: vipAddress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

LoadBalancer

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
    <td>ID of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="flavor_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the flavor (wire: flavorId)</td>
</tr>
<tr>
    <td><CopyableCode code="vip_network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Openstack ID of the network for the Virtual IP (wire: vipNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="vip_subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the subnet for the Virtual IP (wire: vipSubnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="floating_ip" /></td>
    <td><code>object</code></td>
    <td>Information about floating IP (wire: floatingIp)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>Provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>UTC date and timestamp when the resource was created (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the Virtual IP (example: 192.0.2.0) (wire: vipAddress)</td>
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
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get details about a load balancer</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List your load balancers</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-flavor_id"><code>flavor_id</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td></td>
    <td>Create a loadbalancer</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Edit a loadbalancer</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete loadbalancer</td>
</tr>
<tr>
    <td><a href="#associate_floating_ip"><CopyableCode code="associate_floating_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-floatingIpId"><code>floatingIpId</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Associate an existing floating IP to a loadbalancer</td>
</tr>
<tr>
    <td><a href="#floating_ip"><CopyableCode code="floating_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Create a floating IP and attach it to a loadbalancer</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
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
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Load balancer ID</td>
</tr>
<tr id="parameter-load_balancer_id">
    <td><CopyableCode code="load_balancer_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Load balancer ID (wire: loadBalancerId)</td>
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

Get details about a load balancer

```sql
SELECT
id,
name,
flavor_id,
vip_network_id,
vip_subnet_id,
created_at,
floating_ip,
operating_status,
provisioning_status,
region,
updated_at,
vip_address
FROM ovh.cloud_network.region_loadbalancing_loadbalancers
WHERE load_balancer_id = '{{ load_balancer_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your load balancers

```sql
SELECT
id,
name,
flavor_id,
vip_network_id,
vip_subnet_id,
created_at,
floating_ip,
operating_status,
provisioning_status,
region,
updated_at,
vip_address
FROM ovh.cloud_network.region_loadbalancing_loadbalancers
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a loadbalancer

```sql
INSERT INTO ovh.cloud_network.region_loadbalancing_loadbalancers (
flavor_id,
listeners,
name,
network,
region_name,
service_name
)
SELECT 
'{{ flavor_id }}' /* required */,
'{{ listeners }}',
'{{ name }}',
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
- name: region_loadbalancing_loadbalancers
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_loadbalancing_loadbalancers resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_loadbalancing_loadbalancers resource.
    - name: flavor_id
      value: "{{ flavor_id }}"
      description: |
        Loadbalancer flavor id
    - name: listeners
      description: |
        Listeners to create with the loadbalancer
      value:
        - allowedCidrs: "{{ allowedCidrs }}"
          description: "{{ description }}"
          name: "{{ name }}"
          pool:
            algorithm: "{{ algorithm }}"
            healthMonitor:
              delay: {{ delay }}
              httpConfiguration:
                domainName: "{{ domainName }}"
                expectedCodes: "{{ expectedCodes }}"
                httpMethod: "{{ httpMethod }}"
                httpVersion: "{{ httpVersion }}"
                urlPath: "{{ urlPath }}"
              maxRetries: {{ maxRetries }}
              maxRetriesDown: {{ maxRetriesDown }}
              monitorType: "{{ monitorType }}"
              name: "{{ name }}"
              operatingStatus: "{{ operatingStatus }}"
              provisioningStatus: "{{ provisioningStatus }}"
              timeout: {{ timeout }}
            members:
              - address: "{{ address }}"
                name: "{{ name }}"
                protocolPort: {{ protocolPort }}
                weight: {{ weight }}
            name: "{{ name }}"
            protocol: "{{ protocol }}"
            sessionPersistence:
              cookieName: "{{ cookieName }}"
              type: "{{ type }}"
          port: {{ port }}
          protocol: "{{ protocol }}"
          secretId: "{{ secretId }}"
          timeoutClientData: {{ timeoutClientData }}
          timeoutMemberData: {{ timeoutMemberData }}
          tlsVersions: "{{ tlsVersions }}"
    - name: name
      value: "{{ name }}"
      description: |
        Name of the member
    - name: network
      description: |
        Network information to create the loadbalancer
      value:
        private:
          floatingIp:
            id: "{{ id }}"
          floatingIpCreate:
            description: "{{ description }}"
          gateway:
            id: "{{ id }}"
          gatewayCreate:
            model: "{{ model }}"
            name: "{{ name }}"
          network:
            id: "{{ id }}"
            subnetId: "{{ subnetId }}"
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

Edit a loadbalancer

```sql
UPDATE ovh.cloud_network.region_loadbalancing_loadbalancers
SET 
description = '{{ description }}',
flavor_id = '{{ flavor_id }}',
name = '{{ name }}'
WHERE 
load_balancer_id = '{{ load_balancer_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
flavor_id,
operation_id,
vip_network_id,
vip_subnet_id,
created_at,
floating_ip,
operating_status,
provisioning_status,
region,
updated_at,
vip_address;
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

Delete loadbalancer

```sql
DELETE FROM ovh.cloud_network.region_loadbalancing_loadbalancers
WHERE load_balancer_id = '{{ load_balancer_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="associate_floating_ip"
    values={[
        { label: 'associate_floating_ip', value: 'associate_floating_ip' },
        { label: 'floating_ip', value: 'floating_ip' },
        { label: 'log_url', value: 'log_url' }
    ]}
>
<TabItem value="associate_floating_ip">

Associate an existing floating IP to a loadbalancer

```sql
EXEC ovh.cloud_network.region_loadbalancing_loadbalancers.associate_floating_ip 
@loadBalancerId='{{ loadBalancerId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"floatingIpId": "{{ floatingIpId }}", 
"gateway": "{{ gateway }}", 
"ip": "{{ ip }}"
}'
;
```
</TabItem>
<TabItem value="floating_ip">

Create a floating IP and attach it to a loadbalancer

```sql
EXEC ovh.cloud_network.region_loadbalancing_loadbalancers.floating_ip 
@loadBalancerId='{{ loadBalancerId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"gateway": "{{ gateway }}", 
"ip": "{{ ip }}"
}'
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.cloud_network.region_loadbalancing_loadbalancers.log_url 
@loadBalancerId='{{ loadBalancerId }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
</Tabs>
