import { getCollection, type CollectionEntry } from "astro:content";

export type CaseStudy = CollectionEntry<"case-studies">;

// Drafts show in `npm run dev` and are hidden in production builds.
// `SHOW_DRAFTS=true npm run build` keeps them, for private review previews only.
const showDrafts = !import.meta.env.PROD || import.meta.env.SHOW_DRAFTS === "true";

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const entries = await getCollection(
    "case-studies",
    ({ data }) => showDrafts || data.status !== "draft",
  );
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Case study URL for a Selected Work card, or undefined when the card should not link.
 * Links only to published case studies, except in dev and SHOW_DRAFTS review builds,
 * where drafts link too so they can be reviewed.
 */
export async function caseStudyHref(slug: string | undefined): Promise<string | undefined> {
  if (!slug) return undefined;
  const studies = await getCaseStudies();
  const study = studies.find((s) => s.id === slug);
  if (!study) return undefined;
  if (study.data.status !== "published" && !showDrafts) return undefined;
  return `/work/${study.id}/`;
}
