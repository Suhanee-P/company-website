import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'offline-mode',
  name: 'Offline mode for mobile apps',
  question: 'How much does it cost to add offline mode to a mobile app?',
  metaDescription:
    'Cost to make a mobile app work without a connection, from cached reads to offline-first sync with conflict handling: tiers, cost drivers and sync services.',
  category: 'mobile',
  summary:
    'Offline mode lets a mobile app keep working when the connection drops, then sync when it returns. Caching data for reading is straightforward. Letting field staff create records, scan items and capture photos offline, then syncing reliably without losing or duplicating anything, requires a local database, a queue and clear rules for conflicts.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 40],
      includes: [
        'Cache of recently viewed lists and records for read-only access',
        'Clear offline indicator and friendly failure messages',
        'Automatic retry of failed requests when the connection returns',
        'Testing on airplane mode and flaky network simulations',
      ],
    },
    {
      name: 'Standard',
      hours: [40, 110],
      includes: [
        'Everything in Basic',
        'Local database on the device for the records staff work with',
        'Queued writes for forms, scans, signatures and photos',
        'Background sync with per-record status shown in the app',
        'Simple conflict rule such as last write wins with a change log',
        'Storage limits and cleanup so the app does not fill the phone',
      ],
    },
    {
      name: 'Advanced',
      hours: [110, 280],
      includes: [
        'Everything in Standard',
        'Offline-first architecture where the app always reads and writes locally',
        'Sync engine with partial sync by user, region or date range',
        'Conflict resolution screens for records edited by two people',
        'Encrypted local storage and remote wipe for lost devices',
        'Large media queues with resumable uploads',
      ],
    },
  ],
  breakdown: { design: 10, development: 60, qa: 30 },
  costDrivers: [
    'Whether users only read offline or also create and edit records',
    'How much data each user needs on the device, and whether it must be filtered per user',
    'Conflict likelihood; one person per record is easy, shared records need resolution rules and screens',
    'Photos, signatures and documents, which need resumable uploads and storage management',
    'Device range, since low-end Android phones have less storage and slower databases',
    'Security requirements for data stored on devices',
  ],
  cheaperAlternative:
    'If you are starting a new app, a backend with built-in offline support is much cheaper than custom sync: Firebase Firestore and Realm with Atlas Device Sync handle caching and queued writes, and PowerSync adds offline-first sync on top of Postgres and Supabase. Custom sync is justified when you have an existing backend that cannot change, complex conflict rules, or strict control requirements.',
  hiddenCosts: [
    'Sync service fees for managed offline platforms, usually per device or per connection',
    'Much more testing time than an online-only app, on real devices and poor networks',
    'Support cases about "missing" data that is actually pending sync, which good UI reduces',
    'Larger app size and storage on devices',
  ],
  related: ['gps-tracking-and-maps', 'barcode-and-qr-scanning', 'file-uploads-and-media', 'push-and-email-notifications'],
  faqs: [
    {
      q: 'Do we really need offline mode?',
      a: 'If your users work in warehouses, basements, rural areas, hospitals or moving vehicles, yes. Connections in those places drop constantly and an app that freezes on a spinner gets abandoned. If your users sit at desks on office Wi-Fi, basic caching and good error handling are usually enough and cost far less.',
    },
    {
      q: 'What happens if two people edit the same record offline?',
      a: 'The app needs a rule. The simplest is that the last write wins with a history entry so nothing is silently lost. For important records we show both versions and let a supervisor pick or merge. The right choice depends on how often it will actually happen, which we work out from your workflow before building.',
    },
    {
      q: 'How long does offline support add to a project?',
      a: 'Read-only caching adds days. Queued writes with sync typically add several weeks including testing, because most of the effort is in edge cases: the app is killed mid-sync, the phone runs out of space, a record is deleted on the server while edited on the device. Planning for offline from the start is cheaper than retrofitting.',
    },
  ],
};
