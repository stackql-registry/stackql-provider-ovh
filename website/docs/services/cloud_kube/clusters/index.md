--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - cloud_kube
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_kube.clusters" /></td></tr>
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
    <td>Cluster ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Cluster name</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancers_subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>OpenStack subnet ID that the load balancers will use. Optional, can be updated with endpoint /cloud/project/&#123;serviceName&#125;/kube/&#123;kubeId&#125;/updateLoadBalancersSubnetId, can only be set if privateNetworkId and nodesSubnetId are also set (wire: loadBalancersSubnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes_subnet_id" /></td>
    <td><code>string</code></td>
    <td>OpenStack subnet ID that the cluster nodes will use. Optional, can only be set on cluster creation or reset, can only be set if privateNetworkId is also set. If unspecified, it will be selected automatically when the first node is created. (wire: nodesSubnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="private_network_id" /></td>
    <td><code>string</code></td>
    <td>OpenStack private network ID that the cluster will use. Optional, can only be set on cluster creation or reset. If unspecified, the cluster will use the public network. (wire: privateNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="audit_logs_subscribed" /></td>
    <td><code>boolean</code></td>
    <td>True if cluster auditlogs forward has been subscribed (wire: auditLogsSubscribed)</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane_is_up_to_date" /></td>
    <td><code>boolean</code></td>
    <td>True if control-plane is up to date (wire: controlPlaneIsUpToDate)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Cluster creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="customization" /></td>
    <td><code>object</code></td>
    <td>Kubernetes cluster customization</td>
</tr>
<tr>
    <td><CopyableCode code="disable_public_networking" /></td>
    <td><code>boolean</code></td>
    <td>Disable public connectivity (wire: disablePublicNetworking)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_allocation_policy" /></td>
    <td><code>object</code></td>
    <td>IP allocation policy (wire: ipAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="is_up_to_date" /></td>
    <td><code>boolean</code></td>
    <td>True if all nodes and control-plane are up to date (wire: isUpToDate)</td>
</tr>
<tr>
    <td><CopyableCode code="kube_proxy_mode" /></td>
    <td><code>string</code></td>
    <td>Selected mode for kube-proxy (iptables, ipvs) (wire: kubeProxyMode)</td>
</tr>
<tr>
    <td><CopyableCode code="next_upgrade_versions" /></td>
    <td><code>array</code></td>
    <td>Kubernetes versions available for upgrade (wire: nextUpgradeVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes_url" /></td>
    <td><code>string</code></td>
    <td>Cluster nodes URL (wire: nodesUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>The cluster plan</td>
</tr>
<tr>
    <td><CopyableCode code="private_network_configuration" /></td>
    <td><code>object</code></td>
    <td>The private network configuration. This field is optional. (wire: privateNetworkConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cluster region. Example: GRA11.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Cluster status (DELETED, DELETING, ERROR, INSTALLING, MAINTENANCE, READY, REDEPLOYING, REOPENING, RESETTING, SUSPENDED, SUSPENDING, UNKNOWN, UPDATING, USER_ERROR, USER_QUOTA_ERROR, USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="update_policy" /></td>
    <td><code>string</code></td>
    <td>Cluster update policy (wire: updatePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Cluster last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Management URL of your cluster</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Kubernetes version of your cluster</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Managed Kubernetes cluster description

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
    <td>Cluster ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Cluster name</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancers_subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>OpenStack subnet ID that the load balancers will use. Optional, can be updated with endpoint /cloud/project/&#123;serviceName&#125;/kube/&#123;kubeId&#125;/updateLoadBalancersSubnetId, can only be set if privateNetworkId and nodesSubnetId are also set (wire: loadBalancersSubnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes_subnet_id" /></td>
    <td><code>string</code></td>
    <td>OpenStack subnet ID that the cluster nodes will use. Optional, can only be set on cluster creation or reset, can only be set if privateNetworkId is also set. If unspecified, it will be selected automatically when the first node is created. (wire: nodesSubnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="private_network_id" /></td>
    <td><code>string</code></td>
    <td>OpenStack private network ID that the cluster will use. Optional, can only be set on cluster creation or reset. If unspecified, the cluster will use the public network. (wire: privateNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="audit_logs_subscribed" /></td>
    <td><code>boolean</code></td>
    <td>True if cluster auditlogs forward has been subscribed (wire: auditLogsSubscribed)</td>
</tr>
<tr>
    <td><CopyableCode code="control_plane_is_up_to_date" /></td>
    <td><code>boolean</code></td>
    <td>True if control-plane is up to date (wire: controlPlaneIsUpToDate)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Cluster creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="customization" /></td>
    <td><code>object</code></td>
    <td>Kubernetes cluster customization</td>
</tr>
<tr>
    <td><CopyableCode code="disable_public_networking" /></td>
    <td><code>boolean</code></td>
    <td>Disable public connectivity (wire: disablePublicNetworking)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_allocation_policy" /></td>
    <td><code>object</code></td>
    <td>IP allocation policy (wire: ipAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="is_up_to_date" /></td>
    <td><code>boolean</code></td>
    <td>True if all nodes and control-plane are up to date (wire: isUpToDate)</td>
</tr>
<tr>
    <td><CopyableCode code="kube_proxy_mode" /></td>
    <td><code>string</code></td>
    <td>Selected mode for kube-proxy (iptables, ipvs) (wire: kubeProxyMode)</td>
</tr>
<tr>
    <td><CopyableCode code="next_upgrade_versions" /></td>
    <td><code>array</code></td>
    <td>Kubernetes versions available for upgrade (wire: nextUpgradeVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes_url" /></td>
    <td><code>string</code></td>
    <td>Cluster nodes URL (wire: nodesUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>The cluster plan</td>
</tr>
<tr>
    <td><CopyableCode code="private_network_configuration" /></td>
    <td><code>object</code></td>
    <td>The private network configuration. This field is optional. (wire: privateNetworkConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cluster region. Example: GRA11.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Cluster status (DELETED, DELETING, ERROR, INSTALLING, MAINTENANCE, READY, REDEPLOYING, REOPENING, RESETTING, SUSPENDED, SUSPENDING, UNKNOWN, UPDATING, USER_ERROR, USER_QUOTA_ERROR, USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="update_policy" /></td>
    <td><code>string</code></td>
    <td>Cluster update policy (wire: updatePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Cluster last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Management URL of your cluster</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Kubernetes version of your cluster</td>
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
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get information about your managed Kubernetes cluster</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List your managed Kubernetes clusters</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new managed Kubernetes cluster</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update information about your managed Kubernetes cluster</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete your managed Kubernetes cluster</td>
</tr>
<tr>
    <td><a href="#audit_logs"><CopyableCode code="audit_logs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Generate a temporary URL to retrieve audit logs (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#kubeconfig"><CopyableCode code="kubeconfig" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Generate kubeconfig file</td>
</tr>
<tr>
    <td><a href="#kubeconfig_reset"><CopyableCode code="kubeconfig_reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Reset kubeconfig: Certificates will be regenerated, nodes will be reinstalled</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Restarting your control plane apiserver to invalidate cache without downtime (using force will create a slight downtime)</td>
</tr>
<tr>
    <td><a href="#force_update"><CopyableCode code="force_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Force cluster and node update to the latest patch within minor version or next minor version</td>
</tr>
<tr>
    <td><a href="#update_load_balancers_subnet_id"><CopyableCode code="update_load_balancers_subnet_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the load balancers subnet ID</td>
</tr>
<tr>
    <td><a href="#update_policy"><CopyableCode code="update_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kubeId"><code>kubeId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-updatePolicy"><code>updatePolicy</code></a></td>
    <td></td>
    <td>Change the update policy of your cluster</td>
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
<tr id="parameter-kubeId">
    <td><CopyableCode code="kubeId" /></td>
    <td><code>string</code></td>
    <td>Kube ID</td>
</tr>
<tr id="parameter-kube_id">
    <td><CopyableCode code="kube_id" /></td>
    <td><code>string</code></td>
    <td>Kube ID (wire: kubeId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get information about your managed Kubernetes cluster

```sql
SELECT
id,
name,
load_balancers_subnet_id,
nodes_subnet_id,
private_network_id,
audit_logs_subscribed,
control_plane_is_up_to_date,
created_at,
customization,
disable_public_networking,
ip_allocation_policy,
is_up_to_date,
kube_proxy_mode,
next_upgrade_versions,
nodes_url,
plan,
private_network_configuration,
region,
status,
update_policy,
updated_at,
url,
version
FROM ovh.cloud_kube.clusters
WHERE kube_id = '{{ kube_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your managed Kubernetes clusters

```sql
SELECT
id,
name,
load_balancers_subnet_id,
nodes_subnet_id,
private_network_id,
audit_logs_subscribed,
control_plane_is_up_to_date,
created_at,
customization,
disable_public_networking,
ip_allocation_policy,
is_up_to_date,
kube_proxy_mode,
next_upgrade_versions,
nodes_url,
plan,
private_network_configuration,
region,
status,
update_policy,
updated_at,
url,
version
FROM ovh.cloud_kube.clusters
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a new managed Kubernetes cluster

```sql
INSERT INTO ovh.cloud_kube.clusters (
customization,
disable_public_networking,
ip_allocation_policy,
kube_proxy_mode,
load_balancers_subnet_id,
name,
nodepool,
nodepools,
nodes_subnet_id,
plan,
private_network_configuration,
private_network_id,
region,
update_policy,
version,
service_name
)
SELECT 
'{{ customization }}',
{{ disable_public_networking }},
'{{ ip_allocation_policy }}',
'{{ kube_proxy_mode }}',
'{{ load_balancers_subnet_id }}',
'{{ name }}',
'{{ nodepool }}',
'{{ nodepools }}',
'{{ nodes_subnet_id }}',
'{{ plan }}',
'{{ private_network_configuration }}',
'{{ private_network_id }}',
'{{ region }}' /* required */,
'{{ update_policy }}',
'{{ version }}',
'{{ service_name }}'
RETURNING
id,
name,
load_balancers_subnet_id,
nodes_subnet_id,
private_network_id,
audit_logs_subscribed,
control_plane_is_up_to_date,
created_at,
customization,
disable_public_networking,
ip_allocation_policy,
is_up_to_date,
kube_proxy_mode,
next_upgrade_versions,
nodes_url,
plan,
private_network_configuration,
region,
status,
update_policy,
updated_at,
url,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the clusters resource.
    - name: customization
      description: |
        Kubernetes cluster customization
      value:
        apiServer:
          admissionPlugins:
            disabled:
              - "{{ disabled }}"
            enabled:
              - "{{ enabled }}"
        cilium:
          clusterId: {{ clusterId }}
          clusterMesh:
            apiServer:
              nodePort: {{ nodePort }}
              serviceType: "{{ serviceType }}"
            enabled: {{ enabled }}
          hubble:
            enabled: {{ enabled }}
            relay:
              enabled: {{ enabled }}
            ui:
              backendResources:
                limits: "{{ limits }}"
                requests: "{{ requests }}"
              enabled: {{ enabled }}
              frontendResources:
                limits: "{{ limits }}"
                requests: "{{ requests }}"
        kubeProxy:
          iptables:
            minSyncPeriod: "{{ minSyncPeriod }}"
            syncPeriod: "{{ syncPeriod }}"
          ipvs:
            minSyncPeriod: "{{ minSyncPeriod }}"
            scheduler: "{{ scheduler }}"
            syncPeriod: "{{ syncPeriod }}"
            tcpFinTimeout: "{{ tcpFinTimeout }}"
            tcpTimeout: "{{ tcpTimeout }}"
            udpTimeout: "{{ udpTimeout }}"
    - name: disable_public_networking
      value: {{ disable_public_networking }}
      description: |
        Disable public connectivity
    - name: ip_allocation_policy
      description: |
        IP allocation policy. This field is optional.
      value:
        podsIpv4Cidr: "{{ podsIpv4Cidr }}"
        servicesIpv4Cidr: "{{ servicesIpv4Cidr }}"
    - name: kube_proxy_mode
      value: "{{ kube_proxy_mode }}"
      description: |
        Selected mode for kube-proxy
      valid_values: ['iptables', 'ipvs']
    - name: load_balancers_subnet_id
      value: "{{ load_balancers_subnet_id }}"
      description: |
        OpenStack subnet ID that the load balancers will use. Optional, can be updated with endpoint /cloud/project/{serviceName}/kube/{kubeId}/updateLoadBalancersSubnetId, can only be set if privateNetworkId and nodesSubnetId are also set
    - name: name
      value: "{{ name }}"
      description: |
        Kubernetes cluster name
    - name: nodepool
      description: |
        Nodepool to initialize with cluster creation. Note: this fields is deprecated in favor of 'nodepools' field that allows to create one or more nodepools.
      value:
        antiAffinity: {{ antiAffinity }}
        attachFloatingIps:
          enabled: {{ enabled }}
        autoscale: {{ autoscale }}
        autoscaling:
          scaleDownUnneededTimeSeconds: {{ scaleDownUnneededTimeSeconds }}
          scaleDownUnreadyTimeSeconds: {{ scaleDownUnreadyTimeSeconds }}
          scaleDownUtilizationThreshold: {{ scaleDownUtilizationThreshold }}
        availabilityZones:
          - "{{ availabilityZones }}"
        desiredNodes: {{ desiredNodes }}
        flavorName: "{{ flavorName }}"
        maxNodes: {{ maxNodes }}
        minNodes: {{ minNodes }}
        monthlyBilled: {{ monthlyBilled }}
        name: "{{ name }}"
        template:
          metadata:
            annotations: "{{ annotations }}"
            finalizers:
              - "{{ finalizers }}"
            labels: "{{ labels }}"
          spec:
            taints:
              - effect: "{{ effect }}"
                key: "{{ key }}"
                value: "{{ value }}"
            unschedulable: {{ unschedulable }}
    - name: nodepools
      description: |
        List of nodepools to initialize with cluster creation
      value:
        - antiAffinity: {{ antiAffinity }}
          attachFloatingIps:
            enabled: {{ enabled }}
          autoscale: {{ autoscale }}
          autoscaling:
            scaleDownUnneededTimeSeconds: {{ scaleDownUnneededTimeSeconds }}
            scaleDownUnreadyTimeSeconds: {{ scaleDownUnreadyTimeSeconds }}
            scaleDownUtilizationThreshold: {{ scaleDownUtilizationThreshold }}
          availabilityZones: "{{ availabilityZones }}"
          desiredNodes: {{ desiredNodes }}
          flavorName: "{{ flavorName }}"
          maxNodes: {{ maxNodes }}
          minNodes: {{ minNodes }}
          monthlyBilled: {{ monthlyBilled }}
          name: "{{ name }}"
          template:
            metadata:
              annotations: "{{ annotations }}"
              finalizers:
                - "{{ finalizers }}"
              labels: "{{ labels }}"
            spec:
              taints:
                - effect: "{{ effect }}"
                  key: "{{ key }}"
                  value: "{{ value }}"
              unschedulable: {{ unschedulable }}
    - name: nodes_subnet_id
      value: "{{ nodes_subnet_id }}"
      description: |
        OpenStack subnet ID that the cluster nodes will use. Optional, can only be set on cluster creation or reset, can only be set if privateNetworkId is also set. If unspecified, it will be selected automatically when the first node is created.
    - name: plan
      value: "{{ plan }}"
      description: |
        The cluster plan
    - name: private_network_configuration
      description: |
        The private network configuration.
      value:
        defaultVrackGateway: "{{ defaultVrackGateway }}"
        privateNetworkRoutingAsDefault: {{ privateNetworkRoutingAsDefault }}
        useUserGateway: {{ useUserGateway }}
    - name: private_network_id
      value: "{{ private_network_id }}"
      description: |
        OpenStack private network ID that the cluster will use. Optional, can only be set on cluster creation or reset. If unspecified, the cluster will use the public network.
    - name: region
      value: "{{ region }}"
      description: |
        Kubernetes OpenStack region
    - name: update_policy
      value: "{{ update_policy }}"
      description: |
        Enum values for UpdatePolicy
      valid_values: ['ALWAYS_UPDATE', 'MINIMAL_DOWNTIME', 'NEVER_UPDATE']
    - name: version
      value: "{{ version }}"
      description: |
        Kubernetes version to install
      valid_values: ['1.32', '1.33', '1.34', '1.35']
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

Update information about your managed Kubernetes cluster

```sql
UPDATE ovh.cloud_kube.clusters
SET 
name = '{{ name }}',
update_policy = '{{ update_policy }}'
WHERE 
kube_id = '{{ kube_id }}' --required
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

Delete your managed Kubernetes cluster

```sql
DELETE FROM ovh.cloud_kube.clusters
WHERE kube_id = '{{ kube_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="audit_logs"
    values={[
        { label: 'audit_logs', value: 'audit_logs' },
        { label: 'kubeconfig', value: 'kubeconfig' },
        { label: 'kubeconfig_reset', value: 'kubeconfig_reset' },
        { label: 'log_url', value: 'log_url' },
        { label: 'reset', value: 'reset' },
        { label: 'restart', value: 'restart' },
        { label: 'force_update', value: 'force_update' },
        { label: 'update_load_balancers_subnet_id', value: 'update_load_balancers_subnet_id' },
        { label: 'update_policy', value: 'update_policy' }
    ]}
>
<TabItem value="audit_logs">

Generate a temporary URL to retrieve audit logs (Deprecated, will be removed)

```sql
EXEC ovh.cloud_kube.clusters.audit_logs 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="kubeconfig">

Generate kubeconfig file

```sql
EXEC ovh.cloud_kube.clusters.kubeconfig 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="kubeconfig_reset">

Reset kubeconfig: Certificates will be regenerated, nodes will be reinstalled

```sql
EXEC ovh.cloud_kube.clusters.kubeconfig_reset 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.cloud_kube.clusters.log_url 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="reset">

Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled

```sql
EXEC ovh.cloud_kube.clusters.reset 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"customization": "{{ customization }}", 
"ipAllocationPolicy": "{{ ipAllocationPolicy }}", 
"kubeProxyMode": "{{ kubeProxyMode }}", 
"loadBalancersSubnetId": "{{ loadBalancersSubnetId }}", 
"name": "{{ name }}", 
"nodesSubnetId": "{{ nodesSubnetId }}", 
"privateNetworkConfiguration": "{{ privateNetworkConfiguration }}", 
"privateNetworkId": "{{ privateNetworkId }}", 
"updatePolicy": "{{ updatePolicy }}", 
"version": "{{ version }}", 
"workerNodesPolicy": "{{ workerNodesPolicy }}"
}'
;
```
</TabItem>
<TabItem value="restart">

Restarting your control plane apiserver to invalidate cache without downtime (using force will create a slight downtime)

```sql
EXEC ovh.cloud_kube.clusters.restart 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"force": {{ force }}
}'
;
```
</TabItem>
<TabItem value="force_update">

Force cluster and node update to the latest patch within minor version or next minor version

```sql
EXEC ovh.cloud_kube.clusters.force_update 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"force": {{ force }}, 
"strategy": "{{ strategy }}"
}'
;
```
</TabItem>
<TabItem value="update_load_balancers_subnet_id">

Updates the load balancers subnet ID

```sql
EXEC ovh.cloud_kube.clusters.update_load_balancers_subnet_id 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"loadBalancersSubnetId": "{{ loadBalancersSubnetId }}"
}'
;
```
</TabItem>
<TabItem value="update_policy">

Change the update policy of your cluster

```sql
EXEC ovh.cloud_kube.clusters.update_policy 
@kubeId='{{ kubeId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"updatePolicy": "{{ updatePolicy }}"
}'
;
```
</TabItem>
</Tabs>
