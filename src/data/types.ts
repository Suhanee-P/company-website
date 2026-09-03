export interface Faq {
  q: string;
  a: string; // 40-80 words, self-contained, direct answer first
}

export type ImageKey = 'fleet' | 'realEstate' | 'logistics';

export interface Industry {
  slug: string;            // URL segment, e.g. 'logistics-and-shipping'
  name: string;            // 'Logistics & Shipping'
  shortName: string;       // used inside sentences: 'logistics companies'
  metaTitle: string;       // <= 60 chars, primary query first
  metaDescription: string; // <= 160 chars
  h1: string;
  intro: string[];         // 2 paragraphs. Paragraph 1 = direct 40-70 word answer to "what does Aresyn build for X".
  audience: string;        // who we talk to, e.g. 'freight forwarders, 3PLs, courier and last-mile companies'
  challenges: { title: string; body: string }[];                    // 3-4, concrete operational pains
  solutions: { name: string; body: string; features: string[] }[]; // 4-5 systems we build, each with 4-6 concrete features
  aiUseCases: { name: string; body: string }[];                     // 3-4, specific and realistic
  integrations: string[];  // 6-10 named tools/APIs common in this industry
  stackNote: string;       // 1 paragraph: typical stack choices for this industry and why
  engagementNote: string;  // 1 paragraph: typical project shapes, timelines, part-time options
  faqs: Faq[];             // 4-6
  relatedIndustries: string[];     // slugs
  relatedWork?: string[];          // work collection ids (filenames without .md)
  relatedCostFeatures?: string[];  // feature slugs from src/data/features
  image?: ImageKey;
  keywords: string[];      // 5-8 real search queries this page targets
}

export type FeatureCategory =
  | 'core' | 'payments' | 'commerce' | 'communication' | 'data' | 'ai' | 'integrations' | 'mobile' | 'ops';

export interface FeatureTier {
  name: 'Basic' | 'Standard' | 'Advanced';
  hours: [number, number];   // total effort range (design + development + QA), in hours
  includes: string[];        // 3-6 concrete items
}

export interface Feature {
  slug: string;
  name: string;              // 'User authentication & accounts'
  question: string;          // 'How much does it cost to add user authentication to an app?'
  metaDescription: string;   // <= 160 chars, may mention 'estimate' but no currency numbers (computed)
  category: FeatureCategory;
  summary: string;           // 40-70 words. Direct answer WITHOUT currency figures; the template prepends the computed range.
  tiers: FeatureTier[];      // exactly 3: Basic, Standard, Advanced
  breakdown: { design: number; development: number; qa: number }; // percentages, sum = 100
  costDrivers: string[];     // 4-6 things that push effort up
  cheaperAlternative?: string; // when an off-the-shelf tool is the better call (name real products)
  hiddenCosts: string[];     // 2-4 recurring or non-obvious costs (third-party fees, compliance, maintenance)
  related: string[];         // 3-5 feature slugs
  faqs: Faq[];               // 3-4
}

export interface Service {
  slug: string;
  name: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  whatWeBuild: { name: string; body: string }[];
  deliverables: string[];
  stack: string[];
  faqs: Faq[];
  relatedIndustries: string[];
  relatedFeatures: string[];
  relatedWork?: string[];
}
