// Cloudflare Pages Function: POST /api/contact
// Sends the enquiry by email through Resend when RESEND_API_KEY is configured.
// Env (Pages -> Settings -> Variables): RESEND_API_KEY (secret), CONTACT_TO, CONTACT_FROM.
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export async function onRequestPost({ request, env }) {
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
  const budget = clean(data.budget, 60);
  const message = String(data.message ?? '').trim().slice(0, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return json({ ok: false, error: 'validation', fields: { name: !name, email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), message: message.length < 10 } }, 422);
  }

  if (!env.RESEND_API_KEY) return json({ ok: false, error: 'not_configured' }, 503);

  const to = env.CONTACT_TO || 'contact@aresyntechnologies.com';
  const from = env.CONTACT_FROM || 'Aresyn Website <onboarding@resend.dev>';
  const text = [
    `Name: ${name}`, `Email: ${email}`, company && `Company: ${company}`, topic && `Topic: ${topic}`, budget && `Budget: ${budget}`,
    '', message, '', `Page: ${request.headers.get('referer') || 'unknown'}`, `IP country: ${request.headers.get('cf-ipcountry') || 'unknown'}`,
  ].filter((l) => l !== undefined && l !== false).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website enquiry from ${name}${company ? ` (${company})` : ''}`, text }),
  });
  if (!res.ok) return json({ ok: false, error: 'send_failed' }, 502);
  return json({ ok: true });
}

export const onRequest = ({ request }) =>
  request.method === 'POST' ? undefined : json({ ok: false, error: 'method_not_allowed' }, 405);
