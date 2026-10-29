import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ['gsap', 'three'],
    },
  },
});