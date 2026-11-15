--- 
title: availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - availabilities
  - public_cloud_analytics
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

Creates, updates, deletes, gets or lists an <code>availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_analytics.availabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Availability of a database engine configuration

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
    <td><CopyableCode code="backups" /></td>
    <td><code>object</code></td>
    <td>Backup strategy for this availability</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category of the engine (database or analytics) (ANALYTICS, DATABASE)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this availability can be used by default</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Database engine name (CLICKHOUSE, GRAFANA, KAFKA, KAFKA_CONNECT, KAFKA_MIRROR_MAKER, MONGODB, MYSQL, OPENSEARCH, POSTGRESQL, VALKEY)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>Lifecycle information</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Plan name</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Billing plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code_storage" /></td>
    <td><code>string</code></td>
    <td>Billing plan code for storage (wire: planCodeStorage)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region name (af-north-lz-rba, ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-lz-buh, eu-central-lz-prg, eu-central-lz-sof, eu-central-waw, eu-north-lz-cph, eu-north-lz-hel, eu-north-lz-osl, eu-north-lz-sto, eu-south-lz-lis, eu-south-lz-mad, eu-south-lz-mil, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-gra-snc, eu-west-lim, eu-west-lz-ams, eu-west-lz-bru, eu-west-lz-dln, eu-west-lz-lux, eu-west-lz-mnc, eu-west-lz-mrs, eu-west-lz-vie, eu-west-lz-zrh, eu-west-par, eu-west-rbx, eu-west-rbx-snc, eu-west-sbg, eu-west-sbg-snc, us-central-lz-slc, us-central-lz-stl, us-east-lz-atl, us-east-lz-bos, us-east-lz-chi, us-east-lz-dal, us-east-lz-mia, us-east-lz-nyc, us-east-vin, us-west-hil, us-west-lz-den, us-west-lz-lax, us-west-lz-pao, us-west-lz-phx, us-west-lz-sea)</td>
</tr>
<tr>
    <td><CopyableCode code="specifications" /></td>
    <td><code>object</code></td>
    <td>Technical specifications</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version name</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td>Returns the combinations of Analytics engine, version, plan and region that can be ordered, with their specifications. Use clusterId with action and target to get the options available for an existing service, for example the plans it can be updated to. (Beta version)</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Filter availabilities by action type</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Restrict availabilities to a specific cluster (wire: clusterId)</td>
</tr>
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>Filter availabilities by target type</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns the combinations of Analytics engine, version, plan and region that can be ordered, with their specifications. Use clusterId with action and target to get the options available for an existing service, for example the plans it can be updated to. (Beta version)

```sql
SELECT
backups,
category,
default,
engine,
lifecycle,
plan,
plan_code,
plan_code_storage,
region,
specifications,
version
FROM ovh.public_cloud_analytics.availabilities
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND action = '{{ action }}'
AND cluster_id = '{{ cluster_id }}'
AND target = '{{ target }}'
;
```
</TabItem>
</Tabs>
