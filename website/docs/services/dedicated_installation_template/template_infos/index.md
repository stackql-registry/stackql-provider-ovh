--- 
title: template_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - template_infos
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

Creates, updates, deletes, gets or lists a <code>template_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_installation_template.template_infos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A structure describing some interesting facts about an OS template

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
    <td>OS template name (wire: templateName)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>OS Category (also called OS usage) (backup, basic, customer, database, erp, hosting, management, other, readyToUse, virtualisation, virtualization)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>OS long name</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_install" /></td>
    <td><code>string (date)</code></td>
    <td>OS template end of install at OVH date (wire: endOfInstall)</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>OS family (also called OS type) (bsd, custom, ibm, linux, solaris, unix, windows)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>object</code></td>
    <td>OS template license details</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>OS template project details</td>
</tr>
<tr>
    <td><CopyableCode code="subfamily" /></td>
    <td><code>string</code></td>
    <td>OS subfamily (alma, aos, arch, byoi, byolinux, centos, cloudlinux, coreos, debian, dgx, esxi, fedora, freebsd, gentoo, hyperv, omnios, openio, openmediavault, opensuse, ovh, pcs, power, proxmox, rhel, rocky, slackware, sles-sap, smartos, solusvm, ubuntu, windows-server-core, windows-server-desktop-exp, xcp, xen)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List installation template details. Returns the details of the available operating system templates: name, category, family, subfamily, end of install date, project and license. This call does not require authentication.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List installation template details. Returns the details of the available operating system templates: name, category, family, subfamily, end of install date, project and license. This call does not require authentication.

```sql
SELECT
template_name,
category,
description,
end_of_install,
family,
license,
project,
subfamily
FROM ovh.dedicated_installation_template.template_infos
;
```
</TabItem>
</Tabs>
