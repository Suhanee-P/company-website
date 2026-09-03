import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'video-calling',
  name: 'Video calling and live sessions',
  question: 'How much does it cost to add video calling to an app?',
  metaDescription:
    'Cost and effort to add one-to-one and group video calls, screen sharing, recording and live sessions to a web or mobile app via Daily, Agora, Twilio or LiveKit.',
  category: 'communication',
  summary:
    'Video calling is used for consultations, tutoring, telehealth, interviews and live classes. A one-to-one call built on a hosted video platform such as Daily, Agora, Twilio or LiveKit is a manageable integration. Group rooms, screen sharing, recording, waiting rooms, scheduling, in-call chat, low-bandwidth handling and compliance for medical use each add work, and every feature needs testing on real networks and devices.',
  tiers: [
    {
      name: 'Basic',
      hours: [30, 60],
      includes: [
        'One-to-one video and audio calls on web and mobile through a hosted video platform',
        'Pre-join screen with camera and microphone checks',
        'Mute, camera toggle, flip camera and end call controls',
        'Call linked to a booking or conversation so it starts from the right place',
      ],
    },
    {
      name: 'Standard',
      hours: [60, 150],
      includes: [
        'Everything in Basic',
        'Group rooms for up to a few dozen participants with a speaker layout',
        'Screen sharing and in-call text chat',
        'Cloud recording with playback from the app',
        'Waiting room, host controls and scheduled sessions with reminders',
        'Call quality indicators and automatic downgrade on weak networks',
      ],
    },
    {
      name: 'Advanced',
      hours: [150, 350],
      includes: [
        'Everything in Standard',
        'Live streaming to hundreds or thousands of viewers with chat and reactions',
        'Breakout rooms, hand raising, polls and whiteboard for classes',
        'Transcription, AI summaries and searchable recordings',
        'Compliance features for telehealth: consent, encryption and audit logs',
        'Phone dial-in and integration with calendar and payment for paid sessions',
      ],
    },
  ],
  breakdown: { design: 20, development: 55, qa: 25 },
  costDrivers: [
    'Participant count: one-to-one is simple, large groups and live streaming are not',
    'Recording, transcription and storage requirements',
    'Network conditions your users are on, which drives how much adaptive-quality work is needed',
    'Platform coverage: web, iOS and Android each have their own permission and background quirks',
    'Compliance for healthcare or education, including consent and data residency',
    'Interactive features such as whiteboards, polls and breakout rooms',
  ],
  cheaperAlternative:
    'For consultations or tutoring, generating a Zoom, Google Meet or Jitsi link from your booking system costs a fraction of an embedded video experience and is familiar to users. Cal.com and Calendly can even create the meeting link for you. Embedded video makes sense when the call must stay inside your product for branding, payment, records or compliance reasons.',
  hiddenCosts: [
    'Video platforms charge per participant minute, and recording and storage are extra',
    'Bandwidth and storage for recordings grow quickly',
    'Transcription and AI summary services are billed per minute',
    'Ongoing SDK updates as Apple and Google change permission and background rules',
  ],
  related: ['booking-and-scheduling', 'in-app-chat', 'online-payments', 'push-and-email-notifications', 'file-uploads-and-media'],
  faqs: [
    {
      q: 'Which video platform do you recommend?',
      a: 'It depends on the use case. Daily and 100ms are quick to integrate with good prebuilt interfaces, Agora and Twilio are mature with wide device coverage, and LiveKit is open source and can be self-hosted when data control or cost at scale matters. We choose after understanding participant counts, regions and compliance needs.',
    },
    {
      q: 'Will video calls work on slow Indian mobile networks?',
      a: 'Modern platforms adapt resolution and frame rate to the connection, and we add an audio-only fallback and clear quality indicators. Calls on 3G-quality connections are workable for one-to-one audio and low-resolution video. We test on throttled networks during QA rather than only on office Wi-Fi.',
    },
    {
      q: 'Can sessions be recorded and shared with participants afterwards?',
      a: 'Yes. Cloud recording captures the session, stores it in your storage bucket and makes it available in the app with access rules, for example only to the two people who attended. Adding transcription and an AI summary is popular for coaching and consultations and sits in the Advanced tier.',
    },
    {
      q: 'Is embedded video suitable for telehealth in India?',
      a: 'Yes, with the right controls. We add patient consent before the call, encrypt media in transit, restrict who can access recordings and keep an audit trail, in line with the Telemedicine Practice Guidelines and the DPDP Act. Your clinical and legal advisors define the policy; we implement it.',
    },
  ],
};
