--- 
title: eligibility_search_buildings
hide_title: false
hide_table_of_contents: false
keywords:
  - eligibility_search_buildings
  - connectivity
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

Creates, updates, deletes, gets or lists an <code>eligibility_search_buildings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="eligibility_search_buildings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.connectivity.eligibility_search_buildings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Returns, as an asynchronous task, the buildings at an address with their reference, name, type, NRO and stairs. The address needs at least a street code and street number, or a Hexacle.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Returns, as an asynchronous task, the buildings at an address with their reference, name, type, NRO and stairs. The address needs at least a street code and street number, or a Hexacle.

```sql
INSERT INTO ovh.connectivity.eligibility_search_buildings (
hexacle,
street_alt_code,
street_code,
street_number
)
SELECT 
'{{ hexacle }}',
'{{ street_alt_code }}',
'{{ street_code }}',
'{{ street_number }}'
RETURNING
error,
result,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: eligibility_search_buildings
  props:
    - name: hexacle
      value: "{{ hexacle }}"
      description: |
        Hexacle is a French unique identifier of the address (you can get it with POST /connectivity/eligibility/search/streetNumbers/details)
    - name: street_alt_code
      value: "{{ street_alt_code }}"
      description: |
        A possible alternative identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)
    - name: street_code
      value: "{{ street_code }}"
      description: |
        Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)
    - name: street_number
      value: "{{ street_number }}"
      description: |
        Street number
`}</CodeBlock>

</TabItem>
</Tabs>
