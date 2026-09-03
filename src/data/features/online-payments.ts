import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'online-payments',
  name: 'Online payments (Stripe, Razorpay, PayPal, UPI)',
  question: 'How much does it cost to add online payments to an app?',
  metaDescription:
    'Cost and effort to accept card, UPI and wallet payments in a web or mobile app with Stripe, Razorpay, Cashfree or PayPal, including refunds, webhooks and fees.',
  category: 'payments',
  summary:
    'Accepting payments means integrating a gateway such as Stripe, Razorpay, Cashfree or PayPal, handling the checkout flow, confirming payment through webhooks and recording the result. A single-currency one-off payment using the gateway\'s hosted checkout is quick. Multiple gateways, UPI and wallets, refunds, split payouts to vendors, saved cards and reconciliation with accounting add real work and careful testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 36],
      includes: [
        'One gateway with hosted checkout for cards, UPI, net banking and wallets',
        'Webhook handling so payment status is confirmed server-side',
        'Order or booking marked paid and a receipt email sent',
        'Basic payment history for the customer and for admins',
      ],
    },
    {
      name: 'Standard',
      hours: [36, 90],
      includes: [
        'Everything in Basic',
        'Custom checkout embedded in your own screens on web and mobile',
        'Refunds, partial refunds and failed-payment retry from the admin panel',
        'Saved payment methods for repeat customers',
        'Multi-currency pricing with a second gateway for international cards',
        'Reconciliation export matching gateway settlements to orders',
      ],
    },
    {
      name: 'Advanced',
      hours: [90, 220],
      includes: [
        'Everything in Standard',
        'Marketplace split payments and vendor payouts through Stripe Connect or Razorpay Route',
        'Payment links, QR codes and pay-later options',
        'Fraud rules, 3-D Secure handling and dispute management workflow',
        'Automatic sync of payments and settlements to Tally, Zoho Books or QuickBooks',
        'Retry logic and dunning for failed recurring charges',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Number of gateways and payment methods to support',
    'Custom checkout screens instead of the gateway\'s hosted page',
    'Marketplace models with splits, payouts and vendor onboarding',
    'International cards, multi-currency and tax handling per country',
    'Refund, dispute and reconciliation workflows for finance teams',
    'Compliance scope: keeping card data out of your systems to stay within PCI SAQ A',
  ],
  cheaperAlternative:
    'Hosted checkout pages and payment links from Razorpay, Stripe, Cashfree or PayPal need almost no code and are enough for many businesses. If you sell through Shopify, WooCommerce or a booking platform, their built-in payments already cover cards, UPI and wallets, so a custom integration is only worth it for a custom product.',
  hiddenCosts: [
    'Gateway fees of roughly two to three percent per transaction, plus fixed fees on some methods',
    'Currency conversion and international card surcharges',
    'Chargeback fees and the staff time to handle disputes',
    'Settlement delays that affect cash flow, especially for marketplaces',
  ],
  related: ['subscriptions-and-recurring-billing', 'shopping-cart-and-checkout', 'invoicing-and-quotes', 'booking-and-scheduling', 'crm-integration'],
  faqs: [
    {
      q: 'Which payment gateway should an Indian business use?',
      a: 'Razorpay and Cashfree are the usual choices for Indian customers because they support UPI, net banking, wallets and EMI with fast onboarding. If you also sell to customers abroad, adding Stripe or PayPal for international cards is common. We can integrate more than one and route by currency or country.',
    },
    {
      q: 'Do we need PCI compliance if we accept cards in our app?',
      a: 'If card details are entered in the gateway\'s hosted fields or SDK and never touch your servers, you fall under the lightest PCI category, SAQ A, which is a short self-assessment. We design integrations this way on purpose. Handling raw card numbers yourself would require a far more expensive certification.',
    },
    {
      q: 'How do you make sure a payment is never counted twice or missed?',
      a: 'We rely on the gateway\'s webhook as the source of truth, store every event with its unique identifier, and make order updates idempotent so a repeated webhook cannot double-count. A reconciliation job compares gateway settlements to orders daily and flags anything that does not match.',
    },
    {
      q: 'Can we accept UPI and QR code payments in a physical store through the same system?',
      a: 'Yes. Razorpay, Cashfree and PhonePe offer dynamic QR codes and payment links that tie a store payment to an order in your system, and the same webhook flow confirms it. For card terminals, gateways such as Pine Labs or Razorpay POS can be connected so online and offline sales land in one ledger.',
    },
  ],
};
