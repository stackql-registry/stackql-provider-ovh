--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - dedicated_ceph
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_ceph.clusters" /></td></tr>
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
    <td>ID of cluster (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="ceph_mons" /></td>
    <td><code>array</code></td>
    <td>List of CEPH monitor IPs (wire: cephMons)</td>
</tr>
<tr>
    <td><CopyableCode code="ceph_version" /></td>
    <td><code>string</code></td>
    <td>Used version of ceph (wire: cephVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>Creation date (wire: createDate)</td>
</tr>
<tr>
    <td><CopyableCode code="crush_tunables" /></td>
    <td><code>string</code></td>
    <td>Tunables of cluster (ARGONAUT, BOBTAIL, DEFAULT, FIREFLY, HAMMER, JEWEL, LEGACY, OPTIMAL) (wire: crushTunables)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Name of cluster</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Name of region where cluster is located</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of cluster in TB</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of cluster (ACTIVE, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of cluster (CREATING, DELETED, DELETING, INSTALLED, TASK_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string</code></td>
    <td>Last update date (wire: updateDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details about ceph cluster

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
    <td>ID of cluster (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="ceph_mons" /></td>
    <td><code>array</code></td>
    <td>List of CEPH monitor IPs (wire: cephMons)</td>
</tr>
<tr>
    <td><CopyableCode code="ceph_version" /></td>
    <td><code>string</code></td>
    <td>Used version of ceph (wire: cephVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>Creation date (wire: createDate)</td>
</tr>
<tr>
    <td><CopyableCode code="crush_tunables" /></td>
    <td><code>string</code></td>
    <td>Tunables of cluster (ARGONAUT, BOBTAIL, DEFAULT, FIREFLY, HAMMER, JEWEL, LEGACY, OPTIMAL) (wire: crushTunables)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Name of cluster</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Name of region where cluster is located</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of cluster in TB</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of cluster (ACTIVE, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of cluster (CREATING, DELETED, DELETING, INSTALLED, TASK_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string</code></td>
    <td>Last update date (wire: updateDate)</td>
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
    <td>Returns the configuration and the current state of the cluster. The status is INSTALLED once all requested tasks are done.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the service names of the clusters, which are also their Ceph fsid.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-crush_tunables"><code>crush_tunables</code></a>, <a href="#parameter-label"><code>label</code></a></td>
    <td></td>
    <td>Updates the label and the CRUSH tunables of the cluster.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the change of the admin, tech or billing contact and returns the request IDs.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirms the termination with the token sent by email. The reason and comments are optional.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Emails a termination token to the admin contact, to use with *Confirm termination*.</td>
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

Returns the configuration and the current state of the cluster. The status is INSTALLED once all requested tasks are done.

```sql
SELECT
service_name,
ceph_mons,
ceph_version,
create_date,
crush_tunables,
iam,
label,
region,
size,
state,
status,
update_date
FROM ovh.dedicated_ceph.clusters
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the service names of the clusters, which are also their Ceph fsid.

```sql
SELECT
service_name,
ceph_mons,
ceph_version,
create_date,
crush_tunables,
iam,
label,
region,
size,
state,
status,
update_date
FROM ovh.dedicated_ceph.clusters
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

Updates the label and the CRUSH tunables of the cluster.

```sql
UPDATE ovh.dedicated_ceph.clusters
SET 
crush_tunables = '{{ crush_tunables }}',
label = '{{ label }}'
WHERE 
service_name = '{{ service_name }}' --required
AND crush_tunables = '{{ crush_tunables }}' --required
AND label = '{{ label }}' --required;
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
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Starts the change of the admin, tech or billing contact and returns the request IDs.

```sql
EXEC ovh.dedicated_ceph.clusters.change_contact 
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

Confirms the termination with the token sent by email. The reason and comments are optional.

```sql
EXEC ovh.dedicated_ceph.clusters.confirm_termination 
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

Emails a termination token to the admin contact, to use with *Confirm termination*.

```sql
EXEC ovh.dedicated_ceph.clusters.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
