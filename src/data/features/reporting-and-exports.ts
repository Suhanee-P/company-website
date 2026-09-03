import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'reporting-and-exports',
  name: 'Reports, exports and scheduled emails',
  question: 'How much does it cost to add reporting and exports to an app?',
  metaDescription:
    'Cost and effort to add CSV and Excel exports, PDF reports, scheduled email reports and a custom report builder to a business app, with tiers and cost drivers.',
  category: 'data',
  summary:
    'Reports and exports are how data leaves your app for accountants, managers, auditors and customers. A CSV export of a filtered table is one of the cheapest features to add. Formatted Excel and PDF reports, large exports that run in the background, scheduled emails, report templates per customer and a self-serve report builder each require more design, background processing and careful handling of large datasets.',
  tiers: [
    {
      name: 'Basic',
      hours: [10, 24],
      includes: [
        'CSV and Excel export of any list with the current filters applied',
        'Three to five predefined reports such as sales by period or outstanding invoices',
        'Date range and basic filters on each report',
        'Downloads that respect user permissions',
      ],
    },
    {
      name: 'Standard',
      hours: [24, 65],
      includes: [
        'Everything in Basic',
        'Formatted Excel and PDF reports with your branding, totals and subtotals',
        'Background generation for large exports with email or notification when ready',
        'Scheduled daily, weekly or monthly reports emailed to chosen recipients',
        'Report history so previously generated files can be re-downloaded',
        'Export to accounting formats such as Tally XML or QuickBooks IIF',
      ],
    },
    {
      name: 'Advanced',
      hours: [65, 150],
      includes: [
        'Everything in Standard',
        'Self-serve report builder where users pick fields, filters and grouping',
        'Per-customer report templates and white-labelled PDFs',
        'Regulatory or audit reports with fixed formats and sign-off',
        'API and SFTP delivery of exports to partners',
        'Consolidated reports across multiple entities or branches',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Number and complexity of predefined reports, especially those with calculated fields',
    'Formatting requirements: plain CSV is trivial, pixel-perfect PDF is not',
    'Data volume, which forces exports into background jobs with progress tracking',
    'Scheduling and delivery to email, SFTP or partner systems',
    'A self-serve report builder, which is a product in itself',
    'Regulatory formats that must match an external specification exactly',
  ],
  cheaperAlternative:
    'A BI tool such as Metabase or Looker Studio connected to your database provides ad hoc reports, exports and scheduled emails without custom development. Custom reporting is worth it when reports are part of the customer experience, must match a legal format, or need to be generated automatically from workflows.',
  hiddenCosts: [
    'Storage for generated report files and their retention',
    'Email volume when reports go to many recipients',
    'Maintenance whenever the data model or a regulatory format changes',
  ],
  related: ['analytics-dashboard', 'pdf-generation', 'invoicing-and-quotes', 'admin-dashboard', 'data-migration'],
  faqs: [
    {
      q: 'Why does a large export need to run in the background?',
      a: 'Generating a file with hundreds of thousands of rows can take minutes, and a browser request will time out or the user will assume it failed. Background jobs generate the file, store it and notify the user when it is ready. This also protects the database from being tied up by several big exports at once.',
    },
    {
      q: 'Can reports be emailed automatically every Monday to our managers?',
      a: 'Yes. Scheduled reports let you choose the report, filters, format and recipients, and the system generates and sends them on a timetable. Managers get a PDF or Excel file without logging in, and the history screen keeps every sent copy for reference.',
    },
    {
      q: 'Is a self-serve report builder worth the cost?',
      a: 'Only when many users need different views and your team is spending real time producing one-off reports. A builder is a significant investment to design well and can confuse non-technical users. Often a dozen well-chosen predefined reports plus a BI tool for power users is the better spend.',
    },
  ],
};
