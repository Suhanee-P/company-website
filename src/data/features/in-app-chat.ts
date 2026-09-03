import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'in-app-chat',
  name: 'In-app chat and messaging',
  question: 'How much does it cost to add in-app chat to an app?',
  metaDescription:
    'Cost and effort to add real-time chat to a web or mobile app: one-to-one and group messaging, attachments, read receipts, moderation and push, with tiers.',
  category: 'communication',
  summary:
    'In-app chat lets customers talk to your team, buyers talk to sellers, or members talk to each other without leaving your product. A one-to-one text chat built on a hosted messaging service is a contained job. Group conversations, attachments, typing indicators, read receipts, offline delivery, search, moderation and push notifications for new messages add real-time infrastructure and a lot of device testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [24, 50],
      includes: [
        'One-to-one text chat between two user types, for example customer and support',
        'Conversation list with unread counts and last message preview',
        'Real-time delivery through a hosted service such as Stream, Sendbird or Ably',
        'Push or email notification when a message arrives while the app is closed',
      ],
    },
    {
      name: 'Standard',
      hours: [50, 120],
      includes: [
        'Everything in Basic',
        'Group conversations with members, admins and mentions',
        'Image, file and voice note attachments with previews',
        'Typing indicators, read receipts and online status',
        'Message search and conversation archiving',
        'Admin view of conversations for support and dispute handling',
      ],
    },
    {
      name: 'Advanced',
      hours: [120, 260],
      includes: [
        'Everything in Standard',
        'Self-hosted real-time backend on WebSockets for full data control',
        'Moderation: keyword filters, reporting, blocking and AI flagging of abuse',
        'End-to-end encryption for sensitive conversations',
        'Chatbot or AI assistant that answers first and hands over to a person',
        'Message threads, reactions, scheduled messages and rich cards',
      ],
    },
  ],
  breakdown: { design: 20, development: 55, qa: 25 },
  costDrivers: [
    'Hosted messaging service versus a self-built WebSocket backend',
    'Group chat features, which multiply permission and notification cases',
    'Attachments and media, which bring storage, previews and scanning',
    'Reliability requirements: offline queueing, delivery guarantees and message ordering',
    'Moderation and safety features for marketplaces and communities',
    'Compliance needs such as encryption, retention and audit access',
  ],
  cheaperAlternative:
    'Stream, Sendbird, CometChat, TalkJS and Twilio Conversations provide chat backends and often ready-made interface components, cutting the build to integration and styling. For customer support only, embedding Intercom, Crisp, Freshchat or a WhatsApp link is far cheaper than a custom chat and gives your team an inbox for free.',
  hiddenCosts: [
    'Messaging platforms charge per monthly active user, with higher tiers for moderation and search',
    'Storage and bandwidth for attachments and voice notes',
    'Moderation staff time for community and marketplace chats',
    'Push notification volume and the maintenance of delivery reliability',
  ],
  related: ['push-and-email-notifications', 'video-calling', 'whatsapp-business-integration', 'ai-chatbot', 'file-uploads-and-media'],
  faqs: [
    {
      q: 'Should we build our own chat or use a service like Stream or Sendbird?',
      a: 'Use a service unless you have strict data residency rules or expect very high volume where per-user pricing becomes expensive. Hosted platforms solve ordering, offline sync and scaling, which are the hard parts. Your budget then goes into the experience and the business logic around conversations.',
    },
    {
      q: 'Can chat be tied to an order, booking or listing rather than free-floating?',
      a: 'Yes, and it usually should be. We create a conversation per order or listing so context, attachments and disputes stay together, and staff can see the related record beside the messages. This also makes it simple to close or archive conversations when the transaction completes.',
    },
    {
      q: 'How do you stop buyers and sellers taking deals off the platform?',
      a: 'With a mix of product design and moderation: masking phone numbers and emails in messages, prompting to complete the transaction in-app, and flagging patterns that suggest off-platform deals. It cannot be prevented entirely, so the product also needs to give both sides a reason to stay, such as payment protection.',
    },
  ],
};
