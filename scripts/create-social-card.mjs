// One-time, deterministic social artwork. No screenshot or invented project UI.
// Uses the sharp already supplied by Next.js. Run: node scripts/create-social-card.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const font = (
  await readFile(new URL("../public/fonts/geist-latin-wght-normal.woff2", import.meta.url))
).toString("base64");
const points = Array.from({ length: 26 }, (_, i) => {
  const angle = i * 2.39996;
  const r = Math.sqrt(i / 26) * 230;
  return [930 + Math.cos(angle) * r, 315 + Math.sin(angle) * r];
});
const edges = points
  .flatMap(([x1, y1], i) =>
    points
      .slice(i + 1)
      .filter(([x2, y2]) => Math.hypot(x2 - x1, y2 - y1) < 145)
      .map(([x2, y2]) => `<path d="M${x1} ${y1}L${x2} ${y2}"/>`),
  )
  .join("");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><style>@font-face{font-family:Geist;src:url(data:font/woff2;base64,${font})}text{font-family:Geist,Arial,sans-serif}</style><radialGradient id="bg"><stop stop-color="#1c2836"/><stop offset="1" stop-color="#101214"/></radialGradient></defs><rect width="1200" height="630" fill="#101214"/><circle cx="930" cy="315" r="350" fill="url(#bg)"/><g fill="none" stroke="#86a9d0" stroke-width=".8" opacity=".3">${edges}</g><g fill="#a6c7ee" opacity=".8">${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5"/>`).join("")}</g><text x="74" y="83" fill="#d7dce2" font-size="23">Yash Chaudhari<tspan fill="#a6c7ee">.</tspan></text><text x="74" y="180" fill="#95a6b9" font-size="13" letter-spacing="2">SOFTWARE ENGINEER / FULL-STACK &amp; SYSTEMS</text><text x="70" y="285" fill="#eeeee9" font-size="79" letter-spacing="-4">Thoughtful software.</text><text x="70" y="382" fill="#a6c7ee" font-size="79" letter-spacing="-4">At every layer.</text><path d="M74 474H1126" stroke="#ffffff1a"/><text x="74" y="529" fill="#98a4b3" font-size="17">Full-stack engineering · Backend systems · Applied AI</text><text x="74" y="574" fill="#67788b" font-size="13">ruizo.is-a.dev</text></svg>`;
await writeFile(
  new URL("../public/social-card.png", import.meta.url),
  await sharp(Buffer.from(svg)).png().toBuffer(),
);
console.log("Created public/social-card.png (1200 × 630)");
