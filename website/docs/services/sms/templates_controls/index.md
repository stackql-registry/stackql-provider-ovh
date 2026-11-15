--- 
title: templates_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - templates_controls
  - sms
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

Creates, updates, deletes, gets or lists a <code>templates_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.templates_controls" /></td></tr>
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
    <td>Name of the template</td>
</tr>
<tr>
    <td><CopyableCode code="activity" /></td>
    <td><code>string</code></td>
    <td>Specify the kind of template (alerting, authentification, transactional)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Message sent by the moderator</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Template creation datetime</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Template description</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Message pattern to be moderated. Use "#VALUE#" format for dynamic text area.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Template status (disable, enable, refused, waitingValidation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Sms template for moderation (Needed to send in US country)

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
    <td>Name of the template</td>
</tr>
<tr>
    <td><CopyableCode code="activity" /></td>
    <td><code>string</code></td>
    <td>Specify the kind of template (alerting, authentification, transactional)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Message sent by the moderator</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Template creation datetime</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Template description</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Message pattern to be moderated. Use "#VALUE#" format for dynamic text area.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Template status (disable, enable, refused, waitingValidation)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a message template. Returns the message template: pattern, activity, status and moderator comment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List message templates. Returns the message templates. Sending SMS to the United States requires a template validated by a moderator.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-activity"><code>activity</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a message template. Creates a message template and submits it to moderation. Sending SMS to the United States requires a validated template.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a message template. Updates the message template: description, message pattern with #VALUE# dynamic areas, and kind (alerting, authentification or transactional).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a message template. Deletes the message template from the SMS account, whatever its moderation status.</td>
</tr>
<tr>
    <td><a href="#relaunch_validation"><CopyableCode code="relaunch_validation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Relaunch template validation. Submits the message template to moderation again after a refusal, with an updated message pattern and description.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the template</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Get a message template. Returns the message template: pattern, activity, status and moderator comment.

```sql
SELECT
name,
activity,
comment,
datetime,
description,
message,
status
FROM ovh.sms.templates_controls
WHERE name = '{{ name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List message templates. Returns the message templates. Sending SMS to the United States requires a template validated by a moderator.

```sql
SELECT
name,
activity,
comment,
datetime,
description,
message,
status
FROM ovh.sms.templates_controls
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

Create a message template. Creates a message template and submits it to moderation. Sending SMS to the United States requires a validated template.

```sql
INSERT INTO ovh.sms.templates_controls (
activity,
description,
message,
name,
reason,
service_name
)
SELECT 
'{{ activity }}' /* required */,
'{{ description }}',
'{{ message }}' /* required */,
'{{ name }}' /* required */,
'{{ reason }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: templates_controls
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the templates_controls resource.
    - name: activity
      value: "{{ activity }}"
      description: |
        Specify the kind of template
      valid_values: ['alerting', 'authentification', 'transactional']
    - name: description
      value: "{{ description }}"
      description: |
        Template description
    - name: message
      value: "{{ message }}"
      description: |
        Message pattern to be moderated. Use "#VALUE#" format for dynamic text area.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the template
    - name: reason
      value: "{{ reason }}"
      description: |
        Message seen by the moderator
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

Update a message template. Updates the message template: description, message pattern with #VALUE# dynamic areas, and kind (alerting, authentification or transactional).

```sql
UPDATE ovh.sms.templates_controls
SET 
activity = '{{ activity }}',
description = '{{ description }}',
message = '{{ message }}',
name = '{{ name }}',
status = '{{ status }}'
WHERE 
name = '{{ name }}' --required
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

Delete a message template. Deletes the message template from the SMS account, whatever its moderation status.

```sql
DELETE FROM ovh.sms.templates_controls
WHERE name = '{{ name }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="relaunch_validation"
    values={[
        { label: 'relaunch_validation', value: 'relaunch_validation' }
    ]}
>
<TabItem value="relaunch_validation">

Relaunch template validation. Submits the message template to moderation again after a refusal, with an updated message pattern and description.

```sql
EXEC ovh.sms.templates_controls.relaunch_validation 
@name='{{ name }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"description": "{{ description }}", 
"message": "{{ message }}"
}'
;
```
</TabItem>
</Tabs>
