"use client";

import { motion } from "framer-motion";

export default function MotionDiv({
  children,
  startY = 30,
  duration = 1,
  className = "",
  delay = 0.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: startY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
