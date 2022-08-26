import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig(
  {
    integrations: [image()],
    site: 'https://schminkel.github.io',
    base: '/astrojs-applenav-github-pages',
  }
);