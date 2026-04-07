/**
 * Pill
 * ------------------------------------------------------------------
 * Composant badge / étiquette au style glass premium.
 *
 * 🎯 Objectif :
 * - Mettre en valeur une information courte
 * - Servir de tag, catégorie, statut ou techno
 * - Maintenir une cohérence visuelle moderne (glass effect)
 *
 * ✨ Caractéristiques :
 * - Forme arrondie complète (rounded-full)
 * - Bordure subtile
 * - Background translucide
 * - Backdrop blur pour effet premium
 * - Typographie compacte et lisible
 *
 * @param {ReactNode} children - Contenu du badge (texte, icône, etc.)
 * @param {string} className - Classes supplémentaires personnalisées
 */

export default function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}
