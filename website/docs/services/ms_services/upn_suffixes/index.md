--- 
title: upn_suffixes
hide_title: false
hide_table_of_contents: false
keywords:
  - upn_suffixes
  - ms_services
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

Creates, updates, deletes, gets or lists a <code>upn_suffixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upn_suffixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ms_services.upn_suffixes" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this upnSuffix (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_to_check" /></td>
    <td><code>string</code></td>
    <td>Cname record used for UPN suffix verification (wire: cnameToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="ownership_validated" /></td>
    <td><code>boolean</code></td>
    <td>Ownership for upn suffix confirmed (wire: ownershipValidated)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>UPN suffix state (creating, deleting, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="suffix" /></td>
    <td><code>string</code></td>
    <td>UPN suffix</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Active Directory UPN Suffix

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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this upnSuffix (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_to_check" /></td>
    <td><code>string</code></td>
    <td>Cname record used for UPN suffix verification (wire: cnameToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="ownership_validated" /></td>
    <td><code>boolean</code></td>
    <td>Ownership for upn suffix confirmed (wire: ownershipValidated)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>UPN suffix state (creating, deleting, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="suffix" /></td>
    <td><code>string</code></td>
    <td>UPN suffix</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-suffix"><code>suffix</code></a></td>
    <td></td>
    <td>Get a UPN suffix. Returns the state of the UPN suffix, the CNAME record used to verify it and whether its ownership is validated.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List UPN suffixes. Returns the UPN suffixes of the Active Directory service. Get one to read its state and the CNAME to check.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-suffix"><code>suffix</code></a></td>
    <td></td>
    <td>Create a UPN suffix. Adds a UPN suffix to the Active Directory service and returns the task. Its ownership is verified with the CNAME record given in `cnameToCheck`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-suffix"><code>suffix</code></a></td>
    <td></td>
    <td>Delete a UPN suffix. Removes the UPN suffix from the Active Directory service, so that user names can no longer use it, and returns the task.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your Active Directory organization (wire: serviceName)</td>
</tr>
<tr id="parameter-suffix">
    <td><CopyableCode code="suffix" /></td>
    <td><code>string</code></td>
    <td>UPN suffix</td>
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

Get a UPN suffix. Returns the state of the UPN suffix, the CNAME record used to verify it and whether its ownership is validated.

```sql
SELECT
task_pending_id,
cname_to_check,
ownership_validated,
state,
suffix
FROM ovh.ms_services.upn_suffixes
WHERE service_name = '{{ service_name }}' -- required
AND suffix = '{{ suffix }}' -- required
;
```
</TabItem>
<TabItem value="list">

List UPN suffixes. Returns the UPN suffixes of the Active Directory service. Get one to read its state and the CNAME to check.

```sql
SELECT
task_pending_id,
cname_to_check,
ownership_validated,
state,
suffix
FROM ovh.ms_services.upn_suffixes
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

Create a UPN suffix. Adds a UPN suffix to the Active Directory service and returns the task. Its ownership is verified with the CNAME record given in `cnameToCheck`.

```sql
INSERT INTO ovh.ms_services.upn_suffixes (
suffix,
service_name
)
SELECT 
'{{ suffix }}' /* required */,
'{{ service_name }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: upn_suffixes
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the upn_suffixes resource.
    - name: suffix
      value: "{{ suffix }}"
      description: |
        UPN suffix to create
`}</CodeBlock>

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

Delete a UPN suffix. Removes the UPN suffix from the Active Directory service, so that user names can no longer use it, and returns the task.

```sql
DELETE FROM ovh.ms_services.upn_suffixes
WHERE service_name = '{{ service_name }}' --required
AND suffix = '{{ suffix }}' --required
;
```
</TabItem>
</Tabs>
