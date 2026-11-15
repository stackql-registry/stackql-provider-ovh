--- 
title: compute_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_instances
  - public_cloud
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

Creates, updates, deletes, gets or lists a <code>compute_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.compute_instances" /></td></tr>
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
    <td>Unique identifier of the instance</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current targetSpec value. It enables optional optimistic concurrency control: the value returned by a GET may be sent back in the PUT and action payloads, and the request is then rejected with a 409 checksum-mismatch conflict if it no longer matches server-side (because another request modified the instance in the meantime). Sending no checksum skips that check and forces the write (last-write-wins).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the instance, as an ISO 8601 / RFC 3339 timestamp (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current observed state of the instance as reported by the compute backend (name, flavor, image, location, power state, networks, attached volumes, attached shares, security groups). It is null while the instance is still being created and no backend state is available yet. (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>In-progress operations. Ongoing asynchronous tasks reconciling currentState toward targetSpec, for example a create, resize, reboot, volume attach or share attach. Poll the instance until this list is empty and resourceStatus is READY to know the requested change has been applied. (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Resource lifecycle status. High-level readiness of the instance in the system, for example CREATING, READY, UPDATING, DELETING, ERROR. This is distinct from currentState.powerState, which carries the lower-level OpenStack administrative power state of the virtual machine. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Desired specification. Last target specification requested for the instance. On update, the difference between the previous and the new targetSpec determines the operations performed (rename, resize, power change, and declarative volume/share attach-detach). (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification date of the instance, as an ISO 8601 / RFC 3339 timestamp (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Public Cloud compute instance: a virtual machine provisioned from a flavor and an image, connected to one or more networks and backed by block volumes. The resource follows the standard desired-state / observed-state model: targetSpec holds the specification you asked for. currentState reflects what the compute backend actually reports. resourceStatus and currentTasks describe the reconciliation between the two. Updates are performed by sending a new targetSpec on the PUT route. The requested operations (rename, resize, power change, volume attach/detach, share attach/detach) are derived from the diff.

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
    <td>Unique identifier of the instance</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current targetSpec value. It enables optional optimistic concurrency control: the value returned by a GET may be sent back in the PUT and action payloads, and the request is then rejected with a 409 checksum-mismatch conflict if it no longer matches server-side (because another request modified the instance in the meantime). Sending no checksum skips that check and forces the write (last-write-wins).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the instance, as an ISO 8601 / RFC 3339 timestamp (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current observed state of the instance as reported by the compute backend (name, flavor, image, location, power state, networks, attached volumes, attached shares, security groups). It is null while the instance is still being created and no backend state is available yet. (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>In-progress operations. Ongoing asynchronous tasks reconciling currentState toward targetSpec, for example a create, resize, reboot, volume attach or share attach. Poll the instance until this list is empty and resourceStatus is READY to know the requested change has been applied. (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Resource lifecycle status. High-level readiness of the instance in the system, for example CREATING, READY, UPDATING, DELETING, ERROR. This is distinct from currentState.powerState, which carries the lower-level OpenStack administrative power state of the virtual machine. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Desired specification. Last target specification requested for the instance. On update, the difference between the previous and the new targetSpec determines the operations performed (rename, resize, power change, and declarative volume/share attach-detach). (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification date of the instance, as an ISO 8601 / RFC 3339 timestamp (wire: updatedAt)</td>
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
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>### Get an instance&lt;br /&gt;&lt;br /&gt;Returns a single Public Cloud instance, including its desired `targetSpec` and observed `currentState`.&lt;br /&gt;&lt;br /&gt;### Optimistic concurrency&lt;br /&gt;The `checksum` returned here is the hash of the current `targetSpec`. Keep it and send it back on any subsequent `PUT` or imperative `action` call on the instance to guard against lost updates. It is optional, but omitting it forces the write (see the `PUT` route).&lt;br /&gt;&lt;br /&gt;### Filesystem attachments&lt;br /&gt;`currentState.shares` — the list of filesystems (Manila shares) attached to the instance — is populated only on this single-instance `GET`. It is deliberately not returned by the `LIST` route for performance reasons. Fetch the individual instance when you need it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-flavor"><code>flavor</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>### List instances&lt;br /&gt;&lt;br /&gt;Lists all instances in the project. Each item is a full instance envelope with the same shape as the `GET` route (desired `targetSpec` and observed `currentState`).&lt;br /&gt;&lt;br /&gt;### Filesystem attachments&lt;br /&gt;For performance, `currentState.shares` is not populated in list responses. To see the filesystems attached to a given instance, call `GET .../instance/&#123;instanceId&#125;` on it.&lt;br /&gt;&lt;br /&gt;### Filters&lt;br /&gt;The optional `name`, `flavor`, `region` and `status` query parameters narrow the list. Each one can be repeated, for example `?status=READY&status=CREATING`: repeated values of the same parameter are combined with OR, and different parameters are combined with AND. Filters apply only within the instances you are authorized to list. An unknown `status` value or an unavailable `region` is rejected with a `400 InvalidParameter`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>### Create an instance&lt;br /&gt;&lt;br /&gt;Provisions a new instance from the supplied `targetSpec`. Creation is asynchronous: the resource starts in `CREATING` and becomes `READY` once the backend has booted it. Poll `GET .../instance/&#123;instanceId&#125;` until `resourceStatus` is `READY` and `currentTasks` is empty.&lt;br /&gt;&lt;br /&gt;### Create-time-only fields (immutable afterward)&lt;br /&gt;Several fields can be set only at creation and can never be changed later:&lt;br /&gt;* `location` — the region (and optional availability zone) the instance is deployed in.&lt;br /&gt;* `sshKeyName` — the SSH key injected into the instance at boot.&lt;br /&gt;* `group` — placement / instance-group membership. It binds the instance to an existing instance group (Nova server group) for `AFFINITY` / `ANTI_AFFINITY` scheduling. Server-group membership is fixed by OpenStack at boot and cannot be added, removed, or changed afterward — there is no group `PUT`.&lt;br /&gt;&lt;br /&gt;### User data (cloud-init)&lt;br /&gt;`targetSpec.userData` is a base64-encoded (strict standard encoding) cloud-init payload handed to the instance at boot through the OpenStack metadata service / config drive, and interpreted by cloud-init inside the guest image. The encoded string must be at most 65535 bytes. It is write-only: the value is never returned by `GET`/`LIST`. It is also not persisted or stored by the Public Cloud API: the payload is handed to the compute service, which makes it available to the instance via the metadata service. Only a non-reversible fingerprint of the value is retained, for change detection. Unlike the create-time-only fields above, `userData` can be changed later via `PUT`. See the `PUT` route for the destructive semantics of doing so.&lt;br /&gt;&lt;br /&gt;### Declarative `volumes`&lt;br /&gt;`targetSpec.volumes` is a declarative list of block-volume references attached to the instance. Supply the volumes to attach at boot. On a subsequent `PUT` the list is diffed to attach or detach volumes (see the `PUT` route). There is no imperative attach/detach endpoint.&lt;br /&gt;&lt;br /&gt;### Declarative `shares`&lt;br /&gt;`targetSpec.shares` is a declarative list of filesystem (Manila share) attachments. Each entry references a share plus an optional per-entry `accessLevel` (defaults to `READ_WRITE`). At creation, each attach creates a Manila IP access rule for the instance's interface on the share's network. The instance must have an interface on that network. As with volumes, the list is reconciled by diffing on `PUT`.&lt;br /&gt;&lt;br /&gt;### Declarative `networks` and public IPs&lt;br /&gt;`targetSpec.networks` is a declarative list of network interfaces. Each entry is `&#123;id?, subnetId?, ip?, autoAssignPublicIp?&#125;`, and the fields you set decide what it means:&lt;br /&gt;* `&#123;"autoAssignPublicIp": true&#125;` — a public (Ext-Net) interface with a platform-assigned public IP. At most one entry may set it.&lt;br /&gt;* `&#123;"ip": "..."&#125;` without a network `id` — a public IP the project already owns: either an existing additional IP (also known as a failover IP), or an Ext-Net IP of the project in the instance's region. Any other address is rejected. Such an entry implicitly attaches the public (Ext-Net) interface. Several are allowed, and they may coexist with an `autoAssignPublicIp` entry.&lt;br /&gt;* `&#123;"id": "...", "subnetId": "..."&#125;` — a private interface whose fixed address is assigned by IPAM.&lt;br /&gt;* `&#123;"id": "...", "subnetId": "...", "ip": "..."&#125;` — a private interface where `ip` pins the fixed address when it falls inside the subnet CIDR, and otherwise designates an existing floating IP to associate with that interface (the floating IP must already exist).&lt;br /&gt;&lt;br /&gt;Any entry that sets `autoAssignPublicIp` or carries a public `ip` requires the optional `instance/usePublicIP` IAM action, including floating IP associations.&lt;br /&gt;&lt;br /&gt;In `currentState.networks` the shape is different: there is one entry per network plus at most one id-less entry for the public (Ext-Net) interface, and every address is reported through that entry's `addresses` list. There is no scalar `ip`. Each address carries a `type`: `FIXED` for an address configured on the interface itself (a private fixed address, whether IPAM-assigned or pinned, and the Ext-Net address), `FLOATING` for a floating IP associated with the interface, and `ADDITIONAL` for an additional IP routed to the public interface (additional IPs no longer form their own entry). `autoAssignPublicIp` is never echoed back, because the backend cannot distinguish a platform-assigned address from a pinned one.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>### Update an instance&lt;br /&gt;&lt;br /&gt;This is the single, declarative route for changing an instance. You do not call verb-specific endpoints. Instead you submit a new desired `targetSpec` and the API derives the operations to perform from the diff against the current specification. (Imperative power/lifecycle operations such as reboot, start, stop, and rescue live on the separate `.../instance/&#123;instanceId&#125;/action` route.)&lt;br /&gt;&lt;br /&gt;### Asynchronous, desired-state model&lt;br /&gt;1. You send the new `targetSpec`, optionally together with the `checksum` from your last `GET`.&lt;br /&gt;2. If accepted, you immediately get back the instance with the updated `targetSpec` and a new `checksum`. `resourceStatus` becomes `UPDATING`.&lt;br /&gt;3. One or more asynchronous tasks reconcile `currentState` toward `targetSpec`. Poll `GET .../instance/&#123;instanceId&#125;` until `resourceStatus` is `READY` and `currentTasks` is empty to know the change has been applied.&lt;br /&gt;&lt;br /&gt;### Operations derived from the diff&lt;br /&gt;* Rename — changing `name` renames the instance.&lt;br /&gt;* Resize (flavor) — changing `flavor` migrates the instance to the new flavor.&lt;br /&gt;* Volume attach / detach — done declaratively by diffing the `volumes` list: adding a volume reference attaches that volume, removing one detaches it. There is no imperative attach/detach endpoint — the diff is the only mechanism.&lt;br /&gt;* Network attach / detach — done declaratively by diffing the `networks` list, whose entries are `&#123;id?, subnetId?, ip?, autoAssignPublicIp?&#125;`: a platform-assigned Ext-Net IP (`&#123;"autoAssignPublicIp": true&#125;`, at most one entry), a public IP the project already owns — additional IP or project Ext-Net IP in the instance's region — (`&#123;"ip"&#125;`, no network `id`), a private interface with an IPAM address (`&#123;"id", "subnetId"&#125;`), or a private interface with `ip` either pinning its fixed address (address inside the subnet CIDR) or associating an existing floating IP (address outside it). Any entry that sets `autoAssignPublicIp` or carries a public `ip` requires the optional `instance/usePublicIP` IAM action.&lt;br /&gt;* Filesystem (share) attach / detach — done declaratively by diffing the `shares` list. Adding an entry attaches the share: it creates a Manila IP access rule for the instance's interface on the share's network, so the instance must already have an interface on that network or the attach errors. Removing an entry detaches the share: the matching access rule is removed, and the detach is idempotent. Each entry's `accessLevel` defaults to `READ_WRITE`. Caveat: managing per-share access rules directly on the share resource *and* attaching the same share instance-side here is unsupported — the share will report `OUT_OF_SYNC`.&lt;br /&gt;&lt;br /&gt;### Immutable fields (excluded from update)&lt;br /&gt;`location`, `sshKeyName`, and `group` are set only at creation and are not part of the update. In particular, placement-group (`group`) membership cannot change post-create. OpenStack/Nova server groups are immutable and there is deliberately no group `PUT`.&lt;br /&gt;&lt;br /&gt;### Destructive update (`userData`)&lt;br /&gt;Changing `targetSpec.userData` reinstalls the instance — a Nova rebuild on its current image — which wipes the root disk and all data on it. Semantics are tri-state: omitting the field (or sending `null`) keeps the current value unchanged, an empty string `""` clears it, and any other value replaces it. Both the clear and the replace trigger the reinstall. An instance with no `image` (boot-from-volume) has nothing to rebuild onto, so a `userData` change on it is rejected with a `400 InvalidParameter`.&lt;br /&gt;&lt;br /&gt;### Optimistic concurrency (`checksum`)&lt;br /&gt;The `checksum` guards against lost updates and is optional. When you send it, it must match the server-side value: if another request modified the instance since your last `GET`, the checksum no longer matches and the request is rejected with a checksum-mismatch error (`ChecksumMismatch`). Re-`GET` the instance and retry against the fresh state. When you omit it (or send an empty string), the check is skipped and the update is forced (last-write-wins).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>### Delete an instance&lt;br /&gt;&lt;br /&gt;Permanently deletes a Public Cloud instance. Deletion is asynchronous: the resource transitions to `DELETING`, the response echoes the instance, and the backend then removes it. Poll `GET .../instance/&#123;instanceId&#125;` until it returns `InstanceDoesNotExist` (`404`) to confirm removal.&lt;br /&gt;&lt;br /&gt;Behavior&lt;br /&gt;* Independent block volumes attached to the instance are detached, not deleted — they are separate resources and survive.&lt;br /&gt;* Filesystem (share) attachments are released as part of the teardown.&lt;br /&gt;&lt;br /&gt;A delete already in progress is reported as `ResourceAlreadyBeingDeleted`. An instance in a transient or otherwise invalid state may be rejected with `ResourceInInvalidState`.</td>
</tr>
<tr>
    <td><a href="#action"><CopyableCode code="action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>### Perform an instance action&lt;br /&gt;&lt;br /&gt;Imperative endpoint for power and lifecycle actions on an instance. This is the one place such imperative operations live. Distinct from the declarative `PUT` on the instance, which reconciles desired state from a `targetSpec` diff. Actions are asynchronous: the instance transitions through the relevant transient state and the response echoes the instance. Poll `GET .../instance/&#123;instanceId&#125;` until `resourceStatus` is `READY` and `currentTasks` is empty.&lt;br /&gt;&lt;br /&gt;### Action `type`&lt;br /&gt;The `type` field selects the operation:&lt;br /&gt;* `REBOOT` — reboot the instance (`parameters.hard` chooses a hard vs. soft reboot).&lt;br /&gt;* `START` / `STOP` — power the instance on / off.&lt;br /&gt;* `SHELVE` / `UNSHELVE` — shelve the instance (freeing hypervisor resources) and restore it.&lt;br /&gt;* `PAUSE` / `UNPAUSE` — freeze a running instance in the memory of the host, and unfreeze it.&lt;br /&gt;* `SUSPEND` / `RESUME` — save the memory state of a running instance to disk and stop it, and restore it.&lt;br /&gt;* `RESCUE` / `UNRESCUE` — boot into rescue mode (optionally from `parameters.imageId`) and return to normal boot.&lt;br /&gt;* `LOCK` / `UNLOCK` — lock the instance against accidental actions / modifications, and unlock it.&lt;br /&gt;&lt;br /&gt;### Optimistic concurrency (`checksum`)&lt;br /&gt;The `checksum` is optional. When you send it, it must match the current server-side value or the action is rejected with a checksum-mismatch error. Re-`GET` and retry. When you omit it (or send an empty string), the check is skipped and the action is forced (last-write-wins). An action requested while the instance is in an incompatible state is rejected with `ResourceInInvalidState`.</td>
</tr>
<tr>
    <td><a href="#console"><CopyableCode code="console" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>### Create a remote console&lt;br /&gt;&lt;br /&gt;Opens a remote console session to the instance and returns the connection details (a `url` and, depending on the protocol, an access `token`) for a client to connect. This is a synchronous call — no desired-state reconciliation — and the returned URL is short-lived, so request a fresh console when it expires.&lt;br /&gt;&lt;br /&gt;### Protocol and type&lt;br /&gt;Choose the console via the request body:&lt;br /&gt;* `protocol` — the console transport, for example `VNC`, `SPICE`, `SERIAL`.&lt;br /&gt;* `type` — the concrete console kind for that protocol, for example `NOVNC` for `VNC`, `SERIAL` for `SERIAL`.&lt;br /&gt;&lt;br /&gt;The instance must be in a state that supports a console, otherwise the request is rejected with `ResourceInInvalidState`.</td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance ID</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance ID (wire: instanceId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-flavor">
    <td><CopyableCode code="flavor" /></td>
    <td><code>array</code></td>
    <td>Filter by flavor ID or flavor name. Repeatable.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>array</code></td>
    <td>Filter by instance name (case-insensitive substring match). Repeatable.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>array</code></td>
    <td>Filter by instance region. An unavailable region is rejected. Repeatable.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>array</code></td>
    <td>Filter by resourceStatus. Repeatable.</td>
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

### Get an instance&lt;br /&gt;&lt;br /&gt;Returns a single Public Cloud instance, including its desired `targetSpec` and observed `currentState`.&lt;br /&gt;&lt;br /&gt;### Optimistic concurrency&lt;br /&gt;The `checksum` returned here is the hash of the current `targetSpec`. Keep it and send it back on any subsequent `PUT` or imperative `action` call on the instance to guard against lost updates. It is optional, but omitting it forces the write (see the `PUT` route).&lt;br /&gt;&lt;br /&gt;### Filesystem attachments&lt;br /&gt;`currentState.shares` — the list of filesystems (Manila shares) attached to the instance — is populated only on this single-instance `GET`. It is deliberately not returned by the `LIST` route for performance reasons. Fetch the individual instance when you need it.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud.compute_instances
WHERE instance_id = '{{ instance_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

### List instances&lt;br /&gt;&lt;br /&gt;Lists all instances in the project. Each item is a full instance envelope with the same shape as the `GET` route (desired `targetSpec` and observed `currentState`).&lt;br /&gt;&lt;br /&gt;### Filesystem attachments&lt;br /&gt;For performance, `currentState.shares` is not populated in list responses. To see the filesystems attached to a given instance, call `GET .../instance/&#123;instanceId&#125;` on it.&lt;br /&gt;&lt;br /&gt;### Filters&lt;br /&gt;The optional `name`, `flavor`, `region` and `status` query parameters narrow the list. Each one can be repeated, for example `?status=READY&status=CREATING`: repeated values of the same parameter are combined with OR, and different parameters are combined with AND. Filters apply only within the instances you are authorized to list. An unknown `status` value or an unavailable `region` is rejected with a `400 InvalidParameter`.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud.compute_instances
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND flavor = '{{ flavor }}'
AND name = '{{ name }}'
AND region = '{{ region }}'
AND status = '{{ status }}'
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

### Create an instance&lt;br /&gt;&lt;br /&gt;Provisions a new instance from the supplied `targetSpec`. Creation is asynchronous: the resource starts in `CREATING` and becomes `READY` once the backend has booted it. Poll `GET .../instance/&#123;instanceId&#125;` until `resourceStatus` is `READY` and `currentTasks` is empty.&lt;br /&gt;&lt;br /&gt;### Create-time-only fields (immutable afterward)&lt;br /&gt;Several fields can be set only at creation and can never be changed later:&lt;br /&gt;* `location` — the region (and optional availability zone) the instance is deployed in.&lt;br /&gt;* `sshKeyName` — the SSH key injected into the instance at boot.&lt;br /&gt;* `group` — placement / instance-group membership. It binds the instance to an existing instance group (Nova server group) for `AFFINITY` / `ANTI_AFFINITY` scheduling. Server-group membership is fixed by OpenStack at boot and cannot be added, removed, or changed afterward — there is no group `PUT`.&lt;br /&gt;&lt;br /&gt;### User data (cloud-init)&lt;br /&gt;`targetSpec.userData` is a base64-encoded (strict standard encoding) cloud-init payload handed to the instance at boot through the OpenStack metadata service / config drive, and interpreted by cloud-init inside the guest image. The encoded string must be at most 65535 bytes. It is write-only: the value is never returned by `GET`/`LIST`. It is also not persisted or stored by the Public Cloud API: the payload is handed to the compute service, which makes it available to the instance via the metadata service. Only a non-reversible fingerprint of the value is retained, for change detection. Unlike the create-time-only fields above, `userData` can be changed later via `PUT`. See the `PUT` route for the destructive semantics of doing so.&lt;br /&gt;&lt;br /&gt;### Declarative `volumes`&lt;br /&gt;`targetSpec.volumes` is a declarative list of block-volume references attached to the instance. Supply the volumes to attach at boot. On a subsequent `PUT` the list is diffed to attach or detach volumes (see the `PUT` route). There is no imperative attach/detach endpoint.&lt;br /&gt;&lt;br /&gt;### Declarative `shares`&lt;br /&gt;`targetSpec.shares` is a declarative list of filesystem (Manila share) attachments. Each entry references a share plus an optional per-entry `accessLevel` (defaults to `READ_WRITE`). At creation, each attach creates a Manila IP access rule for the instance's interface on the share's network. The instance must have an interface on that network. As with volumes, the list is reconciled by diffing on `PUT`.&lt;br /&gt;&lt;br /&gt;### Declarative `networks` and public IPs&lt;br /&gt;`targetSpec.networks` is a declarative list of network interfaces. Each entry is `&#123;id?, subnetId?, ip?, autoAssignPublicIp?&#125;`, and the fields you set decide what it means:&lt;br /&gt;* `&#123;"autoAssignPublicIp": true&#125;` — a public (Ext-Net) interface with a platform-assigned public IP. At most one entry may set it.&lt;br /&gt;* `&#123;"ip": "..."&#125;` without a network `id` — a public IP the project already owns: either an existing additional IP (also known as a failover IP), or an Ext-Net IP of the project in the instance's region. Any other address is rejected. Such an entry implicitly attaches the public (Ext-Net) interface. Several are allowed, and they may coexist with an `autoAssignPublicIp` entry.&lt;br /&gt;* `&#123;"id": "...", "subnetId": "..."&#125;` — a private interface whose fixed address is assigned by IPAM.&lt;br /&gt;* `&#123;"id": "...", "subnetId": "...", "ip": "..."&#125;` — a private interface where `ip` pins the fixed address when it falls inside the subnet CIDR, and otherwise designates an existing floating IP to associate with that interface (the floating IP must already exist).&lt;br /&gt;&lt;br /&gt;Any entry that sets `autoAssignPublicIp` or carries a public `ip` requires the optional `instance/usePublicIP` IAM action, including floating IP associations.&lt;br /&gt;&lt;br /&gt;In `currentState.networks` the shape is different: there is one entry per network plus at most one id-less entry for the public (Ext-Net) interface, and every address is reported through that entry's `addresses` list. There is no scalar `ip`. Each address carries a `type`: `FIXED` for an address configured on the interface itself (a private fixed address, whether IPAM-assigned or pinned, and the Ext-Net address), `FLOATING` for a floating IP associated with the interface, and `ADDITIONAL` for an additional IP routed to the public interface (additional IPs no longer form their own entry). `autoAssignPublicIp` is never echoed back, because the backend cannot distinguish a platform-assigned address from a pinned one.

```sql
INSERT INTO ovh.public_cloud.compute_instances (
target_spec,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ project_id }}'
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compute_instances
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the compute_instances resource.
    - name: target_spec
      description: |
        Desired specification. Full target specification of the instance to create. See InstanceTargetSpec for the per-field creation rules and immutability constraints.
      value:
        flavor:
          id: "{{ id }}"
        group:
          id: "{{ id }}"
        image:
          id: "{{ id }}"
        location:
          availabilityZone: "{{ availabilityZone }}"
          region: "{{ region }}"
        name: "{{ name }}"
        networks:
          - autoAssignPublicIp: {{ autoAssignPublicIp }}
            id: "{{ id }}"
            ip: "{{ ip }}"
            subnetId: "{{ subnetId }}"
        powerState: "{{ powerState }}"
        securityGroups:
          - id: "{{ id }}"
        shares:
          - accessLevel: "{{ accessLevel }}"
            id: "{{ id }}"
        sshKeyName: "{{ sshKeyName }}"
        userData: "{{ userData }}"
        volumes:
          - id: "{{ id }}"
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

### Update an instance&lt;br /&gt;&lt;br /&gt;This is the single, declarative route for changing an instance. You do not call verb-specific endpoints. Instead you submit a new desired `targetSpec` and the API derives the operations to perform from the diff against the current specification. (Imperative power/lifecycle operations such as reboot, start, stop, and rescue live on the separate `.../instance/&#123;instanceId&#125;/action` route.)&lt;br /&gt;&lt;br /&gt;### Asynchronous, desired-state model&lt;br /&gt;1. You send the new `targetSpec`, optionally together with the `checksum` from your last `GET`.&lt;br /&gt;2. If accepted, you immediately get back the instance with the updated `targetSpec` and a new `checksum`. `resourceStatus` becomes `UPDATING`.&lt;br /&gt;3. One or more asynchronous tasks reconcile `currentState` toward `targetSpec`. Poll `GET .../instance/&#123;instanceId&#125;` until `resourceStatus` is `READY` and `currentTasks` is empty to know the change has been applied.&lt;br /&gt;&lt;br /&gt;### Operations derived from the diff&lt;br /&gt;* Rename — changing `name` renames the instance.&lt;br /&gt;* Resize (flavor) — changing `flavor` migrates the instance to the new flavor.&lt;br /&gt;* Volume attach / detach — done declaratively by diffing the `volumes` list: adding a volume reference attaches that volume, removing one detaches it. There is no imperative attach/detach endpoint — the diff is the only mechanism.&lt;br /&gt;* Network attach / detach — done declaratively by diffing the `networks` list, whose entries are `&#123;id?, subnetId?, ip?, autoAssignPublicIp?&#125;`: a platform-assigned Ext-Net IP (`&#123;"autoAssignPublicIp": true&#125;`, at most one entry), a public IP the project already owns — additional IP or project Ext-Net IP in the instance's region — (`&#123;"ip"&#125;`, no network `id`), a private interface with an IPAM address (`&#123;"id", "subnetId"&#125;`), or a private interface with `ip` either pinning its fixed address (address inside the subnet CIDR) or associating an existing floating IP (address outside it). Any entry that sets `autoAssignPublicIp` or carries a public `ip` requires the optional `instance/usePublicIP` IAM action.&lt;br /&gt;* Filesystem (share) attach / detach — done declaratively by diffing the `shares` list. Adding an entry attaches the share: it creates a Manila IP access rule for the instance's interface on the share's network, so the instance must already have an interface on that network or the attach errors. Removing an entry detaches the share: the matching access rule is removed, and the detach is idempotent. Each entry's `accessLevel` defaults to `READ_WRITE`. Caveat: managing per-share access rules directly on the share resource *and* attaching the same share instance-side here is unsupported — the share will report `OUT_OF_SYNC`.&lt;br /&gt;&lt;br /&gt;### Immutable fields (excluded from update)&lt;br /&gt;`location`, `sshKeyName`, and `group` are set only at creation and are not part of the update. In particular, placement-group (`group`) membership cannot change post-create. OpenStack/Nova server groups are immutable and there is deliberately no group `PUT`.&lt;br /&gt;&lt;br /&gt;### Destructive update (`userData`)&lt;br /&gt;Changing `targetSpec.userData` reinstalls the instance — a Nova rebuild on its current image — which wipes the root disk and all data on it. Semantics are tri-state: omitting the field (or sending `null`) keeps the current value unchanged, an empty string `""` clears it, and any other value replaces it. Both the clear and the replace trigger the reinstall. An instance with no `image` (boot-from-volume) has nothing to rebuild onto, so a `userData` change on it is rejected with a `400 InvalidParameter`.&lt;br /&gt;&lt;br /&gt;### Optimistic concurrency (`checksum`)&lt;br /&gt;The `checksum` guards against lost updates and is optional. When you send it, it must match the server-side value: if another request modified the instance since your last `GET`, the checksum no longer matches and the request is rejected with a checksum-mismatch error (`ChecksumMismatch`). Re-`GET` the instance and retry against the fresh state. When you omit it (or send an empty string), the check is skipped and the update is forced (last-write-wins).

```sql
UPDATE ovh.public_cloud.compute_instances
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at;
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

### Delete an instance&lt;br /&gt;&lt;br /&gt;Permanently deletes a Public Cloud instance. Deletion is asynchronous: the resource transitions to `DELETING`, the response echoes the instance, and the backend then removes it. Poll `GET .../instance/&#123;instanceId&#125;` until it returns `InstanceDoesNotExist` (`404`) to confirm removal.&lt;br /&gt;&lt;br /&gt;Behavior&lt;br /&gt;* Independent block volumes attached to the instance are detached, not deleted — they are separate resources and survive.&lt;br /&gt;* Filesystem (share) attachments are released as part of the teardown.&lt;br /&gt;&lt;br /&gt;A delete already in progress is reported as `ResourceAlreadyBeingDeleted`. An instance in a transient or otherwise invalid state may be rejected with `ResourceInInvalidState`.

```sql
DELETE FROM ovh.public_cloud.compute_instances
WHERE instance_id = '{{ instance_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="action"
    values={[
        { label: 'action', value: 'action' },
        { label: 'console', value: 'console' }
    ]}
>
<TabItem value="action">

### Perform an instance action&lt;br /&gt;&lt;br /&gt;Imperative endpoint for power and lifecycle actions on an instance. This is the one place such imperative operations live. Distinct from the declarative `PUT` on the instance, which reconciles desired state from a `targetSpec` diff. Actions are asynchronous: the instance transitions through the relevant transient state and the response echoes the instance. Poll `GET .../instance/&#123;instanceId&#125;` until `resourceStatus` is `READY` and `currentTasks` is empty.&lt;br /&gt;&lt;br /&gt;### Action `type`&lt;br /&gt;The `type` field selects the operation:&lt;br /&gt;* `REBOOT` — reboot the instance (`parameters.hard` chooses a hard vs. soft reboot).&lt;br /&gt;* `START` / `STOP` — power the instance on / off.&lt;br /&gt;* `SHELVE` / `UNSHELVE` — shelve the instance (freeing hypervisor resources) and restore it.&lt;br /&gt;* `PAUSE` / `UNPAUSE` — freeze a running instance in the memory of the host, and unfreeze it.&lt;br /&gt;* `SUSPEND` / `RESUME` — save the memory state of a running instance to disk and stop it, and restore it.&lt;br /&gt;* `RESCUE` / `UNRESCUE` — boot into rescue mode (optionally from `parameters.imageId`) and return to normal boot.&lt;br /&gt;* `LOCK` / `UNLOCK` — lock the instance against accidental actions / modifications, and unlock it.&lt;br /&gt;&lt;br /&gt;### Optimistic concurrency (`checksum`)&lt;br /&gt;The `checksum` is optional. When you send it, it must match the current server-side value or the action is rejected with a checksum-mismatch error. Re-`GET` and retry. When you omit it (or send an empty string), the check is skipped and the action is forced (last-write-wins). An action requested while the instance is in an incompatible state is rejected with `ResourceInInvalidState`.

```sql
EXEC ovh.public_cloud.compute_instances.action 
@instanceId='{{ instanceId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"checksum": "{{ checksum }}", 
"parameters": "{{ parameters }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="console">

### Create a remote console&lt;br /&gt;&lt;br /&gt;Opens a remote console session to the instance and returns the connection details (a `url` and, depending on the protocol, an access `token`) for a client to connect. This is a synchronous call — no desired-state reconciliation — and the returned URL is short-lived, so request a fresh console when it expires.&lt;br /&gt;&lt;br /&gt;### Protocol and type&lt;br /&gt;Choose the console via the request body:&lt;br /&gt;* `protocol` — the console transport, for example `VNC`, `SPICE`, `SERIAL`.&lt;br /&gt;* `type` — the concrete console kind for that protocol, for example `NOVNC` for `VNC`, `SERIAL` for `SERIAL`.&lt;br /&gt;&lt;br /&gt;The instance must be in a state that supports a console, otherwise the request is rejected with `ResourceInInvalidState`.

```sql
EXEC ovh.public_cloud.compute_instances.console 
@instanceId='{{ instanceId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"protocol": "{{ protocol }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
