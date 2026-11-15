--- 
title: notebooks
hide_title: false
hide_table_of_contents: false
keywords:
  - notebooks
  - cloud_ai
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

Creates, updates, deletes, gets or lists a <code>notebooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.notebooks" /></td></tr>
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
    <td><code>string</code></td>
    <td>Notebook Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Notebook creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Notebook spec</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Notebook Container Status</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Notebook last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Notebook user owner</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

AI Solutions Platform Notebook Object

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
    <td><code>string</code></td>
    <td>Notebook Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Notebook creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Notebook spec</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Notebook Container Status</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Notebook last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Notebook user owner</td>
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
    <td><a href="#parameter-notebook_id"><code>notebook_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get notebook information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-label_selector"><code>label_selector</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-status_state"><code>status_state</code></a>, <a href="#parameter-updated_after"><code>updated_after</code></a>, <a href="#parameter-updated_before"><code>updated_before</code></a>, <a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-with_spark"><code>with_spark</code></a></td>
    <td>List notebooks</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-env"><code>env</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Create a new notebook</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-notebook_id"><code>notebook_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an existing notebook. Only labels update can be done while notebook is running.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-notebook_id"><code>notebook_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Delete a notebook</td>
</tr>
<tr>
    <td><a href="#command"><CopyableCode code="command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-env"><code>env</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Generate a notebook spec corresponding CLI command</td>
</tr>
<tr>
    <td><a href="#datasync"><CopyableCode code="datasync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-notebookId"><code>notebookId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Starts a manual data synchronization on an AI Solutions notebook</td>
</tr>
<tr>
    <td><a href="#update_label"><CopyableCode code="update_label" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-notebookId"><code>notebookId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update/add an AI Solutions notebook label</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-notebookId"><code>notebookId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Restart an AI Solutions notebook</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-notebookId"><code>notebookId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Start an AI Solutions notebook</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-notebookId"><code>notebookId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Stop an AI Solutions notebook</td>
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
<tr id="parameter-notebookId">
    <td><CopyableCode code="notebookId" /></td>
    <td><code>string</code></td>
    <td>Notebook ID</td>
</tr>
<tr id="parameter-notebook_id">
    <td><CopyableCode code="notebook_id" /></td>
    <td><code>string</code></td>
    <td>Notebook ID (wire: notebookId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Force notebook deletion by killing it if at a running state</td>
</tr>
<tr id="parameter-label_selector">
    <td><CopyableCode code="label_selector" /></td>
    <td><code>string</code></td>
    <td>Filter on notebook label (e.g. 'notebook_name=spell_book') (wire: labelSelector)</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>Order the result set</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page of the result set</td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the result set</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort the result with this field</td>
</tr>
<tr id="parameter-status_state">
    <td><CopyableCode code="status_state" /></td>
    <td><code>array</code></td>
    <td>Filter on status state (wire: statusState)</td>
</tr>
<tr id="parameter-updated_after">
    <td><CopyableCode code="updated_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter on updatedAt property (&gt;) (wire: updatedAfter)</td>
</tr>
<tr id="parameter-updated_before">
    <td><CopyableCode code="updated_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter on updatedAt property (&lt;) (wire: updatedBefore)</td>
</tr>
<tr id="parameter-user_name">
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>User that submit the job (wire: userName)</td>
</tr>
<tr id="parameter-with_spark">
    <td><CopyableCode code="with_spark" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to include spark notebooks in search results (wire: withSpark)</td>
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

Get notebook information

```sql
SELECT
id,
created_at,
spec,
status,
updated_at,
user
FROM ovh.cloud_ai.notebooks
WHERE notebook_id = '{{ notebook_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List notebooks

```sql
SELECT
id,
created_at,
spec,
status,
updated_at,
user
FROM ovh.cloud_ai.notebooks
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND label_selector = '{{ label_selector }}'
AND order = '{{ order }}'
AND page = '{{ page }}'
AND size = '{{ size }}'
AND sort = '{{ sort }}'
AND status_state = '{{ status_state }}'
AND updated_after = '{{ updated_after }}'
AND updated_before = '{{ updated_before }}'
AND user_name = '{{ user_name }}'
AND with_spark = '{{ with_spark }}'
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

Create a new notebook

```sql
INSERT INTO ovh.cloud_ai.notebooks (
env,
env_vars,
labels,
name,
quantum_resources,
region,
resources,
ssh_public_keys,
timeout_auto_restart,
unsecure_http,
volumes,
service_name
)
SELECT 
'{{ env }}' /* required */,
'{{ env_vars }}',
'{{ labels }}',
'{{ name }}',
'{{ quantum_resources }}',
'{{ region }}' /* required */,
'{{ resources }}' /* required */,
'{{ ssh_public_keys }}',
{{ timeout_auto_restart }},
{{ unsecure_http }},
'{{ volumes }}',
'{{ service_name }}'
RETURNING
id,
created_at,
spec,
status,
updated_at,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notebooks
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the notebooks resource.
    - name: env
      description: |
        Environment to deploy in this notebook
      value:
        editorId: "{{ editorId }}"
        frameworkId: "{{ frameworkId }}"
        frameworkVersion: "{{ frameworkVersion }}"
    - name: env_vars
      description: |
        List of environment variables to be set inside the notebook
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden
    - name: name
      value: "{{ name }}"
      description: |
        Notebook name
    - name: quantum_resources
      description: |
        Quantum resources
      value:
        qpuFlavorId: "{{ qpuFlavorId }}"
    - name: region
      value: "{{ region }}"
      description: |
        Host region of the notebook
    - name: resources
      description: |
        Notebook resources
      value:
        cpu: {{ cpu }}
        ephemeralStorage: {{ ephemeralStorage }}
        flavor: "{{ flavor }}"
        flavorCount: {{ flavorCount }}
        gpu: {{ gpu }}
        gpuBrand: "{{ gpuBrand }}"
        gpuMemory: {{ gpuMemory }}
        gpuModel: "{{ gpuModel }}"
        memory: {{ memory }}
        privateNetwork: {{ privateNetwork }}
        publicNetwork: {{ publicNetwork }}
    - name: ssh_public_keys
      value:
        - "{{ ssh_public_keys }}"
      description: |
        SSH keys authorized to access the notebook
    - name: timeout_auto_restart
      value: {{ timeout_auto_restart }}
      description: |
        Whether notebook is set to be restarted after timeout
    - name: unsecure_http
      value: {{ unsecure_http }}
      description: |
        Whether notebook api port can be accessed without any authentication token
    - name: volumes
      description: |
        Notebook Data linked
      value:
        - cache: {{ cache }}
          container: "{{ container }}"
          dataStore:
            alias: "{{ alias }}"
            archive: "{{ archive }}"
            container: "{{ container }}"
            internal: {{ internal }}
            prefix: "{{ prefix }}"
          id: "{{ id }}"
          mountPath: "{{ mountPath }}"
          permission: "{{ permission }}"
          prefix: "{{ prefix }}"
          publicGit:
            url: "{{ url }}"
          publicSwift:
            url: "{{ url }}"
          region: "{{ region }}"
          standalone:
            name: "{{ name }}"
          targetDataStore:
            alias: "{{ alias }}"
            archive: "{{ archive }}"
            container: "{{ container }}"
            internal: {{ internal }}
            prefix: "{{ prefix }}"
          volumeSource:
            dataStore:
              alias: "{{ alias }}"
              archive: "{{ archive }}"
              container: "{{ container }}"
              internal: {{ internal }}
              prefix: "{{ prefix }}"
            publicGit:
              url: "{{ url }}"
            publicSwift:
              url: "{{ url }}"
            standalone:
              name: "{{ name }}"
          volumeTarget:
            targetDataStore:
              alias: "{{ alias }}"
              archive: "{{ archive }}"
              container: "{{ container }}"
              internal: {{ internal }}
              prefix: "{{ prefix }}"
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

Update an existing notebook. Only labels update can be done while notebook is running.

```sql
UPDATE ovh.cloud_ai.notebooks
SET 
framework_version = '{{ framework_version }}',
labels = '{{ labels }}',
name = '{{ name }}',
quantum_resources = '{{ quantum_resources }}',
resources = '{{ resources }}',
ssh_public_keys = '{{ ssh_public_keys }}',
timeout_auto_restart = {{ timeout_auto_restart }},
unsecure_http = {{ unsecure_http }},
volumes = '{{ volumes }}'
WHERE 
notebook_id = '{{ notebook_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set;
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

Delete a notebook

```sql
DELETE FROM ovh.cloud_ai.notebooks
WHERE notebook_id = '{{ notebook_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="command"
    values={[
        { label: 'command', value: 'command' },
        { label: 'datasync', value: 'datasync' },
        { label: 'update_label', value: 'update_label' },
        { label: 'restart', value: 'restart' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="command">

Generate a notebook spec corresponding CLI command

```sql
EXEC ovh.cloud_ai.notebooks.command 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"env": "{{ env }}", 
"envVars": "{{ envVars }}", 
"labels": "{{ labels }}", 
"name": "{{ name }}", 
"quantumResources": "{{ quantumResources }}", 
"region": "{{ region }}", 
"resources": "{{ resources }}", 
"sshPublicKeys": "{{ sshPublicKeys }}", 
"timeoutAutoRestart": {{ timeoutAutoRestart }}, 
"unsecureHttp": {{ unsecureHttp }}, 
"volumes": "{{ volumes }}"
}'
;
```
</TabItem>
<TabItem value="datasync">

Starts a manual data synchronization on an AI Solutions notebook

```sql
EXEC ovh.cloud_ai.notebooks.datasync 
@notebookId='{{ notebookId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"direction": "{{ direction }}", 
"volume": "{{ volume }}"
}'
;
```
</TabItem>
<TabItem value="update_label">

Update/add an AI Solutions notebook label

```sql
EXEC ovh.cloud_ai.notebooks.update_label 
@notebookId='{{ notebookId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"name": "{{ name }}", 
"value": "{{ value }}"
}'
;
```
</TabItem>
<TabItem value="restart">

Restart an AI Solutions notebook

```sql
EXEC ovh.cloud_ai.notebooks.restart 
@notebookId='{{ notebookId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="start">

Start an AI Solutions notebook

```sql
EXEC ovh.cloud_ai.notebooks.start 
@notebookId='{{ notebookId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="stop">

Stop an AI Solutions notebook

```sql
EXEC ovh.cloud_ai.notebooks.stop 
@notebookId='{{ notebookId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
