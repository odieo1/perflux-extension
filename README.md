```
██████╗ ███████╗██████╗ ███████╗██╗     ██╗   ██╗██╗  ██╗
██╔══██╗██╔════╝██╔══██╗██╔════╝██║     ██║   ██║╚██╗██╔╝
██████╔╝█████╗  ██████╔╝█████╗  ██║     ██║   ██║ ╚███╔╝ 
██╔═══╝ ██╔══╝  ██╔══██╗██╔══╝  ██║     ██║   ██║ ██╔██╗ 
██║     ███████╗██║  ██║██║     ███████╗╚██████╔╝██╔╝ ██╗
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝
  ─────────────────────────────────────────────────────────
        A Lumiverse Spindle Extension  •  by odieo1
  ─────────────────────────────────────────────────────────
```

> **Pollinations-powered image generation inside Lumiverse — styled like a Perchance generator.**  
> No API key. No account. Just prompts and pixels.

---

## What It Does

PerFlux adds a dedicated **PerFlux** tab to Lumiverse's sidebar drawer. Type a prompt, pick
a style and batch size, hit Generate — and watch your images materialize in a responsive
gallery grid at the bottom of the tab, newest first.

---

## Features

- **Large prompt box** — full-height textarea for detailed prompts; press `Enter` to generate, `Shift+Enter` for a newline
- **Negative prompt box** — tell the model what to leave out (e.g. *blurry, extra limbs, low quality*)
- **Batch size dropdown** — generate 1 to 6 images in a single click
- **Style selector** — choose between:
  - `Ultra-Realistic` — photorealistic, 8K UHD output via Flux
  - `Anime` — vibrant cel-shaded anime illustration style
- **Perchance-style gallery** — responsive grid, newest images appear at the top
- **Shimmer skeleton loaders** — smooth loading placeholders while images render
- **Lightbox viewer** — click any image for a full-screen preview; press `Esc` or click outside to close
- **Download button** — hover any image and click the download icon to save it
- **Theme-aware** — inherits all Lumiverse CSS variables (accent colour, dark/light mode, surfaces)
- **Zero permissions required** — uses only the free `registerDrawerTab` API

---

## Requirements

| Requirement | Version |
|---|---|
| Lumiverse | ≥ 1.0.0 |
| Bun | Latest stable |
| Node (optional) | ≥ 18 (Bun preferred) |

---

## Project Structure

```
perflux-extension/
├── spindle.json          ← Spindle manifest (name, identifier, entry point)
├── package.json          ← Build scripts
├── tsconfig.json         ← TypeScript config
├── README.md             ← You are here
└── src/
    └── frontend.ts       ← All extension logic (UI + Pollinations integration)
```

After building, Bun outputs:

```
perflux-extension/
└── dist/
    └── frontend.js       ← Compiled bundle loaded by Spindle
```

---

## Installation

### Step 1 — Clone or download

```bash
git clone https://github.com/odieo1/perflux-extension
cd perflux-extension
```

### Step 2 — Install dependencies

```bash
bun install
```

### Step 3 — Build

```bash
bun run build
```

This compiles `src/frontend.ts` into `dist/frontend.js` — the file Spindle actually loads.

### Step 4 — Push to GitHub

```bash
git add .
git commit -m "build PerFlux"
git push
```

### Step 5 — Install into Lumiverse

Open your Lumiverse instance in the browser, navigate to **Extensions → Install**, and paste:

```
https://github.com/odieo1/perflux-extension
```

The **PerFlux** tab will appear in the sidebar drawer immediately after installation.

---

## How Pollinations Works

Images are fetched directly from:

```
https://image.pollinations.ai/prompt/{encoded_prompt}
```

with the following parameters:

| Parameter | Value | Notes |
|---|---|---|
| `model` | `flux` | Best quality model on Pollinations |
| `width` | `768` | Square output |
| `height` | `768` | Square output |
| `seed` | `Date.now() + index` | Unique per image so batch results differ |
| `nologo` | `true` | Removes Pollinations watermark |
| `negative_prompt` | *(user input)* | Only sent if the field is filled |

Style modifiers are appended directly to the prompt text before encoding:

- **Ultra-Realistic:** `, ultra-realistic, photorealistic, 8k uhd, highly detailed`
- **Anime:** `, anime style, vibrant anime illustration, cel shaded`

Pollinations is a **free, open-source** image generation service — no account or API key is required.

---

## Development

To watch for changes and rebuild automatically during development:

```bash
bun run dev
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `bun install` fails with JSON parse error | Check `package.json` for a missing closing `}` |
| `Script not found "build"` | Same as above — `package.json` is malformed |
| Images show "⚠ Failed to load" | Check your internet connection; Pollinations may be temporarily rate-limiting |
| Tab doesn't appear after install | Make sure `bun run build` completed and `dist/frontend.js` exists before pushing |
| Lightbox doesn't open | Image may still be loading — wait for the shimmer to finish |

---

## License

MIT — do whatever you want with it.

---

*Built for [Lumiverse](https://lumiverse.chat) • Powered by [Pollinations AI](https://pollinations.ai)*
