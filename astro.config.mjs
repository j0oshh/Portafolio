// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://j0oshh.github.io",
  base: "/Portafolio",

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "VT323",
      cssVariable: "--font-pixels",
      fallbacks: ["monospace"],
      styles: ["normal", "italic"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      fallbacks: ["monospace"],
      weights: [400, 500, 600, 700, 800],
      styles: ["normal", "italic"],
    }
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});