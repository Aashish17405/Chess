import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { GameManager } from "./class/gameManager.js";

const app = express();
const port = Number(process.env.PORT ?? 8080);
const frontendOrigin =
  process.env.FRONTEND_ORIGIN ?? "https://chess.dev-aashish.tech";

app.use(
  cors({
    origin: ["http://localhost:5173", frontendOrigin],
  }),
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const server = createServer(app);
const wss = new WebSocketServer({ server, path: "/ws" });
const gameManager = new GameManager();

wss.on("connection", (ws) => {
  gameManager.addUser(ws);

  ws.on("close", () => {
    gameManager.removeUser(ws);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Express + WebSocket server running on http://localhost:${port}`);
});
