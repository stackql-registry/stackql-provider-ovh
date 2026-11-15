--- 
title: partition_scheme_partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - partition_scheme_partitions
  - dedicated_installation_template
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

Creates, updates, deletes, gets or lists a <code>partition_scheme_partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partition_scheme_partitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_installation_template.partition_scheme_partitions" /></td></tr>
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
    <td><CopyableCode code="volume_name" /></td>
    <td><code>string</code></td>
    <td>Logical volume name (required if type is lv) or optional zpool name if filesystem is ZFS (wire: volumeName)</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem" /></td>
    <td><code>string</code></td>
    <td>Partition filesytem (btrfs, ext3, ext4, fat16, none, ntfs, reiserfs, swap, ufs, vmfs5, vmfs6, vmfsl, xfs, zfs)</td>
</tr>
<tr>
    <td><CopyableCode code="mountpoint" /></td>
    <td><code>string</code></td>
    <td>Partition mount point</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer</code></td>
    <td>specifies the creation order of the partition on the disk</td>
</tr>
<tr>
    <td><CopyableCode code="raid" /></td>
    <td><code>string</code></td>
    <td>Partition raid (0, 1, 10, 5, 6, 7)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Partition size (unit: MB GB TB, MB by default), 0 =&gt; rest of the space</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Partition type (logical, lv, primary)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

 Partitions defined in this partitioning scheme

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
    <td><CopyableCode code="volume_name" /></td>
    <td><code>string</code></td>
    <td>Logical volume name (required if type is lv) or optional zpool name if filesystem is ZFS (wire: volumeName)</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem" /></td>
    <td><code>string</code></td>
    <td>Partition filesytem (btrfs, ext3, ext4, fat16, none, ntfs, reiserfs, swap, ufs, vmfs5, vmfs6, vmfsl, xfs, zfs)</td>
</tr>
<tr>
    <td><CopyableCode code="mountpoint" /></td>
    <td><code>string</code></td>
    <td>Partition mount point</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer</code></td>
    <td>specifies the creation order of the partition on the disk</td>
</tr>
<tr>
    <td><CopyableCode code="raid" /></td>
    <td><code>string</code></td>
    <td>Partition raid (0, 1, 10, 5, 6, 7)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Partition size (unit: MB GB TB, MB by default), 0 =&gt; rest of the space</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Partition type (logical, lv, primary)</td>
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
    <td><a href="#parameter-mountpoint"><code>mountpoint</code></a>, <a href="#parameter-scheme_name"><code>scheme_name</code></a>, <a href="#parameter-template_name"><code>template_name</code></a></td>
    <td></td>
    <td>Get a partition. Returns the filesystem, type, size, RAID level and creation order of a partition of the partitioning scheme. A size of 0 means the rest of the disk space.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scheme_name"><code>scheme_name</code></a>, <a href="#parameter-template_name"><code>template_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List partitions. Returns the mount points of the partitions defined in the partitioning scheme. Each partition has a filesystem, a type, a size and a creation order on the disk.</td>
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
<tr id="parameter-mountpoint">
    <td><CopyableCode code="mountpoint" /></td>
    <td><code>string</code></td>
    <td>Partition mount point</td>
</tr>
<tr id="parameter-scheme_name">
    <td><CopyableCode code="scheme_name" /></td>
    <td><code>string</code></td>
    <td>This partitioning scheme name (wire: schemeName)</td>
</tr>
<tr id="parameter-template_name">
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>This template name (wire: templateName)</td>
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

Get a partition. Returns the filesystem, type, size, RAID level and creation order of a partition of the partitioning scheme. A size of 0 means the rest of the disk space.

```sql
SELECT
volume_name,
filesystem,
mountpoint,
order,
raid,
size,
type
FROM ovh.dedicated_installation_template.partition_scheme_partitions
WHERE mountpoint = '{{ mountpoint }}' -- required
AND scheme_name = '{{ scheme_name }}' -- required
AND template_name = '{{ template_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List partitions. Returns the mount points of the partitions defined in the partitioning scheme. Each partition has a filesystem, a type, a size and a creation order on the disk.

```sql
SELECT
volume_name,
filesystem,
mountpoint,
order,
raid,
size,
type
FROM ovh.dedicated_installation_template.partition_scheme_partitions
WHERE scheme_name = '{{ scheme_name }}' -- required
AND template_name = '{{ template_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
