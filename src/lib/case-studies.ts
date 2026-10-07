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

/** Every case study, drafts included, sorted by `order`. For the Selected Work cards. */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const entries = await getCollection("case-studies");
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** A card links to its case study only when the case study is published and not marked in progress. */
export function caseStudyHref(study: CaseStudy): string | undefined {
  return study.data.status === "published" && !study.data.inProgress ? `/work/${study.id}/` : undefined;
}
