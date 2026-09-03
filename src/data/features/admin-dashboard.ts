import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'admin-dashboard',
  name: 'Admin dashboard and back office',
  question: 'How much does it cost to build an admin dashboard for an app?',
  metaDescription:
    'Cost and effort to build an admin panel for a web or mobile app: user management, data tables, moderation, settings and reports, with tiers and alternatives.',
  category: 'core',
  summary:
    'An admin dashboard is the internal side of your product where your team manages users, content, orders and settings. A simple panel with searchable tables and edit forms is quick to build, especially with an admin framework. Custom workflows, bulk actions, moderation queues, permission layers and operational reports push the effort up because each screen needs its own design and testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [24, 50],
      includes: [
        'Searchable, sortable tables for users and your two or three core records',
        'Create, edit and deactivate forms with validation',
        'Simple counters for signups, orders or activity',
        'Admin login separated from customer login',
      ],
    },
    {
      name: 'Standard',
      hours: [50, 120],
      includes: [
        'Everything in Basic',
        'Bulk actions such as export, tag, approve or email a filtered set',
        'Detail pages that show a record with its related history and notes',
        'Moderation or approval queues for user-generated content or applications',
        'Configurable settings for pricing, taxes, email templates and feature flags',
        'Activity log of admin actions',
      ],
    },
    {
      name: 'Advanced',
      hours: [120, 260],
      includes: [
        'Everything in Standard',
        'Custom operational workflows such as refunds, disputes or onboarding checklists',
        'Role and permission layers for different internal teams',
        'Support tools: impersonate a user, resend emails, view their device and session state',
        'Scheduled jobs and imports with progress and error reporting',
        'Embedded reports and charts for daily operations',
      ],
    },
  ],
  breakdown: { design: 20, development: 60, qa: 20 },
  costDrivers: [
    'Number of record types that need full create, read, update and delete screens',
    'Workflows with multiple steps, states and notifications rather than plain edits',
    'Bulk operations and imports that must handle partial failures gracefully',
    'Permission layers for different internal teams',
    'Design polish: a plain functional panel is much cheaper than a branded, animated one',
    'Reporting inside the panel rather than in a separate analytics tool',
  ],
  cheaperAlternative:
    'For internal tools, low-code admin builders such as Retool, Appsmith, Budibase or ToolJet can produce a working panel on top of your database in days rather than weeks. Frameworks like Django Admin, Laravel Nova, Filament or AdminJS give you tables and forms almost for free if your backend already uses them. Custom builds make sense when the admin panel is used by many staff every day or by customers.',
  hiddenCosts: [
    'Low-code tools charge per editor or user each month',
    'Admin panels grow with every product feature and need ongoing maintenance',
    'Training and documentation for staff who use it daily',
  ],
  related: ['role-based-access-control', 'analytics-dashboard', 'reporting-and-exports', 'cms-and-content-editing', 'user-authentication'],
  faqs: [
    {
      q: 'Should the admin dashboard be part of the main app or a separate application?',
      a: 'We usually build it as a separate front end that talks to the same API, protected by its own login and network rules. That keeps the customer-facing app small and fast, lets us ship admin changes without touching the product, and makes it easier to lock down access from specific IP ranges or devices.',
    },
    {
      q: 'Can you build the admin panel with a low-code tool to save money?',
      a: 'Often yes, and we will say so during scoping. Retool or Appsmith on top of your database is the fastest route to an internal tool. The trade-offs are monthly per-user fees, limited design control and a dependency on the vendor, which matter more once dozens of staff rely on it daily.',
    },
    {
      q: 'How do you keep admin actions safe from mistakes?',
      a: 'Destructive actions get confirmation steps, bulk changes show a preview before they run, and everything is logged with who did it and when. For sensitive operations such as refunds or deletions we add role checks and, where needed, a second approval, so a slip by one person cannot damage the business.',
    },
  ],
};
