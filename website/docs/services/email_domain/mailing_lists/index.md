--- 
title: mailing_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - mailing_lists
  - email_domain
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

Creates, updates, deletes, gets or lists a <code>mailing_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mailing_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.mailing_lists" /></td></tr>
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
    <td>Id of mailing list</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of mailing list</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language of mailing list (de, en, es, fr, it, nl, pl, pt)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_subscribers" /></td>
    <td><code>integer</code></td>
    <td>Subscribers number of mailing list (wire: nbSubscribers)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_subscribers_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update subscribers (wire: nbSubscribersUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Options of mailing list</td>
</tr>
<tr>
    <td><CopyableCode code="owner_email" /></td>
    <td><code>string</code></td>
    <td>Owner email of mailing list (wire: ownerEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="reply_to" /></td>
    <td><code>string</code></td>
    <td>Email to reply of mailing list (wire: replyTo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Mailing List

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
    <td>Id of mailing list</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of mailing list</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language of mailing list (de, en, es, fr, it, nl, pl, pt)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_subscribers" /></td>
    <td><code>integer</code></td>
    <td>Subscribers number of mailing list (wire: nbSubscribers)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_subscribers_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update subscribers (wire: nbSubscribersUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Options of mailing list</td>
</tr>
<tr>
    <td><CopyableCode code="owner_email" /></td>
    <td><code>string</code></td>
    <td>Owner email of mailing list (wire: ownerEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="reply_to" /></td>
    <td><code>string</code></td>
    <td>Email to reply of mailing list (wire: replyTo)</td>
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
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Get a mailing list. Returns the owner email, reply-to address, language, moderation options and number of subscribers of the mailing list.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List mailing lists. Returns the names of the mailing lists of the domain. Filter them by `name` to look for a given list.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-owner_email"><code>owner_email</code></a></td>
    <td></td>
    <td>Create a mailing list. Creates a mailing list with a name, an owner email, a language and moderation options, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update a mailing list. Updates the owner email, the reply-to address or the language of the mailing list.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Delete a mailing list. Deletes the mailing list of the domain with its subscribers and moderators, and returns the task.</td>
</tr>
<tr>
    <td><a href="#change_options"><CopyableCode code="change_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-options"><code>options</code></a></td>
    <td></td>
    <td>Change mailing list options. Sets message moderation (`moderatorMessage`), subscription moderation (`subscribeByModerator`) and `usersPostOnly`, which lets only moderators post, and returns the task.</td>
</tr>
<tr>
    <td><a href="#send_list_by_email"><CopyableCode code="send_list_by_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Send member lists by email. Sends the lists of moderators and subscribers of the mailing list to the `email` address, and returns the task.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your domain name</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of mailing list</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Mailing list name</td>
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

Get a mailing list. Returns the owner email, reply-to address, language, moderation options and number of subscribers of the mailing list.

```sql
SELECT
id,
name,
language,
nb_subscribers,
nb_subscribers_update_date,
options,
owner_email,
reply_to
FROM ovh.email_domain.mailing_lists
WHERE domain = '{{ domain }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List mailing lists. Returns the names of the mailing lists of the domain. Filter them by `name` to look for a given list.

```sql
SELECT
id,
name,
language,
nb_subscribers,
nb_subscribers_update_date,
options,
owner_email,
reply_to
FROM ovh.email_domain.mailing_lists
WHERE domain = '{{ domain }}' -- required
AND name = '{{ name }}'
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

Create a mailing list. Creates a mailing list with a name, an owner email, a language and moderation options, and returns the task.

```sql
INSERT INTO ovh.email_domain.mailing_lists (
language,
name,
options,
owner_email,
reply_to,
domain
)
SELECT 
'{{ language }}' /* required */,
'{{ name }}' /* required */,
'{{ options }}' /* required */,
'{{ owner_email }}' /* required */,
'{{ reply_to }}',
'{{ domain }}'
RETURNING
id,
account,
action,
date,
domain,
language
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mailing_lists
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the mailing_lists resource.
    - name: language
      value: "{{ language }}"
      description: |
        Language of mailing list
      valid_values: ['de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'pt']
    - name: name
      value: "{{ name }}"
      description: |
        Mailing list name
    - name: options
      description: |
        Options of mailing list
      value:
        moderatorMessage: {{ moderatorMessage }}
        subscribeByModerator: {{ subscribeByModerator }}
        usersPostOnly: {{ usersPostOnly }}
    - name: owner_email
      value: "{{ owner_email }}"
      description: |
        Owner Email
    - name: reply_to
      value: "{{ reply_to }}"
      description: |
        Email to reply of mailing list
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

Update a mailing list. Updates the owner email, the reply-to address or the language of the mailing list.

```sql
UPDATE ovh.email_domain.mailing_lists
SET 
language = '{{ language }}',
owner_email = '{{ owner_email }}',
reply_to = '{{ reply_to }}'
WHERE 
domain = '{{ domain }}' --required
AND name = '{{ name }}' --required;
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

Delete a mailing list. Deletes the mailing list of the domain with its subscribers and moderators, and returns the task.

```sql
DELETE FROM ovh.email_domain.mailing_lists
WHERE domain = '{{ domain }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_options"
    values={[
        { label: 'change_options', value: 'change_options' },
        { label: 'send_list_by_email', value: 'send_list_by_email' }
    ]}
>
<TabItem value="change_options">

Change mailing list options. Sets message moderation (`moderatorMessage`), subscription moderation (`subscribeByModerator`) and `usersPostOnly`, which lets only moderators post, and returns the task.

```sql
EXEC ovh.email_domain.mailing_lists.change_options 
@domain='{{ domain }}' --required, 
@name='{{ name }}' --required 
@@json=
'{
"options": "{{ options }}"
}'
;
```
</TabItem>
<TabItem value="send_list_by_email">

Send member lists by email. Sends the lists of moderators and subscribers of the mailing list to the `email` address, and returns the task.

```sql
EXEC ovh.email_domain.mailing_lists.send_list_by_email 
@domain='{{ domain }}' --required, 
@name='{{ name }}' --required 
@@json=
'{
"email": "{{ email }}"
}'
;
```
</TabItem>
</Tabs>
