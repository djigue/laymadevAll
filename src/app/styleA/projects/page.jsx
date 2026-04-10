import PremiumCard from "@/components/anims/PremiumCard";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

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
