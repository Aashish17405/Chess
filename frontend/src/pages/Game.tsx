import { ChessBoard } from "../components/ChessBoard";
import { Button } from "../components/Button";
import { useSocket } from "../hooks/useSocket";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { supabase } from "../lib/supabaseClient";

export const INIT_GAME = "init_game";
export const GAME_OVER = "game_over";
export const MOVE = "move";
export const INVALID_MOVE = "invalid_move";

export const Game = () => {
  const socket = useSocket();
  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

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
      switch (message.type) {
        case INIT_GAME:
          setBoard(chess.board());
          setStarted(true);
          console.log("Game initialized with color:", message.payload.color);
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made:", message.payload.move);
          break;
        case GAME_OVER:
          setGameOver(true);
          setWinner(message.payload.winner);
          console.log("Game over:", message.payload.winner);
          break;
        case INVALID_MOVE:
          console.log("Invalid move:", message.payload.reason);
          break;
      }
    };
  }, [socket]);

  if (!socket) return <div className="text-white">Connecting...</div>;

  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-5xl w-full">
        <div className="grid grid-cols-6 gap-4 w-full ">
          <div className="col-span-4 w-full flex justify-center">
            <ChessBoard
              chess={chess}
              setBoard={setBoard}
              socket={socket}
              board={board}
              disabled={gameOver}
            />
          </div>
          <div className="col-span-2 bg-slate-900 w-full flex justify-center">
            <div className="pt-8">
              {!started && (
                <Button
                  onClick={() => {
                    socket.send(
                      JSON.stringify({
                        type: INIT_GAME,
                        payload: {
                          player: {
                            userId: userId ?? undefined,
                            email: userEmail ?? undefined,
                          },
                        },
                      }),
                    );
                  }}
                >
                  Play
                </Button>
              )}
              {gameOver && (
                <div className="mt-4 rounded-md border border-green-500 bg-green-950 px-4 py-3 text-sm text-green-200">
                  Game over. Winner: {winner}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <h1>Game Page</h1>
    </div>
  );
};
