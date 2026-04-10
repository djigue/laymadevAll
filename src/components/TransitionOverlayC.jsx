"use client";

import { motion } from "framer-motion";
import { usePageTransition } from "@/context/TransitionProvider";

export default function TransitionOverlayC() {
  const { isTransitioning, direction } = usePageTransition();

  return (
    <motion.div
      initial={false}
      animate={{
        x: isTransitioning ? "0%" : direction === "forward" ? "100%" : "-100%",
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="
        fixed z-[9999] pointer-events-none bg-[#0f1115]

        /* 🔥 MOBILE : laisse la topbar */
        top-16 left-0 right-0 bottom-0

        /* 🔥 DESKTOP : laisse la sidebar */
        md:top-0 md:left-72 md:right-0 md:bottom-0
      "
    />
  );
}
