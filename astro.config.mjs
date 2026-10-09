// @ts-check
import { defineConfig } from 'astro/config';

// SITE und BASE_PATH setzt der GitHub-Workflow automatisch (actions/configure-pages).
// Lokal und mit eigener Domain bleibt base = '/'.
export default defineConfig({
  site: process.env.SITE || 'https://www.seemannsyoga.de',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { responsiveStyles: false },
});
