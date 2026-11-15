--- 
title: monitoring_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_notifications
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>monitoring_notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.monitoring_notifications" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="allow_incident" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to allow notifications for generic incidents (wire: allowIncident)</td>
</tr>
<tr>
    <td><CopyableCode code="down_threshold" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds the access has to be down to trigger an alert (wire: downThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The e-mail address, if type is mail</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable or not</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>Frequency between notifications. (1h, 5m, 6h, once)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>The phone number, if type is sms</td>
</tr>
<tr>
    <td><CopyableCode code="sms_account" /></td>
    <td><code>string</code></td>
    <td>The SMS account which will be debited for each sent SMS, if the type is sms (wire: smsAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of notification. (mail, sms)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Defines where and how the notifications will be sent

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="allow_incident" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to allow notifications for generic incidents (wire: allowIncident)</td>
</tr>
<tr>
    <td><CopyableCode code="down_threshold" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds the access has to be down to trigger an alert (wire: downThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The e-mail address, if type is mail</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable or not</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>Frequency between notifications. (1h, 5m, 6h, once)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>The phone number, if type is sms</td>
</tr>
<tr>
    <td><CopyableCode code="sms_account" /></td>
    <td><code>string</code></td>
    <td>The SMS account which will be debited for each sent SMS, if the type is sms (wire: smsAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of notification. (mail, sms)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the type, recipient, down threshold, frequency and status of an alert, and whether it includes generic incidents.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the email and SMS alerts set on the access.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-frequency"><code>frequency</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Adds an email or SMS alert sent when the access is down longer than the threshold, at a frequency of once, 5 minutes, 1 hour or 6 hours. An SMS alert is debited from the given SMS account.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Enables or disables an alert, or changes its down threshold, frequency, email, phone number or generic incident setting.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the alert. No notification is sent for it anymore.</td>
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
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the type, recipient, down threshold, frequency and status of an alert, and whether it includes generic incidents.

```sql
SELECT
id,
allow_incident,
down_threshold,
email,
enabled,
frequency,
phone,
sms_account,
type
FROM ovh.xdsl.monitoring_notifications
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the email and SMS alerts set on the access.

```sql
SELECT
id,
allow_incident,
down_threshold,
email,
enabled,
frequency,
phone,
sms_account,
type
FROM ovh.xdsl.monitoring_notifications
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Adds an email or SMS alert sent when the access is down longer than the threshold, at a frequency of once, 5 minutes, 1 hour or 6 hours. An SMS alert is debited from the given SMS account.

```sql
INSERT INTO ovh.xdsl.monitoring_notifications (
allow_incident,
down_threshold,
email,
frequency,
phone,
sms_account,
type,
service_name
)
SELECT 
{{ allow_incident }},
{{ down_threshold }},
'{{ email }}',
'{{ frequency }}' /* required */,
'{{ phone }}',
'{{ sms_account }}',
'{{ type }}' /* required */,
'{{ service_name }}'
RETURNING
id,
allow_incident,
down_threshold,
email,
enabled,
frequency,
phone,
sms_account,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitoring_notifications
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the monitoring_notifications resource.
    - name: allow_incident
      value: {{ allow_incident }}
      description: |
        Whether or not to allow notifications concerning generic incidents
    - name: down_threshold
      value: {{ down_threshold }}
      description: |
        The number of seconds the access has to be down to trigger the alert
    - name: email
      value: "{{ email }}"
      description: |
        The e-mail address, if type is mail
    - name: frequency
      value: "{{ frequency }}"
      description: |
        Frequency between notifications.
      valid_values: ['1h', '5m', '6h', 'once']
    - name: phone
      value: "{{ phone }}"
      description: |
        The phone number, if type is sms
    - name: sms_account
      value: "{{ sms_account }}"
      description: |
        The SMS account which will be debited for each sent SMS, if the type is sms
    - name: type
      value: "{{ type }}"
      description: |
        Type of notification.
      valid_values: ['mail', 'sms']
`}</CodeBlock>

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

Enables or disables an alert, or changes its down threshold, frequency, email, phone number or generic incident setting.

```sql
UPDATE ovh.xdsl.monitoring_notifications
SET 
allow_incident = {{ allow_incident }},
down_threshold = {{ down_threshold }},
email = '{{ email }}',
enabled = {{ enabled }},
frequency = '{{ frequency }}',
phone = '{{ phone }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the alert. No notification is sent for it anymore.

```sql
DELETE FROM ovh.xdsl.monitoring_notifications
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
