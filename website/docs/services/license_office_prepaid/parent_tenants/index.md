--- 
title: parent_tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - parent_tenants
  - license_office_prepaid
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

Creates, updates, deletes, gets or lists a <code>parent_tenants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parent_tenants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.license_office_prepaid.parent_tenants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td>Tenant's service name (wire: serviceName)</td>
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
    <td><CopyableCode code="mca_agreed" /></td>
    <td><code>boolean</code></td>
    <td>MCA acceptance status (wire: mcaAgreed)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Primary phone number</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>Tenant's service type (payAsYouGo, prepaid) (wire: serviceType)</td>
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
    <td>Returns the tenant of the prepaid user: display name, contact details, service type, status, and whether the Microsoft Customer Agreement (MCA) is accepted. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the display name of the tenant of the prepaid user. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#accept_agreement"><CopyableCode code="accept_agreement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Accepts the Microsoft Customer Agreement (MCA) for the parent tenant. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create_attestation"><CopyableCode code="create_attestation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Creates a Microsoft Customer Agreement attestation for the parent tenant from the signatory company, names, email address, phone number, country and language. Returns the attestation ID and a link to the attestation that can be embedded in an iframe. (Alpha version)</td>
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
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns the tenant of the prepaid user: display name, contact details, service type, status, and whether the Microsoft Customer Agreement (MCA) is accepted. (Alpha version)

```sql
SELECT
display_name,
first_name,
last_name,
service_name,
address,
city,
creation_date,
mca_agreed,
phone,
service_type,
status,
zip_code
FROM ovh.license_office_prepaid.parent_tenants
WHERE service_name = '{{ service_name }}' -- required
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

Updates the display name of the tenant of the prepaid user. (Alpha version)

```sql
UPDATE ovh.license_office_prepaid.parent_tenants
SET 
display_name = '{{ display_name }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="accept_agreement"
    values={[
        { label: 'accept_agreement', value: 'accept_agreement' },
        { label: 'create_attestation', value: 'create_attestation' }
    ]}
>
<TabItem value="accept_agreement">

Accepts the Microsoft Customer Agreement (MCA) for the parent tenant. (Alpha version)

```sql
EXEC ovh.license_office_prepaid.parent_tenants.accept_agreement 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="create_attestation">

Creates a Microsoft Customer Agreement attestation for the parent tenant from the signatory company, names, email address, phone number, country and language. Returns the attestation ID and a link to the attestation that can be embedded in an iframe. (Alpha version)

```sql
EXEC ovh.license_office_prepaid.parent_tenants.create_attestation 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"companyName": "{{ companyName }}", 
"country": "{{ country }}", 
"emailAddress": "{{ emailAddress }}", 
"language": "{{ language }}", 
"phoneNumber": "{{ phoneNumber }}", 
"signatoryFirstName": "{{ signatoryFirstName }}", 
"signatoryLastName": "{{ signatoryLastName }}"
}'
;
```
</TabItem>
</Tabs>
