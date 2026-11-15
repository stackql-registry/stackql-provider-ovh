--- 
title: security_options_compatibility_matrices
hide_title: false
hide_table_of_contents: false
keywords:
  - security_options_compatibility_matrices
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

Creates, updates, deletes, gets or lists a <code>security_options_compatibility_matrices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_options_compatibility_matrices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.security_options_compatibility_matrices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Representation of a security option

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Security option name (accessNetworkFiltered, advancedSecurity, base, contentLibrary, grsecKernel, hds, hids, hipaa, logForwarder, nids, pcidss, privateCustomerVlan, privateGw, sendLogToCustomer, sessionTimeout, sftp, snc, spla, sslV3, tls1.2, tokenValidation, twoFa, twoFaFail2ban, vrliForwarder, waf)</td>
</tr>
<tr>
    <td><CopyableCode code="compatible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if option is compatible and can be enabled on your Dedicated Cloud</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Security option description</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if option is enabled on your Dedicated Cloud</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>object</code></td>
    <td>If your Dedicated Cloud is not compatible with this option, indicates the reason</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Detailed security option state (creating, deleted, deleting, delivered, disabled, pending, toCreate, updating)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-show_incompatible"><code>show_incompatible</code></a>, <a href="#parameter-show_internal"><code>show_internal</code></a></td>
    <td>List security options. Returns each security option with its state, whether it is enabled and compatible, and the reason when it is not compatible.</td>
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
<tr id="parameter-show_incompatible">
    <td><CopyableCode code="show_incompatible" /></td>
    <td><code>boolean</code></td>
    <td>Show incompatible security options (enabled by default) (wire: showIncompatible)</td>
</tr>
<tr id="parameter-show_internal">
    <td><CopyableCode code="show_internal" /></td>
    <td><code>boolean</code></td>
    <td>Show internal security options (wire: showInternal)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List security options. Returns each security option with its state, whether it is enabled and compatible, and the reason when it is not compatible.

```sql
SELECT
name,
compatible,
description,
enabled,
reason,
state
FROM ovh.dedicated_cloud.security_options_compatibility_matrices
WHERE service_name = '{{ service_name }}' -- required
AND show_incompatible = '{{ show_incompatible }}'
AND show_internal = '{{ show_internal }}'
;
```
</TabItem>
</Tabs>
