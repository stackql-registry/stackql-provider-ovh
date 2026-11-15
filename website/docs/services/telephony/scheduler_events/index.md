--- 
title: scheduler_events
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduler_events
  - telephony
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

Creates, updates, deletes, gets or lists a <code>scheduler_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduler_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.scheduler_events" /></td></tr>
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
    <td><CopyableCode code="categories" /></td>
    <td><code>string</code></td>
    <td>The category of the event (holidays, scheduler1, scheduler2, scheduler3)</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ending date of the event (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="date_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning date of the event (wire: dateStart)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique ICS event identifier</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Scheduled event

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
    <td><CopyableCode code="categories" /></td>
    <td><code>string</code></td>
    <td>The category of the event (holidays, scheduler1, scheduler2, scheduler3)</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ending date of the event (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="date_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning date of the event (wire: dateStart)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique ICS event identifier</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-uid"><code>uid</code></a></td>
    <td></td>
    <td>Get a scheduler event</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-categories"><code>categories</code></a>, <a href="#parameter-date_end.from"><code>date_end.from</code></a>, <a href="#parameter-date_end.to"><code>date_end.to</code></a>, <a href="#parameter-date_start.from"><code>date_start.from</code></a>, <a href="#parameter-date_start.to"><code>date_start.to</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List scheduler events</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-category"><code>category</code></a>, <a href="#parameter-date_end"><code>date_end</code></a>, <a href="#parameter-date_start"><code>date_start</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Create a scheduler event</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-uid"><code>uid</code></a></td>
    <td></td>
    <td>Update a scheduler event</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-uid"><code>uid</code></a></td>
    <td></td>
    <td>Delete a scheduler event</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr id="parameter-uid">
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique ICS event identifier</td>
</tr>
<tr id="parameter-categories">
    <td><CopyableCode code="categories" /></td>
    <td><code>string</code></td>
    <td>Filter the value of categories property (=)</td>
</tr>
<tr id="parameter-date_end.from">
    <td><CopyableCode code="date_end.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of dateEnd property (&gt;=) (wire: dateEnd.from)</td>
</tr>
<tr id="parameter-date_end.to">
    <td><CopyableCode code="date_end.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of dateEnd property (&lt;=) (wire: dateEnd.to)</td>
</tr>
<tr id="parameter-date_start.from">
    <td><CopyableCode code="date_start.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of dateStart property (&gt;=) (wire: dateStart.from)</td>
</tr>
<tr id="parameter-date_start.to">
    <td><CopyableCode code="date_start.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of dateStart property (&lt;=) (wire: dateStart.to)</td>
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

Get a scheduler event

```sql
SELECT
categories,
date_end,
date_start,
description,
title,
uid
FROM ovh.telephony.scheduler_events
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND uid = '{{ uid }}' -- required
;
```
</TabItem>
<TabItem value="list">

List scheduler events

```sql
SELECT
categories,
date_end,
date_start,
description,
title,
uid
FROM ovh.telephony.scheduler_events
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND categories = '{{ categories }}'
AND date_end.from = '{{ date_end.from }}'
AND date_end.to = '{{ date_end.to }}'
AND date_start.from = '{{ date_start.from }}'
AND date_start.to = '{{ date_start.to }}'
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

Create a scheduler event

```sql
INSERT INTO ovh.telephony.scheduler_events (
category,
date_end,
date_start,
description,
title,
uid,
billing_account,
service_name
)
SELECT 
'{{ category }}' /* required */,
'{{ date_end }}' /* required */,
'{{ date_start }}' /* required */,
'{{ description }}',
'{{ title }}' /* required */,
'{{ uid }}',
'{{ billing_account }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduler_events
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the scheduler_events resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the scheduler_events resource.
    - name: category
      value: "{{ category }}"
      description: |
        Scheculer category
      valid_values: ['holidays', 'scheduler1', 'scheduler2', 'scheduler3']
    - name: date_end
      value: "{{ date_end }}"
      description: |
        The ending date of the event
    - name: date_start
      value: "{{ date_start }}"
      description: |
        The beginning date of the event
    - name: description
      value: "{{ description }}"
      description: |
        The descritpion of the event
    - name: title
      value: "{{ title }}"
      description: |
        The title of the event
    - name: uid
      value: "{{ uid }}"
      description: |
        The unique ICS event identifier
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

Update a scheduler event

```sql
UPDATE ovh.telephony.scheduler_events
SET 
categories = '{{ categories }}',
date_end = '{{ date_end }}',
date_start = '{{ date_start }}',
description = '{{ description }}',
title = '{{ title }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required
AND uid = '{{ uid }}' --required;
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

Delete a scheduler event

```sql
DELETE FROM ovh.telephony.scheduler_events
WHERE billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required
AND uid = '{{ uid }}' --required
;
```
</TabItem>
</Tabs>
