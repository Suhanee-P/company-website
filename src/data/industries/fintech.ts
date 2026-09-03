import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'fintech',
  name: 'Fintech & Financial Services',
  shortName: 'fintech and financial services companies',
  metaTitle: 'Fintech Software Development Company India | Aresyn',
  metaDescription:
    'Custom software for lenders, NBFCs, advisors and insurers: KYC onboarding, loan origination, collections apps, reconciliation dashboards and client portals.',
  h1: 'Custom software and AI for fintech, lenders and financial services firms',
  intro: [
    'Aresyn builds custom software for lending startups, NBFCs, wealth advisors, insurance agencies and accounting firms: digital onboarding with KYC, loan origination and collections apps, payment reconciliation dashboards, client portals and compliance audit trails. We work on fixed-scope projects or as a part-time engineering team, and we integrate with Razorpay, Setu, Account Aggregator, Tally and the core systems you already run.',
    'Financial services software has a different failure mode from most products: a bug is not an inconvenience, it is a compliance incident or a wrong balance on a customer statement. So the work is as much about audit trails, reconciliation and access control as it is about screens. The systems below are the ones lenders, advisors and finance teams most often ask us for, built with that in mind.',
  ],
  audience: 'founders of lending and payments startups, NBFC operations heads, wealth and insurance advisory firms, CA and accounting practices, and finance teams inside larger businesses',
  challenges: [
    {
      title: 'Onboarding drops off at KYC',
      body: 'Customers abandon when asked to upload documents, retake selfies or wait for manual verification. Each drop-off is a lost loan or account, and each manual check is an operations hour that does not scale with volume.',
    },
    {
      title: 'Collections run on spreadsheets and phone calls',
      body: 'Field agents work from printed lists, payments are confirmed by photo on WhatsApp, and the ledger is updated the next day. Nobody has a live view of who paid, who promised, and which accounts need escalation today.',
    },
    {
      title: 'Reconciliation eats the finance team',
      body: 'Money arrives through gateways, UPI, bank transfers and cash, in different files with different references. Matching them to invoices, EMIs or client accounts happens by hand at month end and errors surface with customers.',
    },
    {
      title: 'Audit evidence is assembled after the fact',
      body: 'When the auditor or regulator asks who changed a limit, approved a loan or exported customer data, the answer is reconstructed from emails. Access is broader than it should be because narrowing it means more manual work.',
    },
  ],
  solutions: [
    {
      name: 'Digital onboarding and KYC',
      body: 'A guided onboarding flow on web and mobile that completes identity checks in minutes with Aadhaar eKYC, PAN and DigiLocker, falls back to video KYC where rules require it, and leaves a complete evidence trail for every account.',
      features: [
        'Aadhaar OTP eKYC, PAN verification and DigiLocker document pull through licensed providers',
        'Liveness check and face match against the ID document',
        'Video KYC scheduling and recording with agent checklist for RBI-compliant flows',
        'Bank account verification by penny drop and Account Aggregator consent for statements',
        'Risk-based routing: straight-through for clean cases, manual review queue for the rest',
        'Full audit record of documents, timestamps, IP and consent per application',
      ],
    },
    {
      name: 'Loan origination and underwriting workflow',
      body: 'An application-to-disbursement pipeline with configurable credit rules, document checks and approvals, so your credit team spends time on judgement calls rather than chasing paperwork.',
      features: [
        'Product configuration: tenure, interest, fees, EMI schedules and pre-closure rules',
        'Rule-based scoring with bureau data from CIBIL, Experian or Equifax',
        'Bank statement analysis from Account Aggregator or uploaded PDFs',
        'Maker-checker approvals with limits per role and deviation logging',
        'e-Sign and e-Stamp for agreements, e-NACH or UPI Autopay mandate setup',
        'Disbursement through payout APIs with status reconciliation',
      ],
    },
    {
      name: 'Collections app and dashboard',
      body: 'A field and tele-collections system with live allocation, promise-to-pay tracking, digital receipts and an office dashboard that shows the current position by bucket, branch and agent.',
      features: [
        'Daily allocation of cases to agents by bucket, area and priority',
        'Agent app with visit logging, geotag, photos and offline queueing',
        'Payment collection by UPI link, QR and card with instant receipts',
        'Promise-to-pay, dispute and legal escalation workflows',
        'Automated reminders by WhatsApp, SMS and IVR before due dates',
        'Bucket movement and agent productivity reports',
      ],
    },
    {
      name: 'Payments and reconciliation dashboard',
      body: 'A ledger layer that pulls settlements from every channel you collect through, matches them to invoices, EMIs or client accounts automatically, and shows finance the exceptions instead of the whole file.',
      features: [
        'Connectors to Razorpay, Cashfree, PayU, bank statements and UPI reports',
        'Automatic matching by reference, amount and date with tolerance rules',
        'Exception queue with suggested matches and one-click resolution',
        'Settlement, fee and GST breakdown per gateway',
        'Posting to Tally, Zoho Books or your core system',
        'Daily cash position and ageing reports',
      ],
    },
    {
      name: 'Client and advisor portal',
      body: 'A secure portal and app where clients of a wealth, insurance or accounting firm see their holdings, policies, documents and filings, and where advisors manage tasks and renewals without email chains.',
      features: [
        'Consolidated view of investments, policies and documents per client',
        'Renewal and SIP reminders with one-tap payment links',
        'Secure document exchange with e-signature',
        'Advisor task board for reviews, filings and follow-ups',
        'Role-based access for family members, partners and staff',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Document verification and data extraction',
      body: 'The model reads bank statements, salary slips, ITRs and GST returns, extracts the figures underwriting needs and flags inconsistencies such as edited PDFs or mismatched names. Reviewers see the extracted data beside the source and confirm exceptions rather than retype everything.',
    },
    {
      name: 'Early risk and fraud signals',
      body: 'Application data, device signals and repayment behaviour feed a model that scores the likelihood of default or first-payment fraud. It supplements, not replaces, your credit policy, and every score is logged with the inputs so it can be explained to an auditor.',
    },
    {
      name: 'Support assistant for balances, statements and EMIs',
      body: 'A WhatsApp and in-app assistant that answers balance, due date, statement and foreclosure questions from live data after verifying the customer, and hands anything involving disputes or hardship to a person. Conversations are logged for compliance review.',
    },
    {
      name: 'Collections prioritisation',
      body: 'The system ranks accounts by probability of recovery and best contact time using your own history, so agents call the right people first. Outreach stays within RBI fair practice rules and contact limits configured by your compliance team.',
    },
  ],
  integrations: [
    'Razorpay, Cashfree, PayU and Stripe for collections and payouts',
    'Setu, Digio, Signzy and HyperVerge for eKYC, video KYC and e-Sign',
    'Account Aggregator (Finvu, OneMoney) and Plaid for bank data',
    'CIBIL, Experian and Equifax bureau APIs',
    'e-NACH, UPI Autopay and BBPS for recurring collection',
    'Tally, Zoho Books, QuickBooks and Xero for accounting',
    'Core lending and CBS platforms via API or scheduled file exchange',
    'WhatsApp Business API, MSG91, Exotel and Twilio for reminders and IVR',
    'CAMS, KFintech and insurer portals for mutual fund and policy data',
  ],
  stackNote:
    'Financial software needs an accurate ledger, strict access control and an audit trail that cannot be edited. We build backends in TypeScript or Python on PostgreSQL with double-entry ledger tables, append-only event logs and row-level permissions, host on AWS or Azure Mumbai regions for data residency, and encrypt personal data at rest with keys managed in a KMS. Web apps are React or Next.js, agent and customer apps are Flutter with offline support, and AI document processing runs in a review-first pipeline so nothing reaches underwriting without a checkpoint. We design for PCI DSS scope reduction by never storing card data ourselves.',
  engagementNote:
    'A collections app or a reconciliation dashboard is typically a 6 to 10 week fixed-scope project. Onboarding and loan origination platforms are delivered in phases, starting with one product and one channel so compliance review happens on something concrete. Most fintech clients keep us on part-time afterwards for new products, regulatory changes and integration work as they add partners.',
  faqs: [
    {
      q: 'Are you familiar with RBI, SEBI and DPDP requirements for software?',
      a: 'We build the controls those frameworks expect from software: consent capture, KYC evidence retention, maker-checker approvals, access logs, data residency in India and encryption of personal data. Your compliance officer or counsel defines which rules apply to your licence, and we implement the technical side of them. We are engineers, not a compliance advisory firm, and we work best alongside one.',
    },
    {
      q: 'Do you store card or bank details?',
      a: 'No. Card data is handled entirely by the payment gateway through tokenisation, so your systems stay out of PCI DSS scope as far as possible. Bank account numbers used for payouts and mandates are stored encrypted with restricted access and masked in every screen and export. We document the data flow so your auditor can see exactly where sensitive fields live.',
    },
    {
      q: 'Can you integrate with our existing loan management system?',
      a: 'Usually, yes. Most LMS and core banking platforms expose APIs, database views or scheduled file exports. We build the onboarding, collections or portal layer beside your system of record, read balances and schedules from it and write back only through the interfaces it supports. Where an API does not exist, a nightly file exchange with reconciliation is a workable fallback.',
    },
    {
      q: 'How do you make AI decisions explainable to auditors?',
      a: 'Every AI-assisted decision stores its inputs, the model version, the score and the human who acted on it. We keep models as decision support with configurable thresholds set by your credit or compliance team, and we prefer simpler, inspectable models for anything that affects approval or pricing. Extraction results always sit beside the source document so a reviewer can verify them.',
    },
    {
      q: 'How long does a digital onboarding and KYC flow take to build?',
      a: 'An onboarding flow with Aadhaar eKYC, PAN check, liveness, bank verification and a review queue, integrated with a KYC provider, is typically live in eight to twelve weeks. Provider onboarding and compliance sign-off often set the pace more than engineering does, so we start those conversations in the first week rather than at the end.',
    },
  ],
  relatedIndustries: ['real-estate', 'professional-services'],
  relatedCostFeatures: ['user-authentication', 'document-data-extraction', 'online-payments', 'role-based-access-control', 'reporting-and-exports', 'whatsapp-business-integration'],
  keywords: [
    'fintech software development company india',
    'loan management software development',
    'custom KYC onboarding software',
    'collections app development for NBFC',
    'payment reconciliation software custom',
    'lending app development company',
    'wealth management client portal development',
  ],
};
