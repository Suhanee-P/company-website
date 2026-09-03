import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'recommendation-engine',
  name: 'Recommendation engine',
  question: 'How much does it cost to build a recommendation engine for an app or online store?',
  metaDescription:
    'Cost to add product, content or service recommendations to an app or store, from simple rules to personalised machine learning: tiers, data needs, options.',
  category: 'ai',
  summary:
    'A recommendation engine suggests products, content or people based on what a user and others like them have done. Simple versions use rules and popularity and need little data. Personalised versions learn from browsing and purchase behaviour, need event tracking and enough traffic to be useful, and must respect business rules such as stock and margin.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 40],
      includes: [
        'Bestsellers, trending and new arrivals by category',
        'Related items by shared category, tags or attributes',
        'Frequently bought together from co-purchase counts',
        'Placement components for product pages, cart and emails',
      ],
    },
    {
      name: 'Standard',
      hours: [40, 120],
      includes: [
        'Everything in Basic',
        'Event tracking for views, add-to-cart, purchases and skips',
        'Personalised suggestions using collaborative filtering or embedding similarity on your catalogue',
        'Nightly recompute with a fallback to popularity for new users',
        'Toggle to compare recommended versus default placements',
        'Exclusion rules for out-of-stock, already-purchased and restricted items',
      ],
    },
    {
      name: 'Advanced',
      hours: [120, 350],
      includes: [
        'Everything in Standard',
        'Real-time personalisation that reacts within a session',
        'Hybrid models combining behaviour, content and context such as location or season',
        'Business rules for margin, stock levels, promotions and brand priorities',
        'Experimentation framework with holdout groups and uplift reporting',
        'Offline evaluation and monitoring so quality does not drift',
      ],
    },
  ],
  breakdown: { design: 10, development: 60, qa: 30 },
  costDrivers: [
    'Catalogue size and how well items are described, since sparse data limits what any model can learn',
    'Traffic volume; personalisation needs enough interactions per item to beat simple popularity',
    'Real-time requirements versus nightly batch updates',
    'Business rules layered on top, which often take longer than the model itself',
    'Number of placements and channels, including email and push',
    'Measurement, because proving uplift needs a proper experiment setup',
  ],
  cheaperAlternative:
    'Stores on Shopify can start with apps such as Rebuy, LimeSpot or Wiser, and Algolia Recommend or Amazon Personalize provide managed models for larger catalogues with usage-based pricing. For small catalogues under a few hundred items, well-designed rules usually perform as well as machine learning. Custom engines earn their cost when you have substantial traffic, unusual item types or rules that managed services cannot express.',
  hiddenCosts: [
    'Event tracking storage and processing, which grows with traffic',
    'Compute for retraining and, for managed services, per-request fees',
    'Ongoing tuning as the catalogue and seasons change',
    'Analyst time to read experiment results and adjust rules',
  ],
  related: ['search-and-filters', 'analytics-dashboard', 'shopping-cart-and-checkout', 'ai-chatbot'],
  faqs: [
    {
      q: 'How much data do we need before recommendations work?',
      a: 'Popularity and rule-based suggestions work from day one because they only need your catalogue. Personalised models need a history of interactions; a rough rule is that most items should have been viewed or bought by many different users. Below that, personalisation adds cost without adding accuracy, so we usually start with rules and add learning once traffic justifies it.',
    },
    {
      q: 'Will recommendations increase our sales?',
      a: 'Often, but the effect varies widely by store and catalogue, and vendor case studies tend to show their best results. The honest approach is to measure: we ship with a comparison between recommended and default placements so you see the actual uplift on your own traffic before expanding the feature further.',
    },
    {
      q: 'Can recommendations respect stock, margin and promotions?',
      a: 'Yes, and they should. A model that keeps suggesting out-of-stock or low-margin items does more harm than good. We add a rules layer after the model that filters and re-ranks suggestions by stock, margin targets, active promotions and brand priorities, with settings your team can change without a developer.',
    },
  ],
};
