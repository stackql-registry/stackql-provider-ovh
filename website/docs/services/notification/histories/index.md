--- 
title: histories
hide_title: false
hide_table_of_contents: false
keywords:
  - histories
  - notification
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

Creates, updates, deletes, gets or lists a <code>histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.notification.histories" /></td></tr>
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
    <td>Unique identifier of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>Attachments linked to this notification</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Categories of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>array</code></td>
    <td>Contact attempts made for this notification</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the notification was sent (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="html" /></td>
    <td><code>string</code></td>
    <td>HTML text of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Priority of the notification (HIGH, LOW, MEDIUM)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>Summary of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="text" /></td>
    <td><code>string</code></td>
    <td>Raw text of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the notification</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Notification sent to this account

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
    <td>Unique identifier of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>Attachments linked to this notification</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Categories of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>array</code></td>
    <td>Contact attempts made for this notification</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the notification was sent (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="html" /></td>
    <td><code>string</code></td>
    <td>HTML text of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Priority of the notification (HIGH, LOW, MEDIUM)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>Summary of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="text" /></td>
    <td><code>string</code></td>
    <td>Raw text of the notification</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the notification</td>
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
    <td><a href="#parameter-notification_id"><code>notification_id</code></a></td>
    <td></td>
    <td>Retrieve information about a notification sent to you</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-category"><code>category</code></a>, <a href="#parameter-created_after"><code>created_after</code></a>, <a href="#parameter-created_before"><code>created_before</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-sort_created_at"><code>sort_created_at</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-title_contains"><code>title_contains</code></a>, <a href="#parameter-with_summary"><code>with_summary</code></a></td>
    <td>Retrieve every notification sent to you</td>
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
<tr id="parameter-notification_id">
    <td><CopyableCode code="notification_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Notification ID (wire: notificationId)</td>
</tr>
<tr id="parameter-category">
    <td><CopyableCode code="category" /></td>
    <td><code>array</code></td>
    <td>Select notifications belonging to one of these categories</td>
</tr>
<tr id="parameter-created_after">
    <td><CopyableCode code="created_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Select notifications created after this date (wire: createdAfter)</td>
</tr>
<tr id="parameter-created_before">
    <td><CopyableCode code="created_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Select notifications created before this date (wire: createdBefore)</td>
</tr>
<tr id="parameter-priority">
    <td><CopyableCode code="priority" /></td>
    <td><code>array</code></td>
    <td>Select notifications matching one of these priorities</td>
</tr>
<tr id="parameter-sort_created_at">
    <td><CopyableCode code="sort_created_at" /></td>
    <td><code>string</code></td>
    <td>Sort by createdAt field. Defaults to DESC. (wire: sortCreatedAt)</td>
</tr>
<tr id="parameter-tags">
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Filter notifications using tag filters</td>
</tr>
<tr id="parameter-title_contains">
    <td><CopyableCode code="title_contains" /></td>
    <td><code>string</code></td>
    <td>Select notifications which title contains this text (wire: titleContains)</td>
</tr>
<tr id="parameter-with_summary">
    <td><CopyableCode code="with_summary" /></td>
    <td><code>boolean</code></td>
    <td>Add summary field to response (wire: withSummary)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Retrieve information about a notification sent to you

```sql
SELECT
id,
attachments,
categories,
contacts,
created_at,
html,
priority,
summary,
tags,
text,
title
FROM ovh.notification.histories
WHERE notification_id = '{{ notification_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve every notification sent to you

```sql
SELECT
id,
attachments,
categories,
contacts,
created_at,
html,
priority,
summary,
tags,
text,
title
FROM ovh.notification.histories
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND category = '{{ category }}'
AND created_after = '{{ created_after }}'
AND created_before = '{{ created_before }}'
AND priority = '{{ priority }}'
AND sort_created_at = '{{ sort_created_at }}'
AND tags = '{{ tags }}'
AND title_contains = '{{ title_contains }}'
AND with_summary = '{{ with_summary }}'
;
```
</TabItem>
</Tabs>
