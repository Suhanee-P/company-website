import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'real-estate',
  name: 'Real Estate',
  shortName: 'real estate companies',
  metaTitle: 'Custom Real Estate Software Development | Aresyn',
  metaDescription:
    'Custom software for real estate companies: listing portals, agent CRM, site-visit scheduling, developer sales dashboards and AI lead qualification.',
  h1: 'Custom software and AI for real estate companies',
  intro: [
    'Aresyn builds custom software for real estate brokerages, developers, property managers and proptech founders: listing portals, agent CRMs, site-visit scheduling, developer sales and inventory dashboards, tenant and society management tools, and AI that qualifies leads and reads property documents. We work on fixed-scope projects or as a part-time engineering team, and we integrate with the portals, payment gateways and accounting systems you already use.',
    'Real estate runs on leads, site visits and paperwork, and most of that still lives in WhatsApp, Excel and a portal login somebody shares. Leads from 99acres and MagicBricks go cold because nobody called within the hour, unit availability is a phone call to the sales office, and the same buyer details are typed into three systems before a booking is confirmed. The systems below are built to close those gaps.',
  ],
  audience: 'brokerages and channel partners, residential and commercial developers, property and society managers, co-living and rental operators, and proptech founders',
  challenges: [
    {
      title: 'Leads go cold before anyone calls',
      body: 'Enquiries arrive from 99acres, MagicBricks, Housing.com, Facebook lead ads and the website into five different inboxes. Nobody owns the lead, the first call happens the next day, and by then the buyer has spoken to three other brokers.',
    },
    {
      title: 'Nobody knows what is actually available',
      body: 'Unit status for a project lives in the sales head\'s spreadsheet. Channel partners quote from last month\'s price sheet, two executives block the same flat, and the buyer finds out at the booking desk that the unit is gone.',
    },
    {
      title: 'Site visits and follow-ups run from memory',
      body: 'Visits are scheduled over calls, no-shows are not tracked, and follow-up depends on which executive remembers. When a salesperson leaves, the pipeline leaves with their phone.',
    },
    {
      title: 'Documents and compliance are manual',
      body: 'KYC, cost sheets, allotment letters, agreements, demand letters and RERA disclosures are prepared by hand from templates. Finding every document for one buyer means searching email, and errors in a payment schedule become disputes.',
    },
  ],
  solutions: [
    {
      name: 'Property listing portal and website',
      body: 'A fast, search-friendly website or portal where buyers and tenants find projects and units, take virtual tours and enquire, with listings syndicated to the portals you already pay for. Locality and project pages are generated from your data so they are found in search.',
      features: [
        'Map and list search with filters for budget, configuration, possession status and amenities',
        'Project and unit pages with floor plans, price sheets, brochures and virtual tours',
        'Enquiry capture routed to the right executive by project or locality',
        'Feed syndication to 99acres, MagicBricks, Housing.com, Zillow or Rightmove',
        'Locality and project pages built from structured data for search visibility',
        'Content and pricing editable by your marketing team without a developer',
      ],
    },
    {
      name: 'Agent CRM and lead management',
      body: 'One queue for every lead from every source, with assignment rules, response-time alerts and follow-up cadences, so leads are called within minutes and nothing depends on a single salesperson\'s phone.',
      features: [
        'Lead capture from portals, Facebook and Google lead forms, website and walk-ins into one queue',
        'Round-robin or territory assignment with response-time alerts and escalation',
        'Follow-up cadences with call, WhatsApp and email logging against each lead',
        'Pipeline stages from enquiry to site visit to booking, with reasons for loss',
        'Channel partner portal for lead registration, de-duplication and commission tracking',
        'Click-to-call and call recording through Exotel, Knowlarity or Twilio',
      ],
    },
    {
      name: 'Developer sales and inventory dashboard',
      body: 'A live tower-and-floor view of every unit with its status, price and payment position, shared by the sales team, channel partners and management so the same flat is never sold twice and cost sheets are always current.',
      features: [
        'Interactive tower and floor inventory with unit status: available, blocked, booked, sold',
        'Price sheets with floor rise, preferential location charges and scheme rules applied automatically',
        'Cost sheet generator and booking form with KYC capture and e-sign',
        'Payment schedules, demand letters and receipts linked to construction milestones',
        'Sales and channel partner performance by project, source and executive',
        'Collections dashboard with overdue alerts and reminders',
      ],
    },
    {
      name: 'Site-visit scheduling and buyer app',
      body: 'Self-service visit booking with reminders and cab coordination for prospects, and a post-booking portal for buyers that answers payment, document and construction questions without a call to the sales office.',
      features: [
        'Visit booking with slot capacity per project and executive',
        'WhatsApp and SMS reminders, directions and pickup coordination',
        'Check-in at the site with feedback captured by the executive',
        'Buyer portal after booking: payment status, receipts, documents and construction updates',
        'Referral programme for existing buyers with tracking and rewards',
        'No-show tracking and re-engagement flows',
      ],
    },
    {
      name: 'Property management and society app',
      body: 'Tenant, owner and resident management for rental operators, housing societies and commercial buildings, with online collections, maintenance tickets and communication in one place.',
      features: [
        'Tenant and owner records with lease dates, deposits, renewals and escalations',
        'Rent and maintenance collection with UPI, cards and automatic reminders',
        'Maintenance tickets with vendor assignment, photos and resident feedback',
        'Visitor and gate management for gated communities',
        'Notices, polls, meeting minutes and document sharing for residents',
        'Accounting exports to Tally or Zoho Books',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Lead qualification and instant first response',
      body: 'An assistant replies to portal and website enquiries within seconds on WhatsApp or email, asks about budget, preferred locality, configuration and timeline, scores the lead and books a call with the right executive. Anything outside its script goes straight to a person.',
    },
    {
      name: 'Document extraction for KYC and title papers',
      body: 'A pipeline reads PAN and Aadhaar images, sale deeds, index II extracts and encumbrance certificates, pulls out names, survey numbers and dates, and flags mismatches against the booking. Staff review only the exceptions.',
    },
    {
      name: 'Pricing and valuation suggestions',
      body: 'A model trained on your own transactions plus public registry and portal data suggests a listing or offer price for a unit and explains which comparables drove the number, so your team stays in control of the final figure.',
    },
    {
      name: 'Listing descriptions and photo checks',
      body: 'Draft listing copy is generated from unit specifications in your house style, and photos are checked for missing rooms, poor lighting or duplicates before a listing goes live.',
    },
  ],
  integrations: [
    'Property portals (99acres, MagicBricks, Housing.com, Zillow, Rightmove, Zoopla)',
    'Lead sources (Facebook Lead Ads, Google Ads lead forms, Instagram, website forms)',
    'Telephony and WhatsApp (Exotel, Knowlarity, Twilio, WhatsApp Business API)',
    'Payments (Razorpay, PayU, Stripe, UPI collect and auto-debit mandates)',
    'eKYC and e-sign (DigiLocker, Aadhaar eKYC, Digio, Leegality, DocuSign)',
    'Virtual tours and maps (Matterport, Google Maps Platform, Mapbox)',
    'Accounting and ERP (Tally, Zoho Books, SAP, Farvision)',
    'CRM (Salesforce, Zoho CRM, HubSpot) where you want to keep an existing system',
    'MLS and IDX feeds for international brokerages',
  ],
  stackNote:
    'Real estate websites are search-heavy and need to be found in search engines, so we build them in Next.js with server-rendered project and locality pages, PostgreSQL with PostGIS for location queries and Meilisearch or Elasticsearch for fast filtering. CRMs and sales dashboards are React applications on a TypeScript backend with background jobs for portal feeds and lead ingestion. Buyer and resident apps are built in Flutter or React Native. Images and floor plans are served through a CDN with automatic resizing, and AI document reading runs on hosted models with a review queue before anything reaches the booking record.',
  engagementNote:
    'A listing website or an agent CRM is typically a 6 to 10 week fixed-scope project. Developer sales platforms with inventory, payments and documents are delivered in phases, with the inventory view usable within the first month. Many clients keep us on part-time afterwards to add projects, adjust lead-routing rules and maintain portal feeds as those platforms change their formats.',
  faqs: [
    {
      q: 'Can you bring leads from 99acres, MagicBricks and Facebook into one CRM?',
      a: 'Yes. Portals deliver leads by email, webhook or API depending on your plan, and Facebook and Google lead forms have direct integrations. We normalise all of them into one queue, remove duplicates across sources, assign by rules you set and alert the executive within seconds. Existing CRMs such as Zoho or Salesforce can stay as the system of record if you prefer.',
    },
    {
      q: 'Do you build RERA-compliant sales systems?',
      a: 'We build the mechanics RERA expects: approved project details on listings, agreement and allotment templates, payment schedules tied to construction stages, and data exports for quarterly updates. Rules differ by state and change over time, so your legal team confirms the content and we implement whatever it requires.',
    },
    {
      q: 'Should we build our own portal or just list on existing ones?',
      a: 'Both. Portals give reach, but your own website gives you the lead directly, lower acquisition cost over time and pages that rank for your projects and localities. We build the site so listings are entered once and pushed to portals automatically, rather than maintaining them in two places.',
    },
    {
      q: 'Can buyers pay booking amounts and instalments online?',
      a: 'Yes. Booking amounts, instalments and society dues can be paid by UPI, cards and net banking through Razorpay, PayU or Stripe, with receipts generated automatically and payments matched to the buyer\'s schedule. For recurring rent or maintenance we set up UPI or card mandates so collections happen without reminders.',
    },
    {
      q: 'How long does a real estate CRM take to build?',
      a: 'A CRM with multi-source lead capture, assignment rules, follow-up tracking and a channel partner portal is typically in daily use within eight to twelve weeks. We start with lead capture and assignment so your team benefits in the first month, then add the partner portal and reporting in later releases while the team is already using it.',
    },
  ],
  relatedIndustries: ['hospitality-and-travel', 'professional-services', 'fintech'],
  relatedCostFeatures: ['crm-integration', 'booking-and-scheduling', 'whatsapp-business-integration', 'online-payments', 'document-data-extraction', 'search-and-filters'],
  image: 'realEstate',
  keywords: [
    'real estate software development company',
    'real estate CRM development',
    'property listing website development',
    'real estate app development india',
    'developer sales inventory management software',
    'AI lead qualification for real estate',
    'society management app development',
  ],
};
