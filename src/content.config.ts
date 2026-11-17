import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

export const CATEGORIES = ['Fintech', 'Mobile', 'AI', 'E-commerce', 'Health', 'EdTech', 'Consumer'] as const

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string().max(180),
    role: z.string(),
    year: z.string(), // "2024" or "TBD"
    categories: z.array(z.enum(CATEGORIES)).min(1),
    stack: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    logo: image().optional(), // relative path to src/assets/logos — auto-resized to WebP
    cover: image().optional(), // main desktop screenshot (shown in a browser frame)
    phones: z.array(image()).default([]), // mobile screenshots (phone frames; >1 cycles)
    gallery: z.array(image()).default([]), // extra desktop screenshots for the case study
    url: z.string().optional(), // label shown in the browser frame's address bar
    accent: z.string().default('#e8b04a'),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .max(4)
      .default([]),
    links: z
      .object({
        live: z.url().optional(),
        store: z.url().optional(),
        repo: z.url().optional(),
      })
      .default({}),
  }),
})

export const collections = { work }
