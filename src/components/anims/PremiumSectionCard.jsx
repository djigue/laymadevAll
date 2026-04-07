/**
 * PremiumSectionCard
 * ------------------------------------------------------------------
 * Composant de section premium avec :
 * - Effet tilt 3D interactif basé sur la position de la souris
 * - Lumière directionnelle dynamique
 * - Image de fond immersive avec overlay sombre
 * - Animation fluide via Framer Motion
 *
 * 🎯 Objectif :
 * Créer une section immersive haut de gamme pour présenter
 * un projet, un service ou un contenu clé avec une forte
 * dimension visuelle et interactive.
 *
 * @param {string} image - URL de l’image de fond
 * @param {ReactNode} children - Contenu affiché au premier plan
 * @param {boolean} reverse - (Réservé pour évolution layout)
 * @param {string} containerClass - Classes supplémentaires personnalisées
 */

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function PremiumSectionCard({
  image,
  children,
  reverse = false,
  containerClass = "",
}) {
  const cardRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  /* =========================
     TILT
  ========================= */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 80, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 80, damping: 20 });

  /* =========================
     LIGHT
  ========================= */
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);

  const smoothLightX = useSpring(lightX, { stiffness: 120, damping: 20 });
  const smoothLightY = useSpring(lightY, { stiffness: 120, damping: 20 });

  /* =========================
     EVENTS
  ========================= */
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // ❌ disable mobile

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set(((y - height / 2) / height) * -4);
    rotateY.set(((x - width / 2) / width) * 4);

    lightX.set((x / width) * 100);
    lightY.set((y / height) * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    lightX.set(50);
    lightY.set(50);
    setIsHover(false);
  };

  return (
    <motion.section
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1200,
      }}
      className={`relative mt-24 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 ${containerClass}`}
    >
      {/* =========================
          BACKGROUND IMAGE (Next Image)
      ========================= */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* =========================
          DARK OVERLAY
      ========================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 to-slate-900/80" />

      {/* =========================
          LIGHT EFFECT
      ========================= */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${smoothLightX}% ${smoothLightY}%, rgba(255,255,255,0.08), transparent 60%)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* =========================
          BORDER GLOW (bonus premium)
      ========================= */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5" />

      {/* =========================
          CONTENT
      ========================= */}
      <div className="relative z-10 px-6 md:px-12 py-20 md:py-28 max-w-6xl mx-auto text-white">
        {children}
      </div>
    </motion.section>
  );
}
