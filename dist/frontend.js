function s(G){let h=G.ui.registerDrawerTab({id:"perflux_main",title:"PerFlux",shortName:"PerFlux",description:"Generate images with Pollinations AI",keywords:["image","generate","pollinations","perflux","art","anime"],headerTitle:"PerFlux",iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
      <path d="M6 14 Q10 4 14 14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>`}),x=document.createElement("style");x.textContent=`
    .pf-root{display:flex;flex-direction:column;height:100%;padding:16px;gap:12px;
      overflow-y:auto;box-sizing:border-box;font-family:inherit;
      color:var(--lumiverse-text,#e0e0e0);background:var(--lumiverse-bg,#1a1a1a)}
    .pf-label{font-size:11.5px;font-weight:600;letter-spacing:.06em;
      text-transform:uppercase;color:var(--lumiverse-text-dim,#888);margin-bottom:4px}
    .pf-textarea{width:100%;resize:vertical;border-radius:8px;box-sizing:border-box;
      border:1px solid var(--lumiverse-border,rgba(255,255,255,.12));
      background:var(--lumiverse-fill-subtle,rgba(255,255,255,.05));
      color:var(--lumiverse-text,#e0e0e0);font-size:13.5px;line-height:1.55;
      padding:10px 12px;font-family:inherit;
      transition:border-color 160ms ease,box-shadow 160ms ease}
    .pf-textarea:focus{outline:none;border-color:var(--lumiverse-accent,#5a9fd4);
      box-shadow:0 0 0 3px var(--lumiverse-accent-alpha,rgba(90,159,212,.18))}
    .pf-prompt{min-height:110px}
    .pf-neg{min-height:58px}
    .pf-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .pf-sel-wrap{display:flex;flex-direction:column}
    .pf-select{appearance:none;-webkit-appearance:none;width:100%;border-radius:8px;
      border:1px solid var(--lumiverse-border,rgba(255,255,255,.12));
      background:var(--lumiverse-fill-subtle,rgba(255,255,255,.05));
      color:var(--lumiverse-text,#e0e0e0);font-size:13px;padding:8px 32px 8px 12px;
      cursor:pointer;font-family:inherit;transition:border-color 160ms ease;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
      background-repeat:no-repeat;background-position:right 10px center}
    .pf-select:focus{outline:none;border-color:var(--lumiverse-accent,#5a9fd4)}
    .pf-top-row{display:flex;align-items:center;justify-content:space-between;gap:8px}
    .pf-title{font-size:15px;font-weight:700;color:var(--lumiverse-text,#e0e0e0)}
    .pf-settings-btn{background:none;border:1px solid var(--lumiverse-border,rgba(255,255,255,.12));
      border-radius:6px;padding:5px 8px;cursor:pointer;color:var(--lumiverse-text-dim,#888);
      display:flex;align-items:center;gap:5px;font-size:12px;font-family:inherit;
      transition:border-color 160ms,color 160ms}
    .pf-settings-btn:hover{border-color:var(--lumiverse-accent,#5a9fd4);
      color:var(--lumiverse-accent,#5a9fd4)}
    .pf-key-banner{font-size:12px;padding:9px 12px;border-radius:7px;
      background:rgba(224,90,90,.12);border:1px solid rgba(224,90,90,.25);
      color:#e05a5a;display:none;align-items:center;justify-content:space-between;gap:8px}
    .pf-key-banner.visible{display:flex}
    .pf-key-set-btn{background:rgba(224,90,90,.2);border:none;border-radius:5px;
      color:#e05a5a;font-size:11px;font-weight:600;padding:4px 8px;
      cursor:pointer;font-family:inherit;white-space:nowrap}
    .pf-key-set-btn:hover{background:rgba(224,90,90,.35)}
    .pf-btn{width:100%;padding:11px 16px;border-radius:8px;border:none;
      background:var(--lumiverse-accent,#5a9fd4);color:#fff;font-size:14px;
      font-weight:600;cursor:pointer;font-family:inherit;
      display:flex;align-items:center;justify-content:center;gap:8px;
      transition:background 160ms ease,opacity 160ms ease,transform 80ms ease}
    .pf-btn:hover:not(:disabled){background:var(--lumiverse-accent-hover,#4889bc)}
    .pf-btn:active:not(:disabled){transform:scale(.98)}
    .pf-btn:disabled{opacity:.5;cursor:not-allowed}
    .pf-status{font-size:12px;text-align:center;
      color:var(--lumiverse-text-dim,#888);min-height:18px}
    .pf-status.error{color:var(--lumiverse-error,#e05a5a)}
    .pf-divider{border:none;
      border-top:1px solid var(--lumiverse-border,rgba(255,255,255,.08));margin:0}
    .pf-gal-hdr{font-size:11.5px;font-weight:600;letter-spacing:.06em;
      text-transform:uppercase;color:var(--lumiverse-text-dim,#888)}
    .pf-gallery{display:grid;
      grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}
    .pf-card{position:relative;border-radius:8px;overflow:hidden;cursor:pointer;
      background:var(--lumiverse-fill-subtle,rgba(255,255,255,.04));
      border:1px solid var(--lumiverse-border,rgba(255,255,255,.1));
      transition:transform 160ms ease,box-shadow 160ms ease}
    .pf-card:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.35)}
    .pf-card img{display:block;width:100%;height:auto;aspect-ratio:1;object-fit:cover}
    .pf-skeleton{width:100%;aspect-ratio:1;
      background:linear-gradient(90deg,
        var(--lumiverse-fill-subtle,rgba(255,255,255,.04)) 25%,
        var(--lumiverse-fill,rgba(255,255,255,.09)) 50%,
        var(--lumiverse-fill-subtle,rgba(255,255,255,.04)) 75%);
      background-size:200% 100%;animation:pf-shimmer 1.4s ease-in-out infinite}
    @keyframes pf-shimmer{
      0%{background-position:-200% 0}100%{background-position:200% 0}}
    .pf-overlay{position:absolute;bottom:0;left:0;right:0;
      background:linear-gradient(to top,rgba(0,0,0,.82),transparent);
      padding:6px 8px 8px;opacity:0;transition:opacity 200ms ease;
      display:flex;align-items:flex-end;justify-content:space-between;gap:4px}
    .pf-card:hover .pf-overlay{opacity:1}
    .pf-card-lbl{font-size:10.5px;color:rgba(255,255,255,.85);
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
    .pf-dl{background:rgba(255,255,255,.15);border:none;border-radius:4px;
      width:24px;height:24px;display:flex;align-items:center;
      justify-content:center;cursor:pointer;flex-shrink:0;transition:background 140ms}
    .pf-dl:hover{background:rgba(255,255,255,.3)}
    .pf-lightbox{display:none;position:fixed;inset:0;z-index:99999;
      background:rgba(0,0,0,.88);align-items:center;
      justify-content:center;cursor:zoom-out}
    .pf-lightbox.open{display:flex}
    .pf-lightbox img{max-width:90vw;max-height:90vh;border-radius:8px;
      box-shadow:0 24px 80px rgba(0,0,0,.6)}
    .pf-lb-close{position:absolute;top:16px;right:20px;background:none;border:none;
      color:#fff;font-size:28px;cursor:pointer;line-height:1;
      opacity:.75;transition:opacity 140ms}
    .pf-lb-close:hover{opacity:1}
  `,h.root.appendChild(x);let w=document.createElement("div");w.className="pf-root";function z(f,D,J,O){let M=document.createElement(f);if(D)M.className=D;if(J)M.textContent=J;if(O)M.innerHTML=O;return M}let m=(f)=>new Promise((D)=>setTimeout(D,f)),R=new Map;G.onBackendMessage((f)=>{if(f.type==="perflux_key_saved"){F.classList.remove("visible");return}if(f.id&&R.has(f.id)){let{resolve:D,reject:J}=R.get(f.id);if(R.delete(f.id),f.error)J(Error(f.error));else D(f.dataUrl)}});function i(f,D,J,O){return new Promise((M,Z)=>{let P=`pf_${Date.now()}_${Math.random().toString(36).slice(2)}`;R.set(P,{resolve:M,reject:Z}),G.sendToBackend({type:"perflux_generate",id:P,prompt:f,neg:D,style:J,seed:O})})}let L=z("div","pf-top-row","","");L.appendChild(z("div","pf-title","PerFlux",""));let W=z("button","pf-settings-btn","",`
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06
               a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09
               A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83
               l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09
               A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83
               l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09
               a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83
               l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09
               a1.65 1.65 0 0 0-1.51 1z"/>
    </svg> API Key`);W.setAttribute("aria-label","Set API key"),L.appendChild(W);let F=z("div","pf-key-banner","","");F.innerHTML="<span>No Pollinations API key set — images won't generate.</span>";let B=z("button","pf-key-set-btn","Set Key","");F.appendChild(B);async function u(){let f=await G.prompt.input({title:"Pollinations API Key",message:"Enter your Pollinations SK key. It stays in backend memory and is never stored on disk.",placeholder:"sk_xxxxxxxxxxxxxxxx",submitLabel:"Save Key"});if(!f.cancelled&&f.value)G.sendToBackend({type:"perflux_set_key",key:f.value.trim()})}W.addEventListener("click",u),B.addEventListener("click",u),F.classList.add("visible");let g=z("div","pf-label","Prompt",""),Y=z("textarea","pf-textarea pf-prompt","","");Y.placeholder="Describe the image you want to generate… be detailed!",Y.rows=5,Y.setAttribute("aria-label","Prompt");let y=z("div","pf-label","Negative Prompt",""),K=z("textarea","pf-textarea pf-neg","","");K.placeholder="What to avoid… (e.g. blurry, low quality, extra limbs)",K.rows=2,K.setAttribute("aria-label","Negative prompt");let U=z("div","pf-sel-wrap","","");U.appendChild(z("div","pf-label","Images",""));let V=z("select","pf-select","","");V.setAttribute("aria-label","Number of images");for(let f=1;f<=6;f++){let D=z("option","",String(f),"");D.value=String(f),D.selected=f===1,V.appendChild(D)}U.appendChild(V);let v=z("div","pf-sel-wrap","","");v.appendChild(z("div","pf-label","Style",""));let C=z("select","pf-select","","");C.setAttribute("aria-label","Image style"),[["ultra-realistic","Ultra-Realistic"],["anime","Anime"]].forEach(([f,D])=>{let J=z("option","",D,"");J.value=f,C.appendChild(J)}),v.appendChild(C);let E=z("div","pf-row","","");E.appendChild(U),E.appendChild(v);let $=z("button","pf-btn","",`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83
               M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>&nbsp;Generate`);$.setAttribute("aria-label","Generate images");let X=z("div","pf-status","",""),c=z("hr","pf-divider","",""),S=z("div","pf-gal-hdr","Generated Images","");S.style.display="none";let I=z("div","pf-gallery","","");[L,F,g,Y,y,K,E,$,X,c,S,I].forEach((f)=>w.appendChild(f)),h.root.appendChild(w);let Q=z("div","pf-lightbox","","");Q.setAttribute("role","dialog"),Q.setAttribute("aria-label","Image lightbox");let A=z("button","pf-lb-close","","&times;");A.setAttribute("aria-label","Close lightbox");let T=z("img","","","");T.alt="Full size preview",Q.appendChild(A),Q.appendChild(T),document.body.appendChild(Q);let d=(f)=>{T.src=f,Q.classList.add("open")},b=()=>Q.classList.remove("open");A.addEventListener("click",(f)=>{f.stopPropagation(),b()}),Q.addEventListener("click",b),document.addEventListener("keydown",(f)=>{if(f.key==="Escape")b()});function p(f,D,J){let O=z("div","pf-card","",""),M=z("img","","","");M.alt=`Generated image ${J+1}`,M.src=f,O.appendChild(M);let Z=z("div","pf-overlay","",""),P=z("span","pf-card-lbl",D.slice(0,40)+(D.length>40?"…":""),""),j=z("button","pf-dl","",`
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="white" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>`);return j.setAttribute("aria-label","Download image"),j.addEventListener("click",(H)=>{H.stopPropagation();let N=document.createElement("a");N.href=f,N.download=`perflux-${Date.now()}-${J+1}.png`,N.click()}),Z.appendChild(P),Z.appendChild(j),O.appendChild(Z),O.addEventListener("click",()=>d(f)),O}function n(){let f=z("div","pf-card","","");return f.appendChild(z("div","pf-skeleton","","")),f}return $.addEventListener("click",async()=>{let f=Y.value.trim();if(!f){X.textContent="Please enter a prompt before generating.",X.className="pf-status error",Y.focus();return}let D=parseInt(V.value,10),J=C.value,O=K.value;$.disabled=!0,X.className="pf-status",X.textContent=`Generating ${D} image${D>1?"s":""}…`,S.style.display="block";let M=[];for(let H=0;H<D;H++){let N=n();M.unshift(N),I.insertBefore(N,I.firstChild)}I.scrollIntoView({behavior:"smooth",block:"start"});let Z=Date.now(),P=0,j=Array.from({length:D},(H,N)=>m(N*800).then(async()=>{try{let k=await i(f,O,J,Z+N*1000),q=p(k,f,N),_=M[N];if(_&&_.parentNode)_.parentNode.replaceChild(q,_);P++,X.textContent=`✓ ${P} / ${D} complete…`}catch(k){let q=M[N];if(q){let _=z("div","","⚠ Failed","");if(_.style.cssText="font-size:11px;color:#e05a5a;padding:12px;text-align:center;aspect-ratio:1;display:flex;align-items:center;justify-content:center;",q.parentNode)q.parentNode.replaceChild(_,q)}}}));await Promise.all(j),$.disabled=!1,X.className="pf-status"+(P===0?" error":""),X.textContent=P===D?`✓ ${D} image${D>1?"s":""} generated.`:P===0?"All failed — check your API key or try again.":`${P} of ${D} succeeded.`}),Y.addEventListener("keydown",(f)=>{if(f.key==="Enter"&&!f.shiftKey)f.preventDefault(),$.click()}),()=>{Q.remove(),h.destroy()}}window.setup=s;export{s as setup};
