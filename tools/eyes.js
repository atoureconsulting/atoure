// Eyes: open a page the way a client would see it, on a laptop and on a phone.
//
//   node tools/eyes.js <file or URL> [more files or URLs]
//
// Saves full page screenshots to .eyes/ and prints anything that looks wrong:
// broken images, script errors, files that failed to load, and pages that
// scroll sideways on a phone. Needs Playwright (preinstalled in Claude cloud
// sessions; elsewhere run `npm install playwright` once).

const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
const http = require('http');
const path = require('path');

const SIZES = {
  desktop: { width: 1440, height: 900 },
  phone: { width: 390, height: 844 },
};
const OUT_DIR = path.resolve('.eyes');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.pdf': 'application/pdf',
  '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

// Serve a local file from its repo root, so paths like /site.css work as they do on the live site.
const servers = {};
async function serve(file) {
  const dir = path.dirname(path.resolve(file));
  let root = dir;
  try { root = execSync('git rev-parse --show-toplevel', { cwd: dir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch {}
  if (!servers[root]) {
    const server = http.createServer((req, res) => {
      let rel = decodeURIComponent(req.url.split('?')[0]);
      if (rel.endsWith('/')) rel += 'index.html';
      const full = path.normalize(path.join(root, rel));
      if (!full.startsWith(root)) { res.writeHead(400); return res.end(); }
      fs.readFile(full, (err, data) => {
        if (err) { res.writeHead(404); return res.end(); }
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(full).toLowerCase()] || 'application/octet-stream' });
        res.end(data);
      });
    });
    await new Promise((r) => server.listen(0, '127.0.0.1', r));
    servers[root] = { server, port: server.address().port };
  }
  const rel = path.relative(root, path.resolve(file)).split(path.sep).map(encodeURIComponent).join('/');
  return `http://127.0.0.1:${servers[root].port}/${rel}`;
}

async function look(browser, target) {
  const url = /^https?:\/\//.test(target) ? target : await serve(target);
  const local = url.startsWith('http://127.0.0.1');
  const where = local ? path.basename(path.dirname(path.resolve(target))) : new URL(url).hostname;
  const name = `${where}-${path.basename(target).replace(/\.[a-z]+$/i, '')}`.replace(/[^a-z0-9]+/gi, '-');
  const problems = new Set();
  const unreachable = new Set();
  const shots = [];
  let title = '';

  for (const [label, viewport] of Object.entries(SIZES)) {
    const page = await browser.newPage({ viewport, isMobile: label === 'phone', hasTouch: label === 'phone' });
    page.on('pageerror', (e) => problems.add(`script error: ${e.message.split('\n')[0]}`));
    page.on('response', (r) => {
      if (r.status() < 400) return;
      const u = new URL(r.url());
      problems.add(local && u.hostname === '127.0.0.1' ? `missing file ${decodeURIComponent(u.pathname)}` : `${r.status()} for ${r.url()}`);
    });
    page.on('requestfailed', (r) => unreachable.add(new URL(r.url()).host));

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      problems.add(`did not finish loading on ${label} (${e.message.split('\n')[0]})`);
    }

    // Scroll through once so lazy images and reveal animations fire, then return to the top.
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 500) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 50));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);

    const seen = await page.evaluate(() => {
      const broken = [...document.images]
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.getAttribute('src'));
      const tooWide = document.documentElement.scrollWidth > window.innerWidth + 1;
      const culprits = tooWide
        ? [...document.querySelectorAll('body *')]
            .filter((el) => el.getBoundingClientRect().right > window.innerWidth + 1)
            .slice(0, 3)
            .map((el) => el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/)[0] : ''))
        : [];
      const hasViewport = !!document.querySelector('meta[name="viewport"]');
      return { title: document.title, broken, tooWide, culprits, hasViewport };
    });

    if (label === 'phone' && !seen.hasViewport) {
      problems.add('no mobile viewport tag: on a phone this page shows as a shrunken desktop page, text at about 40% size');
    }

    title = title || seen.title;
    seen.broken.forEach((src) => problems.add(`broken image ${decodeURIComponent(src || '')}`));
    if (seen.tooWide) problems.add(`page scrolls sideways on ${label}, widest elements: ${seen.culprits.join(', ')}`);

    const file = path.join(OUT_DIR, `${name}-${label}.png`);
    await page.screenshot({ path: file, fullPage: true });
    shots.push(path.relative(process.cwd(), file));
    await page.close();
  }

  return { target, title, problems: [...problems], unreachable: [...unreachable], shots };
}

(async () => {
  const targets = process.argv.slice(2);
  if (!targets.length) {
    console.error('Usage: node tools/eyes.js <file or URL> [more]');
    process.exit(2);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  let anyProblems = false;

  for (const target of targets) {
    const r = await look(browser, target);
    console.log(`\n${r.target}${r.title ? `  (${r.title})` : ''}`);
    r.shots.forEach((s) => console.log(`  screenshot: ${s}`));
    if (r.unreachable.length) console.log(`  could not reach (offline or blocked here, check on a real connection): ${r.unreachable.join(', ')}`);
    if (r.problems.length) {
      anyProblems = true;
      r.problems.forEach((p) => console.log(`  problem: ${p}`));
    } else {
      console.log('  no technical problems found. Now look at the screenshots as a client would.');
    }
  }

  await browser.close();
  Object.values(servers).forEach((s) => s.server.close());
  process.exit(anyProblems ? 1 : 0);
})();
