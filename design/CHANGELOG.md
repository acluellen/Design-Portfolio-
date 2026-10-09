# Design and structure changelog

Newest first. Every design or structure decision goes here.






















## 2026-10-09 · Section lines easier to see

- Aaron opened the preview in Safari and in the Claude viewer and saw no moving lines. In Chromium the draw and replay work, so the likely cause is that the line was too faint to notice (`--color-rule` is very light on paper) and the About line drew at the very bottom of the screen.
- New token `--color-rule-section` (#9d978c on paper, #5b6574 in dark mode) for the two drawn lines only. Other rules stay light.
- The draw now starts once the section is a quarter of the way up the screen (`rootMargin` bottom -25%), where the eye is.
- With Reduce Motion on in macOS, the lines show without drawing. That is on purpose.

## 2026-10-09 · Section lines replay

- Aaron: replay. The lines above Selected work and About now draw left to right every time their section comes back into view, like Micah Hoang's. A small observer adds `is-drawn` on the way in and removes it once the section leaves the screen. Reduced motion, or no IntersectionObserver: the lines simply show.

## 2026-10-09 · Section lines draw left to right (replaces the full width lines)

- Aaron's screen recording of Micah Hoang's site showed what he meant: the line above a section draws itself from left to right as the section comes into view. The full width version from earlier today is undone; the lines are back at the content width.
- The lines above Selected work and About now draw left to right over 1.1s (`--duration-rule-draw`, `--ease-roll`) when the section is revealed, including on load. With reduced motion, or without JavaScript, they simply show. The `body` `overflow-x: clip` added for the full width lines is removed.

## 2026-10-09 · Full width section lines

- The thin lines above Selected work and About now run the full width of the window, edge to edge like the header line (Micah Hoang). Drawn outside the content column with a pseudo element; `body` uses `overflow-x: clip` so they never add a sideways scroll, and sticky elements keep working.

## 2026-10-09 · Home About, centered (Impeccable critique, Zeel Shah's feel)

An Impeccable critique (two separate agents: design and copy review, and the detector in a browser) scored About through the closing section 16 of 24: three heavy pictures in a row and the same facts repeated (BRIDGEGOOD five times, AthenaScribe and Demo Day repeating card 01, "associate product design" twice in the closing). Aaron picked: centered statement, his story order, the clip in color, and my call on the Google photo.

- About is centered on the graph paper: "About", then "I completed the BRIDGEGOOD UX Design Apprenticeship." with "Apprenticeship" in a blue highlighter (new `--color-highlight` and `--color-highlight-ink`, 6.1:1; light blue with dark text in dark mode), one line ("A summer program launched by Google.org and the Golden State Warriors, with mentors from Google, Meta, and YouTube."), a mono date (June to August 2026), the KRON4 clip centered at `--size-clip` (now 44rem) with "On KRON4 · Watch on YouTube · Pause clip" under it (full words on phones too), then "Before design, I ran a Muay Thai fight team." and "Read more about me".
- Removed from home: the AthenaScribe and Demo Day line (card 01 says it), the gym photo (it lives on the About page), and the coaching heading.
- Closing: the Google group photo is centered at the clip's width inside the navy panel, with its credit; the line under the question is now "I want to join a team building for schools, families, or people short on time." The question is smaller on phones so it does not wrap to four lines.
- Detector on the changed files: clean. Copy check: clean.

## 2026-10-09 · Fixes from the case study review agent

A review agent checked all three case studies at 1440 and 390, light and dark, keyboard, contrast, and the index. Fixed:

- Side index: stays fully in view to the end of the page. Previous, Next, and Back to top now sit inside the case study grid (body column), so the index's sticky area runs down to them. On short screens the list scrolls inside itself.
- One right edge: in the case study body, wide blocks now stop at the reading measure too, so callouts, quotes, figures, cards, and rules end on the same line.
- Phone bar: the open list lays over the page instead of pushing it down.
- Tables that scroll sideways on phones show a soft edge on the side with more to see.
- Stat groups: one column on phones, so three numbers never land as two plus one.

Left for later passes: Klima has no `Section` chapters yet (Klima pass); before and after rows can drift out of line when one side wraps; the AthenaScribe phone mockup has a white background that shows in dark mode; the "Scan, Translate, Right person" chips wrap on wide screens.

## 2026-10-09 · Back to top on case studies

- Micah Hoang's "Scroll to top", named "Back to top ↑" (plainer, and what most sites call it). Always on the right so it is in the same place on every case study: under Next on AthenaScribe and Klima, and in the empty Next spot on Craft Education, the last one (Aaron's ask). Mono, navy, 44px target, underline on hover. It jumps to the top of the page (smooth, or instant with reduced motion).
- The pager's label for screen readers is now "End of case study".

## 2026-10-09 · Case study pass: the case studies match the home page

- Header of each case study: a mono index row over a thin rule ("01 / AthenaScribe", the same number as its home card, with "Draft" at the end for drafts). The headline is now the page's h1; the study's name sits in the index row. An "At a glance" line with the card's detail (the key numbers) opens the facts, full width, before Role, Timeline, Team, and the rest.
- Sections (`Section`): no white rounded panels. Every chapter opens with a thin rule; `tone="panel"` only makes the rule stronger.
- Cards (`Card`): ruled columns, no box. Their small bold lead labels are mono.
- Number badges (`Badge`): square, mono, outlined in the heading color, instead of filled round dots.
- Tags (`Tag`): mono, uppercase, outlined, square.
- Callouts: the top rule and label use the navy heading color, not the link blue.
- Before and after (`Shift`): no dashed box and no white box. Before is muted under a thin rule; after sits under a heavier navy rule.
- `Mine` rule in navy. Placeholders (dashed, blue) are unchanged; they show only in review previews.

## 2026-10-09 · About heading wording

- "I recently finished the BRIDGEGOOD UX Design Apprenticeship." is now "I completed the BRIDGEGOOD UX Design Apprenticeship." (Aaron: "recently" read wrong).

## 2026-10-09 · More About facts

- General Assembly certificate program: 2024 to 2025.
- Two hackathon rows from Aaron: Lovable, and BRIDGEGOOD Design for Social Good. Years to add.
- The hero meta line stays "2 years" (Aaron said no to "since 2024").
- Next project, not on the site yet: a job seeking app for junior and mid level designers.

## 2026-10-09 · About facts from Aaron

- BRIDGEGOOD UX Design Apprentice: June to August 2026.
- General Assembly: certificate program, started 2024.
- The KRON4 caption stays without the co-host's name, at Aaron's request.

## 2026-10-09 · Case study index, home About as one story, Oakland

- Header: "Oakland, CA" (Aaron).
- Case study section index (Tee Hodgson's strip, Angelina Cao's numbered list): from 72rem a numbered list beside the body (Overview, then one line per section) that stays in view and marks the section on screen. Under 72rem a thin bar under the header shows the current section ("03 / Research") and opens the full list. Real links, keyboard reachable, closes after a jump; jump links land below the header and the bar. Short names come from a new `index` list in each case study's frontmatter.
- Home About rebuilt as one story after the work (Aaron's flow): "I recently finished the BRIDGEGOOD UX Design Apprenticeship.", one line on Google.org, the Warriors, the mentors, AthenaScribe, and Demo Day; then the KRON4 clip with its caption row; then "From coaching systems to product design." with two sentences from his coaching story, "Read more about me", and the knee strike gym photo as a stand in for his coaching clip (tagged as a placeholder in previews only). The home About no longer repeats the About page intro word for word.
- Fixed: words lost their spaces next to inline names, and inside the caption row (flex items trim spaces; now inline blocks).

## 2026-10-09 · Fixes from the design review agent

A review agent checked home and About at 1440 and 390, light and dark, keyboard, and reduced motion. All five asks passed except KRON4 on phones. Fixed:

- KRON4: the caption and "Pause clip" now share one mono row (KronClip takes the caption as a slot; Pause sits at the end). On phones the words shorten (KRON4, BRIDGEGOOD, YouTube) so the row stays one line.
- About tables: fixed 10ch year column so every row lines up. Row notes at body size. Linked rows get a taller tap target.
- Skip link: square, no pill.
- Hero: removed the extra space above the links row and trimmed the space below the hero.
- Header: on wider screens it is a four column grid, so "Product designer" and "Bay Area, CA" start on the quarter lines of the page.
- Work cards: on phones, an empty image slot is skipped instead of showing a tall blank box.
- Print shows every section, including ones not yet revealed on scroll.
- Not changed, for Aaron to decide: the home About paragraph is the same text as the About page intro.

## 2026-10-09 · One voice type, Micah header, hero subtext, one line KRON4

Aaron's answers: "One voice, mono labels kept"; the header with the AL logo then the text; the KRON4 section as the clip plus one caption line. Meta line from his facts: design since 2024 (2 years), spaces EdTech (AthenaScribe), Health (Craft Education, a therapy service), Climate (Klima).

- Type: One voice. Atkinson Hyperlegible Next for headings and body, headings at 500 with -0.02em tracking; size sets the order. Mono labels stay (Atkinson Hyperlegible Mono). Geist removed; the mono font is preloaded instead. Share image redone in Atkinson.
- Header (Micah Hoang): AL logo, then "Product designer" and "Bay Area, CA" spread across the middle in mono, then Work and About in mono, then the theme toggle. The middle text hides on phones.
- Hero: "Aaron Luellen", then "Research led product designer.", then the mono meta line "2 years · EdTech · Health · Climate" (Zeel Shah), then a mono links row: LinkedIn, Resume, Email (Micah). LinkedIn and Resume show as plain text until the URL and the PDF exist; Email is live.
- KRON4: headings, paragraph, and button removed. The clip opens on scroll, then one mono caption line: "On air with KRON4", "BRIDGEGOOD UX Design Apprenticeship" (link), "Watch on YouTube". It leads straight into the short About.
- About page: the BRIDGEGOOD details (Google.org, the Warriors, mentors, AthenaScribe, Block HQ) and the KRON4 description moved into notes under their rows. The KRON4 row links to the segment.
- About page fix: the sticky portrait now stops at the end of the text block ("What people say") instead of sliding over the gym photos. Portrait and text share one block; the gallery sits outside it.

## 2026-10-09 · About page, Micah style

Aaron sent a screen recording of Micah Hoang's site: a short About on the home page that opens a full About page.

- Home About: just the words. Label, heading, the intro paragraph, and "Read more about me". The coaching story and the gym photos moved to the About page. The Google group photo banner stays right under it, until further notice (Aaron).
- New About page (`/about/`): "Hey, I'm Aaron.", the intro and the coaching story, the smiling portrait on the left that stays in view, then mono tables (Experience, Press, Education, What people say), then the three gym photos.
- Table content lives in `src/data/about.ts`. Filled in only with what is confirmed: BRIDGEGOOD, UX Design Apprentice (KRON4's name bar); General Assembly, 2025 (Klima and Craft dates); "Ran the fight team, coach" (his About text); KRON4, Purpose to Pixels. Every gap shows as "To add" in previews so Aaron can see the layout, and is left out live.
- The header's About link now opens the About page. The old `/about` redirect to `/#about` is removed.

## 2026-10-09 · Aaron's final KRON4 cut, and pages that really open at the top

- KRON4 loop: Aaron's own trim of his YouTube recording ("final_cut"), used as is and cut at 3.5 seconds so it ends with his mouth closed (it also starts closed, so the loop joins cleanly). Same crop as before: above the ticker, past the black edge, 1440 by 716. 469 KB MP4, 394 KB WebM. New still from the last frame.
- Page changes, second fix: Aaron found that case study links still opened at the bottom in the preview. The viewer restores the last page's scroll position after the new page loads. Now, inside a frame, any scroll the visitor did not make in the first two seconds goes back to the top (wheel, touch, keys, or a click on the page count as the visitor's own). Tested in a frame that jumps to the bottom 400ms after load: the page stays at the top. Normal sites are untouched.

## 2026-10-09 · KRON4 loop from YouTube, About without the portrait, theme and page fixes

- KRON4 loop: cut from Aaron's screen recording of the YouTube segment. The first 4 seconds of it: all three guests, his name bar ("Aaron Luellen, UX Design Apprentice"), and the KRON4 logo, ending with his mouth closed. Cropped above the weather ticker and past a thin black edge, 1440 by 716. 535 KB MP4, 443 KB WebM, no audio. New still from the last frame. The clip now opens to the full content width (`--size-clip: 100%`). AthenaScribe's hero thumbnail is 16:9 from the same still.
- About: the smiling portrait is out for now (Aaron). About is the text, then the gym photo row.
- Theme: the light or dark choice now stays when moving between pages. It is kept in localStorage and also in `window.name`, which survives page changes in the same tab when storage is blocked. If a preview host sets its own theme on the page, the visitor's own choice wins (`saveTheme` and a watcher in `BaseLayout.astro`).
- Page changes: inside a preview frame, each new page scrolls its top into view, so "Next" at the end of a case study lands at the top of the next one. Links to a #section are left alone.

## 2026-10-09 · New direction, step 4: checks and the link preview

- Checked home, AthenaScribe, Klima, Craft Education, and the styleguide at 1440 and 390, light and dark: no sideways scroll anywhere, copy check clean.
- Link preview image redone in the new look: graph paper, navy logo and name in Geist, the one line under it, navy bar.

## 2026-10-09 · KRON4 loop back to the earlier file

- Aaron: the loop must come only from a screen recording of the KRON4 segment on YouTube, never from the Instagram repost he sent. The two loops cut from the repost today are removed. The page uses the earlier color loop again (520 by 390, 4:3, `--size-clip` 40rem) until his recording arrives. Then: cut 4 seconds from the moment with his name bar, all three guests, ending with his mouth closed, full width.

## 2026-10-09 · New direction, step 3: work cards, and the full size KRON4 clip

- Work cards rebuilt (`WorkCard.astro`): a mono index row ("01 / AthenaScribe") over a thin rule, where the title rolls up to "View case study" on hover or keyboard focus (Micah Hoang, 420ms, off with reduced motion); then a poster cover (Zeel Shah): the role label, the case study headline with one word in blue, and one real outcome, beside the project image slot; then the description. The whole card stays one link.
- New card fields: `highlight` (the blue word, must appear in the headline) and `outcome` (one result taken from the detail line). AthenaScribe: "translation", "12 stakeholder interviews". Klima: "trust", "14 user interviews · 6 usability tests". Craft Education: "care", "10 research participants · 25 heuristic issues".
- Covers: featured 21:9, half width 4:3 so both covers in a row match, stacked on phones with a 16:9 image slot.
- Draft project pictures switched off at Aaron's request (`showImages = false`); the files stay. Review previews label the empty slot "Project media"; production shows a plain panel.
- KRON4 clip: Aaron sent the full size clip (1080 by 610). At his call, the loop shows all three guests at full width with his name bar ("Aaron Luellen, UX Design Apprentice") and the KRON4 bug, cropped just above the weather ticker (1080 by 548). 4 seconds (4.3s to 8.3s of the clip), ending with his mouth closed, before he looks up. 332 KB MP4, 273 KB WebM, no audio. New still from the last frame. `--size-clip` is now 67.5rem. The reposter's Instagram handle stays visible on the left guest; Aaron can ask to cover it.
- About photos: no credit line (Aaron: no credit needed). The closing banner keeps "Photos: BRIDGEGOOD".
- New `content/NEEDED.md`: the running list of what Aaron still needs to send.

## 2026-10-09 · New direction, step 2: home layout

Aaron's calls: name at the top with no photo (like Micah), no buttons, work right after the name, KRON4 under the work with the clip opening on scroll into About, and the portrait moves to About.

- Top: "Aaron Luellen" at the new `--step-6` and one line, "Product designer, research led, Oakland". The v16 top section lock is lifted by Aaron. The portrait and the two buttons are gone from the top.
- Order: name, Selected work, BRIDGEGOOD and KRON4, About, closing.
- BRIDGEGOOD and KRON4: off the white panel and onto the paper. Same text. Two columns, then the clip centered below at up to 40rem (`--size-clip`), since the clip file is 520px wide.
- Clip opens on scroll (`KronClip opens`): center crop to full frame with a slight zoom out, CSS scroll timeline, off with reduced motion, fully open where unsupported.
- About moves off the dark panel onto the paper. The old top intro paragraph is now its lead, then the coaching story unchanged, the portrait beside the text, and a row of three gym photos Aaron sent (`about-watch`, `about-pads`, `about-camera`, pre-cropped to 4:5, 7:5, 4:5). The old `coaching-1` and `coaching-2` files stay in the folder, unused.
- Sections after the name open with a thin rule.
- Still to confirm with Aaron: who took the gym photos (the credit still reads "Photos: BRIDGEGOOD"), that the gym name and students' faces are fine to publish, and the draft alt text for `about-watch` and `about-camera`.

## 2026-10-09 · New direction, step 1: colors, fonts, square corners

Aaron picked the direction from the reference review and the picker page: warm paper with graph lines (Zeel), deep navy for headings, buttons, the logo, and the closing block, the AL blue for links only, Grotesk and mono type, square corners.

- Tokens: new paper `#F6F3ED`, navy headings `#1B2A3A` (new `--color-heading`), warm body ink `#201F1D`, muted `#524E49`, faint graph lines (`--color-grid`, `--size-grid`). Dark mode is a navy night (`#12161C`).
- Links stay `#1D4ED8`. Buttons and the logo go navy. Small labels are muted mono instead of blue.
- Navy panels replace the near black ones (`--color-always-dark` is `#1B2A3A`). Inside them buttons flip to paper with navy text.
- Type: Geist replaces Inter for headings. Atkinson Hyperlegible Mono is the new label font. Atkinson Hyperlegible Next stays for body text. Fonts self hosted via Fontsource; Geist is preloaded.
- Shape: every radius is 0. Buttons are square. Round icon buttons stay round. No pills anywhere.
- Logo: inlined so it follows the theme (navy on light, light on dark). `logo.svg` and `favicon.svg` recolored to navy with paper lines. The share image (`og-image.png`) is still blue; to update with the next pass.
- Page order, the hero, and the cards are unchanged in this step. Next: step 2, the home layout.

## 2026-10-08 · Craft Education case study draft

- Draft at `/work/craft-education/`, written from the team's final deck (36 slides and speaker notes), the client brief, the kickoff meeting notes, the research and usability notes, and Aaron's answers. Uses the AthenaScribe blocks: panels, method cards, stats, the three heuristic problems with the original screens, participant quotes, the journey map, affinity map and personas, a before and after comparison, the parent path as four screens, the provider path, testing, the roadmap handed to Craft, and a reflection.
- Role: team lead, UX research and product design (named lead by the General Assembly program manager), with David Brandt credited for shared work and session moderation. Timeline: 6 weeks, April to June 2025 (kickoff April 23, presentation June 7). Client: Craft Education, Accra, Ghana. New optional `client` field shows in the hero facts.
- Facts checked: the African Union award is the 2021 Innovating Education in Africa grant at the RewirEd Summit (AU press release); HundrED's 100 innovations to watch, 2023, from Craft's own site banner in the deck.
- Participants appear by role only. Real names from the research notes (including the two journey map titles) and the contact list in the brief are never published. Quotes are verbatim from the deck and the kickoff notes.
- Left out on purpose: "Every recommendation proven by competitor success" and "zero sign ups to competitive conversion rates", since neither was measured. The number of people who tested the redesign stays out until confirmed (the deck documents 2; Aaron recalls 3 more).
- Card: new label, description and detail line, and the ChatGPT mockup is replaced with three real screens from the redesign on a light teal field. Prototype link is a placeholder.

## 2026-10-08 · AthenaScribe placeholders for the missing links and video

- Built the three missing pieces from the board with placeholders, so Aaron can drop in the real ones: "View live prototype" under the hero summary and again beside the redesign steps, "View the affinity map in FigJam" under the research, and a phone shaped walkthrough video beside the redesign steps (the board's two column layout).
- Placeholders are dashed and labeled "Placeholder". They show only in dev and review previews; a production build leaves them out, so a missing link never reaches visitors.
- New: `ActionLink`, `VideoSlot`, and a `prototype` frontmatter field.

## 2026-10-08 · AthenaScribe restructured to match the Claude Design board

- Aaron asked for the AthenaScribe page to follow the structure of his Claude Design board (AthenaScribe Case Study, Main board). The words stay the same; the layout now follows the board:
  - Hero: title, headline and summary on the left, the KRON4 segment on the right as a thumbnail with a play button that opens YouTube in a new tab.
  - The story alternates plain parts and rounded light panels, like the board's white and gray bands. Panels reuse the home page panel look.
  - The design target is a dark bar. Research methods are three cards with a "Why" label. The original idea and the district platform are two cards with an arrow and numbered finding markers. Each finding sits beside what the team did, with change tags and sources.
  - Testing: the phone and laptop screens side by side with the Scan, Translate, Right person flow; the two research questions as cards with a verdict tag; the administrator quote beside the next version fixes.
  - Redesign: a numbered step line and four refinement cards.
- Case study body is now container wide. Text keeps the 68ch reading measure; blocks marked `is-wide` use the full width. Klima looks the same.
- New blocks: Section, CardGrid, Card, Tag, Badge, Shift, Finding, ScreenPair, Steps, Split, Fixes; Callout gets a `strong` variant; frontmatter gets `heroMedia`. Documented in content/CONTENT.md.
- New tokens: `--card-grid-min`, `--card-grid-min-small`, `--size-badge`, `--size-play`, `--color-overlay`.
- Kept from the site system instead of the board: Inter and Atkinson type, the site colors, square cornered tags instead of pill tags (no pill shapes), and no closing "Email me" block, since the footer already has the email. Still TODO from the board: the live prototype link, the FigJam link and the walkthrough video.

## 2026-10-08 · Craft Education card image

- Added Aaron's laptop and phone mockup of the Craft Education site as the card image. The source was 3:2, so it was extended at the top and bottom with its own background to 4:3 (1448 by 1086, like the other cards) instead of cropping the devices.
- Draft alt text written from the image, waiting on Aaron's approval.

## 2026-10-08 · Klima prototype link verified

- Aaron confirmed the prototype plays in a private window without signing in. The link now opens on the Impact Hub with the flows sidebar hidden, so visitors start on Aaron's part and do not see the list of team flows.

## 2026-10-08 · Klima card links on the preview

- Review previews (`SHOW_DRAFTS=true`) now link a draft's card when the draft is not marked in progress. Production builds still link only published studies.
- Klima is no longer marked in progress: on the preview its card opens the case study and says "View case study". In a production build Klima stays a draft, so its card shows "Case study coming soon" and does not link.
- New Klima card detail line: "14 user interviews · 6 usability tests · Gamification lead on a team of three".

## 2026-10-08 · Klima prototype link back, preview v23

- Aaron sent a new prototype link. It is back on the page under the garden table, unverified: Aaron to check it plays in a private window without signing in. Figma is blocked from this environment, so it could not be tested here.
- Preview updated to v23 with the Klima draft, linked from the footer.

## 2026-10-08 · Klima prototype link removed

- The prototype player asks visitors to sign in to Figma, so the link is off the page. A TODO in the file lists the two ways back: Aaron's own public copy of the file, or a screen recording.

## 2026-10-08 · Klima prototype link

- Aaron confirmed the prototype file opens in a private window without signing in. Added a link under the garden table to the 2025 team prototype, starting on the Impact Hub so visitors land on Aaron's part.

## 2026-10-08 · Klima SUS baseline

- Added the System Usability Scale scores for Klima's original app from the usability test on the team FigJam: 85, 72.5 and 42.5 from three participants, an average of about 67.
- The deck's 40 to 90 result could not be traced on the board, so it stays off the page.

## 2026-10-08 · Klima structure locked, UI refresh required

- Badge tier note deleted (Aaron): the garden stages replace the Bronze to Legendary tiers.
- The Track step now uses the final Today's Impact frame from the prototype file, read through the Figma connector.
- Affinity map placeholder replaced with the three themes from the board: the sustainability journey, measuring impact, and offsetting, money and trust.
- The 2026 gamification refresh is required before Klima publishes (Aaron). The page structure is done; only the UI images change.
- The System Usability Scale result stays off the page until Aaron confirms the details.

## 2026-10-08 · Klima garden stages and the original Multiply tab

- Read Aaron's final prototype file through the Figma connector. The How It Works frame confirms the garden path: 7 challenges on a 7 day streak earn a badge, and badges move the garden through Seed Patch, Sprouting Garden, Forest Stage and Thriving Ecosystem. Added as a table under the challenge loop.
- Added Aaron's screenshots of Klima's original Multiply tab (five screens) as the before picture for the gamification work.
- Noted for the 2026 refresh: on the How It Works screen the Garden stage column runs off the right edge.
- The Figma connector only renders frames at 1x and downloads from figma.com are blocked by the network policy, so the chat images stay. At the sizes they show on the page they are sharp enough.

## 2026-10-08 · Klima challenge loop screens and answers

- Aaron's answers: the competitor is Planet Wild (not My Planet 8), the teammate is May (not Maya), and the 14 interviews stand (the board was not updated). The badge tier table stays out until Aaron reviews it.
- New `Screens` component: phone screens in order with a small step label each, four across on wide screens and two across on phones.
- Klima draft gets a "One challenge a day" section with four of Aaron's 2025 gamification screens (choose, log, track, earn), cropped to one phone screen each. They came through chat, so they are about 380 pixels wide; swap in full size exports later.

## 2026-10-08 · Klima research rebuilt as tables from the FigJam board

- Read the team FigJam directly through the Figma connector, so no PNG exports were needed. Research artifacts are rebuilt as Markdown tables instead of screenshots: they stay sharp, read on phones (they scroll sideways inside the table) and work with screen readers.
- Three tables added to the Klima draft: the feature inventory (Klima against Yayzy, Pawprint, Planet Wild, Garmin and GoFundMe), the Must have features from the prioritization grouped by need, and the usability test summary of the mid fidelity wireframes.
- Cells use words (Yes, Missing, N/A), not color, so meaning never depends on color alone.
- Open questions for Aaron: Planet Wild or My Planet 8 in the competitor list; May or Maya; the badge tier and Klima match bonus table; 13 participant profiles on the board against 14 interviews on the page.

## 2026-10-07 · Klima card and case study draft

- Home card: label "Gamification design · General Assembly", new description about making sustainable action easier to understand and more engaging. The old line about single use plastic is gone; the research never mentions it.
- Case study draft at `/work/klima/` (hidden from the live site), written from the team's 34 slide General Assembly deck and Aaron's answers. Aaron's role is the gamification redesign plus the competitive analysis, feature inventory, feature analysis and pluses and deltas; the research process is credited to the team. Isabel led onboarding and Maya led exploration.
- An "About this project" note says it was an independent General Assembly exercise, not commissioned by Klima.
- Following Aaron's rules: the System Usability Scale result (40 to 90) is held until verified; engagement, retention and conversion are described as goals the design supported, not measured outcomes; persona and testing lines are written as synthesis, not quotes; the deck's "not X, it's Y" opening and closing lines are rewritten; dashes, hyphens and typos fixed.
- Images from the deck PDF (text and question bubbles left out, transparency flattened onto white): the retrospective journey map, two Crazy 8s sheets, Klima's original home and Maya's exploration redesign, and Klima's original Multiply tab next to Aaron's 2025 Impact Hub. New `Compare` component shows a before and after side by side.
- Timeline: 6 weeks, March to April 2025.
- TODO before publishing: FigJam images (affinity map, competitive analysis, prioritization table), the refreshed 2026 gamification screens with their disclosure note, and a prototype link if there is one.

## 2026-10-07 · AthenaScribe case study published

- `status` is now "published": the page is part of the site build and the AthenaScribe card links to it, lifts on hover, and shows "View case study". "Case study coming soon" is gone. Checked: clicking the card opens `/work/athenascribe/`, with no Draft label.
- Aaron confirmed the number sources and that the "buckets" quote came from an administrator in round one testing.
- Team shown as first initial and last name (G. Garcia, M. Maenner, R. Villagran). Tyler stays as "Tyler" until Aaron sends a last name.
- Timeline is "4 week design sprint", as in the draft. "July to August 2026" removed at Aaron's request.
- The prototype, FigJam and source links are still missing; nothing on the page points to them yet.

## 2026-10-07 · AthenaScribe case study page (Phase 5)

- Built `/work/athenascribe/` from Aaron's Claude Design draft (AthenaScribe Case Study canvas, Main board). Words are the draft's, in its order, rebuilt in the site's own styles. The older "Approach and Insights" board on the same canvas (7 interviews, 11 clusters) was not used; the Main board says 12 interviews and 15 clusters.
- Images: the round one phone upload screen (the file already held for Phase 5, renamed `round-one-upload.webp`) and the round one admin queue on a laptop (`round-one-admin-queue.webp`, taken from the draft).
- Still a draft page (`status: "draft"`): hidden from the live site and its card does not link. Missing from the draft and left as TODO comments: the live prototype link, the FigJam affinity map link, the six source links, and the prototype walkthrough video.
- Inferred, to confirm: which source backs each of the three numbers at the top, and that the "buckets" quote came from an administrator in round one testing. Kept from Aaron's first brief though the draft leaves them out: team surnames, Tyler as project coach, and "July to August 2026".
- New for case studies: `headline` and `program` frontmatter fields, a `Sources` component, Markdown table styles, `Figure` takes imported images (optimized like the site photos) and a `narrow` option for tall phone screens, stat values one step smaller so values with words stay on one line, and a small label above a heading sits with that heading.
- The copy check reports "RFP 26-01". It is a document number, so it stays as written.

## 2026-10-07 · i-have-adhd skill added

- Added the i-have-adhd skill (`.claude/skills/i-have-adhd`) from github.com/ayghri/i-have-adhd, commit 723af7d. It only changes how Claude writes replies, never the site. It runs when Aaron types `/i-have-adhd` and stays on until "stop adhd mode". Its always-on hook is not installed.

## 2026-10-07 · Fixes from the critique, audit, and Vercel review

Only the items Aaron picked. Words unchanged except the two new lines below.

- AthenaScribe card: new small line "Case study coming soon", shown on any card that is finished but has no page yet. It already did not lift (only cards with a page do); confirmed.
- LinkedIn is hidden in the header and footer until `site.linkedin` is set.
- Copy email: if copying fails, a note appears under the email, "Copying didn’t work here. Use the email link instead.", and screen readers hear it.
- Header: the row wraps instead of stacking at very large text, and the header stops sticking under 24rem wide or when it is taller than a fifth of the screen. `text-size-adjust` is now 100% (was none), so phone text size settings work.
- Dark mode only: the coaching and closing panels use #201e1b (new `--color-always-dark-surface`), one step lighter than the #181715 page. Light mode is unchanged.
- BRIDGEGOOD heading: the hidden "opens in a new tab" note moved out of the heading (linked with `aria-describedby`), so the heading reads "BRIDGEGOOD UX Design Apprenticeship".
- Card descriptions use the paragraph line spacing (`--leading-body`, 1.65; was 1.3). Side effect, fixed: the taller featured text stretched the AthenaScribe image wider than its column, over the text, on laptops. The image now keeps its 4:3 size and centers beside the text.
- The portrait loads first (`fetchpriority="high"`, new `priority` option on `Photo`) and no longer moves on hover.
- Browser bar color: `theme-color` for light (#faf9f5) and dark (#181715), read from `tokens.css` at build time, and switched by the theme toggle.
- Fonts: the two main font files (Inter and Atkinson, Latin) are preloaded. No grey tap flash on phones. Brand names (BRIDGEGOOD, AthenaScribe, KRON4, Google.org, the Warriors, Google, Meta, YouTube, Oakland Unified, Block HQ, project titles, and Aaron's name in the footer) are marked `translate="no"`.
- Stacked layout (under 64rem): the KRON4 clip now comes before the BRIDGEGOOD text.
- Footer: "Built with Claude Code" removed.

Still open, not changed: at very large text or zoom on phones (about 150% and up) the top section is wider than the screen. The cause is its single column sizing to the two buttons side by side; `minmax(0, 1fr)` on `.hero` would fix it.

## 2026-10-07 · Two design skills added to the repo

- Added Impeccable 4.5.0 (`.claude/skills/impeccable`, plus four helper agents in `.claude/agents/`) and Vercel's web-design-guidelines 1.0.0 (`.claude/skills/web-design-guidelines`), copied from their GitHub repos so they stay with the project. Sources, versions, and commits are in `.claude/skills/SOURCES.md`.
- Impeccable's automatic hooks are not installed. They would run its checker after every edit and at the end of every turn.
- Neither skill has been run yet.

## 2026-10-07 · BRIDGEGOOD section restored under the hero, KRON4 clip in color

- The BRIDGEGOOD section is back exactly as in preview version 16 (commit bd28141): the linked "BRIDGEGOOD UX Design Apprenticeship" heading, both lines, the "Purpose to Pixels: BRIDGEGOOD on KRON4" title, its paragraph, and the Watch on YouTube button. Same layout: text left and video right from 64rem, text first on phones.
- It now sits right under the hero, before Selected work. Order: hero, BRIDGEGOOD and KRON4, Selected work, coaching, closing.
- The YouTube player is replaced by Aaron's color loop (`aaron-kron4-loop-color.mp4`, WebM backup, 490 and 344 KB) over its color still (`kron4-still-color.jpg`, 520 by 390). Muted, looping, plays only while on screen, with the site's 24px corners. No grow or scroll effect. The black and white files are removed.
- Reduced motion: the still only. Checked: no video request.
- A small "Pause clip" text button sits under the clip, because the loop runs past five seconds (WCAG 2.2.2).
- Removed with the grow effect: the clip tokens (`--clip-native`, `--clip-max`, `--clip-scale-start`), the caption line, and `overflow-anchor: none` on `html`.

## 2026-10-07 · KRON4 clip moves under the hero

- The KRON4 section now sits right under the hero, before Selected work. Order: hero, KRON4 clip, Selected work, coaching, closing.
- Modeled on Zeel Shah's portfolio: no heading and no paragraph, and no panel. Just the clip, centered on the page background, then one small line ("On air with KRON4 · BRIDGEGOOD UX apprenticeship") and the "Watch the full segment" link. "Pause clip" stays beside the link (WCAG 2.2.2). No workshop photo.
- The clip starts at half size at the top of the page, even though it now sits in the first screen. It reaches full size once its top is a fifth of the way down the screen.
- The section's space follows the clip's size: H × (1 + scale) / 2. The clip still scales from its center, so the space above it is the half of the growth still to come, and nothing is left empty below it. The caption and Selected work follow straight after. Selected work now starts 1369px down at 1440 (was 1563) and 1108px at 390.
- Scroll anchoring is off for the page (`overflow-anchor: none` on `html`). The page height now changes as the clip grows, and anchoring would nudge the scroll position against it. Nothing above the clip changes size, so scrolling stays normal. Checked with mouse wheel steps down and back up: no jumps, the clip's center stays at the page center, and it is back at half size at the top.

## 2026-10-07 · Top section restored, KRON4 clip centered

### Top section
- Restored exactly as in preview version 16 (commit bd28141): the "Hi, I'm Aaron" heading, the same intro, both buttons, the same layout, and the same portrait size (`--size-portrait` back to `clamp(16rem, 4rem + 20vw, 26rem)`, 352px at 1440). One word changed in the intro: "MMA" is now "Muay Thai".
- Removed the name heading, the tagline, the uppercase info row, and the unused `--step-6` token.

### KRON4
- The heading and text sit above the clip and are centered over it.
- The clip is centered in the section and scales from its own center, so it grows and shrinks evenly on all sides and never moves sideways. Checked: the clip's center stays at the page center (720px at 1440, 195px at 390) at every scroll position. The links below it follow its bottom edge.

## 2026-10-07 · Calm home page: new hero words, plain labels, KRON4 clip, copy email

Replaces the finishing touches brief. Words come from Aaron's brief. Colors, fonts, themes, and section order are unchanged.

### Hero
- Portrait about 20 percent smaller: `--size-portrait` is now `clamp(12.8rem, 3.2rem + 16vw, 20.8rem)` (282px at 1440, was 352). The top of the AthenaScribe card now shows before scrolling: 138px at 1440 by 900, 90px at 1536 by 864, 60px at 1280 by 800.
- Name "Aaron Luellen" at the new `--step-6` (up to 6rem), the largest text on the site. Then the tagline, a small uppercase row (product designer, Oakland, available for work), the intro, and the two buttons.

### Selected work
- No pills. The card label and "In progress" are plain small uppercase text (`--tracking-label`); the label is muted, "In progress" is the label blue, and it sits right after the label.
- New AthenaScribe sentence and bottom line. Klima and Craft Education bottom lines now say the full case study is coming soon.
- Hover is back to linked cards only: lift, image zoom, and border. Cards that open nothing stay still.

### KRON4
- One short section: heading, one paragraph, one small line. The BRIDGEGOOD heading and the AthenaScribe sentence are removed.
- The YouTube player is replaced by Aaron's 5.5 second loop (`public/video/`, MP4 first, WebM as backup, 230 and 188 KB) over its still (`kron4-still.jpg`, 520 by 390). Muted, looping, plays only while on screen, and nothing downloads until then.
- The clip starts at half size and grows as it rises up the screen, full size once its top is a fifth of the way down; it shrinks back on the way up. Only transforms change, so nothing below it moves and scrolling stays normal. Largest size: two thirds of the page width (955px at 1440), or the full column on phones (`--clip-max`, `--clip-native`, `--clip-scale-start`). The file is 520px wide, so it is softer at full size on a laptop.
- Reduced motion: the still only, at its own 520px width. Checked: no video request.
- A "Pause clip" control sits beside "Watch the full segment", because the loop runs longer than five seconds (WCAG 2.2.2).
- The BRIDGEGOOD workshop photo is dropped. Next to a moving clip the section felt crowded, and the brief keeps it about KRON4 only. The file stays in `src/assets/photos/`.

### Coaching, closing, footer
- Coaching shows the two gym photos only.
- Closing: new heading and line. The email shows once, large, with a "Copy email" text button that reads "Copied" for two seconds and announces it to screen readers. New `ContactEmail` component.
- Footer: LinkedIn marked "coming soon" in visible text, then "© 2026 Aaron Luellen · Built with Claude Code" in small uppercase. The home footer leaves out the email (the closing shows it); other pages keep it.

## 2026-10-07 · Home finishing touches: order, portrait, combined video section

All words unchanged.

### Order and layout
- New section order: hero, Selected work, BRIDGEGOOD and KRON4, coaching, closing, footer. "View my work" goes to `#work`.
- BRIDGEGOOD and the KRON4 video are one panel: apprenticeship text and the KRON4 title, description, and button on the left, the video on the right from 64rem. On phones the text comes first, then the video.
- Footer: email and LinkedIn only. "Back to top" is removed. The Resume link stays hidden until `public/resume.pdf` exists. There was no "Site Title" placeholder in this build; that was the Squarespace footer.

### Photos
- New hero photo from Aaron, cropped to a 4:5 chest up portrait, 1066 by 1333, from the 2000 by 1333 original. Shown at `--size-portrait` (new, up to 26rem; 352px at 1440) with the site's 24px curve. Files are 320 to 960 wide. Checked: 960 for a 704px need at 1440 on a 2x screen, and 720 for 501 at 390. `--size-headshot` is removed.
- Coaching photos already shared the curve, the black and white tone, and even 12px gaps (two on top, one wide below, stacked on phones). No change needed.

### Interaction
- Every project card lifts 3px and its image zooms to 1.03 on hover, over 200ms (new tokens `--card-image-zoom`, `--duration-hover`). Reduced motion sets lift, zoom, and duration to zero. Checked with computed transforms. Only linked cards also darken their border.

### Accessibility
- Alt text on every photo and mockup. The KRON4 cover now has one ("KRON4 thumbnail: four people on the studio couch beside the Purpose to Pixels title."), read before the button's "Play video" label. Awaiting Aaron's approval. The unused Mentorship App photo slot is removed.
- Header links, footer links, and the footer email are at least 44px tall. Checked: no link or button under 44px at 390, except inline text links in headings and paragraphs.
- Keyboard focus: a 3px outline in `--color-focus`, read where it is used. It is blue `#1D4ED8` on light and `#60A5FA` inside dark panels. Before, the outline color was fixed at the page level, so it stayed dark blue on dark panels. `--focus-ring` is replaced by `--focus-width`.

### Speed
- Photo quality default 80 to 60. AVIF at 60 matches JPEG 80 by eye. Photos downloaded across the whole page: 999 KB to 583 KB at 1440 on 2x, and 656 KB to 354 KB at 390 on 2x. Each phone photo is 23 to 74 KB.
- Only the hero portrait and logo load at once (the logo is now eager). Every other photo is lazy and loads as it nears the screen.
- KRON4: the thumbnail is local, and no request goes to YouTube until play is clicked. Checked: no iframe and no outside requests before the click.

### Checked
- 1440 and 390, light and dark: correct order, no sideways scroll, every section visible after scrolling. `astro check` 0 errors. Copy check clean.

## 2026-10-07 · Logo matches the accent blue; light accent fix

- Aaron left the logo color to my judgment. One brand blue reads more polished than two near matches, so the logo is now the accent: `#1D4ED8` replaces `#054FB9` in `src/assets/brand/logo.svg` and `public/favicon.svg`. White on it is 6.7:1.
- Share image regenerated with the new page, ink, secondary, and blue colors (`design/share/og-image.html`, `public/og-image.png`).
- Fix: the previous entry's light accent tokens had not applied. The block's comment had changed, so the replacement missed. Light mode links and focus rings were still `#054FB9`, the label background was the old `#E3ECFA`, and `--color-label-ink` was undefined in light mode, so labels fell back to the main text color. Now `--color-accent: #1D4ED8`, `--color-accent-hover: #1E40AF`, `--color-accent-subtle: #DBEAFE`, `--color-label-ink: #1D4ED8`. Checked computed colors: light links, labels, "In progress", and buttons are rgb(29, 78, 216). Dark links and labels are rgb(96, 165, 250), and dark buttons stay rgb(29, 78, 216).

## 2026-10-07 · New colors, one curve, rounded panels

All words unchanged.

### Colors
- Light: page `#FAF9F5`, cards `#FFFFFF` with border `#E8E6DF`, main text `#141413`, secondary `#5D5B54`, accent `#1D4ED8`, small labels `#1D4ED8` on `#DBEAFE`.
- Dark mode, plus the coaching and closing panels in both modes: background `#181715`, cards `#252320`, main text `#F5F4EF`, secondary `#B5B3AD`, accent `#60A5FA`.
- Derived to fill gaps, all checked for contrast: button and link hover `#1E40AF`, dark hover `#93C5FD`, dark lines `#34312C` and `#4A4640`, light outline `#D3D0C7`, dark label background `#1E2A44` (`#60A5FA` text, 5.6:1).
- Primary buttons are `#1D4ED8` with white text in both modes. On dark, `#60A5FA` with white text would be 2.5:1, so it stays for links and labels only.
- No pure black anywhere: the old `#000000` dark panel color and the black overlay token are gone. The `<html>` element now has the ink color too, so even the browser default is not black. Checked: no element computes to rgb(0, 0, 0).
- Note: the AL logo file is `#054FB9`, a deeper blue than the new `#1D4ED8`. The logo file is unchanged.

### The curve
- New `--radius-section` (24px). Every section panel, card, card image, photo, and the video use it. `--radius-media` points to it. Buttons stay pills. Checked: all large elements compute to 24px.

### Flow
- The home page is one stack (`.stack`) with the same gap between every section: new `--section-gap`, 32px at 390 and 59px at 1440. Measured equal across all four gaps.
- The apprenticeship section is a white rounded panel with the card border. Coaching and closing are dark rounded panels. In dark mode the dark panels get a thin edge (`--color-dark-panel-edge`) so they still read as panels on the dark page.
- The closing panel clips the group photo to its curve. Credit, heading, and button keep the panel padding (new `--panel-padding`).
- Removed: the full width gray band, the black coaching and closing bands, the footer's band background (the footer now has a thin top line), and `--section-space`.
- Card labels and "In progress" are now small blue pills.

### Checked
- 1440 and 390, light and dark: no sideways scroll, equal gaps, 24px corners, pill buttons. `astro check` 0 errors. Copy check clean.

## 2026-10-07 · Home page finishing pass (Tyler's review)

The hero headline and paragraph are untouched. Aaron is rewriting them.

### About moves to the home page
- The dark coaching section has the anchor `id="about"`. The hero "About me" button goes to `#about`, and the header "About" goes to `/#about`.
- `src/pages/about.astro` is removed. `astro.config.mjs` redirects `/about` to `/#about`. Checked: the old link lands on the section.
- Header current state: on a case study page, Work is current. On the home page, a small script marks Work or About while that section fills the middle of the screen, using `aria-current="location"`. Nothing is marked at the top of the page.

### Sticky header
- `position: sticky` with its solid page background, thin bottom line, and `z-index`.
- `html { scroll-padding-top }` makes jump links land just below the header. Checked: `#about` starts 8 to 14px below the header at 1440 and 390. The old `scroll-margin-top` on sections is removed so the two do not add up.

### Font
- Body text, buttons, and the menu: Atkinson Hyperlegible Next, variable, self hosted (`@fontsource-variable/atkinson-hyperlegible-next`). Headings stay Inter. The footer email is styled as a heading.
- Sizes are unchanged: 18px body with 29.7px line height at 1440, and 16.1px with 26.6px at 390. It reads well in light and dark at both widths.

### Buttons
- Fully round again: `--radius-control` now points to `--radius-pill`.
- New `--tracking-button` (-0.01em) on all button text.

### Work cards
- New frontmatter `inProgress`. Klima and Craft Education set it, and show a small outlined "In progress" tag beside their label, with no link and no button. "In progress" is removed from their detail lines.
- `caseStudyHref` links only when a case study is published and not in progress. AthenaScribe links as soon as it is published.
- "View case study" is now a small outlined button (new `--control-height-small`, 36px), part of the whole card link. It fills with ink on card hover.

### Motion
- Sections with `data-reveal` (apprenticeship, Selected work, coaching, closing) fade in and slide up 14px (`--reveal-distance`) over 600ms (`--duration-reveal`). The hero does not animate.
- Hiding starts only after the script runs, and anything on screen at load is shown at once. The transition runs only on the way in.
- The headshot lifts 4px on hover (`--lift-headshot`).
- Reduced motion sets the distance, lift, and durations to zero. Checked: 0 hidden sections with JavaScript off, 0 with reduced motion, and 3 below the fold that reveal on scroll with normal motion.

### Links and footer
- LinkedIn: no URL yet. Aaron's message still had the "[YOUR LINKEDIN URL]" placeholder, so header and footer keep the muted "LinkedIn" text. Fill in `site.linkedin` in `src/site.config.ts`.
- Every email link opens with the subject "Interested in working together" (`mailto` in `site.config.ts`).
- Footer: Back to top (to `#top` on the body), and a Resume link that appears only when `public/resume.pdf` exists.
- "BRIDGEGOOD" in the apprenticeship heading links to https://www.bridgegood.org in a new tab, with a screen reader note.
- BRIDGEGOOD is spelled in capitals everywhere: the KRON4 title, its description, the video button label, and the workshop and group alt text.

### Link preview
- `public/og-image.png`, 1200 by 630, 20 KB: AL logo, "Aaron Luellen", "Product designer" on `#F8F6F1`, with a logo blue bar at the bottom. Rendered from `design/share/og-image.html` by `scripts/make-og-image.cjs`.
- Open Graph and Twitter card tags are in `BaseLayout.astro`. The default description is now "Product designer".
- Needed before sharing: the live domain in `site` in `astro.config.mjs`. LinkedIn needs absolute image URLs. Until the domain is set, the tags use relative paths.

### Other
- Added `@types/node` (dev) so the Footer's file check passes `astro check`.

### Checked
- 1440 and 390, light and dark: no sideways scroll. Copy check: no matches. `astro check`: 0 errors.

## 2026-10-07 · Blue primary buttons, sentence case labels, smaller apprenticeship heading

- Primary buttons ("View my work", "Email me") use the AL logo blue `--color-brand` with white text in light, dark, and always dark sections. Hover is the new `--color-brand-hover` (`#043F93`). White on blue is 7.5:1, and 9.8:1 on hover. DESIGN.md now allows the accent on primary buttons.
- Button labels in sentence case: "View my work", "About me". "Watch on YouTube" keeps the capital because YouTube is a name.
- The apprenticeship heading is about half the size of "Hi, I'm Aaron": `--step-3` from 48rem (40px against 76px at 1440) and `--step-2` on phones (25px against 51px at 390). The name is the largest text on the page in every check.
- Confirmed: the light mode page background is `#F8F6F1`, warm off white (measured rgb 248, 246, 241).

## 2026-10-07 · Home page redesign: warm, one sans, featured work

The previous home page is saved on the `saved/home-v1` branch (commit `e0bce20`). A local tag `home-v1` points to the same commit; pushing tags failed through the network proxy, so the branch is the saved copy on GitHub.

### Look and feel
- Light mode: warm off white page `#F8F6F1`, cards `#FFFDF9`, band `#EFEBE3`, panel `#F1EDE6`, ink `#141210`, muted `#57534C`, rules `#E0DBD1`. Dark mode is unchanged. All pairs pass AA. The logo blue is 6.9:1 on the page.
- Headlines now use Inter, semibold, with `--tracking-tight` at -0.025em. Source Serif 4 is removed from the layout and from `package.json`. `--font-display` now points to `--font-text`.
- The only accent is the logo blue. No orange or brown was left in the site's colors. The one warm brown asset, the styleguide's sample figure SVG, is now neutral gray.
- Corners: cards and images 16px (`--radius-media`), buttons 12px (`--radius-control`, new). The headshot, theme toggle, and video play button stay round.
- Section spacing: new `--section-space` (96px to 160px, fluid) replaces `--space-9` around every home section.
- Headings in sentence case: "Selected work", "From coaching systems to product design." Proper names keep their capitals: "BRIDGEGOOD UX Design Apprenticeship" (Aaron's exact text) and "Purpose to Pixels: BridgeGood on KRON4" (the segment's name). Button labels keep Aaron's words.
- The hero already had the photo left and words right from 48rem. Phones still stack the photo above the words.
- The coaching section stays always dark.

### Content
- Apprenticeship section: Aaron's new heading and two lines replace "Most recently," and its paragraph. The KRON4 video block is unchanged.
- Closing button: "Email me", which opens `mailto:` with the footer address.

### Selected work
- The sideways scrolling row is removed: `WorkCarousel.astro`, `src/lib/carousel-sizes.ts`, and the carousel tokens are gone.
- New layout: AthenaScribe as one large featured card, with Klima and Craft Education in two columns below.
- Cards: image, small blue label, title, one description, and one detail line. No tags. Text comes from new frontmatter `card: { label, description, detail }` and `featured`. The `tagline` and `focus` fields are removed.
- The Mentorship App stub is deleted.
- Cards still link only to published case studies. All three are drafts, so none link yet.

### Facts to confirm (Aaron's new card text differs from earlier notes)
- AthenaScribe detail says "12 stakeholder interviews". The Phase 5 notes say 7 stakeholder interviews.
- AthenaScribe detail says "Tested with counselors and vice principals". The case study draft says "Testing has not happened yet."
- The apprenticeship mentors are now Google, Meta, and YouTube (earlier Meta, PayPal, and Adobe), and the program is launched by Google.org (earlier Google).
- The text is used exactly as Aaron wrote it.
- Resolved Oct 7: Aaron confirmed 12 interviews and that testing happened. The placeholder `athenascribe.mdx` was updated to match: its Outcome is back to TODO. Aaron's real draft is in Claude Design and comes in at Phase 5. The PayPal visit (KPIs and problem statement) is noted there for the case study page. The new mentor list stands for the home page.

### Checked
- 1440 and 390, light and dark: no sideways scroll, no console errors. Inter on every heading. The closing button opens the footer email.

## 2026-10-07 · KRON4 video cover stored in the site

- `src/assets/photos/kron4-cover.jpg`: YouTube's full size thumbnail (1280 by 720), saved by Aaron.
- `VideoEmbed` takes a `cover` photo slot. With one, it shows the local optimized cover (AVIF and WebP, up to 1280 wide) instead of loading the thumbnail from YouTube. The page now makes no YouTube request until someone clicks play.
- The cover has empty alt text because the play button already reads "Play video: Purpose to Pixels: BridgeGood on KRON4".
- This also fixes the blank cover in the Claude preview, which blocks images from other sites.
- Checked: at 1440 the 597px box gets a sharp AVIF, at 375 dark the 343px box gets one too, and a click still loads youtube-nocookie at 0:31.

## 2026-10-07 · Closing banner: photo first, text below

Aaron wanted to see himself and the Google sign fully, matching a crop he sent. Any text over the photo covers the sign or someone's face, so the text moved below the photo.

- `group.jpg` is now the full quality original cropped to Aaron's framing: 180px off the top, 2000 by 1150. It was matched against his screenshot, so it keeps the original quality rather than his recompressed copy.
- The photo runs full width with no dark overlay. "Photos: BRIDGEGOOD" sits under it on the right. Headline, text, and button follow, centered in the black band.
- Removed `--banner-min-height`, `--banner-text-top`, the overlay, and the hand set phone `sizes`. The photo never crops now, so `sizes="100vw"` is accurate.
- Photo size: 1440 by 828 at 1440, 768 by 442 at 768, 375 by 216 at 375. No sideways scroll.

## 2026-10-07 · Closing banner shows the whole group

Aaron felt the banner looked too zoomed in, like the Squarespace version. His reference showed the full photo with the headline over the sign.

- The banner was a short strip, about 470px tall at 1440, so a third of the photo was cut. It now has `min-height: var(--banner-min-height)`, which is the height of a 3:2 box at full width (the photo's own shape), capped at the screen height.
- The text starts at `--banner-text-top` (12% of the banner width, at least `--space-8`), so the headline lands on the Google sign.
- New tokens: `--banner-min-height`, `--banner-text-top`.
- A first try used `aspect-ratio` with a max height. That shrank the banner's width on wide screens and clipped the text on phones, so it was replaced with the min height.

| Screen | Banner | Photo visible |
|---|---|---|
| 375 by 812 | 375 by 542 | full height, middle 46% of the width |
| 768 by 1024 | 768 by 512 | all of it |
| 1280 by 800 | 1280 by 800 | full width, 94% of the height |
| 1440 by 900 | 1440 by 900 | full width, 94% of the height |
| 1920 by 1080 | 1920 by 1080 | full width, 84% of the height |

- Image sharpness is unchanged. On a 1440 screen at 2x it still wants 2880px and gets the 2000px original.

## 2026-10-07 · Full size photos, SVG logo, and sharper crops

### Replaced files
- `group.jpg`: full size original from Aaron, 2000px wide (was a 1147px screen capture). Chat uploads cap at 2000px, so this is the largest available here.
- `coaching-3.jpg`: Aaron's cropped workshop original, 1848px wide, 16:9, watermark removed by Aaron. Converted to black and white, with no further crop.
- `src/assets/brand/logo.svg`: Aaron's `al-logo.svg`. Replaces `logo.png` in the header and `public/favicon.svg`. Shown to Aaron beside the old PNG before the swap. The SVG draws its own corners, so the CSS radius on the logo is gone.
- Neither photo was HEIC. Both were JPG.

### Pre-cropped sources
- `headshot.jpg`: 1333 by 1333 square around the face, from the 2000 by 1333 original. Variants at 240, 480, 720.
- `coaching-1.jpg` and `coaching-2.jpg`: 1143 by 1429 (4:5) around the action, from the 2000 by 1429 originals. Variants at 400, 600, 800.
- `coaching-3.jpg`: variants at 640, 960, 1280. `group.jpg`: 800, 1280, 1920, 2000.
- Work cards: 400, 600, 800, 1000, 1200, 1448.

### Sizing rules
- `Photo.astro` takes `cover` (box width ÷ height). When `object-fit: cover` zooms into a wider file, it scales the srcset widths and the `sizes` lengths by the zoom and warns at build time. All current sources are pre-cropped, so every zoom is 1.
- Work card `sizes` come from `src/lib/carousel-sizes.ts`, which reads `--carousel-cards-*` and `--measure-wide` from `tokens.css` and repeats the carousel math at each breakpoint.
- Banner `sizes`: `(max-width: 48rem) 56rem, 100vw`. On phones the banner is portrait, so cover zooms the photo about 2.2x at 375px.
- Quality 80 for AVIF, WebP, and the JPEG fallback.

### Banner framing
- Photo anchored at the top (`object-position: 40% 0%`). The headline sits over the sign and the brick wall, clear of faces at 1440 and 375.
- Content padding is now `--space-8` on top and `--space-10 + --space-8` on the bottom, so the group shows below the button. The banner height is unchanged.

### Credits
- "Photos: BRIDGEGOOD" in small muted type, under the coaching photos (as the figure caption) and in the banner's lower right.

### Alt text
- Approved: `coaching-2` now names Aaron throwing the knee, and `group` names the BridgeGood cohort. All seven photos are now approved.

### Checked: file width the browser picks against the width needed (box × 2 × zoom)
| Photo | 1440 @2x needs / gets | 375 @2x needs / gets |
|---|---|---|
| headshot | 448 / 480 | 288 / 480 |
| work cards | 944 / 1000 | 538 / 600 |
| coaching 1, 2 | 529 / 600 | 686 / 800 |
| coaching 3 | 1082 / 1280 | 686 / 960 |
| group | 2880 / 2000 (short, file limit) | 1628 / 1920 |

Same results in light and dark. No sideways scroll.

## 2026-10-06 · Photos and logo in place

Aaron dropped the photos into the chat, which got around the Drive download block.

### Files
- `src/assets/photos/`: `headshot.jpg`, `work-athenascribe.webp`, `work-klima.webp`, `coaching-1.jpg`, `coaching-2.jpg`, `coaching-3.webp`, `group.webp`.
- `src/assets/brand/logo.png`: the AL mark, cropped from Aaron's screenshot (138px, padded to a square with the logo blue).
- `src/assets/case-studies/athenascribe/analyzing-document.webp`: the "Analyzing document" phone mockup, held for the AthenaScribe case study.

### Edits to photos
- Workshop (`coaching-3`): converted to black and white to match the two gym photos, and cropped 28px off the top to remove a mouse pointer from the screen capture.
- Group (`group`): cropped 28px off the top to remove a mouse pointer.
- The workshop and group photos are screen captures about 1150px wide. They look fine at their sizes, but the full width banner may look soft on very large screens. Swap in the originals later if that shows.

### Color
- The logo file reads exactly `#054FB9`. The token was `#054FB8`, sampled from compressed screenshots. `--color-accent` and `--color-brand` now use `#054FB9`. The contrast change is negligible, still 7.1:1.

### Framing
- Headshot: circle crop focused at 30% from the top, to keep the face centered.
- Coaching grid: two 4:5 portrait crops over one 16:9 wide photo. Fixed the wide photo spanning only one column. Astro wraps each image in `<picture>`, and that wrapper is the actual grid item.
- Banner: group photo focused at 40% from the top under the dark overlay.

### Weight
- Picture fallbacks are now JPEG instead of PNG. Build output dropped from 13 MB to 5.5 MB.
- What a visitor downloads: 165 KB of images on a 2x desktop screen and 85 KB on a 2x phone, all AVIF.

### Alt text
- Drafts updated for `coaching-2` (a knee into pads while the class watches) and `group` (BridgeGood shirts, steps outside Google San Francisco). Both are still waiting on Aaron's approval.

### Video
- If the YouTube thumbnail cannot load, it hides, so the dark panel and play button still read cleanly.

## 2026-10-06 · Selected Work as a sideways scrolling row

### Order and data
- Cards come from the case study collection, sorted by `order`: AthenaScribe 1, Klima 2, Craft Education 3, Mentorship App 4.
- Added draft stubs for `klima.mdx`, `craft-education.mdx`, and `mentorship-app.mdx`. They hold only Aaron's title, tagline, and focus. Everything else is TODO.
- New optional frontmatter fields: `tagline` and `focus`. Updated the schema, the template, and CONTENT.md section 1.
- `src/data/work.ts` removed. Card content now lives in each case study's frontmatter.
- A card links only when its case study is published. Review builds no longer link drafts from cards. The preview reaches the AthenaScribe draft through a footer link that exists only in the preview.

### Row (`WorkCarousel`)
- Replaces the two column grid. Details are in DESIGN.md under "Selected Work row".
- New tokens: `--gap-card-media` (20px), `--card-lift` (2px), `--carousel-cards-desktop` (2.33), `--carousel-cards-tablet` (1.4), `--carousel-card-phone` (85vw).
- Card width is measured from the start line to the right edge of the screen, so the peek is a true third on wide screens. A first version measured inside the right margin, which showed almost half a card.
- Space after the last card lets card 4 reach the start line. Without it, the counter skipped from 2 to 4 on desktop, and Previous got stuck at the end.
- On narrow phones the heading drops to `--step-3` so it stays on one line beside the arrows.

### Cards (`WorkCard`)
- Smaller and tighter, matching Aaron's spacing spec. Title is now `--step-2`. Tags are pills. The tagline is clamped to two lines.
- Dashed placeholder outlines are removed. With no image, the soft panel shows the project name.

### Other
- KRON4 video URL added. The player starts at 0:31, matching the `t=31s` in the link.
- Alt text approved for `coaching-1` (Aaron confirmed it is him) and `coaching-3` (a BridgeGood workshop).

### Checked
- At 375, 768, 1280 by 800, and 1440, in light and dark: the row starts on the heading's left edge, a peek shows (24px on phones, 40% of a card at 768, 33% on desktop), and the page never scrolls sideways.
- Arrows move one card per click, the counter reads 1 to 4, and both arrows disable at the ends.
- Tab reaches all four cards. Reduced motion jumps. A sideways mouse wheel scrolls and snaps.
- The tallest card is 638px at 1440 wide and 612px at 1280 by 800, so it fits on an 800px tall laptop screen.

### Photos still blocked
- The folder opens now, but the mockups (1.2 to 1.6 MB) cannot be downloaded into this session. Google's download host is blocked by the network policy, and the Drive tool returns files as text, too large for these images. The files needed are listed in the reply to Aaron.

## 2026-10-06 · Phase 4: Copy checker

- `scripts/check-copy.mjs` scans `.mdx` files in `src/content/case-studies/`, including drafts and the template. Other paths can be passed as arguments.
- Flags em dashes, en dashes, a spaced hyphen used as a dash, hyphenated words, "my team", "not X. It's Y" (also "isn't" and "wasn't"), and "less X, more Y".
- Skips frontmatter, fenced and inline code, URLs and link targets, MDX and HTML comments, import and export lines, and component tags with their props. Text between component tags, like a quote, is still checked.
- Prints file, line, column, rule, the match, and the full line. Report only, never rewrites.
- `npm run check:copy` runs it. `npm run build` runs it first. The script always exits 0, so a match never fails the build.
- Verified with a fixture: all 9 planted breaks were found, and nothing in the skipped regions was flagged.
- Only case study `.mdx` is scanned, per the spec. Copy in `.astro` pages, like the home page, is not checked yet.

## 2026-10-06 · New direction: sharper Squarespace look

Aaron dropped the warm editorial test. The site now follows a sharper version of the Squarespace home page. Page structure, case study components, and content rules are unchanged.

### Design settings
- `tokens.css` rewritten with Aaron's palette. Light: page `#FAFAFA`, gray band `#EDEDED`, ink `#0A0A0A`, muted `#5A5A5A`, rules `#DADADA`. Dark: page `#0B0B0C`, raised `#17171A`, ink `#F2F2F2`, muted `#A0A0A0`, rules `#2A2A2E`.
- Accent `#054FB8` (later corrected to `#054FB9` from the logo file), sampled from the AL logo in three Squarespace screenshots. All three agreed within one step, but they are compressed screenshots, so it needs a check against the logo file. Dark mode accent `#6E9CF2`. Every pair passes 4.5:1. The full list is in `DESIGN.md`.
- New tokens: `--color-band`, `--color-panel`, `--color-brand`, `--color-brand-ink`, the `--color-always-dark-*` set, `--color-overlay`, `--radius-media` (12px), `--radius-pill`, `--control-height` (44px), `--control-padding`, `--size-headshot`, `--size-logo`, `--header-height`, `--icon-size`.
- `.surface-always-dark` remaps the core color tokens, so the coaching band and closing banner stay black in both themes, and buttons and links inside flip on their own.
- `DESIGN.md` rewritten as final.

### Theme
- Follows the device setting. A header toggle switches light and dark and saves the choice in the browser.
- An inline script in `<head>` applies the saved choice before first paint. Verified: after toggling and reloading, the page is already dark when the HTML finishes parsing.

### New components
- `Button`: pill, 44px tall. Primary is solid ink, secondary is outlined. Without `href` it renders disabled ("No link yet").
- `ThemeToggle`, `Logo`, `Photo`, `WorkCard`, `VideoEmbed`.
- `CaseCard` removed. `WorkCard` replaces it.
- `Logo` uses `src/assets/brand/logo.svg` or `logo.png` when present. Until then it shows "AL" on the brand blue.
- `VideoEmbed` shows a YouTube thumbnail and loads the player only on click, using youtube-nocookie. Without a URL it shows "Video link coming soon".

### Photos
- The Drive folder could not be reached from this session. The link points to another Google account. Photo slots are ready instead.
- Drop `<slot>.jpg|png|webp|avif` into `src/assets/photos/` and Astro builds AVIF, WebP, and JPEG at several widths. Verified with a test file.
- Missing photos show a dashed placeholder labeled with the slot name.
- Draft alt text lives in `src/data/photos.ts`, marked `approved: false`.

### Header and footer
- Header: AL logo, then Work, About, LinkedIn, and the theme toggle. LinkedIn shows as muted text until a URL is set in `src/site.config.ts`.
- Footer: the email at display size, plus LinkedIn, on the gray band. No social icons.

### Home page
- Six sections in Aaron's order and exact words: hero, Most recently band with the KRON4 video, Selected Work, coaching band, closing banner, footer.
- "View My Work" scrolls to Selected Work with smooth scroll, which turns off under reduced motion.
- Selected Work has four cards from `src/data/work.ts`: AthenaScribe, Klima, Craft Education, Mentorship App. A card links only to a published case study. Review builds (`SHOW_DRAFTS=true`) also link drafts and mark them "(draft)".
- Checked: light and dark, 1440px and 390px, no horizontal scroll, no console errors.

### Other pages
- Case study, About, and styleguide pick up the new tokens. No layout changes, except Figure images and case study covers now use the 12px radius.
- The styleguide shows the new site components: buttons on both surfaces, theme toggle, work cards, and the video placeholder.
- Pages other than home get bottom padding before the footer. The home banner sits flush against the footer.

## 2026-10-05 · Phase 3: Pages review

The home, case study, and About pages were built early, so this phase tested them with three sample case studies (since removed).

- Verified: cards sort by `order`, not by title. Each case study gets the right previous and next links, and the first and last get only one.
- Verified: a `cover` shows beside the card text from 48rem up, and below the facts row in the case study hero.
- Fix: the pager is now two fixed columns from 48rem up. A lone Next link stays in the right column instead of stretching full width.
- Fix: on phones the pager stacks and both links align left.
- Fix: the hero facts row uses `auto-fill`, so each fact keeps the same column width when a case study has only two or three facts.

## 2026-10-04 · Phase 2: Components and styleguide

### MDX components (`src/components/mdx/`)
- `Figure`: image with a thin rule border and a muted caption. Missing `alt` fails the build.
- `Quote`: display serif quote between thin rules, with the source below in muted ink.
- `Stat`: large serif number, label, then source. A thin strong rule sits above it.
- `StatGroup`: added to lay out several stats in a row that wraps on phones. It was not in the spec, so tell Claude if it should go.
- `Callout`: a thick terracotta rule on top, a thin rule below, and a "Key point" label. The label can be changed with `label`.
- `Contribution` with `Mine` and `Team`: two columns that stack on phones. `Mine` gets a thick terracotta rule and the label "What I owned". `Team` gets a thick neutral rule and "What the team owned". Both labels can be changed with `label`.

### Sources
- `Quote` and `Stat` throw when `source` is missing or empty, so the build fails with a message naming the component. Verified: exit code 1.
- `source="untraceable"` renders "Source not traceable."
- `source="TODO"` builds and renders "Source needed" in terracotta, so drafts can carry placeholders and still stand out in review.

### Global mapping
- `src/components/mdx/index.ts` exports `mdxComponents`. The case study route passes it to `<Content components={...} />`, so case studies need no imports. Verified with a test file.

### Styleguide (`/styleguide`)
- Reads `tokens.css` as raw text and lists every token from the first `:root` block. New tokens show up with no edits to the page.
- Sections: color swatches, font families, type scale, weights and leading, base elements, space bars, layout and rule tokens, CaseCard with sample data, and every MDX component with each source state.
- Buttons switch between system, light, and dark themes.
- The page is marked `noindex` and is not linked from the site nav.
- `BaseLayout` and `PageLayout` gained a `noindex` prop for this.
- `public/styleguide/sample-figure.svg` is a placeholder image with raw hex values, since an image cannot read tokens.

## 2026-10-04 · Home page and site shell (Phase 3 pulled forward)

Aaron asked for a fuller browser preview, so the home page, case study page, and About page were built before Phase 2's MDX components and styleguide.

### Site components
- `Header`: name on the left, Work and About on the right, thin rule below. The current page gets an ink color and a terracotta underline.
- `Footer`: name, role, city, a contact placeholder, and the year, above a thin rule.
- `CaseCard`: a full width row between thin rules, with no box or shadow. It shows role and timeline as small labels, a large serif title, the summary, and a "Read the case study" link. Drafts show a terracotta "Draft" label. If a cover image exists, it sits beside the text from 48rem up.
- `PageLayout` wraps `BaseLayout` with the header, footer, and a skip link.

### Pages
- Home: label, headline placeholder, intro placeholder, then case study cards sorted by `order`.
- Case study (`/work/<slug>/`): the hero comes from frontmatter. Role, timeline, team, and tools sit in a facts row under a thin rule. The MDX body follows in the reading column, then previous and next links.
- About: placeholder text only.
- Case study URLs use `/work/` rather than `/case-studies/` because it is shorter and matches the Work nav item.

### Drafts in previews
- `SHOW_DRAFTS=true npm run build` keeps drafts in a production build. Use it only for private review previews. A plain `npm run build` still hides them.

### AthenaScribe draft
- `src/content/case-studies/athenascribe.mdx` holds only the facts Aaron gave: role, timeline, team, FigJam, and "Testing has not happened yet." Each one is marked `source TODO` in the frontmatter.
- Demo Day, ownership, and research scale numbers sit in an MDX comment until `<Stat>` and `<Contribution>` exist, so no unsourced number renders.

## 2026-10-04 · Phase 1: Scaffold

### Kit files drafted
- The kit files were missing from the repo, so Claude drafted `CLAUDE.md`, `design/DESIGN.md`, `src/styles/tokens.css`, `content/CONTENT.md`, and three commands in `.claude/commands/`. Each one is marked DRAFT. Aaron to review or replace with the originals.

### Stack
- Astro 7 with `@astrojs/mdx`, TypeScript (strict), plain CSS. No Tailwind.
- TypeScript pinned to 6 because `astro check` does not support 7 yet.

### Fonts
- Source Serif 4 (variable, with italic) for display and Inter (variable) for text, both self hosted through Fontsource. No third party font requests at runtime.

### Tokens
- Terracotta accent set to `#a84a22` so links pass WCAG AA (about 5:1) on the paper color. A lighter first pick, `#b4532a`, came in under 4.5:1.
- Dark mode uses warm charcoal paper and a lighter terracotta, `#e08a62`. It follows the system setting and can be forced with `data-theme` on `<html>`.
- `--gutter` is 16px on phones and 32px from 48rem up.

### Content collection
- `src/content.config.ts` defines `case-studies` with a zod schema matching `CONTENT.md` section 1.
- The glob pattern `**/[^_]*.mdx` skips files that start with `_`, so `_template.mdx` never renders.
- `getCaseStudies()` in `src/lib/case-studies.ts` hides `status: "draft"` in production builds, shows drafts in dev, and sorts by `order`.
- `status` defaults to `"draft"`, so nothing publishes by accident.
- Verified: a draft shows in dev and is hidden in the production build, and invalid frontmatter fails the build.

### Base styles
- `global.css` holds the reset, base element styles, and small layout helpers (`.container`, `.reading`, `.flow`, `.label`, `.visually-hidden`). All values come from tokens.
- `public/favicon.svg` uses the paper and accent hex values directly, because SVG favicons cannot read CSS variables.

