# Yash Chaudhari portfolio

A custom, dark-first engineering portfolio built with Next.js App Router, React, strict TypeScript, Tailwind CSS, React Three Fiber, Drei, Three.js, Motion, and Lucide.

## Run locally

Use Node.js 24 LTS (see `.nvmrc`) and npm 10.5.1 or newer.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No API keys, database, or environment variables are needed. Fonts and visual assets are local; the page does not fetch career information at runtime.

```sh
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run verify:export
npm start
```

`build` creates the static production site in `out/`. `start` serves that exact export on port 3000, including the custom 404 page. Stop the development server first, or set `PORT` to another port. This project uses `output: "export"`; `next start` is intentionally not used.

TypeScript 6 and ESLint 9 are retained because the current Next.js lint plugin chain does not yet support TypeScript 7 / ESLint 10 together. The lockfile records the tested dependency versions.

## Structure

```text
app/                   Server-rendered page, metadata, fonts, errors, CSS
components/            Navigation, motion, lazy 3D scene, architecture sketches
content/portfolio.ts   Career, projects, skills, contact, canonical URL
public/                Résumé files, social image, licensed local fonts
scripts/serve.mjs      Dependency-free static production preview
scripts/create-social-card.mjs  Deterministic social-card artwork
docs/content-audit.md  Source provenance, conflicts, and content limits
docs/verification.md   Checks performed and verification limits
legacy/portfolio/     Preserved original Parcel portfolio and assets
```

## Content and résumé

Edit `content/portfolio.ts` to maintain all professional information. The page is statically rendered; content changes require a new build.

The primary download is the exact latest user-supplied `Yash_Chaudhari_Resume.docx` (August 13, 2026), copied to `public/Yash-Chaudhari-Resume.docx`. The existing August 10 PDF is also preserved at `/Yash-Chaudhari-Resume.pdf`. To switch to an updated PDF, replace that file and change `person.resume`. Do not overwrite either original source in Downloads.

The latest résumé overrides outdated roles, education status, and LinkedIn links in the original website. See [the content audit](docs/content-audit.md). ThreatLens is explicitly a prototype operating on synthetic events. Architecture visuals are diagrams of documented implementations, not simulated product screenshots.

## Design and motion

Charcoal surfaces, off-white type, a restrained powder-blue accent, and self-hosted variable Geist and Geist Mono establish a consistent editorial rhythm. Numbered section labels, open layouts, fine dividers, and original project diagrams keep the presentation focused on engineering work.

The full-page background combines near and distant network layers with a grid and atmospheric lighting. It is mounted once in the root layout, stays behind every section, and responds to pointer movement and the full document scroll range. The two network layers share a deterministic 74-point topology and use four draw calls, with no external models, textures, lighting, or postprocessing. The scene is dynamically imported after the initial text renders. Demand rendering is capped at 30fps on desktop and 20fps on smaller screens, with DPR limited to 1.5, and stops when the document is hidden. Pointer and scroll motion update refs rather than React state. CSS layers animate only until their input changes have settled. A persistent pause control disables both the canvas and background parallax while preserving the static illustration.

Reduced motion skips loading the 3D scene and disables reveal movement and smooth scrolling. A lightweight SVG and CSS atmosphere remain if WebGL2 is unavailable, a major GPU caveat is detected, or the scene cannot initialize. Text and native disclosures remain readable without JavaScript. Scroll reveals animate visible server-rendered content; they never hide it while waiting for hydration.

The mobile navigation has focus management, Escape dismissal, a keyboard focus loop, and scroll locking. Native `details` elements provide keyboard-accessible experience and project notes. Links have visible focus indicators, and the page includes a skip link, semantic landmarks, a single H1, and labeled controls.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Select the Next.js preset and Node.js 24.
3. Install with `npm ci`, build with `npm run build`, and use `out` as the output directory. These settings are declared in `vercel.json`.
4. Add and verify the custom domain `ruizo.is-a.dev` if retaining the existing address. If using a different domain, update `person.url` before building; it drives canonical, Open Graph, JSON-LD, robots, and sitemap URLs.
5. Verify the domain, résumé downloads, social preview, and professional links in the deployed environment.

No public deployment was performed from this workspace. The supplied configuration is ready for a Vercel import. `vercel.json` adds standard content-type, referrer, framing, and permissions headers.

## Existing GitHub Pages hosting

The original CNAME is preserved. The existing GitHub deployment workflow now uses Node 24, npm, validation, and the Next.js `out/` directory instead of Parcel's `dist/`. It retains the existing `master` push trigger and `deploy` branch. No git push or remote deployment is triggered by local work.

The exported `public/.nojekyll` prevents GitHub Pages from discarding `_next` assets. Vercel and GitHub Pages are alternatives; configure the custom domain only at the host you intend to use.

## Assets and verification

The local font licenses are in `public/fonts/`. The social preview is a checked-in 1200×630 PNG. Regenerate it with `node scripts/create-social-card.mjs` after changing its text or artwork; this helper uses `sharp`, supplied by Next.js.

See [verification results](docs/verification.md) for the actual checks and remaining limitations. Lighthouse scores are not assumed from design choices or a successful build.
