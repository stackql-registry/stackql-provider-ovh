--- 
title: region_loadbalancing_l7_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - region_loadbalancing_l7_policies
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

Creates, updates, deletes, gets or lists a <code>region_loadbalancing_l7_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_loadbalancing_l7_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_loadbalancing_l7_policies" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="listener_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the listener. (wire: listenerId)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Requests matching this policy will be redirected to the pool with this ID. Only valid if action is "redirect_to_pool" (wire: redirectPoolId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The L7 policy action (redirectPrefix, redirectToPool, redirectToURL, reject)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description for the resource</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The position of this policy on the listener. Positions start at 1</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_http_code" /></td>
    <td><code>integer</code></td>
    <td>Requests matching this policy will be redirected to the specified URL or Prefix URL with the HTTP response code. Valid if action is "redirect_to" or "redirect_prefix" (301, 302, 303, 307, 308) (wire: redirectHttpCode)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_prefix" /></td>
    <td><code>string</code></td>
    <td>Requests matching this policy will be redirected to this Prefix URL. Only valid if action is "redirect_prefix" (wire: redirectPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_url" /></td>
    <td><code>string</code></td>
    <td>Requests matching this policy will be redirected to this URL. Only valid if action is "redirect_to_url" (wire: redirectUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

L7 policy

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="listener_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the listener. (wire: listenerId)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Requests matching this policy will be redirected to the pool with this ID. Only valid if action is "redirect_to_pool" (wire: redirectPoolId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The L7 policy action (redirectPrefix, redirectToPool, redirectToURL, reject)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description for the resource</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The position of this policy on the listener. Positions start at 1</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_http_code" /></td>
    <td><code>integer</code></td>
    <td>Requests matching this policy will be redirected to the specified URL or Prefix URL with the HTTP response code. Valid if action is "redirect_to" or "redirect_prefix" (301, 302, 303, 307, 308) (wire: redirectHttpCode)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_prefix" /></td>
    <td><code>string</code></td>
    <td>Requests matching this policy will be redirected to this Prefix URL. Only valid if action is "redirect_prefix" (wire: redirectPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_url" /></td>
    <td><code>string</code></td>
    <td>Requests matching this policy will be redirected to this URL. Only valid if action is "redirect_to_url" (wire: redirectUrl)</td>
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
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-listener_id"><code>listener_id</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-listener_id"><code>listener_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-l_7_policy_id">
    <td><CopyableCode code="l_7_policy_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>L7 policy ID (wire: l7PolicyId)</td>
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
<tr id="parameter-listener_id">
    <td><CopyableCode code="listener_id" /></td>
    <td><code>string</code></td>
    <td>Linked listener id (wire: listenerId)</td>
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

successful operation

```sql
SELECT
id,
name,
listener_id,
redirect_pool_id,
action,
description,
operating_status,
position,
provisioning_status,
redirect_http_code,
redirect_prefix,
redirect_url
FROM ovh.cloud_network.region_loadbalancing_l7_policies
WHERE l_7_policy_id = '{{ l_7_policy_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

L7 policy

```sql
SELECT
id,
name,
listener_id,
redirect_pool_id,
action,
description,
operating_status,
position,
provisioning_status,
redirect_http_code,
redirect_prefix,
redirect_url
FROM ovh.cloud_network.region_loadbalancing_l7_policies
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND listener_id = '{{ listener_id }}'
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

No description available.

```sql
INSERT INTO ovh.cloud_network.region_loadbalancing_l7_policies (
action,
description,
listener_id,
name,
position,
redirect_http_code,
redirect_pool_id,
redirect_prefix,
redirect_url,
region_name,
service_name
)
SELECT 
'{{ action }}' /* required */,
'{{ description }}',
'{{ listener_id }}' /* required */,
'{{ name }}',
{{ position }},
{{ redirect_http_code }},
'{{ redirect_pool_id }}',
'{{ redirect_prefix }}',
'{{ redirect_url }}',
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
listener_id,
redirect_pool_id,
action,
description,
operating_status,
position,
provisioning_status,
redirect_http_code,
redirect_prefix,
redirect_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_loadbalancing_l7_policies
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_loadbalancing_l7_policies resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_loadbalancing_l7_policies resource.
    - name: action
      value: "{{ action }}"
      description: |
        The L7 policy action
      valid_values: ['redirectPrefix', 'redirectToPool', 'redirectToURL', 'reject']
    - name: description
      value: "{{ description }}"
      description: |
        A human-readable description for the resource
    - name: listener_id
      value: "{{ listener_id }}"
      description: |
        The ID of the listener.
    - name: name
      value: "{{ name }}"
      description: |
        Human-readable name of the resource
    - name: position
      value: {{ position }}
      description: |
        The position of this policy on the listener. Positions start at 1
    - name: redirect_http_code
      value: {{ redirect_http_code }}
      description: |
        Requests matching this policy will be redirected to the specified URL or Prefix URL with the HTTP response code. Valid if action is "redirect_to" or "redirect_prefix"
      valid_values: ['301', '302', '303', '307', '308']
    - name: redirect_pool_id
      value: "{{ redirect_pool_id }}"
      description: |
        Requests matching this policy will be redirected to the pool with this ID. Only valid if action is "redirect_to_pool"
    - name: redirect_prefix
      value: "{{ redirect_prefix }}"
      description: |
        Requests matching this policy will be redirected to this Prefix URL. Only valid if action is "redirect_prefix"
    - name: redirect_url
      value: "{{ redirect_url }}"
      description: |
        Requests matching this policy will be redirected to this URL. Only valid if action is "redirect_to_url"
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

No description available.

```sql
UPDATE ovh.cloud_network.region_loadbalancing_l7_policies
SET 
action = '{{ action }}',
description = '{{ description }}',
listener_id = '{{ listener_id }}',
name = '{{ name }}',
position = {{ position }},
redirect_http_code = {{ redirect_http_code }},
redirect_pool_id = '{{ redirect_pool_id }}',
redirect_prefix = '{{ redirect_prefix }}',
redirect_url = '{{ redirect_url }}'
WHERE 
l_7_policy_id = '{{ l_7_policy_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND action = '{{ action }}' --required
RETURNING
id,
name,
listener_id,
redirect_pool_id,
action,
description,
operating_status,
position,
provisioning_status,
redirect_http_code,
redirect_prefix,
redirect_url;
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

No description available.

```sql
DELETE FROM ovh.cloud_network.region_loadbalancing_l7_policies
WHERE l_7_policy_id = '{{ l_7_policy_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
