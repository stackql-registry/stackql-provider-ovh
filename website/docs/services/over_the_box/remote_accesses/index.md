--- 
title: remote_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - remote_accesses
  - over_the_box
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

Creates, updates, deletes, gets or lists a <code>remote_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remote_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.over_the_box.remote_accesses" /></td></tr>
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
    <td><CopyableCode code="remote_access_id" /></td>
    <td><code>string</code></td>
    <td>The id of the remote access (wire: remoteAccessId)</td>
</tr>
<tr>
    <td><CopyableCode code="accepted" /></td>
    <td><code>boolean</code></td>
    <td>If the remote access was accepted by the remote user</td>
</tr>
<tr>
    <td><CopyableCode code="ask_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of the remote access demand (wire: askDate)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_by" /></td>
    <td><code>string</code></td>
    <td>The user that authorized the remote access (wire: authorizedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_infos" /></td>
    <td><code>object</code></td>
    <td>All the infos needed to connect yourself to your OTB (wire: connectionInfos)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the remote access was deleted (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="docker_version" /></td>
    <td><code>string</code></td>
    <td>Info about the docker version (wire: dockerVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the remote access will be automatically deleted (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="exposed_port" /></td>
    <td><code>integer</code></td>
    <td>The device's port which will be exposed (wire: exposedPort)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_user_infos" /></td>
    <td><code>object</code></td>
    <td>Infos about the remote user (wire: remoteUserInfos)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the remote access (active, creating, deleted, deleting, pendingValidation, recreating, toDelete, toRecreate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

If authorized, a remote access will expose a port, allowing an access to the device remotely

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
    <td><CopyableCode code="remote_access_id" /></td>
    <td><code>string</code></td>
    <td>The id of the remote access (wire: remoteAccessId)</td>
</tr>
<tr>
    <td><CopyableCode code="accepted" /></td>
    <td><code>boolean</code></td>
    <td>If the remote access was accepted by the remote user</td>
</tr>
<tr>
    <td><CopyableCode code="ask_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of the remote access demand (wire: askDate)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_by" /></td>
    <td><code>string</code></td>
    <td>The user that authorized the remote access (wire: authorizedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_infos" /></td>
    <td><code>object</code></td>
    <td>All the infos needed to connect yourself to your OTB (wire: connectionInfos)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the remote access was deleted (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="docker_version" /></td>
    <td><code>string</code></td>
    <td>Info about the docker version (wire: dockerVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the remote access will be automatically deleted (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="exposed_port" /></td>
    <td><code>integer</code></td>
    <td>The device's port which will be exposed (wire: exposedPort)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_user_infos" /></td>
    <td><code>object</code></td>
    <td>Infos about the remote user (wire: remoteUserInfos)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the remote access (active, creating, deleted, deleting, pendingValidation, recreating, toDelete, toRecreate)</td>
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
    <td><a href="#parameter-remote_access_id"><code>remote_access_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a remote access of an OverTheBox service. Returns the exposed port, status, acceptance, connection information, the user who authorized it and its expiration date.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List the remote accesses of an OverTheBox service. Returns the IDs of the remote accesses created to reach the device of the service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-exposed_port"><code>exposed_port</code></a></td>
    <td></td>
    <td>Create a remote access on an OverTheBox service. Exposes a port of the device for a remote user, until the expiration date (one day by default), from an allowed IP block.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-remote_access_id"><code>remote_access_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a remote access of an OverTheBox service. Removes the remote access, and the device port is no longer exposed.</td>
</tr>
<tr>
    <td><a href="#authorize"><CopyableCode code="authorize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-remoteAccessId"><code>remoteAccessId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Authorize a remote access of an OverTheBox service. Allows the remote access, so that the device exposes its port to the remote user.</td>
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
<tr id="parameter-remoteAccessId">
    <td><CopyableCode code="remoteAccessId" /></td>
    <td><code>string</code></td>
    <td>The id of the remote access</td>
</tr>
<tr id="parameter-remote_access_id">
    <td><CopyableCode code="remote_access_id" /></td>
    <td><code>string</code></td>
    <td>The id of the remote access (wire: remoteAccessId)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your overTheBox offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your overTheBox offer (wire: serviceName)</td>
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

Get a remote access of an OverTheBox service. Returns the exposed port, status, acceptance, connection information, the user who authorized it and its expiration date.

```sql
SELECT
remote_access_id,
accepted,
ask_date,
authorized_by,
connection_infos,
deleted_at,
docker_version,
expiration_date,
exposed_port,
remote_user_infos,
status
FROM ovh.over_the_box.remote_accesses
WHERE remote_access_id = '{{ remote_access_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List the remote accesses of an OverTheBox service. Returns the IDs of the remote accesses created to reach the device of the service.

```sql
SELECT
remote_access_id,
accepted,
ask_date,
authorized_by,
connection_infos,
deleted_at,
docker_version,
expiration_date,
exposed_port,
remote_user_infos,
status
FROM ovh.over_the_box.remote_accesses
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

Create a remote access on an OverTheBox service. Exposes a port of the device for a remote user, until the expiration date (one day by default), from an allowed IP block.

```sql
INSERT INTO ovh.over_the_box.remote_accesses (
allowed_ip,
expiration_date,
exposed_port,
public_key,
service_name
)
SELECT 
'{{ allowed_ip }}',
'{{ expiration_date }}',
{{ exposed_port }} /* required */,
'{{ public_key }}',
'{{ service_name }}'
RETURNING
remote_access_id,
accepted,
ask_date,
authorized_by,
connection_infos,
deleted_at,
docker_version,
expiration_date,
exposed_port,
remote_user_infos,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: remote_accesses
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the remote_accesses resource.
    - name: allowed_ip
      value: "{{ allowed_ip }}"
      description: |
        IP block from which the remote access will be allowed (the default value is the IP from which the call is made)
    - name: expiration_date
      value: "{{ expiration_date }}"
      description: |
        The expirationDate of the remote access (default 1 day)
    - name: exposed_port
      value: {{ exposed_port }}
      description: |
        The port that the device will expose
    - name: public_key
      value: "{{ public_key }}"
      description: |
        The remote user public key authorized on the device (for SSH purpose)
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

Delete a remote access of an OverTheBox service. Removes the remote access, and the device port is no longer exposed.

```sql
DELETE FROM ovh.over_the_box.remote_accesses
WHERE remote_access_id = '{{ remote_access_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="authorize"
    values={[
        { label: 'authorize', value: 'authorize' }
    ]}
>
<TabItem value="authorize">

Authorize a remote access of an OverTheBox service. Allows the remote access, so that the device exposes its port to the remote user.

```sql
EXEC ovh.over_the_box.remote_accesses.authorize 
@remoteAccessId='{{ remoteAccessId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
