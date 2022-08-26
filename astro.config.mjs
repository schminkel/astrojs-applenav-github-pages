import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(
  {
    site: 'https://schminkel.github.io',
    base: '/astrojs-applenav-github-pages',
    // Resolves to the "./public" directory, relative to this config file
    publicDir: new URL("./public", import.meta.url),
  }
);