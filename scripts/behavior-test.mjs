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
const code=readFileSync('public/consent.js','utf8'),key='sianok-cookie-preferences',ga='ga-disable-G-HXM22WWPKP';
function storage(initial){const data=new Map(Object.entries(initial||{}));return{data,readFail:false,writeFail:false,removeFail:false,ignoreWrite:false,ignoreRemove:false,writes:[],getItem(k){if(this.readFail)throw Error('read');return data.get(k)??null},setItem(k,v){this.writes.push([k,v]);if(this.writeFail)throw Error('write');if(!this.ignoreWrite)data.set(k,v)},removeItem(k){if(this.removeFail)throw Error('remove');if(!this.ignoreRemove)data.delete(k)}}}
function tab(){return{session:storage(),name:'existing-window-name',nameReadFail:false,nameWriteFail:false,nameIgnoreWrite:false}}
function page(local=storage(),tabState=tab(),source=code){
 const nodes={analytics:{checked:false},'save-cookie':{handlers:{},addEventListener(k,v){this.handlers[k]=v}},'reject-cookie':{handlers:{},addEventListener(k,v){this.handlers[k]=v}},'cookie-status':{textContent:''}},scripts=[],events={};
 const window={addEventListener(k,v){events[k]=v}};Object.defineProperty(window,'name',{get(){if(tabState.nameReadFail)throw Error('name read');return tabState.name},set(v){if(tabState.nameWriteFail)throw Error('name write');if(!tabState.nameIgnoreWrite)tabState.name=v}});
 const document={getElementById:k=>nodes[k]||scripts.find(s=>s.id===k)||null,createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}};
 vm.runInNewContext(source,{window,document,localStorage:local,sessionStorage:tabState.session});
 return{window,nodes,scripts,events,local,tab:tabState,save:v=>{const saved=window.sianokConsent.save(v);assert.equal(typeof saved,'boolean');return{saved,analytics:!window[ga],message:nodes['cookie-status'].textContent}},effective:()=>window.dataLayer?.map(x=>Array.from(x)).filter(x=>x[0]==='consent'&&x[1]==='update').at(-1)?.[2].analytics_storage,configCount:()=>window.dataLayer?.map(x=>Array.from(x)).filter(x=>x[0]==='config').length||0};
}
function off(p){assert.equal(p.window[ga],true);assert.equal(p.nodes.analytics.checked,false);if(p.window.gtag)assert.equal(p.effective(),'denied')}
for(const lang of ['id']){
 let p=page();assert.equal(p.scripts.length,0);off(p);p.nodes.analytics.checked=true;p.nodes['save-cookie'].handlers.click();assert.equal(p.scripts.length,1);assert.equal(p.configCount(),1);assert.equal(p.effective(),'granted');p.nodes['reject-cookie'].handlers.click();off(p);p.nodes.analytics.checked=true;p.nodes['save-cookie'].handlers.click();assert.equal(p.effective(),'granted');assert.equal(p.scripts.length,1);assert.equal(p.configCount(),1);assert.equal(p.tab.name,'existing-window-name');for(let i=0;i<3;i++)p.save(true);assert.equal(p.configCount(),1);
 // Existing loaded grant; two storage writes fail, but window-name refusal survives a full new document.
 let local=storage({[key]:'{"analytics":true}'}),t=tab();p=page(local,t);assert.equal(p.scripts.length,1);local.writeFail=true;t.session.writeFail=true;let result=p.save(false);off(p);assert.equal(result.saved,false);assert.match(result.message,lang==='en'?/this tab/:/tab ini/);assert.equal(local.data.get(key),'{"analytics":true}');let next=page(local,t);off(next);assert.equal(next.scripts.length,0);
 // Name fallback unavailable: verified session refusal survives the next document.
 local=storage({[key]:'{"analytics":true}'});t=tab();p=page(local,t);local.writeFail=true;t.nameWriteFail=true;p.save(false);next=page(local,t);off(next);assert.equal(next.scripts.length,0);
 // Every refusal store fails: current document is off, copy explicitly limits the guarantee to this page.
 local=storage({[key]:'{"analytics":true}'});t=tab();p=page(local,t);local.writeFail=true;t.session.writeFail=true;t.nameWriteFail=true;result=p.save(false);off(p);assert.match(result.message,lang==='en'?/on this page/:/halaman ini/);
 // Independent session/local read failures must never recover an old grant or publish a new grant.
 for(const failed of ['session','local']){local=storage({[key]:'{"analytics":true}'});t=tab();if(failed==='session')t.session.readFail=true;else local.readFail=true;p=page(local,t);off(p);assert.equal(p.scripts.length,0);local.writes=[];assert.equal(p.save(true).saved,false);off(p);assert(!local.writes.some(([k,v])=>k===key&&JSON.parse(v).analytics===true));}
 // A read failure after an initially loaded grant is immediately denied on Save.
 local=storage({[key]:'{"analytics":true}'});t=tab();p=page(local,t);local.readFail=true;p.save(true);off(p);
 // Regrant must verify session veto removal, including silently ignored writes, before any shared true write.
 for(const fault of ['removeFail','ignoreRemove']){local=storage();t=tab();p=page(local,t);p.save(false);t.session[fault]=true;local.writes=[];assert.equal(p.save(true).saved,false);off(p);assert(!local.writes.some(([k,v])=>k===key&&JSON.parse(v).analytics===true));assert.equal(JSON.parse(local.data.get(key)).analytics,false);}
 // Name veto cannot be ignored or silently left in place during regrant.
 for(const fault of ['nameWriteFail','nameIgnoreWrite']){local=storage();t=tab();p=page(local,t);p.save(false);t[fault]=true;local.writes=[];assert.equal(p.save(true).saved,false);off(p);assert(!local.writes.some(([k,v])=>k===key&&JSON.parse(v).analytics===true));}
 // Denial written in a different tab reaches an already loaded runtime and checkbox/status.
 local=storage();const a=page(local,tab()),b=page(local,tab());a.save(true);b.events.storage({key});assert.equal(b.scripts.length,1);assert.equal(b.nodes.analytics.checked,true);a.save(false);b.events.storage({key});off(b);assert(b.nodes['cookie-status'].textContent.includes('Google Analytics'));a.save(true);b.events.storage({key});assert.equal(b.effective(),'granted');assert.equal(b.scripts.length,1);assert.equal(b.configCount(),1);
 // A tab-local failed clear cannot publish a shared grant to another tab.
 local=storage();t=tab();p=page(local,t);p.save(false);const other=page(local,tab());t.session.ignoreRemove=true;assert.equal(p.save(true).saved,false);other.events.storage({key});off(other);assert.equal(other.scripts.length,0);
 for(const raw of ['null','{}','{"analytics":"true"}','{"analytics":1}','not-json']){p=page(storage({[key]:raw}));off(p);assert.equal(p.scripts.length,0)}
 // Session writes alone can fail without losing a confirmed permanent denial.
 local=storage({[key]:'{"analytics":true}'});t=tab();p=page(local,t);t.session.writeFail=true;assert.equal(p.save(false).saved,true);off(p);next=page(local,t);off(next);assert.equal(next.scripts.length,0);
 // Simultaneous read/write failures after the library loads still deny immediately and on a fresh document.
 local=storage({[key]:'{"analytics":true}'});t=tab();p=page(local,t);local.readFail=local.writeFail=true;t.session.readFail=t.session.writeFail=true;p.save(false);off(p);next=page(local,t);off(next);assert.equal(next.scripts.length,0);
 // Silently ignored refusal writes must be reported as page-only, with no claim of persistence.
 local=storage({[key]:'{"analytics":true}'});t=tab();p=page(local,t);local.ignoreWrite=true;t.session.ignoreWrite=true;t.nameIgnoreWrite=true;result=p.save(false);off(p);assert.equal(result.saved,false);assert.match(result.message,lang==='en'?/on this page/:/halaman ini/);
 // An unreadable window marker cannot authorize an old grant.
 local=storage({[key]:'{"analytics":true}'});t=tab();t.nameReadFail=true;p=page(local,t);off(p);assert.equal(p.scripts.length,0);
 // Verify the final applied state if reads fail late during a Save.
 local=storage();p=page(local);const originalGet=local.getItem.bind(local);let reads=0;local.getItem=k=>{if(++reads>=8)throw Error('late read');return originalGet(k)};assert.equal(p.save(true).saved,false);off(p);assert.equal(JSON.parse(local.data.get(key)).analytics,false);assert.match(p.nodes['cookie-status'].textContent,/nonaktif/);
 // An ignored local preference write cannot claim success or enable analytics.
 local=storage();p=page(local);local.ignoreWrite=true;assert.equal(p.save(true).saved,false);off(p);assert.equal(p.scripts.length,0);
 console.log('PASS '+lang+': real controls, loaded-grant denial/regrant, single library/config, split/independent storage failures, full new document and retained tab state, verified veto clearing, separate-tab storage events and effective UI, malformed/ignored writes.');
}
