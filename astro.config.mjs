import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://julie-portfolio.netlify.app', // You can update this later
  base: '/',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});