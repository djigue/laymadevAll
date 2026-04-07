/**
 * SplitSection
 * ------------------------------------------------------------------
 * Section immersive avec image de fond animée + contenu superposé.
 *
 * 🎯 Objectif :
 * - Créer un bloc visuel fort avec background dynamique
 * - Permettre une animation configurable (axe X ou Y)
 * - Offrir un contrôle fin via props (overlay, durée, delay, shadow…)
 * - Maintenir un rendu premium et réutilisable
 *
 * ✨ Fonctionnalités :
 * - Animation indépendante du background et du contenu
 * - Support de l’inversion via `reverse`
 * - Axe d’animation personnalisable (x ou y)
 * - Overlay personnalisable
 * - Ombre personnalisable
 *
 * @param {string} image - URL de l’image de fond
 * @param {string} overlay - Classe Tailwind pour l’overlay sombre
 * @param {ReactNode} children - Contenu affiché au premier plan
 * @param {string} containerClass - Classes additionnelles pour le wrapper
 * @param {string} contentClass - Classes additionnelles pour le contenu
 * @param {boolean} reverse - Inverse la direction d’animation
 * @param {string} axe - Axe d’animation ("x" ou "y")
 * @param {number} duration - Durée de l’animation
 * @param {number} delay - Délai appliqué au contenu
 * @param {string} shadow - Classe d’ombre personnalisée
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplitSection({
  image,
  overlay = "bg-black/60",
  children,
  containerClass = "",
  contentClass = "",
  reverse = false,
  axe = "x",
  duration = 1,
  delay = 0.2,
  shadow = "shadow-red",
}) {
  const imageFrom = reverse ? 120 : -120;
  const contentFrom = reverse ? -120 : 120;

  return (
    <div
      className={`relative rounded-2xl w-5/6 mx-auto mt-6 ${shadow} overflow-hidden ${containerClass}`}
    >
      {/* BACKGROUND */}
      <motion.div
        initial={{ [axe]: imageFrom, opacity: 0 }}
        whileInView={{ [axe]: 0, opacity: 1 }}
        transition={{ duration, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt="Background section"
          fill
          className="object-cover"
          priority={false}
        />

        {/* overlay */}
        <div className={`absolute inset-0 ${overlay}`} />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ [axe]: contentFrom, opacity: 0 }}
        whileInView={{ [axe]: 0, opacity: 1 }}
        transition={{ duration, ease: "easeOut", delay }}
        viewport={{ once: true }}
        className={`relative z-10 p-8 text-white font-sans leading-relaxed tracking-wide max-w-5xl mx-auto ${contentClass}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
