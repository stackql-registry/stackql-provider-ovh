--- 
title: features_ipmis
hide_title: false
hide_table_of_contents: false
keywords:
  - features_ipmis
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

Creates, updates, deletes, gets or lists a <code>features_ipmis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="features_ipmis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.features_ipmis" /></td></tr>
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
    <td><CopyableCode code="activated" /></td>
    <td><code>boolean</code></td>
    <td>true, if IPMI is available on this server</td>
</tr>
<tr>
    <td><CopyableCode code="supported_features" /></td>
    <td><code>object</code></td>
    <td>A structure describing the IPMI supported features (wire: supportedFeatures)</td>
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
    <td>Get the IPMI interface. Returns whether IPMI is available on the server and which access methods it supports. KVM is reached through an HTML or Java web interface, and the virtual serial port through an HTML interface or an SSH client.</td>
</tr>
<tr>
    <td><a href="#reset_interface"><CopyableCode code="reset_interface" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reset the IPMI interface. Resets the IPMI interface of the server and returns a task. The task carries the status and the completion date of the reset.</td>
</tr>
<tr>
    <td><a href="#reset_sessions"><CopyableCode code="reset_sessions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reset IPMI sessions. Resets the IPMI sessions of the server and returns a task. Access values obtained before the reset stop working and must be requested again.</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
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

Get the IPMI interface. Returns whether IPMI is available on the server and which access methods it supports. KVM is reached through an HTML or Java web interface, and the virtual serial port through an HTML interface or an SSH client.

```sql
SELECT
activated,
supported_features
FROM ovh.dedicated_server.features_ipmis
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reset_interface"
    values={[
        { label: 'reset_interface', value: 'reset_interface' },
        { label: 'reset_sessions', value: 'reset_sessions' }
    ]}
>
<TabItem value="reset_interface">

Reset the IPMI interface. Resets the IPMI interface of the server and returns a task. The task carries the status and the completion date of the reset.

```sql
EXEC ovh.dedicated_server.features_ipmis.reset_interface 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="reset_sessions">

Reset IPMI sessions. Resets the IPMI sessions of the server and returns a task. Access values obtained before the reset stop working and must be requested again.

```sql
EXEC ovh.dedicated_server.features_ipmis.reset_sessions 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
