--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.apps" /></td></tr>
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
    <td>App Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>App creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>App spec</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>App Container Status</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>App last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>App user owner</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

AI Solutions Platform App Object

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
    <td>App Id</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>App creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>App spec</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>App Container Status</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>App last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>App user owner</td>
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
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get app information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-label_selector"><code>label_selector</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-status_state"><code>status_state</code></a>, <a href="#parameter-updated_after"><code>updated_after</code></a>, <a href="#parameter-updated_before"><code>updated_before</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td>List apps</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-image"><code>image</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Create a new app</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update several parts of an app's spec</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Delete an app</td>
</tr>
<tr>
    <td><a href="#command"><CopyableCode code="command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-image"><code>image</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Generate an app spec corresponding CLI command</td>
</tr>
<tr>
    <td><a href="#datasync"><CopyableCode code="datasync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Starts a manual data synchronization on an app</td>
</tr>
<tr>
    <td><a href="#update_image"><CopyableCode code="update_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-url"><code>url</code></a></td>
    <td></td>
    <td>Set the Docker image of an AI app</td>
</tr>
<tr>
    <td><a href="#update_label"><CopyableCode code="update_label" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update/add an AI Solutions app label</td>
</tr>
<tr>
    <td><a href="#update_scalingstrategy"><CopyableCode code="update_scalingstrategy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Scale a App</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Start an existing AI Solutions app</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Stop an AI Solutions app</td>
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
<tr id="parameter-appId">
    <td><CopyableCode code="appId" /></td>
    <td><code>string (uuid)</code></td>
    <td>App ID</td>
</tr>
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>App ID (wire: appId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Force app deletion by killing it if at a running state</td>
</tr>
<tr id="parameter-label_selector">
    <td><CopyableCode code="label_selector" /></td>
    <td><code>string</code></td>
    <td>Filter on app label (e.g. 'app_name=kind_of_magic') (wire: labelSelector)</td>
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

Get app information

```sql
SELECT
id,
created_at,
spec,
status,
updated_at,
user
FROM ovh.cloud_ai.apps
WHERE app_id = '{{ app_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List apps

```sql
SELECT
id,
created_at,
spec,
status,
updated_at,
user
FROM ovh.cloud_ai.apps
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

Create a new app

```sql
INSERT INTO ovh.cloud_ai.apps (
command,
default_http_port,
deployment_strategy,
env_vars,
grpc_port,
image,
labels,
liveness_probe,
name,
partner_id,
probe,
region,
resources,
scaling_strategy,
unsecure_http,
volumes,
service_name
)
SELECT 
'{{ command }}',
{{ default_http_port }},
'{{ deployment_strategy }}',
'{{ env_vars }}',
{{ grpc_port }},
'{{ image }}' /* required */,
'{{ labels }}',
'{{ liveness_probe }}',
'{{ name }}',
'{{ partner_id }}',
'{{ probe }}',
'{{ region }}' /* required */,
'{{ resources }}' /* required */,
'{{ scaling_strategy }}',
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
- name: apps
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the apps resource.
    - name: command
      value:
        - "{{ command }}"
      description: |
        App command
    - name: default_http_port
      value: {{ default_http_port }}
      description: |
        Default port to access http service inside the app
    - name: deployment_strategy
      description: |
        AI App deployment strategy
      value:
        maxSurge: "{{ maxSurge }}"
        maxUnavailable: "{{ maxUnavailable }}"
        progressDeadlineSeconds: {{ progressDeadlineSeconds }}
        terminationGracePeriodSeconds: {{ terminationGracePeriodSeconds }}
    - name: env_vars
      description: |
        List of environment variable to be set inside the app
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
        Docker or capability image to use in the app. App capability images must comply with the pattern 'image-id:version'
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden
    - name: liveness_probe
      description: |
        App liveness probe
      value:
        failureThreshold: {{ failureThreshold }}
        initialDelaySeconds: {{ initialDelaySeconds }}
        path: "{{ path }}"
        periodSeconds: {{ periodSeconds }}
        port: {{ port }}
        successThreshold: {{ successThreshold }}
        timeoutSeconds: {{ timeoutSeconds }}
    - name: name
      value: "{{ name }}"
      description: |
        App name
    - name: partner_id
      value: "{{ partner_id }}"
      description: |
        Partner ID
    - name: probe
      description: |
        App readiness probe
      value:
        failureThreshold: {{ failureThreshold }}
        initialDelaySeconds: {{ initialDelaySeconds }}
        path: "{{ path }}"
        periodSeconds: {{ periodSeconds }}
        port: {{ port }}
        successThreshold: {{ successThreshold }}
        timeoutSeconds: {{ timeoutSeconds }}
    - name: region
      value: "{{ region }}"
      description: |
        Host region of the app
    - name: resources
      description: |
        App resources
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
    - name: scaling_strategy
      description: |
        App scaling strategy
      value:
        automatic:
          averageUsageTarget: {{ averageUsageTarget }}
          cooldownPeriodSeconds: {{ cooldownPeriodSeconds }}
          customMetrics:
            aggregationType: "{{ aggregationType }}"
            apiUrl: "{{ apiUrl }}"
            format: "{{ format }}"
            targetValue: {{ targetValue }}
            valueLocation: "{{ valueLocation }}"
          replicasMax: {{ replicasMax }}
          replicasMin: {{ replicasMin }}
          resourceType: "{{ resourceType }}"
          scaleDownStabilizationWindowSeconds: {{ scaleDownStabilizationWindowSeconds }}
          scaleUpStabilizationWindowSeconds: {{ scaleUpStabilizationWindowSeconds }}
        fixed:
          replicas: {{ replicas }}
    - name: unsecure_http
      value: {{ unsecure_http }}
      description: |
        Whether if app api port can be accessed without any authentication token
    - name: volumes
      description: |
        App Data linked
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

Update several parts of an app's spec

```sql
UPDATE ovh.cloud_ai.apps
SET 
command = '{{ command }}',
cpu = {{ cpu }},
default_http_port = {{ default_http_port }},
deployment_strategy = '{{ deployment_strategy }}',
env_vars = '{{ env_vars }}',
flavor = '{{ flavor }}',
flavor_count = {{ flavor_count }},
gpu = {{ gpu }},
grpc_port = {{ grpc_port }},
liveness_probe = '{{ liveness_probe }}',
probe = '{{ probe }}',
url = '{{ url }}'
WHERE 
app_id = '{{ app_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
created_at,
spec,
status,
updated_at,
user;
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

Delete an app

```sql
DELETE FROM ovh.cloud_ai.apps
WHERE app_id = '{{ app_id }}' --required
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
        { label: 'update_image', value: 'update_image' },
        { label: 'update_label', value: 'update_label' },
        { label: 'update_scalingstrategy', value: 'update_scalingstrategy' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="command">

Generate an app spec corresponding CLI command

```sql
EXEC ovh.cloud_ai.apps.command 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"command": "{{ command }}", 
"defaultHttpPort": {{ defaultHttpPort }}, 
"deploymentStrategy": "{{ deploymentStrategy }}", 
"envVars": "{{ envVars }}", 
"grpcPort": {{ grpcPort }}, 
"image": "{{ image }}", 
"labels": "{{ labels }}", 
"livenessProbe": "{{ livenessProbe }}", 
"name": "{{ name }}", 
"partnerId": "{{ partnerId }}", 
"probe": "{{ probe }}", 
"region": "{{ region }}", 
"resources": "{{ resources }}", 
"scalingStrategy": "{{ scalingStrategy }}", 
"unsecureHttp": {{ unsecureHttp }}, 
"volumes": "{{ volumes }}"
}'
;
```
</TabItem>
<TabItem value="datasync">

Starts a manual data synchronization on an app

```sql
EXEC ovh.cloud_ai.apps.datasync 
@appId='{{ appId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"direction": "{{ direction }}", 
"volume": "{{ volume }}"
}'
;
```
</TabItem>
<TabItem value="update_image">

Set the Docker image of an AI app

```sql
EXEC ovh.cloud_ai.apps.update_image 
@appId='{{ appId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"url": "{{ url }}"
}'
;
```
</TabItem>
<TabItem value="update_label">

Update/add an AI Solutions app label

```sql
EXEC ovh.cloud_ai.apps.update_label 
@appId='{{ appId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"name": "{{ name }}", 
"value": "{{ value }}"
}'
;
```
</TabItem>
<TabItem value="update_scalingstrategy">

Scale a App

```sql
EXEC ovh.cloud_ai.apps.update_scalingstrategy 
@appId='{{ appId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"automatic": "{{ automatic }}", 
"fixed": "{{ fixed }}"
}'
;
```
</TabItem>
<TabItem value="start">

Start an existing AI Solutions app

```sql
EXEC ovh.cloud_ai.apps.start 
@appId='{{ appId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="stop">

Stop an AI Solutions app

```sql
EXEC ovh.cloud_ai.apps.stop 
@appId='{{ appId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
