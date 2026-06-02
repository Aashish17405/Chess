import type WebSocket from "ws";

export type PlayerIdentity = {
  userId?: string;
  email?: string;
  displayName?: string;
};

export type InitGamePayload = {
  player?: PlayerIdentity;
  gameMode?: "single" | "multiplayer";
  aiColor?: "white" | "black";
};

export type ResumeGamePayload = {
  gameId: string;
  player?: PlayerIdentity;
};

export type MovePayload = {
  from: string;
  to: string;
};

export type PersistedMove = {
  moveNumber: number;
  color: "WHITE" | "BLACK";
  fromSquare: string;
  toSquare: string;
  san: string | null;
  uci: string | null;
  fenBefore: string | null;
  fenAfter: string | null;
  promotion: string | null;
  result: "NORMAL" | "CAPTURE" | "CHECK" | "CHECKMATE" | "STALEMATE" | "DRAW";
};

export type GameSnapshot = {
  gameId: string;
  status: "WAITING" | "ACTIVE" | "COMPLETED" | "ABANDONED";
  winnerColor: "WHITE" | "BLACK" | null;
  currentFen: string;
  currentTurn: "white" | "black";
  startedAt: string | null;
  endedAt: string | null;
  resultReason: string | null;
  moves: PersistedMove[];
  playerColor?: "white" | "black" | null;
  gameMode?: "single" | "multiplayer";
};

export type GameCreateArgs = {
  player1Socket: WebSocket;
  player2Socket: WebSocket | null;
  player1: PlayerIdentity | null;
  player2: PlayerIdentity | null;
};

export type ActiveMovePayload = MovePayload;
