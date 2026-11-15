--- 
title: firewall_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rules
  - ip
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

Creates, updates, deletes, gets or lists a <code>firewall_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.firewall_rules" /></td></tr>
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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action on this rule (deny, permit)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Destination ip for your rule</td>
</tr>
<tr>
    <td><CopyableCode code="destination_port" /></td>
    <td><code>string</code></td>
    <td>Destination port range for your rule. Only with TCP/UDP protocol (wire: destinationPort)</td>
</tr>
<tr>
    <td><CopyableCode code="fragments" /></td>
    <td><code>boolean</code></td>
    <td>Fragments option</td>
</tr>
<tr>
    <td><CopyableCode code="l_3_packet_length" /></td>
    <td><code>string</code></td>
    <td>IP packet's total length (wire: l3PacketLength)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Network protocol (ah, esp, gre, icmp, ipv4, tcp, udp)</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sequence" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source ip for your rule</td>
</tr>
<tr>
    <td><CopyableCode code="source_port" /></td>
    <td><code>string</code></td>
    <td>Source port range for your rule. Only with TCP/UDP protocol (wire: sourcePort)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your rule (creationPending, ok, removalPending)</td>
</tr>
<tr>
    <td><CopyableCode code="tcp_option" /></td>
    <td><code>string</code></td>
    <td>TCP option on your rule (wire: tcpOption)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Rule on ip

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action on this rule (deny, permit)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Destination ip for your rule</td>
</tr>
<tr>
    <td><CopyableCode code="destination_port" /></td>
    <td><code>string</code></td>
    <td>Destination port range for your rule. Only with TCP/UDP protocol (wire: destinationPort)</td>
</tr>
<tr>
    <td><CopyableCode code="fragments" /></td>
    <td><code>boolean</code></td>
    <td>Fragments option</td>
</tr>
<tr>
    <td><CopyableCode code="l_3_packet_length" /></td>
    <td><code>string</code></td>
    <td>IP packet's total length (wire: l3PacketLength)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Network protocol (ah, esp, gre, icmp, ipv4, tcp, udp)</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sequence" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source ip for your rule</td>
</tr>
<tr>
    <td><CopyableCode code="source_port" /></td>
    <td><code>string</code></td>
    <td>Source port range for your rule. Only with TCP/UDP protocol (wire: sourcePort)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your rule (creationPending, ok, removalPending)</td>
</tr>
<tr>
    <td><CopyableCode code="tcp_option" /></td>
    <td><code>string</code></td>
    <td>TCP option on your rule (wire: tcpOption)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a>, <a href="#parameter-sequence"><code>sequence</code></a></td>
    <td></td>
    <td>Get a rule. Returns the rule's action, protocol, source, destination, ports, TCP options, fragments option, packet length and state.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List rules. Returns the sequence numbers of the address's firewall rules, filterable by state: creationPending, ok or removalPending.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-sequence"><code>sequence</code></a></td>
    <td></td>
    <td>Create a rule. Adds a permit or deny rule at sequence 0 to 19, matching protocol, source, ports or TCP options.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a>, <a href="#parameter-sequence"><code>sequence</code></a></td>
    <td></td>
    <td>Delete a rule. Removes the rule at this sequence from the address's firewall, and returns the deleted rule.</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
</tr>
<tr id="parameter-ip_on_firewall">
    <td><CopyableCode code="ip_on_firewall" /></td>
    <td><code>string (ipv4)</code></td>
    <td> (wire: ipOnFirewall)</td>
</tr>
<tr id="parameter-sequence">
    <td><CopyableCode code="sequence" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of state property (=)</td>
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

Get a rule. Returns the rule's action, protocol, source, destination, ports, TCP options, fragments option, packet length and state.

```sql
SELECT
action,
creation_date,
destination,
destination_port,
fragments,
l_3_packet_length,
protocol,
rule,
sequence,
source,
source_port,
state,
tcp_option
FROM ovh.ip.firewall_rules
WHERE ip = '{{ ip }}' -- required
AND ip_on_firewall = '{{ ip_on_firewall }}' -- required
AND sequence = '{{ sequence }}' -- required
;
```
</TabItem>
<TabItem value="list">

List rules. Returns the sequence numbers of the address's firewall rules, filterable by state: creationPending, ok or removalPending.

```sql
SELECT
action,
creation_date,
destination,
destination_port,
fragments,
l_3_packet_length,
protocol,
rule,
sequence,
source,
source_port,
state,
tcp_option
FROM ovh.ip.firewall_rules
WHERE ip = '{{ ip }}' -- required
AND ip_on_firewall = '{{ ip_on_firewall }}' -- required
AND state = '{{ state }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a rule. Adds a permit or deny rule at sequence 0 to 19, matching protocol, source, ports or TCP options.

```sql
INSERT INTO ovh.ip.firewall_rules (
action,
destination_port,
destination_port_range,
l_3_packet_length,
protocol,
sequence,
source,
source_port,
source_port_range,
tcp_option,
ip,
ip_on_firewall
)
SELECT 
'{{ action }}' /* required */,
{{ destination_port }},
'{{ destination_port_range }}',
'{{ l_3_packet_length }}',
'{{ protocol }}' /* required */,
{{ sequence }} /* required */,
'{{ source }}',
{{ source_port }},
'{{ source_port_range }}',
'{{ tcp_option }}',
'{{ ip }}',
'{{ ip_on_firewall }}'
RETURNING
action,
creation_date,
destination,
destination_port,
fragments,
l_3_packet_length,
protocol,
rule,
sequence,
source,
source_port,
state,
tcp_option
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_rules
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the firewall_rules resource.
    - name: ip_on_firewall
      value: "{{ ip_on_firewall }}"
      description: Required parameter for the firewall_rules resource.
    - name: action
      value: "{{ action }}"
      description: |
        Action on this rule
      valid_values: ['deny', 'permit']
    - name: destination_port
      value: {{ destination_port }}
      description: |
        Destination port for your rule. Only with TCP/UDP protocol
    - name: destination_port_range
      description: |
        Destination port range for your rule. Only with TCP/UDP protocol. Cannot be set alongside destinationPort.
      value:
        from: {{ from }}
        to: {{ to }}
    - name: l_3_packet_length
      description: |
        IP packet's total length
      value:
        from: {{ from }}
        to: {{ to }}
    - name: protocol
      value: "{{ protocol }}"
      description: |
        Network protocol
      valid_values: ['ah', 'esp', 'gre', 'icmp', 'ipv4', 'tcp', 'udp']
    - name: sequence
      value: {{ sequence }}
      description: |
        Sequence number of your rule
      valid_values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
    - name: source
      value: "{{ source }}"
      description: |
        Source ip for your rule. Any if not set
    - name: source_port
      value: {{ source_port }}
      description: |
        Source port for your rule. Only with TCP/UDP protocol
    - name: source_port_range
      description: |
        Source port range for your rule. Only with TCP/UDP protocol. Cannot be set alongside sourcePort.
      value:
        from: {{ from }}
        to: {{ to }}
    - name: tcp_option
      description: |
        Option on your rule. Can only be used with TCP protocol
      value:
        fragments: {{ fragments }}
        option: "{{ option }}"
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

Delete a rule. Removes the rule at this sequence from the address's firewall, and returns the deleted rule.

```sql
DELETE FROM ovh.ip.firewall_rules
WHERE ip = '{{ ip }}' --required
AND ip_on_firewall = '{{ ip_on_firewall }}' --required
AND sequence = '{{ sequence }}' --required
;
```
</TabItem>
</Tabs>
