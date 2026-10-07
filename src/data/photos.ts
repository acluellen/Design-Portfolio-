// Photo slots. Drop a file named <key>.<jpg|jpeg|png|webp|avif> into src/assets/photos/
// and it replaces the placeholder. Astro resizes and compresses it at build time.
// Alt text: approved lines are confirmed by Aaron. The rest are drafts written from the photos.

export type PhotoKey =
  | "headshot"
  | "work-athenascribe"
  | "work-klima"
  | "work-craft-education"
  | "work-mentorship-app"
  | "coaching-1"
  | "coaching-2"
  | "coaching-3"
  | "group"
  | "kron4-cover";

export const photos: Record<PhotoKey, { alt: string; approved: boolean }> = {
  headshot: {
    alt: "Aaron smiling at the camera in a brown henley shirt.",
    approved: false,
  },
  "work-athenascribe": {
    alt: "AthenaScribe on a laptop and a phone, showing the document list and a finished translation.",
    approved: false,
  },
  "work-klima": {
    alt: "Two Klima phone screens: a home screen with a row of potted plants, and a Challenge Complete screen.",
    approved: false,
  },
  "work-craft-education": { alt: "", approved: false },
  "work-mentorship-app": { alt: "", approved: false },
  "coaching-1": {
    alt: "Black and white photo of Aaron watching a group class at a martial arts gym, hands behind his back, while students drill on pads.",
    approved: true,
  },
  "coaching-2": {
    alt: "Black and white photo of Aaron driving a knee into pads held by a partner while the class watches from the mats.",
    approved: true,
  },
  "coaching-3": {
    alt: "Black and white photo of a BridgeGood workshop, with people at laptops facing a speaker at the front of the room.",
    approved: true,
  },
  group: {
    alt: "The BridgeGood cohort smiling together on the steps outside Google San Francisco.",
    approved: true,
  },
  // Decorative: the play button already says "Play video: Purpose to Pixels: BridgeGood on KRON4".
  "kron4-cover": { alt: "", approved: true },
};
