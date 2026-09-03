import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'barcode-and-qr-scanning',
  name: 'Barcode and QR code scanning',
  question: 'How much does it cost to add barcode and QR code scanning to an app?',
  metaDescription:
    'Cost to add camera barcode and QR scanning, code generation and label printing to a mobile app: tiers, scanner SDK licence costs and hardware scanner support.',
  category: 'mobile',
  summary:
    'Barcode and QR scanning uses the phone camera to read codes and look up or record items, and often includes generating codes for labels. A single-scan lookup with a free library is a small job. Fast continuous scanning in warehouses, label printing, damaged-code handling and support for dedicated scanner hardware take more design and testing.',
  tiers: [
    {
      name: 'Basic',
      hours: [12, 28],
      includes: [
        'Camera scanning of QR codes and common one-dimensional barcodes using a free library',
        'Lookup of the scanned code against your records',
        'Manual entry fallback when a code will not read',
        'Torch toggle and basic scan feedback',
      ],
    },
    {
      name: 'Standard',
      hours: [28, 70],
      includes: [
        'Everything in Basic',
        'Continuous and batch scanning for receiving, picking and stock counts',
        'Generation of QR codes and barcodes for products, locations and documents',
        'Printing to Bluetooth or network label printers',
        'Scan history with user, time and location',
        'Offline queue so scans are kept when the connection drops',
      ],
    },
    {
      name: 'Advanced',
      hours: [70, 160],
      includes: [
        'Everything in Standard',
        'Commercial scanner SDK for speed and damaged or low-light codes',
        'Support for rugged devices with built-in scanners such as Zebra and Honeywell',
        'Multi-code recognition in one frame and validation rules per workflow step',
        'Integration into inventory, warehouse or asset-tracking processes with audit logging',
      ],
    },
  ],
  breakdown: { design: 10, development: 65, qa: 25 },
  costDrivers: [
    'Scanning conditions: bright warehouse shelves are easy, crumpled labels in poor light are not',
    'Volume per session, because continuous scanning needs speed tuning and duplicate handling',
    'Label printing, which involves printer models, label sizes and template design',
    'Hardware scanner support, each device family having its own integration',
    'The workflow around the scan, which is usually where most of the effort goes',
    'Offline requirements for scans made without a connection',
  ],
  cheaperAlternative:
    'Google ML Kit and the ZXing family of libraries are free and handle most codes well, so paid SDKs such as Scandit are only worth it for high-speed or damaged-code scanning. If you mainly need stock tracking, ready-made inventory apps such as Sortly or Zoho Inventory include scanning already. Build custom when scanning has to sit inside your own process, such as receiving against purchase orders or checking assets in and out.',
  hiddenCosts: [
    'Commercial scanner SDK licences, priced per device per year',
    'Label printers, label stock and ribbon consumables',
    'GS1 registration fees if you need retail barcodes for products sold through other stores',
  ],
  related: ['inventory-management', 'offline-mode', 'gps-tracking-and-maps', 'file-uploads-and-media'],
  faqs: [
    {
      q: 'Do we need a paid scanning SDK?',
      a: 'Usually not. Free libraries read clean codes reliably and are fine for retail, events and most inventory work. A commercial SDK earns its licence when staff scan hundreds of items an hour, codes are often damaged or under plastic, or lighting is poor. We test your real labels with the free option first.',
    },
    {
      q: 'Can the app print barcode labels?',
      a: 'Yes. We generate codes in the app and send label templates to Bluetooth or network printers from makers such as Zebra, Brother and TSC. Each printer family has its own language, so we confirm the model before quoting. Label design, sizes and what to print are usually decided with your operations team.',
    },
    {
      q: 'What about scanning on a normal phone versus a rugged device?',
      a: 'A modern phone camera is fine for occasional scanning. For all-day warehouse work, rugged Android devices with built-in laser scanners are faster, more accurate and survive drops. The app can support both: camera scanning on phones and the hardware scanner on rugged devices, using the same screens.',
    },
  ],
};
