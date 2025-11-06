import React from "react";
import FramedCard from "./FramedCard";

type FramedCardProps = React.ComponentProps<typeof FramedCard>;

type CardFanProps = {
  count: 1 | 2 | 3;
  cards: FramedCardProps[];
  className?: string;
};

type FanPosition = {
  rotation: number;
  offsetX: number;
  offsetY?: number;
  zIndex: number;
  scale?: number;
};

const FAN_POSITIONS: Record<CardFanProps["count"], FanPosition[]> = {
  1: [{ rotation: 0, offsetX: 0, zIndex: 3, scale: 1 }],
  2: [
    { rotation: -8, offsetX: -60, zIndex: 2, scale: 1 },
    { rotation: 8, offsetX: 60, zIndex: 3, scale: 1 },
  ],
  3: [
    { rotation: -16, offsetX: -110, zIndex: 1, scale: 0.95 },
    { rotation: 0, offsetX: 0, zIndex: 2, scale: 0.99 },
    { rotation: 16, offsetX: 110, offsetY: 24, zIndex: 3, scale: 1 },
  ],
};

const CardFan: React.FC<CardFanProps> = ({ count, cards, className = "" }) => {
  const fanCards = cards.slice(0, count);

  if (fanCards.length < count && process.env.NODE_ENV !== "production") {
    console.warn(
      `CardFan expected ${count} cards but received only ${fanCards.length}. Missing items will render as empty space.`,
    );
  }

  const containerClass = [
    "relative flex w-full items-end justify-center min-h-[360px] md:min-h-[420px]",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <div className={containerClass}>
      {fanCards.map((cardProps, index) => {
        const { rotation, offsetX, offsetY = 0, zIndex, scale = 1 } =
          FAN_POSITIONS[count][index];

        return (
          <div
            key={`card-fan-${index}`}
            className="absolute drop-shadow-2xl transition-transform duration-500 ease-out"
            style={{
              transformOrigin: "bottom center",
              transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg) scale(${scale})`,
              zIndex,
            }}
          >
            <FramedCard {...cardProps} />
          </div>
        );
      })}
    </div>
  );
};

export default CardFan;
