--- 
title: exchanges
hide_title: false
hide_table_of_contents: false
keywords:
  - exchanges
  - ms_services
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

Creates, updates, deletes, gets or lists an <code>exchanges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exchanges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ms_services.exchanges" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Service family name displayed (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Exchange service name</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Exchange service URL</td>
</tr>
<tr>
    <td><CopyableCode code="max_receive_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum allowable size for received messages in MB (wire: maxReceiveSize)</td>
</tr>
<tr>
    <td><CopyableCode code="max_send_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum allowable size of sent messages in MB (wire: maxSendSize)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Exchange service offer (dedicated, dedicatedCluster, hosted, provider)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_and_virus_configuration" /></td>
    <td><code>object</code></td>
    <td>Spam and Antivirus configuration (wire: spamAndVirusConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_expiration_date" /></td>
    <td><code>string (date)</code></td>
    <td>Expiration date of SSL certificate (wire: sslExpirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Exchange service state (creating, deleting, inMaintenance, ok, reopening, suspended, suspending)</td>
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
    <td>Get the linked Exchange service. Returns the Exchange service linked to the Active Directory service: offer, hostname, state, SSL certificate expiration date, message size limits and spam and antivirus configuration.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the linked Exchange service. Updates the display name, the maximum sizes of sent and received messages in MB, and the spam and antivirus configuration of the Exchange service.</td>
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
    <td>The internal name of your Active Directory organization (wire: serviceName)</td>
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

Get the linked Exchange service. Returns the Exchange service linked to the Active Directory service: offer, hostname, state, SSL certificate expiration date, message size limits and spam and antivirus configuration.

```sql
SELECT
task_pending_id,
display_name,
domain,
hostname,
max_receive_size,
max_send_size,
offer,
spam_and_virus_configuration,
ssl_expiration_date,
state
FROM ovh.ms_services.exchanges
WHERE service_name = '{{ service_name }}' -- required
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

Update the linked Exchange service. Updates the display name, the maximum sizes of sent and received messages in MB, and the spam and antivirus configuration of the Exchange service.

```sql
UPDATE ovh.ms_services.exchanges
SET 
display_name = '{{ display_name }}',
max_receive_size = {{ max_receive_size }},
max_send_size = {{ max_send_size }},
spam_and_virus_configuration = '{{ spam_and_virus_configuration }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
