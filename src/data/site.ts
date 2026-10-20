// Nama situs SEO terpadu: Nama Objek + Kota + Panduan Wisata.
// Dipakai di title beranda, og:site_name, dan akhiran title subhalaman
// agar seluruh judul konsisten dan mudah diaudit.
export const SITE_NAME = 'Taman Panorama Ngarai Sianok Bukittinggi — Panduan Wisata';

export function withSiteName(title: string): string {
  return `${title} | ${SITE_NAME}`;
}
