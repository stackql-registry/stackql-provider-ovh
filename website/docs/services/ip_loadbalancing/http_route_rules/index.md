--- 
title: http_route_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - http_route_rules
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>http_route_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="http_route_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.http_route_rules" /></td></tr>
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
    <td><CopyableCode code="rule_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your rule (wire: ruleId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your rule (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code>string</code></td>
    <td>Name of the field to match like "protocol" or "host". See "/ipLoadbalancing/&#123;serviceName&#125;/availableRouteRules" for a list of available rules</td>
</tr>
<tr>
    <td><CopyableCode code="match" /></td>
    <td><code>string</code></td>
    <td>Matching operator. Not all operators are available for all fields. See "/ipLoadbalancing/&#123;serviceName&#125;/availableRouteRules" (contains, endswith, exists, in, internal, is, matches, startswith)</td>
</tr>
<tr>
    <td><CopyableCode code="negate" /></td>
    <td><code>boolean</code></td>
    <td>Invert the matching operator effect</td>
</tr>
<tr>
    <td><CopyableCode code="pattern" /></td>
    <td><code>string</code></td>
    <td>Value to match against this match. Interpretation if this field depends on the match and field</td>
</tr>
<tr>
    <td><CopyableCode code="sub_field" /></td>
    <td><code>string</code></td>
    <td>Name of sub-field, if applicable. This may be a Cookie or Header name for instance (wire: subField)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Rule of a route

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
    <td><CopyableCode code="rule_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your rule (wire: ruleId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your rule (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code>string</code></td>
    <td>Name of the field to match like "protocol" or "host". See "/ipLoadbalancing/&#123;serviceName&#125;/availableRouteRules" for a list of available rules</td>
</tr>
<tr>
    <td><CopyableCode code="match" /></td>
    <td><code>string</code></td>
    <td>Matching operator. Not all operators are available for all fields. See "/ipLoadbalancing/&#123;serviceName&#125;/availableRouteRules" (contains, endswith, exists, in, internal, is, matches, startswith)</td>
</tr>
<tr>
    <td><CopyableCode code="negate" /></td>
    <td><code>boolean</code></td>
    <td>Invert the matching operator effect</td>
</tr>
<tr>
    <td><CopyableCode code="pattern" /></td>
    <td><code>string</code></td>
    <td>Value to match against this match. Interpretation if this field depends on the match and field</td>
</tr>
<tr>
    <td><CopyableCode code="sub_field" /></td>
    <td><code>string</code></td>
    <td>Name of sub-field, if applicable. This may be a Cookie or Header name for instance (wire: subField)</td>
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
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a route rule</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List route rules</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-field"><code>field</code></a>, <a href="#parameter-match"><code>match</code></a></td>
    <td></td>
    <td>Create a route rule</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a route rule</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a route rule</td>
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
<tr id="parameter-route_id">
    <td><CopyableCode code="route_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your route (wire: routeId)</td>
</tr>
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your rule (wire: ruleId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
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

Get a route rule

```sql
SELECT
rule_id,
display_name,
field,
match,
negate,
pattern,
sub_field
FROM ovh.ip_loadbalancing.http_route_rules
WHERE route_id = '{{ route_id }}' -- required
AND rule_id = '{{ rule_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List route rules

```sql
SELECT
rule_id,
display_name,
field,
match,
negate,
pattern,
sub_field
FROM ovh.ip_loadbalancing.http_route_rules
WHERE route_id = '{{ route_id }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Create a route rule

```sql
INSERT INTO ovh.ip_loadbalancing.http_route_rules (
display_name,
field,
match,
negate,
pattern,
sub_field,
route_id,
service_name
)
SELECT 
'{{ display_name }}',
'{{ field }}' /* required */,
'{{ match }}' /* required */,
{{ negate }},
'{{ pattern }}',
'{{ sub_field }}',
'{{ route_id }}',
'{{ service_name }}'
RETURNING
rule_id,
display_name,
field,
match,
negate,
pattern,
sub_field
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: http_route_rules
  props:
    - name: route_id
      value: {{ route_id }}
      description: Required parameter for the http_route_rules resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the http_route_rules resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your rule
    - name: field
      value: "{{ field }}"
      description: |
        Name of the field to match like "protocol" or "host". See "/ipLoadbalancing/{serviceName}/availableRouteRules" for a list of available rules
    - name: match
      value: "{{ match }}"
      description: |
        Matching operator. Not all operators are available for all fields. See "/ipLoadbalancing/{serviceName}/availableRouteRules"
      valid_values: ['contains', 'endswith', 'exists', 'in', 'internal', 'is', 'matches', 'startswith']
    - name: negate
      value: {{ negate }}
      description: |
        Invert the matching operator effect
    - name: pattern
      value: "{{ pattern }}"
      description: |
        Value to match against this match. Interpretation if this field depends on the match and field
    - name: sub_field
      value: "{{ sub_field }}"
      description: |
        Name of sub-field, if applicable. This may be a Cookie or Header name for instance
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

Update a route rule

```sql
UPDATE ovh.ip_loadbalancing.http_route_rules
SET 
display_name = '{{ display_name }}',
field = '{{ field }}',
match = '{{ match }}',
negate = {{ negate }},
pattern = '{{ pattern }}',
sub_field = '{{ sub_field }}'
WHERE 
route_id = '{{ route_id }}' --required
AND rule_id = '{{ rule_id }}' --required
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

Delete a route rule

```sql
DELETE FROM ovh.ip_loadbalancing.http_route_rules
WHERE route_id = '{{ route_id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
