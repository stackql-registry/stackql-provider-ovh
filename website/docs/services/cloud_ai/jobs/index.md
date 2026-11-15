--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.jobs" /></td></tr>
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
    <td>Job Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Job specifications</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Job status</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Job user owner</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

AI Solutions Job Object

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
    <td>Job Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Job specifications</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Job status</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Job user owner</td>
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
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get job information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-label_selector"><code>label_selector</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-status_state"><code>status_state</code></a>, <a href="#parameter-updated_after"><code>updated_after</code></a>, <a href="#parameter-updated_before"><code>updated_before</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td>List jobs</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-image"><code>image</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Create a new job</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Permanently delete a job</td>
</tr>
<tr>
    <td><a href="#command"><CopyableCode code="command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-image"><code>image</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Generate a job spec corresponding CLI command</td>
</tr>
<tr>
    <td><a href="#datasync"><CopyableCode code="datasync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Starts a manual data synchronization on an AI Solutions job</td>
</tr>
<tr>
    <td><a href="#kill"><CopyableCode code="kill" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Kill a AI Solutions job</td>
</tr>
<tr>
    <td><a href="#update_label"><CopyableCode code="update_label" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update/add an AI Solutions job label</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Job ID</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Job ID (wire: jobId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Force job deletion by killing it if at a running state</td>
</tr>
<tr id="parameter-label_selector">
    <td><CopyableCode code="label_selector" /></td>
    <td><code>string</code></td>
    <td>Filter on job label (e.g. 'job_name=potions_cooking') (wire: labelSelector)</td>
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

Get job information

```sql
SELECT
id,
created_at,
spec,
status,
updated_at,
user
FROM ovh.cloud_ai.jobs
WHERE job_id = '{{ job_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List jobs

```sql
SELECT
id,
created_at,
spec,
status,
updated_at,
user
FROM ovh.cloud_ai.jobs
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

Create a new job

```sql
INSERT INTO ovh.cloud_ai.jobs (
command,
default_http_port,
env_vars,
grpc_port,
image,
labels,
name,
partner_id,
read_user,
region,
resources,
ssh_public_keys,
timeout,
timeout_auto_restart,
unsecure_http,
volumes,
service_name
)
SELECT 
'{{ command }}',
{{ default_http_port }},
'{{ env_vars }}',
{{ grpc_port }},
'{{ image }}' /* required */,
'{{ labels }}',
'{{ name }}',
'{{ partner_id }}',
'{{ read_user }}',
'{{ region }}' /* required */,
'{{ resources }}' /* required */,
'{{ ssh_public_keys }}',
{{ timeout }},
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
- name: jobs
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the jobs resource.
    - name: command
      value:
        - "{{ command }}"
      description: |
        Job command
    - name: default_http_port
      value: {{ default_http_port }}
      description: |
        Port use as the default one to access http service inside job
    - name: env_vars
      description: |
        List of environment variable to be set inside job
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: grpc_port
      value: {{ grpc_port }}
      description: |
        GRPC Port that we want to expose in case workload HTTP & gRPC servers cannot be multiplexed to listen on the same port
    - name: image
      value: "{{ image }}"
      description: |
        Job image
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden
    - name: name
      value: "{{ name }}"
      description: |
        Job name
    - name: partner_id
      value: "{{ partner_id }}"
      description: |
        Partner ID
    - name: read_user
      value: "{{ read_user }}"
      description: |
        User ID to use to access the job
    - name: region
      value: "{{ region }}"
      description: |
        Host region of the job
    - name: resources
      description: |
        Job resources
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
        SSH keys authorized to access to the job container
    - name: timeout
      value: {{ timeout }}
      description: |
        Maximum time to spend before killing the job
    - name: timeout_auto_restart
      value: {{ timeout_auto_restart }}
      description: |
        Whether job is set to be restarted after timeout
    - name: unsecure_http
      value: {{ unsecure_http }}
      description: |
        Whether job api port can be accessed without any authentication token
    - name: volumes
      description: |
        Job Data linked
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Permanently delete a job

```sql
DELETE FROM ovh.cloud_ai.jobs
WHERE job_id = '{{ job_id }}' --required
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
        { label: 'kill', value: 'kill' },
        { label: 'update_label', value: 'update_label' }
    ]}
>
<TabItem value="command">

Generate a job spec corresponding CLI command

```sql
EXEC ovh.cloud_ai.jobs.command 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"command": "{{ command }}", 
"defaultHttpPort": {{ defaultHttpPort }}, 
"envVars": "{{ envVars }}", 
"grpcPort": {{ grpcPort }}, 
"image": "{{ image }}", 
"labels": "{{ labels }}", 
"name": "{{ name }}", 
"partnerId": "{{ partnerId }}", 
"readUser": "{{ readUser }}", 
"region": "{{ region }}", 
"resources": "{{ resources }}", 
"sshPublicKeys": "{{ sshPublicKeys }}", 
"timeout": {{ timeout }}, 
"timeoutAutoRestart": {{ timeoutAutoRestart }}, 
"unsecureHttp": {{ unsecureHttp }}, 
"volumes": "{{ volumes }}"
}'
;
```
</TabItem>
<TabItem value="datasync">

Starts a manual data synchronization on an AI Solutions job

```sql
EXEC ovh.cloud_ai.jobs.datasync 
@jobId='{{ jobId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"direction": "{{ direction }}", 
"volume": "{{ volume }}"
}'
;
```
</TabItem>
<TabItem value="kill">

Kill a AI Solutions job

```sql
EXEC ovh.cloud_ai.jobs.kill 
@jobId='{{ jobId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="update_label">

Update/add an AI Solutions job label

```sql
EXEC ovh.cloud_ai.jobs.update_label 
@jobId='{{ jobId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"name": "{{ name }}", 
"value": "{{ value }}"
}'
;
```
</TabItem>
</Tabs>
