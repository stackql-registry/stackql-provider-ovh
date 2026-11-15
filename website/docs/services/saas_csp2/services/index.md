--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - saas_csp2
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.saas_csp2.services" /></td></tr>
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
    <td><CopyableCode code="mpn_id" /></td>
    <td><code>string</code></td>
    <td>Microsoft Partner Network identifier linked to this tenant (wire: mpnId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Tenant's display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Contact's first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Contact's last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Internal service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>Contact's address line</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>Contact's city</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Contact's email address</td>
</tr>
<tr>
    <td><CopyableCode code="has_accepted_new_mca" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the 2025 Microsoft Customer Agreement was properly accepted (wire: hasAcceptedNewMCA)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="mpn_issue_flag" /></td>
    <td><code>string</code></td>
    <td>Code of any detected issue regarding the MPN Id (wire: mpnIssueFlag)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Primary phone number</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Tenant's status (creating, inMaintenance, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="zip_code" /></td>
    <td><code>string</code></td>
    <td>Contact's zip code (wire: zipCode)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Office tenant

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
    <td><CopyableCode code="mpn_id" /></td>
    <td><code>string</code></td>
    <td>Microsoft Partner Network identifier linked to this tenant (wire: mpnId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Tenant's display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>Contact's first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Contact's last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Internal service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>Contact's address line</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>Contact's city</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Contact's email address</td>
</tr>
<tr>
    <td><CopyableCode code="has_accepted_new_mca" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the 2025 Microsoft Customer Agreement was properly accepted (wire: hasAcceptedNewMCA)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="mpn_issue_flag" /></td>
    <td><code>string</code></td>
    <td>Code of any detected issue regarding the MPN Id (wire: mpnIssueFlag)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Primary phone number</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Tenant's status (creating, inMaintenance, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="zip_code" /></td>
    <td><code>string</code></td>
    <td>Contact's zip code (wire: zipCode)</td>
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
    <td>Returns the display name, contact details, Microsoft Partner Network ID, status and creation date of the tenant, and whether the 2025 Microsoft Customer Agreement is accepted. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the service names of the tenants. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the display name, the contact details and the Microsoft Partner Network ID (`mpnId`) of the tenant. (Alpha version)</td>
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

Returns the display name, contact details, Microsoft Partner Network ID, status and creation date of the tenant, and whether the 2025 Microsoft Customer Agreement is accepted. (Alpha version)

```sql
SELECT
mpn_id,
display_name,
first_name,
last_name,
service_name,
address,
city,
creation_date,
email,
has_accepted_new_mca,
iam,
mpn_issue_flag,
phone,
status,
zip_code
FROM ovh.saas_csp2.services
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the service names of the tenants. (Alpha version)

```sql
SELECT
mpn_id,
display_name,
first_name,
last_name,
service_name,
address,
city,
creation_date,
email,
has_accepted_new_mca,
iam,
mpn_issue_flag,
phone,
status,
zip_code
FROM ovh.saas_csp2.services
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Updates the display name, the contact details and the Microsoft Partner Network ID (`mpnId`) of the tenant. (Alpha version)

```sql
UPDATE ovh.saas_csp2.services
SET 
address = '{{ address }}',
city = '{{ city }}',
display_name = '{{ display_name }}',
email = '{{ email }}',
first_name = '{{ first_name }}',
last_name = '{{ last_name }}',
mpn_id = '{{ mpn_id }}',
phone = '{{ phone }}',
zip_code = '{{ zip_code }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
