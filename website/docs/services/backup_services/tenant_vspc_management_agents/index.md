--- 
title: tenant_vspc_management_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vspc_management_agents
  - backup_services
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

Creates, updates, deletes, gets or lists a <code>tenant_vspc_management_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vspc_management_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vspc_management_agents" /></td></tr>
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
    <td><CopyableCode code="linux_deploy_script" /></td>
    <td><code>string</code></td>
    <td>URL of the script used to install the Linux Management Agent (wire: linuxDeployScript)</td>
</tr>
<tr>
    <td><CopyableCode code="linux_url" /></td>
    <td><code>string</code></td>
    <td>URL of the Management Agent download for Linux (wire: linuxUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_url" /></td>
    <td><code>string</code></td>
    <td>URL of the Management Agent download for MacOS (wire: macUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="windows_url" /></td>
    <td><code>string</code></td>
    <td>URL of the Management Agent download for Windows (wire: windowsUrl)</td>
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
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Retrieves the download link for the management agent</td>
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
<tr id="parameter-backup_services_id">
    <td><CopyableCode code="backup_services_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup services ID (wire: backupServicesId)</td>
</tr>
<tr id="parameter-vspc_tenant_id">
    <td><CopyableCode code="vspc_tenant_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Vspc tenant ID (wire: vspcTenantId)</td>
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

Retrieves the download link for the management agent

```sql
SELECT
linux_deploy_script,
linux_url,
mac_url,
windows_url
FROM ovh.backup_services.tenant_vspc_management_agents
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
;
```
</TabItem>
</Tabs>
