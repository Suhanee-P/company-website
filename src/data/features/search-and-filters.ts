import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'search-and-filters',
  name: 'Search and filtering',
  question: 'How much does it cost to add search and filters to an app?',
  metaDescription:
    'Cost and effort to add search, filters, sorting and autocomplete to a web or mobile app, from simple database search to Algolia, Meilisearch or Elasticsearch.',
  category: 'core',
  summary:
    'Search and filtering let users find the right record, product or listing quickly. A database-backed search with a few filters and sorting is inexpensive. Typo tolerance, instant results as you type, faceted filters with counts, ranking rules and search across millions of records need a dedicated search engine, indexing pipelines and more careful interface design and testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [12, 28],
      includes: [
        'Keyword search over one or two record types using the database',
        'Three to five filters such as category, price range, status or date',
        'Sorting by relevance, date or price',
        'Paginated results with a clear empty state',
      ],
    },
    {
      name: 'Standard',
      hours: [28, 70],
      includes: [
        'Everything in Basic',
        'Instant results as you type with debouncing and highlighting',
        'Typo tolerance and synonyms through Meilisearch, Typesense or Algolia',
        'Faceted filters with result counts that update as filters change',
        'Indexing pipeline that keeps search in sync with your data',
        'Search analytics: top queries and queries with no results',
      ],
    },
    {
      name: 'Advanced',
      hours: [70, 160],
      includes: [
        'Everything in Standard',
        'Custom ranking rules that boost popular, in-stock or promoted items',
        'Personalised results based on user history or location',
        'Semantic search using embeddings for natural-language queries',
        'Geo search with distance filters and map results',
        'Multi-language search with per-language stemming',
      ],
    },
  ],
  breakdown: { design: 20, development: 60, qa: 20 },
  costDrivers: [
    'Volume of records: millions of rows need an external search engine and indexing jobs',
    'Number of filter dimensions and whether counts must update live',
    'Ranking and relevance rules, which take tuning against real queries',
    'Keeping the index in sync when data changes constantly',
    'Semantic or AI search, which adds embedding pipelines and vector storage',
    'Mobile interfaces where filters need to work well on small screens',
  ],
  cheaperAlternative:
    'PostgreSQL full-text search covers a surprising amount before you need anything else. When you outgrow it, Meilisearch and Typesense are open source and can be self-hosted at low cost, while Algolia is the fastest to integrate but priced per search and record. Shopify, WooCommerce and most marketplaces also ship with usable search and filters out of the box.',
  hiddenCosts: [
    'Hosted search services charge per record and per search operation each month',
    'Relevance tuning is an ongoing task as your catalogue and users change',
    'Servers or memory for self-hosted search engines',
  ],
  related: ['recommendation-engine', 'analytics-dashboard', 'gps-tracking-and-maps', 'shopping-cart-and-checkout', 'inventory-management'],
  faqs: [
    {
      q: 'When do we need a dedicated search engine instead of database search?',
      a: 'When users expect typo tolerance, results as they type, facet counts or relevance ranking, or when the tables have more than a few hundred thousand rows. Database search is fine for admin panels and small catalogues. A product catalogue, listings site or knowledge base usually crosses that line early.',
    },
    {
      q: 'Which search service do you recommend?',
      a: 'For most clients, Meilisearch or Typesense: open source, fast, typo tolerant and cheap to host. Algolia is worth its price when you need its merchandising tools and are happy paying per operation. Elasticsearch or OpenSearch make sense for log-style data or very large, complex queries.',
    },
    {
      q: 'Can search understand natural questions like "waterproof jacket under 5000 for trekking"?',
      a: 'Yes, with semantic search. We convert products and queries into embeddings so meaning matches even when words differ, and combine that with normal keyword and filter logic so price and stock constraints still apply. It sits in the Advanced tier because it adds an embedding pipeline and vector storage.',
    },
  ],
};
