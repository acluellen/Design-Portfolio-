// The `sizes` hint for Selected Work card images, computed with the same math as the
// carousel CSS (WorkCarousel.astro). Ratios and widths come straight from tokens.css,
// so changing a carousel token updates this too.
//
// The gutter steps (space-4, then space-6 from 48rem, space-8 from 80rem) mirror the
// --gutter media queries in tokens.css. Update both together.
import tokensCss from "../styles/tokens.css?raw";

const root = tokensCss.match(/:root\s*{([\s\S]*?)}/)?.[1] ?? "";
const token = (name: string) => {
  const value = root.match(new RegExp(`--${name}\\s*:\\s*([^;]+);`))?.[1]?.trim();
  if (!value) throw new Error(`carousel-sizes: token --${name} not found in tokens.css`);
  return value;
};
const REM = 16;
const rem = (name: string) => parseFloat(token(name)) * REM;

const desktopCards = parseFloat(token("carousel-cards-desktop"));
const tabletCards = parseFloat(token("carousel-cards-tablet"));
const phoneVw = parseFloat(token("carousel-card-phone"));
const measure = rem("measure-wide");
const pad = rem("space-5") * 2; // card padding, both sides
const gapPhone = rem("space-4");
const gap = rem("space-5");
const gutterTablet = rem("space-6");
const gutterWide = rem("space-8");

const px = (n: number) => `${Math.round(n * 10) / 10}px`;

/** Width of the image inside a card at each breakpoint. */
export const cardImageSizes = [
  // From 80rem: the row starts on the centered container's edge and runs to the screen edge.
  `(min-width: 80rem) calc((50vw + ${px(measure / 2 - gutterWide - 2 * gap)}) / ${desktopCards} - ${px(pad)})`,
  // 76rem to 80rem: the container is centered, gutter still space-6.
  `(min-width: ${measure / REM}rem) calc((50vw + ${px(measure / 2 - gutterTablet - 2 * gap)}) / ${desktopCards} - ${px(pad)})`,
  // 64rem to 76rem: the row starts at the gutter.
  `(min-width: 64rem) calc((100vw - ${px(gutterTablet + 2 * gap)}) / ${desktopCards} - ${px(pad)})`,
  `(min-width: 48rem) calc((100vw - ${px(gutterTablet + gap)}) / ${tabletCards} - ${px(pad)})`,
  `calc(${phoneVw}vw - ${px(pad)})`,
].join(", ");

// Phone gap is not part of the card width; kept for reference if the phone basis changes.
void gapPhone;
