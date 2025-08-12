import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

export default defineConfig({
  site: "https://patientflow.ai",
  output: "static",
  experimental: {
    clientPrerender: false,
  },
  prefetch: true,
  integrations: [
    sitemap({ customPages: ["/"] }),
    compressor({ gzip: true, brotli: true }),
  ],
  vite: {
    plugins: [tailwind()],
  },
  server: {
    host: 'localhost,
    port: 3000,
  },
  build: {
    format: "directory",
  },
  trailingSlash: "always",
});
