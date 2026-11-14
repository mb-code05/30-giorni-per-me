// Versione 2.0: rete prima, cache come riserva. Gli aggiornamenti arrivano da soli, senza ?v= nell'indirizzo.
const CACHE='soft-rose-v2-4';
const ASSETS=['./','./index.html','./style.css','./app.js','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request,url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==self.location.origin)return;
  const key=req.mode==='navigate'?'./index.html':req;
  e.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const ctrl=new AbortController(),timer=setTimeout(()=>ctrl.abort(),4000);
      const res=await fetch(req,{cache:'no-cache',signal:ctrl.signal});clearTimeout(timer);
      if(res.ok)cache.put(key,res.clone());
      return res;
    }catch{
      return (await cache.match(key,{ignoreSearch:true}))||(await cache.match('./index.html'))||Response.error();
    }
  })());
});

