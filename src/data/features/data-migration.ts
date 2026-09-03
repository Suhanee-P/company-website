import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'data-migration',
  name: 'Data migration from an existing system',
  question: 'How much does it cost to migrate data from an old system to a new app?',
  metaDescription:
    'Cost to move customers, orders, records and files from spreadsheets, a legacy database or another SaaS into a new app, with tiers, risks and hidden costs.',
  category: 'data',
  summary:
    'Data migration covers extracting records from the old system, cleaning and mapping them to the new structure, loading them, and proving nothing was lost. A one-off import from tidy spreadsheets is small. Migrating years of related records, attachments and history from a legacy database, with a live cutover and no downtime, is a project in its own right.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 40],
      includes: [
        'One-off import from CSV or Excel exports into the new schema',
        'Cleaning of obvious issues: duplicates, formatting, missing required fields',
        'Validation report listing rows that could not be imported and why',
        'A second import run after you correct the source data',
      ],
    },
    {
      name: 'Standard',
      hours: [40, 120],
      includes: [
        'Everything in Basic',
        'Extraction from a legacy database or SaaS export with related tables (customers, orders, items)',
        'Mapping document and transformation scripts you can re-run',
        'Deduplication rules and ID mapping so old references still resolve',
        'Dry runs on a staging copy and a rollback plan',
        'Migration of attachments and images to new storage',
      ],
    },
    {
      name: 'Advanced',
      hours: [120, 350],
      includes: [
        'Everything in Standard',
        'Multiple source systems merged into one, with survivorship rules for conflicts',
        'Live cutover with a delta sync so the business keeps working until the switch',
        'Reconciliation reports comparing totals, counts and balances between systems',
        'Parallel run period with both systems and a sign-off checklist',
        'Archiving of history that is not migrated, in a searchable form',
      ],
    },
  ],
  breakdown: { design: 5, development: 60, qa: 35 },
  costDrivers: [
    'How clean the source data is; most migration time goes into cleaning, not moving',
    'Number of related record types and how well the old IDs are preserved',
    'Whether the business can pause for a cutover window or needs a live switch',
    'Attachments, images and documents, which are slow to move and easy to lose',
    'Access to the old system: a database dump is easy, a locked SaaS with export limits is not',
    'Financial data that must reconcile to the rupee or cent against old reports',
  ],
  cheaperAlternative:
    'Moving between two mainstream SaaS tools, such as one CRM to another, is often covered by the destination vendor\'s own import tools or by services like Import2 and Trujay. For spreadsheet imports that users will repeat, an embeddable importer such as Flatfile or OneSchema costs less than building a custom import screen. Custom migration work is needed when the source is a bespoke or legacy system, when relationships between records matter, or when the business cannot stop during the move.',
  hiddenCosts: [
    'Keeping the old system licensed and accessible during parallel running and for a period after',
    'Staff time to check samples and sign off on the migrated data',
    'Storage for archived history and migrated files',
    'A second migration round when users discover missing data after go-live',
  ],
  related: ['third-party-api-integration', 'crm-integration', 'file-uploads-and-media', 'reporting-and-exports'],
  faqs: [
    {
      q: 'Why is data migration so often underestimated?',
      a: 'Because the moving part is easy and the cleaning part is invisible until you start. Old systems accumulate duplicates, free-text fields used for three different purposes, orphaned records and dates in five formats. Each has to be decided on, not just copied. We run a small extraction early so the surprises appear in the estimate rather than in the last week.',
    },
    {
      q: 'Will we need downtime for the migration?',
      a: 'For a small system, a planned window of a few hours over a weekend is the simplest and cheapest option. If the business runs around the clock, we do a bulk load first and then a delta sync of changes made since, so the final switch takes minutes. That approach costs more engineering time but avoids stopping operations.',
    },
    {
      q: 'What if some data cannot be mapped to the new system?',
      a: 'It happens with almost every migration. We list the fields with no home early and you decide whether to add fields, store them as notes, or archive them. History that is rarely needed can be kept in a read-only archive with search rather than forced into the new app.',
    },
    {
      q: 'How do we know nothing was lost?',
      a: 'With reconciliation reports rather than trust. We compare record counts per type, sum financial totals, spot-check samples chosen by your team, and keep an ID map from old to new. Sign-off happens against those reports before the old system is switched off.',
    },
  ],
};
