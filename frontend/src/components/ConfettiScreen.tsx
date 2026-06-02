import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import type { ConfettiScreenProps } from "../types";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export const ConfettiScreen = ({
  winner,
  onPlayAgain,
}: ConfettiScreenProps) => {
  const { width, height } = useWindowSize();

  return (
    <div className="winner-screen" role="status" aria-live="polite">
      <div className="winner-screen__backdrop" />
      <div className="winner-screen__glow winner-screen__glow--left" />
      <div className="winner-screen__glow winner-screen__glow--right" />

      <Confetti
        width={width}
        height={height}
        numberOfPieces={240}
        recycle={true}
        gravity={0.22}
        friction={0.96}
        wind={0.015}
        tweenDuration={7000}
        colors={[
          "#f97316",
          "#facc15",
          "#22c55e",
          "#38bdf8",
          "#e879f9",
          "#fb7185",
          "#ffffff",
        ]}
        opacity={0.92}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      <div className="winner-screen__card">
        <p className="winner-screen__eyebrow">Game complete</p>
        <h1 className="winner-screen__title">
          {winner ? `${winner} wins` : "Winner decided"}
        </h1>
        <p className="winner-screen__copy">
          The board is locked and the celebration is live.
        </p>
        {onPlayAgain ? (
          <button className="winner-screen__button" onClick={onPlayAgain}>
            Play again
          </button>
        ) : null}
      </div>
    </div>
  );
};
