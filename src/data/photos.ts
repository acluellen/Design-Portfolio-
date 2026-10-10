// Photo slots. Drop a file named <key>.<jpg|jpeg|png|webp|avif> into src/assets/photos/
// and it replaces the placeholder. Astro resizes and compresses it at build time.
// Alt text: approved lines are confirmed by Aaron. The rest are drafts written from the photos.

export type PhotoKey =
  | "headshot"
  | "work-athenascribe"
  | "work-klima"
  | "work-craft-education"
  | "coaching-1"
  | "coaching-2"
  | "coaching-3"
  | "about-watch"
  | "about-pads"
  | "about-camera"
  | "group"
  | "kron4-cover"
  | "kron4-still-color";

export const photos: Record<PhotoKey, { alt: string; approved: boolean }> = {
  headshot: {
    alt: "Aaron smiling broadly at the camera in a brown henley shirt.",
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
  "work-craft-education": {
    alt: "Three screens from the Craft Education redesign: the homepage with paths for parents, educators and providers, the parents page where Hubeta starts the assessment, and the Learning Center.",
    approved: false,
  },
  "coaching-1": {
    alt: "Black and white photo of Aaron watching a group class at a martial arts gym, hands behind his back, while students drill on pads.",
    approved: true,
  },
  "coaching-2": {
    alt: "Black and white photo of Aaron driving a knee into pads held by a partner while the class watches from the mats.",
    approved: true,
  },
  "coaching-3": {
    alt: "Black and white photo of a BRIDGEGOOD workshop, with people at laptops facing a speaker at the front of the room.",
    approved: true,
  },
  // About row (October 9). Gym photos Aaron sent as layout holders; credit and consent still to confirm.
  "about-watch": {
    alt: "Black and white photo of Aaron, hands behind his back, watching two students drill on pads under the gym’s R banner.",
    approved: false,
  },
  // The same shot as coaching-2, uncropped, so it keeps Aaron’s approved description.
  "about-pads": {
    alt: "Black and white photo of Aaron driving a knee into pads held by a partner while the class watches from the mats.",
    approved: true,
  },
  "about-camera": {
    alt: "Black and white photo of Aaron standing on the mats and glancing at the camera while students drill behind him.",
    approved: false,
  },
  group: {
    alt: "The BRIDGEGOOD cohort smiling together on the steps outside Google San Francisco.",
    approved: true,
  },
  // Read together with the play button’s label, "Play video: Purpose to Pixels: BRIDGEGOOD on KRON4".
  "kron4-cover": {
    alt: "KRON4 thumbnail: four people on the studio couch beside the Purpose to Pixels title.",
    approved: false,
  },
  // Cover frame of the KRON4 loop. Also the only image shown with reduced motion.
  "kron4-still-color": {
    alt: "Aaron on the KRON4 set between two guests, his name on screen: Aaron Luellen, UX Design Apprentice.",
    approved: false,
  },
};
