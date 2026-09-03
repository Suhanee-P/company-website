import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'cms-and-content-editing',
  name: 'CMS and content editing',
  question: 'How much does it cost to add a CMS or content editing to a website or app?',
  metaDescription:
    'Cost to let your team edit pages, posts and in-app content without a developer using a headless CMS such as Sanity, Strapi or Payload, or a custom editor.',
  category: 'core',
  summary:
    'A content management system lets your team change pages, posts, product copy and in-app text without asking a developer. Connecting a headless CMS with a few content types is quick. Reusable page-builder blocks, drafts and approvals, localisation, media libraries and fully custom in-app editors with versioning and scheduling take more design and engineering time.',
  tiers: [
    {
      name: 'Basic',
      hours: [12, 30],
      includes: [
        'Headless CMS such as Sanity, Strapi, Payload or Contentful set up with two or three content types',
        'Content rendered in your site or app with image handling',
        'Preview of drafts before publishing',
        'Editor accounts and basic roles',
      ],
    },
    {
      name: 'Standard',
      hours: [30, 80],
      includes: [
        'Everything in Basic',
        'Reusable page blocks so marketing can assemble landing pages without design help',
        'Rich text with embeds, tables and callouts, plus a media library',
        'Draft, review and publish workflow with roles',
        'SEO fields, redirects and structured data driven from content',
        'Localisation for a second language and instant publishing on the live site',
      ],
    },
    {
      name: 'Advanced',
      hours: [80, 200],
      includes: [
        'Everything in Standard',
        'Custom in-app editor for content that lives inside your product, such as courses, help articles or catalogues',
        'Version history, scheduling and rollback',
        'Multi-site or multi-brand content from one system',
        'Migration of existing content from WordPress or another platform',
        'Custom plugins, validation rules and editor integrations',
      ],
    },
  ],
  breakdown: { design: 20, development: 60, qa: 20 },
  costDrivers: [
    'Number of content types and how much structure each needs',
    'Page-builder flexibility, because every reusable block is a small design and development job',
    'Workflow and permissions, from a single editor to multi-step approvals',
    'Localisation into several languages with fallbacks',
    'Migration of existing content, which is often messier than expected',
    'Whether editing happens in a separate CMS or inside your own application',
  ],
  cheaperAlternative:
    'For a marketing site with a blog, WordPress or Webflow remain the cheapest path and your team may already know them. Small teams sometimes use Notion as a content source through its API. A headless CMS is worth it when the same content feeds a website and an app, when developers want a modern front end, or when content models are structured rather than free-form pages.',
  hiddenCosts: [
    'CMS subscription fees, usually priced per seat, per record count or per API request',
    'Image CDN bandwidth for media-heavy sites',
    'Editor training and documentation for your team',
    'Major version upgrades of the CMS and its plugins every year or two',
  ],
  related: ['file-uploads-and-media', 'multi-language-support', 'search-and-filters', 'role-based-access-control'],
  faqs: [
    {
      q: 'Which headless CMS do you recommend?',
      a: 'Sanity for teams that want a highly customisable editor and real-time collaboration, Payload when you want the CMS self-hosted in the same codebase as a Next.js site, and Strapi for a self-hosted open-source option with a large plugin ecosystem. Contentful suits larger organisations with budget for its plans. We pick based on your team, hosting and content model.',
    },
    {
      q: 'Can our marketing team build landing pages without a developer?',
      a: 'Yes, if we build a set of reusable blocks such as hero, feature grid, testimonial, pricing table and call to action. Editors then assemble pages from those blocks and the design stays consistent. Each new block type is a small development task, so we start with the handful you use most.',
    },
    {
      q: 'Should we move away from WordPress?',
      a: 'Not automatically. WordPress is fine for a content site with a capable theme and good hosting. Reasons to move include a slow or insecure plugin-heavy setup, wanting the same content in an app, or a front end built in a modern framework. If you do move, migrating posts, media and redirects is part of the project and should be planned for.',
    },
  ],
};
