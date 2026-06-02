import type { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../pages/Game";

export const ChessBoard = ({
  board,
  socket,
  disabled = false,
  playerColor,
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
  disabled?: boolean;
  playerColor: "WHITE" | "BLACK";
}) => {
  const [from, setFrom] = useState<Square | null>(null);
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const isWhitePerspective = playerColor === "WHITE";
  const displayedBoard = isWhitePerspective ? board : [...board].reverse();

  return (
    <div className="chess-board-wrap text-white-200">
      {displayedBoard.map((row, i) => {
        const sourceRowIndex = isWhitePerspective ? i : 7 - i;
        const renderedRow = isWhitePerspective ? row : [...row].reverse();

        return (
          <div key={i} className="chess-board-row flex">
            {renderedRow.map((square, j) => {
              const fileIndex = isWhitePerspective ? j : 7 - j;
              const squareRepresentation = (String.fromCharCode(
                97 + fileIndex,
              ) +
                "" +
                (8 - sourceRowIndex)) as Square;

              return (
                <div
                  key={j}
                  onClick={() => {
                    if (disabled) {
                      return;
                    }

                    if (!from) {
                      setFrom(squareRepresentation);
                      setSelectedSquare(squareRepresentation);
                      console.log(
                        "Selected from square:",
                        squareRepresentation,
                      );
                    } else if (from === squareRepresentation) {
                      setFrom(null);
                      setSelectedSquare(null);
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
                      setSelectedSquare(null);
                    }
                  }}
                  className={`chess-square ${(sourceRowIndex + fileIndex) % 2 === 0 ? "chess-square--light" : "chess-square--dark"} ${selectedSquare === squareRepresentation ? "chess-square--selected" : ""} ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="flex h-full flex-col justify-center">
                      {square ? (
                        <img
                          className="chess-piece"
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
