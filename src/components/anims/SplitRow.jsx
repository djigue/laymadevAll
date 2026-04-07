/**
 * SplitRow
 * ------------------------------------------------------------------
 * Composant layout en deux colonnes avec animation horizontale.
 *
 * 🎯 Objectif :
 * - Structurer un contenu principal + élément secondaire
 * - Apporter une animation latérale fluide
 * - Permettre l’inversion du layout
 * - Maintenir une cohérence visuelle avec SplitCol
 *
 * 🧩 Structure :
 * - Colonne large (contenu principal)
 * - Colonne étroite (visuel, carte, illustration)
 *
 * ✨ Effet visuel :
 * - Animation croisée gauche/droite
 * - Apparition progressive au scroll
 * - Léger décalage temporel pour renforcer la hiérarchie
 *
 * @param {ReactNode} left - Contenu principal (texte, section éditoriale)
 * @param {ReactNode} right - Élément secondaire (image, carte, composant)
 * @param {boolean} reverse - Inverse l’ordre des colonnes sur desktop
 * @param {string} position - Permet d’ajuster l’alignement horizontal
 */

"use client";

import { motion } from "framer-motion";

export default function SplitRow({
  left,
  right,
  reverse = false,
  position = "left",
}) {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div
        className={`
          grid grid-cols-1 md:grid-cols-12
          items-center gap-10
          mt-24
          ${position === "right" ? "md:justify-items-end" : ""}
        `}
      >
        {/* TEXTE */}
        <motion.div
          initial={{ x: reverse ? 120 : -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`
            md:col-span-9
            ${reverse ? "md:order-2" : "md:order-1"}
            w-full
          `}
        >
          {left}
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ x: reverse ? -120 : 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className={`
            md:col-span-3
            ${reverse ? "md:order-1" : "md:order-2"}
            w-full
          `}
        >
          <div className="max-w-xs mx-auto">{right}</div>
        </motion.div>
      </div>
    </section>
  );
}
