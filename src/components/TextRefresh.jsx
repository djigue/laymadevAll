"use client";

import { motion } from "framer-motion";
import StyleSwitchButton from "./buttons/StyleSwitchButton";

export default function TextRefresh({ my = "my-0", ml = "ml-0", mt = "mt-0" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`${my} ${ml} ${mt} flex flex-col items-center justify-center gap-4 text-sm text-gray-400`}
    >
      <p className="text-xl text-center">
        <span className="font-medium text-gray-300">Astuce :</span> Appuyez sur
        le bouton pour découvrir un autre style d’interface.
      </p>

      {/* <StyleSwitcher /> */}
      <StyleSwitchButton />
    </motion.div>
  );
}
