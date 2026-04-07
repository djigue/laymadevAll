import Gallery from "@/components/Gallery";
import { getImages } from "@/lib/getImages";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionP from "@/components/anims/GoodP";

export const metadata = {
  title: "Teoola | LAYMAdev",

  alternates: {
    canonical: "https://www.laymadev.com/styleC/projects/teoola",
  },
};

export default function TeoolaC() {
  const imagesTeoola = getImages("teoola");

  return (
    <>
      <MotionTitle className="text-4xl md:text-6xl font-semibold mt-10">
        Teoola – Application métier sur mesure
      </MotionTitle>
      <MotionP className="text-xl text-gray-400 max-w-3xl mx-auto mt-12 leading-relaxed mb-12">
        Application métier dédiée au suivi des adhésions, à la gestion
        d’événements et au pilotage commercial. Cette solution web a été conçue
        pour automatiser les processus internes et améliorer la visibilité des
        équipes.
      </MotionP>
      <Gallery images={imagesTeoola} />
    </>
  );
}
