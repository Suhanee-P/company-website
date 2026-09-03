import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'whatsapp-business-integration',
  name: 'WhatsApp Business API integration',
  question: 'How much does it cost to integrate WhatsApp Business API into an app?',
  metaDescription:
    'Cost and effort to send order updates, reminders and support conversations over WhatsApp from your app via the Meta Cloud API or a BSP such as Wati or Gupshup.',
  category: 'communication',
  summary:
    'WhatsApp is where many customers in India and much of the world actually read messages, so businesses want order updates, reminders, OTPs and support conversations delivered there. Sending approved template messages from your app through the Meta Cloud API or a business solution provider is a modest integration. Two-way conversations, a shared team inbox, interactive buttons, catalogues, payments and chatbot flows add considerably more.',
  tiers: [
    {
      name: 'Basic',
      hours: [14, 30],
      includes: [
        'Meta Business verification and WhatsApp Business API setup on your number',
        'Four to six approved message templates such as order confirmed, shipped and reminder',
        'Sending templates from app events with delivery and read status stored',
        'Opt-in capture and opt-out handling to stay within Meta policy',
      ],
    },
    {
      name: 'Standard',
      hours: [30, 80],
      includes: [
        'Everything in Basic',
        'Two-way messaging with replies stored against the customer record',
        'Shared team inbox in your admin panel or through a provider such as Interakt or Wati',
        'Interactive buttons and list messages for confirmations and choices',
        'Media messages: invoices, images and documents',
        'Template management screen with approval status from Meta',
      ],
    },
    {
      name: 'Advanced',
      hours: [80, 180],
      includes: [
        'Everything in Standard',
        'Chatbot flows for order status, bookings and FAQs with handover to a person',
        'AI assistant answering from your live data and knowledge base',
        'WhatsApp Flows for in-chat forms such as bookings and lead capture',
        'Catalogue and payment messages for commerce',
        'Broadcast campaigns with segmentation, scheduling and analytics',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Direct Meta Cloud API versus a business solution provider with a ready inbox',
    'Two-way conversations and inbox tooling rather than one-way notifications',
    'Chatbot and AI flows, which need conversation design and testing',
    'Number of templates and languages, each requiring Meta approval',
    'Commerce features such as catalogues and in-chat payments',
    'Meta business verification delays, which can stall the whole integration',
  ],
  cheaperAlternative:
    'Providers such as Interakt, Wati, AiSensy, Gupshup and Twilio give you a ready inbox, template management and broadcast tools with simple APIs, so custom work is limited to triggering messages from your app. For a very small team, the free WhatsApp Business app with a click-to-chat link on your site covers basic support with no development at all.',
  hiddenCosts: [
    'Meta charges per marketing, utility and authentication conversation, with rates that vary by country',
    'Business solution providers add a monthly platform fee and sometimes a markup per message',
    'Template rejections and quality rating drops can pause messaging until fixed',
  ],
  related: ['push-and-email-notifications', 'ai-chatbot', 'booking-and-scheduling', 'online-payments', 'crm-integration'],
  faqs: [
    {
      q: 'Can we message customers on WhatsApp without them opting in?',
      a: 'No. Meta requires opt-in before you send business-initiated template messages, and low-quality or unwanted messaging lowers your number\'s quality rating and can restrict it. We capture consent at checkout, signup or via a click-to-chat link and record it so every send is defensible.',
    },
    {
      q: 'What is the difference between using Meta directly and a provider like Wati?',
      a: 'The Meta Cloud API is free to use apart from per-conversation charges, but you build your own inbox and template tooling. Providers wrap the API with an inbox, campaign tools and support for a monthly fee. For most businesses that want staff to reply to customers, a provider is the faster and cheaper route.',
    },
    {
      q: 'Can an AI bot answer WhatsApp questions using our order data?',
      a: 'Yes. The bot receives the message, identifies the customer by number, looks up orders or bookings through your API, and replies with real information. It escalates to a person when confidence is low or the customer asks. We keep a review log so you can see what the bot said and correct it.',
    },
  ],
};
