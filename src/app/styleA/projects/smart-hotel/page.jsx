import Gallery from "@/components/Gallery";
import { getImages } from "@/lib/getImages";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

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
