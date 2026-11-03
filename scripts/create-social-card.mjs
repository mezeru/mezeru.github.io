// One-time, deterministic social artwork. No screenshot or invented project UI.
// Uses the sharp already supplied by Next.js. Run: node scripts/create-social-card.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const font = (
  await readFile(new URL("../public/fonts/geist-latin-wght-normal.woff2", import.meta.url))
).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><style>@font-face{font-family:Geist;src:url(data:font/woff2;base64,${font})}text{font-family:Geist,Arial,sans-serif}</style><radialGradient id="bg"><stop stop-color="#262626"/><stop offset="1" stop-color="#121212"/></radialGradient></defs><rect width="1200" height="630" fill="#121212"/><text x="74" y="83" fill="#dbdbdb" font-size="23">Yash Chaudhari<tspan fill="#c3c3c3">.</tspan></text><text x="74" y="180" fill="#a4a4a4" font-size="13" letter-spacing="2">SOFTWARE ENGINEER / FULL-STACK &amp; SYSTEMS</text><text x="70" y="285" fill="#eeeeee" font-size="79" letter-spacing="-4">Thoughtful software.</text><text x="70" y="382" fill="#c3c3c3" font-size="79" letter-spacing="-4">At every layer.</text><path d="M74 474H1126" stroke="#ffffff1a"/><text x="74" y="529" fill="#a3a3a3" font-size="17">Full-stack engineering · Backend systems · Applied AI</text><text x="74" y="574" fill="#767676" font-size="13">ruizo.is-a.dev</text></svg>`;
await writeFile(
  new URL("../public/social-card.png", import.meta.url),
  await sharp(Buffer.from(svg)).png().toBuffer(),
);
console.log("Created public/social-card.png (1200 × 630)");
