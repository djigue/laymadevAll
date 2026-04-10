"use client";

import { motion } from "framer-motion";
import { usePageTransition } from "@/context/TransitionProvider";

export default function TransitionOverlayA() {
  const { isTransitioning, direction } = usePageTransition();
  return (
    <motion.div
      initial={false}
      animate={{
        x: isTransitioning
          ? "0vw"
          : direction === "forward"
          ? "100vw"
          : "-100vw",
      }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="
        fixed z-[9998] pointer-events-none bg-slate-950
        left-0 right-0 bottom-0 top-16
        md:left-72 md:top-0
      "
    />
  );
}
