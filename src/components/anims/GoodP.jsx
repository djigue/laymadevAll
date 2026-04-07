"use client";

import { motion } from "framer-motion";

export default function MotionP({ children, once = true }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
      className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
    >
      {children}
    </motion.p>
  );
}
