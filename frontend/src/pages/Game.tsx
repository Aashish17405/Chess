import { Chess } from "chess.js";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "../components/Button";
import { ChessBoard } from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";
import { supabase } from "../lib/supabaseClient";
import type { GameStatePayload, MoveHistoryItem } from "../types";

export const INIT_GAME = "init_game";
export const GAME_OVER = "game_over";
export const GAME_ABANDONED = "game_abandoned";
export const MOVE = "move";
export const INVALID_MOVE = "invalid_move";
export const RESUME_GAME = "resume_game";
export const GAME_STATE = "game_state";
export const ABANDON_GAME = "abandon_game";

const SAVED_GAME_ID_KEY = "chess:lastGameId";
const SAVED_PLAYER_COLOR_KEY = "chess:lastPlayerColor";

export const Game = () => {
  const socket = useSocket();
  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [moveHistory, setMoveHistory] = useState<MoveHistoryItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [pieceColor, setPieceColor] = useState<"WHITE" | "BLACK">(() => {
    const savedColor = localStorage.getItem(SAVED_PLAYER_COLOR_KEY);
    return savedColor === "BLACK" ? "BLACK" : "WHITE";
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [gameStatusMessage, setGameStatusMessage] = useState<string | null>(null);
  const [gameMode, setGameMode] = useState<"single" | "multiplayer">("single");
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);
  const resumeRequestedRef = useRef(false);
  const confettiTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data.user?.id ?? null);
      setUserEmail(data.user?.email ?? null);
    });
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received message:", message);

      const syncChessToFen = (fen: string) => {
        chess.reset();

        if (fen && fen !== "start") {
          chess.load(fen);
        }

        setBoard(chess.board());
      };

      switch (message.type) {
        case INIT_GAME:
          localStorage.setItem(SAVED_GAME_ID_KEY, message.payload.gameId);
          setBoard(chess.board());
          setStarted(true);
          setGameOver(false);
          setConfettiVisible(false);
          setMoveHistory([]);
          setToastMessage(null);
          setGameStatusMessage(null);
          setIsQuitModalOpen(false);
          localStorage.setItem(
            SAVED_PLAYER_COLOR_KEY,
            message.payload.color === "white" ? "WHITE" : "BLACK",
          );
          setPieceColor(message.payload.color === "white" ? "WHITE" : "BLACK");
          console.log("Game initialized with color:", message.payload.color);
          break;
        case GAME_STATE: {
          const snapshot = message.payload as GameStatePayload;
          localStorage.setItem(SAVED_GAME_ID_KEY, snapshot.gameId);
          syncChessToFen(snapshot.currentFen);
          setStarted(
            snapshot.status !== "WAITING" || snapshot.moves.length > 0,
          );
          setMoveHistory(snapshot.moves ?? []);
          setGameOver(
            snapshot.status === "COMPLETED" || snapshot.status === "ABANDONED",
          );
          setToastMessage(null);
          setGameStatusMessage(
            snapshot.status === "ABANDONED"
              ? snapshot.winnerColor
                ? `${snapshot.winnerColor === "WHITE" ? "White" : "Black"} wins because the opponent quit.`
                : "Game ended because someone quit."
              : snapshot.status === "COMPLETED"
                ? snapshot.winnerColor
                  ? `${snapshot.winnerColor === "WHITE" ? "White" : "Black"} won the game.`
                  : "Game over."
                : null,
          );
          if (snapshot.gameMode) {
            setGameMode(snapshot.gameMode);
          }
          if (snapshot.playerColor) {
            const nextColor =
              snapshot.playerColor === "white" ? "WHITE" : "BLACK";
            localStorage.setItem(SAVED_PLAYER_COLOR_KEY, nextColor);
            setPieceColor(nextColor);
          } else {
            const savedColor = localStorage.getItem(SAVED_PLAYER_COLOR_KEY);
            if (savedColor === "BLACK" || savedColor === "WHITE") {
              setPieceColor(savedColor);
            }
          }
          setConfettiVisible(false);
          break;
        }
        case GAME_ABANDONED: {
          setGameOver(true);
          setConfettiVisible(false);
          setToastMessage(null);
          setIsQuitModalOpen(false);
          setGameStatusMessage(
            message.payload?.quitterColor
              ? `${message.payload.quitterColor === "white" ? "White" : "Black"} quit the game.`
              : "The game was abandoned.",
          );
          break;
        }
        case MOVE: {
          const move = message.payload;
          const moveResult = chess.move(move);
          setBoard(chess.board());
          if (moveResult) {
            setToastMessage(null);
            setMoveHistory((previousMoves) => [
              ...previousMoves,
              {
                moveNumber: previousMoves.length + 1,
                color: moveResult.color === "w" ? "WHITE" : "BLACK",
                fromSquare: move.from,
                toSquare: move.to,
                san: moveResult.san ?? null,
              },
            ]);
          }
          console.log("Move made:", message.payload.move);
          break;
        }
        case GAME_OVER: {
          localStorage.setItem(SAVED_GAME_ID_KEY, message.payload.gameId);
          setGameOver(true);

          const isWinner =
            message.payload.winner &&
            message.payload.winner.toUpperCase() === pieceColor;

          if (isWinner) {
            setConfettiVisible(true);
            if (confettiTimerRef.current) {
              clearTimeout(confettiTimerRef.current);
            }
            confettiTimerRef.current = setTimeout(() => {
              setConfettiVisible(false);
            }, 5000);
          } else {
            setConfettiVisible(false);
          }

          setIsQuitModalOpen(false);
          setGameStatusMessage(
            message.payload.winner
              ? `${message.payload.winner === "white" ? "White" : "Black"} won the game.`
              : "Game over.",
          );

          console.log("Game over:", message.payload.winner);
          break;
        }
        case INVALID_MOVE:
          setToastMessage(
            message.payload.reason === "selected_same_square"
              ? "Select a different square to move."
              : message.payload.reason === "illegal_move"
                ? "That move is not legal."
                : `Move rejected: ${message.payload.reason}`,
          );

          if (toastTimerRef.current) {
            clearTimeout(toastTimerRef.current);
          }

          toastTimerRef.current = setTimeout(() => {
            setToastMessage(null);
          }, 3000);

          console.log("Invalid move:", message.payload.reason);
          break;
      }
    };
  }, [socket, chess]);

  useEffect(() => {
    if (!socket) {
      resumeRequestedRef.current = false;
      return;
    }

    if (resumeRequestedRef.current) {
      return;
    }

    const savedGameId = localStorage.getItem(SAVED_GAME_ID_KEY);

    if (!savedGameId || (!userId && !userEmail)) {
      return;
    }

    socket.send(
      JSON.stringify({
        type: RESUME_GAME,
        payload: {
          gameId: savedGameId,
          player: {
            userId: userId ?? undefined,
            email: userEmail ?? undefined,
          },
        },
      }),
    );
    resumeRequestedRef.current = true;
  }, [socket, userId, userEmail]);

  useEffect(() => {
    if (!isQuitModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsQuitModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isQuitModalOpen]);

  useEffect(() => {
    return () => {
      if (confettiTimerRef.current) {
        clearTimeout(confettiTimerRef.current);
      }

      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const startNewGame = () => {
    if (!socket) {
      return;
    }

    chess.reset();
    setBoard(chess.board());
    setStarted(true);
    setGameOver(false);
    setConfettiVisible(false);
    setMoveHistory([]);
    setToastMessage(null);
    setGameStatusMessage(null);
    setIsQuitModalOpen(false);
    localStorage.removeItem(SAVED_GAME_ID_KEY);
    localStorage.removeItem(SAVED_PLAYER_COLOR_KEY);

    socket.send(
      JSON.stringify({
        type: INIT_GAME,
        payload: {
          gameMode,
          aiColor: "black",
          player: {
            userId: userId ?? undefined,
            email: userEmail ?? undefined,
          },
        },
      })
    );
  };

  const quitGame = () => {
    if (!socket) {
      return;
    }

    socket.send(
      JSON.stringify({
        type: ABANDON_GAME,
      }),
    );
    setIsQuitModalOpen(false);
  };

  if (!socket)
    return (
      <div className="grid min-h-screen place-items-center text-white">
        Connecting...
      </div>
    );

  const { innerWidth, innerHeight } = window;

  return (
    <div className="relative min-h-screen px-3 py-4 sm:px-4 lg:px-8">
      {toastMessage ? (
        <div className="fixed right-4 top-4 z-50 max-w-sm rounded-2xl border border-red-500/30 bg-slate-950/95 px-4 py-3 text-sm text-red-100 shadow-2xl shadow-black/30 backdrop-blur">
          <p className="font-semibold text-white">Invalid move</p>
          <p className="mt-1 leading-5">{toastMessage}</p>
        </div>
      ) : null}

      {confettiVisible ? (
        <Confetti
          width={innerWidth}
          height={innerHeight}
          numberOfPieces={220}
          recycle={false}
          gravity={0.24}
          tweenDuration={3000}
          colors={[
            "#f97316",
            "#facc15",
            "#22c55e",
            "#38bdf8",
            "#e879f9",
            "#fb7185",
            "#ffffff",
          ]}
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 50,
          }}
        />
      ) : null}

      {isQuitModalOpen ? (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm"
          onClick={() => setIsQuitModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/95 p-6 text-white shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-rose-300/80">
              Confirm quit
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Leave this match?
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {gameMode === "single"
                ? "Quitting will end your current game against the AI immediately."
                : "Quitting will end the current match and your opponent will see that you left."}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsQuitModalOpen(false)}
                className="flex-1 rounded-2xl border border-white/10 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
              >
                Keep playing
              </button>
              <button
                type="button"
                onClick={quitGame}
                className="flex-1 rounded-2xl border border-rose-500/40 bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-400"
              >
                Quit game
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="relative flex w-full justify-center rounded-3xl border border-white/10 bg-slate-950/70 p-2 shadow-2xl shadow-black/20 backdrop-blur sm:p-4 lg:p-6">
          <ChessBoard
            socket={socket}
            board={board}
            disabled={gameOver}
            playerColor={pieceColor}
          />
        </div>

        <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-white shadow-2xl shadow-black/20 backdrop-blur sm:p-5 lg:min-h-160">
          <div className="flex h-full flex-col justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
                Match control
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                {started ? (gameMode === "single" ? "vs AI Opponent" : "Live game") : "Ready to play"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {started
                  ? gameOver
                    ? "The board is locked. Confetti plays briefly when the game ends."
                    : gameMode === "single"
                      ? "Play against the Groq AI engine. You play as White."
                      : "Make your moves from the board. The game will celebrate the winner when it ends."
                  : "Start a new match from here. The board stays responsive on smaller screens too."}
              </p>
            </div>

            <div className="space-y-3">
              {!started && (
                <div className="mb-4 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">Select Game Mode</p>
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-950/65 p-1 border border-white/5">
                    <button
                      type="button"
                      onClick={() => setGameMode("single")}
                      className={`rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 ${
                        gameMode === "single"
                          ? "bg-slate-800 text-emerald-300 shadow-md border border-white/10"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      🤖 vs Groq AI
                    </button>
                    <button
                      type="button"
                      onClick={() => setGameMode("multiplayer")}
                      className={`rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 ${
                        gameMode === "multiplayer"
                          ? "bg-slate-800 text-emerald-300 shadow-md border border-white/10"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      👥 Multiplayer
                    </button>
                  </div>
                </div>
              )}

              {!started && <Button onClick={startNewGame}>Play</Button>}

              {gameOver && (
                <Button onClick={startNewGame}>Restart new game</Button>
              )}

              {started && !gameOver && (
                <button
                  type="button"
                  onClick={() => setIsQuitModalOpen(true)}
                  className="w-full rounded-2xl border border-rose-500/40 bg-rose-500/10 px-6 py-4 text-lg font-semibold text-rose-100 transition hover:border-rose-400 hover:bg-rose-500/20"
                >
                  Quit game
                </button>
              )}

              {started && (
                <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                  <p className="font-medium text-white">Status</p>
                  <p className="mt-1 text-slate-300">
                    {gameMode === "single"
                      ? "AI Opponent is active. Take your time."
                      : "Matchmaking active. On mobile it will shrink to fit the screen without clipping."}
                  </p>
                </div>
              )}

              {gameOver && (
                <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                  {gameStatusMessage ?? "Game finished. The board remains visible for review."}
                </div>
              )}

              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">Moves</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    {moveHistory.length} ply
                  </p>
                </div>
                <div className="mt-3 max-h-56 space-y-2 overflow-y-auto pr-1">
                  {moveHistory.length === 0 ? (
                    <p className="text-sm text-slate-400">
                      Your move history will appear here.
                    </p>
                  ) : (
                    moveHistory.map((move) => (
                      <div
                        key={`${move.moveNumber}-${move.fromSquare}-${move.toSquare}`}
                        className="flex items-center justify-between gap-3 rounded-xl bg-slate-900/80 px-3 py-2 text-sm text-slate-200"
                      >
                        <span className="font-semibold text-emerald-300">
                          {move.moveNumber}.
                        </span>
                        <span className="flex-1 text-slate-100">
                          {move.san ?? `${move.fromSquare}${move.toSquare}`}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          {move.color === "WHITE" ? "W" : "B"}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
