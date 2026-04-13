/**
 * ProjectShowcase
 * ------------------------------------------------------------------
 * Section de présentation immersive d’un projet.
 *
 * 🎯 Objectif :
 * - Mettre en avant un projet avec texte + visuels dynamiques
 * - Apporter un effet premium grâce aux animations Framer Motion
 * - Créer une composition visuelle en superposition d’images
 *
 * 🧩 Structure :
 * - Colonne gauche : Contenu éditorial (titre, description, CTA)
 * - Colonne droite : Composition d’images en overlay
 * - Possibilité d’inverser le layout via la prop `reverse`
 *
 * @param {string} name - Identifiant du projet (utilisé pour récupérer les images)
 * @param {string} title - Titre du projet
 * @param {string} description - Description détaillée
 * @param {string} link - Route vers la page projet
 * @param {boolean} reverse - Inverse l’ordre des colonnes sur desktop
 */

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getImages } from "@/lib/getImages";

export default function ProjectShowcase({
  name,
  title,
  description,
  link,
  reverse = false,
}) {
  const [mainImage, secondImage, thirdImage] = getImages(name);

  return (
    <section className="grid md:grid-cols-2 md:gap-28 items-center">
      {/* TEXT */}
      <div className={`${reverse ? "md:order-2" : ""} mb-10 md:mb-48`}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 leading-relaxed mb-10 max-w-xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <Link
            href={link}
            className="inline-block px-7 py-3 bg-white text-black font-medium rounded-lg hover:opacity-90 transition"
          >
            Voir le projet
          </Link>
        </motion.div>
      </div>

      {/* VISUAL */}
      <div
        className={`relative flex justify-center ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <div className="relative w-full max-w-[750px] h-[350px] md:h-[620px]">
          {/* GLOW */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
          </div>

          {/* MAIN IMAGE */}
          {mainImage && (
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-[78%] z-20 rounded-2xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
            >
              <img src={mainImage} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          )}

          {/* RIGHT IMAGE */}
          {secondImage && (
            <motion.div
              initial={{ opacity: 0, y: 120, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-24 right-0 w-[66%] z-10 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
            >
              <img src={secondImage} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          )}

          {/* LEFT IMAGE */}
          {/* LEFT IMAGE */}
          {thirdImage && (
            <motion.div
              initial={{ opacity: 0, y: 140, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute bottom-16 md:bottom-60 right-40 md:right-48 w-[56%] z-30 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
            >
              <img src={thirdImage} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
