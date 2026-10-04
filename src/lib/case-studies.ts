import { getCollection, type CollectionEntry } from "astro:content";

export type CaseStudy = CollectionEntry<"case-studies">;

// Drafts show in `npm run dev` and are hidden in production builds.
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const entries = await getCollection(
    "case-studies",
    ({ data }) => !import.meta.env.PROD || data.status !== "draft",
  );
  return entries.sort((a, b) => a.data.order - b.data.order);
}
