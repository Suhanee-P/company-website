import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'professional-services',
  name: 'Professional Services & Agencies',
  shortName: 'professional services firms',
  metaTitle: 'Custom Software for Law, CA & Consulting Firms | Aresyn',
  metaDescription:
    'Custom software for law firms, CA firms, consultancies and agencies: client portals, matter and project tracking, document automation, proposals and invoicing.',
  h1: 'Custom software and AI for law firms, accountants, consultancies and agencies',
  intro: [
    'Aresyn builds custom software for law firms, chartered accountants, consultancies, marketing agencies and architecture practices: client portals, matter and project tracking with time capture, document automation, proposal and invoicing tools, intake forms and internal knowledge bases. We work on fixed-scope projects or as a part-time engineering team, and we integrate with Zoho, HubSpot, Tally, Google Workspace, Microsoft 365 and DocuSign.',
    'Firms that sell expertise usually run on email, shared drives and a partner\'s memory. Clients ask for status by phone, documents are versioned by filename, time is reconstructed at month end and the proposal for a new client starts from the last one that was close enough. The systems below are built to give the firm a single place for clients, matters and documents without forcing lawyers or accountants into a rigid enterprise tool.',
  ],
  audience: 'managing partners of law and CA firms, founders of consultancies and marketing agencies, principals at architecture and engineering practices, and operations heads at firms with 10 to 200 staff',
  challenges: [
    {
      title: 'Clients cannot see where their matter stands',
      body: 'Status lives in an associate\'s inbox. Clients call the partner, the partner asks the associate, and the answer takes a day. Every call is unbilled time and a small dent in confidence.',
    },
    {
      title: 'Time and expenses are reconstructed at month end',
      body: 'Fee earners log hours from calendar entries and memory days later. Billable work is under-recorded, disputes over invoices are common, and nobody knows the true margin per client or matter.',
    },
    {
      title: 'Documents are versioned by filename',
      body: 'Engagement letters, contracts, filings and reports are drafted from old files with find-and-replace. Errors from a previous client leak in, review comments live in email, and the final version is whichever copy was sent last.',
    },
    {
      title: 'Onboarding new clients is manual',
      body: 'Conflict checks, KYC, engagement terms and intake questionnaires are handled by email and paper. It takes days before work starts, and the information collected is retyped into three systems.',
    },
  ],
  solutions: [
    {
      name: 'Client portal',
      body: 'A secure portal where clients see the status of their matters or projects, upload and download documents, approve work, view invoices and pay, so status questions and document chasing stop landing on the partner\'s phone.',
      features: [
        'Matter or project status with milestones and next actions visible to the client',
        'Secure document exchange with version history and e-signature',
        'Approval requests and comments tied to specific documents',
        'Invoices, statements and online payment',
        'Role-based access for client staff, group companies and outside counsel',
        'Notifications by email and WhatsApp when something needs the client',
      ],
    },
    {
      name: 'Matter, project and time tracking',
      body: 'A work management system shaped to how your firm operates, with matters or projects, tasks, deadlines and time capture that fits into a fee earner\'s day rather than sitting outside it.',
      features: [
        'Matter and project records with parties, deadlines, court or filing dates and responsible staff',
        'Timers, calendar import and mobile time entry with billing codes',
        'Budget versus actual per matter with alerts at thresholds',
        'Task assignment, checklists and workflow templates per practice area',
        'Conflict check across parties and related entities',
        'Utilisation and realisation reports per fee earner and client',
      ],
    },
    {
      name: 'Document automation',
      body: 'Templates for engagement letters, contracts, filings, audit reports and proposals that pull data from the matter record and a short questionnaire, producing a clean, consistent draft in minutes.',
      features: [
        'Template library with clauses, variables and conditional sections',
        'Questionnaire-driven drafting with validation',
        'Word and PDF output with firm branding and numbering',
        'Clause bank with approved language and change tracking',
        'Review workflow with comments and sign-off',
        'e-signature through DocuSign or Zoho Sign',
      ],
    },
    {
      name: 'Proposals, quotes and invoicing',
      body: 'A proposal builder with your service catalogue and pricing rules, linked to invoicing, retainers and recurring billing, so quotes go out the same day and invoices reflect the work actually recorded.',
      features: [
        'Service catalogue with fixed-fee, hourly and retainer pricing',
        'Branded proposals with scope, terms and online acceptance',
        'Invoices from time and expenses, or from milestones, with GST',
        'Retainer balances, recurring invoices and payment reminders',
        'Sync with Tally, Zoho Books or QuickBooks',
      ],
    },
    {
      name: 'Client intake and onboarding',
      body: 'Online intake forms, KYC collection, conflict checks and engagement letter generation joined into one flow, so a new client is set up and ready for work within hours rather than days.',
      features: [
        'Configurable intake questionnaires per service line',
        'Document collection with reminders and status tracking',
        'Automatic conflict search and partner approval',
        'Engagement letter generation and e-signature',
        'Creation of the matter, client record and folder structure on completion',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Drafting assistant grounded in your own precedents',
      body: 'The assistant drafts first versions of clauses, letters and memos from your firm\'s approved templates and precedents, with citations to the source document, and a lawyer or partner reviews every output. It does not draft from the open internet and it does not file anything on its own.',
    },
    {
      name: 'Document summarisation and review support',
      body: 'Long contracts, audit files and court documents are summarised, key dates and obligations are extracted into the matter record, and unusual clauses are flagged against your checklist. Reviewers see the summary beside the original so nothing is taken on trust.',
    },
    {
      name: 'Meeting notes to tasks and time entries',
      body: 'Recorded client calls and meetings are transcribed, summarised and turned into suggested tasks, deadlines and time entries for the fee earner to confirm. It cuts the admin after every call and improves how much billable time is actually captured.',
    },
    {
      name: 'Knowledge base search across the firm',
      body: 'Staff ask questions in plain language and get answers with links to the memos, past matters and internal guides that support them, respecting access rights per matter. New joiners find precedents that used to live only in a senior partner\'s memory.',
    },
  ],
  integrations: [
    'Zoho CRM, Zoho Books and Zoho Sign',
    'HubSpot, Salesforce and Pipedrive for pipeline and client records',
    'Tally, QuickBooks and Xero for accounting',
    'Google Workspace and Microsoft 365 for mail, calendar, documents and single sign-on',
    'DocuSign, Adobe Sign and Aadhaar e-Sign for signatures',
    'Slack and Microsoft Teams for notifications and approvals',
    'Razorpay, Stripe and bank payment links for client payments',
    'SharePoint, Google Drive and Dropbox for document storage',
    'Court, GST and MCA portals through official APIs or scheduled data pulls where available',
  ],
  stackNote:
    'Professional services software mostly handles confidential documents and needs to be trusted by people who are careful by profession. We build these systems as web applications in React or Next.js on a TypeScript backend with PostgreSQL, store documents in encrypted object storage with per-matter access control and full audit logs, and use single sign-on with Google Workspace or Microsoft 365 so there is one identity to manage. AI features run with retrieval over your own precedents and matter files, with access rights enforced at query time, and hosted models are chosen based on your confidentiality requirements, including options that do not retain data.',
  engagementNote:
    'A client portal or a document automation setup for one practice area is typically a 6 to 10 week fixed-scope project. Full matter or project management with time and billing is delivered in phases, starting with one team so the workflow templates are proven before the whole firm moves. Many firms keep us on part-time for new templates, integrations and reports as their practice areas grow.',
  faqs: [
    {
      q: 'Why not just use Clio, Zoho Projects or a practice management SaaS?',
      a: 'If a SaaS tool fits your workflow and pricing, use it, and we will integrate around it. Custom makes sense when your matter structure, billing arrangements or client experience do not fit the tool, when per-seat pricing is high for a large support staff, or when the client portal is part of how you compete. Many of our builds sit beside an existing SaaS rather than replacing it.',
    },
    {
      q: 'How do you keep client documents confidential?',
      a: 'Documents are stored encrypted, access is granted per matter and per role, every view and download is logged, and sign-in uses your Google Workspace or Microsoft 365 identity with two-factor authentication. Hosting can be in India or the region your clients require. For AI features we use models and settings that do not retain your data, and we document the data flow so you can answer client due-diligence questions.',
    },
    {
      q: 'Will fee earners actually record time in a new system?',
      a: 'They will record more of it if capture is nearly automatic. We build timers into the matter screens, import calendar events and emails as suggested entries, allow entry from a phone, and use the meeting-notes assistant to propose entries after calls. Partners see under-recording by person and week, which tends to fix the rest.',
    },
    {
      q: 'Can AI draft legal or audit documents safely?',
      a: 'It can draft, not decide. The assistant works only from your approved templates and precedents, cites what it used, and produces a version for a qualified person to review and sign off. We log every generation and the reviewer\'s edits. Firms typically start with low-risk documents such as engagement letters and internal memos and expand as they gain confidence.',
    },
    {
      q: 'How long does a client portal take to build?',
      a: 'A client portal with matter status, secure document exchange, approvals, invoices and online payment, connected to your existing practice or accounting software, is typically live with a first group of clients in six to ten weeks. We start with the two or three things clients email you about most, and add the rest once those are working smoothly.',
    },
  ],
  relatedIndustries: ['fintech', 'real-estate', 'education'],
  relatedCostFeatures: ['user-authentication', 'file-uploads-and-media', 'pdf-generation', 'invoicing-and-quotes', 'crm-integration', 'ai-workflow-automation'],
  keywords: [
    'client portal development for law firms',
    'custom software for CA firms india',
    'practice management software development',
    'document automation software custom',
    'agency project management software custom',
    'legal tech development company india',
    'time tracking and billing software development',
  ],
};
