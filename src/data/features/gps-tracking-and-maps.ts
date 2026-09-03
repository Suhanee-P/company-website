import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'gps-tracking-and-maps',
  name: 'GPS tracking and maps',
  question: 'How much does it cost to add GPS tracking and maps to an app?',
  metaDescription:
    'Cost to add maps, address search, live location tracking, geofences and route optimisation to an app: tiers, Google Maps Platform fees and battery trade-offs.',
  category: 'mobile',
  summary:
    'Adding maps and GPS covers showing locations on a map, searching addresses, tracking staff or vehicles, and reacting when someone enters or leaves an area. A map with markers and address search is quick to add. Live background tracking, geofences, multi-stop route optimisation and customer-facing tracking pages need careful work on accuracy, battery life and platform rules.',
  tiers: [
    {
      name: 'Basic',
      hours: [16, 40],
      includes: [
        'Map view with markers, clustering and current location',
        'Address search and geocoding with autocomplete',
        'Distance and travel time display between two points',
        'Open in Google Maps or Apple Maps for navigation',
      ],
    },
    {
      name: 'Standard',
      hours: [40, 110],
      includes: [
        'Everything in Basic',
        'Live location sharing while the app is open, for drivers or field staff',
        'Admin map showing all active users with last-seen times',
        'Route display and estimated arrival for a single trip',
        'Geofences with alerts on entry and exit',
        'Location history per user with daily summaries',
      ],
    },
    {
      name: 'Advanced',
      hours: [110, 280],
      includes: [
        'Everything in Standard',
        'Background tracking tuned for battery life, with motion detection and adaptive intervals',
        'Multi-stop route optimisation and re-sequencing during the day',
        'Customer-facing live tracking page with a shareable link',
        'Offline map tiles for areas with poor coverage',
        'Integration with telematics devices and trip analytics',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'Background tracking, which needs platform permissions, battery tuning and store review justification',
    'Accuracy needs; a rough position every few minutes is easy, turn-by-turn precision is not',
    'Route optimisation across many stops, which requires a routing API and constraints handling',
    'Number of users tracked at once and how often positions are updated',
    'Map provider choice and the volume of map loads, geocoding and directions calls',
    'Offline coverage requirements in rural or indoor areas',
  ],
  cheaperAlternative:
    'For simple needs, embedding a map and linking out to Google Maps for directions costs almost nothing. For delivery or field-service tracking, products such as Onfleet, Tookan and Loconav provide driver apps and dispatch maps on a subscription, and SDKs from Radar or HyperTrack handle background tracking so you only build the screens. Custom work is right when tracking must fit into your own app and workflows.',
  hiddenCosts: [
    'Google Maps Platform and Mapbox usage fees beyond the free monthly allowance, charged per map load and per API call',
    'Battery complaints and app-store review scrutiny for background location, which can delay releases',
    'Address data quality in India, where geocoding often needs manual correction',
    'Telematics hardware and SIM data plans if vehicle units are used',
  ],
  related: ['offline-mode', 'booking-and-scheduling', 'push-and-email-notifications', 'barcode-and-qr-scanning', 'third-party-api-integration'],
  faqs: [
    {
      q: 'How much does Google Maps cost to use in an app?',
      a: 'Google Maps Platform bills per map load and per API request, with a free monthly allowance that covers small apps. Mobile map views in native SDKs are currently free, while web map loads, geocoding, places autocomplete and directions are metered. We estimate your monthly volume before choosing between Google, Mapbox and open-source alternatives.',
    },
    {
      q: 'Will tracking drain the phone battery?',
      a: 'Continuous high-accuracy tracking will. The usual approach is adaptive: frequent updates when the device is moving, sparse updates when it is still, and lower accuracy when precision is not needed. Done well, a full shift of tracking uses a modest share of battery. We test on the actual phone models your team uses.',
    },
    {
      q: 'Can customers see where their delivery is in real time?',
      a: 'Yes. A shareable tracking page shows the driver position, estimated arrival and status, updated from the driver app. It is one of the most valued features for delivery and service businesses because it cuts "where are you" calls. It requires the driver app to report position reliably, so it belongs with the Advanced tier.',
    },
    {
      q: 'Do we need special hardware for vehicle tracking?',
      a: 'Not necessarily. A driver phone with the app installed is enough for most delivery and field-service cases. Dedicated telematics units make sense when vehicles are driven by people who do not carry a company phone, when you need engine data, or when tampering is a concern. We can integrate either or both.',
    },
  ],
};
