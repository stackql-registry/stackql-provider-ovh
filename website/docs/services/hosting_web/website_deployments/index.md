--- 
title: website_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - website_deployments
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

Creates, updates, deletes, gets or lists a <code>website_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="website_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.website_deployments" /></td></tr>
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
    <td>Deployment numeric identifier</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_commit_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the last commit after deployment (wire: vcsCommitId)</td>
</tr>
<tr>
    <td><CopyableCode code="website_id" /></td>
    <td><code>integer</code></td>
    <td>Website numeric identifier (wire: websiteId)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="reset" /></td>
    <td><code>boolean</code></td>
    <td>Whether a reset was requested before deploying</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source which triggered the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the deployment (doing, failed, successful)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_branch" /></td>
    <td><code>string</code></td>
    <td>Which branch of the repository is deployed (wire: vcsBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_commit_message" /></td>
    <td><code>string</code></td>
    <td>Message of the last commit after deployment (wire: vcsCommitMessage)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A website deployment

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
    <td>Deployment numeric identifier</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_commit_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the last commit after deployment (wire: vcsCommitId)</td>
</tr>
<tr>
    <td><CopyableCode code="website_id" /></td>
    <td><code>integer</code></td>
    <td>Website numeric identifier (wire: websiteId)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="reset" /></td>
    <td><code>boolean</code></td>
    <td>Whether a reset was requested before deploying</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source which triggered the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the deployment (doing, failed, successful)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_branch" /></td>
    <td><code>string</code></td>
    <td>Which branch of the repository is deployed (wire: vcsBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_commit_message" /></td>
    <td><code>string</code></td>
    <td>Message of the last commit after deployment (wire: vcsCommitMessage)</td>
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
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the status, source, branch and last commit of the deployment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the deployments of the website.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>integer</code></td>
    <td>Deployment ID (wire: deploymentId)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the status, source, branch and last commit of the deployment.

```sql
SELECT
id,
vcs_commit_id,
website_id,
date,
reset,
source,
status,
vcs_branch,
vcs_commit_message
FROM ovh.hosting_web.website_deployments
WHERE deployment_id = '{{ deployment_id }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the deployments of the website.

```sql
SELECT
id,
vcs_commit_id,
website_id,
date,
reset,
source,
status,
vcs_branch,
vcs_commit_message
FROM ovh.hosting_web.website_deployments
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
