import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'beauty-and-skincare',
  name: 'Beauty & Skincare',
  shortName: 'beauty and skincare brands',
  metaTitle: 'Beauty & Skincare Software Development | Aresyn',
  metaDescription:
    'Custom software for beauty and skincare brands, salons and clinics: storefronts, subscriptions, skin quizzes, booking, WhatsApp commerce and AI skin analysis.',
  h1: 'Custom software and AI for beauty and skincare brands',
  intro: [
    'Aresyn builds custom software for direct-to-consumer beauty and skincare brands, salon chains and dermatology clinics: Shopify and headless storefronts, subscription and replenishment programmes, skin quizzes that build routines, salon booking and membership systems, influencer and affiliate tracking, WhatsApp commerce and AI skin analysis with honest limits. We work on fixed-scope projects or as a part-time team, and we plug into the commerce, logistics and marketing tools you already run.',
    'Beauty is a repeat-purchase category with thin first-order margins, so the software that matters is the software that brings a customer back: a routine they trust, a replenishment reminder that lands at the right moment, a salon slot they can book in ten seconds. Most brands we speak to have a storefront and a stack of apps bolted onto it, and the gaps between those apps are where repeat revenue leaks.',
  ],
  audience: 'direct-to-consumer skincare, haircare and cosmetics brands, salon and spa chains, dermatology and aesthetic clinics, and founders launching a beauty label',
  challenges: [
    {
      title: 'The storefront is a theme plus twenty apps',
      body: 'Reviews, bundles, subscriptions, quizzes and loyalty each come from a different app with its own monthly fee and its own scripts. Pages load slowly, apps conflict after updates, and the one feature you actually want cannot be built inside any of them.',
    },
    {
      title: 'Customers do not know what to buy next',
      body: 'A visitor with a skin concern lands on a grid of forty products. Support answers the same routine questions on Instagram and WhatsApp every day, and the wrong first purchase leads to a return and a lost customer.',
    },
    {
      title: 'Repeat purchase depends on remembering',
      body: 'A 50 ml serum runs out in six weeks. If nothing reminds the customer at week five, the reorder goes to whichever brand advertised that day. Subscriptions help, but failed payments and rigid schedules cause churn.',
    },
    {
      title: 'Salon bookings and staff are managed on the phone',
      body: 'Appointments are taken by the receptionist, no-shows are absorbed, stylist utilisation is a guess and retail products sold at the chair never make it into the customer\'s record.',
    },
  ],
  solutions: [
    {
      name: 'Storefront and headless commerce',
      body: 'A fast, custom storefront on the platform you already sell through, with product pages built for ingredients, concerns and proof, and the campaign flexibility your marketing team keeps asking for.',
      features: [
        'Custom storefront on Shopify Hydrogen, Next.js Commerce or Medusa',
        'Product pages with ingredient lists, concern tags, before-and-after galleries and reviews',
        'Bundles, routines and gift sets with rule-based pricing',
        'Checkout with UPI, cards, wallets, pay-later options and cash on delivery where relevant',
        'Order tracking pages and a self-service returns portal',
        'Landing pages and content sections editable by your team',
      ],
    },
    {
      name: 'Skin quiz and routine builder',
      body: 'A guided quiz that turns skin type, concerns, climate and current routine into a personalised regimen from your catalogue, using rules your formulator or dermatologist controls, saved to the customer\'s account for reorders.',
      features: [
        'Guided quiz on skin type, concerns, climate, sensitivity and current routine',
        'Rules engine mapping answers to products, with logic your experts edit without a developer',
        'Personalised routine page with morning and evening steps saved to the account',
        'Add-routine-to-cart and one-tap reorder flows',
        'Quiz analytics showing common concerns, drop-off points and conversion',
        'Email and WhatsApp follow-up sequences based on quiz results',
      ],
    },
    {
      name: 'Subscriptions and replenishment',
      body: 'Subscribe-and-save with the flexibility customers expect, replenishment reminders timed to how long each product actually lasts, and payment recovery that works with UPI mandates and cards in India.',
      features: [
        'Subscribe-and-save with flexible frequencies, skips, swaps and pauses',
        'Replenishment reminders timed to product size and typical usage',
        'Failed-payment recovery and UPI AutoPay mandates for recurring orders',
        'Subscription box curation with allocation and inventory holds',
        'Churn dashboards by product, cohort and reason',
        'Customer portal to manage everything without emailing support',
      ],
    },
    {
      name: 'Salon and clinic booking platform',
      body: 'Online booking by service and stylist or doctor, deposits and memberships, a staff app with client notes and consent forms, and retail sales linked to the client record so the whole relationship is in one place.',
      features: [
        'Online booking by service, stylist or doctor with duration and buffer rules',
        'Deposits, packages and memberships with automatic renewal',
        'Staff app for schedules, client notes, consent forms and commissions',
        'Retail sales at checkout linked to the client record',
        'Reminders and review requests over WhatsApp and SMS',
        'Multi-location reporting on utilisation and revenue per chair or room',
      ],
    },
    {
      name: 'Influencer, affiliate and loyalty programme',
      body: 'Attribution you can trust for creators and partners, a portal where they see their sales and payouts, and a loyalty scheme with rules your team can change without a release.',
      features: [
        'Unique links and codes with attribution windows and commission tiers',
        'Creator portal with sales, payouts and content approvals',
        'Points, tiers and referrals with rules your team edits',
        'Checks for self-referrals and leaked coupon codes',
        'Payout exports to your accounting system',
        'Integration with Shopify, WooCommerce or a custom checkout',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Skin analysis from selfies',
      body: 'A vision model identifies visible concerns such as dryness, oiliness, dark spots or fine lines from a guided selfie and maps them to products through the same rules as the quiz. It is cosmetic guidance, labelled as such, and it recommends a dermatologist for anything that looks medical.',
    },
    {
      name: 'Review and support summarisation',
      body: 'Reviews, support tickets and social comments are clustered by product and theme each week, so the team sees that a new batch is pilling under sunscreen before it becomes a refund problem.',
    },
    {
      name: 'Shopping assistant on WhatsApp and the website',
      body: 'An assistant answers routine, ingredient and order questions from your catalogue and order data, suggests a regimen, and hands over to a person for complaints or anything it is not sure about.',
    },
    {
      name: 'Product and campaign copy drafts',
      body: 'Draft descriptions, emails and ad variations are generated from your ingredient and approved-claims library, with a rule set that blocks medical claims before a human editor reviews them.',
    },
  ],
  integrations: [
    'Commerce platforms (Shopify, Shopify Hydrogen, WooCommerce, Magento, Medusa)',
    'Payments (Razorpay, Stripe, PayU, Cashfree, UPI AutoPay)',
    'Shipping and returns (Shiprocket, Delhivery, Blue Dart, ClickPost, Shippo)',
    'Marketing and CRM (Klaviyo, WebEngage, MoEngage, HubSpot, Meta and Google Ads)',
    'WhatsApp Business API providers (Interakt, Wati, Gupshup, Twilio)',
    'Reviews and user content (Judge.me, Yotpo, Okendo)',
    'Subscription apps (Recharge, Skio, Appstle) where an app beats custom',
    'Salon software and POS (Zenoti, Fresha, Square)',
    'Analytics (GA4, Mixpanel, PostHog)',
  ],
  stackNote:
    'For storefronts we start from the platform you sell on and go headless only when the theme is genuinely holding you back: Shopify Hydrogen or Next.js in front of Shopify or Medusa, with a fast content layer for routines, quizzes and campaigns. Booking and membership platforms use a TypeScript backend with PostgreSQL and a React dashboard, with customer and staff apps in Flutter or React Native. WhatsApp flows run through an approved Business API provider, and AI features use hosted vision and language models with clear wording that they offer cosmetic guidance, not medical advice.',
  engagementNote:
    'A skin quiz with a routine builder or a salon booking system is typically a 4 to 8 week fixed-scope project. Custom storefront and subscription builds run longer and are delivered in phases so you keep selling throughout. Many brands keep us on part-time for campaign pages, new markets and the monthly stream of small improvements that add up to better repeat rates.',
  faqs: [
    {
      q: 'Should we stay on Shopify or go headless?',
      a: 'Stay on Shopify until the theme and apps stop you doing something that matters for revenue, such as a quiz-driven routine builder, a very fast mobile experience or deep customisation of checkout and subscriptions. Headless costs more to build and maintain. We usually recommend a custom storefront in front of Shopify rather than leaving the platform, so orders, inventory and apps keep working.',
    },
    {
      q: 'How accurate is AI skin analysis and is it safe to offer?',
      a: 'It is good at visible surface concerns under decent lighting and is positioned as cosmetic guidance, not diagnosis. We include guided capture, consent, clear limitations in the interface and a dermatologist referral for anything that looks medical. Recommendations still flow through rules your experts control, so the model informs rather than decides.',
    },
    {
      q: 'Can we sell on WhatsApp?',
      a: 'Yes. Through an approved WhatsApp Business API provider we connect your catalogue, take orders in the conversation, send payment links or UPI requests, confirm delivery and handle reorders. The same channel carries replenishment reminders and quiz follow-ups, with opt-in and message limits handled properly.',
    },
    {
      q: 'Do you help with launch strategy and social content as well as the website?',
      a: 'Our core work is software and design. For early-stage brands we also help shape the launch plan and social content approach alongside the website, so the site, the messaging and the channels fit together. The Morphology Skincare case study on this site describes an engagement that combined the two.',
    },
    {
      q: 'How long does a skin quiz and routine builder take to build?',
      a: 'A quiz with a rules engine, personalised routine pages, add-to-cart and follow-up sequences is typically live in four to seven weeks. Most of that time goes on writing and testing the recommendation rules with your product team, so having someone who knows the range available during the project makes the biggest difference to the timeline.',
    },
  ],
  relatedIndustries: ['fashion-and-retail', 'healthcare-and-wellness', 'hospitality-and-travel'],
  relatedWork: ['morphology-skincare-website'],
  relatedCostFeatures: ['shopping-cart-and-checkout', 'subscriptions-and-recurring-billing', 'whatsapp-business-integration', 'booking-and-scheduling', 'recommendation-engine', 'cms-and-content-editing'],
  keywords: [
    'skincare brand website development',
    'beauty ecommerce development company',
    'skin quiz app development',
    'salon booking software development',
    'D2C skincare subscription platform',
    'WhatsApp commerce for beauty brands',
    'AI skin analysis app development',
  ],
};
