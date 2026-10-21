import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
let module={exports:{}};vm.runInNewContext(ts.transpileModule(readFileSync('worker.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,{module,exports:module.exports,URL,Request,Response,Headers});
const worker=module.exports.default;let assetCalls=0;const env={ASSETS:{fetch:async()=>{assetCalls++;return new Response('missing',{status:404});}}};
for(const u of ['http://sianokvalley.com/kebijakan-privasi/?q=1','https://www.sianokvalley.com/kebijakan-privasi/?q=1']){const r=await worker.fetch(new Request(u),env);assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://sianokvalley.com/kebijakan-privasi/?q=1');}
let r=await worker.fetch(new Request('https://sianokvalley.com/pengaturan-cookie?q=1'),env);assert.equal(r.headers.get('location'),'https://sianokvalley.com/pengaturan-cookie/?q=1');r=await worker.fetch(new Request('https://sianokvalley.com/missing'),env);assert.equal(r.status,404);assert.equal(await r.text(),'missing');assert.match(r.headers.get('X-Robots-Tag'),/noindex/);assert.equal(assetCalls,1);
for(const path of ['/404','/404/','/404.html','/404.html/'])for(const method of ['GET','HEAD'])for(const query of ['', '?source=test']){
 const result=await worker.fetch(new Request('https://sianokvalley.com'+path+query,{method}),{ASSETS:{fetch:async request=>{assert.equal(new URL(request.url).pathname,'/404');return new Response(readFileSync('dist/404.html'),{status:200,headers:{'Content-Type':'text/html'}});}}});
 assert.equal(result.status,404);assert.match(result.headers.get('X-Robots-Tag'),/noindex/);assert.equal(result.headers.get('location'),null);assert.equal((await result.text()).length>0,method==='GET');
}
const code=readFileSync('public/consent.js','utf8');
let raw=JSON.stringify({analytics:true}), writable=true, session={};
const storage={getItem:()=>raw,setItem:(k,v)=>{if(!writable)throw Error('blocked');if(k==='sianok-cookie-preferences')raw=v;},removeItem:()=>{if(!writable)throw Error('blocked');}};
const sessionStorage={getItem:k=>session[k]||null,setItem:(k,v)=>{session[k]=v},removeItem:k=>{delete session[k]}};
function page(name=''){const scripts=[];const window={name};const document={getElementById:id=>scripts.find(s=>s.id===id),createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}};vm.runInNewContext(code,{window,document,localStorage:storage,sessionStorage});return {window,scripts};}
let p=page();assert.equal(p.scripts.length,1);writable=false;assert.equal(p.window.sianokConsent.save(false),false);assert.equal(p.window['ga-disable-G-HXM22WWPKP'],true);
let next=page(p.window.name);assert.equal(next.scripts.length,0);assert.equal(next.window['ga-disable-G-HXM22WWPKP'],true);assert.equal(JSON.parse(raw).analytics,true);
// Even if session/name cannot carry the tombstone, blocked writes refuse a stale grant.
session={};next=page();assert.equal(next.scripts.length,0);assert.equal(next.window.sianokConsent.save(true),false);assert.equal(next.scripts.length,1);assert.equal(page().scripts.length,0);
writable=true;const chosen=page();chosen.window.sianokConsent.save(false);assert.equal(page(chosen.window.name).scripts.length,0);chosen.window.sianokConsent.save(true);assert.equal(page(chosen.window.name).scripts.length,1);
storage.getItem=()=>{throw Error('blocked read')};assert.equal(page().scripts.length,0);
console.log('PASS Worker 301/query/ASSETS404; consent immediate refusal, failed writes and stale grants across pages.');
