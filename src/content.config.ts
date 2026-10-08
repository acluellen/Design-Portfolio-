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
    /** One line that states the project, shown large under the title. */
    headline: z.string().optional(),
    // Home page card: a small label, one description, and one detail line.
    card: z
      .object({ label: z.string(), description: z.string(), detail: z.string() })
      .optional(),
    // The one large card at the top of Selected work.
    featured: z.boolean().default(false),
    // Shows a small "In progress" label on the home page card. The card never links while true.
    inProgress: z.boolean().default(false),
    role: z.string(),
    team: z.array(z.object({ name: z.string(), role: z.string() })),
    timeline: z.string(),
    /** The client, for client projects. */
    client: z.string().optional(),
    /** The program the work was part of, such as an apprenticeship. */
    program: z.string().optional(),
    tools: z.array(z.string()).default([]),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
    /** "View live prototype" button under the summary. "TODO" shows a placeholder in previews. */
    prototype: z.union([z.string().url(), z.literal("TODO")]).optional(),
    /** A video beside the hero text: a photo slot from src/data/photos.ts, linked to the video. */
    heroMedia: z
      .object({
        photo: z.string(),
        href: z.string().url(),
        label: z.string(),
        caption: z.string(),
        linkText: z.string(),
      })
      .optional(),
    order: z.number(),
    status: z.enum(["draft", "published"]).default("draft"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { "case-studies": caseStudies };
