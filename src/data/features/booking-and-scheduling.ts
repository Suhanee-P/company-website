import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'booking-and-scheduling',
  name: 'Booking and scheduling',
  question: 'How much does it cost to add booking and scheduling to an app?',
  metaDescription:
    'Cost to add appointment booking, availability, reminders, calendar sync and deposits to an app: tiers, cost drivers and ready-made tools like Cal.com.',
  category: 'ops',
  summary:
    'Booking and scheduling covers showing availability, letting customers pick a slot, confirming and reminding them, and giving staff a calendar to manage it. A single-provider booking form is quick. Multiple staff and resources, time zones, two-way calendar sync, deposits, waitlists and class capacities each add real complexity, mostly in the edge cases.',
  tiers: [
    {
      name: 'Basic',
      hours: [20, 45],
      includes: [
        'Availability rules for one provider or location',
        'Customer booking form with confirmation email',
        'Admin list of upcoming bookings with cancel and reschedule',
        'Buffer time between appointments and lead-time limits',
      ],
    },
    {
      name: 'Standard',
      hours: [45, 120],
      includes: [
        'Everything in Basic',
        'Multiple staff, rooms or resources with their own hours',
        'Calendar views for staff and two-way sync with Google and Outlook calendars',
        'SMS and WhatsApp reminders with customer self-service rescheduling',
        'Time zone handling for remote appointments',
        'Deposits or full payment at booking',
      ],
    },
    {
      name: 'Advanced',
      hours: [120, 280],
      includes: [
        'Everything in Standard',
        'Recurring bookings, packages and memberships',
        'Classes and events with capacity, waitlists and automatic promotion',
        'Bookings that need several resources at once, such as a room, a machine and a therapist',
        'Multi-location management, dynamic pricing and no-show policies',
        'Reporting on utilisation, revenue and cancellations',
      ],
    },
  ],
  breakdown: { design: 20, development: 55, qa: 25 },
  costDrivers: [
    'Number of resource types that must be free at the same time for a booking',
    'Two-way calendar sync, which has to handle edits made outside your system',
    'Payments, refunds and deposit rules',
    'Reminders across email, SMS and WhatsApp and their delivery reporting',
    'Time zones and daylight saving changes for international customers',
    'Business rules such as minimum notice, cancellation windows and staff preferences',
  ],
  cheaperAlternative:
    'For appointments with a small team, Calendly, Cal.com, Acuity or Setmore cover most needs on a subscription and can be embedded in your site. Salons and clinics are well served by Fresha or Zenoti, and gyms by Mindbody or Glofox. Building custom makes sense when booking is a core part of your product, when rules are unusual, or when it must connect deeply to your own operations and customer data.',
  hiddenCosts: [
    'Per-message fees for SMS and WhatsApp reminders',
    'Payment gateway charges on deposits and refunds',
    'Calendar API quotas and occasional sync repairs when staff change accounts',
    'Support effort around no-shows, disputes and edge cases such as daylight saving changes',
  ],
  related: ['online-payments', 'push-and-email-notifications', 'whatsapp-business-integration', 'user-authentication', 'crm-integration'],
  faqs: [
    {
      q: 'Should we use Calendly or build our own booking system?',
      a: 'If booking is a convenience rather than the core of your business, use a ready-made tool and embed it. Build your own when the booking rules are unusual, when it must tie into inventory, staff rosters or customer accounts, or when the subscription cost across many locations would exceed a one-time build. Many clients start with a tool and move later.',
    },
    {
      q: 'Can customers book on WhatsApp?',
      a: 'Yes. A booking flow can run inside WhatsApp with slot selection through buttons and lists, confirmations and reminders in the same thread. It works especially well in India where customers prefer WhatsApp over apps. It requires WhatsApp Business API access and adds per-conversation fees from Meta.',
    },
    {
      q: 'How do you avoid double bookings?',
      a: 'Availability is checked at the moment of confirmation inside a database transaction, so two customers cannot take the same slot even if they are looking at the calendar at the same time. External calendars are synced in both directions so a meeting added in Google Calendar blocks the slot in your system too.',
    },
    {
      q: 'Do reminders actually reduce no-shows?',
      a: 'In our experience and in published studies from healthcare and service businesses, reminders with a one-tap reschedule option reduce no-shows noticeably, and a small deposit reduces them further. We recommend both for any business where a missed slot has a real cost, and we track no-show rates so you can see the effect.',
    },
  ],
};
