--- 
title: dedicated_clouds
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_clouds
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

Creates, updates, deletes, gets or lists a <code>dedicated_clouds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_clouds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.dedicated_clouds" /></td></tr>
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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name of your VMware on OVHcloud (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_pack_name" /></td>
    <td><code>string</code></td>
    <td>Name of the current service pack (wire: servicePackName)</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security" /></td>
    <td><code>boolean</code></td>
    <td>Advanced security state (wire: advancedSecurity)</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>The current bandwidth of your VMware on OVHcloud</td>
</tr>
<tr>
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Billing type of your VMware on OVHcloud (demo, monthly) (wire: billingType)</td>
</tr>
<tr>
    <td><CopyableCode code="can_migrate_to_vcd" /></td>
    <td><code>boolean</code></td>
    <td>Can the PCC be migrated to VCD (wire: canMigrateToVCD)</td>
</tr>
<tr>
    <td><CopyableCode code="certified_interface_url" /></td>
    <td><code>string</code></td>
    <td>Url to the VMware on OVHcloud certified interface (wire: certifiedInterfaceUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_range" /></td>
    <td><code>string</code></td>
    <td>The current version of your VMware on OVHcloud (wire: commercialRange)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of your VMware on OVHcloud</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string</code></td>
    <td>Generation of your VMware on OVHcloud (1.0, 2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Datacenter where your VMware on OVHcloud is physically located</td>
</tr>
<tr>
    <td><CopyableCode code="management_interface" /></td>
    <td><code>string</code></td>
    <td>The management interface name (azure, openstack, systemcenter, vcloud, vcsa, vsphere) (wire: managementInterface)</td>
</tr>
<tr>
    <td><CopyableCode code="product_reference" /></td>
    <td><code>string</code></td>
    <td>The reference universe information for your VMware on OVHcloud (EPCC, MBM) (wire: productReference)</td>
</tr>
<tr>
    <td><CopyableCode code="spla" /></td>
    <td><code>boolean</code></td>
    <td>SPLA licensing state</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_v3" /></td>
    <td><code>boolean</code></td>
    <td>Enable SSL v3 support. Warning : this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy (wire: sslV3)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your VMware on OVHcloud (available, delivered, disabled, disabling, error, migrating, provisionning, recycling, reserved, toDisable, toProvision, toRecycle, toRemove, toUnprovision, unprovisionning, upgrading)</td>
</tr>
<tr>
    <td><CopyableCode code="user_access_policy" /></td>
    <td><code>string</code></td>
    <td>Access policy of your VMware on OVHcloud : opened to every IPs or filtered (filtered, open) (wire: userAccessPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="user_limit_concurrent_session" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of connected users allowed on the VMware on OVHcloud management interface (wire: userLimitConcurrentSession)</td>
</tr>
<tr>
    <td><CopyableCode code="user_logout_policy" /></td>
    <td><code>string</code></td>
    <td>Which user will be disconnected first in case of quota of maximum connection is reached (first, last) (wire: userLogoutPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="user_session_timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout (in seconds) for the user sessions on the VMware on OVHcloud management interface. 0 value disable the timeout (wire: userSessionTimeout)</td>
</tr>
<tr>
    <td><CopyableCode code="v_scope_url" /></td>
    <td><code>string</code></td>
    <td>Url to the VMware on OVHcloud vScope interface (wire: vScopeUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version of the management interface</td>
</tr>
<tr>
    <td><CopyableCode code="web_interface_url" /></td>
    <td><code>string</code></td>
    <td>Url to the VMware on OVHcloud web interface (wire: webInterfaceUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

VMware on OVHcloud

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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name of your VMware on OVHcloud (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_pack_name" /></td>
    <td><code>string</code></td>
    <td>Name of the current service pack (wire: servicePackName)</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security" /></td>
    <td><code>boolean</code></td>
    <td>Advanced security state (wire: advancedSecurity)</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>The current bandwidth of your VMware on OVHcloud</td>
</tr>
<tr>
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Billing type of your VMware on OVHcloud (demo, monthly) (wire: billingType)</td>
</tr>
<tr>
    <td><CopyableCode code="can_migrate_to_vcd" /></td>
    <td><code>boolean</code></td>
    <td>Can the PCC be migrated to VCD (wire: canMigrateToVCD)</td>
</tr>
<tr>
    <td><CopyableCode code="certified_interface_url" /></td>
    <td><code>string</code></td>
    <td>Url to the VMware on OVHcloud certified interface (wire: certifiedInterfaceUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_range" /></td>
    <td><code>string</code></td>
    <td>The current version of your VMware on OVHcloud (wire: commercialRange)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of your VMware on OVHcloud</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string</code></td>
    <td>Generation of your VMware on OVHcloud (1.0, 2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Datacenter where your VMware on OVHcloud is physically located</td>
</tr>
<tr>
    <td><CopyableCode code="management_interface" /></td>
    <td><code>string</code></td>
    <td>The management interface name (azure, openstack, systemcenter, vcloud, vcsa, vsphere) (wire: managementInterface)</td>
</tr>
<tr>
    <td><CopyableCode code="product_reference" /></td>
    <td><code>string</code></td>
    <td>The reference universe information for your VMware on OVHcloud (EPCC, MBM) (wire: productReference)</td>
</tr>
<tr>
    <td><CopyableCode code="spla" /></td>
    <td><code>boolean</code></td>
    <td>SPLA licensing state</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_v3" /></td>
    <td><code>boolean</code></td>
    <td>Enable SSL v3 support. Warning : this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy (wire: sslV3)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your VMware on OVHcloud (available, delivered, disabled, disabling, error, migrating, provisionning, recycling, reserved, toDisable, toProvision, toRecycle, toRemove, toUnprovision, unprovisionning, upgrading)</td>
</tr>
<tr>
    <td><CopyableCode code="user_access_policy" /></td>
    <td><code>string</code></td>
    <td>Access policy of your VMware on OVHcloud : opened to every IPs or filtered (filtered, open) (wire: userAccessPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="user_limit_concurrent_session" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of connected users allowed on the VMware on OVHcloud management interface (wire: userLimitConcurrentSession)</td>
</tr>
<tr>
    <td><CopyableCode code="user_logout_policy" /></td>
    <td><code>string</code></td>
    <td>Which user will be disconnected first in case of quota of maximum connection is reached (first, last) (wire: userLogoutPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="user_session_timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout (in seconds) for the user sessions on the VMware on OVHcloud management interface. 0 value disable the timeout (wire: userSessionTimeout)</td>
</tr>
<tr>
    <td><CopyableCode code="v_scope_url" /></td>
    <td><code>string</code></td>
    <td>Url to the VMware on OVHcloud vScope interface (wire: vScopeUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version of the management interface</td>
</tr>
<tr>
    <td><CopyableCode code="web_interface_url" /></td>
    <td><code>string</code></td>
    <td>Url to the VMware on OVHcloud web interface (wire: webInterfaceUrl)</td>
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
    <td>Get a Managed VMware vSphere service. Returns the service: state, version, location, access and session policies, and management interface URLs.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Managed VMware vSphere services. Returns the names of your services. Filter by IAM tags with `iamTags`.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#change_properties"><CopyableCode code="change_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Update the service. Updates the description, access policy, logout policy, session timeout, concurrent session limit and SSL v3 support of the service. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.</td>
</tr>
<tr>
    <td><a href="#generate_nsxv_inventory"><CopyableCode code="generate_nsxv_inventory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generate an NSX-V inventory</td>
</tr>
<tr>
    <td><a href="#generate_vxlan_to_vrack_mapping"><CopyableCode code="generate_vxlan_to_vrack_mapping" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generate a VXLAN to vRack mapping. Generates the mapping between the NSX-V VXLANs and the vRack. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generate a log URL. Returns a temporary URL to read the logs of a kind in real time, with its expiration date.</td>
</tr>
<tr>
    <td><a href="#order_new_filer_hourly"><CopyableCode code="order_new_filer_hourly" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Order an hourly global datastore. Orders a datastore billed by the hour, mounted on all datacenters of the service. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#reset_triggered_alarm"><CopyableCode code="reset_triggered_alarm" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reset triggered alarms. Resets all triggered alarms of the hypervisor. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.</td>
</tr>
<tr>
    <td><a href="#upgrade_vcenter"><CopyableCode code="upgrade_vcenter" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Upgrade vCenter. Upgrades vCenter to the next minor version by default, or to the next major version with `release`. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#vmware_cloud_director_eligibility"><CopyableCode code="vmware_cloud_director_eligibility" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Check VCD migration eligibility. Checks whether the service can migrate to VMware Cloud Director. Returns a task to track progress.</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Get a Managed VMware vSphere service. Returns the service: state, version, location, access and session policies, and management interface URLs.

```sql
SELECT
service_name,
service_pack_name,
advanced_security,
bandwidth,
billing_type,
can_migrate_to_vcd,
certified_interface_url,
commercial_range,
description,
generation,
iam,
location,
management_interface,
product_reference,
spla,
ssl_v3,
state,
user_access_policy,
user_limit_concurrent_session,
user_logout_policy,
user_session_timeout,
v_scope_url,
version,
web_interface_url
FROM ovh.dedicated_cloud.dedicated_clouds
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Managed VMware vSphere services. Returns the names of your services. Filter by IAM tags with `iamTags`.

```sql
SELECT
service_name,
service_pack_name,
advanced_security,
bandwidth,
billing_type,
can_migrate_to_vcd,
certified_interface_url,
commercial_range,
description,
generation,
iam,
location,
management_interface,
product_reference,
spla,
ssl_v3,
state,
user_access_policy,
user_limit_concurrent_session,
user_logout_policy,
user_session_timeout,
v_scope_url,
version,
web_interface_url
FROM ovh.dedicated_cloud.dedicated_clouds
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'change_properties', value: 'change_properties' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'generate_nsxv_inventory', value: 'generate_nsxv_inventory' },
        { label: 'generate_vxlan_to_vrack_mapping', value: 'generate_vxlan_to_vrack_mapping' },
        { label: 'log_url', value: 'log_url' },
        { label: 'order_new_filer_hourly', value: 'order_new_filer_hourly' },
        { label: 'reset_triggered_alarm', value: 'reset_triggered_alarm' },
        { label: 'terminate', value: 'terminate' },
        { label: 'upgrade_vcenter', value: 'upgrade_vcenter' },
        { label: 'vmware_cloud_director_eligibility', value: 'vmware_cloud_director_eligibility' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="change_properties">

Update the service. Updates the description, access policy, logout policy, session timeout, concurrent session limit and SSL v3 support of the service. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.change_properties 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"description": "{{ description }}", 
"sslV3": {{ sslV3 }}, 
"userAccessPolicy": "{{ userAccessPolicy }}", 
"userLimitConcurrentSession": {{ userLimitConcurrentSession }}, 
"userLogoutPolicy": "{{ userLogoutPolicy }}", 
"userSessionTimeout": {{ userSessionTimeout }}
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="generate_nsxv_inventory">

Generate an NSX-V inventory

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.generate_nsxv_inventory 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="generate_vxlan_to_vrack_mapping">

Generate a VXLAN to vRack mapping. Generates the mapping between the NSX-V VXLANs and the vRack. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.generate_vxlan_to_vrack_mapping 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="log_url">

Generate a log URL. Returns a temporary URL to read the logs of a kind in real time, with its expiration date.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="order_new_filer_hourly">

Order an hourly global datastore. Orders a datastore billed by the hour, mounted on all datacenters of the service. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.order_new_filer_hourly 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="reset_triggered_alarm">

Reset triggered alarms. Resets all triggered alarms of the hypervisor. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.reset_triggered_alarm 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="upgrade_vcenter">

Upgrade vCenter. Upgrades vCenter to the next minor version by default, or to the next major version with `release`. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.upgrade_vcenter 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"release": "{{ release }}"
}'
;
```
</TabItem>
<TabItem value="vmware_cloud_director_eligibility">

Check VCD migration eligibility. Checks whether the service can migrate to VMware Cloud Director. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.dedicated_clouds.vmware_cloud_director_eligibility 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
