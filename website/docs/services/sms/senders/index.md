--- 
title: senders
hide_title: false
hide_table_of_contents: false
keywords:
  - senders
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

Creates, updates, deletes, gets or lists a <code>senders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="senders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.senders" /></td></tr>
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
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Message sent by the moderator</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Sender description</td>
</tr>
<tr>
    <td><CopyableCode code="referer" /></td>
    <td><code>string</code></td>
    <td>Specify if the sender is custom or not (custom, domain, line, nic, owner, virtual)</td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>The sms sender</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Sender status (disable, enable, refused, waitingValidation)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Specify the kind of sender (alpha, numeric, shortcode, time2chat, virtual)</td>
</tr>
<tr>
    <td><CopyableCode code="validation_media" /></td>
    <td><code>string</code></td>
    <td>Validation media identifier (wire: validationMedia)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

SMS senders

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
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Message sent by the moderator</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Sender description</td>
</tr>
<tr>
    <td><CopyableCode code="referer" /></td>
    <td><code>string</code></td>
    <td>Specify if the sender is custom or not (custom, domain, line, nic, owner, virtual)</td>
</tr>
<tr>
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>The sms sender</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Sender status (disable, enable, refused, waitingValidation)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Specify the kind of sender (alpha, numeric, shortcode, time2chat, virtual)</td>
</tr>
<tr>
    <td><CopyableCode code="validation_media" /></td>
    <td><code>string</code></td>
    <td>Validation media identifier (wire: validationMedia)</td>
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
    <td><a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a sender. Returns the sender: status (enable, disable, waitingValidation or refused), type, description and the comment of the moderator.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List senders. Returns the senders of the account. A sender is the name or number shown to receivers, and must be validated before it can be used.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-sender"><code>sender</code></a></td>
    <td></td>
    <td>Create a sender. Creates a sender (alphanumeric or phone number). The sender is moderated before it can be used.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a sender. Updates the sender description and its status, to enable or disable a validated sender.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a sender. Deletes the sender. It can no longer be used as the name or number shown to the receivers of the SMS sent.</td>
</tr>
<tr>
    <td><a href="#validate"><CopyableCode code="validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sender"><code>sender</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-code"><code>code</code></a></td>
    <td></td>
    <td>Validate a sender. Validates the sender with the validation code received. Once validated, the sender can be used to send SMS.</td>
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
<tr id="parameter-sender">
    <td><CopyableCode code="sender" /></td>
    <td><code>string</code></td>
    <td>The sms sender</td>
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

Get a sender. Returns the sender: status (enable, disable, waitingValidation or refused), type, description and the comment of the moderator.

```sql
SELECT
comment,
description,
referer,
sender,
status,
type,
validation_media
FROM ovh.sms.senders
WHERE sender = '{{ sender }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List senders. Returns the senders of the account. A sender is the name or number shown to receivers, and must be validated before it can be used.

```sql
SELECT
comment,
description,
referer,
sender,
status,
type,
validation_media
FROM ovh.sms.senders
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

Create a sender. Creates a sender (alphanumeric or phone number). The sender is moderated before it can be used.

```sql
INSERT INTO ovh.sms.senders (
description,
reason,
sender,
service_name
)
SELECT 
'{{ description }}',
'{{ reason }}',
'{{ sender }}' /* required */,
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: senders
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the senders resource.
    - name: description
      value: "{{ description }}"
      description: |
        Sender description
    - name: reason
      value: "{{ reason }}"
      description: |
        Message seen by the moderator
    - name: sender
      value: "{{ sender }}"
      description: |
        The sender (alpha or phone number)
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

Update a sender. Updates the sender description and its status, to enable or disable a validated sender.

```sql
UPDATE ovh.sms.senders
SET 
description = '{{ description }}',
status = '{{ status }}'
WHERE 
sender = '{{ sender }}' --required
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

Delete a sender. Deletes the sender. It can no longer be used as the name or number shown to the receivers of the SMS sent.

```sql
DELETE FROM ovh.sms.senders
WHERE sender = '{{ sender }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="validate"
    values={[
        { label: 'validate', value: 'validate' }
    ]}
>
<TabItem value="validate">

Validate a sender. Validates the sender with the validation code received. Once validated, the sender can be used to send SMS.

```sql
EXEC ovh.sms.senders.validate 
@sender='{{ sender }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"code": "{{ code }}"
}'
;
```
</TabItem>
</Tabs>
