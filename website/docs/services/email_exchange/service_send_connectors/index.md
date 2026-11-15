--- 
title: service_send_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - service_send_connectors
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

Creates, updates, deletes, gets or lists a <code>service_send_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_send_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_send_connectors" /></td></tr>
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
    <td>Id of this send connector</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this send connector (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Name of your send connector (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Default send connector, which is used to send all e-mails that are not handled by other send connectors that have been custom-created</td>
</tr>
<tr>
    <td><CopyableCode code="dns_routing" /></td>
    <td><code>boolean</code></td>
    <td>Use dns MX record to route emails via this send connector (wire: dnsRouting)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="max_send_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum send size in MB (wire: maxSendSize)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port adress that will be used to all e-mails send via this send connector</td>
</tr>
<tr>
    <td><CopyableCode code="require_tls" /></td>
    <td><code>boolean</code></td>
    <td>All messages sent through this connector will be transmitted using TLS (wire: requireTLS)</td>
</tr>
<tr>
    <td><CopyableCode code="smart_host" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that will be used to all e-mails send via this send connector (wire: smartHost)</td>
</tr>
<tr>
    <td><CopyableCode code="smart_host_auth_mechanism" /></td>
    <td><code>string</code></td>
    <td>Authentication mechanism to use for authentication with a smart host (basicAuth, basicAuthRequireTLS, none) (wire: smartHostAuthMechanism)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Send connector state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange Send Connector

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
    <td>Id of this send connector</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this send connector (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Name of your send connector (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Default send connector, which is used to send all e-mails that are not handled by other send connectors that have been custom-created</td>
</tr>
<tr>
    <td><CopyableCode code="dns_routing" /></td>
    <td><code>boolean</code></td>
    <td>Use dns MX record to route emails via this send connector (wire: dnsRouting)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="max_send_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum send size in MB (wire: maxSendSize)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port adress that will be used to all e-mails send via this send connector</td>
</tr>
<tr>
    <td><CopyableCode code="require_tls" /></td>
    <td><code>boolean</code></td>
    <td>All messages sent through this connector will be transmitted using TLS (wire: requireTLS)</td>
</tr>
<tr>
    <td><CopyableCode code="smart_host" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that will be used to all e-mails send via this send connector (wire: smartHost)</td>
</tr>
<tr>
    <td><CopyableCode code="smart_host_auth_mechanism" /></td>
    <td><code>string</code></td>
    <td>Authentication mechanism to use for authentication with a smart host (basicAuth, basicAuthRequireTLS, none) (wire: smartHostAuthMechanism)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Send connector state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
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
    <td>Get a send connector. Returns the smart host, port, authentication mechanism, TLS requirement, size limit, DNS routing and state of the send connector.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List send connectors. Returns the IDs of the send connectors of the service, which relay outgoing emails through a smart host.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-smart_host"><code>smart_host</code></a></td>
    <td></td>
    <td>Create a send connector. Creates a send connector that relays emails through a `smartHost`, with an optional port, TLS and authentication, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Update a send connector. Updates the name, smart host, port, maximum send size, TLS requirement and DNS routing of the send connector.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Delete a send connector. Deletes the send connector, so that outgoing emails no longer go through its smart host, and returns the task.</td>
</tr>
<tr>
    <td><a href="#change_authentication"><CopyableCode code="change_authentication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a></td>
    <td></td>
    <td>Change send connector authentication. Sets the smart host authentication mechanism, user and password of the send connector, and returns the task.</td>
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
    <td>Id of this send connector</td>
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

Get a send connector. Returns the smart host, port, authentication mechanism, TLS requirement, size limit, DNS routing and state of the send connector.

```sql
SELECT
id,
task_pending_id,
display_name,
creation_date,
default,
dns_routing,
last_update_date,
max_send_size,
port,
require_tls,
smart_host,
smart_host_auth_mechanism,
state
FROM ovh.email_exchange.service_send_connectors
WHERE exchange_service = '{{ exchange_service }}' -- required
AND id = '{{ id }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List send connectors. Returns the IDs of the send connectors of the service, which relay outgoing emails through a smart host.

```sql
SELECT
id,
task_pending_id,
display_name,
creation_date,
default,
dns_routing,
last_update_date,
max_send_size,
port,
require_tls,
smart_host,
smart_host_auth_mechanism,
state
FROM ovh.email_exchange.service_send_connectors
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

Create a send connector. Creates a send connector that relays emails through a `smartHost`, with an optional port, TLS and authentication, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_send_connectors (
display_name,
max_send_size,
password,
port,
require_tls,
smart_host,
smart_host_auth_mechanism,
user,
exchange_service,
organization_name
)
SELECT 
'{{ display_name }}' /* required */,
{{ max_send_size }},
'{{ password }}',
{{ port }},
{{ require_tls }},
'{{ smart_host }}' /* required */,
'{{ smart_host_auth_mechanism }}',
'{{ user }}',
'{{ exchange_service }}',
'{{ organization_name }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_send_connectors
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_send_connectors resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_send_connectors resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Name of your send connector
    - name: max_send_size
      value: {{ max_send_size }}
      description: |
        Maximum message size allowd on that send connector
    - name: password
      value: "{{ password }}"
      description: |
        Password that will be used to connect to smartHost
    - name: port
      value: {{ port }}
      description: |
        Port adress that will be used to all e-mails send via this send connector
    - name: require_tls
      value: {{ require_tls }}
      description: |
        All messages sent through this connector will be transmitted using TLS
    - name: smart_host
      value: "{{ smart_host }}"
      description: |
        Relay domain address that will be used to all e-mails send via this send connector
    - name: smart_host_auth_mechanism
      value: "{{ smart_host_auth_mechanism }}"
      description: |
        Authentication mechanism to use for authentication with a smart host
      valid_values: ['basicAuth', 'basicAuthRequireTLS', 'none']
    - name: user
      value: "{{ user }}"
      description: |
        User that will be used to connect to smartHost
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

Update a send connector. Updates the name, smart host, port, maximum send size, TLS requirement and DNS routing of the send connector.

```sql
UPDATE ovh.email_exchange.service_send_connectors
SET 
display_name = '{{ display_name }}',
dns_routing = {{ dns_routing }},
max_send_size = {{ max_send_size }},
port = {{ port }},
require_tls = {{ require_tls }},
smart_host = '{{ smart_host }}'
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND id = '{{ id }}' --required
AND organization_name = '{{ organization_name }}' --required;
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

Delete a send connector. Deletes the send connector, so that outgoing emails no longer go through its smart host, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_send_connectors
WHERE exchange_service = '{{ exchange_service }}' --required
AND id = '{{ id }}' --required
AND organization_name = '{{ organization_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_authentication"
    values={[
        { label: 'change_authentication', value: 'change_authentication' }
    ]}
>
<TabItem value="change_authentication">

Change send connector authentication. Sets the smart host authentication mechanism, user and password of the send connector, and returns the task.

```sql
EXEC ovh.email_exchange.service_send_connectors.change_authentication 
@exchangeService='{{ exchangeService }}' --required, 
@id='{{ id }}' --required, 
@organizationName='{{ organizationName }}' --required 
@@json=
'{
"password": "{{ password }}", 
"smartHostAuthMechanism": "{{ smartHostAuthMechanism }}", 
"user": "{{ user }}"
}'
;
```
</TabItem>
</Tabs>
