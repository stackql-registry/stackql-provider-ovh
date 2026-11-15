--- 
title: partition_options
hide_title: false
hide_table_of_contents: false
keywords:
  - partition_options
  - dedicated_nasha
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

Creates, updates, deletes, gets or lists a <code>partition_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partition_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_nasha.partition_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td>ID</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>the template name (Databases, Default, File Systems (big files), Virtual machines) (wire: templateName)</td>
</tr>
<tr>
    <td><CopyableCode code="atime" /></td>
    <td><code>string</code></td>
    <td>atime setting</td>
</tr>
<tr>
    <td><CopyableCode code="recordsize" /></td>
    <td><code>string</code></td>
    <td>ZFS recordsize</td>
</tr>
<tr>
    <td><CopyableCode code="sync" /></td>
    <td><code>string</code></td>
    <td>sync setting</td>
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
    <td><a href="#parameter-partition_name"><code>partition_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-partition_name"><code>partition_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Setup options</td>
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
<tr id="parameter-partition_name">
    <td><CopyableCode code="partition_name" /></td>
    <td><code>string</code></td>
    <td>the given name of partition (wire: partitionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your storage (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get this object properties

```sql
SELECT
id,
template_name,
atime,
recordsize,
sync
FROM ovh.dedicated_nasha.partition_options
WHERE partition_name = '{{ partition_name }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Setup options

```sql
INSERT INTO ovh.dedicated_nasha.partition_options (
atime,
recordsize,
sync,
template_name,
partition_name,
service_name
)
SELECT 
'{{ atime }}',
'{{ recordsize }}',
'{{ sync }}',
'{{ template_name }}',
'{{ partition_name }}',
'{{ service_name }}'
RETURNING
task_id,
partition_name,
storage_name,
details,
done_date,
last_update,
operation,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partition_options
  props:
    - name: partition_name
      value: "{{ partition_name }}"
      description: Required parameter for the partition_options resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the partition_options resource.
    - name: atime
      value: "{{ atime }}"
      description: |
        atime setting
      valid_values: ['off', 'on']
    - name: recordsize
      value: "{{ recordsize }}"
      description: |
        ZFS recordsize
      valid_values: ['1048576', '131072', '16384', '32768', '4096', '65536', '8192']
    - name: sync
      value: "{{ sync }}"
      description: |
        sync setting
      valid_values: ['always', 'disabled', 'standard']
    - name: template_name
      value: "{{ template_name }}"
      description: |
        The name of the usage template to apply for this partition.
      valid_values: ['Databases', 'Default', 'File Systems (big files)', 'Virtual machines']
`}</CodeBlock>

</TabItem>
</Tabs>
