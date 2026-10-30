// Review: check AToure copy against the house rules in CLAUDE.md.
//
//   node tools/check-copy.js [files]
//
// With no files, checks everything changed on this branch compared with main,
// plus uncommitted and new files. Reads .md, .html, .txt, .js and .jsx. In
// HTML it checks the visible text and the alt, title, placeholder and meta
// content attributes, not the code. Exits with 1 when a rule is broken, so a
// pull request check can fail on it.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files that state the rules, quote mistakes on purpose, or are code.
const SKIP = [
  /(^|\/)CLAUDE\.md$/, /(^|\/)REVIEW\.md$/, /(^|\/)PERMISSIONS\.md$/, /(^|\/)ROADMAP\.md$/,
  /(^|\/)context\/voice\.md$/, /(^|\/)context\/lessons\.md$/, /(^|\/)tickets\//,
  /(^|\/)tools\//, /(^|\/)\.github\//, /(^|\/)\.claude\//, /node_modules\//,
];

const AI_PHRASES = [
  "I'd be happy to", "It's important to note", "It's worth noting", 'leverage', 'utilize',
  'game changer', 'game-changer', 'cutting edge', 'cutting-edge', 'revolutionary', 'groundbreaking',
  'seamless', 'robust', 'streamline', 'elevate', 'empower', 'dive deep', 'unlock the power of',
  'transform your', 'to the next level', 'look no further', 'at the end of the day', "let's be real",
  "here's the thing", 'the reality is', 'moving forward', 'rest assured', "don't miss out",
  'without further ado', 'that being said', 'in conclusion',
];

const RULES = [
  { name: 'dash', why: 'No em or en dashes. Use a full stop, comma or colon', test: (t) => /[—–]/.test(t) },
  {
    name: 'hyphen',
    why: 'No hyphenated compounds. Restructure the sentence',
    prose: true,
    // Proper names (Guinea-Bissau, Coca-Cola) are left alone: both halves capitalised.
    test: (t) => (t.match(/\b[\p{L}\d]+-[\p{L}\d]+\b/gu) || []).some((w) => !/^\p{Lu}.*-\p{Lu}/u.test(w)),
  },
  {
    name: 'agency',
    why: 'AToure is not an agency, in any language',
    // Singular only: "agencies" usually means other firms, which is fine.
    test: (t) => /\bagen(cy|ce|cia)\b/i.test(t.replace(/agency fee|(not|never)\s+(an?\s+|une?\s+)?agen\w*/gi, '')),
  },
  {
    name: 'name',
    why: 'The name is always "AToure Management & Consulting"',
    test: (t) =>
      /\bAtour[eé](?!\p{L})/u.test(t) ||
      /Atoure Consulting/i.test(t) ||
      /AToure Management\s+(and|et|y)\s+Consult/i.test(t) ||
      /Management\s*(&|&amp;|and|et)\s*Conseil/i.test(t) ||
      /Consultor[ií]a/i.test(t),
  },
  { name: 'founder', why: 'Baba Touré is Director, not founder', test: (t) => /Baba[^.]{0,60}\b(founder|fondateur)|\b(founder|fondateur)[^.]{0,30}Baba/i.test(t) },
  { name: 'yaounde', why: 'Douala was the only Cameroonian market. Yaounde is not in any market list', test: (t) => /Yaound[eé]/i.test(t) },
  {
    name: 'ai phrase',
    why: 'Sounds like AI (see context/voice.md)',
    test: (t) => AI_PHRASES.some((p) => new RegExp(`\\b${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(t)),
  },
];

function changedFiles() {
  const run = (cmd) => { try { return execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch { return ''; } };
  const base = run('git merge-base HEAD origin/main').trim() || 'HEAD';
  const out = [
    run(`git diff --name-only --diff-filter=AM ${base}`),
    run('git ls-files --others --exclude-standard'),
  ].join('\n');
  return [...new Set(out.split('\n').filter(Boolean))];
}

function decode(s) {
  return s
    .replace(/&mdash;|&#8212;|&#x2014;/gi, '—').replace(/&ndash;|&#8211;|&#x2013;/gi, '–')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&rsquo;|&#39;/g, "'").replace(/&eacute;/g, 'é');
}

// Blank out everything that is not prose, keeping line numbers intact.
function blank(s, re) {
  return s.replace(re, (m) => m.replace(/[^\n]/g, ' '));
}

function proseLines(file, text) {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.html' || ext === '.htm') {
    let t = blank(text, /<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/gi);
    t = t.replace(/<[^>]*>/g, (tag) => {
      const attrs = [...tag.matchAll(/\b(alt|title|placeholder|aria-label)\s*=\s*"([^"]*)"/gi)].map((m) => m[2]);
      // Meta content only for the words a reader sees in search results and link previews.
      if (/^<meta\b/i.test(tag) && /(name|property)\s*=\s*"(description|og:title|og:description|twitter:title|twitter:description)"/i.test(tag)) {
        const m = tag.match(/\bcontent\s*=\s*"([^"]*)"/i);
        if (m) attrs.push(m[1]);
      }
      return ' ' + attrs.join(' ') + ' ' + tag.replace(/[^\n]/g, '');
    });
    return decode(t).split('\n');
  }
  if (ext === '.md' || ext === '.txt') {
    let t = blank(text, /```[\s\S]*?```/g);
    return t.split('\n').map((l) => (/^\s*\|?\s*:?-{3,}/.test(l) ? '' : l));
  }
  if (ext === '.js' || ext === '.jsx') return text.split('\n');
  return null;
}

// Strip things inside a line that are not words a reader sees as copy.
function clean(line) {
  return line
    .replace(/`[^`]*`/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/https?:\/\/\S+|www\.\S+|\S+@\S+\.\S+/g, ' ')
    .replace(/[@#][\w.]+/g, ' ')
    .replace(/\S+\.(md|html?|js|jsx|css|csv|json|png|jpe?g|webp|svg|pdf|ttf)\b/gi, ' ');
}

const args = process.argv.slice(2);
const files = (args.length ? args : changedFiles()).filter((f) => fs.existsSync(f) && fs.statSync(f).isFile());
let count = 0;

for (const file of files) {
  const rel = file.replace(/\\/g, '/');
  if (SKIP.some((re) => re.test(rel))) continue;
  const lines = proseLines(file, fs.readFileSync(file, 'utf8'));
  if (!lines) continue;
  const isCode = /\.jsx?$/i.test(file);
  lines.forEach((raw, i) => {
    const line = clean(raw);
    for (const rule of RULES) {
      if (rule.prose && isCode) continue;
      if (rule.test(line)) {
        count++;
        console.log(`${rel}:${i + 1}  [${rule.name}] ${rule.why}\n    ${raw.trim().replace(/\s+/g, ' ').slice(0, 140)}`);
      }
    }
  });
}

if (!files.length) console.log('No files to check.');
else if (count) { console.log(`\n${count} problem${count === 1 ? '' : 's'} in ${files.length} file${files.length === 1 ? '' : 's'} checked.`); process.exit(1); }
else console.log(`Clean: ${files.length} file${files.length === 1 ? '' : 's'} checked against the house rules.`);
