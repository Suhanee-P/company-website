import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { getCollection } from 'astro:content';
import { services } from '../../data/services';
import { industries } from '../../data/industries';
import { features } from '../../data/features';
import { site } from '../../data/site';

type Card = { slug: string; title: string; kicker: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const guides = await getCollection('guides');
  const work = await getCollection('work');
  const cards: Card[] = [
    { slug: 'default', title: site.tagline, kicker: 'Custom software · Mobile apps · AI automation' },
    ...services.map((s) => ({ slug: `services-${s.slug}`, title: s.h1, kicker: 'Service' })),
    ...industries.map((i) => ({ slug: `industries-${i.slug}`, title: i.h1, kicker: `Industry · ${i.name}` })),
    ...features.map((f) => ({ slug: `cost-${f.slug}`, title: f.question, kicker: 'Cost guide · 2026' })),
    ...guides.map((g) => ({ slug: `guides-${g.id}`, title: g.data.title, kicker: 'Guide' })),
    ...work.map((w) => ({ slug: `work-${w.id}`, title: w.data.title, kicker: `Case study · ${w.data.client}` })),
    { slug: 'tools-app-development-cost-calculator', title: 'App development cost calculator', kicker: 'Free tool · USD and INR' },
  ];
  return cards.map((c) => ({ params: { slug: c.slug }, props: c }));
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function wrap(text: string, max: number, maxLines: number) {
  const words = text.split(/\s+/); const lines: string[] = []; let cur = '';
  for (const w of words) { if ((cur + ' ' + w).trim().length > max) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w; }
  if (cur.trim()) lines.push(cur.trim());
  if (lines.length > maxLines) { lines.length = maxLines; lines[maxLines - 1] = lines[maxLines - 1].replace(/\s+\S*$/, '') + '…'; }
  return lines;
}

export const GET: APIRoute = async ({ props }) => {
  const { title, kicker } = props as Card;
  const lines = wrap(title, 34, 3);
  const size = lines.length >= 3 ? 56 : 64;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#F3F0EE"/>
    <circle cx="1040" cy="330" r="360" fill="none" stroke="#F37338" stroke-opacity="0.25" stroke-width="2"/>
    <circle cx="1040" cy="330" r="240" fill="none" stroke="#F37338" stroke-opacity="0.18" stroke-width="2"/>
    <circle cx="1040" cy="330" r="120" fill="#F37338" fill-opacity="0.06" stroke="#F37338" stroke-opacity="0.12" stroke-width="2"/>
    <text x="80" y="110" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="2" fill="#5F5F5E">${esc(kicker.toUpperCase())}</text>
    ${lines.map((l, i) => `<text x="80" y="${210 + i * (size + 14)}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="${size}" font-weight="600" letter-spacing="-1.5" fill="#141413">${esc(l)}</text>`).join('')}
    <text x="80" y="540" font-family="Inter, Helvetica, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="-1" fill="#141413">ARESYN<tspan fill="#CF4500">.</tspan></text>
    <text x="80" y="578" font-family="Inter, Helvetica, Arial, sans-serif" font-size="20" fill="#5F5F5E">${esc(site.url.replace('https://', ''))}  ·  ${esc(site.email)}</text>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, { headers: { 'content-type': 'image/png' } });
};
