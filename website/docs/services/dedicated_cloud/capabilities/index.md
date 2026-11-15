--- 
title: capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities
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

Creates, updates, deletes, gets or lists a <code>capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.capabilities" /></td></tr>
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
    <td><CopyableCode code="add_ressource_right_status" /></td>
    <td><code>string</code></td>
    <td>canAddRessource right order status in this VMware on OVHcloud (active, comingSoon, no) (wire: addRessourceRightStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_status" /></td>
    <td><code>string</code></td>
    <td>Backup feature order status for this VMware on OVHcloud (active, comingSoon, no) (wire: backupStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="can_add_user" /></td>
    <td><code>boolean</code></td>
    <td>if true user can be added in this VMware on OVHcloud (with POST /dedicatedCloud/&#123;serviceName&#125;/user (wire: canAddUser)</td>
</tr>
<tr>
    <td><CopyableCode code="full_admin_ro_user_status" /></td>
    <td><code>string</code></td>
    <td>fullAdminRO user right order status in this VMware on OVHcloud (active, comingSoon, no) (wire: fullAdminRoUserStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="nexus_1000v_status" /></td>
    <td><code>string</code></td>
    <td>Nexus 1000v feature order status in this VMware on OVHcloud ? (active, comingSoon, no) (wire: nexus1000vStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="upgradable" /></td>
    <td><code>boolean</code></td>
    <td>Hypervisor upgrade order status in this VMware on OVHcloud (upgrade with POST /dedicatedCloud/&#123;serviceName&#125;/upgradeHypervisor)</td>
</tr>
<tr>
    <td><CopyableCode code="user_access_policy_status" /></td>
    <td><code>string</code></td>
    <td>userAccessPolicy property edition status in PUT /dedicatedCloud/&#123;serviceName&#125; (active, comingSoon, no) (wire: userAccessPolicyStatus)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the service capabilities. Returns which features can be ordered or used on the service, such as backup, user creation and hypervisor upgrade.</td>
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
    <td>Domain of the service (wire: serviceName)</td>
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

Get the service capabilities. Returns which features can be ordered or used on the service, such as backup, user creation and hypervisor upgrade.

```sql
SELECT
add_ressource_right_status,
backup_status,
can_add_user,
full_admin_ro_user_status,
nexus_1000v_status,
upgradable,
user_access_policy_status
FROM ovh.dedicated_cloud.capabilities
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
