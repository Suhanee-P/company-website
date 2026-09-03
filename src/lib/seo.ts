import { site, socialLinks } from '../data/site';

export const abs = (path: string) => new URL(path, site.url).toString().replace(/\/$/, '') || site.url;

export const ORG_ID = `${site.url}/#organization`;
export const SITE_ID = `${site.url}/#website`;

export function organization() {
  const sameAs = socialLinks().map((s) => s.url);
  const address: Record<string, string> = { '@type': 'PostalAddress', addressCountry: site.location.countryCode };
  if (site.location.region) address.addressRegion = site.location.region;
  if (site.location.city) address.addressLocality = site.location.city;
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: { '@type': 'ImageObject', url: abs('/logo.png'), width: 512, height: 512 },
    image: abs('/og/default.png'),
    description: site.description,
    email: site.email,
    telephone: site.phoneE164,
    address,
    areaServed: ['IN', 'US', 'GB', 'AE', 'AU', 'CA', 'SG', 'EU'],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      telephone: site.phoneE164,
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    }],
    knowsAbout: [
      'Custom web application development', 'Mobile app development', 'AI chatbots and automation',
      'Document data extraction', 'UI/UX design', 'Brand identity design', 'Logistics software',
      'Real estate software', 'Healthcare apps', 'Ecommerce for D2C brands',
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function website() {
  return { '@type': 'WebSite', '@id': SITE_ID, url: site.url, name: site.name, publisher: { '@id': ORG_ID }, inLanguage: 'en' };
}

export function breadcrumb(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.href) })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function service(o: { name: string; description: string; path: string; serviceType?: string; audience?: string }) {
  return {
    '@type': 'Service',
    '@id': `${abs(o.path)}#service`,
    name: o.name,
    description: o.description,
    url: abs(o.path),
    serviceType: o.serviceType ?? o.name,
    provider: { '@id': ORG_ID },
    areaServed: ['IN', 'US', 'GB', 'AE', 'AU', 'CA', 'SG', 'EU'],
    ...(o.audience ? { audience: { '@type': 'BusinessAudience', audienceType: o.audience } } : {}),
  };
}

export function article(o: { title: string; description: string; path: string; datePublished: Date; dateModified?: Date; image?: string; type?: 'Article' | 'BlogPosting' | 'TechArticle' }) {
  return {
    '@type': o.type ?? 'Article',
    '@id': `${abs(o.path)}#article`,
    headline: o.title,
    description: o.description,
    url: abs(o.path),
    mainEntityOfPage: abs(o.path),
    datePublished: o.datePublished.toISOString().slice(0, 10),
    dateModified: (o.dateModified ?? o.datePublished).toISOString().slice(0, 10),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: o.image ?? abs('/og/default.png'),
    inLanguage: 'en',
  };
}

export function webPage(o: { type?: string; name: string; description: string; path: string }) {
  return {
    '@type': o.type ?? 'WebPage',
    '@id': abs(o.path),
    url: abs(o.path),
    name: o.name,
    description: o.description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

/** Wrap a list of nodes into one JSON-LD graph. */
export const graph = (...nodes: unknown[]) => ({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) });

export const clamp = (s: string, n: number) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');
