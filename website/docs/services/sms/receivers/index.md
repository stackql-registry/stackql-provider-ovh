--- 
title: receivers
hide_title: false
hide_table_of_contents: false
keywords:
  - receivers
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

Creates, updates, deletes, gets or lists a <code>receivers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="receivers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.receivers" /></td></tr>
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
    <td><CopyableCode code="slot_id" /></td>
    <td><code>integer</code></td>
    <td>Slot number id (wire: slotId)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_update" /></td>
    <td><code>boolean</code></td>
    <td>Download file from URL before sending to contacts (works only with csvUrl and not document ID) (wire: autoUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="can_auto_update" /></td>
    <td><code>boolean</code></td>
    <td>Is the object compatible with autoUpdate (wire: canAutoUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the document</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description name of the document</td>
</tr>
<tr>
    <td><CopyableCode code="records" /></td>
    <td><code>integer</code></td>
    <td>Number of receiver records in the document</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Sms receivers preloaded

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
    <td><CopyableCode code="slot_id" /></td>
    <td><code>integer</code></td>
    <td>Slot number id (wire: slotId)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_update" /></td>
    <td><code>boolean</code></td>
    <td>Download file from URL before sending to contacts (works only with csvUrl and not document ID) (wire: autoUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="can_auto_update" /></td>
    <td><code>boolean</code></td>
    <td>Is the object compatible with autoUpdate (wire: canAutoUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the document</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description name of the document</td>
</tr>
<tr>
    <td><CopyableCode code="records" /></td>
    <td><code>integer</code></td>
    <td>Number of receiver records in the document</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-slot_id"><code>slot_id</code></a></td>
    <td></td>
    <td>Get a receiver list. Returns the receiver list: description, number of records and automatic update settings.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List receiver lists. Returns the identifiers (slotId) of the receiver lists. A receiver list is a CSV or text document of numbers, used to send SMS in bulk.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-auto_update"><code>auto_update</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-slot_id"><code>slot_id</code></a></td>
    <td></td>
    <td>Create a receiver list. Creates a receiver list from a CSV file, given as a /me/document identifier or a URL. With a URL, the file can be downloaded again before each sending.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-slot_id"><code>slot_id</code></a></td>
    <td></td>
    <td>Update a receiver list. Updates the description of the receiver list and its automatic update, which downloads the file from its URL before each sending.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-slot_id"><code>slot_id</code></a></td>
    <td></td>
    <td>Delete a receiver list. Deletes the receiver list. It can no longer be used as the receivers of an SMS sending (receiversSlotId).</td>
</tr>
<tr>
    <td><a href="#clean"><CopyableCode code="clean" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-slotId"><code>slotId</code></a>, <a href="#parameter-freemium"><code>freemium</code></a>, <a href="#parameter-priceOnly"><code>priceOnly</code></a></td>
    <td></td>
    <td>Clean a receiver list. Removes the invalid and inactive numbers from the receiver list, with an HLR lookup on each number. A report is sent by email at the end.</td>
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
    <td>The internal name of your SMS offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
</tr>
<tr id="parameter-slotId">
    <td><CopyableCode code="slotId" /></td>
    <td><code>integer</code></td>
    <td>Slot number id</td>
</tr>
<tr id="parameter-slot_id">
    <td><CopyableCode code="slot_id" /></td>
    <td><code>integer</code></td>
    <td>Slot number id (wire: slotId)</td>
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

Get a receiver list. Returns the receiver list: description, number of records and automatic update settings.

```sql
SELECT
slot_id,
auto_update,
can_auto_update,
datetime,
description,
records
FROM ovh.sms.receivers
WHERE service_name = '{{ service_name }}' -- required
AND slot_id = '{{ slot_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List receiver lists. Returns the identifiers (slotId) of the receiver lists. A receiver list is a CSV or text document of numbers, used to send SMS in bulk.

```sql
SELECT
slot_id,
auto_update,
can_auto_update,
datetime,
description,
records
FROM ovh.sms.receivers
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

Create a receiver list. Creates a receiver list from a CSV file, given as a /me/document identifier or a URL. With a URL, the file can be downloaded again before each sending.

```sql
INSERT INTO ovh.sms.receivers (
auto_update,
csv_url,
description,
document_id,
slot_id,
service_name
)
SELECT 
{{ auto_update }} /* required */,
'{{ csv_url }}',
'{{ description }}' /* required */,
'{{ document_id }}',
{{ slot_id }} /* required */,
'{{ service_name }}'
RETURNING
slot_id,
auto_update,
can_auto_update,
datetime,
description,
records
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: receivers
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the receivers resource.
    - name: auto_update
      value: {{ auto_update }}
      description: |
        Download file from URL before sending to contacts (works only with csvUrl and not document ID)
    - name: csv_url
      value: "{{ csv_url }}"
      description: |
        URL of the file you want to import
    - name: description
      value: "{{ description }}"
      description: |
        Description name of the document
    - name: document_id
      value: "{{ document_id }}"
      description: |
        ID of the /me/document file you want to import
    - name: slot_id
      value: {{ slot_id }}
      description: |
        Slot number id used to handle the document
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

Update a receiver list. Updates the description of the receiver list and its automatic update, which downloads the file from its URL before each sending.

```sql
UPDATE ovh.sms.receivers
SET 
auto_update = {{ auto_update }},
description = '{{ description }}'
WHERE 
service_name = '{{ service_name }}' --required
AND slot_id = '{{ slot_id }}' --required;
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

Delete a receiver list. Deletes the receiver list. It can no longer be used as the receivers of an SMS sending (receiversSlotId).

```sql
DELETE FROM ovh.sms.receivers
WHERE service_name = '{{ service_name }}' --required
AND slot_id = '{{ slot_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="clean"
    values={[
        { label: 'clean', value: 'clean' }
    ]}
>
<TabItem value="clean">

Clean a receiver list. Removes the invalid and inactive numbers from the receiver list, with an HLR lookup on each number. A report is sent by email at the end.

```sql
EXEC ovh.sms.receivers.clean 
@serviceName='{{ serviceName }}' --required, 
@slotId='{{ slotId }}' --required 
@@json=
'{
"freemium": {{ freemium }}, 
"priceOnly": {{ priceOnly }}
}'
;
```
</TabItem>
</Tabs>
