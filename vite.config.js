import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // The site's public address, e.g. https://allysonlayog.com. Link previews on
  // Facebook, LinkedIn and Messenger only work with a full address, so set
  // SITE_URL in .env.local or in the hosting settings before publishing.
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.SITE_URL || '').replace(/\/$/, '')

  if (mode === 'production' && !siteUrl) {
    console.warn('\nSITE_URL is not set, so link previews will not show the share image.\n')
  }

  return {
    // Where the site lives. GitHub Pages serves it from /portfolio/, so the
    // deploy script sets BASE_PATH=/portfolio/. Locally it is just /.
    base: env.BASE_PATH || '/',
    plugins: [
      react(),
      {
        name: 'site-url',
        transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
      },
    ],
  }
})
