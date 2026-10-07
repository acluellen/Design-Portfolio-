// Every MDX component, mapped globally in src/pages/work/[slug].astro.
// Case studies use these with no imports.
import Figure from "./Figure.astro";
import Quote from "./Quote.astro";
import Stat from "./Stat.astro";
import StatGroup from "./StatGroup.astro";
import Callout from "./Callout.astro";
import Contribution from "./Contribution.astro";
import Mine from "./Mine.astro";
import Team from "./Team.astro";
import Sources from "./Sources.astro";

export const mdxComponents = { Figure, Quote, Stat, StatGroup, Callout, Contribution, Mine, Team, Sources };

export { Figure, Quote, Stat, StatGroup, Callout, Contribution, Mine, Team, Sources };
