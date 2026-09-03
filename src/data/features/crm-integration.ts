import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'crm-integration',
  name: 'CRM integration (HubSpot, Zoho, Salesforce)',
  question: 'How much does it cost to integrate a CRM like HubSpot, Zoho or Salesforce with your app?',
  metaDescription:
    'Cost to connect your app to HubSpot, Zoho CRM or Salesforce: lead push, two-way contact and deal sync, activity logging, per-customer OAuth and API limits.',
  category: 'integrations',
  summary:
    'CRM integration moves leads, contacts, companies and deals between your app and your sales team\'s CRM so nobody re-types data and sales sees what customers do in the product. Pushing new leads one way is a small job. Two-way sync of several objects, activity logging and per-customer connections for a SaaS product take considerably more work and ongoing care.',
  tiers: [
    {
      name: 'Basic',
      hours: [12, 30],
      includes: [
        'One-way push of new leads or sign-ups from your app or website forms',
        'Duplicate check by email before creating a contact',
        'Source, campaign and tag fields set on each record',
        'Error alerts when a push fails',
      ],
    },
    {
      name: 'Standard',
      hours: [30, 80],
      includes: [
        'Everything in Basic',
        'Two-way sync of contacts, companies and deals with webhooks for changes',
        'Configurable field mapping between your data model and CRM properties',
        'Product activity logged as timeline events, such as trial started or invoice paid',
        'Retry queue, rate-limit handling and a sync status screen',
      ],
    },
    {
      name: 'Advanced',
      hours: [80, 200],
      includes: [
        'Everything in Standard',
        'Per-customer OAuth so each of your customers connects their own CRM',
        'Custom objects and multi-object sync with conflict rules',
        'Embedded cards or widgets inside the CRM showing data from your app',
        'Historical backfill and monitoring dashboard',
        'Marketplace listing and security review for HubSpot, Zoho or Salesforce app stores',
      ],
    },
  ],
  breakdown: { design: 10, development: 65, qa: 25 },
  costDrivers: [
    'Direction of sync; one-way is simple, two-way needs conflict rules and change tracking',
    'Number of object types and custom fields, each of which has to be mapped and tested',
    'The CRM itself, since Salesforce configuration and API limits take longer than HubSpot or Zoho',
    'Multi-tenant needs where every customer connects their own CRM account',
    'Marketplace listing requirements, which add review cycles and documentation',
    'Volume and API rate limits that force batching and scheduling',
  ],
  cheaperAlternative:
    'Most CRMs have native form and website integrations that capture leads without any code, and Zapier or Make can push records for simple cases. If your product must support many different CRMs, unified API services such as Merge or Nango give you one integration that covers dozens. Custom integration is the right call for two-way sync, activity logging or when the CRM is central to how your business runs.',
  hiddenCosts: [
    'API access tiers: Salesforce API call limits depend on edition, and HubSpot API limits rise with paid plans',
    'Sandbox or developer licences for testing',
    'Marketplace review and periodic re-certification if you list an app',
    'Maintenance when the CRM changes its API or your team adds custom fields',
  ],
  related: ['third-party-api-integration', 'data-migration', 'push-and-email-notifications', 'whatsapp-business-integration', 'analytics-dashboard'],
  faqs: [
    {
      q: 'Which CRM is easiest to integrate with?',
      a: 'HubSpot has the most approachable API and generous free tier, and Zoho CRM is straightforward and popular with Indian businesses. Salesforce is the most powerful and the most work, with its own query language, object model and edition-dependent API limits. The effort difference between HubSpot and Salesforce for the same feature can be double.',
    },
    {
      q: 'Can sales see what customers do in our product from inside the CRM?',
      a: 'Yes, and this is often the most valuable part. Events such as sign-up, trial started, feature used or invoice overdue are written to the contact timeline in the CRM, so sales and support have the full picture without switching tools. Lists and automations in the CRM can then trigger from those events.',
    },
    {
      q: 'What happens if the same contact is edited in both systems?',
      a: 'We agree conflict rules up front: usually the CRM owns sales fields such as owner and stage, and your app owns product fields such as plan and usage. Where both may edit a field, the most recent change wins and the previous value is kept in a log. Clear ownership avoids most conflicts entirely.',
    },
  ],
};
