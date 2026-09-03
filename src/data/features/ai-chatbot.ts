import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'ai-chatbot',
  name: 'AI chatbot for customer support and sales',
  question: 'How much does it cost to build an AI chatbot for a business?',
  metaDescription:
    'Cost to build an AI chatbot that answers from your own documents and data on your website or WhatsApp: tiers, LLM running costs, guardrails and handoff.',
  category: 'ai',
  summary:
    'An AI chatbot answers customer questions using a large language model grounded in your own content, so replies come from your policies and product details rather than general knowledge. A single-channel bot over a curated document set is modest work. Connecting it to live systems, letting it take actions, adding multiple channels and building proper evaluation and handoff takes far longer.',
  tiers: [
    {
      name: 'Basic',
      hours: [24, 50],
      includes: [
        'Website chat widget answering from a curated set of documents and FAQs',
        'Retrieval pipeline over your content so answers cite your material',
        'Basic guardrails: scope limits, refusal of off-topic requests, no personal data collection',
        'Handoff by email when the bot cannot help',
        'Simple transcript log for review',
      ],
    },
    {
      name: 'Standard',
      hours: [50, 130],
      includes: [
        'Everything in Basic',
        'Second channel such as WhatsApp or Instagram DMs',
        'Automatic content sync from your help centre, website or documents with citations in answers',
        'Conversation memory, lead capture and handoff to a live agent inbox',
        'Admin dashboard with transcripts, thumbs up and down feedback and unanswered questions',
        'Prompt and content tuning based on the first weeks of real conversations',
      ],
    },
    {
      name: 'Advanced',
      hours: [130, 300],
      includes: [
        'Everything in Standard',
        'Connections to live data: order status, bookings, account details, with user verification',
        'Actions such as booking a slot, raising a ticket or issuing a return, with confirmation steps',
        'Multilingual support and tone control per brand',
        'Automated evaluation suite that tests answers against expected responses before each change',
        'PII redaction, escalation rules and audit trail for regulated industries',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'How scattered your source content is; clean help articles are easy, PDFs and old emails are not',
    'Number of channels, since WhatsApp, Instagram and web each have their own rules and limits',
    'Live data access and actions, which need authentication, permissions and careful confirmation flows',
    'Accuracy expectations, because getting from good to reliably correct means evaluation work and iteration',
    'Languages and regional phrasing, especially mixed-language chats common in India',
    'Compliance needs such as consent, data retention and redaction',
  ],
  cheaperAlternative:
    'If your questions are mostly standard support topics and you already use a help desk, the built-in AI agents from Intercom (Fin), Zendesk, Freshdesk or Crisp are the cheapest route. Chatbase and Tidio are reasonable for a website FAQ bot with no integrations. Build custom when the bot must read from your own systems, take actions, run on WhatsApp with your own logic, or meet data residency rules.',
  hiddenCosts: [
    'LLM usage billed per token, which grows with conversation length and volume',
    'WhatsApp Business conversation fees charged by Meta per 24-hour window',
    'Vector database and hosting for the retrieval layer',
    'Ongoing content curation and evaluation, since every policy change must reach the bot',
  ],
  related: ['whatsapp-business-integration', 'document-data-extraction', 'ai-workflow-automation', 'in-app-chat', 'search-and-filters'],
  faqs: [
    {
      q: 'Will the chatbot make things up?',
      a: 'Language models can produce confident wrong answers. We reduce that by grounding every reply in retrieved passages from your content, instructing the model to say when it does not know, showing citations, and testing against a set of known questions before each change. Some risk remains, so we design handoff to a person for anything involving money, health or legal commitments.',
    },
    {
      q: 'What does it cost to run each month?',
      a: 'Running cost depends on volume. Token charges for a support bot are usually a small fraction of a rupee per message with current hosted models, and WhatsApp adds a per-conversation fee. Hosting the retrieval layer is modest. We provide a usage dashboard so you can see spend per channel and set limits.',
    },
    {
      q: 'Can the bot answer in Hindi, Gujarati or mixed language?',
      a: 'Yes. Current models handle Indian languages and mixed English chats well, though quality varies by language and you should review sample transcripts. Your source content can stay in English and the bot can reply in the customer\'s language, which we test explicitly during the tuning phase.',
    },
    {
      q: 'How do we keep the bot up to date as our policies change?',
      a: 'The bot reads from a content source you control, such as your help centre, a shared folder or a CMS. Updating an article updates the bot on the next sync, usually within minutes. We also surface unanswered questions in the dashboard so you know which topics need new content.',
    },
  ],
};
