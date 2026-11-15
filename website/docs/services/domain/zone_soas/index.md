--- 
title: zone_soas
hide_title: false
hide_table_of_contents: false
keywords:
  - zone_soas
  - domain
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

Creates, updates, deletes, gets or lists a <code>zone_soas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zone_soas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.zone_soas" /></td></tr>
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
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address of the DNS Administrator</td>
</tr>
<tr>
    <td><CopyableCode code="expire" /></td>
    <td><code>integer</code></td>
    <td>When a zone transfer fails, a countdown clock begins. When the number of seconds set in the expire field elapses, the nameserver stops answering for that zone file</td>
</tr>
<tr>
    <td><CopyableCode code="nx_domain_ttl" /></td>
    <td><code>integer</code></td>
    <td>Non-Existent Domain TTL, if the name server returns a negative response, the remote server should wait the number of seconds set in the nxDomainTtl field before trying again (wire: nxDomainTtl)</td>
</tr>
<tr>
    <td><CopyableCode code="refresh" /></td>
    <td><code>integer</code></td>
    <td>The refresh value determines the interval in seconds between successful zone transfers of the entire zone file from a nameserver to another.</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>integer</code></td>
    <td>The serial number is used to indicate which copy of the zone file is the most current. When editing zone files, you must increment the serial number</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Primary authoritative server</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>Time To Live in seconds</td>
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
    <td><a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Returns the SOA of the zone: primary server, administrator email, serial, refresh, expire, TTL and negative-response TTL.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Updates the SOA values of the zone.</td>
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
<tr id="parameter-zone_name">
    <td><CopyableCode code="zone_name" /></td>
    <td><code>string</code></td>
    <td>Zone name (wire: zoneName)</td>
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

Returns the SOA of the zone: primary server, administrator email, serial, refresh, expire, TTL and negative-response TTL.

```sql
SELECT
email,
expire,
nx_domain_ttl,
refresh,
serial,
server,
ttl
FROM ovh.domain.zone_soas
WHERE zone_name = '{{ zone_name }}' -- required
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

Updates the SOA values of the zone.

```sql
UPDATE ovh.domain.zone_soas
SET 
email = '{{ email }}',
expire = {{ expire }},
nx_domain_ttl = {{ nx_domain_ttl }},
refresh = {{ refresh }},
serial = {{ serial }},
server = '{{ server }}',
ttl = {{ ttl }}
WHERE 
zone_name = '{{ zone_name }}' --required;
```
</TabItem>
</Tabs>
