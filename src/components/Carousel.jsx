"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Carousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const len = images.length;
  const clampIndex = (i) => (i + len) % len;

  const leftIndex = useMemo(() => clampIndex(current - 1), [current, len]);
  const centerIndex = useMemo(() => clampIndex(current), [current, len]);
  const rightIndex = useMemo(() => clampIndex(current + 1), [current, len]);

  // preload (client only)
  useEffect(() => {
    if (!len) return;

    const toPreload = [leftIndex, centerIndex, rightIndex]
      .map((i) => images[i])
      .filter(Boolean);

    toPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images, len, leftIndex, centerIndex, rightIndex]);

  const prev = () => setCurrent((c) => clampIndex(c - 1));
  const next = () => setCurrent((c) => clampIndex(c + 1));

  // clavier (client safe)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (!open) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!len) return null;

  return (
    <>
      <div className="relative w-full flex justify-center mb-20 pt-10">
        {/* MOBILE */}
        <div className="relative w-full max-w-[95vw] h-[340px] md:hidden">
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ❮
          </button>

          <div
            className="relative w-full h-full cursor-zoom-in"
            onClick={() => setOpen(true)}
          >
            <Image
              src={images[centerIndex]}
              alt="carousel"
              fill
              className="object-cover rounded-3xl shadow-xl"
              priority={false}
            />
          </div>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ❯
          </button>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden md:block w-[1200px] max-w-[95vw]">
          <div className="relative h-[360px] flex items-center justify-center gap-16">
            <Slide src={images[leftIndex]} onClick={prev} />

            <Slide
              src={images[centerIndex]}
              active
              className="scale-[1.28] z-20"
              onClick={() => setOpen(true)}
            />

            <Slide src={images[rightIndex]} onClick={next} />

            <button
              onClick={prev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-30 bg-black/60 text-white w-11 h-11 rounded-full"
            >
              ❮
            </button>

            <button
              onClick={next}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-30 bg-black/60 text-white w-11 h-11 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            <motion.div
              className="relative w-[90vw] h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <Image
                src={images[current]}
                alt="lightbox"
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Slide({ src, active = false, onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`transition-transform duration-500 ${className} cursor-pointer`}
    >
      <div className="relative w-[420px] h-[280px] rounded-3xl overflow-hidden shadow-xl">
        <Image src={src} alt="slide" fill className="object-cover" />

        {active && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        )}
      </div>
    </div>
  );
}
