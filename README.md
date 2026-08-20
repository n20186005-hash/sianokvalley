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
Domain produksi hanya diatur pada variabel `site` di `astro.config.mjs`. Nilai awal sengaja kosong. Saat kosong, build tetap valid, tag absolut yang memerlukan domain dihilangkan, dan integrasi sitemap tidak diaktifkan. Setelah domain dipilih, isi nilai tersebut sekali lalu build ulang.

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
Google Analytics `G-HXM22WWPKP` hanya dimuat setelah pengguna mengaktifkan kategori analitik pada `/pengaturan-cookie/`.

## Sumber foto
Semua foto situs disimpan lokal di `/public/images/`; kredit dan lisensinya dicantumkan pada halaman utama.

## Keamanan respons HTTP
Header keamanan dasar untuk aset statis didefinisikan di `public/_headers` dan akan ikut disalin ke hasil build Astro untuk Cloudflare Workers Static Assets.
