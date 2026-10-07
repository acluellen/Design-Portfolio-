// Site wide links and contact details. Empty strings mean "not sent yet":
// the UI shows the item without a link until a URL is filled in.
export const site = {
  name: "Aaron Luellen",
  email: "Aaronluellen@gmail.com",
  linkedin: "", // TODO: Aaron to send the LinkedIn URL. Header and footer show it once filled in.
  kron4Video: "https://www.youtube.com/watch?v=r4l9IsyDUD4&t=31s",
  bridgegood: "https://www.bridgegood.org",
  emailSubject: "Interested in working together",
  /** Drop a PDF at public/resume.pdf and the footer shows a Resume link. */
  resumePath: "/resume.pdf",
  role: "Product designer",
};

/** Every email link on the site opens with the same subject line. */
export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`;

/** Pulls the video ID out of a YouTube URL, or returns undefined. */
export function youtubeId(url: string): string | undefined {
  if (!url) return undefined;
  const match = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return match?.[1];
}

/** Start time in seconds from a YouTube URL's t parameter, or 0. */
export function youtubeStart(url: string): number {
  const match = url.match(/[?&]t=(\d+)s?/);
  return match ? Number(match[1]) : 0;
}
