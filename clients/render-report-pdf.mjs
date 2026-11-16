// Renders a sample report page (sample-report.html) to the PDF layout used for
// clients: A4 landscape, each numbered section on its own page (7 with 8, and
// 9 with 10, share a page), tables and the summary tightened to fit.
//
// Needs Node 18+ and Playwright: npm install playwright && npx playwright install chromium
// Usage: node clients/render-report-pdf.mjs clients/<client>/sample-report.html clients/<client>/sample-report.pdf
import { createRequire } from 'node:module';
import fs from 'node:fs';

const { chromium } = createRequire(import.meta.url)('playwright');
const [, , input, output] = process.argv;
if (!input || !output) {
  console.error('usage: node render-report-pdf.mjs <sample-report.html> <out.pdf>');
  process.exit(1);
}

const print = `<style>
@page{size:A4 landscape;margin:18pt 32pt 10pt}
body{margin:0}
body .doc{max-width:none}
.doc>section:nth-of-type(n+2){break-before:page;padding-top:65px}
.doc>section:nth-of-type(8),.doc>section:nth-of-type(10){break-before:auto;padding-top:0}
.doc>section:nth-of-type(1),.doc>section:nth-of-type(8),.doc>section:nth-of-type(10){margin-top:-15px}
body .scroll{overflow:visible}
body table{min-width:0}
body th,body td{padding:6px 10px}
body table.log{font-size:10px}
body table.log th,body table.log td{padding:4px 6px}
body table.log .lnk{font-size:10px}
.doc>section:nth-of-type(1) .lede{font-size:15px}
.doc>section:nth-of-type(1) .kpi{padding:10px 14px}
.doc>section:nth-of-type(1) .kpi .n{font-size:26px}
.doc>section:nth-of-type(1) .stat{font-size:13px;padding:3px 0}
</style>`;

// The report is a page fragment (published pages are wrapped at publish time), so wrap it here.
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">${print}</head><body>${fs.readFileSync(input, 'utf8')}</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: output, printBackground: true, scale: 0.76, preferCSSPageSize: true });
await browser.close();
console.log(`wrote ${output}`);
