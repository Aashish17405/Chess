import type WebSocket from "ws";

export type PlayerIdentity = {
  userId?: string;
  email?: string;
  displayName?: string;
};

export type InitGamePayload = {
  player?: PlayerIdentity;
};

export type MovePayload = {
  from: string;
  to: string;
};

export type GameCreateArgs = {
  player1Socket: WebSocket;
  player2Socket: WebSocket;
  player1: PlayerIdentity | null;
  player2: PlayerIdentity | null;
};

export type ActiveMovePayload = MovePayload;
