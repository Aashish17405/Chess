import { Chess } from "chess.js";
import { randomUUID } from "crypto";
import type WebSocket from "ws";
import { prisma } from "../lib/prisma.js";
import { GAME_OVER, INIT_GAME, INVALID_MOVE, MOVE } from "./messages.js";
import type {
  GameCreateArgs,
  MovePayload,
  PlayerIdentity,
} from "../types/index.js";

export class Game {
  public gameId: string;
  public player1: WebSocket;
  public player2: WebSocket;
  public board: Chess;
  public startTime: Date;
  private moveCount: number;
  private isOver: boolean;
  private persistToDb: boolean;
  private player1Identity: PlayerIdentity | null;
  private player2Identity: PlayerIdentity | null;

  private constructor(args: {
    gameId: string;
    player1Socket: WebSocket;
    player2Socket: WebSocket;
    player1: PlayerIdentity | null;
    player2: PlayerIdentity | null;
    persistToDb: boolean;
  }) {
    this.gameId = args.gameId;
    this.player1 = args.player1Socket;
    this.player2 = args.player2Socket;
    this.board = new Chess();
    this.moveCount = 0;
    this.isOver = false;
    this.persistToDb = args.persistToDb;
    this.startTime = new Date();
    this.player1Identity = args.player1;
    this.player2Identity = args.player2;

    this.player1.send(
      JSON.stringify({
        type: INIT_GAME,
        payload: {
          color: "white",
          gameId: this.gameId,
        },
      }),
    );
    this.player2.send(
      JSON.stringify({
        type: INIT_GAME,
        payload: {
          color: "black",
          gameId: this.gameId,
        },
      }),
    );

    if (!this.persistToDb) {
      console.warn(`Game ${this.gameId} is running without persistence.`);
    }
  }

  static async create(args: GameCreateArgs) {
    let gameId: string = randomUUID();
    let persistToDb = true;

    try {
      const gameRecord = await prisma.game.create({
        data: {
          status: "ACTIVE",
          startedAt: new Date(),
          whitePlayerId: args.player1?.userId ?? null,
          blackPlayerId: args.player2?.userId ?? null,
          createdById: args.player1?.userId ?? args.player2?.userId ?? null,
          updatedById: args.player1?.userId ?? args.player2?.userId ?? null,
        },
      });

      gameId = gameRecord.id;
    } catch (error) {
      persistToDb = false;
      console.error(
        "Falling back to in-memory game because persistence failed:",
        error,
      );
    }

    return new Game({
      gameId,
      player1Socket: args.player1Socket,
      player2Socket: args.player2Socket,
      player1: args.player1,
      player2: args.player2,
      persistToDb,
    });
  }

  private getColorForPlayer(socket: WebSocket): "white" | "black" {
    return socket === this.player1 ? "white" : "black";
  }

  private getIdentityForPlayer(socket: WebSocket): PlayerIdentity | null {
    return socket === this.player1
      ? this.player1Identity
      : this.player2Identity;
  }

  private getGameWinner(): "white" | "black" {
    return this.board.turn() === "w" ? "black" : "white";
  }

  private getGameResultReason(): string {
    if (this.board.isCheckmate()) return "checkmate";
    if (this.board.isStalemate()) return "stalemate";
    if (this.board.isInsufficientMaterial()) return "insufficient_material";
    if (this.board.isThreefoldRepetition()) return "threefold_repetition";
    if (this.board.isDraw()) return "draw";
    return "game_over";
  }

  async makeMove(socket: WebSocket, move: MovePayload) {
    if (this.isOver) {
      return;
    }

    if (this.moveCount % 2 === 0 && socket !== this.player1) {
      console.log("early return 1");
      return;
    }

    if (this.moveCount % 2 === 1 && socket !== this.player2) {
      console.log("early return 2");
      return;
    }

    const fenBefore = this.board.fen();
    const moveResult = this.board.move(move);

    if (!moveResult) {
      socket.send(
        JSON.stringify({
          type: INVALID_MOVE,
          payload: {
            reason: "illegal_move",
            move,
            currentTurn: this.board.turn() === "w" ? "white" : "black",
            yourColor: this.getColorForPlayer(socket),
          },
        }),
      );
      return;
    }

    this.moveCount += 1;

    const fenAfter = this.board.fen();
    const moverIdentity = this.getIdentityForPlayer(socket);
    const moverId = moverIdentity?.userId ?? null;
    const moveNumber = this.moveCount;

    if (this.persistToDb) {
      try {
        await prisma.$transaction([
          prisma.gameMove.create({
            data: {
              gameId: this.gameId,
              moveNumber,
              moverId,
              color:
                this.getColorForPlayer(socket) === "white"
                  ? "WHITE"
                  : "BLACK",
              fromSquare: move.from,
              toSquare: move.to,
              san: moveResult.san,
              uci: `${move.from}${move.to}`,
              fenBefore,
              fenAfter,
              result: this.board.isCheckmate()
                ? "CHECKMATE"
                : this.board.isStalemate()
                  ? "STALEMATE"
                  : this.board.isDraw()
                    ? "DRAW"
                    : this.board.isCheck()
                      ? "CHECK"
                      : "NORMAL",
              createdById: moverId,
              updatedById: moverId,
            },
          }),
          prisma.game.update({
            where: { id: this.gameId },
            data: {
              lastMoveAt: new Date(),
              updatedById: moverId,
            },
          }),
        ]);
      } catch (error) {
        this.persistToDb = false;
        console.error("Move persistence failed; continuing in-memory:", error);
      }
    }

    if (this.board.isGameOver()) {
      this.isOver = true;
      const winner = this.getGameWinner();

      if (this.persistToDb) {
        try {
          await prisma.game.update({
            where: { id: this.gameId },
            data: {
              status: "COMPLETED",
              endedAt: new Date(),
              finalFen: fenAfter,
              winnerColor: winner === "white" ? "WHITE" : "BLACK",
              resultReason: this.getGameResultReason(),
              updatedById: moverId,
            },
          });
        } catch (error) {
          this.persistToDb = false;
          console.error("Game completion persistence failed:", error);
        }
      }

      this.player1.send(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner,
            gameId: this.gameId,
          },
        }),
      );

      this.player2.send(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner,
            gameId: this.gameId,
          },
        }),
      );

      return;
    }

    const opponent = socket === this.player1 ? this.player2 : this.player1;

    opponent.send(
      JSON.stringify({
        type: MOVE,
        payload: move,
      }),
    );
  }
}
