import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'subscriptions-and-recurring-billing',
  name: 'Subscriptions and recurring billing',
  question: 'How much does it cost to add subscriptions and recurring billing to an app?',
  metaDescription:
    'Cost and effort to add subscription plans, trials, upgrades, dunning and invoicing to a SaaS or consumer app with Stripe Billing, Razorpay or RevenueCat.',
  category: 'payments',
  summary:
    'Subscriptions turn a product into recurring revenue, and billing is where most of the complexity in a SaaS lives. A single plan charged monthly through Stripe Billing or Razorpay Subscriptions is manageable. Multiple plans, free trials, proration on upgrades, usage-based pricing, coupons, failed-payment recovery, tax handling and app store subscriptions on iOS and Android multiply the edge cases to design and test.',
  tiers: [
    {
      name: 'Basic',
      hours: [24, 50],
      includes: [
        'Two or three plans charged monthly or yearly through the gateway\'s subscription product',
        'Checkout, plan display and a billing page showing current plan and next charge',
        'Webhook handling for renewals, failures and cancellations',
        'Access to features switched on or off by plan',
      ],
    },
    {
      name: 'Standard',
      hours: [50, 130],
      includes: [
        'Everything in Basic',
        'Free trials, upgrades and downgrades with proration',
        'Coupons, discounts and promotional pricing',
        'Automatic retries and dunning emails for failed payments',
        'Invoices and receipts with tax lines, downloadable as PDF',
        'Admin tools to comp, pause, extend or refund a subscription',
      ],
    },
    {
      name: 'Advanced',
      hours: [130, 320],
      includes: [
        'Everything in Standard',
        'Usage-based or seat-based pricing with metering and overage charges',
        'In-app subscriptions on iOS and Android through RevenueCat or native store APIs',
        'Multi-currency pricing and tax calculation by country or state',
        'Revenue reporting: MRR, churn, cohorts and failed payment recovery rates',
        'Enterprise contracts with custom pricing, purchase orders and net-30 invoicing',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Number of plans and the rules for moving between them',
    'Usage-based pricing, which needs metering, aggregation and clear customer-facing usage displays',
    'App store subscriptions, which require separate flows, receipts and sandbox testing on each platform',
    'Tax and invoicing rules across countries, including GST in India and VAT in Europe',
    'Dunning and recovery flows that touch email, in-app messages and payment retries',
    'Migrating existing customers from manual invoicing or another billing system',
  ],
  cheaperAlternative:
    'Stripe Billing, Razorpay Subscriptions, Paddle, Lemon Squeezy and Chargebee handle plans, proration, invoices, dunning and tax for a percentage or monthly fee, so you build only the screens and webhooks. Paddle and Lemon Squeezy act as merchant of record and take on global tax compliance, which is worth it for small teams selling worldwide.',
  hiddenCosts: [
    'Billing platform fees on top of gateway fees, typically half a percent to a few percent of revenue',
    'Apple and Google take fifteen to thirty percent of in-app subscription revenue',
    'Tax registration and filing obligations in each country where you have customers',
    'Ongoing support for billing questions, refunds and disputes',
  ],
  related: ['online-payments', 'invoicing-and-quotes', 'user-authentication', 'role-based-access-control', 'analytics-dashboard'],
  faqs: [
    {
      q: 'Should we use Stripe Billing, Chargebee or build our own subscription logic?',
      a: 'Use a billing platform. Proration, retries, invoices and tax are solved problems with dozens of edge cases each, and getting them wrong means lost revenue or angry customers. We build the product side, plan gating, billing pages and webhooks, and let the platform own the ledger.',
    },
    {
      q: 'Do we have to use Apple and Google in-app purchases for a mobile app subscription?',
      a: 'If the subscription gives access to digital content or features inside the app, yes, the stores require their billing on their platforms, with the fee that comes with it. Physical goods and services consumed outside the app can use your own gateway. We map your product against store rules during scoping to avoid rejection.',
    },
    {
      q: 'How do you handle failed card payments so we do not lose customers?',
      a: 'With a dunning sequence: automatic retries on a smart schedule, emails and in-app banners asking for an updated card, a short grace period before access is restricted, and a final notice before cancellation. Billing platforms provide the retries; we design the messaging and the grace rules to suit your product.',
    },
  ],
};
