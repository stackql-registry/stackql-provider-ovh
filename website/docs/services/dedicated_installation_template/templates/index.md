--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_installation_template.templates" /></td></tr>
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
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>This template name (wire: templateName)</td>
</tr>
<tr>
    <td><CopyableCode code="bit_format" /></td>
    <td><code>integer</code></td>
    <td>this template bit format (32, 64) (wire: bitFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>category of this template (informative only) (backup, basic, customer, database, erp, hosting, management, other, readyToUse, virtualisation, virtualization)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>information about this template</td>
</tr>
<tr>
    <td><CopyableCode code="distribution" /></td>
    <td><code>string</code></td>
    <td>the distribution this template is based on</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_install" /></td>
    <td><code>string (date)</code></td>
    <td>after this date, install of this template will not be possible at OVH (wire: endOfInstall)</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>this template family type (bsd, custom, ibm, linux, solaris, unix, windows)</td>
</tr>
<tr>
    <td><CopyableCode code="filesystems" /></td>
    <td><code>array</code></td>
    <td>list of all filesystems available for this template</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>array</code></td>
    <td>Inputs</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>object</code></td>
    <td>This distribution licensing details</td>
</tr>
<tr>
    <td><CopyableCode code="lvm_ready" /></td>
    <td><code>boolean</code></td>
    <td>This distribution supports Logical Volumes (Linux LVM) (wire: lvmReady)</td>
</tr>
<tr>
    <td><CopyableCode code="no_partitioning" /></td>
    <td><code>boolean</code></td>
    <td>Partitioning customization is not available for this OS template (wire: noPartitioning)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>This distribution project details</td>
</tr>
<tr>
    <td><CopyableCode code="root_mountpoint" /></td>
    <td><code>string</code></td>
    <td>The mandatory mount point of the root filesystem on this OS (wire: rootMountpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="soft_raid_only_mirroring" /></td>
    <td><code>boolean</code></td>
    <td>Partitioning customization is available but limited to mirroring for this OS template (wire: softRaidOnlyMirroring)</td>
</tr>
<tr>
    <td><CopyableCode code="subfamily" /></td>
    <td><code>string</code></td>
    <td>this template subfamily type (alma, aos, arch, byoi, byolinux, centos, cloudlinux, coreos, debian, dgx, esxi, fedora, freebsd, gentoo, hyperv, omnios, openio, openmediavault, opensuse, ovh, pcs, power, proxmox, rhel, rocky, slackware, sles-sap, smartos, solusvm, ubuntu, windows-server-core, windows-server-desktop-exp, xcp, xen)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Available installation templates

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
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>This template name (wire: templateName)</td>
</tr>
<tr>
    <td><CopyableCode code="bit_format" /></td>
    <td><code>integer</code></td>
    <td>this template bit format (32, 64) (wire: bitFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>category of this template (informative only) (backup, basic, customer, database, erp, hosting, management, other, readyToUse, virtualisation, virtualization)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>information about this template</td>
</tr>
<tr>
    <td><CopyableCode code="distribution" /></td>
    <td><code>string</code></td>
    <td>the distribution this template is based on</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_install" /></td>
    <td><code>string (date)</code></td>
    <td>after this date, install of this template will not be possible at OVH (wire: endOfInstall)</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>this template family type (bsd, custom, ibm, linux, solaris, unix, windows)</td>
</tr>
<tr>
    <td><CopyableCode code="filesystems" /></td>
    <td><code>array</code></td>
    <td>list of all filesystems available for this template</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>array</code></td>
    <td>Inputs</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>object</code></td>
    <td>This distribution licensing details</td>
</tr>
<tr>
    <td><CopyableCode code="lvm_ready" /></td>
    <td><code>boolean</code></td>
    <td>This distribution supports Logical Volumes (Linux LVM) (wire: lvmReady)</td>
</tr>
<tr>
    <td><CopyableCode code="no_partitioning" /></td>
    <td><code>boolean</code></td>
    <td>Partitioning customization is not available for this OS template (wire: noPartitioning)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>This distribution project details</td>
</tr>
<tr>
    <td><CopyableCode code="root_mountpoint" /></td>
    <td><code>string</code></td>
    <td>The mandatory mount point of the root filesystem on this OS (wire: rootMountpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="soft_raid_only_mirroring" /></td>
    <td><code>boolean</code></td>
    <td>Partitioning customization is available but limited to mirroring for this OS template (wire: softRaidOnlyMirroring)</td>
</tr>
<tr>
    <td><CopyableCode code="subfamily" /></td>
    <td><code>string</code></td>
    <td>this template subfamily type (alma, aos, arch, byoi, byolinux, centos, cloudlinux, coreos, debian, dgx, esxi, fedora, freebsd, gentoo, hyperv, omnios, openio, openmediavault, opensuse, ovh, pcs, power, proxmox, rhel, rocky, slackware, sles-sap, smartos, solusvm, ubuntu, windows-server-core, windows-server-desktop-exp, xcp, xen)</td>
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
    <td><a href="#parameter-template_name"><code>template_name</code></a></td>
    <td></td>
    <td>Get an installation template. Returns the details of an installation template, such as its distribution, family, filesystems and inputs. After its endOfInstall date, the template can no longer be installed. This call does not require authentication.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List installation templates. Returns the names of the operating system installation templates. This call does not require authentication. To get the templates compatible with a server, use GET /dedicated/server/&#123;serviceName&#125;/install/compatibleTemplates.</td>
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

Get an installation template. Returns the details of an installation template, such as its distribution, family, filesystems and inputs. After its endOfInstall date, the template can no longer be installed. This call does not require authentication.

```sql
SELECT
template_name,
bit_format,
category,
description,
distribution,
end_of_install,
family,
filesystems,
inputs,
license,
lvm_ready,
no_partitioning,
project,
root_mountpoint,
soft_raid_only_mirroring,
subfamily
FROM ovh.dedicated_installation_template.templates
WHERE template_name = '{{ template_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List installation templates. Returns the names of the operating system installation templates. This call does not require authentication. To get the templates compatible with a server, use GET /dedicated/server/&#123;serviceName&#125;/install/compatibleTemplates.

```sql
SELECT
template_name,
bit_format,
category,
description,
distribution,
end_of_install,
family,
filesystems,
inputs,
license,
lvm_ready,
no_partitioning,
project,
root_mountpoint,
soft_raid_only_mirroring,
subfamily
FROM ovh.dedicated_installation_template.templates
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
