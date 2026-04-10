export default function buildHref(pathname, href) {
  if (!href) return pathname; // 🔥 évite "#"

  // déjà une URL complète → on ne touche pas
  if (href.startsWith("/styleA") || href.startsWith("/styleC")) {
    return href;
  }

  // ancre
  if (href.startsWith("#")) return href;

  const parts = pathname.split("/");

  const currentStyle =
    parts[1] === "styleA" || parts[1] === "styleC"
      ? parts[1]
      : "styleA";

  return `/${currentStyle}${href}`;
}