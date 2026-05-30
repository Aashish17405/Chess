import type WebSocket from "ws";
import { INIT_GAME, MOVE } from "./messages.js";
import { Game } from "./game.js";
import type {
  InitGamePayload,
  MovePayload,
  PlayerIdentity,
} from "../types/index.js";

export class GameManager {
  private games: Game[];
  private pendingUser: WebSocket | null;
  private pendingPlayer: PlayerIdentity | null;
  private users: WebSocket[];
  private gamesBySocket: Map<WebSocket, Game>;

  constructor() {
    this.games = [];
    this.pendingUser = null;
    this.pendingPlayer = null;
    this.users = [];
    this.gamesBySocket = new Map();
  }

  addUser(socket: WebSocket) {
    this.users.push(socket);
    this.addHandler(socket);
  }

  removeUser(socket: WebSocket) {
    this.users = this.users.filter((user) => user !== socket);

    if (this.pendingUser === socket) {
      this.pendingUser = null;
      this.pendingPlayer = null;
    }

    this.gamesBySocket.delete(socket);
  }

  private addHandler(socket: WebSocket) {
    socket.on("message", (data) => {
      const message = JSON.parse(data.toString());
      if (message.type === INIT_GAME) {
        const payload = (message.payload ?? {}) as InitGamePayload;
        const player = payload.player ?? null;

        if (this.pendingUser) {
          void this.startGame(
            this.pendingUser,
            this.pendingPlayer,
            socket,
            player,
          );
          this.pendingUser = null;
          this.pendingPlayer = null;
        } else {
          this.pendingUser = socket;
          this.pendingPlayer = player;
        }
      }

      if (message.type === MOVE || message.type === "move") {
        const game = this.gamesBySocket.get(socket);

        if (game) {
          void game.makeMove(socket, message.payload.move as MovePayload);
        }
      }
    });
  }

  private async startGame(
    player1Socket: WebSocket,
    player1: PlayerIdentity | null,
    player2Socket: WebSocket,
    player2: PlayerIdentity | null,
  ) {
    const game = await Game.create({
      player1Socket,
      player2Socket,
      player1,
      player2,
    });

    this.games.push(game);
    this.gamesBySocket.set(player1Socket, game);
    this.gamesBySocket.set(player2Socket, game);
  }
}
