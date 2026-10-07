// Renders design/share/og-image.html to public/og-image.png (1200 by 630) for link previews.
// Needs Playwright with Chromium installed. Run: node scripts/make-og-image.cjs
const path = require("node:path");
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require("/opt/node22/lib/node_modules/playwright"));
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto("file://" + path.resolve(__dirname, "../design/share/og-image.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.resolve(__dirname, "../public/og-image.png") });
  await browser.close();
  console.log("Wrote public/og-image.png");
})();
