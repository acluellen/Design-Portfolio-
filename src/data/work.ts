// Selected Work cards, in display order. A card links to /work/<slug>/ only when that
// case study exists and is published. Otherwise it shows "In progress".
import type { PhotoKey } from "./photos";

export interface WorkItem {
  title: string;
  slug?: string;
  tagline?: string;
  focus?: string[];
  photo: PhotoKey;
}

export const work: WorkItem[] = [
  {
    title: "AthenaScribe",
    slug: "athenascribe",
    tagline: "A human review layer for school documents that automated translation leaves behind.",
    focus: ["Research", "Product Strategy", "Accessibility", "Prototyping"],
    photo: "work-athenascribe",
  },
  {
    title: "Klima",
    slug: "klima",
    tagline: "A climate action app that turns everyday sustainable choices into a habit people stick with.",
    focus: ["Research", "Gamification", "Interaction Design", "Prototyping"],
    photo: "work-klima",
  },
  { title: "Craft Education", photo: "work-craft-education" },
  { title: "Mentorship App", photo: "work-mentorship-app" },
];
