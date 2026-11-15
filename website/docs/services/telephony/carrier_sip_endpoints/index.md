--- 
title: carrier_sip_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - carrier_sip_endpoints
  - telephony
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

Creates, updates, deletes, gets or lists a <code>carrier_sip_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="carrier_sip_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.carrier_sip_endpoints" /></td></tr>
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
    <td><code>integer</code></td>
    <td>SIP Endpoint id</td>
</tr>
<tr>
    <td><CopyableCode code="enable_incoming_calls" /></td>
    <td><code>boolean</code></td>
    <td>Should we send incoming calls to this endpoint (wire: enableIncomingCalls)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>SIP Endpoint IP (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>SIP Endpoint port</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>SIP Endpoint priority (DNS SRV)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol of the endpoint (udp/tcp/tls) (tcp, tls, udp)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>SIP Endpoint weight (DNS SRV)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Carrier SIP Endpoints

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
    <td><code>integer</code></td>
    <td>SIP Endpoint id</td>
</tr>
<tr>
    <td><CopyableCode code="enable_incoming_calls" /></td>
    <td><code>boolean</code></td>
    <td>Should we send incoming calls to this endpoint (wire: enableIncomingCalls)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>SIP Endpoint IP (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>SIP Endpoint port</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>SIP Endpoint priority (DNS SRV)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol of the endpoint (udp/tcp/tls) (tcp, tls, udp)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>SIP Endpoint weight (DNS SRV)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a SIP endpoint</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List SIP endpoints</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the object</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get a SIP endpoint

```sql
SELECT
id,
enable_incoming_calls,
ip,
port,
priority,
protocol,
weight
FROM ovh.telephony.carrier_sip_endpoints
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List SIP endpoints

```sql
SELECT
id,
enable_incoming_calls,
ip,
port,
priority,
protocol,
weight
FROM ovh.telephony.carrier_sip_endpoints
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
