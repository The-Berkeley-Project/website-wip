"use client";

import React, { useState } from "react";
import BoxCard from "@/components/BoxCard";
import ImageGrid from "@/components/ImageGrid";

type ImageItem = { img: string };

type GallerySection = {
  title: string;
  image: string;
  gallery: ImageItem[];
};

type Galleries = Record<string, GallerySection[]>;

type OpenGallery = {
  year: string;
  index: number;
} | null;

export default function GalleryPage() {
  const [openGallery, setOpenGallery] = useState<OpenGallery>(null);

  const galleries: Galleries = {
    "2025": [
      {
        title: "SPRING 2025",
        image: "/SPRING2025.png",
        gallery: [
        ],
      },
      {
        title: "FALL 2025",
        image: "/FALL2025.png",
        gallery: [

        ],
      },
    ],
    "2024": [
      {
        title: "SPRING 2024",
        image: "/photos/SPRING2024.png",
        gallery: [
          { img: "/photos/sp24/sp24_1.jpg" },
          { img: "/photos/sp24/sp24_2.jpg" },
          { img: "/photos/sp24/sp24_3.jpg" },
          { img: "/photos/sp24/sp24_4.jpg" },
          { img: "/photos/sp24/sp24_5.jpg" },
          { img: "/photos/sp24/sp24_6.jpg" },
        ],
      },
      {
        title: "FALL 2024",
        image: "/photos/FALL2024.png",
        gallery: [

        ],
      },
    ],
  };

  const selectedGallery: GallerySection | null =
    openGallery && galleries[openGallery.year]
      ? galleries[openGallery.year][openGallery.index]
      : null;

  const handleCardClick = (year: string, index: number) => {
    setOpenGallery({ year, index });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center py-24">
      {/* 2025 SECTION */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10">2025</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl px-6 mb-24">
        {galleries["2025"].map((section, index) => (
          <div
            key={`2025-${index}`}
            onClick={() => handleCardClick("2025", index)}
            className="cursor-pointer"
          >
            <BoxCard title={section.title} image={section.image} />
          </div>
        ))}
      </div>

      {/* 2024 SECTION */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10">2024</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl px-6 mb-24">
        {galleries["2024"].map((section, index) => (
          <div
            key={`2024-${index}`}
            onClick={() => handleCardClick("2024", index)}
            className="cursor-pointer"
          >
            <BoxCard title={section.title} image={section.image} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl mt-16 mb-16 p-6">
            {/* Close Button */}
            <button
              onClick={() => setOpenGallery(null)}
              className="absolute top-4 right-6 text-4xl font-light text-gray-700 hover:opacity-80 z-10"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              {selectedGallery.title} Gallery
            </h2>

            {/* Scrollable ImageGrid */}
            <div className="max-h-[70vh] overflow-y-auto">
              <ImageGrid
                images={selectedGallery.gallery}
                onClickImage={(img) => console.log("Clicked:", img)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
