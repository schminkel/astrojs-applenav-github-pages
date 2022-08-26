import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(
  {
    site: 'https://schminkel.github.io',
    base: '/astrojs-applenav-github-pages',
    vite: {
      build: {
        rollupOptions: {
          output: {
            assetFileNames: 'assets4711/[name]',
          },
        },
      },
    },
  }
);