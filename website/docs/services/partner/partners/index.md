--- 
title: partners
hide_title: false
hide_table_of_contents: false
keywords:
  - partners
  - partner
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

Creates, updates, deletes, gets or lists a <code>partners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.partner.partners" /></td></tr>
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
    <td><CopyableCode code="acceptance_status" /></td>
    <td><code>string</code></td>
    <td>Acceptance Status (Advanced, AdvancedHandOperated, AdvancedQualified, Open, Registered, RegisteredQualified, Rejected) (wire: acceptanceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="account" /></td>
    <td><code>object</code></td>
    <td>Account</td>
</tr>
<tr>
    <td><CopyableCode code="area_of_expertise" /></td>
    <td><code>array</code></td>
    <td>DEPRECATED - Area of Expertise (wire: areaOfExpertise)</td>
</tr>
<tr>
    <td><CopyableCode code="contact" /></td>
    <td><code>object</code></td>
    <td>Contact</td>
</tr>
<tr>
    <td><CopyableCode code="partners_program_reason" /></td>
    <td><code>string</code></td>
    <td>DEPRECATED - Why you want to take part in OVH's Partners Program (wire: partnersProgramReason)</td>
</tr>
<tr>
    <td><CopyableCode code="partnership" /></td>
    <td><code>object</code></td>
    <td> How the PartnerShip will Growth</td>
</tr>
<tr>
    <td><CopyableCode code="sales_projection" /></td>
    <td><code>number</code></td>
    <td>DEPRECATED - Sales Projection (in euros)  (wire: salesProjection)</td>
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
    <td></td>
    <td></td>
    <td>Get partner status</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account"><code>account</code></a></td>
    <td></td>
    <td>Register as a partner</td>
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

Get partner status

```sql
SELECT
acceptance_status,
account,
area_of_expertise,
contact,
partners_program_reason,
partnership,
sales_projection
FROM ovh.partner.partners
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

Register as a partner

```sql
INSERT INTO ovh.partner.partners (
account,
area_of_expertise,
contact,
partners_program_reason,
partnership,
sales_projection
)
SELECT 
'{{ account }}' /* required */,
'{{ area_of_expertise }}',
'{{ contact }}',
'{{ partners_program_reason }}',
'{{ partnership }}',
{{ sales_projection }}
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partners
  props:
    - name: account
      description: |
        Account
      value:
        city: "{{ city }}"
        companyTurnover: {{ companyTurnover }}
        country: "{{ country }}"
        name: "{{ name }}"
        numberOfEmployees: "{{ numberOfEmployees }}"
        partnerType: "{{ partnerType }}"
        yearEstablished: "{{ yearEstablished }}"
    - name: area_of_expertise
      value:
        - "{{ area_of_expertise }}"
      description: |
        DEPRECATED - Area of Expertise
    - name: contact
      description: |
        Contact
      value:
        email: "{{ email }}"
        firstName: "{{ firstName }}"
        jobTitle: "{{ jobTitle }}"
        lastName: "{{ lastName }}"
        phone: "{{ phone }}"
        position: "{{ position }}"
    - name: partners_program_reason
      value: "{{ partners_program_reason }}"
      description: |
        DEPRECATED - Why you want to take part in OVH's Partners Program
    - name: partnership
      description: |
        How the PartnerShip will Growth
      value:
        areaOfExpertise:
          - "{{ areaOfExpertise }}"
        emailCommunication: {{ emailCommunication }}
        partnersProgramReason: "{{ partnersProgramReason }}"
        salesGrowthOpportunities: "{{ salesGrowthOpportunities }}"
        salesProjection: {{ salesProjection }}
        supportAgreementStatement: {{ supportAgreementStatement }}
    - name: sales_projection
      value: {{ sales_projection }}
      description: |
        DEPRECATED - Sales Projection (in euros)
`}</CodeBlock>

</TabItem>
</Tabs>
