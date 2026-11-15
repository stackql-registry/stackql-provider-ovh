--- 
title: offer_capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - offer_capabilities
  - hosting_web
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

Creates, updates, deletes, gets or lists an <code>offer_capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offer_capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.offer_capabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="attached_domains" /></td>
    <td><code>integer</code></td>
    <td>Number of domains you can attach to your hosting (wire: attachedDomains)</td>
</tr>
<tr>
    <td><CopyableCode code="crontab" /></td>
    <td><code>boolean</code></td>
    <td>Does the offer allow crontab</td>
</tr>
<tr>
    <td><CopyableCode code="database_engines" /></td>
    <td><code>integer</code></td>
    <td>Number of database engines allowed for your hosting (wire: databaseEngines)</td>
</tr>
<tr>
    <td><CopyableCode code="databases" /></td>
    <td><code>array</code></td>
    <td>Describe all databases type you can have</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>object</code></td>
    <td>Disk capacity and type available for your hosting ( null for unlimited )</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>object</code></td>
    <td>Describe all email offer you can have</td>
</tr>
<tr>
    <td><CopyableCode code="env_vars" /></td>
    <td><code>integer</code></td>
    <td>Number of environment variables allowed for your hosting (wire: envVars)</td>
</tr>
<tr>
    <td><CopyableCode code="extra_users" /></td>
    <td><code>integer</code></td>
    <td>Number of ftp user you can create (wire: extraUsers)</td>
</tr>
<tr>
    <td><CopyableCode code="files_browser" /></td>
    <td><code>boolean</code></td>
    <td>Does the offer allow access to web files browser? (wire: filesBrowser)</td>
</tr>
<tr>
    <td><CopyableCode code="highlight" /></td>
    <td><code>string</code></td>
    <td>Marketing information about the current offer (best-seller, new)</td>
</tr>
<tr>
    <td><CopyableCode code="languages" /></td>
    <td><code>object</code></td>
    <td>Language available for cron script</td>
</tr>
<tr>
    <td><CopyableCode code="module_one_click" /></td>
    <td><code>boolean</code></td>
    <td>Does the offer allow 1-click modules? (wire: moduleOneClick)</td>
</tr>
<tr>
    <td><CopyableCode code="private_databases" /></td>
    <td><code>array</code></td>
    <td>Describe all privateDatabases type you can have (wire: privateDatabases)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimes" /></td>
    <td><code>integer</code></td>
    <td>Number of runtimes allowed for your hosting</td>
</tr>
<tr>
    <td><CopyableCode code="sites_recommended" /></td>
    <td><code>integer</code></td>
    <td>Number of sites recommended for your hosting ( -1 for unlimited ) (wire: sitesRecommended)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh" /></td>
    <td><code>boolean</code></td>
    <td>Does the offer allow SSH access</td>
</tr>
<tr>
    <td><CopyableCode code="traffic" /></td>
    <td><code>object</code></td>
    <td>Traffic quota size for your hosting ( null for unlimited )</td>
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
    <td><a href="#parameter-offer"><code>offer</code></a></td>
    <td></td>
    <td>Get offer capabilities. Returns what an offer includes: attached domains, databases, disk, traffic, SSH, cron, modules and runtimes.</td>
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
<tr id="parameter-offer">
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Describe offer capabilities</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get offer capabilities. Returns what an offer includes: attached domains, databases, disk, traffic, SSH, cron, modules and runtimes.

```sql
SELECT
attached_domains,
crontab,
database_engines,
databases,
disk,
emails,
env_vars,
extra_users,
files_browser,
highlight,
languages,
module_one_click,
private_databases,
runtimes,
sites_recommended,
ssh,
traffic
FROM ovh.hosting_web.offer_capabilities
WHERE offer = '{{ offer }}' -- required
;
```
</TabItem>
</Tabs>
