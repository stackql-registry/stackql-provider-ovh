--- 
title: loadbalancer_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - loadbalancer_configurations
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

Creates, updates, deletes, gets or lists a <code>loadbalancer_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loadbalancer_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.loadbalancer_configurations" /></td></tr>
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
    <td><CopyableCode code="backends" /></td>
    <td><code>array</code></td>
    <td>List of backends</td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>List of certificate ID</td>
</tr>
<tr>
    <td><CopyableCode code="frontends" /></td>
    <td><code>array</code></td>
    <td>List of frontends</td>
</tr>
<tr>
    <td><CopyableCode code="networking" /></td>
    <td><code>object</code></td>
    <td>networking configuration</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Identifier and version of the configuration</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A load balancer configuration

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
    <td><CopyableCode code="backends" /></td>
    <td><code>array</code></td>
    <td>List of backends</td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>List of certificate ID</td>
</tr>
<tr>
    <td><CopyableCode code="frontends" /></td>
    <td><code>array</code></td>
    <td>List of frontends</td>
</tr>
<tr>
    <td><CopyableCode code="networking" /></td>
    <td><code>object</code></td>
    <td>networking configuration</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Identifier and version of the configuration</td>
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
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a configuration (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List all versions of the configuration (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create a configuration (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-load_balancer_id"><code>load_balancer_id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a configuration (Beta version)</td>
</tr>
<tr>
    <td><a href="#apply"><CopyableCode code="apply" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Apply a configuration (Beta version)</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Version</td>
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

Get a configuration (Beta version)

```sql
SELECT
backends,
certificates,
frontends,
networking,
version
FROM ovh.cloud_network.loadbalancer_configurations
WHERE load_balancer_id = '{{ load_balancer_id }}' -- required
AND version = '{{ version }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List all versions of the configuration (Beta version)

```sql
SELECT
backends,
certificates,
frontends,
networking,
version
FROM ovh.cloud_network.loadbalancer_configurations
WHERE load_balancer_id = '{{ load_balancer_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a configuration (Beta version)

```sql
INSERT INTO ovh.cloud_network.loadbalancer_configurations (
backends,
certificates,
frontends,
networking,
load_balancer_id,
service_name
)
SELECT 
'{{ backends }}',
'{{ certificates }}',
'{{ frontends }}',
'{{ networking }}',
'{{ load_balancer_id }}',
'{{ service_name }}'
RETURNING
backends,
certificates,
frontends,
networking,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: loadbalancer_configurations
  props:
    - name: load_balancer_id
      value: "{{ load_balancer_id }}"
      description: Required parameter for the loadbalancer_configurations resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the loadbalancer_configurations resource.
    - name: backends
      description: |
        List of backends
      value:
        - balancer: "{{ balancer }}"
          name: "{{ name }}"
          proxyProtocol: "{{ proxyProtocol }}"
          servers: "{{ servers }}"
          sticky: {{ sticky }}
    - name: certificates
      value:
        - "{{ certificates }}"
      description: |
        List of certificate ID
    - name: frontends
      description: |
        List of frontends
      value:
        - backends: "{{ backends }}"
          mode: "{{ mode }}"
          name: "{{ name }}"
          port: {{ port }}
          portRanges: "{{ portRanges }}"
          ports: "{{ ports }}"
          tls: {{ tls }}
          whitelist: "{{ whitelist }}"
    - name: networking
      description: |
        networking configuration
      value:
        egress:
          id: "{{ id }}"
          kind: "{{ kind }}"
        ingress:
          kind: "{{ kind }}"
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

Delete a configuration (Beta version)

```sql
DELETE FROM ovh.cloud_network.loadbalancer_configurations
WHERE load_balancer_id = '{{ load_balancer_id }}' --required
AND version = '{{ version }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="apply"
    values={[
        { label: 'apply', value: 'apply' }
    ]}
>
<TabItem value="apply">

Apply a configuration (Beta version)

```sql
EXEC ovh.cloud_network.loadbalancer_configurations.apply 
@loadBalancerId='{{ loadBalancerId }}' --required, 
@version='{{ version }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
