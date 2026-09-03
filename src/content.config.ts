import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),   // shorter <title>; defaults to title
    client: z.string(),
    industry: z.string(),           // industry slug
    services: z.array(z.string()),  // service slugs
    summary: z.string(),            // 1-2 sentences, used in cards + meta description
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    }),
    deliverables: z.array(z.string()),
    order: z.number().default(99),
    images: z.array(z.object({ file: z.string(), alt: z.string(), caption: z.string().optional() })).default([]), // files in src/assets/work/
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    author: z.string().default('aresyn'),
    readingMinutes: z.number().optional(),
    keyTakeaways: z.array(z.string()).min(3).max(6),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]), // absolute site paths
    order: z.number().default(99),
  }),
});

export const collections = { work, guides };
