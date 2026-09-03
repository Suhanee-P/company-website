import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'pdf-generation',
  name: 'PDF generation (invoices, reports, certificates)',
  question: 'How much does it cost to add PDF generation to an app?',
  metaDescription:
    'Cost to generate branded PDFs such as invoices, quotes, reports and certificates from an app: tiers, HTML-to-PDF versus template engines, fonts and e-invoicing.',
  category: 'ops',
  summary:
    'PDF generation turns data in your app into branded documents such as invoices, quotes, reports, certificates and contracts that can be downloaded, emailed or archived. One template rendered from HTML is a small job. Many templates, long tables, Indian language fonts, digital signatures, compliant e-invoice formats and bulk generation at volume add design and engineering effort.',
  tiers: [
    {
      name: 'Basic',
      hours: [10, 24],
      includes: [
        'One branded template, for example an invoice or receipt, rendered from HTML',
        'Download button and email delivery as an attachment',
        'Correct page breaks, headers and footers with page numbers',
        'Tested output on desktop and mobile viewers',
      ],
    },
    {
      name: 'Standard',
      hours: [24, 60],
      includes: [
        'Everything in Basic',
        'Several templates sharing a design system: quotes, statements, reports, certificates',
        'Dynamic tables, charts and conditional sections',
        'Multi-language output with correct fonts for Indian scripts',
        'Stored copies with secure links and regeneration on data change',
        'Bulk generation, such as monthly statements for all customers',
      ],
    },
    {
      name: 'Advanced',
      hours: [60, 150],
      includes: [
        'Everything in Standard',
        'Asynchronous generation queue for high volumes with progress and retries',
        'Template editor so staff can change wording and layout without a developer',
        'Digital signatures and archival formats such as PDF/A',
        'Compliant e-invoice output, for example GST e-invoice JSON with IRN and signed QR code',
        'Merging, watermarking and password protection',
      ],
    },
  ],
  breakdown: { design: 20, development: 60, qa: 20 },
  costDrivers: [
    'Number and complexity of templates, especially those with long tables and conditional sections',
    'Fonts and scripts, since Hindi, Gujarati and other Indian languages need embedded fonts and careful line breaking',
    'Volume, which decides whether a browser-based renderer is affordable or a lighter engine is needed',
    'Regulatory formats such as GST e-invoicing or European e-invoice standards',
    'Digital signatures and archival requirements',
    'Editable templates for non-technical staff',
  ],
  cheaperAlternative:
    'If your documents are invoices and quotes, the built-in PDFs from Zoho Books, Stripe Invoicing or Razorpay Invoices may be enough. Hosted services such as DocRaptor, PDFMonkey and Documint render templates by API on a subscription and remove hosting concerns. Custom generation is right when documents are part of your product, need your own data and branding, or must meet specific compliance formats.',
  hiddenCosts: [
    'Hosting a headless browser for HTML-to-PDF rendering, which needs memory and adds cold-start time',
    'Commercial rendering library licences if a browser-based approach is too slow at volume',
    'Font licences for commercial typefaces',
    'Storage and retention of generated documents for tax or legal periods',
  ],
  related: ['invoicing-and-quotes', 'reporting-and-exports', 'file-uploads-and-media', 'push-and-email-notifications'],
  faqs: [
    {
      q: 'What is the best way to generate PDFs from a web app?',
      a: 'For most cases, rendering an HTML template with a headless browser such as Playwright or Puppeteer gives the best fidelity and lets designers work in normal CSS. For very high volumes or serverless environments, a template engine such as PDFKit, pdf-lib or a hosted rendering API is lighter. We choose based on your volume and hosting.',
    },
    {
      q: 'Can PDFs be generated in Hindi, Gujarati or other Indian languages?',
      a: 'Yes, provided the right fonts are embedded and the renderer handles complex scripts. Browser-based rendering does this well with fonts such as Noto Sans for each script. Some lightweight PDF libraries do not shape Indic scripts correctly, which is a common cause of broken text, so we test your languages early.',
    },
    {
      q: 'Can you generate GST-compliant e-invoices?',
      a: 'Yes. E-invoicing requires the invoice data in the prescribed JSON schema, registration of the invoice with the Invoice Registration Portal through a GSP or direct API, and printing the returned IRN and signed QR code on the PDF. The PDF itself is the easy part; the registration flow and error handling take most of the effort.',
    },
  ],
};
