--- 
title: alertings
hide_title: false
hide_table_of_contents: false
keywords:
  - alertings
  - cloud
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

Creates, updates, deletes, gets or lists an <code>alertings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alertings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.alertings" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>ID of the alert</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the alert</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="delay" /></td>
    <td><code>integer</code></td>
    <td>Delay of the alert in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email. DEPRECATED: use emails</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td>Receiver of the alert</td>
</tr>
<tr>
    <td><CopyableCode code="formatted_monthly_threshold" /></td>
    <td><code>object</code></td>
    <td>formatted monthly threshold (wire: formattedMonthlyThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_threshold" /></td>
    <td><code>integer</code></td>
    <td>Monthly threshold (wire: monthlyThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Service of the alert (ai_endpoint, all, block_storage, data_platform, instances, instances_gpu, instances_without_gpu, objet_storage, rancher, snapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the alert (deleted, disabled, ok)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Billing Alert Configuration

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
    <td><code>string (uuid)</code></td>
    <td>ID of the alert</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the alert</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="delay" /></td>
    <td><code>integer</code></td>
    <td>Delay of the alert in seconds</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email. DEPRECATED: use emails</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td>Receiver of the alert</td>
</tr>
<tr>
    <td><CopyableCode code="formatted_monthly_threshold" /></td>
    <td><code>object</code></td>
    <td>formatted monthly threshold (wire: formattedMonthlyThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_threshold" /></td>
    <td><code>integer</code></td>
    <td>Monthly threshold (wire: monthlyThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Service of the alert (ai_endpoint, all, block_storage, data_platform, instances, instances_gpu, instances_without_gpu, objet_storage, rancher, snapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the alert (deleted, disabled, ok)</td>
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
    <td>Returns the configuration of the billing alert: threshold, service, receivers and status.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the billing alerts configured on the project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-delay"><code>delay</code></a>, <a href="#parameter-monthly_threshold"><code>monthly_threshold</code></a></td>
    <td></td>
    <td>Creates a billing alert with a monthly threshold, for one service or for all services. Sends an email to the receivers when the monthly spend on the service exceeds the threshold. Use `emails`, as `email` is deprecated.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the threshold, service, receivers, delay or status of the billing alert. Use `emails`, as `email` is deprecated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the billing alert configuration.</td>
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
    <td><code>string (uuid)</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Returns the configuration of the billing alert: threshold, service, receivers and status.

```sql
SELECT
id,
name,
creation_date,
delay,
email,
emails,
formatted_monthly_threshold,
monthly_threshold,
service,
status
FROM ovh.cloud.alertings
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the billing alerts configured on the project.

```sql
SELECT
id,
name,
creation_date,
delay,
email,
emails,
formatted_monthly_threshold,
monthly_threshold,
service,
status
FROM ovh.cloud.alertings
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Creates a billing alert with a monthly threshold, for one service or for all services. Sends an email to the receivers when the monthly spend on the service exceeds the threshold. Use `emails`, as `email` is deprecated.

```sql
INSERT INTO ovh.cloud.alertings (
delay,
email,
emails,
monthly_threshold,
name,
service,
service_name
)
SELECT 
{{ delay }} /* required */,
'{{ email }}',
'{{ emails }}',
{{ monthly_threshold }} /* required */,
'{{ name }}',
'{{ service }}',
'{{ service_name }}'
RETURNING
id,
name,
creation_date,
delay,
email,
emails,
formatted_monthly_threshold,
monthly_threshold,
service,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alertings
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the alertings resource.
    - name: delay
      value: {{ delay }}
      description: |
        Delay of the alert in seconds
    - name: email
      value: "{{ email }}"
      description: |
        Email. DEPRECATED: use emails
    - name: emails
      value:
        - "{{ emails }}"
      description: |
        Receiver of the alert
    - name: monthly_threshold
      value: {{ monthly_threshold }}
      description: |
        Monthly threshold
    - name: name
      value: "{{ name }}"
      description: |
        Name of the alert
    - name: service
      value: "{{ service }}"
      description: |
        Service of the alert
      valid_values: ['ai_endpoint', 'all', 'block_storage', 'data_platform', 'instances', 'instances_gpu', 'instances_without_gpu', 'objet_storage', 'rancher', 'snapshot']
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

Updates the threshold, service, receivers, delay or status of the billing alert. Use `emails`, as `email` is deprecated.

```sql
UPDATE ovh.cloud.alertings
SET 
delay = {{ delay }},
email = '{{ email }}',
emails = '{{ emails }}',
monthly_threshold = {{ monthly_threshold }},
name = '{{ name }}',
service = '{{ service }}',
status = '{{ status }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set;
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

Deletes the billing alert configuration.

```sql
DELETE FROM ovh.cloud.alertings
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
