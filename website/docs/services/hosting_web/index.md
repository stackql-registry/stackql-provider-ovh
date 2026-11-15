---
title: hosting_web
hide_title: false
hide_table_of_contents: false
keywords:
  - hosting_web
  - ovh
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage ovh resources using SQL
custom_edit_url: null
image: /img/stackql-ovh-provider-featured-image.png
---

hosting_web service documentation.

:::info[Service Summary]

total resources: __82__  

:::

## Resources
<div class="row">
<div class="providerDocColumn">
<a href="/services/hosting_web/abuse_states/">abuse_states</a><br />
<a href="/services/hosting_web/attached_domain_dig_statuses/">attached_domain_dig_statuses</a><br />
<a href="/services/hosting_web/attached_domain_ssl_reports/">attached_domain_ssl_reports</a><br />
<a href="/services/hosting_web/attached_domain_ssls/">attached_domain_ssls</a><br />
<a href="/services/hosting_web/attached_domains/">attached_domains</a><br />
<a href="/services/hosting_web/available_configurations/">available_configurations</a><br />
<a href="/services/hosting_web/available_offers/">available_offers</a><br />
<a href="/services/hosting_web/boost_histories/">boost_histories</a><br />
<a href="/services/hosting_web/cdn/">cdn</a><br />
<a href="/services/hosting_web/cdn_available_options/">cdn_available_options</a><br />
<a href="/services/hosting_web/cdn_domain_logs/">cdn_domain_logs</a><br />
<a href="/services/hosting_web/cdn_domain_options/">cdn_domain_options</a><br />
<a href="/services/hosting_web/cdn_domain_statistics/">cdn_domain_statistics</a><br />
<a href="/services/hosting_web/cdn_domains/">cdn_domains</a><br />
<a href="/services/hosting_web/cdn_log_kinds/">cdn_log_kinds</a><br />
<a href="/services/hosting_web/cdn_log_subscriptions/">cdn_log_subscriptions</a><br />
<a href="/services/hosting_web/cdn_operations/">cdn_operations</a><br />
<a href="/services/hosting_web/cdn_service_infos/">cdn_service_infos</a><br />
<a href="/services/hosting_web/configurations/">configurations</a><br />
<a href="/services/hosting_web/cron_available_languages/">cron_available_languages</a><br />
<a href="/services/hosting_web/crons/">crons</a><br />
<a href="/services/hosting_web/database_available_types/">database_available_types</a><br />
<a href="/services/hosting_web/database_available_versions/">database_available_versions</a><br />
<a href="/services/hosting_web/database_capabilities/">database_capabilities</a><br />
<a href="/services/hosting_web/database_copies/">database_copies</a><br />
<a href="/services/hosting_web/database_creation_capabilities/">database_creation_capabilities</a><br />
<a href="/services/hosting_web/database_dumps/">database_dumps</a><br />
<a href="/services/hosting_web/database_metrics_tokens/">database_metrics_tokens</a><br />
<a href="/services/hosting_web/database_statistics/">database_statistics</a><br />
<a href="/services/hosting_web/databases/">databases</a><br />
<a href="/services/hosting_web/dumps/">dumps</a><br />
<a href="/services/hosting_web/email_bounces/">email_bounces</a><br />
<a href="/services/hosting_web/email_option_service_infos/">email_option_service_infos</a><br />
<a href="/services/hosting_web/email_options/">email_options</a><br />
<a href="/services/hosting_web/email_volumes/">email_volumes</a><br />
<a href="/services/hosting_web/emails/">emails</a><br />
<a href="/services/hosting_web/env_vars/">env_vars</a><br />
<a href="/services/hosting_web/extra_sql_perso_databases/">extra_sql_perso_databases</a><br />
<a href="/services/hosting_web/extra_sql_perso_service_infos/">extra_sql_perso_service_infos</a><br />
<a href="/services/hosting_web/extra_sql_persos/">extra_sql_persos</a><br />
<a href="/services/hosting_web/freedoms/">freedoms</a>
</div>
<div class="providerDocColumn">
<a href="/services/hosting_web/hostings/">hostings</a><br />
<a href="/services/hosting_web/incidents/">incidents</a><br />
<a href="/services/hosting_web/indies/">indies</a><br />
<a href="/services/hosting_web/key_sshes/">key_sshes</a><br />
<a href="/services/hosting_web/local_seo_accounts/">local_seo_accounts</a><br />
<a href="/services/hosting_web/local_seo_directories_lists/">local_seo_directories_lists</a><br />
<a href="/services/hosting_web/local_seo_email_availabilities/">local_seo_email_availabilities</a><br />
<a href="/services/hosting_web/local_seo_location_service_infos/">local_seo_location_service_infos</a><br />
<a href="/services/hosting_web/local_seo_locations/">local_seo_locations</a><br />
<a href="/services/hosting_web/local_seo_visibility_check_results/">local_seo_visibility_check_results</a><br />
<a href="/services/hosting_web/log_kinds/">log_kinds</a><br />
<a href="/services/hosting_web/log_subscriptions/">log_subscriptions</a><br />
<a href="/services/hosting_web/metrics_tokens/">metrics_tokens</a><br />
<a href="/services/hosting_web/module_lists/">module_lists</a><br />
<a href="/services/hosting_web/modules/">modules</a><br />
<a href="/services/hosting_web/offer_capabilities/">offer_capabilities</a><br />
<a href="/services/hosting_web/ovh_config_capabilities/">ovh_config_capabilities</a><br />
<a href="/services/hosting_web/ovh_config_recommended_values/">ovh_config_recommended_values</a><br />
<a href="/services/hosting_web/ovh_configs/">ovh_configs</a><br />
<a href="/services/hosting_web/own_logs/">own_logs</a><br />
<a href="/services/hosting_web/own_logs_user_logs/">own_logs_user_logs</a><br />
<a href="/services/hosting_web/private_database_creation_capabilities/">private_database_creation_capabilities</a><br />
<a href="/services/hosting_web/private_databases/">private_databases</a><br />
<a href="/services/hosting_web/runtime_attached_domains/">runtime_attached_domains</a><br />
<a href="/services/hosting_web/runtime_available_types/">runtime_available_types</a><br />
<a href="/services/hosting_web/runtimes/">runtimes</a><br />
<a href="/services/hosting_web/service_infos/">service_infos</a><br />
<a href="/services/hosting_web/ssl_domains/">ssl_domains</a><br />
<a href="/services/hosting_web/ssl_reports/">ssl_reports</a><br />
<a href="/services/hosting_web/ssls/">ssls</a><br />
<a href="/services/hosting_web/statistics/">statistics</a><br />
<a href="/services/hosting_web/tasks/">tasks</a><br />
<a href="/services/hosting_web/tokens/">tokens</a><br />
<a href="/services/hosting_web/user_logs_tokens/">user_logs_tokens</a><br />
<a href="/services/hosting_web/users/">users</a><br />
<a href="/services/hosting_web/vcs_supporteds/">vcs_supporteds</a><br />
<a href="/services/hosting_web/vcs_webhooks/">vcs_webhooks</a><br />
<a href="/services/hosting_web/website_creation_capabilities/">website_creation_capabilities</a><br />
<a href="/services/hosting_web/website_deployment_logs/">website_deployment_logs</a><br />
<a href="/services/hosting_web/website_deployments/">website_deployments</a><br />
<a href="/services/hosting_web/websites/">websites</a>
</div>
</div>