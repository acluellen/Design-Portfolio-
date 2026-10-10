import { site } from "../site.config";
import type { PhotoKey } from "./photos";

// About page data (October 10 direction): one short resume list (Rachel Chen’s pattern), the quotes,
// and the "A few things that shaped me" gallery. Only facts Aaron has confirmed go here.

export interface ResumeRow {
  /** A year or a range. Left out until Aaron gives one; the row then shows no year. */
  when?: string;
  /** The company, program, outlet, or team. */
  place: string;
  /** The role or the piece. */
  what: string;
  href?: string;
}

export interface AboutQuote {
  quote: string;
  name: string;
  role: string;
}

/** One tile in "A few things that shaped me". Without a photo or the clip it is a placeholder. */
export interface ShapedTile {
  caption: string;
  photo?: PhotoKey;
  /** The KRON4 loop instead of a photo. */
  clip?: boolean;
  /** Width over height of the media, so every tile in a row ends at the same height. */
  ratio: number;
}

// Aaron’s list, Oct 10 2026. Years only where he gave them.
export const resume: ResumeRow[] = [
  { when: "2026", place: "BRIDGEGOOD", what: "UX Design Apprentice" },
  { when: "2026", place: "KRON4", what: "Feature", href: site.kron4Video },
  { when: "2024 to 2025", place: "General Assembly", what: "UX certificate" },
  { place: "Lovable", what: "Hackathon" },
  // Gym name and years to add.
  { place: "Fight team", what: "Coach" },
];

// Real, named quotes only, with permission. Empty until Aaron sends them.
export const quotes: AboutQuote[] = [];

// Rows of tiles. Rows with no photo and no clip are placeholders and show in review previews only.
export const shaped: ShapedTile[][] = [
  [
    { caption: "BRIDGEGOOD apprenticeship cohort, 2026", photo: "group", ratio: 2000 / 1150 },
    { caption: "On KRON4 with BRIDGEGOOD, 2026", clip: true, ratio: 360 / 179 },
  ],
  [
    { caption: "Coaching a group class", photo: "about-watch", ratio: 4 / 5 },
    { caption: "On the pads", photo: "about-pads", ratio: 7 / 5 },
    { caption: "On the mats", photo: "about-camera", ratio: 4 / 5 },
  ],
  // Placeholders for the photos Aaron still has to send (content/NEEDED.md).
  [
    { caption: "Fighting", ratio: 4 / 3 },
    { caption: "Travel", ratio: 4 / 3 },
    { caption: "Family", ratio: 4 / 3 },
  ],
  [
    { caption: "Demo Day", ratio: 16 / 9 },
    { caption: "AI hackathon", ratio: 16 / 9 },
  ],
];
