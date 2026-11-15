--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - license_office
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.license_office.users" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>User's first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>User's last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="activation_email" /></td>
    <td><code>string</code></td>
    <td>Email used to activate Microsoft Office (wire: activationEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this user slot will be resigned at the next renew period (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="is_virtual" /></td>
    <td><code>boolean</code></td>
    <td>Specify if the user is actually a user slot (configureme) or a real user (wire: isVirtual)</td>
</tr>
<tr>
    <td><CopyableCode code="licences" /></td>
    <td><code>array</code></td>
    <td>Licenses attributed to the user</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>User state (creating, deleting, ok, suspended, suspending, unsuspending)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_location" /></td>
    <td><code>string</code></td>
    <td>ISO 3166-1 alpha-2 country code where the user is using Office365 services (ac, ad, ae, af, ag, ai, al, am, an, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cs, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, eh, er, es, et, fc, fd, fi, fj, fk, fm, fo, fr, fx, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kp, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pr, ps, pt, pw, py, qa, qc, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tp, tr, tt, tv, tw, tz, ua, ug, uk, um, us, uy, uz, va, vc, ve, vg, vi, vn, vu, we, wf, ws, ye, yt, yu, za, zm, zw) (wire: usageLocation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Office user

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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>User's first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>User's last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="activation_email" /></td>
    <td><code>string</code></td>
    <td>Email used to activate Microsoft Office (wire: activationEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this user slot will be resigned at the next renew period (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="is_virtual" /></td>
    <td><code>boolean</code></td>
    <td>Specify if the user is actually a user slot (configureme) or a real user (wire: isVirtual)</td>
</tr>
<tr>
    <td><CopyableCode code="licences" /></td>
    <td><code>array</code></td>
    <td>Licenses attributed to the user</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>User state (creating, deleting, ok, suspended, suspending, unsuspending)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_location" /></td>
    <td><code>string</code></td>
    <td>ISO 3166-1 alpha-2 country code where the user is using Office365 services (ac, ad, ae, af, ag, ai, al, am, an, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cs, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, eh, er, es, et, fc, fd, fi, fj, fk, fm, fo, fr, fx, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kp, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pr, ps, pt, pw, py, qa, qc, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tp, tr, tt, tv, tw, tz, ua, ug, uk, um, us, uy, uz, va, vc, ve, vg, vi, vn, vu, we, wf, ws, ye, yt, yu, za, zm, zw) (wire: usageLocation)</td>
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
    <td><a href="#parameter-activation_email"><code>activation_email</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the names, activation email, licenses and state of the user. `isVirtual` tells whether it is a user slot or a real user.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-activation_email"><code>activation_email</code></a>, <a href="#parameter-first_name"><code>first_name</code></a>, <a href="#parameter-last_name"><code>last_name</code></a>, <a href="#parameter-licences"><code>licences</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the activation emails of the users of the tenant. Filter them by `activationEmail`, `firstName`, `lastName` or `licences`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-login"><code>login</code></a></td>
    <td></td>
    <td>Creates a user from a `login` on a `domain` of the tenant, with a license, optional first and last names and a usage location, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-activation_email"><code>activation_email</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the first name, last name and activation email of the user, and `deleteAtExpiration`, which ends the user slot at the next renewal.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-activation_email"><code>activation_email</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the user and returns the task.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-activationEmail"><code>activationEmail</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shouldSendMail"><code>shouldSendMail</code></a></td>
    <td></td>
    <td>Changes the password of the user and returns the task. Leave `password` empty to receive a generated password by email. Set `shouldSendMail` to send the new password to `notifyEmail`, the admin contact email by default.</td>
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
<tr id="parameter-activationEmail">
    <td><CopyableCode code="activationEmail" /></td>
    <td><code>string</code></td>
    <td>Activation email</td>
</tr>
<tr id="parameter-activation_email">
    <td><CopyableCode code="activation_email" /></td>
    <td><code>string</code></td>
    <td>Activation email (wire: activationEmail)</td>
</tr>
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
<tr id="parameter-activation_email">
    <td><CopyableCode code="activation_email" /></td>
    <td><code>string</code></td>
    <td> (wire: activationEmail)</td>
</tr>
<tr id="parameter-first_name">
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td> (wire: firstName)</td>
</tr>
<tr id="parameter-last_name">
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td> (wire: lastName)</td>
</tr>
<tr id="parameter-licences">
    <td><CopyableCode code="licences" /></td>
    <td><code>array</code></td>
    <td></td>
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

Returns the names, activation email, licenses and state of the user. `isVirtual` tells whether it is a user slot or a real user.

```sql
SELECT
task_pending_id,
first_name,
last_name,
activation_email,
delete_at_expiration,
is_virtual,
licences,
status,
usage_location
FROM ovh.license_office.users
WHERE activation_email = '{{ activation_email }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the activation emails of the users of the tenant. Filter them by `activationEmail`, `firstName`, `lastName` or `licences`.

```sql
SELECT
task_pending_id,
first_name,
last_name,
activation_email,
delete_at_expiration,
is_virtual,
licences,
status,
usage_location
FROM ovh.license_office.users
WHERE service_name = '{{ service_name }}' -- required
AND activation_email = '{{ activation_email }}'
AND first_name = '{{ first_name }}'
AND last_name = '{{ last_name }}'
AND licences = '{{ licences }}'
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

Creates a user from a `login` on a `domain` of the tenant, with a license, optional first and last names and a usage location, and returns the task.

```sql
INSERT INTO ovh.license_office.users (
domain,
first_name,
last_name,
licence,
login,
usage_location,
service_name
)
SELECT 
'{{ domain }}' /* required */,
'{{ first_name }}',
'{{ last_name }}',
'{{ licence }}',
'{{ login }}' /* required */,
'{{ usage_location }}',
'{{ service_name }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the users resource.
    - name: domain
      value: "{{ domain }}"
      description: |
        Office domain
    - name: first_name
      value: "{{ first_name }}"
      description: |
        User's first name
    - name: last_name
      value: "{{ last_name }}"
      description: |
        User's last name
    - name: licence
      value: "{{ licence }}"
      description: |
        Licenses attributed to the user
      valid_values: ['officeBusiness', 'officeProPlus']
    - name: login
      value: "{{ login }}"
      description: |
        Account login
    - name: usage_location
      value: "{{ usage_location }}"
      description: |
        ISO 3166-1 alpha-2 country code where the user is using Office365 services
      valid_values: ['ac', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'an', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cs', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'fc', 'fd', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'fx', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 'qc', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tp', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'um', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'we', 'wf', 'ws', 'ye', 'yt', 'yu', 'za', 'zm', 'zw']
`}</CodeBlock>

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

Updates the first name, last name and activation email of the user, and `deleteAtExpiration`, which ends the user slot at the next renewal.

```sql
UPDATE ovh.license_office.users
SET 
activation_email = '{{ activation_email }}',
delete_at_expiration = {{ delete_at_expiration }},
first_name = '{{ first_name }}',
last_name = '{{ last_name }}',
usage_location = '{{ usage_location }}'
WHERE 
activation_email = '{{ activation_email }}' --required
AND service_name = '{{ service_name }}' --required;
```
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

Deletes the user and returns the task.

```sql
DELETE FROM ovh.license_office.users
WHERE activation_email = '{{ activation_email }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' }
    ]}
>
<TabItem value="change_password">

Changes the password of the user and returns the task. Leave `password` empty to receive a generated password by email. Set `shouldSendMail` to send the new password to `notifyEmail`, the admin contact email by default.

```sql
EXEC ovh.license_office.users.change_password 
@activationEmail='{{ activationEmail }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"notifyEmail": "{{ notifyEmail }}", 
"password": "{{ password }}", 
"shouldSendMail": {{ shouldSendMail }}
}'
;
```
</TabItem>
</Tabs>
