--- 
title: device_hardware
hide_title: false
hide_table_of_contents: false
keywords:
  - device_hardware
  - over_the_box
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

Creates, updates, deletes, gets or lists a <code>device_hardware</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_hardware" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.over_the_box.device_hardware" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Hardware name</td>
</tr>
<tr>
    <td><CopyableCode code="pretty_model_name" /></td>
    <td><code>string</code></td>
    <td>The hardware pretty model name (wire: prettyModelName)</td>
</tr>
<tr>
    <td><CopyableCode code="can_be_linked_to_service" /></td>
    <td><code>boolean</code></td>
    <td>True if hardware can be linked to a service without deviceID (wire: canBeLinkedToService)</td>
</tr>
<tr>
    <td><CopyableCode code="mac" /></td>
    <td><code>string (mac-address)</code></td>
    <td>Hardware MAC address (example: 00:00:5e:00:53:01)</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Hardware model</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>Hardware serial</td>
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
    <td>Get an OverTheBox hardware. Returns the name, model, serial and MAC address of a hardware, and whether it can be linked to a service without a device ID.</td>
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
    <td>The internal name of your overTheBox offer (wire: serviceName)</td>
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

Get an OverTheBox hardware. Returns the name, model, serial and MAC address of a hardware, and whether it can be linked to a service without a device ID.

```sql
SELECT
name,
pretty_model_name,
can_be_linked_to_service,
mac,
model,
serial
FROM ovh.over_the_box.device_hardware
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
