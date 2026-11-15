--- 
title: managed_kubernetes_capabilities_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_kubernetes_capabilities_versions
  - public_cloud_kubernetes
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

Creates, updates, deletes, gets or lists a <code>managed_kubernetes_capabilities_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_kubernetes_capabilities_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_kubernetes.managed_kubernetes_capabilities_versions" /></td></tr>
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
    <td><CopyableCode code="available_updates" /></td>
    <td><code>array</code></td>
    <td>Patch versions of the current minor the cluster can update to, for example 1.32.8-1 to 1.32.8-2 (wire: availableUpdates)</td>
</tr>
<tr>
    <td><CopyableCode code="available_upgrades" /></td>
    <td><code>array</code></td>
    <td>Versions of the next minor the cluster can upgrade to, for example 1.32.8-1 to 1.33.1-2. Multi-minor jumps are never listed. (wire: availableUpgrades)</td>
</tr>
<tr>
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>Full Kubernetes version currently deployed on the cluster, for example 1.32.8-1 (wire: currentVersion)</td>
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
    <td><a href="#parameter-managed_kubernetes_id"><code>managed_kubernetes_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the full version deployed on the cluster, the patch versions of the current minor it can update to, and the versions of the next minor it can upgrade to. Multi-minor jumps are never returned. (Beta version)</td>
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
<tr id="parameter-managed_kubernetes_id">
    <td><CopyableCode code="managed_kubernetes_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Managed kubernetes ID (wire: managedKubernetesId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Returns the full version deployed on the cluster, the patch versions of the current minor it can update to, and the versions of the next minor it can upgrade to. Multi-minor jumps are never returned. (Beta version)

```sql
SELECT
available_updates,
available_upgrades,
current_version
FROM ovh.public_cloud_kubernetes.managed_kubernetes_capabilities_versions
WHERE managed_kubernetes_id = '{{ managed_kubernetes_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
