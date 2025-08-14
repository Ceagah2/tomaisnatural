import express from "express";
import { createPageRenderer } from "vite-plugin-ssr/node";
import vite from "vite";

async function startServer() {
  const app = express();

  const viteDevServer = await vite.createServer({
    server: { middlewareMode: "ssr" },
  });
  app.use(viteDevServer.middlewares);

  const renderPage = createPageRenderer({ viteDevServer });

  app.get("*", async (req, res) => {
    const url = req.originalUrl;
    const pageContext = { url };
    const result = await renderPage(pageContext);
    if (!result) return res.status(404).send("Not Found");
    res.status(200).send(result.renderResult.html);
  });

  app.listen(3000);
  console.log("Server running at http://localhost:3000");
}

startServer();
