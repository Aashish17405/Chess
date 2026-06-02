import { Chess } from "chess.js";
import { randomUUID } from "crypto";
import type WebSocket from "ws";
import { prisma } from "../lib/prisma.js";
import { getGroqChessMove } from "../lib/groq.js";
import {
  GAME_ABANDONED,
  GAME_OVER,
  GAME_STATE,
  INIT_GAME,
  INVALID_MOVE,
  MOVE,
} from "./messages.js";
import type {
  GameCreateArgs,
  GameSnapshot,
  PersistedMove,
  MovePayload,
  PlayerIdentity,
} from "../types/index.js";

export class Game {
  public gameId: string;
  public player1: WebSocket;
  public player2: WebSocket | null;
  public board: Chess;
  public startTime: Date;
  private moveCount: number;
  private isOver: boolean;
  private finalStatus: "COMPLETED" | "ABANDONED" | null;
  private finalWinner: "white" | "black" | null;
  private finalReason: string | null;
  private finalFen: string | null;
  private endedAt: Date | null;
  private persistToDb: boolean;
  private moveHistory: PersistedMove[];
  private player1Identity: PlayerIdentity | null;
  private player2Identity: PlayerIdentity | null;

  private constructor(args: {
    gameId: string;
    player1Socket: WebSocket;
    player2Socket: WebSocket | null;
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
    this.finalStatus = null;
    this.finalWinner = null;
    this.finalReason = null;
    this.finalFen = null;
    this.endedAt = null;
    this.persistToDb = args.persistToDb;
    this.moveHistory = [];
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
    if (this.player2) {
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

  static async loadSnapshot(gameId: string): Promise<GameSnapshot | null> {
    const game = await prisma.game.findUnique({
      where: { id: gameId },
      include: {
        moves: {
          orderBy: { moveNumber: "asc" },
        },
      },
    });

    if (!game) {
      return null;
    }

    const board = new Chess();
    for (const move of game.moves) {
      const appliedMove = move.promotion
        ? board.move({
            from: move.fromSquare,
            to: move.toSquare,
            promotion: move.promotion,
          })
        : board.move({
            from: move.fromSquare,
            to: move.toSquare,
          });

      if (!appliedMove) {
        break;
      }
    }

    return {
      gameId: game.id,
      status: game.status,
      winnerColor: game.winnerColor,
      currentFen: game.finalFen ?? board.fen(),
      currentTurn: board.turn() === "w" ? "white" : "black",
      startedAt: game.startedAt?.toISOString() ?? null,
      endedAt: game.endedAt?.toISOString() ?? null,
      resultReason: game.resultReason,
      moves: game.moves.map((move) => ({
        moveNumber: move.moveNumber,
        color: move.color,
        fromSquare: move.fromSquare,
        toSquare: move.toSquare,
        san: move.san,
        uci: move.uci,
        fenBefore: move.fenBefore,
        fenAfter: move.fenAfter,
        promotion: move.promotion,
        result: move.result,
      })),
      gameMode: game.blackPlayerId === "ai-opponent" ? "single" : "multiplayer",
    };
  }

  private getColorForPlayer(socket: WebSocket | "AI"): "white" | "black" {
    return socket === this.player1 ? "white" : "black";
  }

  private getOpponentColor(socket: WebSocket | "AI"): "white" | "black" | null {
    if (socket === this.player1) {
      return "black";
    }

    if (socket === this.player2 || socket === "AI") {
      return "white";
    }

    return null;
  }

  private getIdentityForPlayer(socket: WebSocket | "AI"): PlayerIdentity | null {
    if (socket === "AI") {
      return {
        userId: "ai-opponent",
        displayName: "AI Opponent",
        email: "ai@chess.app",
      };
    }
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

  public rebindPlayer(
    socket: WebSocket,
    player: PlayerIdentity | null,
  ): "white" | "black" | null {
    if (this.isSameIdentity(this.player1Identity, player)) {
      this.player1 = socket;
      return "white";
    }

    if (this.isSameIdentity(this.player2Identity, player)) {
      this.player2 = socket;
      return "black";
    }

    return null;
  }

  public getSnapshot(): GameSnapshot {
    return {
      gameId: this.gameId,
      status: this.finalStatus ?? "ACTIVE",
      winnerColor: this.finalWinner
        ? this.finalWinner === "white"
          ? "WHITE"
          : "BLACK"
        : null,
      currentFen: this.finalFen ?? this.board.fen(),
      currentTurn: this.board.turn() === "w" ? "white" : "black",
      startedAt: this.startTime.toISOString(),
      endedAt: this.endedAt?.toISOString() ?? null,
      resultReason: this.finalReason,
      moves: this.moveHistory,
      gameMode: !this.player2 ? "single" : "multiplayer",
    };
  }

  private async finalizeGame(args: {
    status: "COMPLETED" | "ABANDONED";
    winner: "white" | "black" | null;
    reason: string;
    finalFen: string;
    updatedById: string | null;
  }) {
    if (this.isOver) {
      return;
    }

    this.isOver = true;
    this.finalStatus = args.status;
    this.finalWinner = args.winner;
    this.finalReason = args.reason;
    this.finalFen = args.finalFen;
    this.endedAt = new Date();

    if (this.persistToDb) {
      try {
        await prisma.game.update({
          where: { id: this.gameId },
          data: {
            status: args.status,
            endedAt: this.endedAt,
            finalFen: args.finalFen,
            winnerColor: args.winner === "white" ? "WHITE" : args.winner === "black" ? "BLACK" : null,
            resultReason: args.reason,
            updatedById: args.updatedById,
          },
        });
      } catch (error) {
        this.persistToDb = false;
        console.error("Game finalization persistence failed:", error);
      }
    }
  }

  private isSameIdentity(
    existing: PlayerIdentity | null,
    incoming: PlayerIdentity | null,
  ) {
    if (!existing || !incoming) {
      return false;
    }

    return (
      (existing.userId && existing.userId === incoming.userId) ||
      (existing.email && existing.email === incoming.email)
    );
  }

  async makeMove(socket: WebSocket | "AI", move: MovePayload) {
    try {
      if (this.isOver) {
        return;
      }

      if (this.moveCount % 2 === 0 && socket !== this.player1) {
        console.log("early return 1");
        return;
      }

      if (this.moveCount % 2 === 1 && socket !== this.player2 && socket !== "AI") {
        console.log("early return 2");
        return;
      }

      const fenBefore = this.board.fen();

      if (move.from === move.to) {
        if (socket !== "AI") {
          socket.send(
            JSON.stringify({
              type: INVALID_MOVE,
              payload: {
                reason: "selected_same_square",
                move,
                currentTurn: this.board.turn() === "w" ? "white" : "black",
                yourColor: this.getColorForPlayer(socket),
              },
            }),
          );
        }
        return;
      }

      const moveResult = this.board.move(move);

      if (!moveResult) {
        if (socket !== "AI") {
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
        }
        return;
      }

      this.moveCount += 1;

      const fenAfter = this.board.fen();
      const moverIdentity = this.getIdentityForPlayer(socket);
      const moverId = moverIdentity?.userId ?? null;
      const moveNumber = this.moveCount;
      const moveEntry: PersistedMove = {
        moveNumber,
        color: this.getColorForPlayer(socket) === "white" ? "WHITE" : "BLACK",
        fromSquare: move.from,
        toSquare: move.to,
        san: moveResult.san,
        uci: `${move.from}${move.to}`,
        fenBefore,
        fenAfter,
        promotion: moveResult.promotion ?? null,
        result: this.board.isCheckmate()
          ? "CHECKMATE"
          : this.board.isStalemate()
            ? "STALEMATE"
            : this.board.isDraw()
              ? "DRAW"
              : this.board.isCheck()
                ? "CHECK"
                : "NORMAL",
      };

      this.moveHistory.push(moveEntry);

      if (this.persistToDb) {
        try {
          await prisma.$transaction([
            prisma.gameMove.create({
              data: {
                gameId: this.gameId,
                moveNumber,
                moverId,
                color: moveEntry.color,
                fromSquare: move.from,
                toSquare: move.to,
                promotion: moveResult.promotion ?? null,
                san: moveResult.san,
                uci: `${move.from}${move.to}`,
                fenBefore,
                fenAfter,
                result: moveEntry.result,
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
          console.error(
            "Move persistence failed; continuing in-memory:",
            error,
          );
        }
      }

      const moveMessage = JSON.stringify({
        type: MOVE,
        payload: move,
      });

      this.player1.send(moveMessage);
      if (this.player2) {
        this.player2.send(moveMessage);
      }

      if (this.board.isGameOver()) {
        const winner = this.getGameWinner();
        await this.finalizeGame({
          status: "COMPLETED",
          winner,
          reason: this.getGameResultReason(),
          finalFen: fenAfter,
          updatedById: moverId,
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

        if (this.player2) {
          this.player2.send(
            JSON.stringify({
              type: GAME_OVER,
              payload: {
                winner,
                gameId: this.gameId,
              },
            }),
          );
        }

        const snapshot = this.getSnapshot();
        this.player1.send(
          JSON.stringify({ type: GAME_STATE, payload: snapshot }),
        );
        if (this.player2) {
          this.player2.send(
            JSON.stringify({ type: GAME_STATE, payload: snapshot }),
          );
        }
      }

      // If it's a single player game and it is now the AI's turn, trigger the AI move
      if (!this.board.isGameOver() && !this.player2 && this.board.turn() === "b") {
        void this.triggerAiMove();
      }
    } catch (error) {
      console.error("Unexpected move handling failure:", error);
      if (socket !== "AI") {
        socket.send(
          JSON.stringify({
            type: INVALID_MOVE,
            payload: {
              reason: error instanceof Error ? error.message : "server_error",
              move,
              currentTurn: this.board.turn() === "w" ? "white" : "black",
              yourColor: this.getColorForPlayer(socket),
            },
          }),
        );
      }
    }
  }

  async abandonGame(socket: WebSocket | "AI") {
    if (this.isOver) {
      return;
    }

    const quitterColor = socket === "AI" ? "black" : this.getColorForPlayer(socket);
    const winner = this.getOpponentColor(socket);
    const quitterIdentity = this.getIdentityForPlayer(socket);

    await this.finalizeGame({
      status: "ABANDONED",
      winner,
      reason: "abandoned",
      finalFen: this.board.fen(),
      updatedById: quitterIdentity?.userId ?? null,
    });

    this.player1.send(
      JSON.stringify({
        type: GAME_ABANDONED,
        payload: {
          gameId: this.gameId,
          winner,
          quitterColor,
          reason: "abandoned",
        },
      }),
    );

    if (this.player2) {
      this.player2.send(
        JSON.stringify({
          type: GAME_ABANDONED,
          payload: {
            gameId: this.gameId,
            winner,
            quitterColor,
            reason: "abandoned",
          },
        }),
      );
    }

    const snapshot = this.getSnapshot();
    this.player1.send(JSON.stringify({ type: GAME_STATE, payload: snapshot }));
    if (this.player2) {
      this.player2.send(JSON.stringify({ type: GAME_STATE, payload: snapshot }));
    }
  }

  async triggerAiMove() {
    if (this.isOver || this.board.isGameOver()) return;
    if (this.board.turn() !== "b") return;

    // Wait for a natural delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const fen = this.board.fen();
    const legalMoves = this.board.moves();
    if (legalMoves.length === 0) return;

    const last5Moves = this.moveHistory
      .slice(-5)
      .map((m) => `${m.color === "WHITE" ? "W" : "B"}: ${m.san}`);

    let chosenMoveSan = "";
    try {
      chosenMoveSan = await getGroqChessMove(fen, last5Moves, legalMoves);
      if (!legalMoves.includes(chosenMoveSan)) {
        console.warn(`AI chosen move ${chosenMoveSan} is not in legal moves. Falling back.`);
        chosenMoveSan = legalMoves[Math.floor(Math.random() * legalMoves.length)] as string;
      }
    } catch (error) {
      console.error("Failed to fetch chess move from Groq:", error);
      chosenMoveSan = legalMoves[Math.floor(Math.random() * legalMoves.length)] as string;
    }

    const tempBoard = new Chess(fen);
    const moveResult = tempBoard.move(chosenMoveSan);

    if (moveResult) {
      await this.makeMove("AI", {
        from: moveResult.from,
        to: moveResult.to,
        ...(moveResult.promotion ? { promotion: moveResult.promotion } : {}),
      });
    }
  }
}
