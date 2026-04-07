"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ReturnButton({
  text = "Retour",
  className = "relative inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 text-white font-medium tracking-wide shadow-xl border border-white/10 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400",
}) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="focus:outline-none">
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className={className}
      >
        {/* Glow */}
        <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
        </span>

        {/* Texte */}
        <span className="relative z-10">{text}</span>

        {/* Flèche */}
        <motion.span
          className="relative z-10 text-lg"
          animate={{ x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          ←
        </motion.span>

        {/* Border */}
        <span className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none group-hover:border-white/20 transition" />
      </motion.div>
    </button>
  );
}
