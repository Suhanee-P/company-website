// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site. Cloudflare Pages serves `about.html` at `/about` and redirects
// `/about.html` -> `/about`, so we emit flat files and never use trailing slashes.
export default defineConfig({
  site: 'https://aresyntechnologies.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const u = new URL(item.url);
        const p = u.pathname;
        if (p === '/') item.priority = 1.0;
        else if (p.startsWith('/services') || p.startsWith('/industries')) item.priority = 0.9;
        else if (p.startsWith('/work') || p.startsWith('/guides') || p.startsWith('/tools')) item.priority = 0.8;
        else if (p.startsWith('/cost')) item.priority = 0.6;
        else if (p === '/privacy') item.priority = 0.2;
        return item;
      },
    }),
  ],
});
