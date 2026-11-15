--- 
title: cdn_domain_options
hide_title: false
hide_table_of_contents: false
keywords:
  - cdn_domain_options
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

Creates, updates, deletes, gets or lists a <code>cdn_domain_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cdn_domain_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.cdn_domain_options" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Option name</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Option configuration</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable / Disable the option</td>
</tr>
<tr>
    <td><CopyableCode code="extra" /></td>
    <td><code>object</code></td>
    <td>Additional information about option</td>
</tr>
<tr>
    <td><CopyableCode code="pattern" /></td>
    <td><code>string</code></td>
    <td>Url pattern</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Option type (brotli, cache_rule, cors, devmode, geo_headers, hsts, https_redirect, mixed_content, mobile_redirect, prefetch, prewarm, querystring, waf)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Option details

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Option name</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Option configuration</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable / Disable the option</td>
</tr>
<tr>
    <td><CopyableCode code="extra" /></td>
    <td><code>object</code></td>
    <td>Additional information about option</td>
</tr>
<tr>
    <td><CopyableCode code="pattern" /></td>
    <td><code>string</code></td>
    <td>Url pattern</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Option type (brotli, cache_rule, cors, devmode, geo_headers, hsts, https_redirect, mixed_content, mobile_redirect, prefetch, prewarm, querystring, waf)</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-option_name"><code>option_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get details for an option on a domain</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List all options for a domain</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Add an option on a domain</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-option_name"><code>option_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Update an option on a domain</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-option_name"><code>option_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Remove or Reset an option to his default value</td>
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
<tr id="parameter-option_name">
    <td><CopyableCode code="option_name" /></td>
    <td><code>string</code></td>
    <td>Option name (wire: optionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Get details for an option on a domain

```sql
SELECT
name,
config,
enabled,
extra,
pattern,
type
FROM ovh.hosting_web.cdn_domain_options
WHERE domain_name = '{{ domain_name }}' -- required
AND option_name = '{{ option_name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all options for a domain

```sql
SELECT
name,
config,
enabled,
extra,
pattern,
type
FROM ovh.hosting_web.cdn_domain_options
WHERE domain_name = '{{ domain_name }}' -- required
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

Add an option on a domain

```sql
INSERT INTO ovh.hosting_web.cdn_domain_options (
config,
enabled,
name,
pattern,
type,
domain_name,
service_name
)
SELECT 
'{{ config }}',
{{ enabled }} /* required */,
'{{ name }}' /* required */,
'{{ pattern }}',
'{{ type }}' /* required */,
'{{ domain_name }}',
'{{ service_name }}'
RETURNING
name,
config,
enabled,
extra,
pattern,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cdn_domain_options
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the cdn_domain_options resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the cdn_domain_options resource.
    - name: config
      description: |
        Option configuration
      value:
        destination: "{{ destination }}"
        followUri: {{ followUri }}
        origins: "{{ origins }}"
        patternType: "{{ patternType }}"
        priority: {{ priority }}
        queryParameters: "{{ queryParameters }}"
        resources:
          - "{{ resources }}"
        statusCode: {{ statusCode }}
        ttl: {{ ttl }}
    - name: enabled
      value: {{ enabled }}
      description: |
        Enable / Disable the option
    - name: name
      value: "{{ name }}"
      description: |
        Option name
    - name: pattern
      value: "{{ pattern }}"
      description: |
        Url pattern
    - name: type
      value: "{{ type }}"
      description: |
        Option type
      valid_values: ['cache_rule']
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

Update an option on a domain

```sql
UPDATE ovh.hosting_web.cdn_domain_options
SET 
config = '{{ config }}',
enabled = {{ enabled }},
extra = '{{ extra }}',
pattern = '{{ pattern }}',
type = '{{ type }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND option_name = '{{ option_name }}' --required
AND service_name = '{{ service_name }}' --required
AND enabled = {{ enabled }} --required
AND type = '{{ type }}' --required
RETURNING
name,
config,
enabled,
extra,
pattern,
type;
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

Remove or Reset an option to his default value

```sql
DELETE FROM ovh.hosting_web.cdn_domain_options
WHERE domain_name = '{{ domain_name }}' --required
AND option_name = '{{ option_name }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
