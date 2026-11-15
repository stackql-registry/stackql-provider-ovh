--- 
title: zones
hide_title: false
hide_table_of_contents: false
keywords:
  - zones
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

Creates, updates, deletes, gets or lists a <code>zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.zones" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Zone name</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_activated" /></td>
    <td><code>boolean</code></td>
    <td>Is DNSSEC activated for this zone (wire: dnssecActivated)</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_supported" /></td>
    <td><code>boolean</code></td>
    <td>Is DNSSEC supported by this zone (wire: dnssecSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="has_dns_anycast" /></td>
    <td><code>boolean</code></td>
    <td>Whether the DNS zone has a DNS Anycast subscription (wire: hasDnsAnycast)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the DNS zone (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="name_servers" /></td>
    <td><code>array</code></td>
    <td>Name servers that host the DNS zone (wire: nameServers)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DNS zone

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
    <td>Zone name</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_activated" /></td>
    <td><code>boolean</code></td>
    <td>Is DNSSEC activated for this zone (wire: dnssecActivated)</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_supported" /></td>
    <td><code>boolean</code></td>
    <td>Is DNSSEC supported by this zone (wire: dnssecSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="has_dns_anycast" /></td>
    <td><code>boolean</code></td>
    <td>Whether the DNS zone has a DNS Anycast subscription (wire: hasDnsAnycast)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the DNS zone (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="name_servers" /></td>
    <td><code>array</code></td>
    <td>Name servers that host the DNS zone (wire: nameServers)</td>
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
    <td>Returns a DNS zone: name servers, last update date, and whether DNSSEC and DNS Anycast are active.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the DNS zones.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneName"><code>zoneName</code></a></td>
    <td></td>
    <td>Starts the change of the admin, tech or billing contact and returns the request IDs.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneName"><code>zoneName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirms the termination with the token sent by email. The reason and comments are optional.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneName"><code>zoneName</code></a>, <a href="#parameter-zoneFile"><code>zoneFile</code></a></td>
    <td></td>
    <td>Imports a zone file into the zone and returns the task.</td>
</tr>
<tr>
    <td><a href="#refresh"><CopyableCode code="refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneName"><code>zoneName</code></a></td>
    <td></td>
    <td>Applies the pending record changes to the zone.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneName"><code>zoneName</code></a></td>
    <td></td>
    <td>Resets the zone, optionally with the records to set afterward. With `minimized`, only the mandatory records are created.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneName"><code>zoneName</code></a></td>
    <td></td>
    <td>Emails a termination token to the admin contact, to use with *Confirm termination*.</td>
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
<tr id="parameter-zoneName">
    <td><CopyableCode code="zoneName" /></td>
    <td><code>string</code></td>
    <td>Zone name</td>
</tr>
<tr id="parameter-zone_name">
    <td><CopyableCode code="zone_name" /></td>
    <td><code>string</code></td>
    <td>Zone name (wire: zoneName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Returns a DNS zone: name servers, last update date, and whether DNSSEC and DNS Anycast are active.

```sql
SELECT
name,
dnssec_activated,
dnssec_supported,
has_dns_anycast,
iam,
last_update,
name_servers
FROM ovh.domain.zones
WHERE zone_name = '{{ zone_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the DNS zones.

```sql
SELECT
name,
dnssec_activated,
dnssec_supported,
has_dns_anycast,
iam,
last_update,
name_servers
FROM ovh.domain.zones
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'import', value: 'import' },
        { label: 'refresh', value: 'refresh' },
        { label: 'reset', value: 'reset' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Starts the change of the admin, tech or billing contact and returns the request IDs.

```sql
EXEC ovh.domain.zones.change_contact 
@zoneName='{{ zoneName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirms the termination with the token sent by email. The reason and comments are optional.

```sql
EXEC ovh.domain.zones.confirm_termination 
@zoneName='{{ zoneName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"commentaryFutureUse": "{{ commentaryFutureUse }}", 
"commentaryReason": "{{ commentaryReason }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="import">

Imports a zone file into the zone and returns the task.

```sql
EXEC ovh.domain.zones.import 
@zoneName='{{ zoneName }}' --required 
@@json=
'{
"zoneFile": "{{ zoneFile }}"
}'
;
```
</TabItem>
<TabItem value="refresh">

Applies the pending record changes to the zone.

```sql
EXEC ovh.domain.zones.refresh 
@zoneName='{{ zoneName }}' --required
;
```
</TabItem>
<TabItem value="reset">

Resets the zone, optionally with the records to set afterward. With `minimized`, only the mandatory records are created.

```sql
EXEC ovh.domain.zones.reset 
@zoneName='{{ zoneName }}' --required 
@@json=
'{
"DnsRecords": "{{ DnsRecords }}", 
"minimized": {{ minimized }}
}'
;
```
</TabItem>
<TabItem value="terminate">

Emails a termination token to the admin contact, to use with *Confirm termination*.

```sql
EXEC ovh.domain.zones.terminate 
@zoneName='{{ zoneName }}' --required
;
```
</TabItem>
</Tabs>
