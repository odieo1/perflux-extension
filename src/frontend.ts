export function setup(ctx: any) {

  const tab = ctx.ui.registerDrawerTab({
    id: "perflux_main",
    title: "PerFlux",
    shortName: "PerFlux",
    description: "Generate images with Pollinations AI",
    keywords: ["image", "generate", "pollinations", "perflux", "art", "anime"],
    headerTitle: "PerFlux",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
      <path d="M6 14 Q10 4 14 14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>`,
  });

  const style = document.createElement("style");
  style.textContent = `
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
  `;
  tab.root.appendChild(style);

  const root = document.createElement("div");
  root.className = "pf-root";

  function el(tag: string, cls: string, text: string, html: string): any {
    const e: any = document.createElement(tag);
    if (cls)  e.className   = cls;
    if (text) e.textContent = text;
    if (html) e.innerHTML   = html;
    return e;
  }

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  // ── Pending promise map for backend responses ─────────────────────────────
  const pending = new Map<string, { resolve: (v: any) => void; reject: (e: any) => void }>();

  ctx.onBackendMessage((payload: any) => {
    if (payload.type === "perflux_key_saved") {
      keyBanner.classList.remove("visible");
      keyForm.classList.remove("visible");
      return;
    }
    if (payload.id && pending.has(payload.id)) {
      const { resolve, reject } = pending.get(payload.id)!;
      pending.delete(payload.id);
      if (payload.error) reject(new Error(payload.error));
      else resolve(payload.dataUrl);
    }
  });

  function requestImage(prompt: string, neg: string, style: string, seed: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const id = `pf_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      pending.set(id, { resolve, reject });
      ctx.sendToBackend({ type: "perflux_generate", id, prompt, neg, style, seed });
    });
  }

  // ── Top row: title + settings button ─────────────────────────────────────
  const topRow = el("div", "pf-top-row", "", "");
  topRow.appendChild(el("div", "pf-title", "PerFlux", ""));
  const settingsBtn = el("button", "pf-settings-btn", "", `
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
    </svg> API Key`);
  settingsBtn.setAttribute("aria-label", "Set API key");
  topRow.appendChild(settingsBtn);

  // ── Key missing banner ────────────────────────────────────────────────────
  const keyBanner = el("div", "pf-key-banner", "", "");
  keyBanner.innerHTML = `<span>No Pollinations API key set — images won't generate.</span>`;
  const keySetBtn = el("button", "pf-key-set-btn", "Set Key", "");
  keyBanner.appendChild(keySetBtn);
  keyBanner.classList.add("visible");

  // ── Inline key form ───────────────────────────────────────────────────────
  const keyForm = el("div", "pf-key-form", "", "");
  keyForm.appendChild(el("div", "pf-label", "Pollinations SK Key", ""));
  const keyInput: any = el("input", "pf-key-input", "", "");
  keyInput.type = "password";
  keyInput.placeholder = "sk_xxxxxxxxxxxxxxxx";
  keyInput.setAttribute("aria-label", "Pollinations API key");
  const keySubmit = el("button", "pf-key-save", "Save Key", "");
  keyForm.appendChild(keyInput);
  keyForm.appendChild(keySubmit);

  function toggleKeyForm() {
    const isVisible = keyForm.classList.contains("visible");
    keyForm.classList.toggle("visible");
    if (!isVisible) setTimeout(() => keyInput.focus(), 50);
  }

  function saveKey() {
    const key = keyInput.value.trim();
    if (!key) return;
    ctx.sendToBackend({ type: "perflux_set_key", key });
    keyInput.value = "";
    keyForm.classList.remove("visible");
    keyBanner.classList.remove("visible");
  }

  settingsBtn.addEventListener("click", toggleKeyForm);
  keySetBtn.addEventListener("click", toggleKeyForm);
  keySubmit.addEventListener("click", saveKey);
  keyInput.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") saveKey();
  });

  // ── UI Elements ───────────────────────────────────────────────────────────
  const promptLabel = el("div", "pf-label", "Prompt", "");
  const promptTA: any = el("textarea", "pf-textarea pf-prompt", "", "");
  promptTA.placeholder = "Describe the image you want to generate… be detailed!";
  promptTA.rows = 5;
  promptTA.setAttribute("aria-label", "Prompt");

  const negLabel = el("div", "pf-label", "Negative Prompt", "");
  const negTA: any = el("textarea", "pf-textarea pf-neg", "", "");
  negTA.placeholder = "What to avoid… (e.g. blurry, low quality, extra limbs)";
  negTA.rows = 2;
  negTA.setAttribute("aria-label", "Negative prompt");

  const countWrap = el("div", "pf-sel-wrap", "", "");
  countWrap.appendChild(el("div", "pf-label", "Images", ""));
  const countSel: any = el("select", "pf-select", "", "");
  countSel.setAttribute("aria-label", "Number of images");
  for (let i = 1; i <= 6; i++) {
    const o: any = el("option", "", String(i), "");
    o.value = String(i); o.selected = (i === 1);
    countSel.appendChild(o);
  }
  countWrap.appendChild(countSel);

  const styleWrap = el("div", "pf-sel-wrap", "", "");
  styleWrap.appendChild(el("div", "pf-label", "Style", ""));
  const styleSel: any = el("select", "pf-select", "", "");
  styleSel.setAttribute("aria-label", "Image style");
  [["ultra-realistic", "Ultra-Realistic"], ["anime", "Anime"]].forEach(([v, t]) => {
    const o: any = el("option", "", t, "");
    o.value = v; styleSel.appendChild(o);
  });
  styleWrap.appendChild(styleSel);

  const row = el("div", "pf-row", "", "");
  row.appendChild(countWrap); row.appendChild(styleWrap);

  const genBtn: any = el("button", "pf-btn", "", `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83
               M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>&nbsp;Generate`);
  genBtn.setAttribute("aria-label", "Generate images");

  const statusEl = el("div", "pf-status", "", "");
  const divider  = el("hr", "pf-divider", "", "");
  const galHdr   = el("div", "pf-gal-hdr", "Generated Images", "");
  galHdr.style.display = "none";
  const gallery  = el("div", "pf-gallery", "", "");

  [topRow, keyBanner, keyForm, promptLabel, promptTA, negLabel, negTA, row,
   genBtn, statusEl, divider, galHdr, gallery]
    .forEach((n: any) => root.appendChild(n));
  tab.root.appendChild(root);

  // ── Lightbox ──────────────────────────────────────────────────────────────
  const lb = el("div", "pf-lightbox", "", "");
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-label", "Image lightbox");
  const lbClose = el("button", "pf-lb-close", "", "&times;");
  lbClose.setAttribute("aria-label", "Close lightbox");
  const lbImg: any = el("img", "", "", "");
  lbImg.alt = "Full size preview";
  lb.appendChild(lbClose); lb.appendChild(lbImg);
  document.body.appendChild(lb);

  const openLB  = (src: string) => { lbImg.src = src; lb.classList.add("open"); };
  const closeLB = () => lb.classList.remove("open");
  lbClose.addEventListener("click", (e: any) => { e.stopPropagation(); closeLB(); });
  lb.addEventListener("click", closeLB);
  document.addEventListener("keydown", (e: any) => { if (e.key === "Escape") closeLB(); });

  // ── Card factory ──────────────────────────────────────────────────────────
  function makeCard(dataUrl: string, promptText: string, idx: number): HTMLElement {
    const card = el("div", "pf-card", "", "");
    const img: any = el("img", "", "", "");
    img.alt = `Generated image ${idx + 1}`;
    img.src = dataUrl;
    card.appendChild(img);

    const overlay = el("div", "pf-overlay", "", "");
    const lbl = el("span", "pf-card-lbl",
      promptText.slice(0, 40) + (promptText.length > 40 ? "…" : ""), "");
    const dlBtn = el("button", "pf-dl", "", `
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="white" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>`);
    dlBtn.setAttribute("aria-label", "Download image");
    dlBtn.addEventListener("click", (e: any) => {
      e.stopPropagation();
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `perflux-${Date.now()}-${idx + 1}.png`;
      a.click();
    });
    overlay.appendChild(lbl); overlay.appendChild(dlBtn);
    card.appendChild(overlay);
    card.addEventListener("click", () => openLB(dataUrl));
    return card;
  }

  // ── Skeleton card placeholder ─────────────────────────────────────────────
  function makeSkeleton(): HTMLElement {
    const card = el("div", "pf-card", "", "");
    card.appendChild(el("div", "pf-skeleton", "", ""));
    return card;
  }

  // ── Generate handler ──────────────────────────────────────────────────────
  genBtn.addEventListener("click", async () => {
    const promptVal = promptTA.value.trim();
    if (!promptVal) {
      statusEl.textContent = "Please enter a prompt before generating.";
      statusEl.className = "pf-status error"; promptTA.focus(); return;
    }
    const count = parseInt(countSel.value, 10);
    const style = styleSel.value;
    const neg   = negTA.value;

    genBtn.disabled = true;
    statusEl.className = "pf-status";
    statusEl.textContent = `Generating ${count} image${count > 1 ? "s" : ""}…`;
    galHdr.style.display = "block";

    const skeletons: HTMLElement[] = [];
    for (let i = 0; i < count; i++) {
      const sk = makeSkeleton();
      skeletons.unshift(sk);
      gallery.insertBefore(sk, gallery.firstChild);
    }
    gallery.scrollIntoView({ behavior: "smooth", block: "start" });

    const seed0 = Date.now();
    let ok = 0;

    const tasks = Array.from({ length: count }, (_, i) =>
      sleep(i * 800).then(async () => {
        try {
          const dataUrl = await requestImage(promptVal, neg, style, seed0 + i * 1000);
          const card = makeCard(dataUrl, promptVal, i);
          const sk = skeletons[i];
          if (sk && sk.parentNode) sk.parentNode.replaceChild(card, sk);
          ok++;
          statusEl.textContent = `✓ ${ok} / ${count} complete…`;
        } catch (err: any) {
          const sk = skeletons[i];
          if (sk) {
            const errEl = el("div", "", "⚠ Failed", "");
            errEl.style.cssText = "font-size:11px;color:#e05a5a;padding:12px;text-align:center;aspect-ratio:1;display:flex;align-items:center;justify-content:center;";
            if (sk.parentNode) sk.parentNode.replaceChild(errEl, sk);
          }
        }
      })
    );

    await Promise.all(tasks);

    genBtn.disabled = false;
    statusEl.className = "pf-status" + (ok === 0 ? " error" : "");
    statusEl.textContent = ok === count
      ? `✓ ${count} image${count > 1 ? "s" : ""} generated.`
      : ok === 0
        ? "All failed — check your API key or try again."
        : `${ok} of ${count} succeeded.`;
  });

  promptTA.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); genBtn.click(); }
  });

  return () => { lb.remove(); tab.destroy(); };
}

(window as any).setup = setup;