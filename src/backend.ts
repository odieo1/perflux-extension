declare const spindle: import('lumiverse-spindle-types').SpindleAPI

const BASE = "https://gen.pollinations.ai/image/"

function buildUrl(prompt: string, neg: string, style: string, seed: number): string {
  const suffix = style === "anime"
    ? ", anime style, vibrant anime illustration, cel shaded"
    : ", ultra-realistic, photorealistic, 8k uhd, highly detailed"
  const p = new URLSearchParams({
    model:  "flux",
    width:  "768",
    height: "768",
    seed:   String(seed),
    nologo: "true",
    key:    process.env.POLLINATIONS_API_KEY ?? "",
  })
  if (neg.trim()) p.set("negative_prompt", neg.trim())
  return `${BASE}${encodeURIComponent(prompt.trim() + suffix)}?${p}`
}

spindle.on("frontend_message", async (payload: any) => {
  if (payload.type !== "perflux_generate") return

  const { id, prompt, neg, style, seed } = payload

  try {
    const url = buildUrl(prompt, neg ?? "", style ?? "ultra-realistic", seed ?? Date.now())

    const response = await spindle.corsProxy.fetch(url, {
      method: "GET",
      headers: { "Accept": "image/*" },
    })

    if (!response.ok) {
      spindle.sendToFrontend({ id, error: `HTTP ${response.status}: ${response.statusText}` })
      return
    }

    const buffer = await response.arrayBuffer()
    const bytes = new Uint8Array(buffer)
    let binary = ""
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
    const b64 = btoa(binary)
    const contentType = response.headers.get("content-type") ?? "image/png"
    const dataUrl = `data:${contentType};base64,${b64}`

    spindle.sendToFrontend({ id, dataUrl })

  } catch (err: any) {
    spindle.sendToFrontend({ id, error: err?.message ?? "Unknown error" })
  }
})

spindle.log.info("PerFlux backend ready")
