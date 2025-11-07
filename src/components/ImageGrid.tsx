"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageItem = { img: string };
type Props = {
  images: ImageItem[];
  onClickImage?: (img: string) => void;
};

export default function ImageGrid({ images, onClickImage }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Reveal images one by one for a subtle entrance
  useEffect(() => {
    if (visibleCount < images.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, images.length]);

  return (
    <>
      {/* Scrollable grid container */}
      <div className="max-h-[75vh] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-400/40 scrollbar-track-transparent">
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <AnimatePresence>
            {images.slice(0, visibleCount).map((item, index) => (
              <motion.div
                key={item.img}
                className="relative overflow-hidden rounded-lg cursor-pointer group shadow-sm hover:shadow-md bg-gray-50"
                onClick={() => {
                  setSelectedImage(item.img);
                  onClickImage?.(item.img);
                }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.03,
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                {/* Soft overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Enlarged image overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Click background to close */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />

            {/* Enlarged image */}
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="relative max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl object-contain z-[110]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
            />

            {/* Close button */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-8 text-white text-4xl font-light hover:opacity-80 z-[120]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
