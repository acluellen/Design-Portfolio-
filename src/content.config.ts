import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Matches content/CONTENT.md section 1.
// The pattern skips files that start with "_" so the template never renders.
const caseStudies = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Home page card: one line tagline and focus tags. Both optional.
    tagline: z.string().optional(),
    focus: z.array(z.string()).default([]),
    role: z.string(),
    team: z.array(z.object({ name: z.string(), role: z.string() })),
    timeline: z.string(),
    tools: z.array(z.string()).default([]),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
    order: z.number(),
    status: z.enum(["draft", "published"]).default("draft"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { "case-studies": caseStudies };
