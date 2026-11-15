---
title: cloud_database
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_database
  - ovh
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage ovh resources using SQL
custom_edit_url: null
image: /img/stackql-ovh-provider-featured-image.png
---

cloud_database service documentation.

:::info[Service Summary]

total resources: __157__  

:::

## Resources
<div class="row">
<div class="providerDocColumn">
<a href="/services/cloud_database/availabilities/">availabilities</a><br />
<a href="/services/cloud_database/capabilities/">capabilities</a><br />
<a href="/services/cloud_database/capabilities_engines/">capabilities_engines</a><br />
<a href="/services/cloud_database/clickhouse_backups/">clickhouse_backups</a><br />
<a href="/services/cloud_database/clickhouse_capabilities_backup_regions/">clickhouse_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/clickhouse_capabilities_integrations/">clickhouse_capabilities_integrations</a><br />
<a href="/services/cloud_database/clickhouse_certificates/">clickhouse_certificates</a><br />
<a href="/services/cloud_database/clickhouse_current_queries/">clickhouse_current_queries</a><br />
<a href="/services/cloud_database/clickhouse_databases/">clickhouse_databases</a><br />
<a href="/services/cloud_database/clickhouse_integrations/">clickhouse_integrations</a><br />
<a href="/services/cloud_database/clickhouse_log_kinds/">clickhouse_log_kinds</a><br />
<a href="/services/cloud_database/clickhouse_log_subscriptions/">clickhouse_log_subscriptions</a><br />
<a href="/services/cloud_database/clickhouse_maintenances/">clickhouse_maintenances</a><br />
<a href="/services/cloud_database/clickhouse_metrics/">clickhouse_metrics</a><br />
<a href="/services/cloud_database/clickhouse_nodes/">clickhouse_nodes</a><br />
<a href="/services/cloud_database/clickhouse_prometheuses/">clickhouse_prometheuses</a><br />
<a href="/services/cloud_database/clickhouse_query_statistics/">clickhouse_query_statistics</a><br />
<a href="/services/cloud_database/clickhouse_roles/">clickhouse_roles</a><br />
<a href="/services/cloud_database/clickhouse_users/">clickhouse_users</a><br />
<a href="/services/cloud_database/clickhouses/">clickhouses</a><br />
<a href="/services/cloud_database/grafana_backups/">grafana_backups</a><br />
<a href="/services/cloud_database/grafana_capabilities_advanced_configurations/">grafana_capabilities_advanced_configurations</a><br />
<a href="/services/cloud_database/grafana_capabilities_backup_regions/">grafana_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/grafana_capabilities_integrations/">grafana_capabilities_integrations</a><br />
<a href="/services/cloud_database/grafana_integrations/">grafana_integrations</a><br />
<a href="/services/cloud_database/grafana_log_kinds/">grafana_log_kinds</a><br />
<a href="/services/cloud_database/grafana_log_subscriptions/">grafana_log_subscriptions</a><br />
<a href="/services/cloud_database/grafana_maintenances/">grafana_maintenances</a><br />
<a href="/services/cloud_database/grafana_metrics/">grafana_metrics</a><br />
<a href="/services/cloud_database/grafana_nodes/">grafana_nodes</a><br />
<a href="/services/cloud_database/grafana_users/">grafana_users</a><br />
<a href="/services/cloud_database/grafanas/">grafanas</a><br />
<a href="/services/cloud_database/kafka_capabilities_advanced_configurations/">kafka_capabilities_advanced_configurations</a><br />
<a href="/services/cloud_database/kafka_capabilities_backup_regions/">kafka_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/kafka_capabilities_integrations/">kafka_capabilities_integrations</a><br />
<a href="/services/cloud_database/kafka_certificates/">kafka_certificates</a><br />
<a href="/services/cloud_database/kafka_connect_capabilities_advanced_configurations/">kafka_connect_capabilities_advanced_configurations</a><br />
<a href="/services/cloud_database/kafka_connect_capabilities_backup_regions/">kafka_connect_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/kafka_connect_capabilities_connector_configurations/">kafka_connect_capabilities_connector_configurations</a><br />
<a href="/services/cloud_database/kafka_connect_capabilities_connector_transforms/">kafka_connect_capabilities_connector_transforms</a><br />
<a href="/services/cloud_database/kafka_connect_capabilities_connectors/">kafka_connect_capabilities_connectors</a><br />
<a href="/services/cloud_database/kafka_connect_capabilities_integrations/">kafka_connect_capabilities_integrations</a><br />
<a href="/services/cloud_database/kafka_connect_connector_tasks/">kafka_connect_connector_tasks</a><br />
<a href="/services/cloud_database/kafka_connect_connectors/">kafka_connect_connectors</a><br />
<a href="/services/cloud_database/kafka_connect_integrations/">kafka_connect_integrations</a><br />
<a href="/services/cloud_database/kafka_connect_log_kinds/">kafka_connect_log_kinds</a><br />
<a href="/services/cloud_database/kafka_connect_log_subscriptions/">kafka_connect_log_subscriptions</a><br />
<a href="/services/cloud_database/kafka_connect_maintenances/">kafka_connect_maintenances</a><br />
<a href="/services/cloud_database/kafka_connect_metrics/">kafka_connect_metrics</a><br />
<a href="/services/cloud_database/kafka_connect_nodes/">kafka_connect_nodes</a><br />
<a href="/services/cloud_database/kafka_connect_prometheuses/">kafka_connect_prometheuses</a><br />
<a href="/services/cloud_database/kafka_connect_users/">kafka_connect_users</a><br />
<a href="/services/cloud_database/kafka_connects/">kafka_connects</a><br />
<a href="/services/cloud_database/kafka_integrations/">kafka_integrations</a><br />
<a href="/services/cloud_database/kafka_log_kinds/">kafka_log_kinds</a><br />
<a href="/services/cloud_database/kafka_log_subscriptions/">kafka_log_subscriptions</a><br />
<a href="/services/cloud_database/kafka_maintenances/">kafka_maintenances</a><br />
<a href="/services/cloud_database/kafka_metrics/">kafka_metrics</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_capabilities_integrations/">kafka_mirror_maker_capabilities_integrations</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_integrations/">kafka_mirror_maker_integrations</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_log_kinds/">kafka_mirror_maker_log_kinds</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_log_subscriptions/">kafka_mirror_maker_log_subscriptions</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_maintenances/">kafka_mirror_maker_maintenances</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_metrics/">kafka_mirror_maker_metrics</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_nodes/">kafka_mirror_maker_nodes</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_prometheuses/">kafka_mirror_maker_prometheuses</a><br />
<a href="/services/cloud_database/kafka_mirror_maker_replications/">kafka_mirror_maker_replications</a><br />
<a href="/services/cloud_database/kafka_mirror_makers/">kafka_mirror_makers</a><br />
<a href="/services/cloud_database/kafka_nodes/">kafka_nodes</a><br />
<a href="/services/cloud_database/kafka_permissions/">kafka_permissions</a><br />
<a href="/services/cloud_database/kafka_prometheuses/">kafka_prometheuses</a><br />
<a href="/services/cloud_database/kafka_schema_registry_acls/">kafka_schema_registry_acls</a><br />
<a href="/services/cloud_database/kafka_topic_acls/">kafka_topic_acls</a><br />
<a href="/services/cloud_database/kafka_topics/">kafka_topics</a><br />
<a href="/services/cloud_database/kafka_user_accesses/">kafka_user_accesses</a><br />
<a href="/services/cloud_database/kafka_users/">kafka_users</a><br />
<a href="/services/cloud_database/kafkas/">kafkas</a><br />
<a href="/services/cloud_database/mongodb_backups/">mongodb_backups</a><br />
<a href="/services/cloud_database/mongodb_log_kinds/">mongodb_log_kinds</a>
</div>
<div class="providerDocColumn">
<a href="/services/cloud_database/mongodb_log_subscriptions/">mongodb_log_subscriptions</a><br />
<a href="/services/cloud_database/mongodb_maintenances/">mongodb_maintenances</a><br />
<a href="/services/cloud_database/mongodb_metrics/">mongodb_metrics</a><br />
<a href="/services/cloud_database/mongodb_nodes/">mongodb_nodes</a><br />
<a href="/services/cloud_database/mongodb_prometheuses/">mongodb_prometheuses</a><br />
<a href="/services/cloud_database/mongodb_roles/">mongodb_roles</a><br />
<a href="/services/cloud_database/mongodb_users/">mongodb_users</a><br />
<a href="/services/cloud_database/mongodbs/">mongodbs</a><br />
<a href="/services/cloud_database/mysql_backups/">mysql_backups</a><br />
<a href="/services/cloud_database/mysql_capabilities_advanced_configurations/">mysql_capabilities_advanced_configurations</a><br />
<a href="/services/cloud_database/mysql_capabilities_backup_regions/">mysql_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/mysql_capabilities_integrations/">mysql_capabilities_integrations</a><br />
<a href="/services/cloud_database/mysql_certificates/">mysql_certificates</a><br />
<a href="/services/cloud_database/mysql_current_queries/">mysql_current_queries</a><br />
<a href="/services/cloud_database/mysql_databases/">mysql_databases</a><br />
<a href="/services/cloud_database/mysql_integrations/">mysql_integrations</a><br />
<a href="/services/cloud_database/mysql_log_kinds/">mysql_log_kinds</a><br />
<a href="/services/cloud_database/mysql_log_subscriptions/">mysql_log_subscriptions</a><br />
<a href="/services/cloud_database/mysql_maintenances/">mysql_maintenances</a><br />
<a href="/services/cloud_database/mysql_metrics/">mysql_metrics</a><br />
<a href="/services/cloud_database/mysql_migration_checks/">mysql_migration_checks</a><br />
<a href="/services/cloud_database/mysql_migrations/">mysql_migrations</a><br />
<a href="/services/cloud_database/mysql_nodes/">mysql_nodes</a><br />
<a href="/services/cloud_database/mysql_prometheuses/">mysql_prometheuses</a><br />
<a href="/services/cloud_database/mysql_query_statistics/">mysql_query_statistics</a><br />
<a href="/services/cloud_database/mysql_users/">mysql_users</a><br />
<a href="/services/cloud_database/mysqls/">mysqls</a><br />
<a href="/services/cloud_database/opensearch_backups/">opensearch_backups</a><br />
<a href="/services/cloud_database/opensearch_capabilities_advanced_configurations/">opensearch_capabilities_advanced_configurations</a><br />
<a href="/services/cloud_database/opensearch_capabilities_backup_regions/">opensearch_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/opensearch_capabilities_integrations/">opensearch_capabilities_integrations</a><br />
<a href="/services/cloud_database/opensearch_indices/">opensearch_indices</a><br />
<a href="/services/cloud_database/opensearch_integrations/">opensearch_integrations</a><br />
<a href="/services/cloud_database/opensearch_log_kinds/">opensearch_log_kinds</a><br />
<a href="/services/cloud_database/opensearch_log_subscriptions/">opensearch_log_subscriptions</a><br />
<a href="/services/cloud_database/opensearch_maintenances/">opensearch_maintenances</a><br />
<a href="/services/cloud_database/opensearch_metrics/">opensearch_metrics</a><br />
<a href="/services/cloud_database/opensearch_nodes/">opensearch_nodes</a><br />
<a href="/services/cloud_database/opensearch_patterns/">opensearch_patterns</a><br />
<a href="/services/cloud_database/opensearch_permissions/">opensearch_permissions</a><br />
<a href="/services/cloud_database/opensearch_prometheuses/">opensearch_prometheuses</a><br />
<a href="/services/cloud_database/opensearch_users/">opensearch_users</a><br />
<a href="/services/cloud_database/opensearches/">opensearches</a><br />
<a href="/services/cloud_database/postgresql_backups/">postgresql_backups</a><br />
<a href="/services/cloud_database/postgresql_capabilities_advanced_configurations/">postgresql_capabilities_advanced_configurations</a><br />
<a href="/services/cloud_database/postgresql_capabilities_backup_regions/">postgresql_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/postgresql_capabilities_integrations/">postgresql_capabilities_integrations</a><br />
<a href="/services/cloud_database/postgresql_certificates/">postgresql_certificates</a><br />
<a href="/services/cloud_database/postgresql_connection_pools/">postgresql_connection_pools</a><br />
<a href="/services/cloud_database/postgresql_current_queries/">postgresql_current_queries</a><br />
<a href="/services/cloud_database/postgresql_databases/">postgresql_databases</a><br />
<a href="/services/cloud_database/postgresql_integrations/">postgresql_integrations</a><br />
<a href="/services/cloud_database/postgresql_log_kinds/">postgresql_log_kinds</a><br />
<a href="/services/cloud_database/postgresql_log_subscriptions/">postgresql_log_subscriptions</a><br />
<a href="/services/cloud_database/postgresql_maintenances/">postgresql_maintenances</a><br />
<a href="/services/cloud_database/postgresql_metrics/">postgresql_metrics</a><br />
<a href="/services/cloud_database/postgresql_nodes/">postgresql_nodes</a><br />
<a href="/services/cloud_database/postgresql_prometheuses/">postgresql_prometheuses</a><br />
<a href="/services/cloud_database/postgresql_query_statistics/">postgresql_query_statistics</a><br />
<a href="/services/cloud_database/postgresql_roles/">postgresql_roles</a><br />
<a href="/services/cloud_database/postgresql_users/">postgresql_users</a><br />
<a href="/services/cloud_database/postgresqls/">postgresqls</a><br />
<a href="/services/cloud_database/services/">services</a><br />
<a href="/services/cloud_database/valkey_backups/">valkey_backups</a><br />
<a href="/services/cloud_database/valkey_capabilities_advanced_configurations/">valkey_capabilities_advanced_configurations</a><br />
<a href="/services/cloud_database/valkey_capabilities_backup_regions/">valkey_capabilities_backup_regions</a><br />
<a href="/services/cloud_database/valkey_capabilities_categories/">valkey_capabilities_categories</a><br />
<a href="/services/cloud_database/valkey_capabilities_commands/">valkey_capabilities_commands</a><br />
<a href="/services/cloud_database/valkey_capabilities_integrations/">valkey_capabilities_integrations</a><br />
<a href="/services/cloud_database/valkey_integrations/">valkey_integrations</a><br />
<a href="/services/cloud_database/valkey_log_kinds/">valkey_log_kinds</a><br />
<a href="/services/cloud_database/valkey_log_subscriptions/">valkey_log_subscriptions</a><br />
<a href="/services/cloud_database/valkey_maintenances/">valkey_maintenances</a><br />
<a href="/services/cloud_database/valkey_metrics/">valkey_metrics</a><br />
<a href="/services/cloud_database/valkey_nodes/">valkey_nodes</a><br />
<a href="/services/cloud_database/valkey_prometheuses/">valkey_prometheuses</a><br />
<a href="/services/cloud_database/valkey_users/">valkey_users</a><br />
<a href="/services/cloud_database/valkeys/">valkeys</a>
</div>
</div>