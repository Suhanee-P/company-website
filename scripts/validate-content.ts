// Validates content data files. Run: node scripts/validate-content.ts
// Checks lengths, counts, cross-references and banned marketing phrases.
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const BANNED = [
  '—', ' – ', 'cutting-edge', 'cutting edge', 'seamless', 'elevate', 'unlock', 'delve', 'leverag', 'robust',
  'game-chang', 'fast-paced', 'landscape', 'empower', 'revolutioni', 'next-gen', 'world-class', 'state-of-the-art',
  'harness', 'streamline', 'holistic', 'synergy', 'supercharge', 'effortless', 'unparalleled', 'best-in-class',
  'transformative', 'innovative solutions', 'we understand', "in today's", 'ever-evolving', 'tailor-made', '!',
];
const INDUSTRY_SLUGS = ['logistics-and-shipping','real-estate','car-rental-and-fleet','healthcare-and-wellness','pharmaceuticals','beauty-and-skincare','fashion-and-retail','education','fintech','manufacturing','hospitality-and-travel','professional-services'];
const FEATURE_SLUGS = ['user-authentication','role-based-access-control','admin-dashboard','search-and-filters','push-and-email-notifications','file-uploads-and-media','multi-language-support','online-payments','subscriptions-and-recurring-billing','shopping-cart-and-checkout','invoicing-and-quotes','in-app-chat','video-calling','whatsapp-business-integration','analytics-dashboard','reporting-and-exports','third-party-api-integration','data-migration','ai-chatbot','document-data-extraction','recommendation-engine','ai-workflow-automation','offline-mode','gps-tracking-and-maps','barcode-and-qr-scanning','booking-and-scheduling','inventory-management','crm-integration','pdf-generation','cms-and-content-editing'];
const WORK_IDS = ['whatiwear-ai-style-assistant','vimsonderma-3d-expo-website','morphology-skincare-website','health-and-lifestyle-mobile-app'];

let errors = 0;
const err = (f: string, m: string) => { errors++; console.log(`ERROR ${f}: ${m}`); };
const warn = (f: string, m: string) => console.log(`warn  ${f}: ${m}`);
const words = (s: string) => s.trim().split(/\s+/).length;

function scanBanned(file: string, obj: unknown, pathStr = '') {
  if (typeof obj === 'string') {
    const low = obj.toLowerCase();
    for (const b of BANNED) if (low.includes(b.toLowerCase())) err(file, `banned phrase "${b}" at ${pathStr}: "${obj.slice(0, 80)}"`);
  } else if (Array.isArray(obj)) obj.forEach((v, i) => scanBanned(file, v, `${pathStr}[${i}]`));
  else if (obj && typeof obj === 'object') for (const [k, v] of Object.entries(obj)) scanBanned(file, v, pathStr ? `${pathStr}.${k}` : k);
}

async function loadDir(dir: string, key: string) {
  const out: Record<string, any> = {};
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
    try {
      const mod = await import(pathToFileURL(path.join(dir, f)).href);
      out[f] = mod[key];
    } catch (e) { err(f, `failed to import: ${(e as Error).message.split('\n')[0]}`); }
  }
  return out;
}

const industries = await loadDir(path.join(root, 'src/data/industries'), 'industry');
for (const [file, ind] of Object.entries(industries)) {
  if (!ind) { err(file, 'no `industry` export'); continue; }
  if (file !== `${ind.slug}.ts`) err(file, `filename must equal slug (${ind.slug})`);
  if (!INDUSTRY_SLUGS.includes(ind.slug)) err(file, `unknown slug ${ind.slug}`);
  if (ind.metaTitle.length > 60) warn(file, `metaTitle ${ind.metaTitle.length} chars (>60)`);
  if (ind.metaDescription.length > 160) err(file, `metaDescription ${ind.metaDescription.length} chars (>160)`);
  if (ind.metaDescription.length < 110) warn(file, `metaDescription short (${ind.metaDescription.length})`);
  if (ind.intro.length !== 2) err(file, 'intro must have 2 paragraphs');
  const w0 = words(ind.intro[0] ?? ''); if (w0 < 40 || w0 > 80) warn(file, `intro[0] is ${w0} words (aim 40-70)`);
  if (ind.challenges.length < 3 || ind.challenges.length > 4) err(file, `challenges: ${ind.challenges.length} (need 3-4)`);
  if (ind.solutions.length < 4 || ind.solutions.length > 5) err(file, `solutions: ${ind.solutions.length} (need 4-5)`);
  ind.solutions.forEach((s: any, i: number) => { if (s.features.length < 4 || s.features.length > 6) err(file, `solutions[${i}].features: ${s.features.length} (need 4-6)`); });
  if (ind.aiUseCases.length < 3 || ind.aiUseCases.length > 4) err(file, `aiUseCases: ${ind.aiUseCases.length} (need 3-4)`);
  if (ind.integrations.length < 6 || ind.integrations.length > 10) err(file, `integrations: ${ind.integrations.length} (need 6-10)`);
  if (ind.faqs.length < 4 || ind.faqs.length > 6) err(file, `faqs: ${ind.faqs.length} (need 4-6)`);
  ind.faqs.forEach((f: any, i: number) => { const w = words(f.a); if (w < 35 || w > 90) warn(file, `faqs[${i}] answer ${w} words (aim 40-80)`); });
  for (const s of ind.relatedIndustries) if (!INDUSTRY_SLUGS.includes(s) || s === ind.slug) err(file, `bad relatedIndustries slug ${s}`);
  for (const s of ind.relatedCostFeatures ?? []) if (!FEATURE_SLUGS.includes(s)) err(file, `bad relatedCostFeatures slug ${s}`);
  for (const s of ind.relatedWork ?? []) if (!WORK_IDS.includes(s)) err(file, `bad relatedWork id ${s}`);
  if (ind.keywords.length < 5 || ind.keywords.length > 8) err(file, `keywords: ${ind.keywords.length} (need 5-8)`);
  scanBanned(file, ind);
}

const feats = await loadDir(path.join(root, 'src/data/features'), 'feature');
for (const [file, ft] of Object.entries(feats)) {
  if (!ft) { err(file, 'no `feature` export'); continue; }
  if (file !== `${ft.slug}.ts`) err(file, `filename must equal slug (${ft.slug})`);
  if (!FEATURE_SLUGS.includes(ft.slug)) err(file, `unknown slug ${ft.slug}`);
  if (!ft.question.toLowerCase().startsWith('how much does it cost')) warn(file, 'question should start with "How much does it cost"');
  if (ft.metaDescription.length > 160) err(file, `metaDescription ${ft.metaDescription.length} chars (>160)`);
  if (/[$₹]|\d{3,}/.test(ft.summary)) err(file, 'summary must not contain currency figures or large numbers (they are computed)');
  const ws = words(ft.summary); if (ws < 35 || ws > 80) warn(file, `summary ${ws} words (aim 40-70)`);
  if (ft.tiers.length !== 3) err(file, 'need exactly 3 tiers');
  const names = ft.tiers.map((t: any) => t.name).join(','); if (names !== 'Basic,Standard,Advanced') err(file, `tier names must be Basic,Standard,Advanced (got ${names})`);
  let prevMax = 0;
  ft.tiers.forEach((t: any, i: number) => {
    if (!(t.hours[0] > 0 && t.hours[1] > t.hours[0])) err(file, `tiers[${i}].hours invalid`);
    if (t.hours[0] < prevMax * 0.8) warn(file, `tiers[${i}] min (${t.hours[0]}) much lower than previous tier max (${prevMax})`);
    prevMax = t.hours[1];
    if (t.includes.length < 3 || t.includes.length > 6) err(file, `tiers[${i}].includes: ${t.includes.length} (need 3-6)`);
  });
  const b = ft.breakdown; if (b.design + b.development + b.qa !== 100) err(file, 'breakdown must sum to 100');
  if (ft.costDrivers.length < 4 || ft.costDrivers.length > 6) err(file, `costDrivers: ${ft.costDrivers.length} (need 4-6)`);
  if (ft.hiddenCosts.length < 2 || ft.hiddenCosts.length > 4) err(file, `hiddenCosts: ${ft.hiddenCosts.length} (need 2-4)`);
  if (ft.related.length < 3 || ft.related.length > 5) err(file, `related: ${ft.related.length} (need 3-5)`);
  for (const s of ft.related) if (!FEATURE_SLUGS.includes(s) || s === ft.slug) err(file, `bad related slug ${s}`);
  if (ft.faqs.length < 3 || ft.faqs.length > 4) err(file, `faqs: ${ft.faqs.length} (need 3-4)`);
  ft.faqs.forEach((f: any, i: number) => { const w = words(f.a); if (w < 35 || w > 90) warn(file, `faqs[${i}] answer ${w} words (aim 40-80)`); });
  scanBanned(file, ft);
}

// Guides + work markdown: banned phrase scan only (frontmatter is validated by Astro).
for (const dir of ['src/content/guides', 'src/content/work']) {
  const full = path.join(root, dir);
  if (!existsSync(full)) continue;
  for (const f of readdirSync(full).filter((f) => f.endsWith('.md'))) {
    const raw = readFileSync(path.join(full, f), 'utf8');
    // Client testimonials are quoted verbatim; skip `quote:` frontmatter lines and markdown blockquotes.
    const txt = raw.split('\n').filter((l) => !/^\s*quote:/.test(l) && !/^\s*>/.test(l)).join('\n');
    const low = txt.toLowerCase();
    for (const b of BANNED) {
      if (b === '!' ) continue; // allow in markdown code blocks / images
      const idx = low.indexOf(b.toLowerCase());
      if (idx >= 0) err(`${dir}/${f}`, `banned phrase "${b}" near: "${txt.slice(Math.max(0, idx - 40), idx + 40).replace(/\n/g, ' ')}"`);
    }
  }
}

console.log(`\nindustries: ${Object.keys(industries).length}/12, features: ${Object.keys(feats).length}/30, errors: ${errors}`);
process.exit(errors ? 1 : 0);
