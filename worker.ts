type Env={ASSETS:{fetch:(request:Request)=>Promise<Response>}};
const errorPaths=new Set(['/404','/404/','/404.html','/404.html/']);
const routes=new Set(['/','/kebijakan-privasi/','/ketentuan-layanan/','/pengaturan-cookie/',
'/perbedaan-panorama-ngarai-sianok/','/sejarah-ngarai-sianok/','/geologi-ngarai-sianok/','/geopark-ngarai-sianok-maninjau/','/waktu-terbaik-ngarai-sianok/','/wisata-kabut-ngarai-sianok/','/spot-foto-ngarai-sianok/','/panduan-foto-ngarai-sianok/','/keamanan-ngarai-sianok/','/tiket-taman-panorama/','/jam-buka-taman-panorama/','/dari-jam-gadang-ke-panorama/','/dari-padang-ke-ngarai-sianok/','/dari-bandara-minangkabau/','/parkir-taman-panorama/','/fasilitas-taman-panorama/','/durasi-kunjungan-ngarai-sianok/','/ngarai-sianok-anak/','/ngarai-sianok-lansia-akses/','/ngarai-sianok-saat-hujan/','/lubang-japang/','/janjang-koto-gadang/','/jam-gadang/','/benteng-fort-de-kock/','/jembatan-limpapeh/','/taman-ngarai-maaram/','/rumah-kelahiran-bung-hatta/','/desa-wisata-kayukubu/','/koto-gadang/','/sarapan-dekat-ngarai-sianok/','/makan-siang-dekat-taman-panorama/','/itiak-lado-mudo/','/nasi-kapau-los-lambuang/','/kedai-kopi-dekat-ngarai-sianok/','/oleh-oleh-khas-bukittinggi/','/rute-taman-panorama-lubang-japang/','/wisata-setengah-hari-ngarai-sianok-jam-gadang/','/wisata-sejarah-setengah-hari/','/wisata-sehari-ngarai-sianok-koto-gadang/','/wisata-sehari-pertama-bukittinggi/','/rute-keluarga-ngarai-sianok/','/wisata-pengganti-hujan-bukittinggi/','/rute-foto-pagi-ngarai-sianok/']);
export default {async fetch(request:Request,env:Env):Promise<Response>{
 const url=new URL(request.url);
 if((url.hostname==='sianokvalley.com'||url.hostname==='www.sianokvalley.com')&&(url.protocol!=='https:'||url.hostname!=='sianokvalley.com')){url.protocol='https:';url.hostname='sianokvalley.com';return Response.redirect(url.toString(),301);}
 if(errorPaths.has(url.pathname)){
  const assetUrl=new URL('/404',url);
  const response=await env.ASSETS.fetch(new Request(assetUrl,{method:'GET',redirect:'manual'}));
  const headers=new Headers(response.headers);headers.delete('Location');headers.set('X-Robots-Tag','noindex, follow');
  return new Response(request.method==='HEAD'?null:response.body,{status:404,headers});
 }
 if(routes.has(url.pathname+'/')){url.pathname+='/';return Response.redirect(url.toString(),301);}
 const response=await env.ASSETS.fetch(request);
 if(response.status===404){const headers=new Headers(response.headers);headers.set('X-Robots-Tag','noindex, follow');return new Response(response.body,{status:404,headers});}
 return response;
}};
