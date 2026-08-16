// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// This prototype is set up to deploy as a GitHub Pages *project* site
// (https://<org>.github.io/jasonic-prototype/). If it ever moves to a
// real domain (e.g. a Jasonic subdomain), just set `site` to that domain
// and drop `base` back to "/".
const site = process.env.SITE_URL ?? "https://valleywebsitedesign.github.io/jasonic-prototype/";
const base = process.env.SITE_BASE ?? "/jasonic-prototype/";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
