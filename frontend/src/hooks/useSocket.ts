import { useEffect, useRef, useState } from "react";

const DEFAULT_REMOTE_WS_URL = "wss://chess-okqd.onrender.com/ws";

const normalizeWebSocketUrl = (value: string) => {
  const trimmed = value.trim().replace(/\/$/, "");

  if (trimmed.startsWith("ws://") || trimmed.startsWith("wss://")) {
    return trimmed.endsWith("/ws") ? trimmed : `${trimmed}/ws`;
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    const url = new URL(trimmed);
    url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
    url.pathname =
      url.pathname === "/" ? "/ws" : `${url.pathname.replace(/\/$/, "")}/ws`;
    return url.toString().replace(/\/$/, "");
  }

  return trimmed.endsWith("/ws") ? trimmed : `${trimmed}/ws`;
};

const getWebSocketUrl = () => {
  const configuredUrl = import.meta.env.VITE_WS_URL as string | undefined;

  if (configuredUrl) {
    return normalizeWebSocketUrl(configuredUrl);
  }

  if (window.location.hostname === "localhost") {
    return "ws://localhost:8080/ws";
  }

  return DEFAULT_REMOTE_WS_URL;
};

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const retryCountRef = useRef(0);

  useEffect(() => {
    let active = true;

    const connect = () => {
      const wsUrl = getWebSocketUrl();
      console.log("Connecting websocket:", wsUrl);

      const ws = new WebSocket(wsUrl);
      socketRef.current = ws;

      ws.onopen = () => {
        if (!active) {
          ws.close();
          return;
        }

        retryCountRef.current = 0;
        setSocket(ws);
      };

      ws.onerror = (event) => {
        console.error("WebSocket error:", event);
      };

      ws.onclose = () => {
        if (!active) {
          return;
        }

        setSocket(null);

        if (retryTimerRef.current) {
          clearTimeout(retryTimerRef.current);
        }

        const delay = Math.min(1000 * 2 ** retryCountRef.current, 10000);
        retryCountRef.current += 1;
        retryTimerRef.current = setTimeout(connect, delay);
      };
    };

    connect();

    return () => {
      active = false;

      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
      }

      socketRef.current?.close();
      socketRef.current = null;
    };
  }, []);

  return socket;
};
