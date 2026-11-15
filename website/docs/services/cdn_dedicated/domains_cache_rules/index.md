--- 
title: domains_cache_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - domains_cache_rules
  - cdn_dedicated
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

Creates, updates, deletes, gets or lists a <code>domains_cache_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains_cache_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cdn_dedicated.domains_cache_rules" /></td></tr>
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
    <td><CopyableCode code="cache_rule_id" /></td>
    <td><code>integer</code></td>
    <td>Id for this cache rule (wire: cacheRuleId)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_type" /></td>
    <td><code>string</code></td>
    <td>All type a cache can be in (forceCache, noCache) (wire: cacheType)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="file_match" /></td>
    <td><code>string</code></td>
    <td> (wire: fileMatch)</td>
</tr>
<tr>
    <td><CopyableCode code="file_type" /></td>
    <td><code>string</code></td>
    <td>All states an anycast pool can be in (extension, file, folder) (wire: fileType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>All states a status can be in (creating, deleting, error, off, on, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

CacheRules for a domain

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
    <td><CopyableCode code="cache_rule_id" /></td>
    <td><code>integer</code></td>
    <td>Id for this cache rule (wire: cacheRuleId)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_type" /></td>
    <td><code>string</code></td>
    <td>All type a cache can be in (forceCache, noCache) (wire: cacheType)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="file_match" /></td>
    <td><code>string</code></td>
    <td> (wire: fileMatch)</td>
</tr>
<tr>
    <td><CopyableCode code="file_type" /></td>
    <td><code>string</code></td>
    <td>All states an anycast pool can be in (extension, file, folder) (wire: fileType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>All states a status can be in (creating, deleting, error, off, on, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cache_rule_id"><code>cache_rule_id</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a cache rule</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-file_match"><code>file_match</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List cache rules</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-cache_type"><code>cache_type</code></a>, <a href="#parameter-file_match"><code>file_match</code></a>, <a href="#parameter-file_type"><code>file_type</code></a>, <a href="#parameter-ttl"><code>ttl</code></a></td>
    <td></td>
    <td>Create a cache rule</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cache_rule_id"><code>cache_rule_id</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a cache rule</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cache_rule_id"><code>cache_rule_id</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a cache rule</td>
</tr>
<tr>
    <td><a href="#flush"><CopyableCode code="flush" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cacheRuleId"><code>cacheRuleId</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Flush the cache of a rule</td>
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
<tr id="parameter-cacheRuleId">
    <td><CopyableCode code="cacheRuleId" /></td>
    <td><code>integer</code></td>
    <td>Id for this cache rule</td>
</tr>
<tr id="parameter-cache_rule_id">
    <td><CopyableCode code="cache_rule_id" /></td>
    <td><code>integer</code></td>
    <td>Id for this cache rule (wire: cacheRuleId)</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain of this object</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your CDN offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your CDN offer (wire: serviceName)</td>
</tr>
<tr id="parameter-file_match">
    <td><CopyableCode code="file_match" /></td>
    <td><code>string</code></td>
    <td>Filter the value of fileMatch property (like) (wire: fileMatch)</td>
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

Get a cache rule

```sql
SELECT
cache_rule_id,
cache_type,
domain,
file_match,
file_type,
status,
ttl
FROM ovh.cdn_dedicated.domains_cache_rules
WHERE cache_rule_id = '{{ cache_rule_id }}' -- required
AND domain = '{{ domain }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List cache rules

```sql
SELECT
cache_rule_id,
cache_type,
domain,
file_match,
file_type,
status,
ttl
FROM ovh.cdn_dedicated.domains_cache_rules
WHERE domain = '{{ domain }}' -- required
AND service_name = '{{ service_name }}' -- required
AND file_match = '{{ file_match }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a cache rule

```sql
INSERT INTO ovh.cdn_dedicated.domains_cache_rules (
cache_type,
file_match,
file_type,
ttl,
domain,
service_name
)
SELECT 
'{{ cache_type }}' /* required */,
'{{ file_match }}' /* required */,
'{{ file_type }}' /* required */,
{{ ttl }} /* required */,
'{{ domain }}',
'{{ service_name }}'
RETURNING
cache_rule_id,
cache_type,
domain,
file_match,
file_type,
status,
ttl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains_cache_rules
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the domains_cache_rules resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the domains_cache_rules resource.
    - name: cache_type
      value: "{{ cache_type }}"
      description: |
        Type of cache rule to add to the domain
      valid_values: ['forceCache', 'noCache']
    - name: file_match
      value: "{{ file_match }}"
      description: |
        File match for cache rule to add to the domain
    - name: file_type
      value: "{{ file_type }}"
      description: |
        File type for cache rule to add to the domain
      valid_values: ['extension', 'file', 'folder']
    - name: ttl
      value: {{ ttl }}
      description: |
        ttl for cache rule to add to the domain
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

Update a cache rule

```sql
UPDATE ovh.cdn_dedicated.domains_cache_rules
SET 
status = '{{ status }}',
ttl = {{ ttl }}
WHERE 
cache_rule_id = '{{ cache_rule_id }}' --required
AND domain = '{{ domain }}' --required
AND service_name = '{{ service_name }}' --required;
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

Delete a cache rule

```sql
DELETE FROM ovh.cdn_dedicated.domains_cache_rules
WHERE cache_rule_id = '{{ cache_rule_id }}' --required
AND domain = '{{ domain }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="flush"
    values={[
        { label: 'flush', value: 'flush' }
    ]}
>
<TabItem value="flush">

Flush the cache of a rule

```sql
EXEC ovh.cdn_dedicated.domains_cache_rules.flush 
@cacheRuleId='{{ cacheRuleId }}' --required, 
@domain='{{ domain }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
