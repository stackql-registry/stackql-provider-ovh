--- 
title: vrack_services
hide_title: false
hide_table_of_contents: false
keywords:
  - vrack_services
  - vrack
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

Creates, updates, deletes, gets or lists a <code>vrack_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vrack_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.vrack_services" /></td></tr>
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
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_services" /></td>
    <td><code>string</code></td>
    <td>vrackServices service name (wire: vrackServices)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

vrackServices in vrack

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
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_services" /></td>
    <td><code>string</code></td>
    <td>vrackServices service name (wire: vrackServices)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-vrack_services"><code>vrack_services</code></a></td>
    <td></td>
    <td>Get a vRack Services. Returns the attached vRack Services and its vRack.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List vRack Services. Returns the vRack Services attached to the vRack.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-vrack_services"><code>vrack_services</code></a></td>
    <td></td>
    <td>Attach a vRack Services. Attaches a vRack Services to the vRack. Its subnets and Service Endpoints are then configured with the vRack Services API. Returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-vrack_services"><code>vrack_services</code></a></td>
    <td></td>
    <td>Detach a vRack Services. Detaches the vRack Services from the vRack. Returns the task that performs it.</td>
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
    <td>The internal name of your vrack (wire: serviceName)</td>
</tr>
<tr id="parameter-vrack_services">
    <td><CopyableCode code="vrack_services" /></td>
    <td><code>string</code></td>
    <td>vrackServices service name (wire: vrackServices)</td>
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

Get a vRack Services. Returns the attached vRack Services and its vRack.

```sql
SELECT
vrack,
vrack_services
FROM ovh.vrack.vrack_services
WHERE service_name = '{{ service_name }}' -- required
AND vrack_services = '{{ vrack_services }}' -- required
;
```
</TabItem>
<TabItem value="list">

List vRack Services. Returns the vRack Services attached to the vRack.

```sql
SELECT
vrack,
vrack_services
FROM ovh.vrack.vrack_services
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

Attach a vRack Services. Attaches a vRack Services to the vRack. Its subnets and Service Endpoints are then configured with the vRack Services API. Returns the task that performs it.

```sql
INSERT INTO ovh.vrack.vrack_services (
vrack_services,
service_name
)
SELECT 
'{{ vrack_services }}' /* required */,
'{{ service_name }}'
RETURNING
id,
order_id,
service_name,
function,
last_update,
status,
target_domain,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vrack_services
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the vrack_services resource.
    - name: vrack_services
      value: "{{ vrack_services }}"
      description: |
        vrackServices service name
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

Detach a vRack Services. Detaches the vRack Services from the vRack. Returns the task that performs it.

```sql
DELETE FROM ovh.vrack.vrack_services
WHERE service_name = '{{ service_name }}' --required
AND vrack_services = '{{ vrack_services }}' --required
;
```
</TabItem>
</Tabs>
