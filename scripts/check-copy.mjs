#!/usr/bin/env node
// Scans case study prose for writing rule breaks (content/CONTENT.md section 4).
// Reports only. It never rewrites a file, and it always exits 0 so builds keep going.
//
// Skips: frontmatter, fenced and inline code, URLs, MDX comments, import and export lines,
// and component tags with their props. Text between component tags is still checked.
//
// Usage: node scripts/check-copy.mjs [files or folders...]
// Default folder: src/content/case-studies

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DEFAULT_DIR = "src/content/case-studies";

const RULES = [
  { id: "em dash", pattern: /—/g },
  { id: "en dash", pattern: /–/g },
  { id: "spaced hyphen used as a dash", pattern: /(?<=\S) -{1,2} (?=\S)/g },
  { id: "hyphenated word", pattern: /\b[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)+\b/gu },
  { id: '"my team"', pattern: /\bmy team\b/gi },
  {
    id: '"not X. It\'s Y"',
    pattern: /\b(?:not|isn['’]t|wasn['’]t)\b[^.!?\n]*[.!?]\s+(?:it['’]s|it is|it was)\b/gi,
  },
  { id: '"less X, more Y"', pattern: /\bless\b[^,.;!?\n]*,\s*more\b/gi },
];

/** Replaces a match with spaces, keeping newlines so line numbers stay true. */
const blank = (text) => text.replace(/[^\n]/g, " ");

function maskNonProse(source) {
  let text = source;
  // Frontmatter at the top of the file.
  text = text.replace(/^---\n[\s\S]*?\n---(?=\n|$)/, blank);
  // Fenced code blocks.
  text = text.replace(/^(```|~~~)[\s\S]*?^\1/gm, blank);
  // MDX and HTML comments.
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, blank);
  text = text.replace(/<!--[\s\S]*?-->/g, blank);
  // import and export lines.
  text = text.replace(/^(?:import|export)\s.*$/gm, blank);
  // Component and HTML tags, including props across lines. Text between tags stays.
  text = text.replace(/<\/?[A-Za-z][\w.]*(?:\s(?:[^<>"'{}]|"[^"]*"|'[^']*'|\{[^{}]*\})*)?\/?>/g, blank);
  // JSX expressions.
  text = text.replace(/\{[^{}\n]*\}/g, blank);
  // Inline code.
  text = text.replace(/`[^`\n]+`/g, blank);
  // Markdown link targets and bare URLs.
  text = text.replace(/\]\([^)\s]*\)/g, (m) => "]" + blank(m.slice(1)));
  text = text.replace(/\b(?:https?:\/\/|mailto:|www\.)\S+/g, blank);
  return text;
}

function collectFiles(targets) {
  const files = [];
  for (const target of targets) {
    let stats;
    try {
      stats = statSync(target);
    } catch {
      console.warn(`check:copy  skipped ${target}: not found`);
      continue;
    }
    if (stats.isDirectory()) {
      for (const name of readdirSync(target)) files.push(...collectFiles([join(target, name)]));
    } else if (target.endsWith(".mdx")) {
      files.push(target);
    }
  }
  return files;
}

function check(file) {
  const source = readFileSync(file, "utf8");
  const lines = maskNonProse(source).split("\n");
  const original = source.split("\n");
  const findings = [];
  lines.forEach((line, index) => {
    for (const rule of RULES) {
      for (const match of line.matchAll(rule.pattern)) {
        findings.push({
          file,
          line: index + 1,
          column: match.index + 1,
          rule: rule.id,
          match: match[0].trim(),
          text: original[index].trim(),
        });
      }
    }
  });
  return findings;
}

function main() {
  const targets = process.argv.slice(2);
  const files = collectFiles(targets.length ? targets : [DEFAULT_DIR]);
  const findings = files.flatMap(check);

  if (findings.length === 0) {
    console.log(`check:copy  ${files.length} file(s) scanned, no writing rule matches.`);
    return;
  }

  console.log(`check:copy  ${findings.length} match(es) in ${files.length} file(s). Report only, nothing was changed.\n`);
  for (const f of findings) {
    console.log(`  ${relative(process.cwd(), f.file)}:${f.line}:${f.column}  ${f.rule}  "${f.match}"`);
    console.log(`    ${f.text}\n`);
  }
}

try {
  main();
} catch (error) {
  console.warn(`check:copy  could not finish: ${error.message}`);
}
process.exit(0);
