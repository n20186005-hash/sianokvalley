type Env={ASSETS:{fetch:(request:Request)=>Promise<Response>}};
const errorPaths=new Set(['/404','/404/','/404.html','/404.html/']);
const routes=new Set(['/','/kebijakan-privasi/','/ketentuan-layanan/','/pengaturan-cookie/']);
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
