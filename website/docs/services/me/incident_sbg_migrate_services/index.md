--- 
title: incident_sbg_migrate_services
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_sbg_migrate_services
  - me
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

Creates, updates, deletes, gets or lists an <code>incident_sbg_migrate_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_sbg_migrate_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.incident_sbg_migrate_services" /></td></tr>
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

Service you may migrate to a given offer

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
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>ID of an ongoing migration order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="addons" /></td>
    <td><code>array</code></td>
    <td>Options to migrate linked to the original service</td>
</tr>
<tr>
    <td><CopyableCode code="proposed_offer" /></td>
    <td><code>object</code></td>
    <td>Proposed commercial offer to replace the service (wire: proposedOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="service_to_migrate" /></td>
    <td><code>object</code></td>
    <td>Description of the service to migrate (wire: serviceToMigrate)</td>
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
    <td></td>
    <td></td>
    <td>Get all services you can migrate (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Ask for impacted services migration (Alpha version)</td>
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

Get all services you can migrate (Alpha version)

```sql
SELECT
order_id,
addons,
proposed_offer,
service_to_migrate
FROM ovh.me.incident_sbg_migrate_services
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

Ask for impacted services migration (Alpha version)

```sql
INSERT INTO ovh.me.incident_sbg_migrate_services (
dry_run,
service_ids
)
SELECT 
{{ dry_run }},
'{{ service_ids }}'
RETURNING
order
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_sbg_migrate_services
  props:
    - name: dry_run
      value: {{ dry_run }}
      description: |
        If false, the order will be registered; if true, the order will be returned but not registered. Useful to compute prices
    - name: service_ids
      value:
        - {{ service_ids }}
      description: |
        IDs of the services to migrate
`}</CodeBlock>

</TabItem>
</Tabs>
