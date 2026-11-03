import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep } from "node:path";

const root = resolve("out");
const html = await readFile(resolve(root, "index.html"), "utf8");
assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, "Exactly one page H1");
assert.match(html, /<html[^>]+lang="en"/, "Document language");
assert.match(html, /name="description" content="[^"]+"/, "SEO description");
assert.match(html, /rel="canonical" href="https:\/\//, "HTTPS canonical URL");
assert.match(html, /property="og:image"/, "Social preview metadata");

const schema = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
assert.ok(schema, "Structured data is rendered in the static HTML");
assert.equal(JSON.parse(schema[1])["@type"], "Person");

let checked = 0;
for (const reference of new Set(
  [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]),
)) {
  if (reference.startsWith("#")) {
    assert.ok(html.includes(`id="${reference.slice(1)}"`), `Missing anchor target: ${reference}`);
  } else if (reference.startsWith("/")) {
    const pathname = decodeURIComponent(reference.split(/[?#]/)[0]);
    let target = resolve(root, `.${pathname}`);
    assert.ok(
      target === root || target.startsWith(root + sep),
      "Local reference stays inside export",
    );
    const info = await stat(target);
    if (info.isDirectory()) target = resolve(target, "index.html");
    assert.ok((await stat(target)).isFile(), `Missing local asset: ${reference}`);
  } else continue;
  checked++;
}

for (const file of ["404.html", "robots.txt", "sitemap.xml", "social-card.png", ".nojekyll"]) {
  assert.ok((await stat(resolve(root, file))).isFile(), `Missing deployment file: ${file}`);
}
const resume = await readFile(resolve(root, "Yash-Chaudhari-Resume.docx"));
assert.equal(
  resume.subarray(0, 2).toString(),
  "PK",
  "Résumé is a DOCX archive, not an HTML error page",
);
console.log(
  `Static export verified: ${checked} local references and anchors, metadata, social preview, résumé, and deployment files.`,
);
