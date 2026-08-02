// import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
// import tailwindcss from "@tailwindcss/vite";
// import cloudflare from "@astrojs/cloudflare";

// // import sitemap from "@astrojs/sitemap";

// export default defineConfig({
//   output: "static",
//   adapter: cloudflare(),
//   integrations: [react()],
//   vite: {
//     plugins: [tailwindcss()],
//   },
//   build: {
//     inlineStylesheets: "always",
//   },
//   devToolbar: {
//     enabled: false,
//   },
// });

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  integrations: [react(), markdoc(), keystatic()],
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
