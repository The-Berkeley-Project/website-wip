import React from "react";

type Card = {
  title: string;
  description: string;
  image?: string;
};

type Props = {
  cards: Card[];
};

export default function CardSection({ cards }: Props) {
  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Community Impact
        </h2>

        {/* Fixed 3-column layout that never wraps */}
        <div className="grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-amber-100 shadow-sm p-8 hover:shadow-md transition-shadow min-h-[400px] flex flex-col"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
              )}
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}