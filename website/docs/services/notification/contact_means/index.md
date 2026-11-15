--- 
title: contact_means
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_means
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

Creates, updates, deletes, gets or lists a <code>contact_means</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_means" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.notification.contact_means" /></td></tr>
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
    <td>Unique identifier of the contact mean</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the contact mean was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Task to do on this contact mean (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Is this the default contact mean</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Arbitrary description for this contact mean</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>When type is EMAIL, the email address this contact mean uses</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>When status is ERROR, details about the error</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the contact mean (DISABLED, ERROR, TO_VALIDATE, VALID)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the contact mean (EMAIL)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A contact mean

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
    <td>Unique identifier of the contact mean</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the contact mean was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Task to do on this contact mean (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Is this the default contact mean</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Arbitrary description for this contact mean</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>When type is EMAIL, the email address this contact mean uses</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>When status is ERROR, details about the error</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the contact mean (DISABLED, ERROR, TO_VALIDATE, VALID)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the contact mean (EMAIL)</td>
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
    <td><a href="#parameter-contact_mean_id"><code>contact_mean_id</code></a></td>
    <td></td>
    <td>Retrieve information about a contact mean</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Retrieve every contact mean</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a contact mean</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_mean_id"><code>contact_mean_id</code></a></td>
    <td></td>
    <td>Update a contact mean</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-contact_mean_id"><code>contact_mean_id</code></a></td>
    <td></td>
    <td>Delete the contact mean</td>
</tr>
<tr>
    <td><a href="#restart_validation"><CopyableCode code="restart_validation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-contactMeanId"><code>contactMeanId</code></a></td>
    <td></td>
    <td>Restart the validation process for this contact mean, if you did not receive the OTP</td>
</tr>
<tr>
    <td><a href="#validate"><CopyableCode code="validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-contactMeanId"><code>contactMeanId</code></a>, <a href="#parameter-otp"><code>otp</code></a></td>
    <td></td>
    <td>Validate this contact mean</td>
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
<tr id="parameter-contactMeanId">
    <td><CopyableCode code="contactMeanId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Contact mean ID</td>
</tr>
<tr id="parameter-contact_mean_id">
    <td><CopyableCode code="contact_mean_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Contact mean ID (wire: contactMeanId)</td>
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

Retrieve information about a contact mean

```sql
SELECT
id,
created_at,
current_tasks,
default,
description,
email,
error,
status,
type
FROM ovh.notification.contact_means
WHERE contact_mean_id = '{{ contact_mean_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve every contact mean

```sql
SELECT
id,
created_at,
current_tasks,
default,
description,
email,
error,
status,
type
FROM ovh.notification.contact_means
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Create a contact mean

```sql
INSERT INTO ovh.notification.contact_means (
description,
email,
type
)
SELECT 
'{{ description }}',
'{{ email }}',
'{{ type }}' /* required */
RETURNING
id,
created_at,
current_tasks,
default,
description,
email,
error,
status,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_means
  props:
    - name: description
      value: "{{ description }}"
      description: |
        Arbitrary description for this contact mean
    - name: email
      value: "{{ email }}"
      description: |
        When type is EMAIL, the email address that will be used
    - name: type
      value: "{{ type }}"
      description: |
        Type of the contact mean to create
      valid_values: ['EMAIL']
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

Update a contact mean

```sql
UPDATE ovh.notification.contact_means
SET 
description = '{{ description }}',
status = '{{ status }}'
WHERE 
contact_mean_id = '{{ contact_mean_id }}' --required
RETURNING
id,
created_at,
current_tasks,
default,
description,
email,
error,
status,
type;
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

Delete the contact mean

```sql
DELETE FROM ovh.notification.contact_means
WHERE contact_mean_id = '{{ contact_mean_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="restart_validation"
    values={[
        { label: 'restart_validation', value: 'restart_validation' },
        { label: 'validate', value: 'validate' }
    ]}
>
<TabItem value="restart_validation">

Restart the validation process for this contact mean, if you did not receive the OTP

```sql
EXEC ovh.notification.contact_means.restart_validation 
@contactMeanId='{{ contactMeanId }}' --required
;
```
</TabItem>
<TabItem value="validate">

Validate this contact mean

```sql
EXEC ovh.notification.contact_means.validate 
@contactMeanId='{{ contactMeanId }}' --required 
@@json=
'{
"otp": "{{ otp }}"
}'
;
```
</TabItem>
</Tabs>
