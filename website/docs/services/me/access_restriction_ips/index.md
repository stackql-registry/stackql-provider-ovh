--- 
title: access_restriction_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - access_restriction_ips
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

Creates, updates, deletes, gets or lists an <code>access_restriction_ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_restriction_ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.access_restriction_ips" /></td></tr>
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
    <td>The Id of the restriction</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>An IP range where we will apply the rule (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>string</code></td>
    <td>Accept or deny IP access (accept, deny)</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>boolean</code></td>
    <td>Send an email if someone try to access with this IP address</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of all IP Restrictions

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
    <td>The Id of the restriction</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>An IP range where we will apply the rule (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>string</code></td>
    <td>Accept or deny IP access (accept, deny)</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>boolean</code></td>
    <td>Send an email if someone try to access with this IP address</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of IP restrictions</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-rule"><code>rule</code></a>, <a href="#parameter-warning"><code>warning</code></a></td>
    <td></td>
    <td>Add an IP access restriction</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Alter this object properties</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete this restriction rule</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The Id of the restriction</td>
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

Get this object properties

```sql
SELECT
id,
ip,
rule,
warning
FROM ovh.me.access_restriction_ips
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of IP restrictions

```sql
SELECT
id,
ip,
rule,
warning
FROM ovh.me.access_restriction_ips
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
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

Add an IP access restriction

```sql
INSERT INTO ovh.me.access_restriction_ips (
ip,
rule,
warning
)
SELECT 
'{{ ip }}' /* required */,
'{{ rule }}' /* required */,
{{ warning }} /* required */
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_restriction_ips
  props:
    - name: ip
      value: "{{ ip }}"
      description: |
        An IP range where we will apply the rule
    - name: rule
      value: "{{ rule }}"
      description: |
        Accept or deny IP access
      valid_values: ['accept', 'deny']
    - name: warning
      value: {{ warning }}
      description: |
        Send an email if someone try to access with this IP address
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

Alter this object properties

```sql
UPDATE ovh.me.access_restriction_ips
SET 
rule = '{{ rule }}',
warning = {{ warning }}
WHERE 
id = '{{ id }}' --required;
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

Delete this restriction rule

```sql
DELETE FROM ovh.me.access_restriction_ips
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
