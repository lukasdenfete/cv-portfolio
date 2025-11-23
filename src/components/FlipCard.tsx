import { useState } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export default function FlipCard({ front, back }: FlipCardProps) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div
      onClick={() => setShowBack(prev => !prev)}
      style={{
        width: "600px",
        perspective: "1000px",
        cursor: "pointer",
        position: "relative", // 👈 viktigt
      }}
    >
      <div
        style={{
          width: "100%",
          transition: "transform 0.7s",
          transformStyle: "preserve-3d",
          transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute", // 👈 lägg ovanpå
            inset: 0,
            backfaceVisibility: "hidden",
          }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute", // 👈 lägg ovanpå
            inset: 0,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

