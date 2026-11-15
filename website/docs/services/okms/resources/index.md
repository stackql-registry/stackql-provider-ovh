--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - okms
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.okms.resources" /></td></tr>
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
    <td>Unique identifier of the OKMS</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="kmip_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS kmip API endpoint (wire: kmipEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="kmip_object_count" /></td>
    <td><code>integer</code></td>
    <td>Number of KMIP objects (non destroyed) (wire: kmipObjectCount)</td>
</tr>
<tr>
    <td><CopyableCode code="kmip_rsa_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS kmip RSA API endpoint (wire: kmipRsaEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="pci_dss_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether PCI-DSS compliance is enabled on the service (wire: pciDssEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="pci_dss_enabled_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Tells when PCI-DSS compliance was enabled (wire: pciDssEnabledAt)</td>
</tr>
<tr>
    <td><CopyableCode code="public_ca" /></td>
    <td><code>string</code></td>
    <td>KMS public CA (Certificate Authority) (wire: publicCA)</td>
</tr>
<tr>
    <td><CopyableCode code="public_rsa_ca" /></td>
    <td><code>string</code></td>
    <td>KMS public RSA CA (Certificate Authority) (wire: publicRsaCA)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region the key management service runs in, which is where your keys and secrets are stored (ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-waw, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-lim, eu-west-par, eu-west-rbx, eu-west-sbg)</td>
</tr>
<tr>
    <td><CopyableCode code="rest_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS rest API endpoint (wire: restEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_count" /></td>
    <td><code>integer</code></td>
    <td>Number of secrets (wire: secretCount)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_version_count" /></td>
    <td><code>integer</code></td>
    <td>Number of secret versions (wire: secretVersionCount)</td>
</tr>
<tr>
    <td><CopyableCode code="service_key_count" /></td>
    <td><code>integer</code></td>
    <td>Number of service keys (wire: serviceKeyCount)</td>
</tr>
<tr>
    <td><CopyableCode code="service_key_count_details" /></td>
    <td><code>object</code></td>
    <td>Number of service keys per protection level (wire: serviceKeyCountDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="swagger_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS rest API swagger UI (wire: swaggerEndpoint)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An OKMS service

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
    <td>Unique identifier of the OKMS</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="kmip_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS kmip API endpoint (wire: kmipEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="kmip_object_count" /></td>
    <td><code>integer</code></td>
    <td>Number of KMIP objects (non destroyed) (wire: kmipObjectCount)</td>
</tr>
<tr>
    <td><CopyableCode code="kmip_rsa_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS kmip RSA API endpoint (wire: kmipRsaEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="pci_dss_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether PCI-DSS compliance is enabled on the service (wire: pciDssEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="pci_dss_enabled_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Tells when PCI-DSS compliance was enabled (wire: pciDssEnabledAt)</td>
</tr>
<tr>
    <td><CopyableCode code="public_ca" /></td>
    <td><code>string</code></td>
    <td>KMS public CA (Certificate Authority) (wire: publicCA)</td>
</tr>
<tr>
    <td><CopyableCode code="public_rsa_ca" /></td>
    <td><code>string</code></td>
    <td>KMS public RSA CA (Certificate Authority) (wire: publicRsaCA)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region the key management service runs in, which is where your keys and secrets are stored (ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-waw, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-lim, eu-west-par, eu-west-rbx, eu-west-sbg)</td>
</tr>
<tr>
    <td><CopyableCode code="rest_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS rest API endpoint (wire: restEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_count" /></td>
    <td><code>integer</code></td>
    <td>Number of secrets (wire: secretCount)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_version_count" /></td>
    <td><code>integer</code></td>
    <td>Number of secret versions (wire: secretVersionCount)</td>
</tr>
<tr>
    <td><CopyableCode code="service_key_count" /></td>
    <td><code>integer</code></td>
    <td>Number of service keys (wire: serviceKeyCount)</td>
</tr>
<tr>
    <td><CopyableCode code="service_key_count_details" /></td>
    <td><code>object</code></td>
    <td>Number of service keys per protection level (wire: serviceKeyCountDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="swagger_endpoint" /></td>
    <td><code>string</code></td>
    <td>KMS rest API swagger UI (wire: swaggerEndpoint)</td>
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
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td><a href="#parameter-public_ca"><code>public_ca</code></a></td>
    <td>Returns the OKMS service with its endpoints and resource counts. Set `publicCA` to true to include the KMS public CA certificate.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Returns the OKMS services of the account, with their region, KMIP and REST endpoints, and counts of keys, secrets and KMIP objects.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td></td>
    <td>Enables or disables PCI-DSS enforcement on the service.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-okmsId"><code>okmsId</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Returns a temporary signed URL for read-only access to the logs of the given kind. The link expires. (Beta version)</td>
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
<tr id="parameter-okmsId">
    <td><CopyableCode code="okmsId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Okms ID</td>
</tr>
<tr id="parameter-okms_id">
    <td><CopyableCode code="okms_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Okms ID (wire: okmsId)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-public_ca">
    <td><CopyableCode code="public_ca" /></td>
    <td><code>boolean</code></td>
    <td>Add KMS public CA (Certificate Authority) in the output (wire: publicCA)</td>
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

Returns the OKMS service with its endpoints and resource counts. Set `publicCA` to true to include the KMS public CA certificate.

```sql
SELECT
id,
iam,
kmip_endpoint,
kmip_object_count,
kmip_rsa_endpoint,
pci_dss_enabled,
pci_dss_enabled_at,
public_ca,
public_rsa_ca,
region,
rest_endpoint,
secret_count,
secret_version_count,
service_key_count,
service_key_count_details,
swagger_endpoint
FROM ovh.okms.resources
WHERE okms_id = '{{ okms_id }}' -- required
AND public_ca = '{{ public_ca }}'
;
```
</TabItem>
<TabItem value="list">

Returns the OKMS services of the account, with their region, KMIP and REST endpoints, and counts of keys, secrets and KMIP objects.

```sql
SELECT
id,
iam,
kmip_endpoint,
kmip_object_count,
kmip_rsa_endpoint,
pci_dss_enabled,
pci_dss_enabled_at,
public_ca,
public_rsa_ca,
region,
rest_endpoint,
secret_count,
secret_version_count,
service_key_count,
service_key_count_details,
swagger_endpoint
FROM ovh.okms.resources
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND iam_tags = '{{ iam_tags }}'
;
```
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

Enables or disables PCI-DSS enforcement on the service.

```sql
UPDATE ovh.okms.resources
SET 
pci_dss_enabled = {{ pci_dss_enabled }}
WHERE 
okms_id = '{{ okms_id }}' --required
RETURNING
id,
kmip_endpoint,
kmip_object_count,
kmip_rsa_endpoint,
pci_dss_enabled,
pci_dss_enabled_at,
public_ca,
public_rsa_ca,
region,
rest_endpoint,
secret_count,
secret_version_count,
service_key_count,
service_key_count_details,
swagger_endpoint;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="log_url"
    values={[
        { label: 'log_url', value: 'log_url' }
    ]}
>
<TabItem value="log_url">

Returns a temporary signed URL for read-only access to the logs of the given kind. The link expires. (Beta version)

```sql
EXEC ovh.okms.resources.log_url 
@okmsId='{{ okmsId }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
</Tabs>
