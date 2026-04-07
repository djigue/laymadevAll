export default function buildHref(pathname, href) {
  if (!href) return "#";

  const parts = pathname.split("/");

  const currentStyle =
    parts[1] === "styleA" || parts[1] === "styleC"
      ? parts[1]
      : "styleA";

  if (href.startsWith("#")) return href;

  return `/${currentStyle}${href}`;
}