import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://www.adquem.com.br", 
  adapter: cloudflare({
    imageService: 'compile'
  }),
  integrations: [react(), markdoc(), keystatic(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
  prerenderEnvironment: 'node',
});
