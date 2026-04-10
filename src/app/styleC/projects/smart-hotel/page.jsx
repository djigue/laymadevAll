import Gallery from "@/components/Gallery";
import { getImages } from "@/lib/getImages";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionP from "@/components/anims/GoodP";

export default function SmartHotelC() {
  const imagesHotel = getImages("hotel");

  return (
    <>
      <MotionTitle className="text-4xl md:text-6xl font-semibold mt-10">
        SmartHotel – Application de gestion hôtelière
      </MotionTitle>
      <MotionP className="text-xl text-gray-400 max-w-3xl mx-auto mt-12 leading-relaxed mb-12">
        Plateforme de réservation et de gestion hôtelière développée sur mesure,
        pensée pour offrir une expérience fluide et performante aux
        établissements. L’application centralise les réservations, optimise les
        processus internes et améliore l’expérience utilisateur.
      </MotionP>
      <Gallery images={imagesHotel} />
    </>
  );
}
