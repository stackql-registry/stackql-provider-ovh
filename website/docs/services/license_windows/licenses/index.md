--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
  - license_windows
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

Creates, updates, deletes, gets or lists a <code>licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="licenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.license_windows.licenses" /></td></tr>
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
    <td><CopyableCode code="license_id" /></td>
    <td><code>string</code></td>
    <td>The license id on license provider side (wire: licenseId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>This license creation date</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Shall we delete this on expiration ? (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The internal name of your license</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The ip on which this license is attached (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This license state (ok, released, terminated, toDeliver)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version (WINDOWS_SERVER_2003_ENTERPRISE_EDITION, WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU, WINDOWS_SERVER_2003_STANDARD_EDITION, WINDOWS_SERVER_2003_WEB_EDITION, WINDOWS_SERVER_2003_WEB_EDITION_2_CPU, WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION, WINDOWS_SERVER_2003_WEB_STANDARD_EDITION, WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU, WINDOWS_SERVER_2008_DATACENTER_EDITION, WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU, WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU, WINDOWS_SERVER_2008_ENTERPRISE_EDITION, WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU, WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU, WINDOWS_SERVER_2008_STANDARD_EDITION, WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU, WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU, WINDOWS_SERVER_2008_WEB_EDITION, WINDOWS_SERVER_2008_WEB_EDITION_2_CPU, WINDOWS_SERVER_2008_WEB_EDITION_4_CPU, WINDOWS_SERVER_2008_WEB_STANDARD_EDITION, WINDOWS_SERVER_2012_DATACENTER_EDITION, WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU, WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU, WINDOWS_SERVER_2012_ENTERPRISE_EDITION, WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU, WINDOWS_SERVER_2012_STANDARD_EDITION, WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU, WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU, WINDOWS_SERVER_2012_WEB_EDITION, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_32_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_48_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_64_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_32_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_32_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_48_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_64_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_32_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_128_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_192_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_256_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_512_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_72_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_96_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_128_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_192_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_256_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_512_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_72_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_96_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_10_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_128_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_12_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_14_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_16_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_18_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_192_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_20_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_22_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_24_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_256_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_26_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_28_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_30_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_32_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_34_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_36_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_38_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_40_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_42_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_44_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_46_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_48_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_50_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_512_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_52_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_54_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_56_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_58_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_60_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_62_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_64_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_72_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_8_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_96_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_10_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_128_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_12_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_14_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_16_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_18_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_192_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_20_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_22_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_24_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_256_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_26_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_28_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_30_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_32_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_34_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_36_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_38_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_40_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_42_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_44_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_46_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_48_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_50_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_512_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_52_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_54_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_56_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_58_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_60_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_62_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_64_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_72_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_8_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_96_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_10_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_128_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_12_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_14_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_16_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_18_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_192_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_20_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_22_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_24_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_256_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_26_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_28_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_30_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_32_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_34_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_36_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_38_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_40_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_42_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_44_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_46_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_48_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_50_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_512_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_52_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_54_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_56_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_58_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_60_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_62_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_64_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_72_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_8_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_96_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_10_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_128_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_12_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_14_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_16_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_18_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_192_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_20_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_22_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_24_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_256_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_26_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_28_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_30_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_32_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_34_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_36_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_38_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_40_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_42_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_44_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_46_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_48_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_50_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_512_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_52_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_54_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_56_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_58_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_60_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_62_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_64_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_72_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_8_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_96_CORES, windows-server-2008-license-datacenter-edition-1-cpu, windows-server-2008-license-datacenter-edition-2-cpu, windows-server-2008-license-datacenter-edition-4-cpu, windows-server-2008-license-enterprise-edition-1-cpu, windows-server-2008-license-enterprise-edition-2-cpu, windows-server-2008-license-enterprise-edition-4-cpu, windows-server-2008-license-standard-edition-1-cpu, windows-server-2008-license-standard-edition-2-cpu, windows-server-2008-license-standard-edition-4-cpu, windows-server-2008-license-web-edition-1-cpu, windows-server-2008-license-web-edition-2-cpu, windows-server-2008-license-web-edition-4-cpu, windows-server-2012-license-datacenter-edition-1-cpu, windows-server-2012-license-datacenter-edition-2-cpu, windows-server-2012-license-datacenter-edition-4-cpu, windows-server-2012-license-standard-edition-1-cpu, windows-server-2012-license-standard-edition-2-cpu, windows-server-2012-license-standard-edition-4-cpu, windows-server-2016-license-datacenter-edition-1-cpu-10-cores, windows-server-2016-license-datacenter-edition-1-cpu-12-cores, windows-server-2016-license-datacenter-edition-1-cpu-14-cores, windows-server-2016-license-datacenter-edition-1-cpu-16-cores, windows-server-2016-license-datacenter-edition-1-cpu-18-cores, windows-server-2016-license-datacenter-edition-1-cpu-20-cores, windows-server-2016-license-datacenter-edition-1-cpu-22-cores, windows-server-2016-license-datacenter-edition-1-cpu-24-cores, windows-server-2016-license-datacenter-edition-1-cpu-32-cores, windows-server-2016-license-datacenter-edition-1-cpu-48-cores, windows-server-2016-license-datacenter-edition-1-cpu-64-cores, windows-server-2016-license-datacenter-edition-1-cpu-8-cores, windows-server-2016-license-datacenter-edition-2-cpu-10-cores, windows-server-2016-license-datacenter-edition-2-cpu-12-cores, windows-server-2016-license-datacenter-edition-2-cpu-14-cores, windows-server-2016-license-datacenter-edition-2-cpu-16-cores, windows-server-2016-license-datacenter-edition-2-cpu-18-cores, windows-server-2016-license-datacenter-edition-2-cpu-20-cores, windows-server-2016-license-datacenter-edition-2-cpu-22-cores, windows-server-2016-license-datacenter-edition-2-cpu-24-cores, windows-server-2016-license-datacenter-edition-2-cpu-32-cores, windows-server-2016-license-datacenter-edition-2-cpu-8-cores, windows-server-2016-license-datacenter-edition-4-cpu-10-cores, windows-server-2016-license-datacenter-edition-4-cpu-12-cores, windows-server-2016-license-datacenter-edition-4-cpu-14-cores, windows-server-2016-license-datacenter-edition-4-cpu-16-cores, windows-server-2016-license-datacenter-edition-4-cpu-18-cores, windows-server-2016-license-datacenter-edition-4-cpu-20-cores, windows-server-2016-license-datacenter-edition-4-cpu-22-cores, windows-server-2016-license-datacenter-edition-4-cpu-24-cores, windows-server-2016-license-datacenter-edition-4-cpu-8-cores, windows-server-2016-license-standard-edition-1-cpu-10-cores, windows-server-2016-license-standard-edition-1-cpu-12-cores, windows-server-2016-license-standard-edition-1-cpu-14-cores, windows-server-2016-license-standard-edition-1-cpu-16-cores, windows-server-2016-license-standard-edition-1-cpu-18-cores, windows-server-2016-license-standard-edition-1-cpu-20-cores, windows-server-2016-license-standard-edition-1-cpu-22-cores, windows-server-2016-license-standard-edition-1-cpu-24-cores, windows-server-2016-license-standard-edition-1-cpu-32-cores, windows-server-2016-license-standard-edition-1-cpu-48-cores, windows-server-2016-license-standard-edition-1-cpu-64-cores, windows-server-2016-license-standard-edition-1-cpu-8-cores, windows-server-2016-license-standard-edition-2-cpu-10-cores, windows-server-2016-license-standard-edition-2-cpu-12-cores, windows-server-2016-license-standard-edition-2-cpu-14-cores, windows-server-2016-license-standard-edition-2-cpu-16-cores, windows-server-2016-license-standard-edition-2-cpu-18-cores, windows-server-2016-license-standard-edition-2-cpu-20-cores, windows-server-2016-license-standard-edition-2-cpu-22-cores, windows-server-2016-license-standard-edition-2-cpu-24-cores, windows-server-2016-license-standard-edition-2-cpu-32-cores, windows-server-2016-license-standard-edition-2-cpu-8-cores, windows-server-2016-license-standard-edition-4-cpu-10-cores, windows-server-2016-license-standard-edition-4-cpu-12-cores, windows-server-2016-license-standard-edition-4-cpu-14-cores, windows-server-2016-license-standard-edition-4-cpu-16-cores, windows-server-2016-license-standard-edition-4-cpu-18-cores, windows-server-2016-license-standard-edition-4-cpu-20-cores, windows-server-2016-license-standard-edition-4-cpu-22-cores, windows-server-2016-license-standard-edition-4-cpu-24-cores, windows-server-2016-license-standard-edition-4-cpu-8-cores, windows-server-2019-license-datacenter-edition-10-cores, windows-server-2019-license-datacenter-edition-12-cores, windows-server-2019-license-datacenter-edition-128-cores, windows-server-2019-license-datacenter-edition-14-cores, windows-server-2019-license-datacenter-edition-16-cores, windows-server-2019-license-datacenter-edition-18-cores, windows-server-2019-license-datacenter-edition-192-cores, windows-server-2019-license-datacenter-edition-20-cores, windows-server-2019-license-datacenter-edition-22-cores, windows-server-2019-license-datacenter-edition-24-cores, windows-server-2019-license-datacenter-edition-256-cores, windows-server-2019-license-datacenter-edition-26-cores, windows-server-2019-license-datacenter-edition-28-cores, windows-server-2019-license-datacenter-edition-30-cores, windows-server-2019-license-datacenter-edition-32-cores, windows-server-2019-license-datacenter-edition-34-cores, windows-server-2019-license-datacenter-edition-36-cores, windows-server-2019-license-datacenter-edition-38-cores, windows-server-2019-license-datacenter-edition-40-cores, windows-server-2019-license-datacenter-edition-42-cores, windows-server-2019-license-datacenter-edition-44-cores, windows-server-2019-license-datacenter-edition-46-cores, windows-server-2019-license-datacenter-edition-48-cores, windows-server-2019-license-datacenter-edition-50-cores, windows-server-2019-license-datacenter-edition-512-cores, windows-server-2019-license-datacenter-edition-52-cores, windows-server-2019-license-datacenter-edition-54-cores, windows-server-2019-license-datacenter-edition-56-cores, windows-server-2019-license-datacenter-edition-58-cores, windows-server-2019-license-datacenter-edition-60-cores, windows-server-2019-license-datacenter-edition-62-cores, windows-server-2019-license-datacenter-edition-64-cores, windows-server-2019-license-datacenter-edition-72-cores, windows-server-2019-license-datacenter-edition-8-cores, windows-server-2019-license-datacenter-edition-96-cores, windows-server-2019-license-standard-edition-10-cores, windows-server-2019-license-standard-edition-12-cores, windows-server-2019-license-standard-edition-128-cores, windows-server-2019-license-standard-edition-14-cores, windows-server-2019-license-standard-edition-16-cores, windows-server-2019-license-standard-edition-18-cores, windows-server-2019-license-standard-edition-192-cores, windows-server-2019-license-standard-edition-20-cores, windows-server-2019-license-standard-edition-22-cores, windows-server-2019-license-standard-edition-24-cores, windows-server-2019-license-standard-edition-256-cores, windows-server-2019-license-standard-edition-26-cores, windows-server-2019-license-standard-edition-28-cores, windows-server-2019-license-standard-edition-30-cores, windows-server-2019-license-standard-edition-32-cores, windows-server-2019-license-standard-edition-34-cores, windows-server-2019-license-standard-edition-36-cores, windows-server-2019-license-standard-edition-38-cores, windows-server-2019-license-standard-edition-40-cores, windows-server-2019-license-standard-edition-42-cores, windows-server-2019-license-standard-edition-44-cores, windows-server-2019-license-standard-edition-46-cores, windows-server-2019-license-standard-edition-48-cores, windows-server-2019-license-standard-edition-50-cores, windows-server-2019-license-standard-edition-512-cores, windows-server-2019-license-standard-edition-52-cores, windows-server-2019-license-standard-edition-54-cores, windows-server-2019-license-standard-edition-56-cores, windows-server-2019-license-standard-edition-58-cores, windows-server-2019-license-standard-edition-60-cores, windows-server-2019-license-standard-edition-62-cores, windows-server-2019-license-standard-edition-64-cores, windows-server-2019-license-standard-edition-72-cores, windows-server-2019-license-standard-edition-8-cores, windows-server-2019-license-standard-edition-96-cores, windows-server-2022-license-datacenter-edition-10-cores, windows-server-2022-license-datacenter-edition-12-cores, windows-server-2022-license-datacenter-edition-128-cores, windows-server-2022-license-datacenter-edition-14-cores, windows-server-2022-license-datacenter-edition-16-cores, windows-server-2022-license-datacenter-edition-18-cores, windows-server-2022-license-datacenter-edition-192-cores, windows-server-2022-license-datacenter-edition-20-cores, windows-server-2022-license-datacenter-edition-22-cores, windows-server-2022-license-datacenter-edition-24-cores, windows-server-2022-license-datacenter-edition-256-cores, windows-server-2022-license-datacenter-edition-26-cores, windows-server-2022-license-datacenter-edition-28-cores, windows-server-2022-license-datacenter-edition-30-cores, windows-server-2022-license-datacenter-edition-32-cores, windows-server-2022-license-datacenter-edition-34-cores, windows-server-2022-license-datacenter-edition-36-cores, windows-server-2022-license-datacenter-edition-38-cores, windows-server-2022-license-datacenter-edition-40-cores, windows-server-2022-license-datacenter-edition-42-cores, windows-server-2022-license-datacenter-edition-44-cores, windows-server-2022-license-datacenter-edition-46-cores, windows-server-2022-license-datacenter-edition-48-cores, windows-server-2022-license-datacenter-edition-50-cores, windows-server-2022-license-datacenter-edition-512-cores, windows-server-2022-license-datacenter-edition-52-cores, windows-server-2022-license-datacenter-edition-54-cores, windows-server-2022-license-datacenter-edition-56-cores, windows-server-2022-license-datacenter-edition-58-cores, windows-server-2022-license-datacenter-edition-60-cores, windows-server-2022-license-datacenter-edition-62-cores, windows-server-2022-license-datacenter-edition-64-cores, windows-server-2022-license-datacenter-edition-72-cores, windows-server-2022-license-datacenter-edition-8-cores, windows-server-2022-license-datacenter-edition-96-cores, windows-server-2022-license-standard-edition-10-cores, windows-server-2022-license-standard-edition-12-cores, windows-server-2022-license-standard-edition-128-cores, windows-server-2022-license-standard-edition-14-cores, windows-server-2022-license-standard-edition-16-cores, windows-server-2022-license-standard-edition-18-cores, windows-server-2022-license-standard-edition-192-cores, windows-server-2022-license-standard-edition-20-cores, windows-server-2022-license-standard-edition-22-cores, windows-server-2022-license-standard-edition-24-cores, windows-server-2022-license-standard-edition-256-cores, windows-server-2022-license-standard-edition-26-cores, windows-server-2022-license-standard-edition-28-cores, windows-server-2022-license-standard-edition-30-cores, windows-server-2022-license-standard-edition-32-cores, windows-server-2022-license-standard-edition-34-cores, windows-server-2022-license-standard-edition-36-cores, windows-server-2022-license-standard-edition-38-cores, windows-server-2022-license-standard-edition-40-cores, windows-server-2022-license-standard-edition-42-cores, windows-server-2022-license-standard-edition-44-cores, windows-server-2022-license-standard-edition-46-cores, windows-server-2022-license-standard-edition-48-cores, windows-server-2022-license-standard-edition-50-cores, windows-server-2022-license-standard-edition-512-cores, windows-server-2022-license-standard-edition-52-cores, windows-server-2022-license-standard-edition-54-cores, windows-server-2022-license-standard-edition-56-cores, windows-server-2022-license-standard-edition-58-cores, windows-server-2022-license-standard-edition-60-cores, windows-server-2022-license-standard-edition-62-cores, windows-server-2022-license-standard-edition-64-cores, windows-server-2022-license-standard-edition-72-cores, windows-server-2022-license-standard-edition-8-cores, windows-server-2022-license-standard-edition-96-cores, windows-server-2025-license-datacenter-edition-10-cores, windows-server-2025-license-datacenter-edition-12-cores, windows-server-2025-license-datacenter-edition-128-cores, windows-server-2025-license-datacenter-edition-14-cores, windows-server-2025-license-datacenter-edition-16-cores, windows-server-2025-license-datacenter-edition-18-cores, windows-server-2025-license-datacenter-edition-192-cores, windows-server-2025-license-datacenter-edition-20-cores, windows-server-2025-license-datacenter-edition-22-cores, windows-server-2025-license-datacenter-edition-24-cores, windows-server-2025-license-datacenter-edition-256-cores, windows-server-2025-license-datacenter-edition-26-cores, windows-server-2025-license-datacenter-edition-28-cores, windows-server-2025-license-datacenter-edition-30-cores, windows-server-2025-license-datacenter-edition-32-cores, windows-server-2025-license-datacenter-edition-34-cores, windows-server-2025-license-datacenter-edition-36-cores, windows-server-2025-license-datacenter-edition-38-cores, windows-server-2025-license-datacenter-edition-40-cores, windows-server-2025-license-datacenter-edition-42-cores, windows-server-2025-license-datacenter-edition-44-cores, windows-server-2025-license-datacenter-edition-46-cores, windows-server-2025-license-datacenter-edition-48-cores, windows-server-2025-license-datacenter-edition-50-cores, windows-server-2025-license-datacenter-edition-512-cores, windows-server-2025-license-datacenter-edition-52-cores, windows-server-2025-license-datacenter-edition-54-cores, windows-server-2025-license-datacenter-edition-56-cores, windows-server-2025-license-datacenter-edition-58-cores, windows-server-2025-license-datacenter-edition-60-cores, windows-server-2025-license-datacenter-edition-62-cores, windows-server-2025-license-datacenter-edition-64-cores, windows-server-2025-license-datacenter-edition-72-cores, windows-server-2025-license-datacenter-edition-8-cores, windows-server-2025-license-datacenter-edition-96-cores, windows-server-2025-license-standard-edition-10-cores, windows-server-2025-license-standard-edition-12-cores, windows-server-2025-license-standard-edition-128-cores, windows-server-2025-license-standard-edition-14-cores, windows-server-2025-license-standard-edition-16-cores, windows-server-2025-license-standard-edition-18-cores, windows-server-2025-license-standard-edition-192-cores, windows-server-2025-license-standard-edition-20-cores, windows-server-2025-license-standard-edition-22-cores, windows-server-2025-license-standard-edition-24-cores, windows-server-2025-license-standard-edition-256-cores, windows-server-2025-license-standard-edition-26-cores, windows-server-2025-license-standard-edition-28-cores, windows-server-2025-license-standard-edition-30-cores, windows-server-2025-license-standard-edition-32-cores, windows-server-2025-license-standard-edition-34-cores, windows-server-2025-license-standard-edition-36-cores, windows-server-2025-license-standard-edition-38-cores, windows-server-2025-license-standard-edition-40-cores, windows-server-2025-license-standard-edition-42-cores, windows-server-2025-license-standard-edition-44-cores, windows-server-2025-license-standard-edition-46-cores, windows-server-2025-license-standard-edition-48-cores, windows-server-2025-license-standard-edition-50-cores, windows-server-2025-license-standard-edition-512-cores, windows-server-2025-license-standard-edition-52-cores, windows-server-2025-license-standard-edition-54-cores, windows-server-2025-license-standard-edition-56-cores, windows-server-2025-license-standard-edition-58-cores, windows-server-2025-license-standard-edition-60-cores, windows-server-2025-license-standard-edition-62-cores, windows-server-2025-license-standard-edition-64-cores, windows-server-2025-license-standard-edition-72-cores, windows-server-2025-license-standard-edition-8-cores, windows-server-2025-license-standard-edition-96-cores)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your Windows license

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
    <td><CopyableCode code="license_id" /></td>
    <td><code>string</code></td>
    <td>The license id on license provider side (wire: licenseId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>This license creation date</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Shall we delete this on expiration ? (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The internal name of your license</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The ip on which this license is attached (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This license state (ok, released, terminated, toDeliver)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version (WINDOWS_SERVER_2003_ENTERPRISE_EDITION, WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU, WINDOWS_SERVER_2003_STANDARD_EDITION, WINDOWS_SERVER_2003_WEB_EDITION, WINDOWS_SERVER_2003_WEB_EDITION_2_CPU, WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION, WINDOWS_SERVER_2003_WEB_STANDARD_EDITION, WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU, WINDOWS_SERVER_2008_DATACENTER_EDITION, WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU, WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU, WINDOWS_SERVER_2008_ENTERPRISE_EDITION, WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU, WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU, WINDOWS_SERVER_2008_STANDARD_EDITION, WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU, WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU, WINDOWS_SERVER_2008_WEB_EDITION, WINDOWS_SERVER_2008_WEB_EDITION_2_CPU, WINDOWS_SERVER_2008_WEB_EDITION_4_CPU, WINDOWS_SERVER_2008_WEB_STANDARD_EDITION, WINDOWS_SERVER_2012_DATACENTER_EDITION, WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU, WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU, WINDOWS_SERVER_2012_ENTERPRISE_EDITION, WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU, WINDOWS_SERVER_2012_STANDARD_EDITION, WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU, WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU, WINDOWS_SERVER_2012_WEB_EDITION, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_32_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_48_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_64_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_32_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES, WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_32_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_48_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_64_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_32_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES, WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_128_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_192_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_256_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_512_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_72_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES, WINDOWS_SERVER_2019_DATACENTER_EDITION_96_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_128_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_192_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_256_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_512_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_72_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES, WINDOWS_SERVER_2019_STANDARD_EDITION_96_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_10_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_128_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_12_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_14_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_16_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_18_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_192_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_20_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_22_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_24_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_256_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_26_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_28_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_30_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_32_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_34_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_36_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_38_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_40_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_42_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_44_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_46_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_48_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_50_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_512_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_52_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_54_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_56_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_58_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_60_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_62_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_64_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_72_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_8_CORES, WINDOWS_SERVER_2022_DATACENTER_EDITION_96_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_10_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_128_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_12_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_14_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_16_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_18_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_192_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_20_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_22_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_24_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_256_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_26_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_28_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_30_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_32_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_34_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_36_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_38_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_40_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_42_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_44_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_46_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_48_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_50_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_512_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_52_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_54_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_56_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_58_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_60_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_62_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_64_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_72_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_8_CORES, WINDOWS_SERVER_2022_STANDARD_EDITION_96_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_10_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_128_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_12_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_14_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_16_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_18_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_192_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_20_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_22_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_24_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_256_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_26_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_28_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_30_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_32_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_34_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_36_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_38_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_40_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_42_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_44_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_46_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_48_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_50_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_512_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_52_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_54_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_56_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_58_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_60_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_62_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_64_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_72_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_8_CORES, WINDOWS_SERVER_2025_DATACENTER_EDITION_96_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_10_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_128_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_12_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_14_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_16_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_18_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_192_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_20_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_22_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_24_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_256_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_26_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_28_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_30_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_32_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_34_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_36_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_38_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_40_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_42_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_44_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_46_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_48_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_50_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_512_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_52_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_54_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_56_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_58_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_60_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_62_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_64_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_72_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_8_CORES, WINDOWS_SERVER_2025_STANDARD_EDITION_96_CORES, windows-server-2008-license-datacenter-edition-1-cpu, windows-server-2008-license-datacenter-edition-2-cpu, windows-server-2008-license-datacenter-edition-4-cpu, windows-server-2008-license-enterprise-edition-1-cpu, windows-server-2008-license-enterprise-edition-2-cpu, windows-server-2008-license-enterprise-edition-4-cpu, windows-server-2008-license-standard-edition-1-cpu, windows-server-2008-license-standard-edition-2-cpu, windows-server-2008-license-standard-edition-4-cpu, windows-server-2008-license-web-edition-1-cpu, windows-server-2008-license-web-edition-2-cpu, windows-server-2008-license-web-edition-4-cpu, windows-server-2012-license-datacenter-edition-1-cpu, windows-server-2012-license-datacenter-edition-2-cpu, windows-server-2012-license-datacenter-edition-4-cpu, windows-server-2012-license-standard-edition-1-cpu, windows-server-2012-license-standard-edition-2-cpu, windows-server-2012-license-standard-edition-4-cpu, windows-server-2016-license-datacenter-edition-1-cpu-10-cores, windows-server-2016-license-datacenter-edition-1-cpu-12-cores, windows-server-2016-license-datacenter-edition-1-cpu-14-cores, windows-server-2016-license-datacenter-edition-1-cpu-16-cores, windows-server-2016-license-datacenter-edition-1-cpu-18-cores, windows-server-2016-license-datacenter-edition-1-cpu-20-cores, windows-server-2016-license-datacenter-edition-1-cpu-22-cores, windows-server-2016-license-datacenter-edition-1-cpu-24-cores, windows-server-2016-license-datacenter-edition-1-cpu-32-cores, windows-server-2016-license-datacenter-edition-1-cpu-48-cores, windows-server-2016-license-datacenter-edition-1-cpu-64-cores, windows-server-2016-license-datacenter-edition-1-cpu-8-cores, windows-server-2016-license-datacenter-edition-2-cpu-10-cores, windows-server-2016-license-datacenter-edition-2-cpu-12-cores, windows-server-2016-license-datacenter-edition-2-cpu-14-cores, windows-server-2016-license-datacenter-edition-2-cpu-16-cores, windows-server-2016-license-datacenter-edition-2-cpu-18-cores, windows-server-2016-license-datacenter-edition-2-cpu-20-cores, windows-server-2016-license-datacenter-edition-2-cpu-22-cores, windows-server-2016-license-datacenter-edition-2-cpu-24-cores, windows-server-2016-license-datacenter-edition-2-cpu-32-cores, windows-server-2016-license-datacenter-edition-2-cpu-8-cores, windows-server-2016-license-datacenter-edition-4-cpu-10-cores, windows-server-2016-license-datacenter-edition-4-cpu-12-cores, windows-server-2016-license-datacenter-edition-4-cpu-14-cores, windows-server-2016-license-datacenter-edition-4-cpu-16-cores, windows-server-2016-license-datacenter-edition-4-cpu-18-cores, windows-server-2016-license-datacenter-edition-4-cpu-20-cores, windows-server-2016-license-datacenter-edition-4-cpu-22-cores, windows-server-2016-license-datacenter-edition-4-cpu-24-cores, windows-server-2016-license-datacenter-edition-4-cpu-8-cores, windows-server-2016-license-standard-edition-1-cpu-10-cores, windows-server-2016-license-standard-edition-1-cpu-12-cores, windows-server-2016-license-standard-edition-1-cpu-14-cores, windows-server-2016-license-standard-edition-1-cpu-16-cores, windows-server-2016-license-standard-edition-1-cpu-18-cores, windows-server-2016-license-standard-edition-1-cpu-20-cores, windows-server-2016-license-standard-edition-1-cpu-22-cores, windows-server-2016-license-standard-edition-1-cpu-24-cores, windows-server-2016-license-standard-edition-1-cpu-32-cores, windows-server-2016-license-standard-edition-1-cpu-48-cores, windows-server-2016-license-standard-edition-1-cpu-64-cores, windows-server-2016-license-standard-edition-1-cpu-8-cores, windows-server-2016-license-standard-edition-2-cpu-10-cores, windows-server-2016-license-standard-edition-2-cpu-12-cores, windows-server-2016-license-standard-edition-2-cpu-14-cores, windows-server-2016-license-standard-edition-2-cpu-16-cores, windows-server-2016-license-standard-edition-2-cpu-18-cores, windows-server-2016-license-standard-edition-2-cpu-20-cores, windows-server-2016-license-standard-edition-2-cpu-22-cores, windows-server-2016-license-standard-edition-2-cpu-24-cores, windows-server-2016-license-standard-edition-2-cpu-32-cores, windows-server-2016-license-standard-edition-2-cpu-8-cores, windows-server-2016-license-standard-edition-4-cpu-10-cores, windows-server-2016-license-standard-edition-4-cpu-12-cores, windows-server-2016-license-standard-edition-4-cpu-14-cores, windows-server-2016-license-standard-edition-4-cpu-16-cores, windows-server-2016-license-standard-edition-4-cpu-18-cores, windows-server-2016-license-standard-edition-4-cpu-20-cores, windows-server-2016-license-standard-edition-4-cpu-22-cores, windows-server-2016-license-standard-edition-4-cpu-24-cores, windows-server-2016-license-standard-edition-4-cpu-8-cores, windows-server-2019-license-datacenter-edition-10-cores, windows-server-2019-license-datacenter-edition-12-cores, windows-server-2019-license-datacenter-edition-128-cores, windows-server-2019-license-datacenter-edition-14-cores, windows-server-2019-license-datacenter-edition-16-cores, windows-server-2019-license-datacenter-edition-18-cores, windows-server-2019-license-datacenter-edition-192-cores, windows-server-2019-license-datacenter-edition-20-cores, windows-server-2019-license-datacenter-edition-22-cores, windows-server-2019-license-datacenter-edition-24-cores, windows-server-2019-license-datacenter-edition-256-cores, windows-server-2019-license-datacenter-edition-26-cores, windows-server-2019-license-datacenter-edition-28-cores, windows-server-2019-license-datacenter-edition-30-cores, windows-server-2019-license-datacenter-edition-32-cores, windows-server-2019-license-datacenter-edition-34-cores, windows-server-2019-license-datacenter-edition-36-cores, windows-server-2019-license-datacenter-edition-38-cores, windows-server-2019-license-datacenter-edition-40-cores, windows-server-2019-license-datacenter-edition-42-cores, windows-server-2019-license-datacenter-edition-44-cores, windows-server-2019-license-datacenter-edition-46-cores, windows-server-2019-license-datacenter-edition-48-cores, windows-server-2019-license-datacenter-edition-50-cores, windows-server-2019-license-datacenter-edition-512-cores, windows-server-2019-license-datacenter-edition-52-cores, windows-server-2019-license-datacenter-edition-54-cores, windows-server-2019-license-datacenter-edition-56-cores, windows-server-2019-license-datacenter-edition-58-cores, windows-server-2019-license-datacenter-edition-60-cores, windows-server-2019-license-datacenter-edition-62-cores, windows-server-2019-license-datacenter-edition-64-cores, windows-server-2019-license-datacenter-edition-72-cores, windows-server-2019-license-datacenter-edition-8-cores, windows-server-2019-license-datacenter-edition-96-cores, windows-server-2019-license-standard-edition-10-cores, windows-server-2019-license-standard-edition-12-cores, windows-server-2019-license-standard-edition-128-cores, windows-server-2019-license-standard-edition-14-cores, windows-server-2019-license-standard-edition-16-cores, windows-server-2019-license-standard-edition-18-cores, windows-server-2019-license-standard-edition-192-cores, windows-server-2019-license-standard-edition-20-cores, windows-server-2019-license-standard-edition-22-cores, windows-server-2019-license-standard-edition-24-cores, windows-server-2019-license-standard-edition-256-cores, windows-server-2019-license-standard-edition-26-cores, windows-server-2019-license-standard-edition-28-cores, windows-server-2019-license-standard-edition-30-cores, windows-server-2019-license-standard-edition-32-cores, windows-server-2019-license-standard-edition-34-cores, windows-server-2019-license-standard-edition-36-cores, windows-server-2019-license-standard-edition-38-cores, windows-server-2019-license-standard-edition-40-cores, windows-server-2019-license-standard-edition-42-cores, windows-server-2019-license-standard-edition-44-cores, windows-server-2019-license-standard-edition-46-cores, windows-server-2019-license-standard-edition-48-cores, windows-server-2019-license-standard-edition-50-cores, windows-server-2019-license-standard-edition-512-cores, windows-server-2019-license-standard-edition-52-cores, windows-server-2019-license-standard-edition-54-cores, windows-server-2019-license-standard-edition-56-cores, windows-server-2019-license-standard-edition-58-cores, windows-server-2019-license-standard-edition-60-cores, windows-server-2019-license-standard-edition-62-cores, windows-server-2019-license-standard-edition-64-cores, windows-server-2019-license-standard-edition-72-cores, windows-server-2019-license-standard-edition-8-cores, windows-server-2019-license-standard-edition-96-cores, windows-server-2022-license-datacenter-edition-10-cores, windows-server-2022-license-datacenter-edition-12-cores, windows-server-2022-license-datacenter-edition-128-cores, windows-server-2022-license-datacenter-edition-14-cores, windows-server-2022-license-datacenter-edition-16-cores, windows-server-2022-license-datacenter-edition-18-cores, windows-server-2022-license-datacenter-edition-192-cores, windows-server-2022-license-datacenter-edition-20-cores, windows-server-2022-license-datacenter-edition-22-cores, windows-server-2022-license-datacenter-edition-24-cores, windows-server-2022-license-datacenter-edition-256-cores, windows-server-2022-license-datacenter-edition-26-cores, windows-server-2022-license-datacenter-edition-28-cores, windows-server-2022-license-datacenter-edition-30-cores, windows-server-2022-license-datacenter-edition-32-cores, windows-server-2022-license-datacenter-edition-34-cores, windows-server-2022-license-datacenter-edition-36-cores, windows-server-2022-license-datacenter-edition-38-cores, windows-server-2022-license-datacenter-edition-40-cores, windows-server-2022-license-datacenter-edition-42-cores, windows-server-2022-license-datacenter-edition-44-cores, windows-server-2022-license-datacenter-edition-46-cores, windows-server-2022-license-datacenter-edition-48-cores, windows-server-2022-license-datacenter-edition-50-cores, windows-server-2022-license-datacenter-edition-512-cores, windows-server-2022-license-datacenter-edition-52-cores, windows-server-2022-license-datacenter-edition-54-cores, windows-server-2022-license-datacenter-edition-56-cores, windows-server-2022-license-datacenter-edition-58-cores, windows-server-2022-license-datacenter-edition-60-cores, windows-server-2022-license-datacenter-edition-62-cores, windows-server-2022-license-datacenter-edition-64-cores, windows-server-2022-license-datacenter-edition-72-cores, windows-server-2022-license-datacenter-edition-8-cores, windows-server-2022-license-datacenter-edition-96-cores, windows-server-2022-license-standard-edition-10-cores, windows-server-2022-license-standard-edition-12-cores, windows-server-2022-license-standard-edition-128-cores, windows-server-2022-license-standard-edition-14-cores, windows-server-2022-license-standard-edition-16-cores, windows-server-2022-license-standard-edition-18-cores, windows-server-2022-license-standard-edition-192-cores, windows-server-2022-license-standard-edition-20-cores, windows-server-2022-license-standard-edition-22-cores, windows-server-2022-license-standard-edition-24-cores, windows-server-2022-license-standard-edition-256-cores, windows-server-2022-license-standard-edition-26-cores, windows-server-2022-license-standard-edition-28-cores, windows-server-2022-license-standard-edition-30-cores, windows-server-2022-license-standard-edition-32-cores, windows-server-2022-license-standard-edition-34-cores, windows-server-2022-license-standard-edition-36-cores, windows-server-2022-license-standard-edition-38-cores, windows-server-2022-license-standard-edition-40-cores, windows-server-2022-license-standard-edition-42-cores, windows-server-2022-license-standard-edition-44-cores, windows-server-2022-license-standard-edition-46-cores, windows-server-2022-license-standard-edition-48-cores, windows-server-2022-license-standard-edition-50-cores, windows-server-2022-license-standard-edition-512-cores, windows-server-2022-license-standard-edition-52-cores, windows-server-2022-license-standard-edition-54-cores, windows-server-2022-license-standard-edition-56-cores, windows-server-2022-license-standard-edition-58-cores, windows-server-2022-license-standard-edition-60-cores, windows-server-2022-license-standard-edition-62-cores, windows-server-2022-license-standard-edition-64-cores, windows-server-2022-license-standard-edition-72-cores, windows-server-2022-license-standard-edition-8-cores, windows-server-2022-license-standard-edition-96-cores, windows-server-2025-license-datacenter-edition-10-cores, windows-server-2025-license-datacenter-edition-12-cores, windows-server-2025-license-datacenter-edition-128-cores, windows-server-2025-license-datacenter-edition-14-cores, windows-server-2025-license-datacenter-edition-16-cores, windows-server-2025-license-datacenter-edition-18-cores, windows-server-2025-license-datacenter-edition-192-cores, windows-server-2025-license-datacenter-edition-20-cores, windows-server-2025-license-datacenter-edition-22-cores, windows-server-2025-license-datacenter-edition-24-cores, windows-server-2025-license-datacenter-edition-256-cores, windows-server-2025-license-datacenter-edition-26-cores, windows-server-2025-license-datacenter-edition-28-cores, windows-server-2025-license-datacenter-edition-30-cores, windows-server-2025-license-datacenter-edition-32-cores, windows-server-2025-license-datacenter-edition-34-cores, windows-server-2025-license-datacenter-edition-36-cores, windows-server-2025-license-datacenter-edition-38-cores, windows-server-2025-license-datacenter-edition-40-cores, windows-server-2025-license-datacenter-edition-42-cores, windows-server-2025-license-datacenter-edition-44-cores, windows-server-2025-license-datacenter-edition-46-cores, windows-server-2025-license-datacenter-edition-48-cores, windows-server-2025-license-datacenter-edition-50-cores, windows-server-2025-license-datacenter-edition-512-cores, windows-server-2025-license-datacenter-edition-52-cores, windows-server-2025-license-datacenter-edition-54-cores, windows-server-2025-license-datacenter-edition-56-cores, windows-server-2025-license-datacenter-edition-58-cores, windows-server-2025-license-datacenter-edition-60-cores, windows-server-2025-license-datacenter-edition-62-cores, windows-server-2025-license-datacenter-edition-64-cores, windows-server-2025-license-datacenter-edition-72-cores, windows-server-2025-license-datacenter-edition-8-cores, windows-server-2025-license-datacenter-edition-96-cores, windows-server-2025-license-standard-edition-10-cores, windows-server-2025-license-standard-edition-12-cores, windows-server-2025-license-standard-edition-128-cores, windows-server-2025-license-standard-edition-14-cores, windows-server-2025-license-standard-edition-16-cores, windows-server-2025-license-standard-edition-18-cores, windows-server-2025-license-standard-edition-192-cores, windows-server-2025-license-standard-edition-20-cores, windows-server-2025-license-standard-edition-22-cores, windows-server-2025-license-standard-edition-24-cores, windows-server-2025-license-standard-edition-256-cores, windows-server-2025-license-standard-edition-26-cores, windows-server-2025-license-standard-edition-28-cores, windows-server-2025-license-standard-edition-30-cores, windows-server-2025-license-standard-edition-32-cores, windows-server-2025-license-standard-edition-34-cores, windows-server-2025-license-standard-edition-36-cores, windows-server-2025-license-standard-edition-38-cores, windows-server-2025-license-standard-edition-40-cores, windows-server-2025-license-standard-edition-42-cores, windows-server-2025-license-standard-edition-44-cores, windows-server-2025-license-standard-edition-46-cores, windows-server-2025-license-standard-edition-48-cores, windows-server-2025-license-standard-edition-50-cores, windows-server-2025-license-standard-edition-512-cores, windows-server-2025-license-standard-edition-52-cores, windows-server-2025-license-standard-edition-54-cores, windows-server-2025-license-standard-edition-56-cores, windows-server-2025-license-standard-edition-58-cores, windows-server-2025-license-standard-edition-60-cores, windows-server-2025-license-standard-edition-62-cores, windows-server-2025-license-standard-edition-64-cores, windows-server-2025-license-standard-edition-72-cores, windows-server-2025-license-standard-edition-8-cores, windows-server-2025-license-standard-edition-96-cores)</td>
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
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List available services</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Alter this object properties</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.</td>
</tr>
<tr>
    <td><a href="#sql_server"><CopyableCode code="sql_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-licenseId"><code>licenseId</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Link your own sql server license to this Windows license</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.</td>
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
    <td>The name of your Windows license</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of your Windows license (wire: serviceName)</td>
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

Get this object properties

```sql
SELECT
license_id,
creation,
delete_at_expiration,
domain,
iam,
ip,
status,
version
FROM ovh.license_windows.licenses
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available services

```sql
SELECT
license_id,
creation,
delete_at_expiration,
domain,
iam,
ip,
status,
version
FROM ovh.license_windows.licenses
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

Alter this object properties

```sql
UPDATE ovh.license_windows.licenses
SET 
delete_at_expiration = {{ delete_at_expiration }}
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="confirm_termination"
    values={[
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'sql_server', value: 'sql_server' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="confirm_termination">

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.

```sql
EXEC ovh.license_windows.licenses.confirm_termination 
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
<TabItem value="sql_server">

Link your own sql server license to this Windows license

```sql
EXEC ovh.license_windows.licenses.sql_server 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"licenseId": "{{ licenseId }}", 
"version": "{{ version }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.

```sql
EXEC ovh.license_windows.licenses.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
