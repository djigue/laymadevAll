import Gallery from "@/components/Gallery";
import { getImages } from "@/lib/getImages";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Projet Teoola | LAYMAdev",

  description:
    "Projet Teoola réalisé par LAYMAdev : plateforme web innovante développée sur mesure.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.laymadev.com/styleA/projects/teoola",
  },

  openGraph: {
    title: "Projet Teoola",
    description: "Projet web développé par LAYMAdev.",
    url: "https://www.laymadev.com/styleA/projects/teoola",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/logoBlack.png",
        width: 800,
        height: 600,
        alt: "Projet Teoola",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function TeoolaB() {
  return (
    <>
      <section className="relative py-32 px-6 text-center overflow-hidden text-white">
        {/* Light directionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>
        <MotionTitle>Teoola – Application métier sur mesure</MotionTitle>
        <MotionP>
          Application métier dédiée au suivi des adhésions, à la gestion
          d’événements et au pilotage commercial. Cette solution web a été
          conçue pour automatiser les processus internes et améliorer la
          visibilité des équipes.
        </MotionP>
      </section>
      <Gallery images={getImages("teoola")} />
    </>
  );
}
