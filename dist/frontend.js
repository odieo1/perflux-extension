function t(V){let U=V.ui.registerDrawerTab({id:"perflux_main",title:"PerFlux",shortName:"PerFlux",description:"Generate images with Pollinations AI",keywords:["image","generate","pollinations","perflux","art","anime"],headerTitle:"PerFlux",iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
      <path d="M6 14 Q10 4 14 14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>`}),u=document.createElement("style");u.textContent=`
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
    .pf-key-form{display:none;flex-direction:column;gap:8px;padding:10px 12px;
      border-radius:8px;border:1px solid var(--lumiverse-border,rgba(255,255,255,.12));
      background:var(--lumiverse-fill-subtle,rgba(255,255,255,.05))}
    .pf-key-form.visible{display:flex}
    .pf-key-input{width:100%;border-radius:6px;padding:8px 10px;box-sizing:border-box;
      border:1px solid var(--lumiverse-border,rgba(255,255,255,.12));
      background:var(--lumiverse-bg,#1a1a1a);
      color:var(--lumiverse-text,#e0e0e0);font-size:13px;font-family:inherit}
    .pf-key-input:focus{outline:none;border-color:var(--lumiverse-accent,#5a9fd4)}
    .pf-key-save{padding:8px 12px;border-radius:6px;border:none;
      background:var(--lumiverse-accent,#5a9fd4);color:#fff;font-size:13px;
      font-weight:600;cursor:pointer;font-family:inherit;
      transition:background 160ms ease}
    .pf-key-save:hover{background:var(--lumiverse-accent-hover,#4889bc)}
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
  `,U.root.appendChild(u);let E=document.createElement("div");E.className="pf-root";function z(f,D,J,O){let M=document.createElement(f);if(D)M.className=D;if(J)M.textContent=J;if(O)M.innerHTML=O;return M}let d=(f)=>new Promise((D)=>setTimeout(D,f)),h=new Map;V.onBackendMessage((f)=>{if(f.type==="perflux_key_saved"){G.classList.remove("visible"),X.classList.remove("visible");return}if(f.id&&h.has(f.id)){let{resolve:D,reject:J}=h.get(f.id);if(h.delete(f.id),f.error)J(Error(f.error));else D(f.dataUrl)}});function y(f,D,J,O){return new Promise((M,$)=>{let P=`pf_${Date.now()}_${Math.random().toString(36).slice(2)}`;h.set(P,{resolve:M,reject:$}),V.sendToBackend({type:"perflux_generate",id:P,prompt:f,neg:D,style:J,seed:O})})}let F=z("div","pf-top-row","","");F.appendChild(z("div","pf-title","PerFlux",""));let v=z("button","pf-settings-btn","",`
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
    </svg> API Key`);v.setAttribute("aria-label","Set API key"),F.appendChild(v);let G=z("div","pf-key-banner","","");G.innerHTML="<span>No Pollinations API key set — images won't generate.</span>";let i=z("button","pf-key-set-btn","Set Key","");G.appendChild(i),G.classList.add("visible");let X=z("div","pf-key-form","","");X.appendChild(z("div","pf-label","Pollinations SK Key",""));let Y=z("input","pf-key-input","","");Y.type="password",Y.placeholder="sk_xxxxxxxxxxxxxxxx",Y.setAttribute("aria-label","Pollinations API key");let g=z("button","pf-key-save","Save Key","");X.appendChild(Y),X.appendChild(g);function c(){let f=X.classList.contains("visible");if(X.classList.toggle("visible"),!f)setTimeout(()=>Y.focus(),50)}function m(){let f=Y.value.trim();if(!f)return;V.sendToBackend({type:"perflux_set_key",key:f}),Y.value="",X.classList.remove("visible"),G.classList.remove("visible")}v.addEventListener("click",c),i.addEventListener("click",c),g.addEventListener("click",m),Y.addEventListener("keydown",(f)=>{if(f.key==="Enter")m()});let p=z("div","pf-label","Prompt",""),_=z("textarea","pf-textarea pf-prompt","","");_.placeholder="Describe the image you want to generate… be detailed!",_.rows=5,_.setAttribute("aria-label","Prompt");let s=z("div","pf-label","Negative Prompt",""),R=z("textarea","pf-textarea pf-neg","","");R.placeholder="What to avoid… (e.g. blurry, low quality, extra limbs)",R.rows=2,R.setAttribute("aria-label","Negative prompt");let A=z("div","pf-sel-wrap","","");A.appendChild(z("div","pf-label","Images",""));let w=z("select","pf-select","","");w.setAttribute("aria-label","Number of images");for(let f=1;f<=6;f++){let D=z("option","",String(f),"");D.value=String(f),D.selected=f===1,w.appendChild(D)}A.appendChild(w);let I=z("div","pf-sel-wrap","","");I.appendChild(z("div","pf-label","Style",""));let L=z("select","pf-select","","");L.setAttribute("aria-label","Image style"),[["ultra-realistic","Ultra-Realistic"],["anime","Anime"]].forEach(([f,D])=>{let J=z("option","",D,"");J.value=f,L.appendChild(J)}),I.appendChild(L);let S=z("div","pf-row","","");S.appendChild(A),S.appendChild(I);let j=z("button","pf-btn","",`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83
               M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>&nbsp;Generate`);j.setAttribute("aria-label","Generate images");let Z=z("div","pf-status","",""),n=z("hr","pf-divider","",""),T=z("div","pf-gal-hdr","Generated Images","");T.style.display="none";let W=z("div","pf-gallery","","");[F,G,X,p,_,s,R,S,j,Z,n,T,W].forEach((f)=>E.appendChild(f)),U.root.appendChild(E);let Q=z("div","pf-lightbox","","");Q.setAttribute("role","dialog"),Q.setAttribute("aria-label","Image lightbox");let x=z("button","pf-lb-close","","&times;");x.setAttribute("aria-label","Close lightbox");let b=z("img","","","");b.alt="Full size preview",Q.appendChild(x),Q.appendChild(b),document.body.appendChild(Q);let r=(f)=>{b.src=f,Q.classList.add("open")},B=()=>Q.classList.remove("open");x.addEventListener("click",(f)=>{f.stopPropagation(),B()}),Q.addEventListener("click",B),document.addEventListener("keydown",(f)=>{if(f.key==="Escape")B()});function o(f,D,J){let O=z("div","pf-card","",""),M=z("img","","","");M.alt=`Generated image ${J+1}`,M.src=f,O.appendChild(M);let $=z("div","pf-overlay","",""),P=z("span","pf-card-lbl",D.slice(0,40)+(D.length>40?"…":""),""),C=z("button","pf-dl","",`
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="white" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>`);return C.setAttribute("aria-label","Download image"),C.addEventListener("click",(K)=>{K.stopPropagation();let N=document.createElement("a");N.href=f,N.download=`perflux-${Date.now()}-${J+1}.png`,N.click()}),$.appendChild(P),$.appendChild(C),O.appendChild($),O.addEventListener("click",()=>r(f)),O}function a(){let f=z("div","pf-card","","");return f.appendChild(z("div","pf-skeleton","","")),f}return j.addEventListener("click",async()=>{let f=_.value.trim();if(!f){Z.textContent="Please enter a prompt before generating.",Z.className="pf-status error",_.focus();return}let D=parseInt(w.value,10),J=L.value,O=R.value;j.disabled=!0,Z.className="pf-status",Z.textContent=`Generating ${D} image${D>1?"s":""}…`,T.style.display="block";let M=[];for(let K=0;K<D;K++){let N=a();M.unshift(N),W.insertBefore(N,W.firstChild)}W.scrollIntoView({behavior:"smooth",block:"start"});let $=Date.now(),P=0,C=Array.from({length:D},(K,N)=>d(N*800).then(async()=>{try{let k=await y(f,O,J,$+N*1000),H=o(k,f,N),q=M[N];if(q&&q.parentNode)q.parentNode.replaceChild(H,q);P++,Z.textContent=`✓ ${P} / ${D} complete…`}catch(k){let H=M[N];if(H){let q=z("div","","⚠ Failed","");if(q.style.cssText="font-size:11px;color:#e05a5a;padding:12px;text-align:center;aspect-ratio:1;display:flex;align-items:center;justify-content:center;",H.parentNode)H.parentNode.replaceChild(q,H)}}}));await Promise.all(C),j.disabled=!1,Z.className="pf-status"+(P===0?" error":""),Z.textContent=P===D?`✓ ${D} image${D>1?"s":""} generated.`:P===0?"All failed — check your API key or try again.":`${P} of ${D} succeeded.`}),_.addEventListener("keydown",(f)=>{if(f.key==="Enter"&&!f.shiftKey)f.preventDefault(),j.click()}),()=>{Q.remove(),U.destroy()}}window.setup=t;export{t as setup};
