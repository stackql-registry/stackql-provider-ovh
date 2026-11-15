--- 
title: emails
hide_title: false
hide_table_of_contents: false
keywords:
  - emails
  - hosting_web
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

Creates, updates, deletes, gets or lists an <code>emails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="emails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.emails" /></td></tr>
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
    <td><CopyableCode code="bounce" /></td>
    <td><code>integer</code></td>
    <td>Bounce</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email used to receive errors</td>
</tr>
<tr>
    <td><CopyableCode code="max_per_day" /></td>
    <td><code>integer</code></td>
    <td>Max email to sent per day (wire: maxPerDay)</td>
</tr>
<tr>
    <td><CopyableCode code="sent" /></td>
    <td><code>integer</code></td>
    <td>Email sent since hosting creation</td>
</tr>
<tr>
    <td><CopyableCode code="sent_today" /></td>
    <td><code>integer</code></td>
    <td>Email sent today (wire: sentToday)</td>
</tr>
<tr>
    <td><CopyableCode code="spoofing" /></td>
    <td><code>integer</code></td>
    <td>Spoofing Bounce</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Email state (bounce, force, ko, ok, purging, spam)</td>
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
    <td>Get the email state. Returns the state of the emails sent by the hosting scripts, with the volumes sent, the bounces and the daily limit.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the email settings. Updates the email address that receives the sending errors of the hosting scripts. The other fields are read-only.</td>
</tr>
<tr>
    <td><a href="#request"><CopyableCode code="request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Run an email action. Blocks or unblocks the emails sent by the hosting scripts, or purges the queue of emails waiting to be sent.</td>
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
    <td>The internal name of your hosting</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
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

Get the email state. Returns the state of the emails sent by the hosting scripts, with the volumes sent, the bounces and the daily limit.

```sql
SELECT
bounce,
email,
max_per_day,
sent,
sent_today,
spoofing,
state
FROM ovh.hosting_web.emails
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

Update the email settings. Updates the email address that receives the sending errors of the hosting scripts. The other fields are read-only.

```sql
UPDATE ovh.hosting_web.emails
SET 
email = '{{ email }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="request"
    values={[
        { label: 'request', value: 'request' }
    ]}
>
<TabItem value="request">

Run an email action. Blocks or unblocks the emails sent by the hosting scripts, or purges the queue of emails waiting to be sent.

```sql
EXEC ovh.hosting_web.emails.request 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"action": "{{ action }}"
}'
;
```
</TabItem>
</Tabs>
