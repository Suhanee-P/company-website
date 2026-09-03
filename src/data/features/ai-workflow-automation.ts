import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'ai-workflow-automation',
  name: 'AI workflow automation and agents',
  question: 'How much does it cost to build AI workflow automation for a business?',
  metaDescription:
    'Cost to automate workflows with AI agents that read emails, forms and documents, then act in your CRM or help desk with approvals: tiers, running costs, limits.',
  category: 'ai',
  summary:
    'AI workflow automation uses language models to read incoming emails, forms, chats and documents, decide what they mean, and then take steps in your systems, with a person approving anything important. One well-defined workflow is a modest project. Multi-step agents that work across several systems, with approvals, audit trails and evaluation, take much longer and need ongoing care.',
  tiers: [
    {
      name: 'Basic',
      hours: [20, 50],
      includes: [
        'One workflow, for example inbound enquiry emails classified and turned into CRM leads',
        'Field extraction with a hosted model and a clear prompt specification',
        'Creation of the record in one destination system',
        'Approval by a person through an email or chat button before anything is sent externally',
        'Log of every run with inputs and outputs',
      ],
    },
    {
      name: 'Standard',
      hours: [50, 140],
      includes: [
        'Everything in Basic',
        'Multi-step workflow across two or three systems, such as help desk, CRM and accounting',
        'Agent tools for lookups, drafting replies and updating records with permission checks',
        'Approval queue screen with edit-before-approve and rejection reasons',
        'Retries, error handling and alerts when a step fails',
        'Prompt versioning so changes can be tested and rolled back',
      ],
    },
    {
      name: 'Advanced',
      hours: [140, 350],
      includes: [
        'Everything in Standard',
        'Long-running workflows with state, waiting for replies or external events',
        'Evaluation suite that replays past cases before each change goes live',
        'Role-based approvals, spending limits and cost controls per workflow',
        'Observability dashboard: volumes, success rates, time saved, model spend',
        'Fallbacks to smaller classifiers or rules where the model is overkill',
      ],
    },
  ],
  breakdown: { design: 15, development: 55, qa: 30 },
  costDrivers: [
    'Number of systems the workflow touches and how good their APIs are',
    'How much judgement each step needs; classification is easy, negotiation is not',
    'Approval and audit requirements, which add screens and state management',
    'Variety of inputs, since messy emails and scanned attachments need more handling than clean forms',
    'Reliability expectations, because a workflow that runs unattended needs evaluation and monitoring',
    'Volume, which decides whether per-token costs need optimisation with caching or smaller models',
  ],
  cheaperAlternative:
    'Zapier, Make and self-hosted n8n now include AI steps and are enough for simple flows such as summarising a form and posting to Slack. Tools like Relevance AI and Lindy let non-developers build light agents. Move to custom when the workflow touches sensitive data, needs strict permissions and audit trails, runs at high volume, or has to fit into your own application.',
  hiddenCosts: [
    'Model usage fees that scale with volume and document length',
    'Platform fees if an orchestration or agent service is used',
    'Reviewer time for approvals and exceptions',
    'Prompt and workflow maintenance as models are updated or retired by providers',
  ],
  related: ['ai-chatbot', 'document-data-extraction', 'third-party-api-integration', 'crm-integration', 'push-and-email-notifications'],
  faqs: [
    {
      q: 'Which workflows are good candidates for AI automation?',
      a: 'Repetitive tasks with clear inputs and a definable correct outcome: triaging enquiries, extracting order details from emails, drafting standard replies, updating records after a call, checking documents against a checklist. Poor candidates are one-off decisions, tasks needing negotiation, and anything where an error is expensive and hard to reverse without a person in the loop.',
    },
    {
      q: 'Can the AI act without a person approving each step?',
      a: 'It can, and for low-risk steps such as tagging or drafting it should. For anything that sends money, commits the business or contacts a customer, we recommend an approval step at least until you have months of clean run history. Approval rules can then be relaxed per step based on measured accuracy.',
    },
    {
      q: 'How do you stop the model from doing something wrong?',
      a: 'By limiting what it can do. Each tool the agent can call has explicit permissions, inputs are validated, spending and rate limits are enforced in code rather than in the prompt, and risky actions require confirmation. Every run is logged so mistakes are visible and reversible.',
    },
    {
      q: 'What does it cost to run per month?',
      a: 'For most office workflows, model fees are a small part of the total compared with the staff time saved, usually a few rupees per processed item with current hosted models. The larger ongoing cost is keeping the workflow tuned as your business and the models change, which we typically cover under a part-time support arrangement.',
    },
  ],
};
