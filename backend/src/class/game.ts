import { Chess } from "chess.js";
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
  private player1Identity: PlayerIdentity | null;
  private player2Identity: PlayerIdentity | null;

  private constructor(args: {
    gameId: string;
    player1Socket: WebSocket;
    player2Socket: WebSocket;
    player1: PlayerIdentity | null;
    player2: PlayerIdentity | null;
  }) {
    this.gameId = args.gameId;
    this.player1 = args.player1Socket;
    this.player2 = args.player2Socket;
    this.board = new Chess();
    this.moveCount = 0;
    this.isOver = false;
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
  }

  static async create(args: GameCreateArgs) {
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

    return new Game({
      gameId: gameRecord.id,
      player1Socket: args.player1Socket,
      player2Socket: args.player2Socket,
      player1: args.player1,
      player2: args.player2,
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
    console.log("did not early return");

    const fenBefore = this.board.fen();

    try {
      const moveResult = this.board.move(move);
      if (!moveResult) {
        throw new Error("Illegal move");
      }
      this.moveCount++;

      const fenAfter = this.board.fen();
      const moverIdentity = this.getIdentityForPlayer(socket);
      const moverId = moverIdentity?.userId ?? null;
      const moveNumber = this.moveCount;

      await prisma.$transaction([
        prisma.gameMove.create({
          data: {
            gameId: this.gameId,
            moveNumber,
            moverId,
            color:
              this.getColorForPlayer(socket) === "white" ? "WHITE" : "BLACK",
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

      if (this.board.isGameOver()) {
        this.isOver = true;
        const winner = this.getGameWinner();

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
    } catch (e) {
      console.log(move);
      console.error("Invalid move", e);
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

    const opponent = socket === this.player1 ? this.player2 : this.player1;

    opponent.send(
      JSON.stringify({
        type: MOVE,
        payload: move,
      }),
    );
  }
}
