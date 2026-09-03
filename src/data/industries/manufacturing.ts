import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'manufacturing',
  name: 'Manufacturing',
  shortName: 'manufacturers',
  metaTitle: 'Custom Manufacturing Software Development | Aresyn',
  metaDescription:
    'Custom software for manufacturers: production tracking, shop-floor and quality apps, maintenance, dealer ordering portals, GST e-invoicing and IoT data.',
  h1: 'Custom software and AI for manufacturers and job shops',
  intro: [
    'Aresyn builds custom software for SME manufacturers, job shops, auto component makers, textile mills and food processors: production tracking and shop-floor apps, quality inspection with photos, maintenance schedules, dealer and distributor ordering portals, quotation and BOM tools and GST e-invoicing. We work on fixed-scope projects or as a part-time engineering team, and we connect to Tally, SAP Business One, Odoo and the machines on your floor.',
    'The typical factory we visit has an ERP that the accounts team uses, a production plan in Excel that the supervisor prints every morning, and quality records in a register that nobody reads until a customer complains. The owner finds out about a late order from the customer. The systems below are built to put the shop floor and the office on the same data without asking operators to become computer users.',
  ],
  audience: 'owners and plant heads of SME manufacturers, job shops and contract manufacturers, auto component and engineering firms, textile and garment units, food and packaging processors',
  challenges: [
    {
      title: 'The production plan is a printout',
      body: 'Orders are sequenced in Excel, printed and handed to supervisors. When a machine goes down or material arrives late, the plan is out of date by lunchtime and nobody in the office knows until dispatch is missed.',
    },
    {
      title: 'Quality records exist only on paper',
      body: 'Inspection sheets are filled by hand, filed in a cupboard and typed into a report when an audit or customer complaint demands it. Trends across batches, shifts or suppliers are invisible until they become rejections.',
    },
    {
      title: 'Dealers order by phone and WhatsApp',
      body: 'Distributors send orders as photos of handwritten lists, sales staff retype them, stock availability is guessed, and the dealer calls three times to ask about dispatch. Order errors and credit disputes follow.',
    },
    {
      title: 'Machine data never leaves the machine',
      body: 'Newer machines log cycles, faults and downtime, but the data stays on the panel. OEE is calculated from memory, maintenance is reactive, and the reason for last week\'s low output is a matter of opinion.',
    },
  ],
  solutions: [
    {
      name: 'Production tracking and shop-floor app',
      body: 'A planning board for the office and a tablet or phone app for supervisors and operators that records what was actually made, on which machine, by whom, so the plan and the floor stay in sync through the shift.',
      features: [
        'Work orders with routing, operations and target quantities per machine',
        'Operator app for job start, stop, quantity and reject entry with barcode scanning',
        'Live board showing running, waiting and blocked jobs per machine',
        'Material issue and consumption against BOM per work order',
        'Shift-wise output, downtime and rejection reports',
        'Delay alerts to the planner when an order is at risk',
      ],
    },
    {
      name: 'Quality inspection and traceability',
      body: 'Digital inspection plans, photo evidence and batch traceability so incoming, in-process and final checks are recorded once and can be pulled up by batch, supplier or customer in seconds.',
      features: [
        'Inspection checklists per part, stage and customer specification',
        'Photo capture and measurement entry on phone with tolerance checks',
        'Batch and lot traceability from raw material to dispatched invoice',
        'Non-conformance, rework and supplier complaint workflow',
        'Certificates of analysis and test reports generated as PDF',
        'SPC charts and rejection trends by shift, machine and supplier',
      ],
    },
    {
      name: 'Maintenance management (CMMS)',
      body: 'Preventive schedules, breakdown logging and spare parts tracking for every machine, with alerts from meter readings or IoT data so maintenance moves from firefighting to a plan.',
      features: [
        'Asset register with documents, warranties and AMC dates',
        'Preventive maintenance calendar by time, cycles or running hours',
        'Breakdown tickets from the operator app with photos and downtime reasons',
        'Spare parts stock with minimum levels and purchase requests',
        'Technician app with checklists and offline support',
      ],
    },
    {
      name: 'Dealer and distributor ordering portal',
      body: 'A B2B portal and app where dealers see their prices, stock availability, credit position and order status, and place orders that land in your ERP without retyping.',
      features: [
        'Dealer-specific price lists, schemes and credit limits',
        'Live or daily-updated stock availability by warehouse',
        'Order placement with approval workflow and dispatch tracking',
        'Outstanding statements, invoices and payment links',
        'Scheme and target dashboards for the sales team',
        'Sync with Tally, SAP Business One or Odoo',
      ],
    },
    {
      name: 'Quotation, BOM and costing tools',
      body: 'A quoting tool that builds cost from your BOM, routing and current material prices so estimates are consistent and margins are known before you commit, with GST e-invoicing at the end of the order.',
      features: [
        'BOM and routing templates with material, labour and overhead rates',
        'Quote versions with customer-specific terms and PDF output',
        'Quote-to-order conversion that creates work orders',
        'GST e-invoice and e-way bill generation through a GSP',
        'Actual versus estimated cost per order',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Visual defect detection on the line',
      body: 'A camera and a model trained on your own good and bad parts flag scratches, missing components or misprints for an operator to confirm. It works well on consistent, well-lit parts and needs a few hundred labelled images per defect type; we say so up front rather than promising a general-purpose inspector.',
    },
    {
      name: 'Demand and material forecasting',
      body: 'Your sales history, dealer orders and seasonality feed a forecast for finished goods and raw material that planners review and adjust. It is most useful for repeat SKUs with steady history and least useful for new products, so we show confidence alongside every number.',
    },
    {
      name: 'Downtime and fault analysis from machine data',
      body: 'Machine logs and operator downtime reasons are grouped and summarised so the plant head sees the top causes of lost hours each week in plain language, with the machines and shifts involved, instead of a raw fault code export.',
    },
    {
      name: 'Document processing for purchase and dispatch',
      body: 'Supplier invoices, delivery challans and customer purchase orders are read by the model, matched to POs and GRNs, and posted for approval. Mismatches in quantity, rate or GST are flagged for a person before anything reaches accounts.',
    },
  ],
  integrations: [
    'Tally Prime, SAP Business One, Odoo and Zoho Inventory via API or file exchange',
    'GST Suvidha Providers for e-invoicing and e-way bills',
    'PLC and machine data over OPC-UA, Modbus and MQTT',
    'Industrial barcode and QR scanners, label printers and weighing scales',
    'Razorpay, PayU and bank payment links for dealer collections',
    'WhatsApp Business API and SMS for dealer and supplier notifications',
    'Amazon Business, IndiaMART and Udaan for marketplace orders',
    'Google Workspace and Microsoft 365 for documents and sign-in',
    'Courier and transporter APIs for dispatch tracking',
  ],
  stackNote:
    'Factory software has to run on shared tablets in dusty, noisy areas with unreliable Wi-Fi, so operator screens are large, simple and offline-tolerant. We build the office web app in React or Next.js on a TypeScript or Python backend with PostgreSQL, floor apps in Flutter with local storage and background sync, and machine data collection through small edge services that speak OPC-UA, Modbus or MQTT and buffer readings during outages. ERP integration is done through official APIs where they exist and through scheduled file exchange with reconciliation where they do not.',
  engagementNote:
    'A dealer portal, a quality inspection app or a maintenance module is typically a 6 to 10 week fixed-scope project. Production tracking across a whole plant is delivered line by line, so operators learn one screen at a time and the planner sees value within the first month. Many manufacturing clients keep us on part-time to add lines, reports and integrations as the plant grows.',
  faqs: [
    {
      q: 'Will our operators actually use a shop-floor app?',
      a: 'They will if it takes less effort than the register it replaces. We design operator screens with large buttons, barcode scanning instead of typing, and two or three taps per action, and we pilot with one line and its supervisor before rolling out. Screens are in the local language where needed, and every entry the app makes replaces a form the operator no longer fills.',
    },
    {
      q: 'Do we have to replace Tally or our ERP?',
      a: 'No. Tally, SAP Business One and Odoo are good at accounting and inventory ledgers, and we keep them as the system of record. The production, quality, dealer and maintenance layers we build sit beside them, read items, customers and stock, and post back invoices, receipts and material movements through supported interfaces. Your accountant keeps working exactly as before.',
    },
    {
      q: 'Can you connect to our machines if they are old?',
      a: 'Often, yes. Machines with a PLC usually expose Modbus or OPC-UA, and we read cycle counts, states and faults from those. Older machines without any interface can be fitted with inexpensive sensors or counters that report over MQTT. Where nothing is practical, operator entry on the floor app still gives you output and downtime data, just with a few minutes of delay.',
    },
    {
      q: 'How accurate is AI visual inspection?',
      a: 'For consistent parts under controlled lighting, with a few hundred labelled examples per defect, accuracy is usually high enough to catch most defects and reduce manual checking. It is weaker on highly variable parts, reflective surfaces and rare defects with little training data. We run a pilot on one part with your existing rejects before committing to a line-wide rollout.',
    },
    {
      q: 'How long does a dealer ordering portal take to build?',
      a: 'A dealer portal with dealer-specific pricing, stock visibility, order placement, order tracking and outstanding statements, synced with Tally or your ERP, is typically live with a pilot group of dealers in eight to twelve weeks. The ERP sync is built and tested first, because dealers will only keep using the portal if the stock and statements match what your office tells them.',
    },
  ],
  relatedIndustries: ['logistics-and-shipping', 'pharmaceuticals', 'fashion-and-retail'],
  relatedCostFeatures: ['barcode-and-qr-scanning', 'inventory-management', 'offline-mode', 'third-party-api-integration', 'reporting-and-exports', 'invoicing-and-quotes'],
  keywords: [
    'custom manufacturing software development',
    'production tracking software for small manufacturers',
    'shop floor app development',
    'dealer ordering portal development',
    'CMMS software development company india',
    'quality inspection app for manufacturing',
    'ERP integration for manufacturing tally',
  ],
};
