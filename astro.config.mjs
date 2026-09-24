// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      // The default CSS minifier folds `animation-timeline: scroll(root)` into the
      // `animation` shorthand, where it is invalid — that silently kills the
      // scroll-driven navbar and bezel effects in production builds only.
      cssMinify: 'esbuild',
    },
  },
});
