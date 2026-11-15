--- 
title: availability_suggestions
hide_title: false
hide_table_of_contents: false
keywords:
  - availability_suggestions
  - public_cloud_database
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

Creates, updates, deletes, gets or lists an <code>availability_suggestions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availability_suggestions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_database.availability_suggestions" /></td></tr>
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

Suggested availability for a database engine

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
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this suggestion is the default</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Engine name (CLICKHOUSE, GRAFANA, KAFKA, KAFKA_CONNECT, KAFKA_MIRROR_MAKER, MONGODB, MYSQL, OPENSEARCH, POSTGRESQL, VALKEY)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Flavor name</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Plan name</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region name (af-north-lz-rba, ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-lz-buh, eu-central-lz-prg, eu-central-lz-sof, eu-central-waw, eu-north-lz-cph, eu-north-lz-hel, eu-north-lz-osl, eu-north-lz-sto, eu-south-lz-lis, eu-south-lz-mad, eu-south-lz-mil, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-gra-snc, eu-west-lim, eu-west-lz-ams, eu-west-lz-bru, eu-west-lz-dln, eu-west-lz-lux, eu-west-lz-mnc, eu-west-lz-mrs, eu-west-lz-vie, eu-west-lz-zrh, eu-west-par, eu-west-rbx, eu-west-rbx-snc, eu-west-sbg, eu-west-sbg-snc, us-central-lz-slc, us-central-lz-stl, us-east-lz-atl, us-east-lz-bos, us-east-lz-chi, us-east-lz-dal, us-east-lz-mia, us-east-lz-nyc, us-east-vin, us-west-hil, us-west-lz-den, us-west-lz-lax, us-west-lz-pao, us-west-lz-phx, us-west-lz-sea)</td>
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
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns suggested combinations of Databases engine, version, plan, flavor and region. The default suggestion is marked. (Beta version)</td>
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

Returns suggested combinations of Databases engine, version, plan, flavor and region. The default suggestion is marked. (Beta version)

```sql
SELECT
default,
engine,
flavor,
plan,
region,
version
FROM ovh.public_cloud_database.availability_suggestions
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>
