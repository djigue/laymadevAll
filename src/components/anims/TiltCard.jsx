/**
 * TiltCard
 * ------------------------------------------------------------------
 * Composant interactif ajoutant un effet tilt 3D au survol.
 *
 * 🎯 Objectif :
 * - Apporter une interaction premium et dynamique
 * - Ajouter de la profondeur visuelle
 * - Rendre les cartes plus engageantes
 *
 * ✨ Effets appliqués :
 * - Rotation Z (inclinaison latérale)
 * - Rotation Y (effet 3D subtil)
 * - Scale léger pour effet “lift”
 * - Animation spring naturelle
 *
 * 🧩 Utilisation :
 * Sert généralement de wrapper autour d’une carte ou d’un bloc UI.
 *
 * @param {ReactNode} children - Contenu à animer
 * @param {string} className - Classes supplémentaires (layout / style)
 * @param {boolean} reverse - Inverse l’inclinaison
 * @param {number} tilt - Intensité de la rotation (défaut : -4°)
 * @param {number} scale - Facteur d’agrandissement au hover
 */

"use client";

import { motion } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  reverse = false,
  tilt = -4,
  scale = 1.04,
}) {
  const tiltValue = reverse ? tilt : -tilt;

  return (
    <motion.div
      whileHover={{
        rotateZ: tiltValue,
        rotateY: tiltValue / 2,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
