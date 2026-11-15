--- 
title: boost_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - boost_histories
  - hosting_web
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

Creates, updates, deletes, gets or lists a <code>boost_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="boost_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.boost_histories" /></td></tr>
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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td> Account who requested the change (wire: accountId)</td>
</tr>
<tr>
    <td><CopyableCode code="boost_offer" /></td>
    <td><code>string</code></td>
    <td>Boost offer used (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan) (wire: boostOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the change has been requested</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer when the change was made (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Boost History

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td> Account who requested the change (wire: accountId)</td>
</tr>
<tr>
    <td><CopyableCode code="boost_offer" /></td>
    <td><code>string</code></td>
    <td>Boost offer used (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan) (wire: boostOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the change has been requested</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer when the change was made (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan)</td>
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
    <td><a href="#parameter-date"><code>date</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the boost offer, the hosting offer at that time, the requesting account and the request date.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-date"><code>date</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the dates of the boost changes of the hosting. Filter them by date.</td>
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
<tr id="parameter-date">
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-date">
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of date property (=)</td>
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

Returns the boost offer, the hosting offer at that time, the requesting account and the request date.

```sql
SELECT
account_id,
boost_offer,
date,
offer
FROM ovh.hosting_web.boost_histories
WHERE date = '{{ date }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the dates of the boost changes of the hosting. Filter them by date.

```sql
SELECT
account_id,
boost_offer,
date,
offer
FROM ovh.hosting_web.boost_histories
WHERE service_name = '{{ service_name }}' -- required
AND date = '{{ date }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
