// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

const site = isGitHubPagesBuild
  ? 'https://alexcruzgargallo.dev'
  : 'http://localhost:4321';

const base = '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});