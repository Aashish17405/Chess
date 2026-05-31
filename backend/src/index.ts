import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import type { IncomingMessage } from "http";
import { GameManager } from "./class/gameManager.js";

const app = express();
const port = Number(process.env.PORT ?? 8080);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const server = createServer(app);
const wss = new WebSocketServer({ noServer: true });
const gameManager = new GameManager();

const allowedSocketPaths = new Set(["/", "/ws", "/socket"]);

server.on("upgrade", (request: IncomingMessage, socket, head) => {
  const requestUrl = request.url
    ? new URL(request.url, "http://localhost")
    : null;
  const pathname = requestUrl?.pathname ?? "/";

  if (!allowedSocketPaths.has(pathname)) {
    socket.destroy();
    return;
  }

  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

wss.on("connection", (ws) => {
  gameManager.addUser(ws);

  ws.on("close", () => {
    gameManager.removeUser(ws);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Express + WebSocket server running on http://localhost:${port}`);
});
