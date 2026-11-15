--- 
title: features_ipmi_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - features_ipmi_accesses
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>features_ipmi_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="features_ipmi_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.features_ipmi_accesses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>Session expiration date</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>value</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Get the IPMI session access. Returns the access value and the session expiration date for the given access type. Request the access with POST on the same route first: before that, and after expiration, the call returns an error.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ttl"><code>ttl</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Request IPMI access. Requests an IPMI session for the given access type and returns a task. Once the task is done, read the access value and its expiration date with GET on the same route. sshKey, for serial over LAN SSH access, must be a raw public SSH key.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>IPMI console access</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the IPMI session access. Returns the access value and the session expiration date for the given access type. Request the access with POST on the same route first: before that, and after expiration, the call returns an error.

```sql
SELECT
expiration,
value
FROM ovh.dedicated_server.features_ipmi_accesses
WHERE service_name = '{{ service_name }}' -- required
AND type = '{{ type }}' -- required
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

Request IPMI access. Requests an IPMI session for the given access type and returns a task. Once the task is done, read the access value and its expiration date with GET on the same route. sshKey, for serial over LAN SSH access, must be a raw public SSH key.

```sql
INSERT INTO ovh.dedicated_server.features_ipmi_accesses (
ip_to_allow,
ssh_key,
ttl,
type,
service_name
)
SELECT 
'{{ ip_to_allow }}',
'{{ ssh_key }}',
{{ ttl }} /* required */,
'{{ type }}' /* required */,
'{{ service_name }}'
RETURNING
planned_intervention_id,
task_id,
change_uuid,
comment,
done_date,
function,
last_update,
need_schedule,
note,
start_date,
status,
tags,
ticket_reference
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: features_ipmi_accesses
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the features_ipmi_accesses resource.
    - name: ip_to_allow
      value: "{{ ip_to_allow }}"
      description: |
        IP to allow connection from for this IPMI session
    - name: ssh_key
      value: "{{ ssh_key }}"
      description: |
        Public SSH key for Serial Over Lan SSH access | ⚠️ Starting 2024-08-27, SSH key name will no longer be accepted and only raw public SSH key will remain accepted
    - name: ttl
      value: {{ ttl }}
      description: |
        Session access time to live in minutes
      valid_values: ['1', '3', '5', '10', '15']
    - name: type
      value: "{{ type }}"
      description: |
        Distinct way to acces a KVM IPMI session
      valid_values: ['kvmipHtml5URL', 'kvmipJnlp', 'serialOverLanSshKey', 'serialOverLanURL']
`}</CodeBlock>

</TabItem>
</Tabs>
