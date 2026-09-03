# Aresyn Technologies website

Static marketing site for [aresyntechnologies.com](https://aresyntechnologies.com), built with [Astro](https://astro.build) and served by a Cloudflare Worker with static assets.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run preview    # serve dist/ locally
npm run worker:dev # serve dist/ plus the /api/contact Worker locally (after a build)
node scripts/validate-content.ts   # checks content data (lengths, cross-links, banned phrases)
```

Node 22.12 or newer is required (`.nvmrc`).

## Deploy (Cloudflare Workers)

The Worker is connected to this GitHub repo through Workers Builds. Every push to `main` runs `npm run build` (Astro writes `dist/`) and then `npx wrangler deploy`, which uploads `dist/` as static assets together with `worker/index.js`. Pushes to other branches produce preview versions.

`wrangler.jsonc` holds the Worker config. Its `name` must match the Worker that owns the domain; if you rename the Worker, update it there.

Manual deploy from a machine logged in to the right Cloudflare account:

```bash
npx wrangler login
npm run deploy
```

### Contact form

`worker/index.js` handles `POST /api/contact` and emails enquiries through [Resend](https://resend.com). Set these on the Worker (Settings > Variables & Secrets):

| Name | Type | Value |
|---|---|---|
| `RESEND_API_KEY` | secret | API key from Resend (verify `aresyntechnologies.com` there first) |
| `CONTACT_TO` | variable | `contact@aresyntechnologies.com` |
| `CONTACT_FROM` | variable | `Aresyn Website <website@aresyntechnologies.com>` |

Until the key is set, the form falls back to opening the visitor's email client with the message prefilled, and the WhatsApp button always works.

### Cloudflare settings to check once

- **Security > Settings > "Block AI bots" / managed robots.txt**: turn off if you want ChatGPT, Perplexity, Claude and Gemini to be able to read and cite the site. The site's own `robots.txt` allows them.
- **DNS**: add a `www` record pointing at the Worker so `www.aresyntechnologies.com` resolves (it currently does not).
- **Search Console and Bing Webmaster Tools**: verify the domain and submit `https://aresyntechnologies.com/sitemap-index.xml`.

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | Business facts: name, email, phone, founder, socials, location. Edit here; everything reads from it. |
| `src/data/rates.ts` | Hourly rates and foundation hours behind every cost estimate. |
| `src/data/services.ts` | The four service pages. |
| `src/data/industries/*.ts` | One file per industry page (12). |
| `src/data/features/*.ts` | One file per "how much does it cost to add X" page (30); also feeds the calculator. |
| `src/content/work/*.md` | Case studies with the client testimonial in frontmatter. |
| `src/content/guides/*.md` | Long-form guides. |
| `src/pages/` | Page templates; `og/[...slug].png.ts` renders social share images at build time. |
| `worker/index.js`, `wrangler.jsonc` | The Worker that serves `dist/` and handles the contact API; Worker config. |
| `src/styles/global.css` | The design system (see `docs/DESIGN.md` for its origin). |
| `public/` | Favicons, `_headers`, `_redirects` (both honoured by Workers static assets). |

## Adding content

- **New industry**: copy an existing file in `src/data/industries/`, add the import to `index.ts`, add the slug to `scripts/validate-content.ts`, run the validator, build.
- **New cost page**: same pattern in `src/data/features/`.
- **New guide or case study**: add a Markdown file; frontmatter is validated by `src/content.config.ts`.
