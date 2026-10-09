// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  // TODO: set to the live domain (for example "https://aaronluellen.com") so link previews
  // get absolute image and page URLs.
  // site: "https://example.com",
  integrations: [mdx()],
});
