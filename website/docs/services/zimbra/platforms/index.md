--- 
title: platforms
hide_title: false
hide_table_of_contents: false
keywords:
  - platforms
  - zimbra
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

Creates, updates, deletes, gets or lists a <code>platforms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platforms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.zimbra.platforms" /></td></tr>
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
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing platform (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing platform (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for get platform

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
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing platform (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing platform (wire: targetSpec)</td>
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
    <td><a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td></td>
    <td>Returns the name and description of the platform, its number of organizations, its storage quota per account and its account statistics per offer.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td>Returns the platforms of the account with their current state. Filter them by `projectId`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Updates the name or description of the platform. When set, `checksum` must match the current checksum of the platform, otherwise the update is rejected.</td>
</tr>
<tr>
    <td><a href="#diagnostic_domain"><CopyableCode code="diagnostic_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-platformId"><code>platformId</code></a>, <a href="#parameter-domains"><code>domains</code></a></td>
    <td><a href="#parameter-X-Pagination-Cursor"><code>X-Pagination-Cursor</code></a>, <a href="#parameter-X-Pagination-Size"><code>X-Pagination-Size</code></a></td>
    <td>Checks the MX, SPF, DKIM and autodiscover DNS records of the domains listed in `domains`. Returns, for each domain, the status and errors of each test, the records found and the expected DNS configuration.</td>
</tr>
<tr>
    <td><a href="#refresh_quota_usage"><CopyableCode code="refresh_quota_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-platformId"><code>platformId</code></a></td>
    <td></td>
    <td>Recomputes the quota usage (`quota.used` and `quotaRefreshedAt`) of every email account of the platform. The refresh runs asynchronously.</td>
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
<tr id="parameter-platformId">
    <td><CopyableCode code="platformId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Platform ID</td>
</tr>
<tr id="parameter-platform_id">
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Platform ID (wire: platformId)</td>
</tr>
<tr id="parameter-X-Pagination-Cursor">
    <td><CopyableCode code="X-Pagination-Cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor</td>
</tr>
<tr id="parameter-X-Pagination-Size">
    <td><CopyableCode code="X-Pagination-Size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the project (wire: projectId)</td>
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

Returns the name and description of the platform, its number of organizations, its storage quota per account and its account statistics per offer.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
iam,
resource_status,
target_spec
FROM ovh.zimbra.platforms
WHERE platform_id = '{{ platform_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the platforms of the account with their current state. Filter them by `projectId`.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
iam,
resource_status,
target_spec
FROM ovh.zimbra.platforms
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND iam_tags = '{{ iam_tags }}'
AND project_id = '{{ project_id }}'
;
```
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

Updates the name or description of the platform. When set, `checksum` must match the current checksum of the platform, otherwise the update is rejected.

```sql
UPDATE ovh.zimbra.platforms
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
platform_id = '{{ platform_id }}' --required
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="diagnostic_domain"
    values={[
        { label: 'diagnostic_domain', value: 'diagnostic_domain' },
        { label: 'refresh_quota_usage', value: 'refresh_quota_usage' }
    ]}
>
<TabItem value="diagnostic_domain">

Checks the MX, SPF, DKIM and autodiscover DNS records of the domains listed in `domains`. Returns, for each domain, the status and errors of each test, the records found and the expected DNS configuration.

```sql
EXEC ovh.zimbra.platforms.diagnostic_domain 
@platformId='{{ platformId }}' --required, 
@X-Pagination-Cursor='{{ X-Pagination-Cursor }}', 
@X-Pagination-Size='{{ X-Pagination-Size }}' 
@@json=
'{
"domains": "{{ domains }}"
}'
;
```
</TabItem>
<TabItem value="refresh_quota_usage">

Recomputes the quota usage (`quota.used` and `quotaRefreshedAt`) of every email account of the platform. The refresh runs asynchronously.

```sql
EXEC ovh.zimbra.platforms.refresh_quota_usage 
@platformId='{{ platformId }}' --required
;
```
</TabItem>
</Tabs>
