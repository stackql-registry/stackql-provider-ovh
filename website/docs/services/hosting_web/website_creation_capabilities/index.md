--- 
title: website_creation_capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - website_creation_capabilities
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

Creates, updates, deletes, gets or lists a <code>website_creation_capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="website_creation_capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.website_creation_capabilities" /></td></tr>
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
    <td><CopyableCode code="allowed_vcs_websites" /></td>
    <td><code>integer</code></td>
    <td>Number of websites deployed from a Git repository allowed by your hosting offer, -1 meaning unlimited (wire: allowedVcsWebsites)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_websites" /></td>
    <td><code>integer</code></td>
    <td>Number of websites allowed by your hosting offer, Git-deployed or not, -1 meaning unlimited (wire: allowedWebsites)</td>
</tr>
<tr>
    <td><CopyableCode code="existing_vcs_websites" /></td>
    <td><code>integer</code></td>
    <td>Number of existing websites deployed from a Git repository on your hosting (wire: existingVcsWebsites)</td>
</tr>
<tr>
    <td><CopyableCode code="existing_websites" /></td>
    <td><code>integer</code></td>
    <td>Number of existing websites on your hosting, Git-deployed or not (wire: existingWebsites)</td>
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
    <td>Returns the number of existing websites and the number allowed by the offer, then the same for the websites deployed from a Git repository, -1 meaning unlimited.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the number of existing websites and the number allowed by the offer, then the same for the websites deployed from a Git repository, -1 meaning unlimited.

```sql
SELECT
allowed_vcs_websites,
allowed_websites,
existing_vcs_websites,
existing_websites
FROM ovh.hosting_web.website_creation_capabilities
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
