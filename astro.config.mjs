import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://vasantchariai-dev.github.io',
  base: '/Halfwayup',
});
