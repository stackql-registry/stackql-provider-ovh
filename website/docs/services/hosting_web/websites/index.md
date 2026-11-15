--- 
title: websites
hide_title: false
hide_table_of_contents: false
keywords:
  - websites
  - hosting_web
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

Creates, updates, deletes, gets or lists a <code>websites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="websites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.websites" /></td></tr>
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
    <td>Website numeric identifier</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Customizable name of the website</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the hosting (wire: hostingDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the hosting service (wire: hostingServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains of the website</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Relative path on the hosting filesystem the website is deployed into</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the website (created, creating, deleting, deploying, error, initialError)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_branch" /></td>
    <td><code>string</code></td>
    <td>Branch of the repository containing the website source code to deploy (wire: vcsBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_url" /></td>
    <td><code>string</code></td>
    <td>URL of the repository containing the website source code to deploy (wire: vcsUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A website on your hosting

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
    <td>Website numeric identifier</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Customizable name of the website</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the hosting (wire: hostingDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the hosting service (wire: hostingServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>Domains of the website</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Relative path on the hosting filesystem the website is deployed into</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the website (created, creating, deleting, deploying, error, initialError)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_branch" /></td>
    <td><code>string</code></td>
    <td>Branch of the repository containing the website source code to deploy (wire: vcsBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_url" /></td>
    <td><code>string</code></td>
    <td>URL of the repository containing the website source code to deploy (wire: vcsUrl)</td>
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
    <td>Returns the name, path, status, domains and repository of the website.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the websites of the hosting. Filter them by path.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-vcs_branch"><code>vcs_branch</code></a>, <a href="#parameter-vcs_url"><code>vcs_url</code></a></td>
    <td></td>
    <td>Creates a website in a folder of the hosting, deployed from a repository branch, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the repository branch deployed on the website.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-delete_files"><code>delete_files</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the website and returns the task. Set deleteFiles to true to also empty the website folder.</td>
</tr>
<tr>
    <td><a href="#deploy"><CopyableCode code="deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Deploys the website from its repository branch and returns the task. Set reset to true to reset the website files before deploying.</td>
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
<tr id="parameter-delete_files">
    <td><CopyableCode code="delete_files" /></td>
    <td><code>boolean</code></td>
    <td>Whether the website path should be emptied or not (wire: deleteFiles)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Filter the value of path property</td>
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

Returns the name, path, status, domains and repository of the website.

```sql
SELECT
id,
name,
hosting_display_name,
hosting_service_name,
domains,
path,
status,
vcs_branch,
vcs_url
FROM ovh.hosting_web.websites
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the websites of the hosting. Filter them by path.

```sql
SELECT
id,
name,
hosting_display_name,
hosting_service_name,
domains,
path,
status,
vcs_branch,
vcs_url
FROM ovh.hosting_web.websites
WHERE service_name = '{{ service_name }}' -- required
AND path = '{{ path }}'
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

Creates a website in a folder of the hosting, deployed from a repository branch, and returns the task.

```sql
INSERT INTO ovh.hosting_web.websites (
path,
vcs_branch,
vcs_url,
service_name
)
SELECT 
'{{ path }}' /* required */,
'{{ vcs_branch }}' /* required */,
'{{ vcs_url }}' /* required */,
'{{ service_name }}'
RETURNING
id,
object_id,
done_date,
function,
last_update,
object_type,
start_date,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: websites
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the websites resource.
    - name: path
      value: "{{ path }}"
      description: |
        Relative path on the hosting filesystem the website will be deployed into
    - name: vcs_branch
      value: "{{ vcs_branch }}"
      description: |
        Branch of the repository containing the website source code to deploy
    - name: vcs_url
      value: "{{ vcs_url }}"
      description: |
        Clone URL of the repository containing the website source code to deploy
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

Updates the repository branch deployed on the website.

```sql
UPDATE ovh.hosting_web.websites
SET 
vcs_branch = '{{ vcs_branch }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
RETURNING
id,
name,
hosting_display_name,
hosting_service_name,
domains,
path,
status,
vcs_branch,
vcs_url;
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

Deletes the website and returns the task. Set deleteFiles to true to also empty the website folder.

```sql
DELETE FROM ovh.hosting_web.websites
WHERE delete_files = '{{ delete_files }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="deploy"
    values={[
        { label: 'deploy', value: 'deploy' }
    ]}
>
<TabItem value="deploy">

Deploys the website from its repository branch and returns the task. Set reset to true to reset the website files before deploying.

```sql
EXEC ovh.hosting_web.websites.deploy 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"reset": {{ reset }}
}'
;
```
</TabItem>
</Tabs>
