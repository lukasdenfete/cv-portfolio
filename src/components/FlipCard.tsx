import { cn } from "../lib/utils";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";

type FlipCardProps = {
  showBack: boolean;
  flipDirection: "" | "left" | "right";
};

export function FlipCard({ showBack, flipDirection }: FlipCardProps) {
  return (
    <div className="w-[600px] h-[800px] outline-none [perspective:50rem] relative">
      <div
        className={cn(
            "relative size-full transition duration-700 [transform-style:preserve-3d]",
            showBack && "rotate-y-180",
            flipDirection === "right" && "animate-flip-right",
            flipDirection === "left" && "animate-flip-left"
          )}
      >
        <div className="absolute inset-0 size-full [backface-visibility:hidden]">
          <FrontCard />
        </div>
        <div className="absolute inset-0 size-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <BackCard />
        </div>
      </div>
    </div>
  );
}
