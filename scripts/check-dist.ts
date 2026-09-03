// Post-build checks: internal links resolve, JSON-LD parses, titles/descriptions present and sized, one H1 per page.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
const dist = path.resolve(import.meta.dirname, '../dist');
const walk = (d: string): string[] => readdirSync(d).flatMap((f) => { const p = path.join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const htmls = walk(dist).filter((f) => f.endsWith('.html'));
const exists = (href: string) => {
  const p = href.split('#')[0].split('?')[0];
  if (!p || p === '/') return existsSync(path.join(dist, 'index.html'));
  const clean = p.replace(/\/$/, '');
  return existsSync(path.join(dist, clean + '.html')) || existsSync(path.join(dist, clean, 'index.html')) || existsSync(path.join(dist, clean)) || clean === '/api/contact';
};
let errors = 0; const titles = new Map<string, string>(); const descs = new Map<string, string>();
for (const f of htmls) {
  const rel = '/' + path.relative(dist, f).replace(/\\/g, '/');
  const html = readFileSync(f, 'utf8');
  const hrefs = Array.from(html.matchAll(/href="([^"]+)"/g)).map((m) => m[1]).filter((h) => h.startsWith('/') && !h.startsWith('//'));
  for (const h of new Set(hrefs)) if (!exists(h)) { errors++; console.log(`BROKEN ${rel} -> ${h}`); }
  if (/href="\/[^"]*\.html"/.test(html) && !rel.includes('404')) { errors++; console.log(`HTML-LINK ${rel} contains an internal .html href`); }
  const t = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''; const d = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  if (!t) { errors++; console.log(`NO-TITLE ${rel}`); } else if (t.length > 65) console.log(`warn title ${t.length} chars ${rel}: ${t}`);
  if (!d) { errors++; console.log(`NO-DESC ${rel}`); } else if (d.length > 165) console.log(`warn desc ${d.length} chars ${rel}`);
  if (titles.has(t)) console.log(`DUP-TITLE ${rel} == ${titles.get(t)}`); titles.set(t, rel);
  if (descs.has(d)) console.log(`DUP-DESC ${rel} == ${descs.get(d)}`); descs.set(d, rel);
  const h1s = (html.match(/<h1[\s>]/g) || []).length; if (h1s !== 1) { errors++; console.log(`H1x${h1s} ${rel}`); }
  if (!/<link rel="canonical"/.test(html)) { errors++; console.log(`NO-CANONICAL ${rel}`); }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch (e) { errors++; console.log(`BAD-JSONLD ${rel}: ${(e as Error).message}`); } }
  const imgs = Array.from(html.matchAll(/<img\b[^>]*>/g)).map((m) => m[0]); for (const im of imgs) if (!/alt="/.test(im)) { errors++; console.log(`IMG-NO-ALT ${rel}: ${im.slice(0, 80)}`); }
}
console.log(`\npages: ${htmls.length}, errors: ${errors}`);
process.exit(errors ? 1 : 0);
