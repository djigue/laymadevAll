"use client";

import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function StyleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentStyle = pathname.split("/")[1] || "styleA";

  let nextPath = "/";

  if (currentStyle === "styleA") {
    // 🔥 peu importe la page → styleB (racine)
    nextPath = "/styleB";
  } else if (currentStyle === "styleB") {
    // 🔥 toujours vers home de styleC
    nextPath = "/styleC/home";
  } else {
    // 🔥 styleC → home de styleA
    nextPath = "/styleA/home";
  }

  const labels = {
    styleA: "Style A",
    styleB: "Style B",
    styleC: "Style C",
  };

  const nextLabel =
    currentStyle === "styleA"
      ? "Style B"
      : currentStyle === "styleB"
      ? "Style C"
      : "Style A";

  return (
    <motion.button
      onClick={() => router.push(nextPath)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="
        relative group
        flex items-center gap-2
        px-2 py-2
        rounded-full
        bg-white/10 backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        overflow-hidden
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-400/20 blur-3xl" />
      </div>

      {/* Current */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5">
        <RefreshCw className="w-4 h-4 opacity-70 group-hover:rotate-180 transition duration-500" />
        <span className="text-sm font-medium text-white/90">
          {labels[currentStyle]}
        </span>
      </div>

      {/* Next */}
      <motion.div
        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-xs"
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span>→</span>
        <span>{nextLabel}</span>
      </motion.div>

      {/* Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />
      </div>
    </motion.button>
  );
}
