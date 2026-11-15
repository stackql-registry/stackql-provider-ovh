--- 
title: region_loadbalancing_health_monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - region_loadbalancing_health_monitors
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

Creates, updates, deletes, gets or lists a <code>region_loadbalancing_health_monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_loadbalancing_health_monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_loadbalancing_health_monitors" /></td></tr>
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
    <td>The ID of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the pool (wire: poolId)</td>
</tr>
<tr>
    <td><CopyableCode code="delay" /></td>
    <td><code>integer</code></td>
    <td>Duration between sending probes to members, in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="http_configuration" /></td>
    <td><code>object</code></td>
    <td>Monitor HTTP configuration (wire: httpConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries" /></td>
    <td><code>integer</code></td>
    <td>Number of successful checks before changing the operating status of the member to ONLINE (wire: maxRetries)</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries_down" /></td>
    <td><code>integer</code></td>
    <td>Number of allowed check failures before changing the operating status of the member to ERROR (wire: maxRetriesDown)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_type" /></td>
    <td><code>string</code></td>
    <td>Type of the monitor (http, https, ping, sctp, tcp, tls-hello, udp-connect) (wire: monitorType)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>The operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the delay value</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

HealthMonitor

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
    <td>The ID of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the pool (wire: poolId)</td>
</tr>
<tr>
    <td><CopyableCode code="delay" /></td>
    <td><code>integer</code></td>
    <td>Duration between sending probes to members, in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="http_configuration" /></td>
    <td><code>object</code></td>
    <td>Monitor HTTP configuration (wire: httpConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries" /></td>
    <td><code>integer</code></td>
    <td>Number of successful checks before changing the operating status of the member to ONLINE (wire: maxRetries)</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries_down" /></td>
    <td><code>integer</code></td>
    <td>Number of allowed check failures before changing the operating status of the member to ERROR (wire: maxRetriesDown)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_type" /></td>
    <td><code>string</code></td>
    <td>Type of the monitor (http, https, ping, sctp, tcp, tls-hello, udp-connect) (wire: monitorType)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>The operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the delay value</td>
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
    <td><a href="#parameter-health_monitor_id"><code>health_monitor_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get details about a loadbalancer health monitor</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-pool_id"><code>pool_id</code></a></td>
    <td>List health monitors</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-delay"><code>delay</code></a>, <a href="#parameter-max_retries"><code>max_retries</code></a>, <a href="#parameter-monitor_type"><code>monitor_type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-timeout"><code>timeout</code></a></td>
    <td></td>
    <td>Create health monitor</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-health_monitor_id"><code>health_monitor_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a health monitor</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-health_monitor_id"><code>health_monitor_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete health monitor</td>
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
<tr id="parameter-health_monitor_id">
    <td><CopyableCode code="health_monitor_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Health monitor ID (wire: healthMonitorId)</td>
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
<tr id="parameter-pool_id">
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>Linked pool id (wire: poolId)</td>
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

Get details about a loadbalancer health monitor

```sql
SELECT
id,
name,
pool_id,
delay,
http_configuration,
max_retries,
max_retries_down,
monitor_type,
operating_status,
provisioning_status,
timeout
FROM ovh.cloud_network.region_loadbalancing_health_monitors
WHERE health_monitor_id = '{{ health_monitor_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List health monitors

```sql
SELECT
id,
name,
pool_id,
delay,
http_configuration,
max_retries,
max_retries_down,
monitor_type,
operating_status,
provisioning_status,
timeout
FROM ovh.cloud_network.region_loadbalancing_health_monitors
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND pool_id = '{{ pool_id }}'
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

Create health monitor

```sql
INSERT INTO ovh.cloud_network.region_loadbalancing_health_monitors (
delay,
http_configuration,
max_retries,
max_retries_down,
monitor_type,
name,
pool_id,
timeout,
region_name,
service_name
)
SELECT 
{{ delay }} /* required */,
'{{ http_configuration }}',
{{ max_retries }} /* required */,
{{ max_retries_down }},
'{{ monitor_type }}' /* required */,
'{{ name }}' /* required */,
'{{ pool_id }}' /* required */,
{{ timeout }} /* required */,
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
pool_id,
delay,
http_configuration,
max_retries,
max_retries_down,
monitor_type,
operating_status,
provisioning_status,
timeout
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_loadbalancing_health_monitors
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_loadbalancing_health_monitors resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_loadbalancing_health_monitors resource.
    - name: delay
      value: {{ delay }}
      description: |
        Duration between sending probes to members, in seconds
    - name: http_configuration
      description: |
        Monitor HTTP configuration
      value:
        domainName: "{{ domainName }}"
        expectedCodes: "{{ expectedCodes }}"
        httpMethod: "{{ httpMethod }}"
        httpVersion: "{{ httpVersion }}"
        urlPath: "{{ urlPath }}"
    - name: max_retries
      value: {{ max_retries }}
      description: |
        Number of successful checks before changing the operating status of the member to ONLINE
    - name: max_retries_down
      value: {{ max_retries_down }}
      description: |
        Number of allowed check failures before changing the operating status of the member to ERROR
    - name: monitor_type
      value: "{{ monitor_type }}"
      description: |
        Type of the monitor
      valid_values: ['http', 'https', 'ping', 'sctp', 'tcp', 'tls-hello', 'udp-connect']
    - name: name
      value: "{{ name }}"
      description: |
        The name of the resource
    - name: pool_id
      value: "{{ pool_id }}"
      description: |
        The ID of the pool
    - name: timeout
      value: {{ timeout }}
      description: |
        Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the delay value
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

Update a health monitor

```sql
UPDATE ovh.cloud_network.region_loadbalancing_health_monitors
SET 
delay = {{ delay }},
http_configuration = '{{ http_configuration }}',
max_retries = {{ max_retries }},
max_retries_down = {{ max_retries_down }},
name = '{{ name }}',
timeout = {{ timeout }}
WHERE 
health_monitor_id = '{{ health_monitor_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
pool_id,
delay,
http_configuration,
max_retries,
max_retries_down,
monitor_type,
operating_status,
provisioning_status,
timeout;
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

Delete health monitor

```sql
DELETE FROM ovh.cloud_network.region_loadbalancing_health_monitors
WHERE health_monitor_id = '{{ health_monitor_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
