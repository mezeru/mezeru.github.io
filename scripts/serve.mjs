// Preview the exact static export without installing a separate web server.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT ?? 3000);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
    let target = resolve(root, `.${pathname}`);
    if (target !== root && !target.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end();
      return;
    }
    let code = 200;
    try {
      const info = await stat(target);
      if (info.isDirectory()) target = resolve(target, "index.html");
    } catch {
      try {
        await stat(`${target}.html`);
        target += ".html";
      } catch {
        target = resolve(root, "404.html");
        code = 404;
      }
    }
    const body = await readFile(target);
    response.writeHead(code, {
      "Content-Type": mime[extname(target)] ?? "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(500).end("Build the portfolio with npm run build before previewing.");
  }
});
server.listen(port, "127.0.0.1", () => console.log(`Portfolio preview: http://localhost:${port}`));
