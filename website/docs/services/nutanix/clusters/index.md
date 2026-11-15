--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - nutanix
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.nutanix.clusters" /></td></tr>
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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Cluster name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_redundancy_factor" /></td>
    <td><code>array</code></td>
    <td>Available redundancy Factor (wire: allowedRedundancyFactor)</td>
</tr>
<tr>
    <td><CopyableCode code="available_versions" /></td>
    <td><code>array</code></td>
    <td>Available versions to install (wire: availableVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current cluster's status (Active, Deploying, Error)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target Spec after deployment (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Nutanix Cluster State

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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Cluster name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_redundancy_factor" /></td>
    <td><code>array</code></td>
    <td>Available redundancy Factor (wire: allowedRedundancyFactor)</td>
</tr>
<tr>
    <td><CopyableCode code="available_versions" /></td>
    <td><code>array</code></td>
    <td>Available versions to install (wire: availableVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current cluster's status (Active, Deploying, Error)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target Spec after deployment (wire: targetSpec)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get nutanix cluster info</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Get list of owned Nutanix Clusters</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-redeploycluster"><code>redeploycluster</code></a>, <a href="#parameter-scale_out"><code>scale_out</code></a></td>
    <td>Update nutanix cluster info</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Launch a contact change procedure</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Ask for the termination of your service</td>
</tr>
<tr>
    <td><a href="#update_vrack"><CopyableCode code="update_vrack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-redeploycluster">
    <td><CopyableCode code="redeploycluster" /></td>
    <td><code>boolean</code></td>
    <td>I am aware that I am going to make changes that will reinstall my cluster</td>
</tr>
<tr id="parameter-scale_out">
    <td><CopyableCode code="scale_out" /></td>
    <td><code>boolean</code></td>
    <td>I am aware that I am going to make changes that will scale-out my cluster (wire: scaleOut)</td>
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

Get nutanix cluster info

```sql
SELECT
service_name,
allowed_redundancy_factor,
available_versions,
iam,
status,
target_spec
FROM ovh.nutanix.clusters
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get list of owned Nutanix Clusters

```sql
SELECT
service_name,
allowed_redundancy_factor,
available_versions,
iam,
status,
target_spec
FROM ovh.nutanix.clusters
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Update nutanix cluster info

```sql
UPDATE ovh.nutanix.clusters
SET 
dataservice_ip = '{{ dataservice_ip }}',
erasure_coding = {{ erasure_coding }},
gateway_cidr = '{{ gateway_cidr }}',
infra_vlan_number = {{ infra_vlan_number }},
install_prism_central = {{ install_prism_central }},
nodes = '{{ nodes }}',
prism_central = '{{ prism_central }}',
prism_element_vip = '{{ prism_element_vip }}',
redundancy_factor = {{ redundancy_factor }},
version = '{{ version }}'
WHERE 
service_name = '{{ service_name }}' --required
AND redeploycluster = {{ redeploycluster}}
AND scale_out = {{ scale_out}}
RETURNING
service_name,
allowed_redundancy_factor,
available_versions,
status,
target_spec;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'terminate', value: 'terminate' },
        { label: 'update_vrack', value: 'update_vrack' }
    ]}
>
<TabItem value="change_contact">

Launch a contact change procedure

```sql
EXEC ovh.nutanix.clusters.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirm service termination

```sql
EXEC ovh.nutanix.clusters.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"commentaryFutureUse": "{{ commentaryFutureUse }}", 
"commentaryReason": "{{ commentaryReason }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Ask for the termination of your service

```sql
EXEC ovh.nutanix.clusters.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="update_vrack">

successful operation

```sql
EXEC ovh.nutanix.clusters.update_vrack 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"vrackName": "{{ vrackName }}"
}'
;
```
</TabItem>
</Tabs>
