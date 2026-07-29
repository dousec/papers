// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_URL ?? SITE_URL,
    base: process.env.BASE_PATH ?? '/',
    integrations: [sitemap()],
});
