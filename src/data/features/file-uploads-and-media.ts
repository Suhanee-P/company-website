import type { Feature } from '../types';

export const feature: Feature = {
  slug: 'file-uploads-and-media',
  name: 'File uploads and media handling',
  question: 'How much does it cost to add file uploads and media handling to an app?',
  metaDescription:
    'Cost and effort to add image, document and video uploads to a web or mobile app: storage, resizing, virus scanning, previews and CDN delivery, with tiers.',
  category: 'core',
  summary:
    'File uploads cover everything from a profile photo to bulk document intake and video hosting. Uploading a few images to cloud storage and showing them back is quick. Large files, resumable uploads, image resizing, document previews, video transcoding, virus scanning, access rules and galleries each add integration work and testing on slow connections and low-end phones.',
  tiers: [
    {
      name: 'Basic',
      hours: [12, 26],
      includes: [
        'Image and PDF upload to cloud storage (S3, Cloudflare R2 or Google Cloud Storage)',
        'File type and size validation with clear error messages',
        'Automatic image resizing and compression for thumbnails and previews',
        'Private files served through signed, expiring links',
      ],
    },
    {
      name: 'Standard',
      hours: [26, 65],
      includes: [
        'Everything in Basic',
        'Drag-and-drop multi-file upload with progress bars',
        'Direct-to-storage uploads so large files bypass your server',
        'Camera capture and gallery picker in the mobile app',
        'Document previews for PDF and Office files in the browser',
        'Organising files into folders, tags or per-record attachments',
      ],
    },
    {
      name: 'Advanced',
      hours: [65, 150],
      includes: [
        'Everything in Standard',
        'Resumable uploads for multi-gigabyte files on unreliable connections',
        'Video transcoding and adaptive streaming through Mux, Cloudflare Stream or AWS MediaConvert',
        'Virus and malware scanning before files are made available',
        'Image editing: crop, rotate, watermark and background removal',
        'Retention rules, versioning and audit trail for regulated documents',
      ],
    },
  ],
  breakdown: { design: 15, development: 60, qa: 25 },
  costDrivers: [
    'File sizes: videos and large documents need resumable uploads and background processing',
    'Video hosting, which needs transcoding and streaming rather than plain storage',
    'Access rules for private files across users, teams and shared links',
    'Mobile capture and offline queueing of photos in field apps',
    'Security requirements such as virus scanning and content moderation',
    'Compliance retention and audit trails for medical, legal or financial documents',
  ],
  cheaperAlternative:
    'Uploadcare, Filestack, Cloudinary and Uploadthing provide upload widgets, processing and CDN delivery as a service, which removes most of the Basic and Standard work for a monthly fee. For video, Mux, Vimeo or YouTube embeds are far cheaper than building your own streaming pipeline.',
  hiddenCosts: [
    'Storage and bandwidth charges that grow with usage, especially for video',
    'Per-minute fees for video transcoding and streaming',
    'Image processing service fees based on transformations and traffic',
    'Backups and lifecycle policies to keep old files from piling up',
  ],
  related: ['document-data-extraction', 'cms-and-content-editing', 'barcode-and-qr-scanning', 'offline-mode', 'pdf-generation'],
  faqs: [
    {
      q: 'Where are the files stored and who owns them?',
      a: 'In a cloud storage bucket in your own account, usually Amazon S3, Cloudflare R2 or Google Cloud Storage, so you own the data and the bill. We configure access so files are private by default and served through expiring links. Choosing a region close to your users or required by law is part of setup.',
    },
    {
      q: 'Can users upload directly from their phone camera in the field?',
      a: 'Yes. The mobile app can open the camera, compress the photo, attach a location and time, and queue it for upload when the connection returns. This is the pattern we use for proof of delivery, inspections and site reports, and it is tested on low-end Android devices.',
    },
    {
      q: 'Do you scan uploaded files for viruses?',
      a: 'For products where users share files with each other, or where staff open customer uploads, we recommend it and include it in the Advanced tier. Files are quarantined until a scanner such as ClamAV or a cloud scanning service clears them. For a private profile photo it is usually not worth the cost.',
    },
  ],
};
