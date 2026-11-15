--- 
title: service_receive_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - service_receive_connectors
  - email_exchange
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

Creates, updates, deletes, gets or lists a <code>service_receive_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_receive_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_receive_connectors" /></td></tr>
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
    <td>Id of this receive connector</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of your receive connector, in 255 characters at most</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the default receive connector owned by Exchange. Read-only: only its status can be changed, and it cannot be deleted</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the receive connector is enabled</td>
</tr>
<tr>
    <td><CopyableCode code="max_message_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum message size to state, in megabytes. (wire: maxMessageSize)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_ip_ranges" /></td>
    <td><code>array</code></td>
    <td>List of remote IP entries, replacing the stored list as a whole. Each entry is a single IP address, a CIDR network, or an inclusive 'start-end' range, in IPv4 or IPv6, and cannot be already declared by another receive connector of the service. The entries are joined by commas in 255 characters at most (wire: remoteIpRanges)</td>
</tr>
<tr>
    <td><CopyableCode code="require_tls" /></td>
    <td><code>boolean</code></td>
    <td>All messages received through this connector must be transmitted using TLS (wire: requireTls)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange Receive Connector

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
    <td>Id of this receive connector</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of your receive connector, in 255 characters at most</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the default receive connector owned by Exchange. Read-only: only its status can be changed, and it cannot be deleted</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the receive connector is enabled</td>
</tr>
<tr>
    <td><CopyableCode code="max_message_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum message size to state, in megabytes. (wire: maxMessageSize)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_ip_ranges" /></td>
    <td><code>array</code></td>
    <td>List of remote IP entries, replacing the stored list as a whole. Each entry is a single IP address, a CIDR network, or an inclusive 'start-end' range, in IPv4 or IPv6, and cannot be already declared by another receive connector of the service. The entries are joined by commas in 255 characters at most (wire: remoteIpRanges)</td>
</tr>
<tr>
    <td><CopyableCode code="require_tls" /></td>
    <td><code>boolean</code></td>
    <td>All messages received through this connector must be transmitted using TLS (wire: requireTls)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Returns the name, status, remote IP ranges, maximum message size and TLS requirement of the receive connector, and whether it is the default one.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the receive connectors of the service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-remote_ip_ranges"><code>remote_ip_ranges</code></a>, <a href="#parameter-require_tls"><code>require_tls</code></a></td>
    <td></td>
    <td>Creates a receive connector for the senders in `remoteIpRanges` and returns the task. A remote IP entry already declared by another receive connector of the service is refused. The connector is disabled unless `enabled` is true.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Updates only the given properties and returns the task: the others keep their value, and an omitted `enabled` leaves the status unchanged. At least one property must be given. The default receive connector accepts `enabled` only.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-enable_default_receive_connector"><code>enable_default_receive_connector</code></a></td>
    <td>Deletes the receive connector and returns the task. The default receive connector cannot be deleted. When the last non-default connector is deleted, the default one is enabled again unless `enableDefaultReceiveConnector` is false.</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-maxMessageSize"><code>maxMessageSize</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-remoteIpRanges"><code>remoteIpRanges</code></a>, <a href="#parameter-requireTls"><code>requireTls</code></a></td>
    <td></td>
    <td>Replaces the whole configuration of the receive connector and returns the task. `name`, `remoteIpRanges`, `requireTls` and `enabled` are all required: use PATCH to change only some of them. The default receive connector accepts `enabled` only, so it always refuses a PUT.</td>
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
<tr id="parameter-exchangeService">
    <td><CopyableCode code="exchangeService" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service</td>
</tr>
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-organizationName">
    <td><CopyableCode code="organizationName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-enable_default_receive_connector">
    <td><CopyableCode code="enable_default_receive_connector" /></td>
    <td><code>boolean</code></td>
    <td>When the deleted connector is the last non-default connector of the service, re-enable the default receive connector once it is removed. Defaults to true (wire: enableDefaultReceiveConnector)</td>
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

Returns the name, status, remote IP ranges, maximum message size and TLS requirement of the receive connector, and whether it is the default one.

```sql
SELECT
id,
name,
default,
enabled,
max_message_size,
remote_ip_ranges,
require_tls
FROM ovh.email_exchange.service_receive_connectors
WHERE exchange_service = '{{ exchange_service }}' -- required
AND id = '{{ id }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the receive connectors of the service.

```sql
SELECT
id,
name,
default,
enabled,
max_message_size,
remote_ip_ranges,
require_tls
FROM ovh.email_exchange.service_receive_connectors
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
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

Creates a receive connector for the senders in `remoteIpRanges` and returns the task. A remote IP entry already declared by another receive connector of the service is refused. The connector is disabled unless `enabled` is true.

```sql
INSERT INTO ovh.email_exchange.service_receive_connectors (
enabled,
max_message_size,
name,
remote_ip_ranges,
require_tls,
exchange_service,
organization_name
)
SELECT 
{{ enabled }},
{{ max_message_size }},
'{{ name }}' /* required */,
'{{ remote_ip_ranges }}' /* required */,
{{ require_tls }} /* required */,
'{{ exchange_service }}',
'{{ organization_name }}'
RETURNING
id,
completed_at,
created_at,
function,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_receive_connectors
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_receive_connectors resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_receive_connectors resource.
    - name: enabled
      value: {{ enabled }}
      description: |
        Whether the receive connector must be enabled. Defaults to false
    - name: max_message_size
      value: {{ max_message_size }}
      description: |
        The maximum message size to state, in megabytes.
    - name: name
      value: "{{ name }}"
      description: |
        Name of your receive connector, in 255 characters at most
    - name: remote_ip_ranges
      value:
        - "{{ remote_ip_ranges }}"
      description: |
        List of remote IP entries. Each entry is a single IP address, a CIDR network, or an inclusive 'start-end' range, in IPv4 or IPv6, and cannot be already declared by another receive connector of the service. The entries are joined by commas in 255 characters at most
    - name: require_tls
      value: {{ require_tls }}
      description: |
        All messages received through this connector must be transmitted using TLS
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

Updates only the given properties and returns the task: the others keep their value, and an omitted `enabled` leaves the status unchanged. At least one property must be given. The default receive connector accepts `enabled` only.

```sql
UPDATE ovh.email_exchange.service_receive_connectors
SET 
enabled = {{ enabled }},
max_message_size = {{ max_message_size }},
name = '{{ name }}',
remote_ip_ranges = '{{ remote_ip_ranges }}',
require_tls = {{ require_tls }}
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND id = '{{ id }}' --required
AND organization_name = '{{ organization_name }}' --required
RETURNING
id,
completed_at,
created_at,
function,
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

Deletes the receive connector and returns the task. The default receive connector cannot be deleted. When the last non-default connector is deleted, the default one is enabled again unless `enableDefaultReceiveConnector` is false.

```sql
DELETE FROM ovh.email_exchange.service_receive_connectors
WHERE exchange_service = '{{ exchange_service }}' --required
AND id = '{{ id }}' --required
AND organization_name = '{{ organization_name }}' --required
AND enable_default_receive_connector = '{{ enable_default_receive_connector }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="replace"
    values={[
        { label: 'replace', value: 'replace' }
    ]}
>
<TabItem value="replace">

Replaces the whole configuration of the receive connector and returns the task. `name`, `remoteIpRanges`, `requireTls` and `enabled` are all required: use PATCH to change only some of them. The default receive connector accepts `enabled` only, so it always refuses a PUT.

```sql
EXEC ovh.email_exchange.service_receive_connectors.replace 
@exchangeService='{{ exchangeService }}' --required, 
@id='{{ id }}' --required, 
@organizationName='{{ organizationName }}' --required 
@@json=
'{
"enabled": {{ enabled }}, 
"maxMessageSize": {{ maxMessageSize }}, 
"name": "{{ name }}", 
"remoteIpRanges": "{{ remoteIpRanges }}", 
"requireTls": {{ requireTls }}
}'
;
```
</TabItem>
</Tabs>
