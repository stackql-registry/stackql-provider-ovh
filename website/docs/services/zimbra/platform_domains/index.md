--- 
title: platform_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_domains
  - zimbra
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

Creates, updates, deletes, gets or lists a <code>platform_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.zimbra.platform_domains" /></td></tr>
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
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing domain (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing domain (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for get Domain

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
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing domain (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing domain (wire: targetSpec)</td>
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
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td></td>
    <td>Returns the domain, its organization, its account statistics per offer and the DNS configuration to apply: ownership, MX, SPF, DKIM and autodiscover.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-organization_label"><code>organization_label</code></a></td>
    <td>Returns the domains of the platform with their current state. Filter them by `organizationId`, `organizationLabel` or `domainName`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Adds a domain to an organization from its `name` and `organizationId`. When the DNS zone is hosted by OVHcloud, `autoConfigureMX`, `autoConfigureSPF`, `autoConfigureDKIM` and `autoConfigureAutodiscover` configure the matching records automatically. Creation is asynchronous: follow `resourceStatus` and `currentTasks`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Enables or disables DKIM with `dkimEnabled`, or moves the domain, with its email accounts, to another organization with `organizationId`. When set, `checksum` must match the current checksum of the domain, otherwise the update is rejected.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td></td>
    <td>Deletes the domain from its organization.</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Domain ID (wire: domainId)</td>
</tr>
<tr id="parameter-platform_id">
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Platform ID (wire: platformId)</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Filter by domain name (wire: domainName)</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter by organization identifier (wire: organizationId)</td>
</tr>
<tr id="parameter-organization_label">
    <td><CopyableCode code="organization_label" /></td>
    <td><code>string</code></td>
    <td>Filter by organization label (wire: organizationLabel)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the domain, its organization, its account statistics per offer and the DNS configuration to apply: ownership, MX, SPF, DKIM and autodiscover.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_domains
WHERE domain_id = '{{ domain_id }}' -- required
AND platform_id = '{{ platform_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the domains of the platform with their current state. Filter them by `organizationId`, `organizationLabel` or `domainName`.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_domains
WHERE platform_id = '{{ platform_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND domain_name = '{{ domain_name }}'
AND organization_id = '{{ organization_id }}'
AND organization_label = '{{ organization_label }}'
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

Adds a domain to an organization from its `name` and `organizationId`. When the DNS zone is hosted by OVHcloud, `autoConfigureMX`, `autoConfigureSPF`, `autoConfigureDKIM` and `autoConfigureAutodiscover` configure the matching records automatically. Creation is asynchronous: follow `resourceStatus` and `currentTasks`.

```sql
INSERT INTO ovh.zimbra.platform_domains (
target_spec,
platform_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ platform_id }}'
RETURNING
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: platform_domains
  props:
    - name: platform_id
      value: "{{ platform_id }}"
      description: Required parameter for the platform_domains resource.
    - name: target_spec
      description: |
        Target organization specification
      value:
        autoConfigureAutodiscover: {{ autoConfigureAutodiscover }}
        autoConfigureDKIM: {{ autoConfigureDKIM }}
        autoConfigureMX: {{ autoConfigureMX }}
        autoConfigureSPF: {{ autoConfigureSPF }}
        name: "{{ name }}"
        organizationId: "{{ organizationId }}"
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

Enables or disables DKIM with `dkimEnabled`, or moves the domain, with its email accounts, to another organization with `organizationId`. When set, `checksum` must match the current checksum of the domain, otherwise the update is rejected.

```sql
UPDATE ovh.zimbra.platform_domains
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND platform_id = '{{ platform_id }}' --required
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec;
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

Deletes the domain from its organization.

```sql
DELETE FROM ovh.zimbra.platform_domains
WHERE domain_id = '{{ domain_id }}' --required
AND platform_id = '{{ platform_id }}' --required
;
```
</TabItem>
</Tabs>
