import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'invoicing-and-quotes',
  name: 'Invoicing, quotes and GST e-invoicing',
  question: 'How much does it cost to add invoicing and quotes to an app?',
  metaDescription:
    'Cost and effort to add quotes, invoices, GST e-invoicing, payment reminders and accounting sync to a business app, with tiers, cost drivers and alternatives.',
  category: 'ops',
  summary:
    'Quotes and invoices are the documents that turn work into cash, and businesses usually want them generated from the same records that run operations. Producing a branded PDF invoice from an order is a small job. Quote approval flows, GST e-invoicing with IRN generation, credit notes, partial payments, reminders, multi-currency and two-way sync with Tally, Zoho Books or QuickBooks add compliance rules and integration effort.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 36],
      includes: [
        'Branded PDF invoice generated from an order or job with line items and taxes',
        'Sequential invoice numbering that meets GST or local rules',
        'Email delivery with a payment link',
        'Invoice list with paid, unpaid and overdue status',
      ],
    },
    {
      name: 'Standard',
      hours: [36, 90],
      includes: [
        'Everything in Basic',
        'Quotes with versions, expiry dates, customer acceptance and conversion to invoice',
        'Partial payments, advances and credit notes',
        'Automated payment reminders by email and WhatsApp',
        'Customer statements and ageing reports',
        'Export to Tally, Zoho Books, QuickBooks or Xero',
      ],
    },
    {
      name: 'Advanced',
      hours: [90, 200],
      includes: [
        'Everything in Standard',
        'GST e-invoicing with IRN and QR code through the government portal or a GSP',
        'E-way bill generation for goods movement',
        'Multi-entity, multi-currency and TDS handling',
        'Two-way accounting sync with matching of payments and settlements',
        'Approval workflow for discounts and credit limits per customer',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Compliance scope: GST e-invoicing, e-way bills and country-specific invoice rules',
    'Quote workflows with versions, approvals and negotiated pricing',
    'Accounting integration depth, from a simple export to two-way sync',
    'Multiple legal entities, currencies or tax regimes',
    'Credit control features such as limits, holds and dunning',
    'Document design requirements, including multiple templates and languages',
  ],
  cheaperAlternative:
    'Zoho Invoice, Zoho Books, Tally, Vyapar, QuickBooks and Xero all produce compliant invoices, handle GST filing and send reminders. Building invoicing into a custom app is worth it when invoices must be generated automatically from operational data, such as deliveries, bookings or usage, or when customers need a portal to view and pay them.',
  hiddenCosts: [
    'GST Suvidha Provider or e-invoicing API fees per document or per month',
    'Accounting software subscriptions and connector charges',
    'Keeping templates and tax rules current when regulations change',
  ],
  related: ['online-payments', 'pdf-generation', 'subscriptions-and-recurring-billing', 'crm-integration', 'reporting-and-exports'],
  faqs: [
    {
      q: 'Can the app generate GST-compliant e-invoices with an IRN automatically?',
      a: 'Yes. For businesses above the e-invoicing turnover threshold we integrate with the government Invoice Registration Portal through a GST Suvidha Provider such as ClearTax, Masters India or IRIS. The app sends invoice data, receives the IRN and signed QR code, and prints them on the PDF. Cancellation within the allowed window is handled too.',
    },
    {
      q: 'Will invoices from the app match what our accountant sees in Tally?',
      a: 'That is the goal of the accounting sync. Invoices, credit notes and payments are pushed to Tally, Zoho Books or QuickBooks with matching numbers and ledgers, and a reconciliation report highlights anything that differs. We agree the chart of accounts mapping with your accountant before building the sync.',
    },
    {
      q: 'Can customers accept a quote and pay online without calling us?',
      a: 'Yes. Quotes go out with a secure link where the customer reviews line items, accepts with a click or signature, and pays an advance or the full amount through the integrated gateway. Acceptance converts the quote to an order and an invoice, and your team is notified immediately.',
    },
  ],
};
