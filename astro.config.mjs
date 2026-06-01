// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && !!repo;

const site = isGitHubPagesBuild
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
  : 'http://localhost:4321';

const base = isGitHubPagesBuild ? `/${repo}` : '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});