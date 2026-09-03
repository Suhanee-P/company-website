import type { Industry } from '../types';

export const industry: Industry = {
  slug: 'education',
  name: 'Education & EdTech',
  shortName: 'education companies',
  metaTitle: 'Custom EdTech & LMS Software Development | Aresyn',
  metaDescription:
    'Custom software for schools, coaching institutes and edtech startups: LMS and course platforms, live classes, assessments, parent apps and fee collection.',
  h1: 'Custom software and AI for schools, coaching institutes and edtech companies',
  intro: [
    'Aresyn builds custom software for schools, coaching institutes, tutoring startups and corporate training teams: learning management systems, course marketplaces, live class scheduling, assessment engines, student and parent apps and fee collection with automated reminders. We deliver fixed-scope projects or work as a part-time engineering team, and we integrate with Zoom, Google Classroom, Razorpay and the tools your teachers already use.',
    'Most education businesses run on a patchwork: a Zoom link in a WhatsApp group, marks in Excel, fees tracked in Tally, and a generic LMS that teachers quietly stopped using. The result is that parents ask the front desk for information the school already has, and founders cannot see which courses actually make money. The systems below are built to replace that patchwork one piece at a time.',
  ],
  audience: 'school owners and principals, coaching institute directors, tutoring and test-prep startups, corporate L&D teams and edtech founders',
  challenges: [
    {
      title: 'Teachers avoid the LMS',
      body: 'A general-purpose LMS is built for universities, not for a coaching institute running batches across three centres. Teachers keep attendance in a register and share notes on WhatsApp, so the platform data is incomplete and nobody trusts its reports.',
    },
    {
      title: 'Parents cannot see progress without calling',
      body: 'Attendance, test scores, fee dues and timetable changes live in different places. The front desk answers the same questions every day and parents still find out about a missed class a week later.',
    },
    {
      title: 'Fee collection is manual and leaky',
      body: 'Dues are tracked in spreadsheets, reminders go out by hand, and reconciliation against bank statements happens at month end. Late payments are discovered late and discounts are applied inconsistently.',
    },
    {
      title: 'Assessments do not scale',
      body: 'Question papers are built in Word, evaluated by hand and results are typed back in. Running weekly tests across batches takes more teacher hours than the teaching itself, and there is no per-topic view of where a student is weak.',
    },
  ],
  solutions: [
    {
      name: 'Learning management and course platform',
      body: 'A platform shaped around how your institute actually teaches: batches, centres, subjects and terms, with recorded and live content, assignments and progress tracking that teachers will use because it matches their week.',
      features: [
        'Batch and centre structure with per-subject timetables and teacher allocation',
        'Recorded lessons with secure streaming, watermarking and download controls',
        'Assignments with file submission, rubrics and teacher feedback',
        'Student progress by topic, not just by course completion',
        'Self-serve course catalogue with enrolment and coupons for edtech marketplaces',
        'Teacher app for attendance, homework and quick announcements',
      ],
    },
    {
      name: 'Live class scheduling and attendance',
      body: 'Scheduling that handles the messy reality of substitutions, holidays and clashing rooms, and pushes the right join link to the right student without anyone forwarding it manually.',
      features: [
        'Timetable builder with clash detection across teachers, rooms and batches',
        'Automatic Zoom or Google Meet links per session with attendance pulled from the meeting',
        'Substitution and reschedule workflow with instant parent and student notifications',
        'QR or geofenced check-in for in-person classes',
        'Recording upload to the LMS after each session',
      ],
    },
    {
      name: 'Assessment engine and question bank',
      body: 'A tagged question bank and test builder so teachers assemble a paper in minutes, students take it on phone or paper, and results flow into per-topic analytics automatically.',
      features: [
        'Question bank tagged by syllabus chapter, difficulty and question type',
        'Online tests with timers, randomised sections and anti-cheating controls',
        'OMR sheet scanning for offline tests using a phone camera',
        'Per-student and per-batch topic-level weakness reports',
        'Rank lists, percentile and comparison against previous attempts',
        'Export to PDF question papers with answer keys',
      ],
    },
    {
      name: 'Student and parent app',
      body: 'An Android and iOS app that gives parents attendance, marks, dues, timetable and notices in one place, and gives students their content and tests, so the front desk stops being the information channel.',
      features: [
        'Attendance, homework and test results with push notifications',
        'Fee dues, receipts and one-tap payment through Razorpay or PayU',
        'Timetable with changes, holidays and event calendar',
        'Notices and circulars with read receipts',
        'Parent-teacher messaging with office-hours limits',
        'Multiple children under one parent login',
      ],
    },
    {
      name: 'Fee management and reconciliation',
      body: 'Fee structures, instalments, discounts and reminders handled by the system, with payments matched to bank and gateway statements so accounts stop reconciling by hand.',
      features: [
        'Fee plans per course, batch and academic year with instalments and late fees',
        'Automated reminders by WhatsApp, SMS and email before and after due dates',
        'Online payment links and receipts, including GST invoices where applicable',
        'Scholarship and discount approvals with an audit trail',
        'Reconciliation against Razorpay, bank and cash collections',
        'Export to Tally or Zoho Books',
      ],
    },
  ],
  aiUseCases: [
    {
      name: 'AI doubt-solving assistant with teacher escalation',
      body: 'An assistant trained on your own notes, recorded lessons and past papers that answers student doubts in the chat, shows the source lesson, and routes anything it cannot answer confidently to a teacher. It works within your syllabus rather than pulling answers from the open internet.',
    },
    {
      name: 'Assisted grading for written answers',
      body: 'For subjective questions, the model drafts a score and comments against your rubric and the teacher approves or edits. It is a time saver for long-answer evaluation, not a replacement for teacher judgement, and every score stays reviewable.',
    },
    {
      name: 'Automatic question tagging and paper generation',
      body: 'Uploaded question papers and PDFs are split into individual questions, tagged by chapter and difficulty, and added to the bank. Teachers then generate a balanced paper for a given syllabus coverage in a few clicks.',
    },
    {
      name: 'Early warning on at-risk students',
      body: 'Attendance, submission patterns and test trends feed a simple model that flags students likely to drop off or underperform, so counsellors call parents before the term result, not after.',
    },
  ],
  integrations: [
    'Zoom, Google Meet and Microsoft Teams for live classes',
    'Google Classroom, Moodle and Canvas for content sync and migration',
    'Razorpay, PayU, Cashfree and Stripe for fee collection',
    'WhatsApp Business API, MSG91 and Twilio for reminders and notices',
    'Tally, Zoho Books and QuickBooks for accounting',
    'YouTube, Vimeo and AWS MediaConvert for secure video delivery',
    'Google Workspace and Microsoft 365 for calendars and single sign-on',
    'OMR scanning libraries and phone camera capture for offline tests',
    'DigiLocker and Aadhaar-based verification for admissions where required',
  ],
  stackNote:
    'Education platforms need to work on cheap Android phones over patchy mobile data, hold years of student records safely and stream video without being copied. We typically build the web app in React or Next.js with a TypeScript or Python backend on PostgreSQL, deliver student and parent apps in Flutter so one codebase covers Android and iOS, and use HLS streaming with signed URLs and watermarking for recorded lessons. AI features run against your own content with a retrieval layer, so answers cite your material and stay inside your syllabus.',
  engagementNote:
    'A parent app on top of an existing LMS or a fee management module is typically a 6 to 8 week fixed-scope project. A full institute platform with live classes, assessments and fees is delivered in phases, usually starting with the module that causes the most daily pain. Many institutes keep us on part-time through the academic year to add new exam formats, batch structures and reports as their intake grows.',
  faqs: [
    {
      q: 'Should we build a custom LMS or use Moodle, Teachable or Google Classroom?',
      a: 'Use an off-the-shelf tool if your teaching fits its model and you mostly need content hosting. Build custom when your structure of batches, centres, fee plans and exam formats does not map to the tool, or when the platform itself is your product. We often integrate with Moodle or Google Classroom rather than replace them, adding the parent app, fee and assessment layers around them.',
    },
    {
      q: 'How do you stop recorded lessons from being downloaded and shared?',
      a: 'No system stops a determined person filming a screen, but we make casual copying hard: encrypted HLS streaming with short-lived signed URLs, per-student dynamic watermarks with name and phone number, device limits and disabled downloads. On mobile we add screenshot and screen-recording blocks where the operating system allows it. Most institutes find the visible watermark is the strongest deterrent.',
    },
    {
      q: 'Can the AI tutor give wrong answers to students?',
      a: 'It can, which is why we constrain it to your own notes and past papers, show the source lesson with every answer, and hand off to a teacher when confidence is low. Teachers can review conversation logs and correct answers, and the corrections feed back into the assistant. It is best treated as a first-line doubt solver for revision, not as the teacher of record.',
    },
    {
      q: 'We already have student data in Excel and an old ERP. Can you migrate it?',
      a: 'Yes. Migration is a normal part of these projects. We map your existing spreadsheets, exports and database tables to the new structure, run a trial import, review the mismatches with your office staff and then do the final import at a quiet point in the term. Historical marks, fee ledgers and attendance are preserved so reports do not start from zero.',
    },
    {
      q: 'How long does a student and parent app take to build?',
      a: 'A parent app that shows attendance, marks, fees and notices, connected to your existing records, with push notifications and online payment, is typically ready for a pilot class within six to nine weeks. A pilot with one or two classes before the full rollout catches data mismatches early and gives parents a reason to install it on day one.',
    },
  ],
  relatedIndustries: ['professional-services', 'healthcare-and-wellness'],
  relatedCostFeatures: ['video-calling', 'booking-and-scheduling', 'online-payments', 'push-and-email-notifications', 'subscriptions-and-recurring-billing', 'ai-chatbot'],
  keywords: [
    'custom LMS development company',
    'edtech app development company india',
    'coaching institute management software',
    'school parent app development',
    'online exam software development',
    'learning management system development cost',
    'AI tutor app development',
  ],
};
