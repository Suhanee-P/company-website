import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'logistics-and-shipping',
  name: 'Logistics & Shipping',
  shortName: 'logistics companies',
  metaTitle: 'Custom Logistics Software Development | Aresyn',
  metaDescription:
    'Custom software for logistics and shipping companies: tracking portals, dispatch and driver apps, freight quoting, warehouse tools and AI document processing.',
  h1: 'Custom software and AI for logistics and shipping companies',
  intro: [
    'Aresyn builds custom software for freight forwarders, 3PLs, courier companies and shippers: customer tracking portals, dispatch and driver apps, freight quoting engines, warehouse tools and AI that reads bills of lading and invoices. We work on fixed-scope projects or as a part-time engineering team, and we integrate with the carriers, telematics and accounting systems you already use.',
    'Most logistics operators we speak to are not short of software. They are short of software that talks to each other. The TMS does not know what the driver app knows, customer service answers "where is my shipment" by phone, and month-end reconciliation is a spreadsheet exercise. The systems below are the ones that fix those gaps.',
  ],
  audience: 'freight forwarders, 3PLs, courier and last-mile companies, NVOCCs, customs brokers and in-house logistics teams at manufacturers and distributors',
  challenges: [
    {
      title: 'Customers cannot see their own shipments',
      body: 'Status lives in the TMS, in carrier portals and in WhatsApp threads. Every "where is my container" question costs a coordinator ten minutes and the customer gets an answer that is already stale.',
    },
    {
      title: 'Quoting is slow and inconsistent',
      body: 'Rate sheets change weekly, surcharges depend on lane, weight and season, and the person who knows the rates is on leave. Quotes go out late and margins vary by who typed them.',
    },
    {
      title: 'Documents are still keyed in by hand',
      body: 'Bills of lading, commercial invoices, packing lists and delivery notes arrive as PDFs and photos. Someone types the fields into the TMS and the accounting system, twice, with errors.',
    },
    {
      title: 'Dispatch runs on phone calls',
      body: 'Drivers are assigned by memory, proof of delivery is a photo in a chat, and nobody knows which vehicle is nearest until they call around. Exceptions are found by the customer, not the team.',
    },
  ],
  solutions: [
    {
      name: 'Customer shipment tracking portal',
      body: 'A branded web portal and optional mobile app where your customers see every shipment, milestone, document and invoice without calling you. It pulls status from your TMS, carriers and driver app and pushes alerts when something changes.',
      features: [
        'Live milestone timeline per shipment with ETA and exception flags',
        'Document vault: BL, invoice, POD, customs paperwork, downloadable per shipment',
        'Email, SMS and WhatsApp alerts on pickup, delay, customs hold and delivery',
        'Multi-user accounts per customer with role-based visibility',
        'Public tracking page by reference number for their customers',
        'API access so large customers can pull status into their own systems',
      ],
    },
    {
      name: 'Dispatch board and driver app',
      body: 'A dispatcher-facing board that shows jobs, vehicles and drivers on one screen, paired with a lightweight Android and iOS app for drivers that works with poor connectivity.',
      features: [
        'Drag-and-drop job assignment with vehicle capacity and hours checks',
        'Driver app with turn-by-turn navigation, job list and offline queueing',
        'Electronic proof of delivery: signature, photos, geotag and timestamp',
        'Live vehicle positions from the app or from telematics units',
        'Automatic exception alerts for late pickups and missed windows',
        'End-of-day trip summaries pushed to payroll and billing',
      ],
    },
    {
      name: 'Freight quoting and rate management',
      body: 'A quoting engine that turns your rate cards, surcharges and margin rules into instant, consistent quotes for sales staff or directly on your website.',
      features: [
        'Rate card import from Excel with validity dates and lane matching',
        'Configurable surcharges: fuel, peak season, remote area, hazardous, oversize',
        'Margin rules per customer tier with approval workflow for exceptions',
        'Instant quote PDF and email with expiry and one-click acceptance',
        'Quote-to-booking conversion that creates the shipment automatically',
        'Quote analytics: win rate by lane, customer and salesperson',
      ],
    },
    {
      name: 'Warehouse and inventory app',
      body: 'Receiving, put-away, picking and stock counts on handheld scanners or phones, with real-time stock visibility for your customers if you offer fulfilment.',
      features: [
        'Barcode and QR scanning for receiving, put-away and picking',
        'Location-level stock with batch, lot and expiry tracking',
        'Pick lists optimised by zone and route through the warehouse',
        'Cycle counting with variance reports',
        'Customer stock portal for 3PL fulfilment clients',
        'Integration with your TMS, ecommerce channels and accounting',
      ],
    },
    {
      name: 'Integration hub and reporting',
      body: 'A middle layer that syncs your TMS, carrier APIs, telematics, ecommerce platforms and accounting so data is entered once, plus dashboards for the numbers that matter each morning.',
      features: [
        'Two-way sync with carriers, marketplaces and your accounting system',
        'EDI and API connectors for large shipper customers',
        'Daily operations dashboard: on-time rate, exceptions, utilisation, margin',
        'Automated month-end billing runs and reconciliation reports',
        'Audit log of every change for disputes and compliance',
        'Alerting when any integration fails, before customers notice',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Document extraction for BLs, invoices and PODs',
      body: 'An AI pipeline reads PDFs and photos of bills of lading, commercial invoices and delivery notes, extracts the fields you care about, checks them against the booking and pushes them into your TMS. Humans only review the exceptions the model flags.',
    },
    {
      name: 'Customer service assistant on WhatsApp and email',
      body: 'An assistant that answers "where is my shipment", "send me the invoice" and "what documents do you need" from your live data, in your customer\'s language, and hands off to a person when the question is outside its scope.',
    },
    {
      name: 'ETA prediction and delay flags',
      body: 'A model trained on your own historical trips that predicts arrival windows and flags shipments likely to miss a delivery slot early enough to re-plan or warn the customer.',
    },
    {
      name: 'Rate and margin suggestions',
      body: 'Given a lane, weight and customer history, the system suggests a quote that is competitive but protects margin, and explains the suggestion so your sales team stays in control.',
    },
  ],
  integrations: [
    'Carrier and courier APIs (DHL, FedEx, UPS, Delhivery, Blue Dart, Shiprocket)',
    'Ocean and air tracking data (Maersk, MSC, project44, Vizion, AfterShip)',
    'Telematics and GPS (Samsara, Geotab, Teltonika, Loconav)',
    'TMS and ERP (SAP, Oracle, Odoo, Magaya, CargoWise via API or EDI)',
    'Accounting (Tally, Zoho Books, QuickBooks, Xero)',
    'Ecommerce and marketplaces (Shopify, WooCommerce, Amazon, Flipkart)',
    'Google Maps Platform, Mapbox and HERE for routing and geocoding',
    'WhatsApp Business API, Twilio and SendGrid for notifications',
    'EDI (EDIFACT, X12) for enterprise shipper customers',
  ],
  stackNote:
    'Logistics software lives or dies on integrations and on working in the field, so we lean on boring, reliable choices: a TypeScript or Python backend with PostgreSQL, a queue for carrier polling and document jobs, and a web app in React or Next.js for office staff. Driver and warehouse apps are built in Flutter or React Native with an offline-first data layer so scans and PODs are never lost in a basement or a port. Maps and routing use Google Maps Platform or Mapbox, and AI document processing runs on hosted models with a review queue in front of your TMS.',
  engagementNote:
    'A customer tracking portal or a driver app is typically a 6 to 10 week fixed-scope project. Larger platforms are delivered in phases, with the first usable release in the first two months. Many logistics clients keep us on part-time afterwards to add carriers, build new customer integrations and maintain the AI document pipeline as formats change.',
  faqs: [
    {
      q: 'Can you integrate with our existing TMS instead of replacing it?',
      a: 'Yes, and that is usually the better option. Most of the systems above sit beside your TMS, read from it through its API, database or exports, and write back only where the TMS allows. You keep the system of record and gain the customer portal, driver app or automation you were missing.',
    },
    {
      q: 'How do you handle drivers with poor connectivity?',
      a: 'The driver app stores every scan, photo and signature locally and syncs when a connection returns. Dispatchers see a clear "pending sync" state rather than missing data. We test on low-end Android devices and on 2G-quality connections because that is where most delivery problems happen.',
    },
    {
      q: 'Can the AI document reader handle handwritten or badly scanned documents?',
      a: 'It handles typed PDFs and clean photos with high accuracy, and it flags low-confidence fields on poor scans or handwriting for a person to confirm. The goal is to remove most of the typing, not all of it, and to never push an unverified number into your accounting system.',
    },
    {
      q: 'We ship internationally. Can you support customs documents and multiple currencies?',
      a: 'Yes. We have built quoting and documents with multi-currency pricing, HS code lookups, Incoterms fields and customs paperwork generation. Compliance rules vary by country, so we scope the specific lanes and document sets you handle before quoting.',
    },
    {
      q: 'How long does a shipment tracking portal take to build?',
      a: 'A portal that pulls status from your TMS and carriers, with document downloads and email alerts, is typically live for your customers in six to ten weeks. The first two weeks go on connecting your data sources, and you see a working version every week from then on. Adding new carriers afterwards is usually a matter of days each.',
    },
  ],
  relatedIndustries: ['manufacturing', 'car-rental-and-fleet', 'fashion-and-retail'],
  relatedCostFeatures: ['gps-tracking-and-maps', 'barcode-and-qr-scanning', 'document-data-extraction', 'third-party-api-integration', 'offline-mode', 'whatsapp-business-integration'],
  image: 'logistics',
  keywords: [
    'custom logistics software development',
    'shipment tracking portal development',
    'freight forwarding software company',
    'driver app development for delivery company',
    'logistics app development company india',
    'AI document processing for freight forwarders',
    'transport management software custom',
  ],
};
