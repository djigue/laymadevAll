"use client";

import { motion } from "framer-motion";

/**
 * Separator
 * ------------------------------------------------------------------
 * Séparateur horizontal premium animé.
 */

export default function Separator({
  label,
  color = "via-red-500",
  labelColor = "text-white",
}) {
  return (
    <div className="relative my-20 flex items-center w-full overflow-hidden">
      {/* LIGNE GAUCHE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
        className={`
          flex-1
          h-[2px]
          bg-gradient-to-r
          from-transparent
          ${color}
          to-transparent
          opacity-80
        `}
      />

      {/* LABEL */}
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`
            mx-6
            px-6 py-1
            bg-[#0b0f3a]
            ${labelColor}
            text-sm
            uppercase
            tracking-widest
            font-semibold
            whitespace-nowrap
          `}
        >
          {label}
        </motion.span>
      )}

      {/* LIGNE DROITE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }}
        className={`
          flex-1
          h-[2px]
          bg-gradient-to-r
          from-transparent
          ${color}
          to-transparent
          opacity-80
        `}
      />
    </div>
  );
}
