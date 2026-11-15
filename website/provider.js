// The only site-local identity the microsite needs. Everything else comes
// from the shared stackql/docusaurus-config, vendored to .shared-config/ at
// build time (see package.json vendor-config).
export const providerName = 'ovh';
export const providerTitle = 'OVHcloud';

// The server variables (api_host, selected by OVH_ENDPOINT; service_name /
// project_id, resolved from OVH_CLOUD_PROJECT_SERVICE) are single-sourced in
// provider-dev/scripts/lib/spec_helpers.mjs; scripts/sanitize-docs.mjs reads
// them from there when it corrects the generated examples.
