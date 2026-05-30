import type { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../pages/Game";

export const ChessBoard = ({
  chess,
  board,
  socket,
  setBoard,
  disabled = false,
}: {
  setBoard: any;
  chess: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
  disabled?: boolean;
}) => {
  const [from, setFrom] = useState<Square | null>(null);
  return (
    <div className="text-white-200">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              const squareRepresentation = (String.fromCharCode(97 + (j % 8)) +
                "" +
                (8 - i)) as Square;
              return (
                <div
                  key={j}
                  onClick={() => {
                    if (disabled) {
                      return;
                    }

                    if (!from) {
                      setFrom(squareRepresentation);
                      console.log(
                        "Selected from square:",
                        squareRepresentation,
                      );
                    } else {
                      socket.send(
                        JSON.stringify({
                          type: MOVE,
                          payload: {
                            move: {
                              from,
                              to: squareRepresentation,
                            },
                          },
                        }),
                      );
                      console.log("Move sent:", {
                        from,
                        to: squareRepresentation,
                      });
                      setFrom(null);
                      chess.move({
                        from,
                        to: squareRepresentation,
                      });
                      setBoard(chess.board());
                    }
                  }}
                  className={`w-16 h-16 ${(i + j) % 2 === 0 ? "bg-green-500" : "bg-slate-500"} ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
                >
                  <div className="w-full h-full justify-center flex items-center">
                    <div className="h-full  justify-center flex flex-col">
                      {square ? (
                        <img
                          className="h-10 w-10 object-contain"
                          src={`/assets/${square.color === "b" ? square.type : square.type + "_white"}.png`}
                          alt={square?.type}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
