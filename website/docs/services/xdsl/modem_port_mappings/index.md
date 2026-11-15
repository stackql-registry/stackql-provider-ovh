--- 
title: modem_port_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - modem_port_mappings
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

Creates, updates, deletes, gets or lists a <code>modem_port_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modem_port_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modem_port_mappings" /></td></tr>
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
    <td>ID of the port mapping entry</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the port mapping entry</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_remote_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>An ip which will access to the defined rule. Default : no restriction applied (example: 192.0.2.0) (wire: allowedRemoteIp)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Port Mapping</td>
</tr>
<tr>
    <td><CopyableCode code="external_port_end" /></td>
    <td><code>integer</code></td>
    <td>The last port of the interval on the External Client that will get the connections (wire: externalPortEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="external_port_start" /></td>
    <td><code>integer</code></td>
    <td>External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005 (wire: externalPortStart)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_client" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: internalClient)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_port" /></td>
    <td><code>integer</code></td>
    <td>The port on the Internal Client that will get the connections (wire: internalPort)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_port_end" /></td>
    <td><code>integer</code></td>
    <td>The last port of the interval on the Internal Client that will get the connections (wire: internalPortEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Type of protocol for the Port Mapping (TCP, UDP)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Port Mappings

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
    <td>ID of the port mapping entry</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the port mapping entry</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_remote_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>An ip which will access to the defined rule. Default : no restriction applied (example: 192.0.2.0) (wire: allowedRemoteIp)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Port Mapping</td>
</tr>
<tr>
    <td><CopyableCode code="external_port_end" /></td>
    <td><code>integer</code></td>
    <td>The last port of the interval on the External Client that will get the connections (wire: externalPortEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="external_port_start" /></td>
    <td><code>integer</code></td>
    <td>External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005 (wire: externalPortStart)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_client" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: internalClient)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_port" /></td>
    <td><code>integer</code></td>
    <td>The port on the Internal Client that will get the connections (wire: internalPort)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_port_end" /></td>
    <td><code>integer</code></td>
    <td>The last port of the interval on the Internal Client that will get the connections (wire: internalPortEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Type of protocol for the Port Mapping (TCP, UDP)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns a port mapping rule: its protocol, external and internal ports, internal client, allowed remote IP and description.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the port mapping rules of the modem of the access.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-external_port_start"><code>external_port_start</code></a>, <a href="#parameter-internal_client"><code>internal_client</code></a>, <a href="#parameter-internal_port"><code>internal_port</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td></td>
    <td>Adds a rule that forwards an external port range to a port of an internal client, optionally restricted to one remote IP. Returns the created rule.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the protocol, ports, internal client, allowed remote IP or description of a port mapping rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Removes the port mapping rule from the modem. Returns the task that performs the change.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns a port mapping rule: its protocol, external and internal ports, internal client, allowed remote IP and description.

```sql
SELECT
id,
name,
task_id,
allowed_remote_ip,
description,
external_port_end,
external_port_start,
internal_client,
internal_port,
internal_port_end,
protocol
FROM ovh.xdsl.modem_port_mappings
WHERE name = '{{ name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the port mapping rules of the modem of the access.

```sql
SELECT
id,
name,
task_id,
allowed_remote_ip,
description,
external_port_end,
external_port_start,
internal_client,
internal_port,
internal_port_end,
protocol
FROM ovh.xdsl.modem_port_mappings
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

Adds a rule that forwards an external port range to a port of an internal client, optionally restricted to one remote IP. Returns the created rule.

```sql
INSERT INTO ovh.xdsl.modem_port_mappings (
allowed_remote_ip,
description,
external_port_end,
external_port_start,
internal_client,
internal_port,
internal_port_end,
name,
protocol,
service_name
)
SELECT 
'{{ allowed_remote_ip }}',
'{{ description }}',
{{ external_port_end }},
{{ external_port_start }} /* required */,
'{{ internal_client }}' /* required */,
{{ internal_port }} /* required */,
{{ internal_port_end }},
'{{ name }}' /* required */,
'{{ protocol }}' /* required */,
'{{ service_name }}'
RETURNING
id,
name,
task_id,
allowed_remote_ip,
description,
external_port_end,
external_port_start,
internal_client,
internal_port,
internal_port_end,
protocol
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: modem_port_mappings
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the modem_port_mappings resource.
    - name: allowed_remote_ip
      value: "{{ allowed_remote_ip }}"
      description: |
        IPv4 address (e.g., 192.0.2.0)
    - name: description
      value: "{{ description }}"
      description: |
        Description of the Port Mapping
    - name: external_port_end
      value: {{ external_port_end }}
      description: |
        The last port of the interval on the External Client that will get the connections
    - name: external_port_start
      value: {{ external_port_start }}
      description: |
        External Port that the modem will listen on
    - name: internal_client
      value: "{{ internal_client }}"
      description: |
        IP address (e.g., 192.0.2.0)
    - name: internal_port
      value: {{ internal_port }}
      description: |
        The port on the Internal Client that will get the connections
    - name: internal_port_end
      value: {{ internal_port_end }}
      description: |
        The last port of the interval on the Internal Client that will get the connections
    - name: name
      value: "{{ name }}"
      description: |
        Name of the port mapping entry
    - name: protocol
      value: "{{ protocol }}"
      description: |
        Type of protocol for the Port Mapping
      valid_values: ['TCP', 'UDP']
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

Changes the protocol, ports, internal client, allowed remote IP or description of a port mapping rule.

```sql
UPDATE ovh.xdsl.modem_port_mappings
SET 
allowed_remote_ip = '{{ allowed_remote_ip }}',
description = '{{ description }}',
external_port_end = {{ external_port_end }},
external_port_start = {{ external_port_start }},
internal_client = '{{ internal_client }}',
internal_port = {{ internal_port }},
internal_port_end = {{ internal_port_end }},
protocol = '{{ protocol }}'
WHERE 
name = '{{ name }}' --required
AND service_name = '{{ service_name }}' --required;
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

Removes the port mapping rule from the modem. Returns the task that performs the change.

```sql
DELETE FROM ovh.xdsl.modem_port_mappings
WHERE name = '{{ name }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
