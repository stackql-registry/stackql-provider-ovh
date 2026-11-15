--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - vrack_services
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack_services.resources" /></td></tr>
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
    <td><code>string</code></td>
    <td>Unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the vRack Services delivery (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current configuration applied to the vRack Services (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Asynchronous operations ongoing on the vRack Services (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the vRack Services. A new target specification request will be accepted only in `READY` status. (CREATING, DELETING, ERROR, READY, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the vRack Services (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the Last vRack Services update (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A vRack Services

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
    <td><code>string</code></td>
    <td>Unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the vRack Services delivery (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current configuration applied to the vRack Services (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Asynchronous operations ongoing on the vRack Services (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the vRack Services. A new target specification request will be accepted only in `READY` status. (CREATING, DELETING, ERROR, READY, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the vRack Services (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the Last vRack Services update (wire: updatedAt)</td>
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
    <td><a href="#parameter-vrack_services_id"><code>vrack_services_id</code></a></td>
    <td></td>
    <td>Returns the requested and current configuration of the vRack Services: region, associated vRack, subnets with their Service Endpoints, status and running tasks.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-dedicated_server_interface"><code>dedicated_server_interface</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Returns the vRack Services of the account, each with its requested and current configuration.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vrack_services_id"><code>vrack_services_id</code></a>, <a href="#parameter-checksum"><code>checksum</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>&gt; **Beta**: BGP (`bgp`) and DHCP/netboot (`services.serviceRange&#91;&#93;.dhcp`) are Beta features: their behaviour and payload may still change.&lt;br /&gt;&lt;br /&gt;Replaces the target specification of the vRack Services, subnets and Service Endpoints, and applies it asynchronously.&lt;br /&gt;&lt;br /&gt;It is the unique route handling any update on the vRack Services configuration. It works as following:&lt;br /&gt;1. You define a new target specification in the request payload,&lt;br /&gt;2. If this specification is validated, you get the resource with updated `targetSpec` and `checksum` values in return,&lt;br /&gt;3. The request is processed by one or several asynchronous tasks that aims to reconciliate the `currentState` with the `targetSpec`&lt;br /&gt;&lt;br /&gt;### Asynchronous processing&lt;br /&gt;* To follow this processing, the VrackServices resource can be polled with `GET /vrackServices/resource/&#123;vrackServicesId&#125;`&lt;br /&gt;As soon as its `resourceStatus` is *READY*, the requested specification can be considered as applied to the vRack Services.&lt;br /&gt;* The `checksum` helps on detecting concurrency cases on update requests. If the polled `checksum` value differs from the one returned in response of your initial request, it means that processing of your request is completed and another request is being processed.&lt;br /&gt;* In case of processing error (that is `resourceStatus` in *ERROR*), the current vRack Services configuration is still active, but modification requests will be refused until the intervention of the support.&lt;br /&gt;* An overview on the asynchronous task(s) is available via the `currentTasks` attribute.&lt;br /&gt;More details on a task are provided by the route `GET /vrackServices/resource/&#123;vrackServicesId&#125;/task/&#123;taskId&#125;`&lt;br /&gt;&lt;br /&gt;### DHCP / netboot limits&lt;br /&gt;* Untagged subnet only (`vlan: null`): a DHCP block on a tagged subnet is rejected&lt;br /&gt;* Service range required: the DHCP block is declared on `services.serviceRange&#91;&#93;`&lt;br /&gt;* vRack association required to bind a dedicatedServerInterface&lt;br /&gt;* Maximum 200 dedicatedServerInterface associations per subnet&lt;br /&gt;* `netboot` is read-only, derived from the subnet VLAN: always `true` today, since only untagged subnets accept a DHCP block&lt;br /&gt;&lt;br /&gt;### Seamless configuration actions&lt;br /&gt;The request can combine any of the following seamless actions (meaning there won't be any cut of the service while updating):&lt;br /&gt;* create a Subnet&lt;br /&gt;* delete a Subnet without any Service Endpoint&lt;br /&gt;* update a Subnet:&lt;br /&gt;  * create one or several Service Endpoints&lt;br /&gt;  * add or remove dedicatedServerInterface associations in its DHCP block&lt;br /&gt;&lt;br /&gt;Note that a Subnet with several Service Endpoints can be created in the same payload&lt;br /&gt;&lt;br /&gt;### Not seamless configuration actions&lt;br /&gt;The modification of the Subnet characteristics listed below will result in a service cut while processing the update as they are interpreted as the deletion of the existing Subnet and creation of a new Subnet with provided characteristics. The IPs that were given to the Managed Services will be reelected and may as a result change:&lt;br /&gt;* modifications on the Subnet `ServiceRange`&lt;br /&gt;* modifications on the Subnet `Vlan`&lt;br /&gt;* modifications on the Subnet `CIDR` &lt;br /&gt;&lt;br /&gt;The embedded Service Endpoints will be also deleted and re-created which implies a flapping accessibility in the vRack for every related managed services.  &lt;br /&gt;Note that deleting a Subnet will also delete embedded Service Endpoints&lt;br /&gt;&lt;br /&gt;**Note** that omitting `dhcp` on a Service Range that carries one **WILL** remove its DHCP/netboot configuration (netboot stops for every bound dedicatedServerInterface): always resend the `dhcp` block returned by GET.&lt;br /&gt;&lt;br /&gt;The `vrackId` is a read-only attribute as the association vRack/vRackServices is handled by the &#91;vRack API&#93;(console-preview/?section=%2Fvrack&branch=v1)</td>
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
<tr id="parameter-vrack_services_id">
    <td><CopyableCode code="vrack_services_id" /></td>
    <td><code>string</code></td>
    <td>Vrack services ID (wire: vrackServicesId)</td>
</tr>
<tr id="parameter-dedicated_server_interface">
    <td><CopyableCode code="dedicated_server_interface" /></td>
    <td><code>string</code></td>
    <td>Filter on a dedicatedServerInterface (wire: dedicatedServerInterface)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the requested and current configuration of the vRack Services: region, associated vRack, subnets with their Service Endpoints, status and running tasks.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
iam,
resource_status,
target_spec,
updated_at
FROM ovh.vrack_services.resources
WHERE vrack_services_id = '{{ vrack_services_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the vRack Services of the account, each with its requested and current configuration.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
iam,
resource_status,
target_spec,
updated_at
FROM ovh.vrack_services.resources
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND dedicated_server_interface = '{{ dedicated_server_interface }}'
AND iam_tags = '{{ iam_tags }}'
;
```
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

&gt; **Beta**: BGP (`bgp`) and DHCP/netboot (`services.serviceRange&#91;&#93;.dhcp`) are Beta features: their behaviour and payload may still change.&lt;br /&gt;&lt;br /&gt;Replaces the target specification of the vRack Services, subnets and Service Endpoints, and applies it asynchronously.&lt;br /&gt;&lt;br /&gt;It is the unique route handling any update on the vRack Services configuration. It works as following:&lt;br /&gt;1. You define a new target specification in the request payload,&lt;br /&gt;2. If this specification is validated, you get the resource with updated `targetSpec` and `checksum` values in return,&lt;br /&gt;3. The request is processed by one or several asynchronous tasks that aims to reconciliate the `currentState` with the `targetSpec`&lt;br /&gt;&lt;br /&gt;### Asynchronous processing&lt;br /&gt;* To follow this processing, the VrackServices resource can be polled with `GET /vrackServices/resource/&#123;vrackServicesId&#125;`&lt;br /&gt;As soon as its `resourceStatus` is *READY*, the requested specification can be considered as applied to the vRack Services.&lt;br /&gt;* The `checksum` helps on detecting concurrency cases on update requests. If the polled `checksum` value differs from the one returned in response of your initial request, it means that processing of your request is completed and another request is being processed.&lt;br /&gt;* In case of processing error (that is `resourceStatus` in *ERROR*), the current vRack Services configuration is still active, but modification requests will be refused until the intervention of the support.&lt;br /&gt;* An overview on the asynchronous task(s) is available via the `currentTasks` attribute.&lt;br /&gt;More details on a task are provided by the route `GET /vrackServices/resource/&#123;vrackServicesId&#125;/task/&#123;taskId&#125;`&lt;br /&gt;&lt;br /&gt;### DHCP / netboot limits&lt;br /&gt;* Untagged subnet only (`vlan: null`): a DHCP block on a tagged subnet is rejected&lt;br /&gt;* Service range required: the DHCP block is declared on `services.serviceRange&#91;&#93;`&lt;br /&gt;* vRack association required to bind a dedicatedServerInterface&lt;br /&gt;* Maximum 200 dedicatedServerInterface associations per subnet&lt;br /&gt;* `netboot` is read-only, derived from the subnet VLAN: always `true` today, since only untagged subnets accept a DHCP block&lt;br /&gt;&lt;br /&gt;### Seamless configuration actions&lt;br /&gt;The request can combine any of the following seamless actions (meaning there won't be any cut of the service while updating):&lt;br /&gt;* create a Subnet&lt;br /&gt;* delete a Subnet without any Service Endpoint&lt;br /&gt;* update a Subnet:&lt;br /&gt;  * create one or several Service Endpoints&lt;br /&gt;  * add or remove dedicatedServerInterface associations in its DHCP block&lt;br /&gt;&lt;br /&gt;Note that a Subnet with several Service Endpoints can be created in the same payload&lt;br /&gt;&lt;br /&gt;### Not seamless configuration actions&lt;br /&gt;The modification of the Subnet characteristics listed below will result in a service cut while processing the update as they are interpreted as the deletion of the existing Subnet and creation of a new Subnet with provided characteristics. The IPs that were given to the Managed Services will be reelected and may as a result change:&lt;br /&gt;* modifications on the Subnet `ServiceRange`&lt;br /&gt;* modifications on the Subnet `Vlan`&lt;br /&gt;* modifications on the Subnet `CIDR` &lt;br /&gt;&lt;br /&gt;The embedded Service Endpoints will be also deleted and re-created which implies a flapping accessibility in the vRack for every related managed services.  &lt;br /&gt;Note that deleting a Subnet will also delete embedded Service Endpoints&lt;br /&gt;&lt;br /&gt;**Note** that omitting `dhcp` on a Service Range that carries one **WILL** remove its DHCP/netboot configuration (netboot stops for every bound dedicatedServerInterface): always resend the `dhcp` block returned by GET.&lt;br /&gt;&lt;br /&gt;The `vrackId` is a read-only attribute as the association vRack/vRackServices is handled by the &#91;vRack API&#93;(console-preview/?section=%2Fvrack&branch=v1)

```sql
UPDATE ovh.vrack_services.resources
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
vrack_services_id = '{{ vrack_services_id }}' --required
AND checksum = '{{ checksum }}' --required
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at;
```
</TabItem>
</Tabs>
