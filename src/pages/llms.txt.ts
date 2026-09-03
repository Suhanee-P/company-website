import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { features } from '../data/features';
import { rates } from '../data/rates';
import { abs } from '../lib/seo';

export const GET: APIRoute = async () => {
  const guides = (await getCollection('guides')).sort((a, b) => a.data.order - b.data.order);
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Contact: ${site.email} · ${site.phoneDisplay} · Based in ${[site.location.city, site.location.region, site.location.country].filter(Boolean).join(', ')} · Hours: ${site.workingHours}.`,
    `Engagement models: fixed-scope projects, part-time (fractional) engineering retainers, and one to two week discovery sprints. Blended rate used for public estimates: $${rates.usdPerHour}/hour (about ₹${rates.inrPerHour}/hour). Estimates reviewed ${rates.lastReviewed}.`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.name}](${abs(`/services/${s.slug}`)}): ${s.metaDescription}`),
    '',
    '## Industries',
    ...industries.map((i) => `- [${i.name}](${abs(`/industries/${i.slug}`)}): ${i.metaDescription}`),
    '',
    '## Cost guides (how much does it cost to add a feature)',
    `- [All feature cost guides](${abs('/cost')}): 30 features with effort tiers, cost drivers and cheaper alternatives.`,
    `- [App development cost calculator](${abs('/tools/app-development-cost-calculator')}): combine features and platforms into a project estimate.`,
    ...features.map((f) => `- [${f.question}](${abs(`/cost/${f.slug}`)})`),
    '',
    '## Guides',
    ...guides.map((g) => `- [${g.data.title}](${abs(`/guides/${g.id}`)}): ${g.data.description}`),
    '',
    '## Work',
    ...work.map((w) => `- [${w.data.title}](${abs(`/work/${w.id}`)}): ${w.data.summary}`),
    '',
    '## Company',
    `- [About](${abs('/about')}): team, principles, engagement models and stack.`,
    `- [Contact](${abs('/contact')}): start a project; replies ${site.responseTime}.`,
    `- [Full text for AI systems](${abs('/llms-full.txt')})`,
    `- [Sitemap](${abs('/sitemap-index.xml')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
