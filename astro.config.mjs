// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sinerisgroup.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  // Spanish is the only real locale today — this just reserves the routing
  // so an English site can be added later as src/pages/en/*.astro without
  // touching config again. No /en pages or switcher exist yet on purpose:
  // shipping a language toggle with no translated content behind it would
  // be a broken link, not a feature.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  }
});