import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya tempat untuk mengatur domain produksi.
// Diisi agar canonical, URL OG absolut (og:image/og:url), dan sitemap ikut terbit.
const site = 'https://sianokvalley.com';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
