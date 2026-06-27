function n(A){let f=A.ui.registerDrawerTab({id:"perflux_main",title:"PerFlux",shortName:"PerFlux",description:"Generate images with Pollinations AI",keywords:["image","generate","pollinations","perflux","art","anime"],headerTitle:"PerFlux",iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
      <path d="M6 14 Q10 4 14 14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>`}),S=document.createElement("style");S.textContent=`
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
    .pf-retry{font-size:11px;color:var(--lumiverse-accent,#5a9fd4);
      background:none;border:none;cursor:pointer;padding:4px 0;
      text-decoration:underline;width:100%;text-align:center}
  `,f.root.appendChild(S);let w=document.createElement("div");w.className="pf-root";function z(j,q,D,J){let F=document.createElement(j);if(q)F.className=q;if(D)F.textContent=D;if(J)F.innerHTML=J;return F}let x=(j)=>new Promise((q)=>setTimeout(q,j)),B=z("div","pf-label","Prompt",""),Q=z("textarea","pf-textarea pf-prompt","","");Q.placeholder="Describe the image you want to generate… be detailed!",Q.rows=5,Q.setAttribute("aria-label","Prompt");let T=z("div","pf-label","Negative Prompt",""),$=z("textarea","pf-textarea pf-neg","","");$.placeholder="What to avoid… (e.g. blurry, low quality, extra limbs)",$.rows=2,$.setAttribute("aria-label","Negative prompt");let C=z("div","pf-sel-wrap","","");C.appendChild(z("div","pf-label","Images",""));let P=z("select","pf-select","","");P.setAttribute("aria-label","Number of images");for(let j=1;j<=6;j++){let q=z("option","",String(j),"");q.value=String(j),q.selected=j===1,P.appendChild(q)}C.appendChild(P);let I=z("div","pf-sel-wrap","","");I.appendChild(z("div","pf-label","Style",""));let H=z("select","pf-select","","");H.setAttribute("aria-label","Image style"),[["ultra-realistic","Ultra-Realistic"],["anime","Anime"]].forEach(([j,q])=>{let D=z("option","",q,"");D.value=j,H.appendChild(D)}),I.appendChild(H);let h=z("div","pf-row","","");h.appendChild(C),h.appendChild(I);let Z=z("button","pf-btn","",`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83
               M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>&nbsp;Generate`);Z.setAttribute("aria-label","Generate images");let O=z("div","pf-status","",""),y=z("hr","pf-divider","",""),v=z("div","pf-gal-hdr","Generated Images","");v.style.display="none";let V=z("div","pf-gallery","","");[B,Q,T,$,h,Z,O,y,v,V].forEach((j)=>w.appendChild(j)),f.root.appendChild(w);let N=z("div","pf-lightbox","","");N.setAttribute("role","dialog"),N.setAttribute("aria-label","Image lightbox");let L=z("button","pf-lb-close","","&times;");L.setAttribute("aria-label","Close lightbox");let W=z("img","","","");W.alt="Full size preview",N.appendChild(L),N.appendChild(W),document.body.appendChild(N);let d=(j)=>{W.src=j,N.classList.add("open")},U=()=>N.classList.remove("open");L.addEventListener("click",(j)=>{j.stopPropagation(),U()}),N.addEventListener("click",U),document.addEventListener("keydown",(j)=>{if(j.key==="Escape")U()});let k="pk_VveVFnRrYLAxuVzS",i="https://gen.pollinations.ai/image/";function u(j,q,D,J){let F=D==="anime"?", anime style, vibrant anime illustration, cel shaded":", ultra-realistic, photorealistic, 8k uhd, highly detailed",X=j.trim()+F,M=new URLSearchParams({model:"flux",width:"768",height:"768",seed:String(J),nologo:"true",key:k});if(q.trim())M.set("negative_prompt",q.trim());return`${i}${encodeURIComponent(X)}?${M}`}async function g(j){let q=await fetch(j);if(!q.ok)throw Error(`HTTP ${q.status}`);let D=await q.blob();return URL.createObjectURL(D)}function m(j,q,D){let J=z("div","pf-card","",""),F=z("img","","","");F.alt=`Generated image ${D+1}`,F.src=j,J.appendChild(F);let X=z("div","pf-overlay","",""),M=z("span","pf-card-lbl",q.slice(0,40)+(q.length>40?"…":""),""),K=z("button","pf-dl","",`
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="white" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>`);return K.setAttribute("aria-label","Download image"),K.addEventListener("click",(R)=>{R.stopPropagation();let G=document.createElement("a");G.href=j,G.download=`perflux-${Date.now()}-${D+1}.png`,G.click()}),X.appendChild(M),X.appendChild(K),J.appendChild(X),J.addEventListener("click",()=>d(j)),J}function c(){let j=z("div","pf-card","",""),q=z("div","pf-skeleton","","");return j.appendChild(q),j}return Z.addEventListener("click",async()=>{let j=Q.value.trim();if(!j){O.textContent="Please enter a prompt before generating.",O.className="pf-status error",Q.focus();return}let q=parseInt(P.value,10),D=H.value,J=$.value;Z.disabled=!0,O.className="pf-status",O.textContent=`Generating ${q} image${q>1?"s":""}…`,v.style.display="block";let F=[];for(let R=0;R<q;R++){let G=c();F.unshift(G),V.insertBefore(G,V.firstChild)}V.scrollIntoView({behavior:"smooth",block:"start"});let X=Date.now(),M=0,K=Array.from({length:q},(R,G)=>x(G*800).then(async()=>{let b=u(j,J,D,X+G*1000);try{let E=await g(b),_=m(E,j,G),Y=F[G];if(Y&&Y.parentNode)Y.parentNode.replaceChild(_,Y);M++,O.textContent=`✓ ${M} / ${q} complete…`}catch(E){let _=F[G];if(_){let Y=z("div","","⚠ Failed","");if(Y.style.cssText="font-size:11px;color:#e05a5a;padding:12px;text-align:center;aspect-ratio:1;display:flex;align-items:center;justify-content:center;",_.parentNode)_.parentNode.replaceChild(Y,_)}}}));await Promise.all(K),Z.disabled=!1,O.className="pf-status"+(M===0?" error":""),O.textContent=M===q?`✓ ${q} image${q>1?"s":""} generated.`:M===0?"All failed — check your API key or try again shortly.":`${M} of ${q} succeeded.`}),Q.addEventListener("keydown",(j)=>{if(j.key==="Enter"&&!j.shiftKey)j.preventDefault(),Z.click()}),()=>{N.remove(),f.destroy()}}window.setup=n;export{n as setup};
