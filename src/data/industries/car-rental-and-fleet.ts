import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'car-rental-and-fleet',
  name: 'Car Rental & Fleet',
  shortName: 'car rental and fleet businesses',
  metaTitle: 'Car Rental & Fleet Software Development | Aresyn',
  metaDescription:
    'Custom software for car rental and fleet businesses: booking engines, fleet dashboards, damage inspection apps, dynamic pricing and maintenance scheduling.',
  h1: 'Custom software and AI for car rental and fleet businesses',
  intro: [
    'Aresyn builds custom software for car rental companies, chauffeur services, car subscription startups and businesses running their own fleets: online booking engines, fleet and dispatch dashboards, driver and inspection apps, telematics integrations, maintenance scheduling and AI for pricing and damage detection. We work on fixed-scope projects or as a part-time engineering team, and we integrate with the GPS units, payment gateways and accounting tools you already use.',
    'Rental and fleet operators lose money in the gaps between systems: a car sits idle because the booking calendar is a whiteboard, a damage claim is lost because the check-out photos are on a driver\'s personal phone, and a service is missed because the odometer reading never left the vehicle. Each of the systems below closes one of those gaps and shares its data with the others.',
  ],
  audience: 'self-drive and chauffeur-driven rental companies, car subscription and leasing startups, corporate and employee transport operators, and businesses managing their own delivery or sales fleets',
  challenges: [
    {
      title: 'Bookings and availability live in several places',
      body: 'Enquiries come through the website, phone, WhatsApp and aggregators such as Zoomcar or Kayak. Availability is confirmed by calling the branch, double bookings happen on long weekends, and a cancelled booking does not free the car in time for the next customer.',
    },
    {
      title: 'Damage disputes come down to whose photo is newer',
      body: 'Check-out inspections are a paper form and a few photos on somebody\'s phone. When a customer disputes a scratch, the evidence is incomplete, deposits are refunded to keep the peace, and card chargebacks are lost for lack of documentation.',
    },
    {
      title: 'Pricing does not follow demand',
      body: 'Rate cards are flat across the year. Festival weeks and conference weekends sell out at everyday prices while midweek cars sit idle, and nobody has time to compare competitor rates city by city.',
    },
    {
      title: 'Maintenance and compliance are tracked in spreadsheets',
      body: 'Service is due by kilometres nobody recorded, insurance and permit renewals surprise the branch, and traffic fines arrive months after the renter has gone. Cars get grounded on the busiest day of the month.',
    },
  ],
  solutions: [
    {
      name: 'Online booking engine and customer app',
      body: 'A booking flow on your website and app that shows true availability by vehicle class, takes deposits as card holds, verifies the driver before pickup and issues a digital agreement, so branch staff spend their time on handovers rather than phone calls.',
      features: [
        'Real-time availability by vehicle class, location and dates with buffers for cleaning and turnaround',
        'Extras such as additional drivers, child seats, insurance waivers and delivery to an address',
        'Card pre-authorisation for deposits with automatic release after return',
        'Driving licence and ID upload with verification before pickup',
        'Customer app for bookings, digital agreements, extensions, invoices and support',
        'Corporate accounts with negotiated rates, approvals and monthly billing',
      ],
    },
    {
      name: 'Fleet operations dashboard',
      body: 'A single screen for head office and branch managers showing where every vehicle is, what state it is in and how it is performing, fed by telematics, the driver app and the booking system.',
      features: [
        'Live map of every vehicle from telematics units or the driver app',
        'Utilisation, revenue per vehicle and idle days by branch and class',
        'Vehicle status board: available, rented, cleaning, in service, grounded',
        'Branch-to-branch transfers and one-way rental planning',
        'Fuel and EV charge levels with low-level alerts before handover',
        'Tolls, FASTag charges and fines matched to the renter and invoiced automatically',
      ],
    },
    {
      name: 'Digital inspection and handover app',
      body: 'A guided walk-around on a phone or tablet that records the condition of the car at check-out and check-in with photos, fuel, odometer and a signature, and produces a side-by-side comparison when there is a claim.',
      features: [
        'Guided photo capture per panel with timestamp and location',
        'Fuel or charge level, odometer and accessories checklist',
        'Customer signature on the device and instant PDF by email or WhatsApp',
        'Side-by-side check-out and check-in comparison for damage claims',
        'Damage cost estimates from a parts and labour table you maintain',
        'Works offline in basements and airport car parks and syncs later',
      ],
    },
    {
      name: 'Pricing and yield management',
      body: 'Rate rules that respond to season, day of week, lead time and local events, with guardrails on margin and a preview of the revenue impact before a change goes live.',
      features: [
        'Rate rules by season, weekday, lead time and rental length',
        'Event and holiday calendars per city with automatic uplifts',
        'Competitor rate monitoring where feeds are available',
        'Discount codes, corporate rates and partner commissions',
        'Minimum-margin guardrails with approval for exceptions',
        'Simulation view showing bookings and revenue under proposed rates',
      ],
    },
    {
      name: 'Maintenance, compliance and driver management',
      body: 'Service schedules driven by real odometer readings, renewal reminders for every document a vehicle needs, and driver records for chauffeur and corporate transport operations.',
      features: [
        'Service schedules by kilometres or days from telematics or inspection readings',
        'Insurance, permit, pollution certificate and fitness expiry tracking with reminders',
        'Work orders with vendor, cost and downtime recorded against each vehicle',
        'Driver onboarding with licence verification, training records and rosters',
        'Chauffeur dispatch with trip sheets, duty hours and customer ratings',
        'Accounting exports to Tally, Zoho Books or QuickBooks',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Dynamic pricing suggestions',
      body: 'A model trained on your booking history, cancellations, local events and lead times suggests rates per class and branch for the coming weeks, with an explanation for each suggestion. Your team approves or adjusts before anything is published.',
    },
    {
      name: 'Damage detection from inspection photos',
      body: 'Check-in photos are compared against check-out photos of the same panels, and new scratches or dents are highlighted for a person to confirm. The system never charges a customer on its own; it makes the evidence obvious and the review fast.',
    },
    {
      name: 'Demand forecasting and fleet positioning',
      body: 'Forecasts by branch and vehicle class flag where you will run short next weekend and where cars will sit idle, and suggest transfers or purchase decisions with the numbers behind them.',
    },
    {
      name: 'Customer support assistant',
      body: 'An assistant on WhatsApp and the app handles extension requests, invoice copies, pickup instructions and booking changes from live data, and hands the conversation to a branch when a person is needed.',
    },
  ],
  integrations: [
    'Telematics and GPS (Teltonika, Loconav, Fleetx, Samsara, Geotab, OEM connected-car APIs)',
    'Payments and deposits (Razorpay, Stripe, PayU, card pre-authorisation holds)',
    'Identity and licence checks (DigiLocker, Aadhaar eKYC, Onfido, Digio)',
    'Aggregators and channel partners (Zoomcar, Turo, Kayak, Skyscanner car hire feeds)',
    'Maps and routing (Google Maps Platform, Mapbox)',
    'Tolls and fines (FASTag statements, traffic challan lookups)',
    'Accounting (Tally, Zoho Books, QuickBooks, Xero)',
    'Messaging (WhatsApp Business API, Twilio, MSG91)',
    'Fuel cards and EV charging networks',
  ],
  stackNote:
    'Rental software is a scheduling problem with money attached, so we start with a careful relational model of vehicles, bookings and holds in PostgreSQL, a TypeScript or Python backend with background jobs for telematics polling and payment holds, and a React or Next.js dashboard for branch and head-office staff. Inspection and driver apps are built in Flutter or React Native with offline photo queues and image compression, because handovers happen in car parks with poor signal. Pricing rules run as versioned configuration so a change can be previewed before it goes live, and AI photo comparison is a review step, never an automatic charge.',
  engagementNote:
    'A booking engine with payments and a digital inspection app is usually an 8 to 12 week fixed-scope project. Fleet dashboards and pricing tools are added in later phases once bookings are flowing through the system. Operators often keep us on part-time to add branches, connect new telematics hardware and tune pricing rules each season.',
  faqs: [
    {
      q: 'Can the system hold a card for the security deposit instead of charging it?',
      a: 'Yes. Stripe, Razorpay and most gateways support pre-authorisation on cards, so the deposit is blocked at pickup and released automatically after check-in, or captured in part for damage or fuel. UPI does not support holds, so for UPI customers we take a refundable deposit and automate the refund on return.',
    },
    {
      q: 'Will the inspection app work at airports and in basements with no signal?',
      a: 'Yes. Photos, readings and signatures are stored on the device and uploaded when a connection returns, and the dashboard shows a pending-sync state rather than a gap. We compress images on the device so a full inspection uploads quickly on a weak mobile connection.',
    },
    {
      q: 'Can you connect the GPS units already fitted in our cars?',
      a: 'In most cases, yes. Teltonika, Loconav, Fleetx, Samsara and Geotab all expose APIs or data feeds, and many connected cars from manufacturers do too. We pull location, odometer, ignition and fuel data into the dashboard and use it for maintenance schedules and live tracking during rentals.',
    },
    {
      q: 'Do you build for self-drive, chauffeur-driven or both?',
      a: 'Both, and the difference matters. Self-drive needs licence verification, deposits, inspections and telematics. Chauffeur-driven and corporate transport need driver rosters, duty hours, trip sheets and monthly billing. We scope the workflows you run today and build only the modules you need, with room to add the other later.',
    },
    {
      q: 'How long does a car rental booking system take to build?',
      a: 'A booking engine with real-time availability, online payments and deposit holds, driver verification and a customer portal is typically live in eight to twelve weeks. The fleet dashboard and inspection app can follow in a second phase, or run in parallel if the launch date is fixed by a season or an event.',
    },
  ],
  relatedIndustries: ['logistics-and-shipping', 'hospitality-and-travel', 'fintech'],
  relatedCostFeatures: ['booking-and-scheduling', 'online-payments', 'gps-tracking-and-maps', 'offline-mode', 'file-uploads-and-media', 'subscriptions-and-recurring-billing'],
  image: 'fleet',
  keywords: [
    'car rental software development',
    'car rental booking system development',
    'custom fleet management software',
    'vehicle inspection app development',
    'car rental app development company india',
    'dynamic pricing software for car rental',
    'chauffeur dispatch software',
  ],
};
