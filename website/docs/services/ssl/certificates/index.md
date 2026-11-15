--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - ssl
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

Creates, updates, deletes, gets or lists a <code>certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ssl.certificates" /></td></tr>
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
    <td><CopyableCode code="common_name" /></td>
    <td><code>string</code></td>
    <td>The CN field in your certificate (wire: commonName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your certificate offer (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_alt_name" /></td>
    <td><code>array</code></td>
    <td>The SAN field for multidomain certificate (wire: subjectAltName)</td>
</tr>
<tr>
    <td><CopyableCode code="authority" /></td>
    <td><code>string</code></td>
    <td>The authority your certificate is issued from (comodo, sectigo)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td>Your certificate</td>
</tr>
<tr>
    <td><CopyableCode code="chain" /></td>
    <td><code>string</code></td>
    <td>The issuer chain of your certificate</td>
</tr>
<tr>
    <td><CopyableCode code="csr" /></td>
    <td><code>string</code></td>
    <td>The CSR used to create your certificate</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of your certificate (creating, error, ok, validating)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your certificate (DV, EV, OV)</td>
</tr>
<tr>
    <td><CopyableCode code="validity_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>Your certificate is invalid from this date (wire: validityEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="validity_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>Your certificate is valid from this date (wire: validityStart)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Certificate of an SSL customer

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
    <td><CopyableCode code="common_name" /></td>
    <td><code>string</code></td>
    <td>The CN field in your certificate (wire: commonName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your certificate offer (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_alt_name" /></td>
    <td><code>array</code></td>
    <td>The SAN field for multidomain certificate (wire: subjectAltName)</td>
</tr>
<tr>
    <td><CopyableCode code="authority" /></td>
    <td><code>string</code></td>
    <td>The authority your certificate is issued from (comodo, sectigo)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td>Your certificate</td>
</tr>
<tr>
    <td><CopyableCode code="chain" /></td>
    <td><code>string</code></td>
    <td>The issuer chain of your certificate</td>
</tr>
<tr>
    <td><CopyableCode code="csr" /></td>
    <td><code>string</code></td>
    <td>The CSR used to create your certificate</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of your certificate (creating, error, ok, validating)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your certificate (DV, EV, OV)</td>
</tr>
<tr>
    <td><CopyableCode code="validity_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>Your certificate is invalid from this date (wire: validityEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="validity_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>Your certificate is valid from this date (wire: validityStart)</td>
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
    <td>Returns an SSL certificate: status, type (DV, OV or EV), issuing authority, common name, alternative names, validity dates, and the certificate and its issuer chain once issued.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the identifiers of the SSL certificates of the account.</td>
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

Returns an SSL certificate: status, type (DV, OV or EV), issuing authority, common name, alternative names, validity dates, and the certificate and its issuer chain once issued.

```sql
SELECT
common_name,
service_name,
subject_alt_name,
authority,
certificate,
chain,
csr,
iam,
status,
type,
validity_end,
validity_start
FROM ovh.ssl.certificates
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the identifiers of the SSL certificates of the account.

```sql
SELECT
common_name,
service_name,
subject_alt_name,
authority,
certificate,
chain,
csr,
iam,
status,
type,
validity_end,
validity_start
FROM ovh.ssl.certificates
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
