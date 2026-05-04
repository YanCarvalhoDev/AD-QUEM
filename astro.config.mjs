import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.adquem.com.br',
  output: "static",
  adapter: cloudflare({
    imageService: 'compile'
  }),
  integrations: [
    react(), 
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
});
