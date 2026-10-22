(() => {
  const KEY='sianok-cookie-preferences', DENY='sianok-analytics-denied', MARK='|sianok-analytics-denied|', ID='G-HXM22WWPKP';
  let immediateDeny=false;
  const messages={
    on:'Pilihan Google Analytics disimpan dan aktif.',
    off:'Google Analytics ditolak dan pilihan disimpan.',
    tab:'Google Analytics nonaktif pada tab ini selama penanda sesi atau jendela masih tersedia, termasuk perpindahan dalam situs dan pemuatan ulang. Pilihan permanen tidak dapat disimpan; izin lama mungkin masih ada di tab lain. Hapus data situs melalui pengaturan browser untuk menghapus izin lama.',
    page:'Google Analytics nonaktif pada halaman ini. Pilihan tidak dapat disimpan dan penolakan tidak dapat dipastikan untuk halaman berikutnya; hapus data situs melalui pengaturan browser sebelum berpindah atau memuat ulang.'
  };
  function denialState(){
    try{return {denied:immediateDeny||sessionStorage.getItem(DENY)==='1'||window.name.includes(MARK),failed:false};}
    catch{return {denied:true,failed:true};}
  }
  function state(){
    const denial=denialState();
    try{
      const saved=JSON.parse(localStorage.getItem(KEY)||'null');
      // An old grant must not revive while permission storage cannot be verified.
      localStorage.setItem(KEY+'-write-check','1');
      if(localStorage.getItem(KEY+'-write-check')!=='1')throw Error('Storage unavailable');
      localStorage.removeItem(KEY+'-write-check');
      if(localStorage.getItem(KEY+'-write-check')!==null)throw Error('Storage unavailable');
      const valid=typeof saved?.analytics==='boolean';
      return {analytics:!denial.failed&&!denial.denied&&valid&&saved.analytics,preferences:!denial.failed&&!denial.denied&&valid?saved:null,denied:denial.denied,failed:denial.failed,decided:valid||denial.denied,storedFalse:valid&&saved.analytics===false};
    }catch{return {analytics:false,preferences:null,denied:denial.denied,failed:true,decided:false,storedFalse:false};}
  }
  function read(){return state().preferences;}
  function apply(grant){
    window['ga-disable-'+ID]=!grant;
    if(!grant){window.gtag?.('consent','update',{analytics_storage:'denied'});return;}
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    window.gtag('consent','update',{analytics_storage:'granted'});
    if(document.getElementById('sianok-ga4'))return;
    const script=document.createElement('script');script.id='sianok-ga4';script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(script);
    window.gtag('js',new Date());window.gtag('config',ID);
  }
  function retainDenial(){
    immediateDeny=true;apply(false);let retained=false;
    try{sessionStorage.setItem(DENY,'1');retained=sessionStorage.getItem(DENY)==='1';}catch{}
    try{window.name=window.name.split(MARK).join('')+MARK;retained=window.name.includes(MARK)||retained;}catch{}
    return retained;
  }
  function clearDenial(){
    try{
      sessionStorage.getItem(DENY);const name=window.name;
      sessionStorage.removeItem(DENY);
      if(sessionStorage.getItem(DENY)!==null)return false;
      window.name=name.split(MARK).join('');
      return !window.name.includes(MARK);
    }catch{return false;}
  }
  function sync(message,current=state()){
    apply(current.analytics);
    const checkbox=document.getElementById('analytics'),status=document.getElementById('cookie-status');
    if(checkbox)checkbox.checked=current.analytics;
    if(status)status.textContent=message||(current.failed?messages.page:current.denied&&!current.storedFalse?messages.tab:current.decided?(current.analytics?messages.on:messages.off):'');
    return current;
  }
  function save(analytics){
    analytics=analytics===true;let stored=false,retained=false;
    if(!analytics){
      retained=retainDenial();
      try{localStorage.setItem(KEY,JSON.stringify({analytics:false}));stored=JSON.parse(localStorage.getItem(KEY)||'null')?.analytics===false;}catch{}
    }else{
      try{
        if(state().failed||!clearDenial())throw Error('Choice unavailable');
        localStorage.setItem(KEY,JSON.stringify({analytics:true}));
        if(JSON.parse(localStorage.getItem(KEY)||'null')?.analytics!==true)throw Error('Choice not retained');
        immediateDeny=false;
        const current=state();if(current.failed||!current.analytics)throw Error('Choice unavailable');
        stored=true;
      }catch{
        try{localStorage.setItem(KEY,JSON.stringify({analytics:false}));}catch{}
        retained=retainDenial();
      }
    }
    let current=state();
    if(stored&&analytics&&!current.analytics){
      try{localStorage.setItem(KEY,JSON.stringify({analytics:false}));}catch{}
      retained=retainDenial();stored=false;current=state();
    }
    sync(stored?(current.analytics?messages.on:messages.off):(retained?messages.tab:messages.page),current);
    return stored;
  }
  window.sianokConsent={read,save};
  sync();
  const checkbox=document.getElementById('analytics');
  document.getElementById('save-cookie')?.addEventListener('click',()=>save(checkbox?.checked===true));
  document.getElementById('reject-cookie')?.addEventListener('click',()=>save(false));
  window.addEventListener('storage',event=>{if(event.key===KEY||event.key===null)sync();});
})();
