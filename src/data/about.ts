import { site } from "../site.config";

// About page tables (Micah Hoang's pattern: mono labels over thin rules).
// Only facts Aaron has confirmed go here. A missing field is left undefined: review previews show
// a "To add" placeholder in its place, and the live site leaves it out.

export interface AboutRow {
  /** Where: the company, program, or outlet. */
  place?: string;
  /** What: the role or the piece. */
  what?: string;
  /** When: a year or a range. */
  when?: string;
  href?: string;
  /** One or two sentences under the row. */
  note?: string;
}

export interface AboutQuote {
  quote: string;
  name: string;
  role: string;
}

export const experience: AboutRow[] = [
  // Role title as shown on KRON4's name bar. Years to add.
  {
    place: "BRIDGEGOOD",
    what: "UX Design Apprentice",
    note: "Launched by Google.org and the Golden State Warriors, with mentors from Google, Meta, and YouTube. The team built AthenaScribe, a translation tool with human review for Oakland Unified families, and presented it at Demo Day at Block HQ.",
  },
  // Klima and Craft Education ran in 2025. Program name to add.
  { place: "General Assembly", when: "2025" },
  // From Aaron's About text: "I ran the fight team." Gym name and years to add.
  { what: "Ran the fight team, coach" },
];

export const press: AboutRow[] = [
  {
    place: "KRON4",
    what: "Purpose to Pixels: BRIDGEGOOD on KRON4",
    href: site.kron4Video,
    note: "Live with BRIDGEGOOD’s executive director, talking about open communication between Oakland families and their schools, and why design for social good matters.",
  },
];

export const education: AboutRow[] = [{}];

// Real, named quotes only, with permission. Empty until Aaron sends them.
export const quotes: AboutQuote[] = [];
