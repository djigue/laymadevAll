import PremiumCard from "@/components/anims/PremiumCard";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Projets web Béziers | Réalisations LAYMAdev",

  description:
    "Découvrez les projets réalisés par LAYMAdev à Béziers : sites internet, applications web et solutions digitales dans l’Hérault.",

  keywords: [
    "projets web Béziers",
    "portfolio développeur web",
    "réalisations site internet Hérault",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.laymadev.com/styleA/projects",
  },

  openGraph: {
    title: "Projets LAYMAdev",
    description: "Portfolio de projets web à Béziers.",
    url: "https://www.laymadev.com/styleA/projects",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/logoBlack.png",
        width: 800,
        height: 600,
        alt: "Projets web Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projets web Béziers",
    description: "Découvrez mes réalisations.",
    images: ["/logoBlack.png"],
  },
};

export default function ProjectsB() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 px-6 text-center overflow-hidden text-white">
        {/* Light directionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>
        <MotionTitle>
          Réalisations web à Béziers – Projets & Applications
        </MotionTitle>
        <MotionP>
          Découvrez des projets web conçus à Béziers, alliant performance,
          expérience utilisateur et développement sur mesure.
        </MotionP>
      </section>

      {/* CARDS */}
      <div className="space-y-28 max-w-6xl mx-auto mb-10">
        <PremiumCard
          image="/images/teoola.png"
          description="Application de gestion d’abonnés conçue pour la performance et l’automatisation."
          link="/styleA/projects/teoola"
          showButton
        />

        <PremiumCard
          image="/images/hotels1.png"
          description="Solution intelligente de gestion hôtelière."
          link="/styleA/projects/smart-hotel"
          showButton
        />
      </div>
    </>
  );
}
