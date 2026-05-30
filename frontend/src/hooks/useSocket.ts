import { useState, useEffect } from "react";

const getWebSocketUrl = () => {
  const configuredUrl = import.meta.env.VITE_WS_URL as string | undefined;

  if (configuredUrl) {
    return configuredUrl;
  }

  if (window.location.hostname === "localhost") {
    return "ws://localhost:8080/ws";
  }

  return "wss://chess-backend-virid.vercel.app/ws";
};

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(getWebSocketUrl());
    ws.onopen = () => {
      setSocket(ws);
    };

    ws.onclose = () => {
      setSocket(null);
    };

    return () => {
      ws.close();
    };
  }, []);

  return socket;
};
