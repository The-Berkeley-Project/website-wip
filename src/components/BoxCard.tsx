import React from "react";

type Props = {
  title: string;
  image: string;
};

export default function BoxCard({ title, image }: Props) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] aspect-square">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-white text-2xl font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}
