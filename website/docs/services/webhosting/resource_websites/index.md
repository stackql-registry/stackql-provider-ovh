--- 
title: resource_websites
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_websites
  - webhosting
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

Creates, updates, deletes, gets or lists a <code>resource_websites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_websites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.webhosting.resource_websites" /></td></tr>
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
    <td>Unique identifier of the website</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the website (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the website (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Webhosting Website readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Webhosting Website target specification (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Webhosting Website

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
    <td>Unique identifier of the website</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the website (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the website (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Webhosting Website readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Webhosting Website target specification (wire: targetSpec)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-website_id"><code>website_id</code></a></td>
    <td></td>
    <td>Returns the website name, root folder, number of linked domains and its Git and module status. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the websites of the hosting. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates a website on a domain, with its root folder, and can install a WordPress, Joomla, Drupal or PrestaShop module. Creation is asynchronous: follow resourceStatus until READY. Set bypassDNSConfiguration to true to leave the DNS zone unchanged. (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-website_id"><code>website_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Updates the name and root folder of the website. (Beta version)</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name</td>
</tr>
<tr id="parameter-website_id">
    <td><CopyableCode code="website_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Website ID (wire: websiteId)</td>
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

Returns the website name, root folder, number of linked domains and its Git and module status. (Beta version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.webhosting.resource_websites
WHERE name = '{{ name }}' -- required
AND website_id = '{{ website_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the websites of the hosting. (Beta version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.webhosting.resource_websites
WHERE name = '{{ name }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Creates a website on a domain, with its root folder, and can install a WordPress, Joomla, Drupal or PrestaShop module. Creation is asynchronous: follow resourceStatus until READY. Set bypassDNSConfiguration to true to leave the DNS zone unchanged. (Beta version)

```sql
INSERT INTO ovh.webhosting.resource_websites (
target_spec,
name
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ name }}'
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
- name: resource_websites
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the resource_websites resource.
    - name: target_spec
      description: |
        Target specification of the website
      value:
        adminConfiguration:
          adminLogin: "{{ adminLogin }}"
          adminPassword: "{{ adminPassword }}"
          domain: "{{ domain }}"
          installPath: "{{ installPath }}"
          language: "{{ language }}"
        bypassDNSConfiguration: {{ bypassDNSConfiguration }}
        cdn:
          status: "{{ status }}"
        databaseConfiguration:
          databaseName: "{{ databaseName }}"
          password: "{{ password }}"
          port: {{ port }}
          server: "{{ server }}"
          user: "{{ user }}"
        firewall:
          status: "{{ status }}"
        fqdn: "{{ fqdn }}"
        ipLocation: "{{ ipLocation }}"
        module:
          name: "{{ name }}"
        name: "{{ name }}"
        path: "{{ path }}"
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

Updates the name and root folder of the website. (Beta version)

```sql
UPDATE ovh.webhosting.resource_websites
SET 
target_spec = '{{ target_spec }}'
WHERE 
name = '{{ name }}' --required
AND website_id = '{{ website_id }}' --required
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
