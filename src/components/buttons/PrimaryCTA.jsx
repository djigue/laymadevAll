/**
 * PrimaryCTA
 * ------------------------------------------------------------------
 * Bouton Call-To-Action principal avec scroll fluide vers une section.
 *
 * 🎯 Objectif :
 * - Permettre une navigation interne fluide (scroll smooth)
 * - Servir de CTA principal dans les sections Hero / Landing
 * - Maintenir un style premium cohérent (gradient moderne)
 *
 * ✨ Fonctionnalités :
 * - Scroll automatique vers un élément via son ID
 * - Animation hover légère (lift subtil)
 * - Style personnalisable via className
 *
 * @param {string} label - Texte affiché dans le bouton
 * @param {string} targetId - ID HTML de la section cible
 * @param {string} className - Classes Tailwind personnalisées
 */

"use client";

export default function PrimaryCTA({
  label = "Discuter du projet",
  targetId = "",
  className = "inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-[#22c55e] via-[#14b8a6] to-[#38bdf8] text-slate-900 font-semibold shadow-lg transition hover:-translate-y-0.5",
}) {
  const handleClick = () => {
    const el = document.getElementById(targetId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
