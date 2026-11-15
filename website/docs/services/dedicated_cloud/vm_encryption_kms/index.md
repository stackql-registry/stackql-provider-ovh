--- 
title: vm_encryption_kms
hide_title: false
hide_table_of_contents: false
keywords:
  - vm_encryption_kms
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

Creates, updates, deletes, gets or lists a <code>vm_encryption_kms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vm_encryption_kms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.vm_encryption_kms" /></td></tr>
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
    <td><CopyableCode code="kms_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the VM Encryption KMS (wire: kmsId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of your option access network</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the remote service (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_tcp_port" /></td>
    <td><code>integer</code></td>
    <td>VM Encryption KMS TCP port (wire: kmsTcpPort)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_thumbprint" /></td>
    <td><code>string</code></td>
    <td>SSL thumbprint of the remote service (wire: sslThumbprint)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the option (creating, deleting, delivered, error, toCreate, toDelete, toUpdate, unknown, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Virtual machine encryption KMS server

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
    <td><CopyableCode code="kms_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the VM Encryption KMS (wire: kmsId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of your option access network</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the remote service (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_tcp_port" /></td>
    <td><code>integer</code></td>
    <td>VM Encryption KMS TCP port (wire: kmsTcpPort)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_thumbprint" /></td>
    <td><code>string</code></td>
    <td>SSL thumbprint of the remote service (wire: sslThumbprint)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the option (creating, deleting, delivered, error, toCreate, toDelete, toUpdate, unknown, updating)</td>
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
    <td><a href="#parameter-kms_id"><code>kms_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a KMS server. Returns the KMS server: IP address, TCP port, SSL thumbprint, description and state.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List KMS servers</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ssl_thumbprint"><code>ssl_thumbprint</code></a></td>
    <td></td>
    <td>Create a KMS server. Registers a KMS server by IP address and SSL thumbprint. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-kms_id"><code>kms_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a KMS server</td>
</tr>
<tr>
    <td><a href="#change_properties"><CopyableCode code="change_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kmsId"><code>kmsId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-sslThumbprint"><code>sslThumbprint</code></a></td>
    <td></td>
    <td>Update a KMS server. Updates the SSL thumbprint or the description of the KMS server. Returns a task to track progress.</td>
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
<tr id="parameter-kmsId">
    <td><CopyableCode code="kmsId" /></td>
    <td><code>integer</code></td>
    <td>Id of the VM Encryption KMS</td>
</tr>
<tr id="parameter-kms_id">
    <td><CopyableCode code="kms_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the VM Encryption KMS (wire: kmsId)</td>
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

Get a KMS server. Returns the KMS server: IP address, TCP port, SSL thumbprint, description and state.

```sql
SELECT
kms_id,
description,
ip,
kms_tcp_port,
ssl_thumbprint,
state
FROM ovh.dedicated_cloud.vm_encryption_kms
WHERE kms_id = '{{ kms_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List KMS servers

```sql
SELECT
kms_id,
description,
ip,
kms_tcp_port,
ssl_thumbprint,
state
FROM ovh.dedicated_cloud.vm_encryption_kms
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

Create a KMS server. Registers a KMS server by IP address and SSL thumbprint. Returns a task to track progress.

```sql
INSERT INTO ovh.dedicated_cloud.vm_encryption_kms (
description,
ip,
ssl_thumbprint,
service_name
)
SELECT 
'{{ description }}',
'{{ ip }}' /* required */,
'{{ ssl_thumbprint }}' /* required */,
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
- name: vm_encryption_kms
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the vm_encryption_kms resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of your option access network
    - name: ip
      value: "{{ ip }}"
      description: |
        IP address of the remote service, e.g. 123.100.200.0
    - name: ssl_thumbprint
      value: "{{ ssl_thumbprint }}"
      description: |
        SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F
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

Delete a KMS server

```sql
DELETE FROM ovh.dedicated_cloud.vm_encryption_kms
WHERE kms_id = '{{ kms_id }}' --required
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

Update a KMS server. Updates the SSL thumbprint or the description of the KMS server. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.vm_encryption_kms.change_properties 
@kmsId='{{ kmsId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"description": "{{ description }}", 
"sslThumbprint": "{{ sslThumbprint }}"
}'
;
```
</TabItem>
</Tabs>
