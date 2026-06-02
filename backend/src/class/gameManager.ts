import type WebSocket from "ws";
import { ABANDON_GAME, GAME_STATE, INIT_GAME, MOVE, RESUME_GAME } from "./messages.js";
import { Game } from "./game.js";
import type {
  InitGamePayload,
  MovePayload,
  ResumeGamePayload,
  PlayerIdentity,
} from "../types/index.js";

export class GameManager {
  private games: Game[];
  private pendingUser: WebSocket | null;
  private pendingPlayer: PlayerIdentity | null;
  private users: WebSocket[];
  private gamesBySocket: Map<WebSocket, Game>;
  private gamesById: Map<string, Game>;

  constructor() {
    this.games = [];
    this.pendingUser = null;
    this.pendingPlayer = null;
    this.users = [];
    this.gamesBySocket = new Map();
    this.gamesById = new Map();
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
        const gameMode = payload.gameMode ?? "multiplayer";

        if (gameMode === "single") {
          const aiPlayer: PlayerIdentity = {
            userId: "ai-opponent",
            displayName: "AI Opponent",
            email: "ai@chess.app",
          };
          void this.startGame(socket, player, null, aiPlayer);
        } else {
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
      }

      if (message.type === RESUME_GAME) {
        const payload = message.payload as ResumeGamePayload | undefined;

        if (!payload?.gameId) {
          return;
        }

        void this.resumeGame(socket, payload);
      }

      if (message.type === ABANDON_GAME) {
        const game = this.gamesBySocket.get(socket);

        if (game) {
          void game.abandonGame(socket);
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
    player2Socket: WebSocket | null,
    player2: PlayerIdentity | null,
  ) {
    const game = await Game.create({
      player1Socket,
      player2Socket,
      player1,
      player2,
    });

    this.games.push(game);
    this.gamesById.set(game.gameId, game);
    this.gamesBySocket.set(player1Socket, game);
    if (player2Socket) {
      this.gamesBySocket.set(player2Socket, game);
    }
  }

  private async resumeGame(socket: WebSocket, payload: ResumeGamePayload) {
    const existingGame = this.gamesById.get(payload.gameId);

    if (existingGame) {
      const playerColor = existingGame.rebindPlayer(
        socket,
        payload.player ?? null,
      );
      this.gamesBySocket.set(socket, existingGame);

      socket.send(
        JSON.stringify({
          type: GAME_STATE,
          payload: {
            ...existingGame.getSnapshot(),
            playerColor,
          },
        }),
      );
      return;
    }

    const snapshot = await Game.loadSnapshot(payload.gameId);

    if (!snapshot) {
      socket.send(
        JSON.stringify({
          type: GAME_STATE,
          payload: {
            gameId: payload.gameId,
            status: "WAITING",
            winnerColor: null,
            currentFen: "start",
            currentTurn: "white",
            startedAt: null,
            endedAt: null,
            resultReason: null,
            moves: [],
            playerColor: null,
          },
        }),
      );
      return;
    }

    socket.send(
      JSON.stringify({
        type: GAME_STATE,
        payload: {
          ...snapshot,
          playerColor: null,
        },
      }),
    );
  }
}
