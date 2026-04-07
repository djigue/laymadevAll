import ProjectShowcase from "@/components/anims/ProjectShowcase";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionP from "@/components/anims/MotionP";

export const metadata = {
  title: "Projets | LAYMAdev",

  alternates: {
    canonical: "https://www.laymadev.com/styleC/projects",
  },
};

export default function Projets() {
  return (
    <div className="py-20 md:py-8">
      {/* HEADER */}
      <div className="text-center mb-20 md:mb-42">
        <MotionTitle className="text-4xl md:text-6xl font-bold text-center leading-tight md:mb-32 mt-12">
          Réalisations web à Béziers
        </MotionTitle>

        <MotionP className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Des projets web conçus sur mesure pour répondre à des enjeux métiers
          concrets, avec une attention particulière portée à la performance,
          l’expérience utilisateur et la robustesse technique.
        </MotionP>
      </div>

      {/* PROJECTS */}
      <div className="space-y-24 md:space-y-10">
        <ProjectShowcase
          name="teoola"
          title="Teoola – Application métier sur mesure"
          description="Application métier dédiée au suivi des adhésions, à la gestion d’événements et au pilotage commercial, conçue pour automatiser les processus et améliorer la visibilité des équipes."
          link="/projects/teoola"
        />

        <ProjectShowcase
          name="hotel"
          title="SmartHotel – Application de gestion hôtelière"
          description="Plateforme de réservation haut de gamme, pensée pour offrir une expérience fluide et performante aux établissements hôteliers."
          link="/projects/smarthotel"
          reverse
        />
      </div>
    </div>
  );
}
