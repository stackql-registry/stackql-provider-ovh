--- 
title: phishings
hide_title: false
hide_table_of_contents: false
keywords:
  - phishings
  - ip
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

Creates, updates, deletes, gets or lists a <code>phishings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phishings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.phishings" /></td></tr>
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
    <td>Internal ID of the phishing entry</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the event (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_antiphishing" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address hosting the phishing URL (example: 192.0.2.0) (wire: ipOnAntiphishing)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the phishing (blocked, blocking, unblocked, unblocking)</td>
</tr>
<tr>
    <td><CopyableCode code="url_phishing" /></td>
    <td><code>string</code></td>
    <td>Phishing URL (wire: urlPhishing)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Phishing URLs hosted on your IP

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
    <td>Internal ID of the phishing entry</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the event (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_antiphishing" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address hosting the phishing URL (example: 192.0.2.0) (wire: ipOnAntiphishing)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the phishing (blocked, blocking, unblocked, unblocking)</td>
</tr>
<tr>
    <td><CopyableCode code="url_phishing" /></td>
    <td><code>string</code></td>
    <td>Phishing URL (wire: urlPhishing)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Get a phishing report. Returns the phishing URL, the address hosting it, the date of the event and its state.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-ip_on_antiphishing"><code>ip_on_antiphishing</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List phishing reports. Returns the IDs of phishing URLs found on the block, filterable by address or state.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Internal ID of the phishing entry</td>
</tr>
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
</tr>
<tr id="parameter-ip_on_antiphishing">
    <td><CopyableCode code="ip_on_antiphishing" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Filter the value of ipOnAntiphishing property (within or equals) (wire: ipOnAntiphishing)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of state property (=)</td>
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

Get a phishing report. Returns the phishing URL, the address hosting it, the date of the event and its state.

```sql
SELECT
id,
creation_date,
ip_on_antiphishing,
state,
url_phishing
FROM ovh.ip.phishings
WHERE id = '{{ id }}' -- required
AND ip = '{{ ip }}' -- required
;
```
</TabItem>
<TabItem value="list">

List phishing reports. Returns the IDs of phishing URLs found on the block, filterable by address or state.

```sql
SELECT
id,
creation_date,
ip_on_antiphishing,
state,
url_phishing
FROM ovh.ip.phishings
WHERE ip = '{{ ip }}' -- required
AND ip_on_antiphishing = '{{ ip_on_antiphishing }}'
AND state = '{{ state }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
