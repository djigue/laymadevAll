import Gallery from "@/components/Gallery";
import { getImages } from "@/lib/getImages";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Projet Smart Hotel | LAYMAdev",

  description:
    "Projet Smart Hotel développé par LAYMAdev : solution digitale innovante pour la gestion hôtelière.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.laymadev.com/styleA/projects/smart-hotel",
  },

  openGraph: {
    title: "Projet Smart Hotel",
    description: "Projet web réalisé par LAYMAdev.",
    url: "https://www.laymadev.com/styleA/projects/smart-hotel",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/logoBlack.png",
        width: 800,
        height: 600,
        alt: "Projet Smart Hotel",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function SmartHotelB() {
  return (
    <>
      <section className="relative py-32 px-6 text-center overflow-hidden text-white">
        {/* Light directionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>
        {/* TITLE */}
        <MotionTitle>SmartHotel – Application de gestion hôtelière</MotionTitle>

        {/* TEXT */}
        <MotionP>
          Plateforme de réservation et de gestion hôtelière développée sur
          mesure, pensée pour offrir une expérience fluide, rapide et
          performante aux établissements.
        </MotionP>
      </section>

      <Gallery images={getImages("hotel")} />
    </>
  );
}
