/**
 * ScrollToTopButton
 * ------------------------------------------------------------------
 * Bouton flottant permettant de revenir en haut de la page
 * avec animation d’apparition/disparition.
 *
 * 🎯 Objectif :
 * - Améliorer l’expérience utilisateur sur pages longues
 * - Afficher le bouton uniquement après un certain scroll
 * - Fournir un retour haut fluide (smooth scroll)
 *
 * ✨ Fonctionnalités :
 * - Apparition conditionnelle selon la position scroll
 * - Animation via AnimatePresence
 * - Effet hover premium (glass + lift)
 * - Désactivé sur mobile (md:flex)
 *
 * @param {string} className - Classes supplémentaires personnalisées
 * @param {number} iconSize - Taille de l’icône ArrowUp
 * @param {number} showAfter - Distance scroll (px) avant affichage
 */

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton({
  className = "",
  iconSize = 20,
  showAfter = 300,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className={`
            hidden md:flex
            fixed bottom-8 right-8 z-50
            items-center justify-center
            w-12 h-12
            rounded-xl
            border border-white/15
            bg-white/10
            backdrop-blur-md
            text-white/90
            shadow-lg
            transition
            hover:bg-white/20
            hover:-translate-y-1
            ${className}
          `}
        >
          <ArrowUp size={iconSize} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
