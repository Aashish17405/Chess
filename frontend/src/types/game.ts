export type MoveHistoryItem = {
  moveNumber: number;
  color: "WHITE" | "BLACK";
  fromSquare: string;
  toSquare: string;
  san: string | null;
};

export type GameStatePayload = {
  gameId: string;
  status: "WAITING" | "ACTIVE" | "COMPLETED" | "ABANDONED";
  winnerColor: "WHITE" | "BLACK" | null;
  currentFen: string;
  currentTurn: "white" | "black";
  resultReason: string | null;
  moves: MoveHistoryItem[];
  playerColor?: "white" | "black" | null;
  gameMode?: "single" | "multiplayer";
};
