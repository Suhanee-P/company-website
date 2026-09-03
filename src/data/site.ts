// Single source of truth for business facts. Edit here; every page, schema block,
// llms.txt and the footer read from this file.
export const site = {
  name: 'Aresyn Technologies',
  shortName: 'Aresyn',
  url: 'https://aresyntechnologies.com',
  tagline: 'Custom software, mobile apps and AI automation for growing businesses',
  description:
    'Aresyn Technologies is a small, senior software team based in India. We design and build custom web applications, mobile apps and AI-powered automation for founders and operations leaders worldwide, on fixed-scope projects or as a part-time extension of your team.',
  email: 'contact@aresyntechnologies.com',
  phoneDisplay: '+91 98254 35267',
  phoneE164: '+919825435267',
  whatsapp: 'https://wa.me/919825435267?text=Hi%20Aresyn%2C%20I%27d%20like%20to%20discuss%20a%20project.',
  responseTime: 'within one business day',
  location: {
    // TODO(owner): add your city for local SEO, e.g. 'Ahmedabad'. Leave empty to omit.
    city: '',
    region: 'Gujarat',
    country: 'India',
    countryCode: 'IN',
  },
  // TODO(owner): fill in real profile URLs. Empty strings are not rendered anywhere.
  socials: {
    linkedin: '',
    github: '',
    x: '',
    instagram: '',
    clutch: '',
    upwork: '',
  },
  timezone: 'IST (UTC+5:30)',
  workingHours: 'Mon to Sat, 10:00 to 19:00 IST, with overlap for US and European mornings',
  clients: ['WhatIWear', 'Vimsonderma Pharmaceuticals', 'Morphology Skincare'],
} as const;

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/work', label: 'Work' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
] as const;

export const socialLinks = () =>
  (Object.entries(site.socials) as [string, string][])
    .filter(([, url]) => url)
    .map(([key, url]) => ({ key, url, label: { linkedin: 'LinkedIn', github: 'GitHub', x: 'X (Twitter)', instagram: 'Instagram', clutch: 'Clutch', upwork: 'Upwork' }[key] ?? key }));
