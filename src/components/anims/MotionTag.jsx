"use client";

import { motion } from "framer-motion";

export default function MotionTag({
  children,
  className = "text-4xl md:text-6xl text-white font-bold mb-6",
  tag = "h1",
  once = true,
  startY = 30,
  duration = 1,
}) {
  const MotionTag = motion(tag);
  return (
    <MotionTag
      initial={{ opacity: 0, y: startY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration: duration,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
