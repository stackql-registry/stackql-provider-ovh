--- 
title: names
hide_title: false
hide_table_of_contents: false
keywords:
  - names
  - domain_v2
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

Creates, updates, deletes, gets or lists a <code>names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain_v2.names" /></td></tr>
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
    <td><code>string</code></td>
    <td>Unique identifier of the resource. Here, the domain name itself is used as an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the domain name (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the domain name resource (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the domain name resource. A new target specification request will be accepted only in `READY`, `UPDATING` or `ERROR` status. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Latest target specification of the domain name resource (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A domain name resource

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
    <td><code>string</code></td>
    <td>Unique identifier of the resource. Here, the domain name itself is used as an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the domain name (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the domain name resource (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the domain name resource. A new target specification request will be accepted only in `READY`, `UPDATING` or `ERROR` status. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Latest target specification of the domain name resource (wire: targetSpec)</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a></td>
    <td></td>
    <td>Get a domain name resource (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-additional_states"><code>additional_states</code></a>, <a href="#parameter-contact_administrator"><code>contact_administrator</code></a>, <a href="#parameter-contact_billing"><code>contact_billing</code></a>, <a href="#parameter-contact_owner"><code>contact_owner</code></a>, <a href="#parameter-contact_technical"><code>contact_technical</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-main_state"><code>main_state</code></a>, <a href="#parameter-search_value"><code>search_value</code></a>, <a href="#parameter-suspension_state"><code>suspension_state</code></a></td>
    <td>List all domain name resources (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Update an existing domain name by modifying various configurations through the targetSpec (Beta version)</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Domain name (wire: domainName)</td>
</tr>
<tr id="parameter-additional_states">
    <td><CopyableCode code="additional_states" /></td>
    <td><code>array</code></td>
    <td>Filter the results having all these additional states (wire: additionalStates)</td>
</tr>
<tr id="parameter-contact_administrator">
    <td><CopyableCode code="contact_administrator" /></td>
    <td><code>array</code></td>
    <td>Filter the results by administrator contact id (wire: contactAdministrator)</td>
</tr>
<tr id="parameter-contact_billing">
    <td><CopyableCode code="contact_billing" /></td>
    <td><code>array</code></td>
    <td>Filter the results by billing contact id (wire: contactBilling)</td>
</tr>
<tr id="parameter-contact_owner">
    <td><CopyableCode code="contact_owner" /></td>
    <td><code>array</code></td>
    <td>Filter the results by owner contact id (wire: contactOwner)</td>
</tr>
<tr id="parameter-contact_technical">
    <td><CopyableCode code="contact_technical" /></td>
    <td><code>array</code></td>
    <td>Filter the results by technical contact id (wire: contactTechnical)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-main_state">
    <td><CopyableCode code="main_state" /></td>
    <td><code>array</code></td>
    <td>Filter the results having all these main states (wire: mainState)</td>
</tr>
<tr id="parameter-search_value">
    <td><CopyableCode code="search_value" /></td>
    <td><code>string</code></td>
    <td>Filter the results with the search value on resource id (wire: searchValue)</td>
</tr>
<tr id="parameter-suspension_state">
    <td><CopyableCode code="suspension_state" /></td>
    <td><code>array</code></td>
    <td>Filter the results having all these suspension states (wire: suspensionState)</td>
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

Get a domain name resource (Beta version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
iam,
resource_status,
target_spec
FROM ovh.domain_v2.names
WHERE domain_name = '{{ domain_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all domain name resources (Beta version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
iam,
resource_status,
target_spec
FROM ovh.domain_v2.names
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND additional_states = '{{ additional_states }}'
AND contact_administrator = '{{ contact_administrator }}'
AND contact_billing = '{{ contact_billing }}'
AND contact_owner = '{{ contact_owner }}'
AND contact_technical = '{{ contact_technical }}'
AND iam_tags = '{{ iam_tags }}'
AND main_state = '{{ main_state }}'
AND search_value = '{{ search_value }}'
AND suspension_state = '{{ suspension_state }}'
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

Update an existing domain name by modifying various configurations through the targetSpec (Beta version)

```sql
UPDATE ovh.domain_v2.names
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
domain_name = '{{ domain_name }}' --required
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
