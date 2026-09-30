// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages serves a project repo from a subpath, not the domain root.
  // Once a custom domain is pointed here, set base back to '/'.
  site: 'https://ishankhandekar.github.io',
  base: '/torreyhillsorthodontics',
  // Astro's dev and preview servers default to 4321 and do not read PORT on
  // their own, so a harness-assigned port would be ignored without this.
  server: { port: Number(process.env.PORT) || 4321 },
  vite: {
    build: {
      // The default CSS minifier folds `animation-timeline: scroll(root)` into the
      // `animation` shorthand, where it is invalid — that silently kills the
      // scroll-driven navbar and bezel effects in production builds only.
      cssMinify: 'esbuild',
    },
  },
});
