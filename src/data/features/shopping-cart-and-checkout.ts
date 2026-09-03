import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'shopping-cart-and-checkout',
  name: 'Shopping cart and checkout',
  question: 'How much does it cost to build a shopping cart and checkout?',
  metaDescription:
    'Cost and effort to build a custom cart and checkout for an ecommerce site or app: variants, shipping, taxes, coupons, order tracking and payment integration.',
  category: 'commerce',
  summary:
    'A cart and checkout turn a catalogue into orders. A simple cart with quantities, one shipping method and a hosted payment page is a modest build. Product variants, real-time stock checks, shipping rates by weight and pincode, GST or VAT rules, coupons, guest checkout, address validation, order tracking and returns each add screens, integrations and edge cases that need thorough testing before launch.',
  tiers: [
    {
      name: 'Basic',
      hours: [30, 60],
      includes: [
        'Cart with add, update quantity and remove, persisted for logged-in and guest users',
        'Single-page checkout with address form and one flat or free shipping option',
        'Payment through the gateway\'s hosted page',
        'Order confirmation screen and email, plus an admin order list',
      ],
    },
    {
      name: 'Standard',
      hours: [60, 150],
      includes: [
        'Everything in Basic',
        'Product variants such as size and colour with per-variant stock and price',
        'Shipping rates by weight, zone or pincode, and cash on delivery',
        'Tax rules with GST-compliant invoices or VAT by country',
        'Coupons, cart-level discounts and free shipping thresholds',
        'Order status tracking, cancellation and customer order history',
      ],
    },
    {
      name: 'Advanced',
      hours: [150, 350],
      includes: [
        'Everything in Standard',
        'Multi-vendor marketplace orders with split fulfilment and vendor payouts',
        'Live courier integration for rates, labels and tracking (Shiprocket, Delhivery, FedEx)',
        'Returns, exchanges and refunds workflow with reasons and approvals',
        'Abandoned cart recovery via email and WhatsApp',
        'Buy now pay later, gift cards and store credit',
      ],
    },
  ],
  breakdown: { design: 25, development: 55, qa: 20 },
  costDrivers: [
    'Product complexity: variants, bundles, configurable or made-to-order items',
    'Shipping logic across zones, couriers and cash on delivery',
    'Tax and invoicing compliance in each market you sell to',
    'Marketplace models with multiple vendors and split payouts',
    'Returns and exchange workflows, which are often underestimated',
    'Performance and conversion polish: fast pages and a checkout that works on low-end phones',
  ],
  cheaperAlternative:
    'Shopify, WooCommerce, Medusa, Saleor and Dukaan already provide carts, checkout, shipping, tax and payments. For most single-brand stores a custom checkout is only justified when the product, pricing model or fulfilment process does not fit a platform, or when checkout is embedded inside a larger custom app.',
  hiddenCosts: [
    'Platform subscription fees or transaction fees on top of gateway charges',
    'Courier integration fees and label costs per shipment',
    'Ongoing work on conversion: every percentage point of checkout drop-off is revenue',
    'Fraud checks and the cost of failed cash-on-delivery orders',
  ],
  related: ['online-payments', 'inventory-management', 'search-and-filters', 'invoicing-and-quotes', 'whatsapp-business-integration'],
  faqs: [
    {
      q: 'Should we build a custom store or use Shopify?',
      a: 'If you sell standard products with standard shipping, use Shopify or WooCommerce and spend your budget on marketing. Build custom when the buying flow is unusual, such as configurators, quotes, subscriptions mixed with one-off items, B2B price lists, or when the store is one part of a larger custom platform.',
    },
    {
      q: 'Can you support cash on delivery and pincode-based shipping for India?',
      a: 'Yes. We integrate courier aggregators such as Shiprocket or direct carriers to check serviceability by pincode, quote rates, generate labels and track shipments. Cash on delivery is handled as a payment method with its own confirmation and fraud rules, including OTP verification for high-value orders.',
    },
    {
      q: 'What does it cost to keep checkout conversion high after launch?',
      a: 'We instrument every step of checkout so you can see where customers drop off. Common follow-up work includes address autocomplete, saved cards, one-page checkout on mobile and wallet buttons such as Google Pay. Budgeting a few hours a month for these improvements usually pays back many times over.',
    },
  ],
};
