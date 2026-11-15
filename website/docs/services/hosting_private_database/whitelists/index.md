--- 
title: whitelists
hide_title: false
hide_table_of_contents: false
keywords:
  - whitelists
  - hosting_private_database
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

Creates, updates, deletes, gets or lists a <code>whitelists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whitelists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_private_database.whitelists" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Custom name for your allowed IP</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The id of the task working on this object (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of this allowed IP (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>The IP allowed to access your Web Cloud Database (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update date of this allowed IP (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>boolean</code></td>
    <td>Authorize this IP to access service port</td>
</tr>
<tr>
    <td><CopyableCode code="sftp" /></td>
    <td><code>boolean</code></td>
    <td>Authorize this IP to access sftp port</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Allowed IP status (created, creating, deleting, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Allowed IP

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Custom name for your allowed IP</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The id of the task working on this object (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of this allowed IP (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>The IP allowed to access your Web Cloud Database (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update date of this allowed IP (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>boolean</code></td>
    <td>Authorize this IP to access service port</td>
</tr>
<tr>
    <td><CopyableCode code="sftp" /></td>
    <td><code>boolean</code></td>
    <td>Authorize this IP to access sftp port</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Allowed IP status (created, creating, deleting, updating)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the name and status of the allowed IP, and whether it can access the service port and the SFTP port.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-sftp"><code>sftp</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IPs and IP blocks allowed to access the service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Allows an IP or IP block to access the service port, the SFTP port, or both. Returns a task to follow the change.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the name of the allowed IP and its access to the service port and the SFTP port.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Removes the IP from the allowed list, so it can no longer access the service.</td>
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
    <td><code>string (ipv4-block)</code></td>
    <td>Ip</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string</code></td>
    <td>Filter the value of ip property (contains or equals)</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of service property</td>
</tr>
<tr id="parameter-sftp">
    <td><CopyableCode code="sftp" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of sftp property</td>
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

Returns the name and status of the allowed IP, and whether it can access the service port and the SFTP port.

```sql
SELECT
name,
task_id,
creation_date,
ip,
last_update,
service,
sftp,
status
FROM ovh.hosting_private_database.whitelists
WHERE ip = '{{ ip }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IPs and IP blocks allowed to access the service.

```sql
SELECT
name,
task_id,
creation_date,
ip,
last_update,
service,
sftp,
status
FROM ovh.hosting_private_database.whitelists
WHERE service_name = '{{ service_name }}' -- required
AND ip = '{{ ip }}'
AND service = '{{ service }}'
AND sftp = '{{ sftp }}'
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

Allows an IP or IP block to access the service port, the SFTP port, or both. Returns a task to follow the change.

```sql
INSERT INTO ovh.hosting_private_database.whitelists (
ip,
name,
service,
sftp,
service_name
)
SELECT 
'{{ ip }}' /* required */,
'{{ name }}',
{{ service }},
{{ sftp }},
'{{ service_name }}'
RETURNING
id,
dump_id,
database_name,
user_name,
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
- name: whitelists
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the whitelists resource.
    - name: ip
      value: "{{ ip }}"
      description: |
        The IP allowed to access your Web Cloud Database
    - name: name
      value: "{{ name }}"
      description: |
        Custom name for your allowed IP
    - name: service
      value: {{ service }}
      description: |
        Authorize this IP to access service port
    - name: sftp
      value: {{ sftp }}
      description: |
        Authorize this IP to access sftp port
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

Updates the name of the allowed IP and its access to the service port and the SFTP port.

```sql
UPDATE ovh.hosting_private_database.whitelists
SET 
name = '{{ name }}',
service = {{ service }},
sftp = {{ sftp }}
WHERE 
ip = '{{ ip }}' --required
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

Removes the IP from the allowed list, so it can no longer access the service.

```sql
DELETE FROM ovh.hosting_private_database.whitelists
WHERE ip = '{{ ip }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
