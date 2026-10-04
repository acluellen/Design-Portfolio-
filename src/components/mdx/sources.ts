// Shared source handling for Quote and Stat. See content/CONTENT.md section 5.

export type SourceState = "sourced" | "todo" | "untraceable";

export function checkSource(component: string, source: unknown): SourceState {
  if (typeof source !== "string" || source.trim() === "") {
    throw new Error(
      `<${component}> is missing a source. Add source="..." or source="untraceable". Use source="TODO" while waiting on Aaron.`,
    );
  }
  if (source.trim().toLowerCase() === "untraceable") return "untraceable";
  if (/^todo\b/i.test(source.trim())) return "todo";
  return "sourced";
}
