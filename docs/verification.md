# Verification

## November 11, 2026 — résumé update

The downloadable DOCX was replaced with the November 11 user-supplied résumé. Its SHA-256 hash matches the source file. The outdated public PDF was removed. The experience timeline now separates the senior and prior Incedo roles, with achievements and dates sourced from the new résumé. The October 1 promotion date comes from the user's direct update.

## November 2, 2026 — monochrome revision

Replaced the blue palette with black surfaces, white highlights, and grey secondary tones throughout the page, project diagrams, icon, and social artwork. Removed the Three.js scene, SVG sphere fallbacks, WebGL probing, and unused 3D dependencies. The remaining background is a faint CSS parallax grid with pause and reduced-motion support.

TypeScript, ESLint, production build, and static export verification passed. Browser inspection confirmed a black `rgb(8, 8, 8)` background, white `#f5f5f5` accent, zero canvas elements, and no horizontal overflow in the preview. The earlier 3D-specific checks below document the previous implementation and no longer describe the current background.

## Earlier validation

Verified October 31, 2026 with the bundled Node.js 24.22.1 runtime.

## Completed checks

| Check                       | Result                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| TypeScript strict checking  | Passed, including the production build's type check                                                                                               |
| ESLint                      | Passed for application code, components, content, and Next configuration                                                                          |
| Production build            | Passed; home, custom 404, icon, robots, and sitemap exported statically                                                                           |
| Export integrity            | Passed: 22 local assets and deep links, one H1, document language, metadata, Person JSON-LD, social preview, résumé archive, and deployment files |
| Responsive DOM checks       | Passed at 320×740, 390×844, 768×1024, 1024×900, and 1440×900; no horizontal overflow                                                              |
| Browser inspection          | Reviewed desktop, tablet, and mobile layouts using the in-app browser                                                                             |
| Navigation                  | Section deep links and active state checked; mobile focus loop, Escape, focus restoration, and scroll locking checked                             |
| Project disclosures         | Native engineering notes opened and their content verified                                                                                        |
| Full-page parallax          | One viewport-sized fixed background remains behind all sections, including Contact; grid/depth values continue changing beyond the hero           |
| Pause and resume            | Pause removes the canvas and freezes CSS layers; resume restores the canvas; static fallback verified                                             |
| Browser runtime errors      | No error-level console messages in the checked page                                                                                               |
| Résumé fidelity             | SHA-256 hashes of both published résumé copies match the original files supplied by the user                                                      |
| Production dependency audit | `npm audit --omit=dev` reported zero vulnerabilities                                                                                              |

Text colors were inspected using computed browser styles. Low-contrast metadata found in the first review was adjusted. This is a focused contrast check, not a formal WCAG certification.

The production HTTP smoke check also passed: home, robots, sitemap, the social image, and the DOCX return 200 with appropriate content types; an unknown route returns the custom 404. Prettier and `git diff --check` passed.

## Performance decisions

All content renders to static HTML. Fonts are self-hosted and preloaded through Next.js. The decorative 3D code is lazy-loaded after text rendering. Two depth layers use four draw calls, a capped DPR, reduced opacity and 20fps rendering on small screens, and no texture, model, or postprocessing downloads. CSS parallax uses transforms and settles when input stops. Background motion stops while the document is hidden. The pause control and reduced-motion preference disable the animated scene.

## Limits

- Lighthouse was not run; no numerical Lighthouse score is claimed.
- Reduced-motion and WebGL fallback paths are implemented. The fallback was verified through the pause control; an OS-level reduced-motion setting and actual GPU context failure were not separately simulated.
- The browser reports an upstream Three.js Clock deprecation warning from the current React Three Fiber/Drei stack. No runtime error accompanies it.
- The full npm audit reports 16 moderate findings in the development lint dependency chain. Compatible fixes were applied; npm's remaining suggested fix requires breaking tooling downgrades, so it was not forced. Production dependencies audit clean.
- LinkedIn contents were inaccessible. Its link is confirmed by the user brief and latest résumé. Public project source was reviewed, but the featured project applications were not independently executed or represented as deployed systems.
- Vercel deployment and the updated GitHub Actions workflow are configured but were not executed remotely. No git push or public deployment was performed.
