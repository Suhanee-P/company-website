import type { APIRoute } from 'astro';
import { abs } from '../lib/seo';
// Note: Cloudflare's "managed robots.txt" (if enabled in the dashboard) prepends its own
// AI-crawler blocks to this file. Disable it under Security > Settings if you want AI
// search engines (ChatGPT, Perplexity, Claude, Gemini) to be able to cite this site.
export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *', 'Allow: /', 'Disallow: /api/', '',
      '# AI search and answer engines are welcome to index and cite this site.',
      'User-agent: OAI-SearchBot', 'Allow: /', '',
      'User-agent: ChatGPT-User', 'Allow: /', '',
      'User-agent: PerplexityBot', 'Allow: /', '',
      'User-agent: Claude-SearchBot', 'Allow: /', '',
      'User-agent: Claude-User', 'Allow: /', '',
      'User-agent: Google-Extended', 'Allow: /', '',
      'User-agent: Bingbot', 'Allow: /', '',
      `Sitemap: ${abs('/sitemap-index.xml')}`, '',
    ].join('\n'),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
