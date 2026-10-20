# Panduan Ngarai Sianok

Situs informasi wisata independen dan nirlaba untuk Taman Panorama / Ngarai Sianok, Bukittinggi, Sumatera Barat.

## Teknologi
- Astro 7.2.2
- Tailwind CSS 4.3.3 melalui `@tailwindcss/vite`
- TypeScript 6.0.3
- pnpm 11.22.0
- Node.js 24.19.0
- Cloudflare Workers Static Assets melalui Wrangler 4.124.0

## Domain
Domain produksi hanya diatur pada variabel `site` di `astro.config.mjs`. Domain yang digunakan adalah https://sianokvalley.com; canonical, metadata sosial dan sitemap memakai asal tersebut.

## Perintah
```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

`pnpm deploy` menjalankan build lalu `wrangler deploy`. Tidak ada basis data, autentikasi, atau CMS.

## Analitik dan cookie
Google Analytics hanya dimuat setelah izin analitik. Penolakan menonaktifkannya segera. Pilihan yang gagal disimpan tidak diklaim tersimpan; penanda penolakan pada sesi/jendela dan pemeriksaan kemampuan menulis mencegah izin lama pulih saat penyimpanan gagal. Tidak ada akun, formulir kontak atau pemesanan. Google Maps tertanam memproses permintaan terpisah dari pilihan analitik.

## Sumber foto
Empat sumber Commons dan lisensi CC BY-SA 4.0 ditautkan pada halaman utama. Berkas cocok byte-per-byte dengan thumbnail sumber yang diperiksa; ukuran visual dan informasi fasilitas tetap bukan jaminan kondisi sekarang.

## Keamanan respons HTTP
Header keamanan dasar untuk aset statis didefinisikan di `public/_headers` dan akan ikut disalin ke hasil build Astro untuk Cloudflare Workers Static Assets.

## Delivery checks

`node scripts/behavior-test.mjs` tests Worker redirects/404 and consent with blocked storage and a cross-page stale grant. Worker project `sianokvalley` was confirmed by the official Cloudflare GitHub check on the baseline commit. Root wrangler.jsonc serves dist through ASSETS, runs the Worker first, and uses a real 404 page. HTTP/www redirects preserve path/query. No configuration is generated into public output. The baseline did not track dist; source images and the consent runtime are committed and copied by the reproducible build. Keep that convention.
