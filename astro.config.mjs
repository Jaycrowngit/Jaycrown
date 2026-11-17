// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // TODO: swap for the real domain once registered (e.g. https://jaycrown.dev)
  site: 'https://jaycrown.vercel.app',
  integrations: [react(), mdx(), sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  vite: { plugins: [tailwindcss()] },
})
