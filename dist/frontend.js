function H(B){let x=B.ui.registerDrawerTab({id:"perflux_main",title:"PerFlux",shortName:"PerFlux",description:"Generate images with Pollinations AI",keywords:["image","generate","pollinations","perflux","art","anime"],headerTitle:"PerFlux",iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
      <path d="M6 14 Q10 4 14 14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>`}),P=document.createElement("style");P.textContent=`
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
  `,x.root.appendChild(P);let y=document.createElement("div");y.className="pf-root";function t(e,r,n,o){let l=document.createElement(e);if(r)l.className=r;if(n)l.textContent=n;if(o)l.innerHTML=o;return l}let I=t("div","pf-label","Prompt",""),c=t("textarea","pf-textarea pf-prompt","","");c.placeholder="Describe the image you want to generate? be detailed!",c.rows=5,c.setAttribute("aria-label","Prompt");let S=t("div","pf-label","Negative Prompt",""),u=t("textarea","pf-textarea pf-neg","","");u.placeholder="What to avoid? (e.g. blurry, low quality, extra limbs)",u.rows=2,u.setAttribute("aria-label","Negative prompt");let w=t("div","pf-sel-wrap","","");w.appendChild(t("div","pf-label","Images",""));let m=t("select","pf-select","","");m.setAttribute("aria-label","Number of images");for(let e=1;e<=6;e++){let r=t("option","",String(e),"");r.value=String(e),r.selected=e===1,m.appendChild(r)}w.appendChild(m);let k=t("div","pf-sel-wrap","","");k.appendChild(t("div","pf-label","Style",""));let b=t("select","pf-select","","");b.setAttribute("aria-label","Image style"),[["ultra-realistic","Ultra-Realistic"],["anime","Anime"]].forEach(([e,r])=>{let n=t("option","",r,"");n.value=e,b.appendChild(n)}),k.appendChild(b);let C=t("div","pf-row","","");C.appendChild(w),C.appendChild(k);let f=t("button","pf-btn","",`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83
               M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>&nbsp;Generate`);f.setAttribute("aria-label","Generate images");let g=t("div","pf-status","",""),N=t("hr","pf-divider","",""),E=t("div","pf-gal-hdr","Generated Images","");E.style.display="none";let h=t("div","pf-gallery","","");[I,c,S,u,C,f,g,N,E,h].forEach((e)=>y.appendChild(e)),x.root.appendChild(y);let p=t("div","pf-lightbox","","");p.setAttribute("role","dialog"),p.setAttribute("aria-label","Image lightbox");let L=t("button","pf-lb-close","","&times;");L.setAttribute("aria-label","Close lightbox");let z=t("img","","","");z.alt="Full size preview",p.appendChild(L),p.appendChild(z),document.body.appendChild(p);let j=(e)=>{z.src=e,p.classList.add("open")},A=()=>p.classList.remove("open");L.addEventListener("click",(e)=>{e.stopPropagation(),A()}),p.addEventListener("click",A),document.addEventListener("keydown",(e)=>{if(e.key==="Escape")A()});let G="https://image.pollinations.ai/prompt/";function D(e,r,n,o){let l=n==="anime"?", anime style, vibrant anime illustration, cel shaded":", ultra-realistic, photorealistic, 8k uhd, highly detailed",a=new URLSearchParams({model:"flux",width:"768",height:"768",seed:String(o),nologo:"true"});if(r.trim())a.set("negative_prompt",r.trim());return`${G}${encodeURIComponent(e.trim()+l)}?${a}`}function T(e,r,n){let o=t("div","pf-card","",""),l=t("div","pf-skeleton","","");o.appendChild(l);let a=t("img","","","");a.alt=`Generated image ${n+1}`,a.loading="lazy",a.style.display="none",o.appendChild(a);let v=t("div","pf-overlay","",""),$=t("span","pf-card-lbl",r.slice(0,40)+(r.length>40?"?":""),""),d=t("button","pf-dl","",`
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="white" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>`);return d.setAttribute("aria-label","Download image"),d.addEventListener("click",(i)=>{i.stopPropagation();let s=document.createElement("a");s.href=e,s.download=`perflux-${Date.now()}-${n+1}.png`,s.target="_blank",s.click()}),v.appendChild($),v.appendChild(d),a.addEventListener("load",()=>{l.remove(),a.style.display="block",o.appendChild(v)}),a.addEventListener("error",()=>{l.style.animation="none";let i=t("div","","? Failed to load","");i.style.cssText="font-size:11px;color:#e05a5a;padding:8px;text-align:center",o.appendChild(i)}),o.addEventListener("click",()=>{if(a.complete&&a.naturalWidth)j(e)}),a.src=e,o}return f.addEventListener("click",async()=>{let e=c.value.trim();if(!e){g.textContent="Please enter a prompt before generating.",g.className="pf-status error",c.focus();return}let r=parseInt(m.value,10),n=b.value,o=u.value;f.disabled=!0,g.className="pf-status",g.textContent=`Generating ${r} image${r>1?"s":""}?`,E.style.display="block";let l=Date.now(),a=Array.from({length:r},(i,s)=>D(e,o,n,l+s));[...a.map((i,s)=>T(i,e,s))].reverse().forEach((i)=>h.insertBefore(i,h.firstChild));let d=(await Promise.allSettled(a.map((i)=>new Promise((s,F)=>{let M=new Image;M.onload=()=>s(),M.onerror=()=>F(),M.src=i})))).filter((i)=>i.status==="fulfilled").length;f.disabled=!1,g.className="pf-status"+(d===0?" error":""),g.textContent=d===r?`? ${r} image${r>1?"s":""} generated.`:d===0?"Generation failed. Check your connection.":`${d} succeeded, ${r-d} failed.`,h.scrollIntoView({behavior:"smooth",block:"start"})}),c.addEventListener("keydown",(e)=>{if(e.key==="Enter"&&!e.shiftKey)e.preventDefault(),f.click()}),()=>{p.remove(),x.destroy()}}export{H as setup};
