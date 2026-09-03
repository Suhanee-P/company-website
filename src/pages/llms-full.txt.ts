import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { features } from '../data/features';
import { rates } from '../data/rates';
import { abs } from '../lib/seo';
import { usdRange, inrRange, hoursRange, featureSpan } from '../lib/cost';

export const GET: APIRoute = async () => {
  const guides = (await getCollection('guides')).sort((a, b) => a.data.order - b.data.order);
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
  const out: string[] = [`# ${site.name}: full site text`, '', `> ${site.description}`, '', `Contact ${site.email}, ${site.phoneDisplay}. ${site.workingHours}.`, ''];
  const faq = (faqs: { q: string; a: string }[]) => faqs.flatMap((f) => [`**Q: ${f.q}**`, f.a, '']);

  out.push('## Services', '');
  for (const s of services) {
    out.push(`### ${s.name}`, `URL: ${abs(`/services/${s.slug}`)}`, '', ...s.intro, '', 'What we build:', ...s.whatWeBuild.map((w) => `- ${w.name}: ${w.body}`), '', 'Deliverables:', ...s.deliverables.map((d) => `- ${d}`), '', `Stack: ${s.stack.join(', ')}`, '', ...faq(s.faqs));
  }
  out.push('## Industries', '');
  for (const i of industries) {
    out.push(`### ${i.h1}`, `URL: ${abs(`/industries/${i.slug}`)}`, '', ...i.intro, '', `Who we work with: ${i.audience}.`, '', 'Common problems:', ...i.challenges.map((c) => `- ${c.title}: ${c.body}`), '', 'Systems we build:', ...i.solutions.flatMap((s) => [`- ${s.name}: ${s.body}`, ...s.features.map((f) => `  - ${f}`)]), '', 'AI use cases:', ...i.aiUseCases.map((a) => `- ${a.name}: ${a.body}`), '', `Integrations: ${i.integrations.join('; ')}`, '', i.stackNote, '', i.engagementNote, '', ...faq(i.faqs));
  }
  out.push('## Feature cost guides', '', `Estimates use a blended rate of $${rates.usdPerHour}/hour (₹${rates.inrPerHour}/hour) for a senior India-based team, reviewed ${rates.lastReviewed}. New products add a project foundation of ${rates.projectFoundationHours[0]} to ${rates.projectFoundationHours[1]} hours.`, '');
  for (const f of features) {
    const span = featureSpan(f.tiers);
    out.push(`### ${f.question}`, `URL: ${abs(`/cost/${f.slug}`)}`, '', `${f.name}: ${hoursRange(span)}, ${usdRange(span)} (${inrRange(span)}). ${f.summary}`, '', ...f.tiers.map((t) => `- ${t.name}: ${hoursRange(t.hours)}, ${usdRange(t.hours)}. Includes: ${t.includes.join('; ')}.`), '', `Cost drivers: ${f.costDrivers.join('; ')}.`, f.cheaperAlternative ? `Cheaper alternative: ${f.cheaperAlternative}` : '', `Recurring and hidden costs: ${f.hiddenCosts.join('; ')}.`, '', ...faq(f.faqs));
  }
  out.push('## Guides', '');
  for (const g of guides) out.push(`### ${g.data.title}`, `URL: ${abs(`/guides/${g.id}`)}`, `Published ${g.data.datePublished.toISOString().slice(0, 10)} by ${site.name}.`, '', g.body ?? '', '', ...faq(g.data.faqs));
  out.push('## Work', '');
  for (const w of work) out.push(`### ${w.data.title}`, `URL: ${abs(`/work/${w.id}`)}`, '', w.data.summary, '', `Client testimonial (${w.data.testimonial.author}, ${w.data.testimonial.role}): "${w.data.testimonial.quote}"`, '', w.body ?? '', '');
  return new Response(out.join('\n') + '\n', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
