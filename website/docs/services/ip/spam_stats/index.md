--- 
title: spam_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - spam_stats
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

Creates, updates, deletes, gets or lists a <code>spam_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spam_stats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.spam_stats" /></td></tr>
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

Spam statistics about an IP address

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
    <td><CopyableCode code="average_spamscore" /></td>
    <td><code>integer</code></td>
    <td>Average spam score. (wire: averageSpamscore)</td>
</tr>
<tr>
    <td><CopyableCode code="detected_spams" /></td>
    <td><code>array</code></td>
    <td>Detailed list of the spams (wire: detectedSpams)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_spams" /></td>
    <td><code>integer</code></td>
    <td>Number of spams sent (wire: numberOfSpams)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>integer</code></td>
    <td>Time when the IP address was blocked</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Number of emails sent</td>
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
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_spamming"><code>ip_spamming</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td></td>
    <td>List spam statistics. Returns emails sent, spams detected and average spam score over the given period.</td>
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
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start date</td>
</tr>
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
</tr>
<tr id="parameter-ip_spamming">
    <td><CopyableCode code="ip_spamming" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address which is sending spam (wire: ipSpamming)</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>string (date-time)</code></td>
    <td>End date</td>
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

List spam statistics. Returns emails sent, spams detected and average spam score over the given period.

```sql
SELECT
average_spamscore,
detected_spams,
number_of_spams,
timestamp,
total
FROM ovh.ip.spam_stats
WHERE from = '{{ from }}' -- required
AND ip = '{{ ip }}' -- required
AND ip_spamming = '{{ ip_spamming }}' -- required
AND to = '{{ to }}' -- required
;
```
</TabItem>
</Tabs>
