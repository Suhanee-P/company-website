# Aresyn Technologies website

Static marketing site for [aresyntechnologies.com](https://aresyntechnologies.com), built with [Astro](https://astro.build) and deployed to Cloudflare Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run preview    # serve dist/ locally
node scripts/validate-content.ts   # checks content data (lengths, cross-links, banned phrases)
```

Node 22.12 or newer is required (`.nvmrc`).

## Deploy (Cloudflare Pages)

**Git auto-deploy (recommended).** If the Pages project is connected to this GitHub repo, every push to `main` builds and deploys. Before the first push of this version, change the project's build settings in the Cloudflare dashboard (Workers & Pages > project > Settings > Builds):

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

Node 22 is picked up from `.nvmrc`. Pages Functions in `functions/` are deployed automatically.

**CLI deploy.** Log in with the Cloudflare account that owns the domain, then:

```bash
npx wrangler login
CF_PAGES_PROJECT=<your-pages-project-name> npm run deploy
```

### Contact form

`functions/api/contact.js` is a Pages Function that emails enquiries through [Resend](https://resend.com). Set these in the Pages project (Settings > Variables and Secrets), for Production:

| Name | Type | Value |
|---|---|---|
| `RESEND_API_KEY` | secret | API key from Resend (verify `aresyntechnologies.com` there first) |
| `CONTACT_TO` | variable | `contact@aresyntechnologies.com` |
| `CONTACT_FROM` | variable | `Aresyn Website <website@aresyntechnologies.com>` |

Until the key is set, the form falls back to opening the visitor's email client with the message prefilled, and the WhatsApp button always works.

### Cloudflare settings to check once

- **Security > Settings > "Block AI bots" / managed robots.txt**: turn off if you want ChatGPT, Perplexity, Claude and Gemini to be able to read and cite the site. The site's own `robots.txt` allows them.
- **DNS**: add a `www` CNAME to the Pages project so `www.aresyntechnologies.com` resolves (it currently does not).
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
| `src/styles/global.css` | The design system (see `docs/DESIGN.md` for its origin). |
| `public/` | Favicons, `_headers`, `_redirects`. |

## Adding content

- **New industry**: copy an existing file in `src/data/industries/`, add the import to `index.ts`, add the slug to `scripts/validate-content.ts`, run the validator, build.
- **New cost page**: same pattern in `src/data/features/`.
- **New guide or case study**: add a Markdown file; frontmatter is validated by `src/content.config.ts`.
