--- 
title: region_loadbalancing_l7_policy_l7_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - region_loadbalancing_l7_policy_l7_rules
  - cloud_network
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

Creates, updates, deletes, gets or lists a <code>region_loadbalancing_l7_policy_l7_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_loadbalancing_l7_policy_l7_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_loadbalancing_l7_policy_l7_rules" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>The ID of the L7 rule</td>
</tr>
<tr>
    <td><CopyableCode code="compare_type" /></td>
    <td><code>string</code></td>
    <td>The comparison type for the L7 rule (contains, endsWith, equalTo, regex, startsWith) (wire: compareType)</td>
</tr>
<tr>
    <td><CopyableCode code="invert" /></td>
    <td><code>boolean</code></td>
    <td>When true the logic of the rule is inverted. For example, with invert set to true, equal to would become not equal to</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key to use for the comparison. For example, the name of the cookie to evaluate</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_type" /></td>
    <td><code>string</code></td>
    <td>The L7 rule type (cookie, fileType, header, hostName, path, sslConnHasCert, sslDNField, sslVerifyResult) (wire: ruleType)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value to use for the comparison. For example, the file type to compare</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

L7 rule

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the L7 rule</td>
</tr>
<tr>
    <td><CopyableCode code="compare_type" /></td>
    <td><code>string</code></td>
    <td>The comparison type for the L7 rule (contains, endsWith, equalTo, regex, startsWith) (wire: compareType)</td>
</tr>
<tr>
    <td><CopyableCode code="invert" /></td>
    <td><code>boolean</code></td>
    <td>When true the logic of the rule is inverted. For example, with invert set to true, equal to would become not equal to</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key to use for the comparison. For example, the name of the cookie to evaluate</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_type" /></td>
    <td><code>string</code></td>
    <td>The L7 rule type (cookie, fileType, header, hostName, path, sslConnHasCert, sslDNField, sslVerifyResult) (wire: ruleType)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value to use for the comparison. For example, the file type to compare</td>
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
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-l_7_rule_id"><code>l_7_rule_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-compare_type"><code>compare_type</code></a>, <a href="#parameter-rule_type"><code>rule_type</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-l_7_rule_id"><code>l_7_rule_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-compare_type"><code>compare_type</code></a>, <a href="#parameter-rule_type"><code>rule_type</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-l_7_rule_id"><code>l_7_rule_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-l_7_policy_id">
    <td><CopyableCode code="l_7_policy_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>L7 policy ID (wire: l7PolicyId)</td>
</tr>
<tr id="parameter-l_7_rule_id">
    <td><CopyableCode code="l_7_rule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>L7 rule ID (wire: l7RuleId)</td>
</tr>
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

successful operation

```sql
SELECT
id,
compare_type,
invert,
key,
operating_status,
provisioning_status,
rule_type,
value
FROM ovh.cloud_network.region_loadbalancing_l7_policy_l7_rules
WHERE l_7_policy_id = '{{ l_7_policy_id }}' -- required
AND l_7_rule_id = '{{ l_7_rule_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

L7 rule

```sql
SELECT
id,
compare_type,
invert,
key,
operating_status,
provisioning_status,
rule_type,
value
FROM ovh.cloud_network.region_loadbalancing_l7_policy_l7_rules
WHERE l_7_policy_id = '{{ l_7_policy_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

No description available.

```sql
INSERT INTO ovh.cloud_network.region_loadbalancing_l7_policy_l7_rules (
compare_type,
invert,
key,
rule_type,
value,
l_7_policy_id,
region_name,
service_name
)
SELECT 
'{{ compare_type }}' /* required */,
{{ invert }},
'{{ key }}',
'{{ rule_type }}' /* required */,
'{{ value }}' /* required */,
'{{ l_7_policy_id }}',
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
compare_type,
invert,
key,
operating_status,
provisioning_status,
rule_type,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_loadbalancing_l7_policy_l7_rules
  props:
    - name: l_7_policy_id
      value: "{{ l_7_policy_id }}"
      description: Required parameter for the region_loadbalancing_l7_policy_l7_rules resource.
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_loadbalancing_l7_policy_l7_rules resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_loadbalancing_l7_policy_l7_rules resource.
    - name: compare_type
      value: "{{ compare_type }}"
      description: |
        The comparison type for the L7 rule
      valid_values: ['contains', 'endsWith', 'equalTo', 'regex', 'startsWith']
    - name: invert
      value: {{ invert }}
      description: |
        When true the logic of the rule is inverted. For example, with invert set to true, equal to would become not equal to
    - name: key
      value: "{{ key }}"
      description: |
        The key to use for the comparison. For example, the name of the cookie to evaluate
    - name: rule_type
      value: "{{ rule_type }}"
      description: |
        The L7 rule type
      valid_values: ['cookie', 'fileType', 'header', 'hostName', 'path', 'sslConnHasCert', 'sslDNField', 'sslVerifyResult']
    - name: value
      value: "{{ value }}"
      description: |
        The value to use for the comparison. For example, the file type to compare
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

No description available.

```sql
UPDATE ovh.cloud_network.region_loadbalancing_l7_policy_l7_rules
SET 
compare_type = '{{ compare_type }}',
invert = {{ invert }},
key = '{{ key }}',
rule_type = '{{ rule_type }}',
value = '{{ value }}'
WHERE 
l_7_policy_id = '{{ l_7_policy_id }}' --required
AND l_7_rule_id = '{{ l_7_rule_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND compare_type = '{{ compare_type }}' --required
AND rule_type = '{{ rule_type }}' --required
AND value = '{{ value }}' --required
RETURNING
id,
compare_type,
invert,
key,
operating_status,
provisioning_status,
rule_type,
value;
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

No description available.

```sql
DELETE FROM ovh.cloud_network.region_loadbalancing_l7_policy_l7_rules
WHERE l_7_policy_id = '{{ l_7_policy_id }}' --required
AND l_7_rule_id = '{{ l_7_rule_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
