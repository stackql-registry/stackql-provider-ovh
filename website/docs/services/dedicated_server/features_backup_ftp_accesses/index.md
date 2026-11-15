--- 
title: features_backup_ftp_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - features_backup_ftp_accesses
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>features_backup_ftp_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="features_backup_ftp_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.features_backup_ftp_accesses" /></td></tr>
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
    <td><CopyableCode code="cifs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow the CIFS (SMB) protocol for this ACL</td>
</tr>
<tr>
    <td><CopyableCode code="ftp" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow the FTP protocol for this ACL</td>
</tr>
<tr>
    <td><CopyableCode code="ip_block" /></td>
    <td><code>string (ip-block)</code></td>
    <td>The IP Block specific to this ACL (example: 192.0.2.0/24) (wire: ipBlock)</td>
</tr>
<tr>
    <td><CopyableCode code="is_applied" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule has been applied on the Backup Ftp (wire: isApplied)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last object modification (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="nfs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow the NFS protocol for this ACL</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Backup Ftp ACL for this server and Backup Ftp

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
    <td><CopyableCode code="cifs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow the CIFS (SMB) protocol for this ACL</td>
</tr>
<tr>
    <td><CopyableCode code="ftp" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow the FTP protocol for this ACL</td>
</tr>
<tr>
    <td><CopyableCode code="ip_block" /></td>
    <td><code>string (ip-block)</code></td>
    <td>The IP Block specific to this ACL (example: 192.0.2.0/24) (wire: ipBlock)</td>
</tr>
<tr>
    <td><CopyableCode code="is_applied" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule has been applied on the Backup Ftp (wire: isApplied)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last object modification (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="nfs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow the NFS protocol for this ACL</td>
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
    <td><a href="#parameter-ip_block"><code>ip_block</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a backup FTP ACL. Returns the protocols allowed for the IP block (FTP, NFS, CIFS), whether the rule is applied on the backup FTP space and its last update date.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List backup FTP ACLs. Returns the IP blocks authorized on the backup FTP space. Get an ACL to see the protocols it allows: FTP, NFS and CIFS (SMB).</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-cifs"><code>cifs</code></a>, <a href="#parameter-ip_block"><code>ip_block</code></a>, <a href="#parameter-nfs"><code>nfs</code></a></td>
    <td></td>
    <td>Create a backup FTP ACL. Authorizes an IP block on the backup FTP space with the chosen protocols and returns a task. At least one of ftp, nfs and cifs must be enabled; ftp is false when omitted. authorizableBlocks lists the eligible blocks.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip_block"><code>ip_block</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a backup FTP ACL. Updates the protocols allowed for the IP block: ftp, nfs and cifs. The change is applied asynchronously: isApplied stays false until it is in effect.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip_block"><code>ip_block</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a backup FTP ACL. Revokes the access of the IP block to the backup FTP space and returns a task. The task carries the status of the revocation.</td>
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
<tr id="parameter-ip_block">
    <td><CopyableCode code="ip_block" /></td>
    <td><code>string (ip-block)</code></td>
    <td>The IP Block specific to this ACL (wire: ipBlock)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
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

Get a backup FTP ACL. Returns the protocols allowed for the IP block (FTP, NFS, CIFS), whether the rule is applied on the backup FTP space and its last update date.

```sql
SELECT
cifs,
ftp,
ip_block,
is_applied,
last_update,
nfs
FROM ovh.dedicated_server.features_backup_ftp_accesses
WHERE ip_block = '{{ ip_block }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List backup FTP ACLs. Returns the IP blocks authorized on the backup FTP space. Get an ACL to see the protocols it allows: FTP, NFS and CIFS (SMB).

```sql
SELECT
cifs,
ftp,
ip_block,
is_applied,
last_update,
nfs
FROM ovh.dedicated_server.features_backup_ftp_accesses
WHERE service_name = '{{ service_name }}' -- required
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

Create a backup FTP ACL. Authorizes an IP block on the backup FTP space with the chosen protocols and returns a task. At least one of ftp, nfs and cifs must be enabled; ftp is false when omitted. authorizableBlocks lists the eligible blocks.

```sql
INSERT INTO ovh.dedicated_server.features_backup_ftp_accesses (
cifs,
ftp,
ip_block,
nfs,
service_name
)
SELECT 
{{ cifs }} /* required */,
{{ ftp }},
'{{ ip_block }}' /* required */,
{{ nfs }} /* required */,
'{{ service_name }}'
RETURNING
planned_intervention_id,
task_id,
change_uuid,
comment,
done_date,
function,
last_update,
need_schedule,
note,
start_date,
status,
tags,
ticket_reference
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: features_backup_ftp_accesses
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the features_backup_ftp_accesses resource.
    - name: cifs
      value: {{ cifs }}
      description: |
        Whether to allow the CIFS (SMB) protocol for this ACL
    - name: ftp
      value: {{ ftp }}
      description: |
        Whether to allow the FTP protocol for this ACL
    - name: ip_block
      value: "{{ ip_block }}"
      description: |
        The IP Block specific to this ACL. It musts belong to your server.
    - name: nfs
      value: {{ nfs }}
      description: |
        Whether to allow the NFS protocol for this ACL
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

Update a backup FTP ACL. Updates the protocols allowed for the IP block: ftp, nfs and cifs. The change is applied asynchronously: isApplied stays false until it is in effect.

```sql
UPDATE ovh.dedicated_server.features_backup_ftp_accesses
SET 
cifs = {{ cifs }},
ftp = {{ ftp }},
nfs = {{ nfs }}
WHERE 
ip_block = '{{ ip_block }}' --required
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

Delete a backup FTP ACL. Revokes the access of the IP block to the backup FTP space and returns a task. The task carries the status of the revocation.

```sql
DELETE FROM ovh.dedicated_server.features_backup_ftp_accesses
WHERE ip_block = '{{ ip_block }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
