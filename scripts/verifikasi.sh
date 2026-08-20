#!/usr/bin/env bash
set -euo pipefail

rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build

if [[ -f pnpm-workspace.yaml ]]; then
  node <<'NODE'
const fs = require('fs');
const text = fs.readFileSync('pnpm-workspace.yaml', 'utf8');
const inline = text.match(/^packages:\s*\[([^\]]*)\]/m);
const block = text.match(/^packages:\s*\n((?:[ \t]+-\s*.+\n?)+)/m);
const hasEntry = (inline && inline[1].trim().length > 0) || (block && /^\s*-\s*.+/m.test(block[1]));
if (!hasEntry) {
  console.error('pnpm-workspace.yaml memiliki packages kosong atau tidak valid');
  process.exit(1);
}
NODE
fi

if grep -RInE "example\.com|localhost|chrome-extension://" dist; then
  echo "Ditemukan placeholder atau skema terlarang di dist"
  exit 1
fi

if compgen -G 'dist/sitemap*.xml' > /dev/null; then
  if grep -RIn '<lastmod>' dist/sitemap*.xml; then
    echo "lastmod tidak boleh dibuat-buat"
    exit 1
  fi
  if grep -RInE 'example\.com|localhost' dist/sitemap*.xml; then
    echo "URL sitemap tidak valid"
    exit 1
  fi
fi

echo "Verifikasi selesai."
