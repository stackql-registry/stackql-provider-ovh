--- 
title: loadbalancers
hide_title: false
hide_table_of_contents: false
keywords:
  - loadbalancers
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

Creates, updates, deletes, gets or lists a <code>loadbalancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loadbalancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.loadbalancers" /></td></tr>
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
    <td>ID of the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>Address to reach the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Information about version of the configuration</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date and time of the load balancer (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="egress_address" /></td>
    <td><code>object</code></td>
    <td>IPs used by the load balancer to contact backend's servers (wire: egressAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="networking" /></td>
    <td><code>object</code></td>
    <td>Networking definition</td>
</tr>
<tr>
    <td><CopyableCode code="openstack_region" /></td>
    <td><code>string</code></td>
    <td>Openstack region where the load balancer is hosted (wire: openstackRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the load balancer is hosted</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>Size of the load balancer (L, M, S)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of a load balancer (APPLYING, CREATED, DELETING, ERROR, FROZEN, RUNNING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A load balancer to handle workload

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
    <td>ID of the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>Address to reach the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Information about version of the configuration</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date and time of the load balancer (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the load balancer</td>
</tr>
<tr>
    <td><CopyableCode code="egress_address" /></td>
    <td><code>object</code></td>
    <td>IPs used by the load balancer to contact backend's servers (wire: egressAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="networking" /></td>
    <td><code>object</code></td>
    <td>Networking definition</td>
</tr>
<tr>
    <td><CopyableCode code="openstack_region" /></td>
    <td><code>string</code></td>
    <td>Openstack region where the load balancer is hosted (wire: openstackRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the load balancer is hosted</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>Size of the load balancer (L, M, S)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of a load balancer (APPLYING, CREATED, DELETING, ERROR, FROZEN, RUNNING)</td>
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
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a load balancer (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List all load balancer for a tenant (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a load balancer (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a load balancer (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a load balancer (Beta version)</td>
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
<tr id="parameter-load_balancer_id">
    <td><CopyableCode code="load_balancer_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Load balancer ID (wire: loadBalancerId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get a load balancer (Beta version)

```sql
SELECT
id,
name,
address,
configuration,
created_at,
description,
egress_address,
networking,
openstack_region,
region,
size,
status
FROM ovh.cloud_network.loadbalancers
WHERE load_balancer_id = '{{ load_balancer_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List all load balancer for a tenant (Beta version)

```sql
SELECT
id,
name,
address,
configuration,
created_at,
description,
egress_address,
networking,
openstack_region,
region,
size,
status
FROM ovh.cloud_network.loadbalancers
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a load balancer (Beta version)

```sql
INSERT INTO ovh.cloud_network.loadbalancers (
description,
name,
networking,
openstack_region,
region,
size,
service_name
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ networking }}',
'{{ openstack_region }}',
'{{ region }}' /* required */,
'{{ size }}',
'{{ service_name }}'
RETURNING
id,
name,
address,
configuration,
created_at,
description,
egress_address,
networking,
openstack_region,
region,
size,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: loadbalancers
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the loadbalancers resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the load balancer
    - name: name
      value: "{{ name }}"
      description: |
        Name of the load balancer
    - name: networking
      description: |
        Networking definition
      value:
        egress:
          kind: "{{ kind }}"
        ingress:
          kind: "{{ kind }}"
    - name: openstack_region
      value: "{{ openstack_region }}"
      description: |
        Openstack Region where the load balancer is hosted
    - name: region
      value: "{{ region }}"
      description: |
        Region where the load balancer is hosted
    - name: size
      value: "{{ size }}"
      description: |
        Size of the load balancer
      valid_values: ['L', 'M', 'S']
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

Update a load balancer (Beta version)

```sql
UPDATE ovh.cloud_network.loadbalancers
SET 
description = '{{ description }}',
name = '{{ name }}',
size = '{{ size }}'
WHERE 
load_balancer_id = '{{ load_balancer_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
address,
configuration,
created_at,
description,
egress_address,
networking,
openstack_region,
region,
size,
status;
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

Delete a load balancer (Beta version)

```sql
DELETE FROM ovh.cloud_network.loadbalancers
WHERE load_balancer_id = '{{ load_balancer_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
