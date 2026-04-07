import { redirect } from "next/navigation";

export const metadata = {
  title:
    "Développeur web freelance à Béziers – Création site internet (Hérault, Hauts Cantons)",
  description:
    "Création de sites web modernes à Béziers. Développeur freelance spécialisé en applications web et solutions sur mesure.",
  openGraph: {
    title:
      "Développeur web freelance à Béziers (Hérault, Hauts Cantons) – LAYMA.dev",
    description:
      "Création de site internet à Béziers (Hérault, Hauts Cantons). Solutions web modernes et performantes.",
    url: "https://www.laymadev.com/",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  redirect("/styleA/home");
}
