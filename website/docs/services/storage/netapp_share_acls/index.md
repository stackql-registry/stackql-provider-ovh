--- 
title: netapp_share_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - netapp_share_acls
  - storage
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

Creates, updates, deletes, gets or lists a <code>netapp_share_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="netapp_share_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.storage.netapp_share_acls" /></td></tr>
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
    <td>Rule ID</td>
</tr>
<tr>
    <td><CopyableCode code="access_level" /></td>
    <td><code>string</code></td>
    <td>Rule access level (ro, rw) (wire: accessLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="access_to" /></td>
    <td><code>string</code></td>
    <td>Rule destination (wire: accessTo)</td>
</tr>
<tr>
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>Rule access type (ip) (wire: accessType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Rule creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Rule status (active, applying, denying, error, queued_to_apply, queued_to_deny)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A share ACL rule

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
    <td>Rule ID</td>
</tr>
<tr>
    <td><CopyableCode code="access_level" /></td>
    <td><code>string</code></td>
    <td>Rule access level (ro, rw) (wire: accessLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="access_to" /></td>
    <td><code>string</code></td>
    <td>Rule destination (wire: accessTo)</td>
</tr>
<tr>
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>Rule access type (ip) (wire: accessType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Rule creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Rule status (active, applying, denying, error, queued_to_apply, queued_to_deny)</td>
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
    <td><a href="#parameter-acl_rule_id"><code>acl_rule_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td></td>
    <td>Returns the ACL and its status. An ACL in error is not applied to the share: delete it and create it again.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td></td>
    <td>Returns the ACLs of the share, including those still being applied or removed. Check the status of each ACL to know whether it is in effect.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-access_level"><code>access_level</code></a>, <a href="#parameter-access_to"><code>access_to</code></a></td>
    <td></td>
    <td>Grants an IPv4 address or IPv4 CIDR block read-only or read-write access to the share. Creation is asynchronous: the ACL is returned with status queued_to_apply, follow its status until active. The call is rejected while the share is being created, resized, reverted or replicated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-acl_rule_id"><code>acl_rule_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td></td>
    <td>Revokes access to the share. Clients already mounting the share using it lose access. Deletion is asynchronous: the ACL stays listed with status queued_to_deny or denying until it is removed.</td>
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
<tr id="parameter-acl_rule_id">
    <td><CopyableCode code="acl_rule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Acl rule ID (wire: aclRuleId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share ID (wire: shareId)</td>
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

Returns the ACL and its status. An ACL in error is not applied to the share: delete it and create it again.

```sql
SELECT
id,
access_level,
access_to,
access_type,
created_at,
status
FROM ovh.storage.netapp_share_acls
WHERE acl_rule_id = '{{ acl_rule_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND share_id = '{{ share_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the ACLs of the share, including those still being applied or removed. Check the status of each ACL to know whether it is in effect.

```sql
SELECT
id,
access_level,
access_to,
access_type,
created_at,
status
FROM ovh.storage.netapp_share_acls
WHERE service_name = '{{ service_name }}' -- required
AND share_id = '{{ share_id }}' -- required
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

Grants an IPv4 address or IPv4 CIDR block read-only or read-write access to the share. Creation is asynchronous: the ACL is returned with status queued_to_apply, follow its status until active. The call is rejected while the share is being created, resized, reverted or replicated.

```sql
INSERT INTO ovh.storage.netapp_share_acls (
access_level,
access_to,
service_name,
share_id
)
SELECT 
'{{ access_level }}' /* required */,
'{{ access_to }}' /* required */,
'{{ service_name }}',
'{{ share_id }}'
RETURNING
id,
access_level,
access_to,
access_type,
created_at,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: netapp_share_acls
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the netapp_share_acls resource.
    - name: share_id
      value: "{{ share_id }}"
      description: Required parameter for the netapp_share_acls resource.
    - name: access_level
      value: "{{ access_level }}"
      description: |
        Rule access level
      valid_values: ['ro', 'rw']
    - name: access_to
      value: "{{ access_to }}"
      description: |
        Rule destination
`}</CodeBlock>

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

Revokes access to the share. Clients already mounting the share using it lose access. Deletion is asynchronous: the ACL stays listed with status queued_to_deny or denying until it is removed.

```sql
DELETE FROM ovh.storage.netapp_share_acls
WHERE acl_rule_id = '{{ acl_rule_id }}' --required
AND service_name = '{{ service_name }}' --required
AND share_id = '{{ share_id }}' --required
;
```
</TabItem>
</Tabs>
