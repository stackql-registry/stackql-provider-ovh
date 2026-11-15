--- 
title: hostings
hide_title: false
hide_table_of_contents: false
keywords:
  - hostings
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

Creates, updates, deletes, gets or lists a <code>hostings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hostings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.hostings" /></td></tr>
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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Set the name displayed in ManagerV6 for your hosting (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="available_boost_offer" /></td>
    <td><code>array</code></td>
    <td>Available offers for boost option (wire: availableBoostOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="boost_offer" /></td>
    <td><code>string</code></td>
    <td>Current boost offer (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan) (wire: boostOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Cluster name</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>This direct ip to your cluster ( usefull for application like api ) (example: 192.0.2.0) (wire: clusterIp)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>This direct ipv6 to your cluster ( usefull for application like api ) (example: 2001:41d0:1:1994::1) (wire: clusterIpv6)</td>
</tr>
<tr>
    <td><CopyableCode code="countries_ip" /></td>
    <td><code>array</code></td>
    <td>Available clusterIp by countries (wire: countriesIp)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Datacenter where this account is located</td>
</tr>
<tr>
    <td><CopyableCode code="default_attached_domain" /></td>
    <td><code>string</code></td>
    <td>The default attached domain created along with your hosting (wire: defaultAttachedDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="filer" /></td>
    <td><code>string</code></td>
    <td>Filer name</td>
</tr>
<tr>
    <td><CopyableCode code="has_cdn" /></td>
    <td><code>boolean</code></td>
    <td>Has a CDN service linked on the hosting (wire: hasCdn)</td>
</tr>
<tr>
    <td><CopyableCode code="has_hosted_ssl" /></td>
    <td><code>boolean</code></td>
    <td>Has a HostedSSL service linked on the hosting (wire: hasHostedSsl)</td>
</tr>
<tr>
    <td><CopyableCode code="home" /></td>
    <td><code>string</code></td>
    <td>Path of your home</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The recommended ip for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL ) (example: 192.0.2.0) (wire: hostingIp)</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>The recommended ipv6 for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL ) (example: 2001:41d0:1:1994::1) (wire: hostingIpv6)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_ovh_config_scan" /></td>
    <td><code>string (date-time)</code></td>
    <td>/hosting/web/&#123;serviceName&#125;/ovhConfig is stored in cache. This date is the last refresh of this data (wire: lastOvhConfigScan)</td>
</tr>
<tr>
    <td><CopyableCode code="multiple_ssl" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, service can manage more than only one certificate (wire: multipleSSL)</td>
</tr>
<tr>
    <td><CopyableCode code="object_quota" /></td>
    <td><code>number</code></td>
    <td>objects allowed (wire: objectQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="object_used" /></td>
    <td><code>number</code></td>
    <td>objects used (wire: objectUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Hosting offer (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>Hosting's OS (linux) (wire: operatingSystem)</td>
</tr>
<tr>
    <td><CopyableCode code="php_versions" /></td>
    <td><code>array</code></td>
    <td>State of available php versions for this account (wire: phpVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_login" /></td>
    <td><code>string</code></td>
    <td>Hosting's main login (wire: primaryLogin)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_size" /></td>
    <td><code>object</code></td>
    <td>Space allowed (wire: quotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Space used (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_offer" /></td>
    <td><code>string</code></td>
    <td>If your offer is old, return a recommended offer to migrate on (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan) (wire: recommendedOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Hosting resource type (bestEffort, cloud, dedicated, shared) (wire: resourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="service_management_access" /></td>
    <td><code>object</code></td>
    <td>URLs to use to manage your webhosting (wire: serviceManagementAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of your hosting (active, blocked, bloqued, hardBlocked, hardBloqued, maintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_quota_size" /></td>
    <td><code>object</code></td>
    <td>Traffic quota allowed ( null = unlimited ) (wire: trafficQuotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_quota_used" /></td>
    <td><code>object</code></td>
    <td>Traffic quota used (wire: trafficQuotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="updates" /></td>
    <td><code>array</code></td>
    <td>List of updates on your hosting</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Web Hosting

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
    <td>Set the name displayed in ManagerV6 for your hosting (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="available_boost_offer" /></td>
    <td><code>array</code></td>
    <td>Available offers for boost option (wire: availableBoostOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="boost_offer" /></td>
    <td><code>string</code></td>
    <td>Current boost offer (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan) (wire: boostOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>Cluster name</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>This direct ip to your cluster ( usefull for application like api ) (example: 192.0.2.0) (wire: clusterIp)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>This direct ipv6 to your cluster ( usefull for application like api ) (example: 2001:41d0:1:1994::1) (wire: clusterIpv6)</td>
</tr>
<tr>
    <td><CopyableCode code="countries_ip" /></td>
    <td><code>array</code></td>
    <td>Available clusterIp by countries (wire: countriesIp)</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Datacenter where this account is located</td>
</tr>
<tr>
    <td><CopyableCode code="default_attached_domain" /></td>
    <td><code>string</code></td>
    <td>The default attached domain created along with your hosting (wire: defaultAttachedDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="filer" /></td>
    <td><code>string</code></td>
    <td>Filer name</td>
</tr>
<tr>
    <td><CopyableCode code="has_cdn" /></td>
    <td><code>boolean</code></td>
    <td>Has a CDN service linked on the hosting (wire: hasCdn)</td>
</tr>
<tr>
    <td><CopyableCode code="has_hosted_ssl" /></td>
    <td><code>boolean</code></td>
    <td>Has a HostedSSL service linked on the hosting (wire: hasHostedSsl)</td>
</tr>
<tr>
    <td><CopyableCode code="home" /></td>
    <td><code>string</code></td>
    <td>Path of your home</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The recommended ip for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL ) (example: 192.0.2.0) (wire: hostingIp)</td>
</tr>
<tr>
    <td><CopyableCode code="hosting_ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>The recommended ipv6 for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL ) (example: 2001:41d0:1:1994::1) (wire: hostingIpv6)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_ovh_config_scan" /></td>
    <td><code>string (date-time)</code></td>
    <td>/hosting/web/&#123;serviceName&#125;/ovhConfig is stored in cache. This date is the last refresh of this data (wire: lastOvhConfigScan)</td>
</tr>
<tr>
    <td><CopyableCode code="multiple_ssl" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, service can manage more than only one certificate (wire: multipleSSL)</td>
</tr>
<tr>
    <td><CopyableCode code="object_quota" /></td>
    <td><code>number</code></td>
    <td>objects allowed (wire: objectQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="object_used" /></td>
    <td><code>number</code></td>
    <td>objects used (wire: objectUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Hosting offer (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>Hosting's OS (linux) (wire: operatingSystem)</td>
</tr>
<tr>
    <td><CopyableCode code="php_versions" /></td>
    <td><code>array</code></td>
    <td>State of available php versions for this account (wire: phpVersions)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_login" /></td>
    <td><code>string</code></td>
    <td>Hosting's main login (wire: primaryLogin)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_size" /></td>
    <td><code>object</code></td>
    <td>Space allowed (wire: quotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Space used (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_offer" /></td>
    <td><code>string</code></td>
    <td>If your offer is old, return a recommended offer to migrate on (1000gp, 20gp, 240gp, 240pack, 240plan, 300gp, 60gp, 720pack, 720plan, 90pack, 90plan, CLOUDWEB_1, CLOUDWEB_2, CLOUDWEB_3, KS, PERFORMANCE_1, PERFORMANCE_2, PERFORMANCE_3, PERFORMANCE_4, PERSO, POWER_BETA_1, PRO, START, business, cloudweb1, cloudweb2, cloudweb3, cloudwebbetax1, depro2012, deprol2012, deproxl2012, deproxxl2012, destart2012, destartl2012, destartxl2012, domainpack, hosting-agency, hosting-agency-max, hosting-agency-plus, hosting-free-100m, hosting-performance-1, hosting-performance-2, hosting-performance-3, hosting-performance-4, hosting-perso, hosting-pro, hosting-starter, hosting-starter-ovh, hosting-startup, hostingAtScaleX128, hostingAtScaleX16, hostingAtScaleX20, hostingAtScaleX24, hostingAtScaleX32, hostingAtScaleX64, hostingAtScaleX8, itbusiness2012, itperso2012, itpremium2012, kimsufi2015, mailpack, mailplan, mediapack, mediaplan, ovhpro1To, ovhpro2To, ovhpro5To, paas2014beta, perf2014x1, perf2014x2, perf2014x3, perf2014x4, perso2010, perso2014, powerBeta1, powerbeta1, premium, pro2010, pro2014, start10g, start10m, start1g, start1ges, start1m, start5g, starter, xxlpack, xxlplan) (wire: recommendedOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Hosting resource type (bestEffort, cloud, dedicated, shared) (wire: resourceType)</td>
</tr>
<tr>
    <td><CopyableCode code="service_management_access" /></td>
    <td><code>object</code></td>
    <td>URLs to use to manage your webhosting (wire: serviceManagementAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of your hosting (active, blocked, bloqued, hardBlocked, hardBloqued, maintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_quota_size" /></td>
    <td><code>object</code></td>
    <td>Traffic quota allowed ( null = unlimited ) (wire: trafficQuotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_quota_used" /></td>
    <td><code>object</code></td>
    <td>Traffic quota used (wire: trafficQuotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="updates" /></td>
    <td><code>array</code></td>
    <td>List of updates on your hosting</td>
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
    <td>Returns the offer, state, cluster, recommended IPs, disk and traffic quotas, and PHP versions of the web hosting.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the service names of the web hostings of the account.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the display name of the web hosting.</td>
</tr>
<tr>
    <td><a href="#local_seo_visibility_check"><CopyableCode code="local_seo_visibility_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-country"><code>country</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-street"><code>street</code></a>, <a href="#parameter-zip"><code>zip</code></a></td>
    <td></td>
    <td>Check location visibility. Starts a visibility check for a location from its name, street, zip code and country. Returns whether the location is already managed.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the contact change procedure of the service. Returns the identifiers of the created tasks.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirms the termination of the service with the token sent by email.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires. (Beta version)</td>
</tr>
<tr>
    <td><a href="#ovh_config_refresh"><CopyableCode code="ovh_config_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Refresh .ovhconfig files. Synchronizes the list of configurations with the .ovhconfig files on the hosting, and returns the task.</td>
</tr>
<tr>
    <td><a href="#request"><CopyableCode code="request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Run an action. Checks the quota, flushes the cache or runs an antihack scan on the hosting, and returns the task.</td>
</tr>
<tr>
    <td><a href="#request_boost"><CopyableCode code="request_boost" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Applies the requested boost offer to the hosting and returns the task. Send a null offer to disable the boost.</td>
</tr>
<tr>
    <td><a href="#restore_snapshot"><CopyableCode code="restore_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-backup"><code>backup</code></a></td>
    <td></td>
    <td>Restore a backup. Restores the files of the hosting from a daily or weekly backup and returns the task. All current files are replaced by the backup. Databases are not restored.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Requests the termination of the service. Confirm it with confirmTermination and the token sent by email.</td>
</tr>
<tr>
    <td><a href="#unblock_tcp_out"><CopyableCode code="unblock_tcp_out" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Requests the unblocking of the outgoing TCP connections of the hosting, blocked after an abuse. Their current state is outState in the abuse state.</td>
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

Returns the offer, state, cluster, recommended IPs, disk and traffic quotas, and PHP versions of the web hosting.

```sql
SELECT
display_name,
service_name,
available_boost_offer,
boost_offer,
cluster,
cluster_ip,
cluster_ipv_6,
countries_ip,
datacenter,
default_attached_domain,
filer,
has_cdn,
has_hosted_ssl,
home,
hosting_ip,
hosting_ipv_6,
iam,
last_ovh_config_scan,
multiple_ssl,
object_quota,
object_used,
offer,
operating_system,
php_versions,
primary_login,
quota_size,
quota_used,
recommended_offer,
resource_type,
service_management_access,
state,
token,
traffic_quota_size,
traffic_quota_used,
updates
FROM ovh.hosting_web.hostings
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the service names of the web hostings of the account.

```sql
SELECT
display_name,
service_name,
available_boost_offer,
boost_offer,
cluster,
cluster_ip,
cluster_ipv_6,
countries_ip,
datacenter,
default_attached_domain,
filer,
has_cdn,
has_hosted_ssl,
home,
hosting_ip,
hosting_ipv_6,
iam,
last_ovh_config_scan,
multiple_ssl,
object_quota,
object_used,
offer,
operating_system,
php_versions,
primary_login,
quota_size,
quota_used,
recommended_offer,
resource_type,
service_management_access,
state,
token,
traffic_quota_size,
traffic_quota_used,
updates
FROM ovh.hosting_web.hostings
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

Updates the display name of the web hosting.

```sql
UPDATE ovh.hosting_web.hostings
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
    defaultValue="local_seo_visibility_check"
    values={[
        { label: 'local_seo_visibility_check', value: 'local_seo_visibility_check' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'log_url', value: 'log_url' },
        { label: 'ovh_config_refresh', value: 'ovh_config_refresh' },
        { label: 'request', value: 'request' },
        { label: 'request_boost', value: 'request_boost' },
        { label: 'restore_snapshot', value: 'restore_snapshot' },
        { label: 'terminate', value: 'terminate' },
        { label: 'unblock_tcp_out', value: 'unblock_tcp_out' }
    ]}
>
<TabItem value="local_seo_visibility_check">

Check location visibility. Starts a visibility check for a location from its name, street, zip code and country. Returns whether the location is already managed.

```sql
EXEC ovh.hosting_web.hostings.local_seo_visibility_check 
@@json=
'{
"country": "{{ country }}", 
"name": "{{ name }}", 
"street": "{{ street }}", 
"zip": "{{ zip }}"
}'
;
```
</TabItem>
<TabItem value="change_contact">

Starts the contact change procedure of the service. Returns the identifiers of the created tasks.

```sql
EXEC ovh.hosting_web.hostings.change_contact 
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
<TabItem value="confirm_termination">

Confirms the termination of the service with the token sent by email.

```sql
EXEC ovh.hosting_web.hostings.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"commentaryFutureUse": "{{ commentaryFutureUse }}", 
"commentaryReason": "{{ commentaryReason }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires. (Beta version)

```sql
EXEC ovh.hosting_web.hostings.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="ovh_config_refresh">

Refresh .ovhconfig files. Synchronizes the list of configurations with the .ovhconfig files on the hosting, and returns the task.

```sql
EXEC ovh.hosting_web.hostings.ovh_config_refresh 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="request">

Run an action. Checks the quota, flushes the cache or runs an antihack scan on the hosting, and returns the task.

```sql
EXEC ovh.hosting_web.hostings.request 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"action": "{{ action }}"
}'
;
```
</TabItem>
<TabItem value="request_boost">

Applies the requested boost offer to the hosting and returns the task. Send a null offer to disable the boost.

```sql
EXEC ovh.hosting_web.hostings.request_boost 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"offer": "{{ offer }}"
}'
;
```
</TabItem>
<TabItem value="restore_snapshot">

Restore a backup. Restores the files of the hosting from a daily or weekly backup and returns the task. All current files are replaced by the backup. Databases are not restored.

```sql
EXEC ovh.hosting_web.hostings.restore_snapshot 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"backup": "{{ backup }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Requests the termination of the service. Confirm it with confirmTermination and the token sent by email.

```sql
EXEC ovh.hosting_web.hostings.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="unblock_tcp_out">

Requests the unblocking of the outgoing TCP connections of the hosting, blocked after an abuse. Their current state is outState in the abuse state.

```sql
EXEC ovh.hosting_web.hostings.unblock_tcp_out 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
