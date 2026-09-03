import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'hospitality-and-travel',
  name: 'Hospitality & Travel',
  shortName: 'hospitality and travel businesses',
  metaTitle: 'Hotel & Travel Software Development Company | Aresyn',
  metaDescription:
    'Custom software for hotels, restaurants and tour operators: direct booking engines, channel managers, itinerary builders, B2B agent portals and guest apps.',
  h1: 'Custom software and AI for hotels, restaurants and travel companies',
  intro: [
    'Aresyn builds custom software for hotels, homestay groups, restaurants, tour operators and travel agencies: direct booking engines connected to your channel manager, itinerary builders and B2B agent portals, restaurant ordering and table management, guest apps with WhatsApp concierge and pricing dashboards. We work on fixed-scope projects or as a part-time engineering team, and we integrate with the PMS, OTAs and payment tools you already use.',
    'Hospitality businesses pay a commission on almost every booking that does not come through their own website, and most of their own websites make booking harder than Booking.com does. Tour operators build the same itinerary in Word for the tenth time, and restaurants juggle Zomato, Swiggy and walk-ins on three screens. The systems below are built to win back direct business and cut the repetition.',
  ],
  audience: 'owners and general managers of independent hotels, resorts and homestay groups, restaurant and cloud kitchen operators, inbound and outbound tour operators, and travel agencies selling to consumers or to other agents',
  challenges: [
    {
      title: 'Direct bookings lose to OTAs',
      body: 'Your website shows rooms but sends guests to a clunky third-party engine or a contact form. Guests go back to Booking.com, and you pay a commission that commonly runs between 15 and 25 percent on a customer who found you first.',
    },
    {
      title: 'Itineraries and quotes are rebuilt from scratch',
      body: 'Every enquiry means copying hotels, transfers and activities from an old document, checking supplier rates by phone and formatting a PDF. Quotes take a day, look different each time, and margin depends on who did the maths.',
    },
    {
      title: 'The front desk answers the same questions all day',
      body: 'Check-in time, Wi-Fi password, breakfast hours, late checkout, airport pickup. Guests ask on WhatsApp, by phone and at reception, and staff answer manually while the queue grows.',
    },
    {
      title: 'Rates and availability are managed by hand',
      body: 'Prices change per season, weekday and event, but updates are typed into each channel separately. Overbookings happen when the channel manager is not connected to the actual PMS, and pricing decisions are guesses.',
    },
  ],
  solutions: [
    {
      name: 'Direct booking engine and hotel website',
      body: 'A fast, mobile-first booking flow on your own domain that shows live availability from your PMS or channel manager, takes payment, sells add-ons and confirms instantly, so the guest never needs to leave.',
      features: [
        'Live availability and rates via channel manager or PMS API',
        'Room, package and add-on selection with promo codes and member rates',
        'Payment by card, UPI and pay-at-hotel with deposit rules',
        'Instant confirmation by email and WhatsApp with modification links',
        'Google Hotel Ads free booking links and metasearch feed',
        'Multi-property and multi-currency support for groups',
      ],
    },
    {
      name: 'Itinerary builder and quoting for tour operators',
      body: 'A tool that assembles day-by-day itineraries from your library of hotels, transfers and activities with supplier rates and margin rules, and produces branded PDF proposals and confirmations in minutes.',
      features: [
        'Library of hotels, activities, transfers and guides with seasonal supplier rates',
        'Drag-and-drop day planner with automatic costing and margin',
        'Branded PDF proposals with photos, inclusions and terms',
        'Versioned quotes with customer acceptance and payment links',
        'Supplier voucher and booking request generation',
        'Departure manifest and operations checklist per trip',
      ],
    },
    {
      name: 'B2B agent portal',
      body: 'A portal where sub-agents and corporate clients search your inventory, see net rates and commissions, book and pay, and download vouchers, so your team stops handling agent bookings by email.',
      features: [
        'Agent onboarding with tiered net rates and credit limits',
        'Search and book hotels, packages and transfers from your contracted inventory',
        'Wallet, credit and invoice-based payment with statements',
        'Voucher, invoice and itinerary downloads per booking',
        'Commission reports and agent performance dashboard',
      ],
    },
    {
      name: 'Restaurant ordering and table management',
      body: 'QR ordering, kitchen display and table management for dine-in, plus your own delivery ordering channel, with Zomato and Swiggy orders pulled into the same kitchen screen.',
      features: [
        'QR menu with ordering, modifiers and payment from the table',
        'Kitchen display system with prep times and course firing',
        'Table reservations, waitlist and floor plan',
        'Own-brand delivery ordering site and app with delivery zones',
        'Aggregator order sync from Zomato and Swiggy',
        'Daily sales, item performance and wastage reports',
      ],
    },
    {
      name: 'Guest app and WhatsApp concierge',
      body: 'A pre-arrival to checkout guest experience on WhatsApp or a light app: check-in forms, requests, upsells and local recommendations, with staff handling everything from one inbox.',
      features: [
        'Pre-arrival check-in with ID upload and arrival time',
        'Requests for housekeeping, room service and transfers routed to the right team',
        'Upsells for late checkout, spa, dining and experiences',
        'Shared staff inbox with SLAs and escalation',
        'Post-stay feedback and review requests',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Guest and enquiry assistant on WhatsApp',
      body: 'An assistant that answers availability, rate, policy and local questions from your live data, in the guest\'s language, collects the details for a booking or quote, and hands the conversation to staff for anything unusual. Every answer is grounded in your own content, not the open internet.',
    },
    {
      name: 'Itinerary drafting for tour operators',
      body: 'Given a destination, dates, budget and interests, the system drafts a day-by-day itinerary from your own library and rate sheets, which your consultant edits before sending. It cuts the first draft from hours to minutes without inventing hotels you do not contract.',
    },
    {
      name: 'Rate suggestions from demand signals',
      body: 'Occupancy, booking pace, local events and competitor rates feed a model that proposes nightly rates for the coming weeks. Revenue managers approve or override suggestions, and the tool explains the reasons so pricing stays a decision, not a black box.',
    },
    {
      name: 'Review summaries and response drafts',
      body: 'Reviews from Google, TripAdvisor and OTAs are grouped into themes each week, so you see that breakfast complaints rose or that housekeeping praise fell, and a draft response in your voice is prepared for each review for a person to approve.',
    },
  ],
  integrations: [
    'Channel managers such as SiteMinder, STAAH, eZee Centrix and RateGain',
    'Property management systems including Cloudbeds, eZee, Opera, Mews and Hotelogix',
    'Booking.com, Expedia, Agoda, MakeMyTrip and Airbnb through channel manager or direct APIs',
    'Amadeus, Sabre, Travelport and TBO for flights and hotel inventory',
    'Google Hotel Ads and Google Business Profile',
    'Razorpay, Stripe, PayU and Adyen for payments in multiple currencies',
    'Zomato, Swiggy and Petpooja for restaurant orders and POS',
    'WhatsApp Business API, Twilio and SendGrid for guest messaging',
    'TripAdvisor, Google Reviews and Trustpilot for review data',
  ],
  stackNote:
    'Booking software has to be fast on mobile, correct about availability and safe with payments. We build booking engines and portals in Next.js or React with a TypeScript backend on PostgreSQL, keep availability in sync through channel manager and PMS webhooks with an inventory lock during checkout, and take payment through gateway-hosted flows so card data never touches your servers. Guest and staff apps are Flutter or WhatsApp-first depending on how your guests actually communicate, and AI assistants run on hosted models with retrieval over your own property content and rate rules.',
  engagementNote:
    'A direct booking engine connected to your channel manager, or a QR ordering and kitchen display setup, is typically a 6 to 10 week fixed-scope project. Itinerary builders and B2B portals are delivered in phases, starting with your highest-volume product type. Many hospitality clients keep us on part-time for seasonal changes, new properties, OTA connections and marketing site updates.',
  faqs: [
    {
      q: 'Why build a booking engine instead of using the one from our channel manager?',
      a: 'Bundled engines are fine if conversion and brand are not priorities. A custom engine on your own domain loads faster, matches your website, sells packages and add-ons the way you want, and supports member rates and multi-property flows most bundled engines handle poorly. It still reads availability from the channel manager, so overbooking risk is unchanged. We advise on which option fits after seeing your current conversion numbers.',
    },
    {
      q: 'Can you connect to our PMS and OTAs?',
      a: 'Yes, usually through your channel manager, which already holds the OTA connections, or directly through the PMS API where one exists. We read availability and rates, push bookings, and reconcile daily so the PMS remains the system of record. If your PMS has no API, a channel manager with an open API is the practical route and we help you choose one.',
    },
    {
      q: 'Will the WhatsApp assistant annoy guests or give wrong information?',
      a: 'It answers only from your property content, rate rules and live availability, and it says so when a question is outside that. Guests can reach a person at any point with one message, and staff see every conversation in a shared inbox. Outbound messages follow the WhatsApp opt-in and template rules, so guests get confirmations and requested updates, not marketing they did not ask for.',
    },
    {
      q: 'We are a tour operator with agents abroad. Can the portal handle multiple currencies and taxes?',
      a: 'Yes. Net rates, mark-ups and commissions can be held per agent in their currency, with conversion rules you control, and invoices carry the tax treatment that applies to each sale, including GST on domestic packages and the different handling of inbound versus outbound services. We scope your exact markets and tax positions with your accountant before building the pricing logic.',
    },
    {
      q: 'How long does a direct booking engine take to build?',
      a: 'A booking engine with live availability from your channel manager, room and package selection, payments, confirmations and a basic admin view is typically live in six to nine weeks. Channel manager and payment gateway access are the usual bottlenecks, so we request them in the first week and build the guest-facing flow while they are being set up.',
    },
  ],
  relatedIndustries: ['car-rental-and-fleet', 'real-estate'],
  relatedCostFeatures: ['booking-and-scheduling', 'online-payments', 'whatsapp-business-integration', 'third-party-api-integration', 'ai-chatbot', 'multi-language-support'],
  keywords: [
    'hotel booking engine development',
    'custom hotel software development company',
    'tour operator software development',
    'itinerary builder software custom',
    'B2B travel portal development india',
    'restaurant ordering app development',
    'whatsapp chatbot for hotels',
  ],
};
