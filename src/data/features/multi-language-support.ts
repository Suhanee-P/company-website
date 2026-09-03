import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'multi-language-support',
  name: 'Multi-language support and localisation',
  question: 'How much does it cost to add multi-language support to an app?',
  metaDescription:
    'Cost and effort to translate and localise a web or mobile app: language switching, translation files, right-to-left layouts, currencies, dates and SEO.',
  category: 'core',
  summary:
    'Multi-language support lets the same product serve users in Hindi, Gujarati, Arabic, Spanish or any other language. Wrapping interface text in translation files and adding a language switcher is a mechanical job whose size depends on how many screens exist. Translating user content, right-to-left layouts, localised dates, currencies, legal text and per-language SEO pages take considerably more design and testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 36],
      includes: [
        'Interface text extracted into translation files for two or three languages',
        'Language switcher with the choice remembered per user or device',
        'Localised dates, numbers and currency formatting',
        'Fallback to the default language for any missing string',
      ],
    },
    {
      name: 'Standard',
      hours: [36, 90],
      includes: [
        'Everything in Basic',
        'Translated emails, notifications and error messages',
        'Per-language URLs for public pages with hreflang tags for search engines',
        'Admin screens to edit translations without a code release',
        'Translated content records such as product names and descriptions',
        'Language detection from the browser or device with a manual override',
      ],
    },
    {
      name: 'Advanced',
      hours: [90, 200],
      includes: [
        'Everything in Standard',
        'Right-to-left layouts for Arabic, Hebrew and Urdu across every screen',
        'Region-specific pricing, taxes, payment methods and legal text',
        'Machine translation drafts with a review workflow for editors',
        'Localised app store listings and screenshots',
        'Pluralisation and grammar rules handled per language',
      ],
    },
  ],
  breakdown: { design: 20, development: 55, qa: 25 },
  costDrivers: [
    'Number of screens and strings to extract, especially in an existing app',
    'Right-to-left languages, which affect layout on every screen',
    'Translating user-generated and catalogue content, not just the interface',
    'Public pages that need per-language URLs, sitemaps and metadata',
    'Regional differences in pricing, tax, payment methods and legal requirements',
    'Professional translation costs and review cycles per language',
  ],
  cheaperAlternative:
    'Translation management platforms such as Lokalise, Crowdin, Phrase or Tolgee handle the editing, review and machine-translation workflow so your team never edits files by hand. For public marketing pages, Weglot or a CMS with built-in localisation can be cheaper than building translation tooling into a custom site.',
  hiddenCosts: [
    'Professional translation fees per word, per language, for every text change',
    'Translation platform subscriptions priced per language and per string',
    'Every new feature must be translated before release, which slows shipping',
  ],
  related: ['cms-and-content-editing', 'push-and-email-notifications', 'online-payments', 'search-and-filters'],
  faqs: [
    {
      q: 'Should we build multi-language support from the start or add it later?',
      a: 'If there is any chance you will need it, set up the translation layer at the start even with only one language. Extracting text from an existing app later is tedious and error-prone. The setup adds a few hours early on and saves weeks of retrofitting when the second language arrives.',
    },
    {
      q: 'Can we use machine translation to save money?',
      a: 'For drafts, yes. Google Translate, DeepL or a large language model give a usable first version, and a native speaker then reviews the strings that matter most, such as onboarding, payments and legal screens. We wire that review step into the workflow so machine output never goes live unchecked.',
    },
    {
      q: 'Does supporting Indian regional languages cost the same as European ones?',
      a: 'The engineering effort is similar, but fonts, input methods and text length need testing. Hindi, Gujarati and Tamil strings often run longer than English and use scripts that some default fonts render badly, so layouts and font choices are checked screen by screen during QA.',
    },
  ],
};
