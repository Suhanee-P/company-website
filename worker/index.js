// Cloudflare Worker for aresyntechnologies.com.
// Static files come from ./dist (built by Astro) through the ASSETS binding.
// Anything that is not a static file reaches this script; today that is only POST /api/contact,
// which emails the enquiry through Resend when RESEND_API_KEY is configured.
// Runtime variables (Settings > Variables & Secrets): RESEND_API_KEY (secret), CONTACT_TO, CONTACT_FROM.

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function contact(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405);
  let data;
  try {
    const ct = request.headers.get('content-type') || '';
    data = ct.includes('application/json') ? await request.json() : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }
  if (data.website) return json({ ok: true }); // honeypot filled by a bot

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const company = clean(data.company, 160);
  const topic = clean(data.topic, 120);
  const message = String(data.message ?? '').trim().slice(0, 5000);
  if (!name || !EMAIL.test(email) || message.length < 10) {
    return json({ ok: false, error: 'validation', fields: { name: !name, email: !EMAIL.test(email), message: message.length < 10 } }, 422);
  }
  if (!env.RESEND_API_KEY) return json({ ok: false, error: 'not_configured' }, 503);

  const to = env.CONTACT_TO || 'contact@aresyntechnologies.com';
  const from = env.CONTACT_FROM || 'Aresyn Website <onboarding@resend.dev>';
  const text = [
    `Name: ${name}`, `Email: ${email}`, company && `Company: ${company}`, topic && `Topic: ${topic}`, '', message, '',
    `Page: ${request.headers.get('referer') || 'unknown'}`, `Country: ${request.headers.get('cf-ipcountry') || 'unknown'}`,
  ].filter((l) => l !== undefined && l !== false).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website enquiry from ${name}${company ? ` (${company})` : ''}`, text }),
  });
  if (!res.ok) return json({ ok: false, error: 'send_failed' }, 502);
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contact') return contact(request, env);
    if (pathname.startsWith('/api/')) return json({ ok: false, error: 'not_found' }, 404);
    // Any other non-asset request: let the assets binding apply 404.html handling.
    return env.ASSETS.fetch(request);
  },
};
