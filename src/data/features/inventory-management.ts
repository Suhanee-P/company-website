import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'inventory-management',
  name: 'Inventory management',
  question: 'How much does it cost to build an inventory management system?',
  metaDescription:
    'Cost to build custom inventory management: stock levels, multi-location transfers, purchase orders, batches and expiry, barcode scanning and channel sync.',
  category: 'ops',
  summary:
    'An inventory system tracks what stock you have, where it is, what is coming in and what is going out, and warns you before you run short. A single-location stock ledger with alerts is a modest build. Multiple warehouses, purchase orders, batch and expiry tracking, channel sync, forecasting and accounting integration turn it into a substantial platform.',
  tiers: [
    {
      name: 'Basic',
      hours: [30, 70],
      includes: [
        'Products and SKUs with variants, units and reorder levels',
        'Stock in, stock out and adjustments with reasons',
        'Current stock levels and low-stock alerts',
        'CSV import and export of products and stock counts',
        'Simple movement history per item',
      ],
    },
    {
      name: 'Standard',
      hours: [70, 180],
      includes: [
        'Everything in Basic',
        'Multiple locations with transfers and in-transit stock',
        'Purchase orders, supplier records and receiving against orders',
        'Batch or lot numbers with expiry dates and first-expiry-first-out picking',
        'Barcode scanning for receiving, picking and counts',
        'Stock valuation and movement reports, plus sync with a sales channel such as Shopify',
      ],
    },
    {
      name: 'Advanced',
      hours: [180, 350],
      includes: [
        'Everything in Standard',
        'Warehouse bins and zones with put-away and pick-path logic',
        'Automatic reorder suggestions from lead times and sales velocity',
        'Serial number tracking, kitting and bills of materials',
        'Cycle counting programme with variance approval',
        'Integration with accounting or ERP, role-based access and full audit trail',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Number of locations and whether stock moves between them',
    'Batch, lot, expiry or serial tracking, which multiplies the states each item can be in',
    'Sales channels and marketplaces to keep in sync, each with its own quirks',
    'Accounting integration and valuation methods your accountant expects',
    'Barcode hardware and label printing requirements',
    'Reporting depth, from a stock list to margin by product by location',
  ],
  cheaperAlternative:
    'Zoho Inventory, inFlow, Cin7 and Odoo Inventory cover standard retail and wholesale stock control on a subscription, and Shopify tracks stock adequately for single-channel stores. These are the right choice for most small businesses. A custom system pays off when your process is unusual, when you need it inside your own app for staff or customers, or when integration with your other systems is the main problem.',
  hiddenCosts: [
    'Barcode scanners, label printers and consumables',
    'Ongoing maintenance of channel and accounting integrations as those platforms change',
    'Staff training and discipline, because inventory accuracy depends on every movement being recorded',
    'Periodic stock takes to correct drift, however good the software is',
  ],
  related: ['barcode-and-qr-scanning', 'reporting-and-exports', 'shopping-cart-and-checkout', 'third-party-api-integration', 'invoicing-and-quotes'],
  faqs: [
    {
      q: 'Why build custom inventory software instead of using Zoho or Odoo?',
      a: 'Usually you should not, and we say so when that is the case. Custom builds are justified when off-the-shelf tools cannot model your process, such as rentals with returns and damage checks, manufacturing with custom assemblies, or perishable goods with strict traceability, or when the inventory screens must live inside an app your staff and customers already use.',
    },
    {
      q: 'Can it keep stock in sync with our online store and marketplaces?',
      a: 'Yes. We connect to Shopify, WooCommerce, Amazon and Flipkart through their APIs so that a sale on any channel reduces stock everywhere within minutes, and stock updates flow back the other way. Each channel behaves slightly differently, so the sync layer needs monitoring and occasional maintenance.',
    },
    {
      q: 'How do you handle expiry dates and batches?',
      a: 'Each receipt creates a batch with its expiry date and quantity. Picking then follows first-expiry-first-out by default, the system warns about batches approaching expiry, and recalls can be traced to the exact customers who received a batch. This matters most for food, pharmaceuticals and cosmetics.',
    },
    {
      q: 'Will it work with our accounting software?',
      a: 'We integrate with Tally, Zoho Books, QuickBooks and Xero so purchases, stock valuation and cost of goods sold flow to the books without re-entry. The valuation method, such as weighted average or FIFO, should match what your accountant uses, so we confirm it before building.',
    },
  ],
};
