import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'document-data-extraction',
  name: 'AI document data extraction',
  question: 'How much does it cost to add AI document data extraction to an app?',
  metaDescription:
    'Cost to extract fields from invoices, IDs, forms and PDFs with OCR and AI, push them into your systems and review exceptions: tiers, accuracy limits and fees.',
  category: 'ai',
  summary:
    'Document data extraction reads PDFs, scans and photos, pulls out the fields you care about and pushes them into your accounting, CRM or operations system, with a review screen for anything the model is unsure about. One document type through a hosted service is quick. Many layouts, handwriting, line-item tables and high volumes need a proper pipeline with confidence thresholds and audit.',
  tiers: [
    {
      name: 'Basic',
      hours: [20, 45],
      includes: [
        'One document type, for example supplier invoices, via a hosted extraction API or a vision-capable model',
        'Mapping of extracted fields to your record structure',
        'Simple review screen showing the document beside the extracted values',
        'Export or push into one destination system',
      ],
    },
    {
      name: 'Standard',
      hours: [45, 120],
      includes: [
        'Everything in Basic',
        'Several document types with automatic classification on upload',
        'Review queue driven by confidence thresholds so only doubtful fields need a person',
        'Corrections captured to improve prompts and templates over time',
        'Validation against master data such as supplier lists, purchase orders or customer records',
        'Duplicate detection and audit log of who approved what',
      ],
    },
    {
      name: 'Advanced',
      hours: [120, 300],
      includes: [
        'Everything in Standard',
        'High-volume asynchronous pipeline with retries, batching and throughput monitoring',
        'Line-item tables, multi-page documents and mixed languages',
        'Custom-trained models for unusual layouts or handwriting where hosted models fall short',
        'Business rules such as three-way matching or tax checks before posting',
        'Reporting on accuracy, exception rates and time saved',
      ],
    },
  ],
  breakdown: { design: 15, development: 55, qa: 30 },
  costDrivers: [
    'Variety of layouts; ten suppliers with ten invoice formats is a different job from one form',
    'Scan quality, photos taken on phones and handwriting, which lower accuracy and raise review effort',
    'Line-item tables and multi-page documents, which are much harder than header fields',
    'Validation rules and matching against other systems before data is accepted',
    'Volume, which decides whether a simple synchronous call is enough or a queue is needed',
    'Accuracy targets, since the last few percent cost more than the first ninety',
  ],
  cheaperAlternative:
    'If you only need invoices and receipts into your accounting software, the built-in capture in Zoho Books, Xero or QuickBooks, or a service like Dext, is the cheapest path. Nanonets, Rossum and Docsumo are strong hosted options for invoices and purchase orders with a review interface included. Custom pipelines make sense when documents are unusual, when extracted data must be validated against your own systems, or when volumes make per-page pricing expensive.',
  hiddenCosts: [
    'Per-page or per-token fees from the OCR or model provider, which scale with volume',
    'Storage and retention of scanned documents, often required for tax or audit',
    'Reviewer time for exceptions, which never reaches zero',
    'Adjustments when suppliers or agencies change their document formats',
  ],
  related: ['ai-workflow-automation', 'file-uploads-and-media', 'invoicing-and-quotes', 'third-party-api-integration', 'ai-chatbot'],
  faqs: [
    {
      q: 'How accurate is AI document extraction?',
      a: 'On clean, typed documents current hosted models read header fields correctly the large majority of the time, and line items somewhat less reliably. Poor scans, stamps over text and handwriting drop accuracy noticeably. We do not promise a number before testing on your real documents, and we design the review queue so that low-confidence fields are always checked by a person.',
    },
    {
      q: 'Do we still need someone to check the documents?',
      a: 'Yes, but far fewer of them. The goal is to remove routine typing and let a person look only at documents the system flags. Over the first months the exception rate usually falls as validation rules and prompts are tuned. Anything that posts to accounts or triggers payments should keep a human approval step.',
    },
    {
      q: 'Can it handle Indian GST invoices, Aadhaar or PAN cards?',
      a: 'Yes for GST invoices and most identity documents, with the usual caveats about scan quality. For identity documents you must also handle consent, masking and storage rules under Indian data protection law, which we build in. For GST e-invoices with a QR code, reading the signed QR payload is more reliable than OCR.',
    },
    {
      q: 'Will our documents be sent to a third-party AI provider?',
      a: 'With hosted models, yes, under the provider\'s data processing terms, which typically exclude training on your data for business accounts. If that is not acceptable, we can run open models on your own cloud account at higher hosting cost. We recommend deciding this early because it shapes the architecture.',
    },
  ],
};
