/**
 * PremiumTildCard
 * ------------------------------------------------------------------
 * Carte premium basée sur le composant TiltCard.
 *
 * 🎯 Objectif :
 * - Fournir une carte élégante et moderne
 * - Intégrer un effet tilt interactif (hérité de TiltCard)
 * - Apporter une profondeur visuelle avec effets glow
 * - Structurer un contenu avec titre, sous-titre et contenu libre
 *
 * 🧩 Architecture :
 * - Wrapper : TiltCard (gère l'effet 3D interactif)
 * - Effets lumineux décoratifs en arrière-plan
 * - Zone contenu structurée et priorisée visuellement
 *
 * @param {string} title - Titre principal de la carte
 * @param {string} subtitle - Sous-titre optionnel
 * @param {ReactNode} children - Contenu libre (texte, boutons, listes, etc.)
 * @param {boolean} reverse - Permet d’inverser l’effet tilt si supporté par TiltCard
 */

"use client";

import TiltCard from "./TiltCard";

export default function PremiumTildCard({
  title,
  subtitle,
  children,
  reverse = false,
}) {
  return (
    <TiltCard
      reverse={reverse}
      className="
        relative overflow-hidden rounded-2xl
        border border-white/15 bg-white/8 backdrop-blur-xl
        shadow-[0_20px_70px_-35px_rgba(56,189,248,0.45)]
        p-7 md:p-8 text-white
      "
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-2 text-white/75 leading-relaxed">{subtitle}</p>
          )}
        </div>

        {children}
      </div>
    </TiltCard>
  );
}
