import { useState } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  width: number;
  height: number;
}

export default function FlipCard({ front, back, width, height }: FlipCardProps) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div
      onClick={() => setShowBack((prev) => !prev)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        perspective: "1000px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 0.7s",
          transformStyle: "preserve-3d",
          transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          {front}
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}