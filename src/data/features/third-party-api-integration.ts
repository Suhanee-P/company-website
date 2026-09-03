import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'third-party-api-integration',
  name: 'Third-party API integration',
  question: 'How much does it cost to integrate a third-party API into an app?',
  metaDescription:
    'Cost to connect an app to an external API such as Shopify, Razorpay or a carrier: effort tiers, cost drivers, hidden fees and when no-code tools are enough.',
  category: 'integrations',
  summary:
    'Integrating a third-party API means authenticating with the other system, mapping its data to yours, handling errors and rate limits, and keeping the two in step over time. Pulling data from one well-documented API is quick. Two-way sync, per-customer OAuth and systems with poor documentation or sandbox access take considerably longer and need more testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [12, 30],
      includes: [
        'One-way read from a single documented REST API (for example exchange rates, weather, a product feed)',
        'API key authentication and secure credential storage',
        'Error handling, timeouts and simple caching',
        'Display of the fetched data in your app',
      ],
    },
    {
      name: 'Standard',
      hours: [30, 80],
      includes: [
        'Everything in Basic',
        'Two-way sync with one system, for example orders from Shopify or contacts to a CRM',
        'Webhook receiver with signature verification and idempotency',
        'Retry queue for failed calls and alerting when the integration breaks',
        'Admin screen showing sync status and recent errors',
      ],
    },
    {
      name: 'Advanced',
      hours: [80, 200],
      includes: [
        'Everything in Standard',
        'Multiple systems with a shared mapping layer and configurable field mappings',
        'Per-customer OAuth connections for multi-tenant SaaS products',
        'Rate-limit aware scheduling and backfill of historical data',
        'Reconciliation reports that show what differs between systems',
        'Versioned adapters so vendor API changes do not break your app',
      ],
    },
  ],
  breakdown: { design: 10, development: 65, qa: 25 },
  costDrivers: [
    'Quality of the vendor\'s documentation and whether a sandbox account is available',
    'Authentication model: a static key is simple, OAuth with refresh tokens and scopes is not',
    'Two-way sync, which needs conflict rules for records edited on both sides',
    'Data volume and rate limits that force batching, queues and backfill jobs',
    'Undocumented behaviour discovered only in testing, common with older or regional providers',
    'Partner review processes such as Shopify app review or Salesforce security review',
  ],
  cheaperAlternative:
    'For low-volume, non-critical automations such as "new form entry creates a CRM contact", Zapier, Make or self-hosted n8n will do the job in an afternoon with no code. If you need to support many CRMs or accounting tools at once, unified API services like Merge or Nango cover dozens of vendors behind one interface. Custom integration is worth it when volume is high, latency matters, data is sensitive or the workflow is specific to your business.',
  hiddenCosts: [
    'Usage fees on the vendor side, often tiered by requests or records',
    'App review and partner programme requirements before you can go live with some platforms',
    'Vendor API deprecations, which typically require work every one to two years',
    'Monitoring and on-call attention, because integrations fail silently without it',
  ],
  related: ['crm-integration', 'whatsapp-business-integration', 'online-payments', 'data-migration', 'ai-workflow-automation'],
  faqs: [
    {
      q: 'Why do some API integrations take a week and others take months?',
      a: 'The difference is rarely the code that calls the API. It is authentication, data mapping, error handling and the edge cases you find in real data. A read-only feed from a well-documented provider is a few days. A two-way sync with a system that has custom fields, rate limits and no sandbox can take months because every mismatch has to be reconciled.',
    },
    {
      q: 'Should we use Zapier instead of a custom integration?',
      a: 'Use Zapier or Make when the automation is simple, volumes are modest and a delay of a few minutes is acceptable. Move to custom code when you need real-time behaviour, complex mapping, handling of thousands of records a day, or an audit trail. Many clients start with Zapier and replace the busiest flows later.',
    },
    {
      q: 'What happens when the vendor changes their API?',
      a: 'Most vendors announce deprecations months ahead and support old versions for a while. We build integrations behind a small adapter layer so a version change touches one module, and we set up monitoring that alerts you when responses change shape. Budget for a few hours of maintenance per integration per year.',
    },
    {
      q: 'Can you integrate with a system that has no API?',
      a: 'Sometimes. Options include scheduled CSV or SFTP exports, database-level access, email parsing or, as a last resort, browser automation. Each is more fragile than a proper API, so we scope it honestly and recommend pushing the vendor for API access where that is possible.',
    },
  ],
};
