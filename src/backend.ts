declare const spindle: import('lumiverse-spindle-types').SpindleAPI

const BASE = "https://image.pollinations.ai/prompt/"

// Key stored in memory — user sets it once via spindle.prompt.input()
let apiKey = ""

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
    key:    apiKey,
  })
  if (neg.trim()) p.set("negative_prompt", neg.trim())
  return `${BASE}${encodeURIComponent(prompt.trim() + suffix)}?${p}`
}

spindle.onFrontendMessage(async (payload: any, userId: string) => {
  if (payload.type === "perflux_set_key") {
    apiKey = payload.key ?? ""
    spindle.sendToFrontend({ type: "perflux_key_saved" }, userId)
    return
  }

  if (payload.type !== "perflux_generate") return

  const { id, prompt, neg, style, seed } = payload

  if (!apiKey) {
    spindle.sendToFrontend({ id, error: "No API key set. Use the settings button to enter your Pollinations key." }, userId)
    return
  }

  try {
    const url = buildUrl(prompt, neg ?? "", style ?? "ultra-realistic", seed ?? Date.now())
    const response = await spindle.cors(url, { method: "GET", headers: { "Accept": "image/*" } }) as Response

    if (!response.ok) {
      spindle.sendToFrontend({ id, error: `HTTP ${response.status}: ${response.statusText}` }, userId)
      return
    }

    const buffer = await response.arrayBuffer()
    const bytes = new Uint8Array(buffer)
    let binary = ""
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
    const b64 = btoa(binary)
    const contentType = response.headers.get("content-type") ?? "image/png"
    const dataUrl = `data:${contentType};base64,${b64}`

    spindle.sendToFrontend({ id, dataUrl }, userId)

  } catch (err: any) {
    spindle.sendToFrontend({ id, error: err?.message ?? "Unknown error" }, userId)
  }
})

spindle.log.info("PerFlux backend ready")
