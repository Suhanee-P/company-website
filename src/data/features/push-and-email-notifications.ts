import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'push-and-email-notifications',
  name: 'Push, email and SMS notifications',
  question: 'How much does it cost to add push and email notifications to an app?',
  metaDescription:
    'Cost and effort to add push notifications, transactional email and SMS to a web or mobile app, with preferences, templates, delivery tracking and provider fees.',
  category: 'communication',
  summary:
    'Notifications tell users what happened and bring them back: order updates, reminders, alerts and marketing. Sending a handful of transactional emails through a provider is quick. Mobile push, SMS, user preferences, branded templates, scheduling, batching and delivery tracking across several channels add integration work and the kind of testing that only shows problems on real devices.',
  tiers: [
    {
      name: 'Basic',
      hours: [12, 28],
      includes: [
        'Transactional emails for four to six events such as welcome, reset and confirmation',
        'Branded email template with your logo and colours',
        'Sending through Resend, SendGrid, Postmark or Amazon SES',
        'Delivery logging so support can see what was sent',
      ],
    },
    {
      name: 'Standard',
      hours: [28, 70],
      includes: [
        'Everything in Basic',
        'Mobile push via Firebase Cloud Messaging and Apple Push with deep links into the right screen',
        'In-app notification centre with read and unread state',
        'User preference screen: which events, which channels, quiet hours',
        'SMS for critical events through Twilio, MSG91 or similar',
        'Unsubscribe handling and bounce management',
      ],
    },
    {
      name: 'Advanced',
      hours: [70, 160],
      includes: [
        'Everything in Standard',
        'Scheduled and recurring notifications such as reminders and digests',
        'Batching and rate limits so users get one summary instead of twenty alerts',
        'Triggered campaigns based on user behaviour, for example abandoned checkout',
        'Localised templates per language and timezone-aware sending',
        'Analytics on delivery, open and click rates per channel',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Number of channels: email alone is simple, email plus push plus SMS plus WhatsApp is not',
    'Number of notification events and templates to design and translate',
    'Per-user preferences and quiet hours that must be respected everywhere',
    'Push on both iOS and Android, including badge counts and background behaviour',
    'Batching and scheduling logic, which needs background workers',
    'Deliverability work: domain authentication, warm-up and bounce handling',
  ],
  cheaperAlternative:
    'Services such as Knock, Courier, OneSignal, Novu or Customer.io handle multi-channel delivery, preferences and templates through one API, so you pay a monthly fee instead of building the orchestration layer. For email-only needs, Resend or Postmark with a template each cover most products.',
  hiddenCosts: [
    'Per-message fees for SMS and per-conversation fees for WhatsApp',
    'Email provider tiers based on monthly volume',
    'Notification platforms charge per monthly active user or per notification',
    'Deliverability maintenance when domains get flagged or providers change rules',
  ],
  related: ['whatsapp-business-integration', 'user-authentication', 'booking-and-scheduling', 'in-app-chat', 'ai-workflow-automation'],
  faqs: [
    {
      q: 'Do push notifications work on web as well as mobile apps?',
      a: 'Yes. Web push works in Chrome, Edge, Firefox and, since iOS 16.4, in Safari for sites installed to the home screen. Adoption is lower than mobile push because users must opt in through a browser prompt, so we usually treat web push as a secondary channel next to email.',
    },
    {
      q: 'How do you avoid annoying users with too many notifications?',
      a: 'We design a preference screen from the start, group low-priority events into digests, and set rate limits per user per channel. Every notification has a clear reason and a deep link to the relevant screen. Marketing messages are separated from transactional ones so opting out of one does not silence the other.',
    },
    {
      q: 'Why do my emails land in spam and what does it cost to fix?',
      a: 'Usually because the sending domain lacks SPF, DKIM and DMARC records, or the content and volume pattern looks like spam. Setting up authentication and a dedicated sending subdomain is a few hours of work. Reputation recovery for a domain that has already been flagged takes weeks of gradual, clean sending.',
    },
  ],
};
