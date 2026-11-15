--- 
title: saps
hide_title: false
hide_table_of_contents: false
keywords:
  - saps
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>saps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="saps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.saps" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Uniquely identifies each set of pre-installation tasks. (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="application_type" /></td>
    <td><code>string</code></td>
    <td>Describes the type of SAP application that is being installed as part of the pre-installation tasks. (ABAP, JAVA) (wire: applicationType)</td>
</tr>
<tr>
    <td><CopyableCode code="application_version" /></td>
    <td><code>string</code></td>
    <td>Describes the specific version of the SAP application that is being installed during the pre-installation process. (wire: applicationVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="clean_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current status of the clean-up operations performed as part of the pre-installation tasks. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: cleanStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>Describes the type of deployment strategy being used for the SAP installation during the pre-installation process. (Distributed, High-Availability, Standard) (wire: deploymentType)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>Records the date and time when the pre-installation tasks were finished. (wire: endTime)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Contains a detailed error message if any issues or failures occurred during the execution of the pre-installation tasks. (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of the Gateway component during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: gatewayStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="sap_hana_installation_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of the SAP HANA installation during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: sapHanaInstallationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="sap_hana_sid" /></td>
    <td><code>string</code></td>
    <td>Describes the System ID (SID) assigned to the SAP HANA instance being installed as part of the pre-installation tasks. (wire: sapHanaSid)</td>
</tr>
<tr>
    <td><CopyableCode code="sap_sid" /></td>
    <td><code>string</code></td>
    <td>Describes the System ID (SID) assigned to the SAP system being installed as part of the pre-installation tasks. (wire: sapSid)</td>
</tr>
<tr>
    <td><CopyableCode code="sap_system_installation_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of the SAP system installation during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: sapSystemInstallationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>Records the date and time when the pre-installation tasks were initiated. (wire: startTime)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Provides an overview of the current overall status of the pre-installation tasks. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_deployment_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of virtual machines deployment during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: vmDeploymentStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

This schema provides detailed information about the pre-installation tasks related to SAP deployments.

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
    <td><CopyableCode code="task_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Uniquely identifies each set of pre-installation tasks. (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="application_type" /></td>
    <td><code>string</code></td>
    <td>Describes the type of SAP application that is being installed as part of the pre-installation tasks. (ABAP, JAVA) (wire: applicationType)</td>
</tr>
<tr>
    <td><CopyableCode code="application_version" /></td>
    <td><code>string</code></td>
    <td>Describes the specific version of the SAP application that is being installed during the pre-installation process. (wire: applicationVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="clean_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current status of the clean-up operations performed as part of the pre-installation tasks. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: cleanStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>Describes the type of deployment strategy being used for the SAP installation during the pre-installation process. (Distributed, High-Availability, Standard) (wire: deploymentType)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>Records the date and time when the pre-installation tasks were finished. (wire: endTime)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Contains a detailed error message if any issues or failures occurred during the execution of the pre-installation tasks. (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of the Gateway component during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: gatewayStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="sap_hana_installation_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of the SAP HANA installation during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: sapHanaInstallationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="sap_hana_sid" /></td>
    <td><code>string</code></td>
    <td>Describes the System ID (SID) assigned to the SAP HANA instance being installed as part of the pre-installation tasks. (wire: sapHanaSid)</td>
</tr>
<tr>
    <td><CopyableCode code="sap_sid" /></td>
    <td><code>string</code></td>
    <td>Describes the System ID (SID) assigned to the SAP system being installed as part of the pre-installation tasks. (wire: sapSid)</td>
</tr>
<tr>
    <td><CopyableCode code="sap_system_installation_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of the SAP system installation during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: sapSystemInstallationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>Records the date and time when the pre-installation tasks were initiated. (wire: startTime)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Provides an overview of the current overall status of the pre-installation tasks. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_deployment_status" /></td>
    <td><code>string</code></td>
    <td>Provides the current operational state of virtual machines deployment during the pre-installation process. (FAILURE, PENDING, RETRY, REVOKED, STARTED, SUCCESS) (wire: vmDeploymentStatus)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>Returns the status of the task and of each step, from virtual machine deployment to SAP installation, with an error message if a step fails.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Returns the pre-installation tasks of the service and their status.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-application_servers"><code>application_servers</code></a>, <a href="#parameter-application_type"><code>application_type</code></a>, <a href="#parameter-application_version"><code>application_version</code></a>, <a href="#parameter-bucket_sources"><code>bucket_sources</code></a>, <a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-deployment_type"><code>deployment_type</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-firewall"><code>firewall</code></a>, <a href="#parameter-hana_servers"><code>hana_servers</code></a>, <a href="#parameter-os_update"><code>os_update</code></a>, <a href="#parameter-passwords"><code>passwords</code></a>, <a href="#parameter-sids"><code>sids</code></a>, <a href="#parameter-system_usage"><code>system_usage</code></a></td>
    <td></td>
    <td>Starts a task that deploys the SAP HANA and application server virtual machines in a datacenter of the service, then installs SAP HANA and the SAP system. Only one task can run at a time on the service. To check the parameters without starting a task, use the validate endpoint.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>Deletes the task. The virtual machines it deployed are kept.</td>
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
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Task ID (wire: taskId)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Returns the status of the task and of each step, from virtual machine deployment to SAP installation, with an error message if a step fails.

```sql
SELECT
task_id,
application_type,
application_version,
clean_status,
deployment_type,
end_time,
error_message,
gateway_status,
iam,
sap_hana_installation_status,
sap_hana_sid,
sap_sid,
sap_system_installation_status,
start_time,
status,
vm_deployment_status
FROM ovh.dedicated_cloud.saps
WHERE service_name = '{{ service_name }}' -- required
AND task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the pre-installation tasks of the service and their status.

```sql
SELECT
task_id,
application_type,
application_version,
clean_status,
deployment_type,
end_time,
error_message,
gateway_status,
iam,
sap_hana_installation_status,
sap_hana_sid,
sap_sid,
sap_system_installation_status,
start_time,
status,
vm_deployment_status
FROM ovh.dedicated_cloud.saps
WHERE service_name = '{{ service_name }}' -- required
AND iam_tags = '{{ iam_tags }}'
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

Starts a task that deploys the SAP HANA and application server virtual machines in a datacenter of the service, then installs SAP HANA and the SAP system. Only one task can run at a time on the service. To check the parameters without starting a task, use the validate endpoint.

```sql
INSERT INTO ovh.dedicated_cloud.saps (
application_servers,
application_type,
application_version,
bucket_backint,
bucket_sources,
cluster_name,
datacenter_id,
deployment_type,
domain_name,
firewall,
hana_servers,
logs_data_platform,
os_license,
os_update,
passwords,
service_name,
sids,
system_usage,
service_name
)
SELECT 
'{{ application_servers }}' /* required */,
'{{ application_type }}' /* required */,
'{{ application_version }}' /* required */,
'{{ bucket_backint }}',
'{{ bucket_sources }}' /* required */,
'{{ cluster_name }}' /* required */,
{{ datacenter_id }} /* required */,
'{{ deployment_type }}' /* required */,
'{{ domain_name }}' /* required */,
'{{ firewall }}' /* required */,
'{{ hana_servers }}' /* required */,
'{{ logs_data_platform }}',
'{{ os_license }}',
{{ os_update }} /* required */,
'{{ passwords }}' /* required */,
'{{ service_name }}',
'{{ sids }}' /* required */,
'{{ system_usage }}' /* required */,
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: saps
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the saps resource.
    - name: application_servers
      description: |
        An array containing the configuration details for each SAP Application Server (such as SCS, ERS, PAS, AAS) virtual machine that will be deployed.
      value:
        - datastoreName: "{{ datastoreName }}"
          gateway: "{{ gateway }}"
          instanceNumber: "{{ instanceNumber }}"
          ipAddress: "{{ ipAddress }}"
          memory: {{ memory }}
          name: "{{ name }}"
          netmask: "{{ netmask }}"
          network: "{{ network }}"
          ovaTemplate: "{{ ovaTemplate }}"
          role: "{{ role }}"
          rootPassword: "{{ rootPassword }}"
          vcpus: {{ vcpus }}
    - name: application_type
      value: "{{ application_type }}"
      description: |
        Selects the type of SAP application that will be installed, such as NetWeaver 7.50 or S/4HANA.
      valid_values: ['ABAP', 'JAVA']
    - name: application_version
      value: "{{ application_version }}"
      description: |
        Selects the specific version of the SAP application that will be deployed.
      valid_values: ['NetWeaver 7.50', 'S/4HANA 2021', 'S/4HANA 2022', 'S/4HANA 2023']
    - name: bucket_backint
      description: |
        Configuration settings for the storage bucket used by the OVHcloud Backint Agent to store SAP HANA backup files.
      value:
        accessKey: "{{ accessKey }}"
        endpoint: "{{ endpoint }}"
        id: "{{ id }}"
        secretKey: "{{ secretKey }}"
    - name: bucket_sources
      description: |
        Configuration settings for the storage bucket that contains the necessary SAP installation sources.
      value:
        accessKey: "{{ accessKey }}"
        endpoint: "{{ endpoint }}"
        id: "{{ id }}"
        secretKey: "{{ secretKey }}"
    - name: cluster_name
      value: "{{ cluster_name }}"
      description: |
        A user-defined name for the cluster that will host the SAP environment, usually 'Cluster1'.
    - name: datacenter_id
      value: {{ datacenter_id }}
      description: |
        The unique identifier for the datacenter where the SAP environment will be deployed.
    - name: deployment_type
      value: "{{ deployment_type }}"
      description: |
        Selects the type of SAP deployment, such as Standard, Distributed or High-Availability.
      valid_values: ['Distributed', 'High-Availability', 'Standard']
    - name: domain_name
      value: "{{ domain_name }}"
      description: |
        The fully qualified domain name (FQDN) that will be used for the SAP environment.
    - name: firewall
      description: |
        Configuration settings for the firewall to protect the SAP environment.
      value:
        applicationServers: {{ applicationServers }}
        centralServices: {{ centralServices }}
        hanaDatabase: {{ hanaDatabase }}
    - name: hana_servers
      description: |
        An array containing the configuration details for each SAP HANA virtual machine that will be deployed.
      value:
        - datastoreName: "{{ datastoreName }}"
          gateway: "{{ gateway }}"
          instanceNumber: "{{ instanceNumber }}"
          ipAddress: "{{ ipAddress }}"
          memory: {{ memory }}
          name: "{{ name }}"
          netmask: "{{ netmask }}"
          network: "{{ network }}"
          ovaTemplate: "{{ ovaTemplate }}"
          rootPassword: "{{ rootPassword }}"
          thickDatastorePolicy: "{{ thickDatastorePolicy }}"
          vcpus: {{ vcpus }}
    - name: logs_data_platform
      description: |
        Configuration settings for the Logs Data Platform that will be used to collect and externalize operating system and SAP logs.
      value:
        certificate: "{{ certificate }}"
        entrypoint: "{{ entrypoint }}"
    - name: os_license
      value: "{{ os_license }}"
      description: |
        The license key or identifier for the operating system that will be used for the SAP environment.
    - name: os_update
      value: {{ os_update }}
      description: |
        A boolean value indicating whether the operating system should be updated during the pre-installation process.
    - name: passwords
      description: |
        Configuration settings for the various passwords required for the SAP environment, including database, administrator, and service accounts.
      value:
        masterSap: "{{ masterSap }}"
        masterSapHana: "{{ masterSapHana }}"
        sidadm: "{{ sidadm }}"
        system: "{{ system }}"
    - name: service_name
      value: "{{ service_name }}"
      description: |
        The name of the Hosted Private Cloud service. This field is primarily used by the OVHcloud Manager during the import process.
    - name: sids
      description: |
        Configuration settings for the System IDs (SIDs) that will be used for the SAP environment.
      value:
        sapHanaSid: "{{ sapHanaSid }}"
        sapSid: "{{ sapSid }}"
    - name: system_usage
      value: "{{ system_usage }}"
      description: |
        Selects the intended usage of the SAP system, such as custom, development, production or test.
      valid_values: ['custom', 'development', 'production', 'test']
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

Deletes the task. The virtual machines it deployed are kept.

```sql
DELETE FROM ovh.dedicated_cloud.saps
WHERE service_name = '{{ service_name }}' --required
AND task_id = '{{ task_id }}' --required
;
```
</TabItem>
</Tabs>
