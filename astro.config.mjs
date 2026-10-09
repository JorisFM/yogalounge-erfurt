// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE und BASE_PATH setzt der GitHub-Workflow automatisch (actions/configure-pages).
// Mit eigener Domain liefert configure-pages einen leeren Base-Pfad, dann gilt base = '/'.
export default defineConfig({
  site: process.env.SITE || 'https://yogalounge-erfurt.de',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { responsiveStyles: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
