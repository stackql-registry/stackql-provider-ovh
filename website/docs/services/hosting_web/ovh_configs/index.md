--- 
title: ovh_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_configs
  - hosting_web
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

Creates, updates, deletes, gets or lists an <code>ovh_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.ovh_configs" /></td></tr>
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
    <td>Configuration's id</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this configuration (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_name" /></td>
    <td><code>string</code></td>
    <td>Version of engine you want (php, phpcgi) (wire: engineName)</td>
</tr>
<tr>
    <td><CopyableCode code="container" /></td>
    <td><code>string</code></td>
    <td>Container to run this website</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>When ovhconfig was created, or found for the first time, on the hosting servers (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>Name of engine you want (4.4, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5, AUTO) (wire: engineVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment configuration you want (development, production)</td>
</tr>
<tr>
    <td><CopyableCode code="file_exist" /></td>
    <td><code>boolean</code></td>
    <td>If .ovhConfig exists (wire: fileExist)</td>
</tr>
<tr>
    <td><CopyableCode code="historical" /></td>
    <td><code>boolean</code></td>
    <td>If this configuration is an old configuration</td>
</tr>
<tr>
    <td><CopyableCode code="http_firewall" /></td>
    <td><code>string</code></td>
    <td>Configuration you want for http firewall (none, security) (wire: httpFirewall)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Config path, relative to your home directory</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The configuration status (created, rollbacking, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Virtual service

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
    <td>Configuration's id</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this configuration (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_name" /></td>
    <td><code>string</code></td>
    <td>Version of engine you want (php, phpcgi) (wire: engineName)</td>
</tr>
<tr>
    <td><CopyableCode code="container" /></td>
    <td><code>string</code></td>
    <td>Container to run this website</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>When ovhconfig was created, or found for the first time, on the hosting servers (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>Name of engine you want (4.4, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5, AUTO) (wire: engineVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment configuration you want (development, production)</td>
</tr>
<tr>
    <td><CopyableCode code="file_exist" /></td>
    <td><code>boolean</code></td>
    <td>If .ovhConfig exists (wire: fileExist)</td>
</tr>
<tr>
    <td><CopyableCode code="historical" /></td>
    <td><code>boolean</code></td>
    <td>If this configuration is an old configuration</td>
</tr>
<tr>
    <td><CopyableCode code="http_firewall" /></td>
    <td><code>string</code></td>
    <td>Configuration you want for http firewall (none, security) (wire: httpFirewall)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Config path, relative to your home directory</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The configuration status (created, rollbacking, updating)</td>
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
    <td>Get a .ovhconfig file. Returns the engine, version, container, environment, HTTP firewall and status of the configuration of a folder.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-historical"><code>historical</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List .ovhconfig files. Returns the IDs of the .ovhconfig configurations of the hosting. Filter them by path, or by historical to include old ones.</td>
</tr>
<tr>
    <td><a href="#change_configuration"><CopyableCode code="change_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change a .ovhconfig file. Applies a new engine, version, container, environment or HTTP firewall setting to the folder, and returns the task.</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-rollbackId"><code>rollbackId</code></a></td>
    <td></td>
    <td>Roll back a .ovhconfig file. Restores the old configuration given by rollbackId and returns the task.</td>
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
    <td>Configuration's id</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
</tr>
<tr id="parameter-historical">
    <td><CopyableCode code="historical" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of historical property (=)</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Filter the value of path property (like)</td>
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

Get a .ovhconfig file. Returns the engine, version, container, environment, HTTP firewall and status of the configuration of a folder.

```sql
SELECT
id,
task_id,
engine_name,
container,
creation_date,
engine_version,
environment,
file_exist,
historical,
http_firewall,
path,
status
FROM ovh.hosting_web.ovh_configs
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List .ovhconfig files. Returns the IDs of the .ovhconfig configurations of the hosting. Filter them by path, or by historical to include old ones.

```sql
SELECT
id,
task_id,
engine_name,
container,
creation_date,
engine_version,
environment,
file_exist,
historical,
http_firewall,
path,
status
FROM ovh.hosting_web.ovh_configs
WHERE service_name = '{{ service_name }}' -- required
AND historical = '{{ historical }}'
AND path = '{{ path }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_configuration"
    values={[
        { label: 'change_configuration', value: 'change_configuration' },
        { label: 'rollback', value: 'rollback' }
    ]}
>
<TabItem value="change_configuration">

Change a .ovhconfig file. Applies a new engine, version, container, environment or HTTP firewall setting to the folder, and returns the task.

```sql
EXEC ovh.hosting_web.ovh_configs.change_configuration 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"container": "{{ container }}", 
"engineName": "{{ engineName }}", 
"engineVersion": "{{ engineVersion }}", 
"environment": "{{ environment }}", 
"httpFirewall": "{{ httpFirewall }}"
}'
;
```
</TabItem>
<TabItem value="rollback">

Roll back a .ovhconfig file. Restores the old configuration given by rollbackId and returns the task.

```sql
EXEC ovh.hosting_web.ovh_configs.rollback 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"rollbackId": {{ rollbackId }}
}'
;
```
</TabItem>
</Tabs>
