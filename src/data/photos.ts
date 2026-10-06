// Photo slots. Drop a file named <key>.<jpg|jpeg|png|webp|avif> into src/assets/photos/
// and it replaces the placeholder. Astro resizes and compresses it at build time.
// Alt text is a DRAFT written from Squarespace screenshots. Aaron to approve each line.

export type PhotoKey =
  | "headshot"
  | "work-athenascribe"
  | "work-klima"
  | "work-craft-education"
  | "work-mentorship-app"
  | "coaching-1"
  | "coaching-2"
  | "coaching-3"
  | "group";

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
    approved: false,
  },
  "coaching-2": {
    alt: "Black and white photo of a fighter throwing a high kick into pads held by a training partner.",
    approved: false,
  },
  "coaching-3": {
    alt: "Black and white photo of a BridgeGood workshop, with people at laptops facing a speaker at the front of the room.",
    approved: false,
  },
  group: {
    alt: "A large group of people smiling together on steps outside a building in San Francisco.",
    approved: false,
  },
};
