import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'healthcare-and-wellness',
  name: 'Healthcare & Wellness',
  shortName: 'healthcare and wellness businesses',
  metaTitle: 'Healthcare & Wellness Software Development | Aresyn',
  metaDescription:
    'Custom software for clinics, physiotherapists, fitness studios and telehealth founders: booking, patient records, video consults, memberships and AI notes.',
  h1: 'Custom software and AI for healthcare and wellness businesses',
  intro: [
    'Aresyn builds custom software for clinics, diagnostic labs, physiotherapy practices, yoga and fitness studios and telehealth founders: appointment booking, patient records with consent management, video consultations, class scheduling and memberships, wearable integrations and AI that drafts clinical notes for a clinician to approve. We work on fixed-scope projects or as a part-time engineering team, and we design for privacy rules such as India\'s DPDP Act, ABDM and HIPAA from day one.',
    'Most practices and studios we talk to already use a booking tool, a records system and a payment app, none of which know about each other. The receptionist re-types the patient into the lab portal, the physiotherapist keeps exercise plans in WhatsApp, and the studio owner cannot tell which members are about to lapse. The systems below are designed to sit together, with the patient or member at the centre and a clear consent trail behind every record.',
  ],
  audience: 'single and multi-branch clinics, diagnostic labs, physiotherapy and rehabilitation practices, yoga, pilates and fitness studios, nutrition and wellness coaches, and telehealth founders',
  challenges: [
    {
      title: 'No-shows and phone-tag bookings',
      body: 'The front desk spends the morning confirming appointments by phone, slots stay empty when a patient cancels late, and the waiting list is a notepad. Evening and weekend enquiries on WhatsApp are answered the next day.',
    },
    {
      title: 'Patient data is spread across apps and paper',
      body: 'History is on a card, reports are PDFs in WhatsApp, and consent is a signature on a form in a drawer. When a patient asks for their records, or a regulator asks how consent was obtained, the answer takes hours to assemble.',
    },
    {
      title: 'Clinicians spend consultation time typing',
      body: 'Notes, prescriptions and follow-up plans are written after the patient leaves or not at all. Templates help a little, but the doctor is still the most expensive data-entry operator in the building.',
    },
    {
      title: 'Memberships lapse quietly',
      body: 'Studios see attendance drop weeks before a membership expires, but nobody notices until the renewal fails. Package balances, trainer schedules and payouts are reconciled by hand at month end.',
    },
  ],
  solutions: [
    {
      name: 'Appointment booking and front-desk system',
      body: 'Online booking for patients and a calendar for the front desk that handles doctors, rooms, services and branches, with reminders that cut no-shows and a waiting list that fills cancelled slots automatically.',
      features: [
        'Online booking by doctor, service or room with buffer and preparation times',
        'WhatsApp, SMS and email reminders with one-tap confirm or reschedule',
        'Waiting list that offers cancelled slots to the next patient automatically',
        'Walk-in queue and token display for busy outpatient departments',
        'Prepayment or deposit at booking for high no-show services',
        'Multi-branch calendars with shared doctor rosters and leave management',
      ],
    },
    {
      name: 'Patient records and consent management',
      body: 'A structured record per patient with history, notes, reports and prescriptions, built around explicit consent capture and audit logs so you can answer privacy questions in minutes rather than days.',
      features: [
        'Structured history, vitals, allergies and visit notes with templates per speciality',
        'Report and prescription storage with secure, expiring share links',
        'Consent capture, purpose limitation and withdrawal records aligned with the DPDP Act',
        'ABHA linking and health record exchange through ABDM for providers in India',
        'Role-based access with an audit log of every view and edit',
        'Lab and imaging orders with results returned to the record',
      ],
    },
    {
      name: 'Teleconsultation and patient app',
      body: 'Video consultations with a virtual waiting room, e-prescriptions and a patient app that holds appointments, reports, invoices and home exercise plans, so follow-up happens without a phone call.',
      features: [
        'Video consultations with waiting room, screen share and recorded consent',
        'e-Prescriptions that follow India\'s Telemedicine Practice Guidelines',
        'Patient app for appointments, reports, invoices and reminders',
        'Home exercise programmes with videos and adherence tracking for physiotherapy',
        'Secure messaging with clinicians inside defined hours',
        'Online payments and insurance document upload',
      ],
    },
    {
      name: 'Studio scheduling and membership platform',
      body: 'Class timetables, memberships and packages with automatic renewals, check-in by QR code and the reports a studio owner needs to see who is drifting away before they leave.',
      features: [
        'Class timetables with capacity, waitlists and trainer assignment',
        'Packages, memberships and drop-ins with auto-renewal through UPI mandates or cards',
        'QR code check-in and attendance reports per member',
        'Lapse-risk alerts and automated win-back messages',
        'Trainer app for schedules, client notes and payouts',
        'On-demand video library and live-streamed classes for members',
      ],
    },
    {
      name: 'Diagnostic lab portal and reporting',
      body: 'Home-collection booking, sample tracking with barcodes, report generation with doctor sign-off and portals for patients and referring doctors, connected to your analysers where they support it.',
      features: [
        'Test catalogue, home-collection booking and phlebotomist routing',
        'Barcode tracking from sample collection to analyser to report',
        'Report generation with reference ranges and doctor sign-off',
        'Patient and referring-doctor portals for report download',
        'Analyser integration through HL7, ASTM or vendor middleware',
        'B2B billing for hospitals, corporates and health camps',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'Consultation note drafting',
      body: 'With the patient\'s consent, the consultation is transcribed and a draft note in your template is prepared for the clinician to correct and sign. The AI drafts; it does not diagnose, prescribe or write to the record without a clinician\'s approval.',
    },
    {
      name: 'Intake and triage assistant',
      body: 'Before the visit, an assistant collects symptoms, history and current medication in the patient\'s language, routes the booking to the right clinician and flags anything that needs urgent attention to a human. It is an intake tool, not a diagnostic one, and it says so.',
    },
    {
      name: 'Plain-language report summaries',
      body: 'Lab and imaging reports are turned into a short explanation for the patient, reviewed and released by the doctor, which reduces the calls a lab receives after every batch of results.',
    },
    {
      name: 'Member retention signals',
      body: 'For studios, attendance patterns and package usage predict which members are likely to lapse, so the team can reach out with a class suggestion or a call while it still matters.',
    },
  ],
  integrations: [
    'ABDM (ABHA, Health Information Exchange and consent manager) for providers in India',
    'Video (Twilio Video, Daily, Agora, Zoom SDK)',
    'Payments (Razorpay, Stripe, PayU, UPI AutoPay mandates for memberships)',
    'Messaging (WhatsApp Business API, MSG91, Twilio, SendGrid)',
    'Wearables and health data (Apple HealthKit, Google Health Connect, Fitbit, Garmin)',
    'Lab analysers and middleware (HL7, ASTM, FHIR APIs)',
    'Practice management and EHR systems (Practo Ray, HealthPlix, Epic and Cerner through FHIR where available)',
    'Pharmacy and inventory (Marg, Tally, wholesale supplier APIs)',
    'Calendars and identity (Google Calendar, Microsoft 365, Aadhaar eKYC)',
  ],
  stackNote:
    'Health data changes the defaults: records are encrypted at rest, every access is logged, data stays in the region the law requires (for Indian providers, typically AWS Mumbai or a Cloudflare region in India), and data models follow FHIR shapes so exchange with ABDM or hospital systems is straightforward later. Clinic dashboards are React or Next.js applications on a TypeScript backend with PostgreSQL. Patient, member and trainer apps are built in Flutter or React Native. Video runs through Twilio or Daily rather than a home-grown stack, and AI features use hosted models configured so patient data is not retained or used for training, with de-identification where possible.',
  engagementNote:
    'A booking and reminders system for a clinic, or a membership platform for a studio, is typically a 6 to 10 week fixed-scope project. Records, teleconsultation and ABDM integration follow in phases, each with its own security review. Practices often keep us on part-time to add branches, integrate new devices and maintain compliance features as the rules change.',
  faqs: [
    {
      q: 'Is the software compliant with HIPAA and India\'s DPDP Act?',
      a: 'We build the technical controls those laws expect: encryption, role-based access, consent records, audit logs, data residency, retention rules and account deletion. Compliance itself is organisational as well as technical, so we document what the system does and your privacy or legal adviser confirms the policies and agreements around it.',
    },
    {
      q: 'Can it link to ABHA numbers and the Ayushman Bharat Digital Mission?',
      a: 'Yes, for providers in India. Your facility registers as a health information provider or user, we integrate against the ABDM sandbox, implement ABHA creation and linking, and connect to the consent manager so records are shared only when the patient approves. Certification steps are handled during the project.',
    },
    {
      q: 'Will the AI make clinical decisions?',
      a: 'No. Every AI feature we build for healthcare drafts, summarises or organises information for a clinician to review. Nothing reaches the patient record or the patient without human approval, the interface makes that clear, and the models are configured so patient data is not retained or used for training.',
    },
    {
      q: 'Can members pay monthly automatically?',
      a: 'Yes. Memberships renew through UPI AutoPay mandates or saved cards via Razorpay or Stripe, with retries and reminders when a payment fails and a self-service portal for members to pause, upgrade or cancel. Package balances and trainer payouts are calculated from the same data.',
    },
    {
      q: 'How long does a clinic booking system take to build?',
      a: 'Online booking with reminders, a front-desk calendar, waiting list and online payments is typically live in six to nine weeks, including staff training and a soft launch with existing patients. Teleconsultation and patient records are added in following releases once the front desk is comfortable with the new flow.',
    },
  ],
  relatedIndustries: ['pharmaceuticals', 'beauty-and-skincare', 'education'],
  relatedWork: ['health-and-lifestyle-mobile-app'],
  relatedCostFeatures: ['booking-and-scheduling', 'video-calling', 'subscriptions-and-recurring-billing', 'push-and-email-notifications', 'role-based-access-control', 'ai-chatbot'],
  keywords: [
    'clinic management software development',
    'healthcare app development company india',
    'telemedicine app development',
    'physiotherapy practice software',
    'yoga studio membership app development',
    'ABDM integration developer',
    'diagnostic lab software custom',
  ],
};
