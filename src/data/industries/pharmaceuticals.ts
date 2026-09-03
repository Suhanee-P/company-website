import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'pharmaceuticals',
  name: 'Pharmaceuticals',
  shortName: 'pharmaceutical companies',
  metaTitle: 'Pharma Software Development Company | Aresyn',
  metaDescription:
    'Custom pharma software: medical rep field apps, distributor ordering portals, batch traceability, 3D product showcases for expos and AI complaint triage.',
  h1: 'Custom software and AI for pharmaceutical companies',
  intro: [
    'Aresyn builds custom software for pharmaceutical manufacturers, distributors, contract manufacturers and their sales teams: medical representative field apps, distributor and stockist ordering portals, batch and expiry traceability, interactive product showcases for expos and doctor visits, pharmacovigilance intake and AI that triages complaints and literature. We work on fixed-scope projects or as a part-time engineering team, with audit trails and validation documents where regulated processes require them.',
    'Pharma companies tend to have a validated ERP at the centre and a ring of spreadsheets, WhatsApp groups and printed visual aids around it. Reps report calls by hand at the end of the day, stockists order by phone, a batch recall means searching invoices, and the expo stand shows a PDF on a television. The systems below replace that ring without touching the validated core unless you want them to.',
  ],
  audience: 'formulation and API manufacturers, contract development and manufacturing organisations, distributors and stockists, marketing and field-force teams, and quality and pharmacovigilance departments',
  challenges: [
    {
      title: 'Field force reporting is late and hard to verify',
      body: 'Daily call reports are filled in from memory on the way home. Managers cannot see doctor coverage or sample distribution until the month closes, and the visual aids on a rep\'s tablet may be a version compliance retired last quarter.',
    },
    {
      title: 'Distributor ordering runs on phone calls',
      body: 'Stockists call the CFA or the area manager to place orders, ask about schemes and check outstanding credit. Orders are keyed into the ERP by hand, errors are found at dispatch, and nobody has a clean view of secondary sales.',
    },
    {
      title: 'Traceability stops at the invoice',
      body: 'Batch numbers are on the invoice, but where a batch went after the distributor is anybody\'s guess. A recall or a near-expiry return becomes a week of phone calls, and export tracing requirements add another spreadsheet.',
    },
    {
      title: 'Product information is static and hard to control',
      body: 'Brochures, visual aids and expo content are PDFs with no version control. Approved claims change, the old file keeps circulating, and there is no record of what a doctor or a visitor actually saw.',
    },
  ],
  solutions: [
    {
      name: 'Medical representative field app',
      body: 'A phone app for reps that plans the day, records visits with location, presents approved e-detailing content and captures samples and expenses, with manager dashboards that show coverage as it happens rather than at month end.',
      features: [
        'Daily call planning with doctor, chemist and hospital lists by territory',
        'Check-in with location and visit notes that work offline inside hospitals',
        'e-Detailing with approved visual aids under version control',
        'Sample and input issue tracking with doctor acknowledgement',
        'Expense claims with receipts and manager approval',
        'Manager dashboards for coverage, call frequency and productivity',
      ],
    },
    {
      name: 'Distributor and stockist ordering portal',
      body: 'A web and mobile portal where stockists see products, schemes, credit and order status, place orders that flow straight into your ERP, and upload their secondary sales so you can see the market beyond the primary invoice.',
      features: [
        'Product catalogue with schemes, MRP, price to stockist and price to retailer by state',
        'Order placement with credit limit and outstanding checks before confirmation',
        'Invoice, dispatch and e-way bill status visible to the stockist',
        'Claims and returns with photo evidence and approval flow',
        'Secondary sales upload from stockist software such as Marg or Busy',
        'Two-way sync with SAP, Oracle, Microsoft Dynamics or Tally',
      ],
    },
    {
      name: 'Batch, expiry and recall traceability',
      body: 'Batch-level visibility from plant to CFA to stockist, with near-expiry alerts, serialisation support and a recall view that lists every consignment for a batch in minutes instead of days.',
      features: [
        'Batch-level stock from plant to CFA to stockist with expiry dates',
        'Serialisation and barcode support aligned with GS1 standards and DGFT iVEDA export tracing',
        'Near-expiry alerts and return authorisation workflows',
        'Recall simulation that lists every consignment and contact for a batch',
        'Temperature and cold-chain logs from IoT data loggers for biologics and vaccines',
        'Immutable audit trail of stock movements for inspections',
      ],
    },
    {
      name: 'Interactive product showcase and expo experience',
      body: 'Browser-based 3D visualisations of products, formulations and mechanisms of action that run on stand screens, tablets and doctor-facing microsites, with approved content under version control and lead capture built in.',
      features: [
        'Web-based 3D product and mechanism-of-action visualisations for stand screens and tablets',
        'Touch-friendly navigation with visitor lead capture at the stand',
        'Approved-content library with version numbers and expiry dates for every asset',
        'Offline mode for exhibition venues with poor connectivity',
        'Doctor-facing microsites with references and prescribing information',
        'Analytics on which content was viewed, by whom and for how long',
      ],
    },
    {
      name: 'Pharmacovigilance and quality intake',
      body: 'Structured intake for adverse events and product complaints from reps, call centres and the web, routed with timelines that match your SOPs, with electronic signatures and audit trails where regulations require them.',
      features: [
        'Adverse event intake forms for reps, call centres and web with mandatory fields',
        'Case routing and timelines aligned with your standard operating procedures',
        'Product complaint logging linked to batch numbers and stock records',
        'CAPA tracking with owners, due dates and evidence',
        'Electronic signatures and audit trails where 21 CFR Part 11 style controls apply',
        'Exports for regulator submissions and periodic safety reports',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Complaint and adverse event triage',
      body: 'Incoming reports from email, calls and forms are classified, and the product, batch, event and seriousness are extracted into a draft case for the pharmacovigilance team to confirm. Nothing is submitted to a regulator without a qualified person\'s review.',
    },
    {
      name: 'Literature and signal monitoring',
      body: 'Journals, PubMed and public safety databases are screened for mentions of your molecules and adverse events, and a short summary with sources is prepared for the safety team each week.',
    },
    {
      name: 'Rep coaching and next-best-visit suggestions',
      body: 'Coverage gaps, prescription trends and call history are combined into a suggested visit plan for each rep, with the reasoning shown so managers can accept, edit or ignore it.',
    },
    {
      name: 'Document extraction for secondary sales and invoices',
      body: 'Stockist statements, invoices and claim documents in PDF or photo form are read into structured data and matched to your records, with low-confidence fields flagged for a person to check.',
    },
  ],
  integrations: [
    'ERP and accounting (SAP, Oracle, Microsoft Dynamics, Tally, Marg, Busy)',
    'CRM and field-force tools (Salesforce, Veeva, Zoho CRM) where already in use',
    'Stockist and secondary sales formats (Marg, Busy, distributor CSV exports)',
    'GST e-invoicing and e-way bill APIs in India',
    'Serialisation and tracing (GS1 barcodes, DGFT iVEDA for exports)',
    'Cold-chain sensors and IoT gateways (Bluetooth and LoRa data loggers)',
    'Regulatory reference data (CDSCO SUGAM portal, MedDRA dictionaries for safety coding)',
    'Messaging (WhatsApp Business API, MSG91, SendGrid)',
    'Learning and content platforms for continuing medical education',
  ],
  stackNote:
    'Pharma systems sit next to validated ones, so we keep clear boundaries: a TypeScript or Python backend with PostgreSQL, immutable audit logs, versioned content and role-based access, integrated with your ERP through its supported interfaces rather than direct database writes. Field apps are built in Flutter or React Native with offline sync for hospitals and rural territories. Interactive and 3D showcases use Three.js and WebGL in the browser so they run on stand screens without installation. Where 21 CFR Part 11 or Schedule M controls apply, we deliver validation documentation alongside the code.',
  engagementNote:
    'A field-force app or a distributor portal is typically an 8 to 12 week fixed-scope project, often started with a single division or region. Traceability and pharmacovigilance modules follow in phases with their own validation. Companies usually keep us on part-time for scheme changes, new divisions and content updates before the next expo season.',
  faqs: [
    {
      q: 'Do you provide validation documentation such as URS, IQ, OQ and PQ?',
      a: 'Yes, when the system supports a regulated process. We write the user requirement specification with your team, produce functional and design specifications, test scripts and a traceability matrix, and support execution of installation, operational and performance qualification. Your quality team owns approval; we make the evidence easy to produce.',
    },
    {
      q: 'Can reps use the app without internet inside hospitals?',
      a: 'Yes. Call plans, doctor lists and visual aids are downloaded in advance, visits and notes are saved on the device, and everything syncs when the rep is back on a network. Managers see a pending-sync state rather than missing data, and content updates are pushed the next time the app connects.',
    },
    {
      q: 'Can the ordering portal show state-wise schemes and stockist pricing?',
      a: 'Yes. Schemes, price to stockist, price to retailer and MRP are maintained per product, per state and per period, and the portal shows each stockist only what applies to them. Credit limits and outstanding balances come from your ERP so an order is checked before it is confirmed.',
    },
    {
      q: 'Can you build a 3D product showcase for our expo stand?',
      a: 'Yes. We build browser-based interactive and 3D experiences that run on stand screens and tablets without installation, work offline at the venue and capture visitor details for follow-up. Approved content is versioned so the stand never shows a retired claim. See the Vimsonderma Pharmaceuticals case study on this site for an example.',
    },
    {
      q: 'How do you protect adverse event and patient data?',
      a: 'Case data is encrypted at rest and in transit, access is limited by role and logged, retention follows your SOPs, and hosting stays in the region your policies require. AI triage runs on hosted models configured so case data is not retained or used for training, and every extracted field is reviewed before it enters the case record.',
    },
  ],
  relatedIndustries: ['healthcare-and-wellness', 'manufacturing', 'logistics-and-shipping'],
  relatedWork: ['vimsonderma-3d-expo-website'],
  relatedCostFeatures: ['offline-mode', 'barcode-and-qr-scanning', 'third-party-api-integration', 'document-data-extraction', 'role-based-access-control', 'reporting-and-exports'],
  keywords: [
    'pharma software development company',
    'medical representative app development',
    'pharma distributor ordering portal',
    'batch traceability software for pharma',
    'custom pharmacovigilance software',
    '3D product visualisation for pharma expo',
    'pharma field force automation app india',
  ],
};
