// Site wide links and contact details. Empty strings mean "not sent yet":
// the UI shows the item without a link until a URL is filled in.
export const site = {
  name: "Aaron Luellen",
  email: "Aaronluellen@gmail.com",
  linkedin: "", // TODO: Aaron to send the LinkedIn URL.
  kron4Video: "", // TODO: Aaron to send the KRON4 YouTube URL.
};

/** Pulls the video ID out of a YouTube URL, or returns undefined. */
export function youtubeId(url: string): string | undefined {
  if (!url) return undefined;
  const match = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return match?.[1];
}
