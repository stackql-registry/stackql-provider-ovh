--- 
title: domain_services
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_services
  - pack_xdsl
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

Creates, updates, deletes, gets or lists a <code>domain_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.pack_xdsl.domain_services" /></td></tr>
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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#parameter-pack_name"><code>pack_name</code></a></td>
    <td></td>
    <td>List the domain services of an xDSL pack. Returns the domain names ordered or transferred as a service of the pack.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-pack_name"><code>pack_name</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-tld"><code>tld</code></a></td>
    <td></td>
    <td>Create a domain service in an xDSL pack. Orders, transfers or triggers the given action on a domain with its TLD, using the auth code for a transfer. Returns the task that performs it.</td>
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
<tr id="parameter-pack_name">
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pack (wire: packName)</td>
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

List the domain services of an xDSL pack. Returns the domain names ordered or transferred as a service of the pack.

```sql
SELECT
value
FROM ovh.pack_xdsl.domain_services
WHERE pack_name = '{{ pack_name }}' -- required
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

Create a domain service in an xDSL pack. Orders, transfers or triggers the given action on a domain with its TLD, using the auth code for a transfer. Returns the task that performs it.

```sql
INSERT INTO ovh.pack_xdsl.domain_services (
action,
auth_info,
domain,
tld,
pack_name
)
SELECT 
'{{ action }}' /* required */,
'{{ auth_info }}',
'{{ domain }}' /* required */,
'{{ tld }}' /* required */,
'{{ pack_name }}'
RETURNING
id,
function,
status,
update_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_services
  props:
    - name: pack_name
      value: "{{ pack_name }}"
      description: Required parameter for the domain_services resource.
    - name: action
      value: "{{ action }}"
      description: |
        Domain action
      valid_values: ['create', 'trade', 'transfer']
    - name: auth_info
      value: "{{ auth_info }}"
      description: |
        Needed for transfer from another registrar
    - name: domain
      value: "{{ domain }}"
      description: |
        Domain name
    - name: tld
      value: "{{ tld }}"
      description: |
        TLD of the domain
`}</CodeBlock>

</TabItem>
</Tabs>
