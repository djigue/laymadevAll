import ButtonB from "@/components/buttons/ButtonB";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export default function CreationSite() {
  return (
    <>
      <div className="py-28 text-white">
        {/* HERO */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <MotionTitle>Création de site web à Béziers (hérault)</MotionTitle>

          <MotionP>
            LAYMA.dev est un studio web indépendant basé à Béziers dans
            l’Hérault, spécialisé dans la création de sites internet et
            d’applications sur mesure. Vous souhaitez développer votre présence
            en ligne ? Je conçois des sites internet modernes, performants et
            évolutifs pour les entreprises et indépendants à Béziers et dans
            l’Hérault.
          </MotionP>
        </div>

        {/* SECTION 1 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Un site internet pensé pour votre activité
            </h2>

            <p className="text-gray-400">
              Chaque projet de création de site web débute par une analyse de
              vos besoins. L’objectif est de concevoir une solution digitale
              adaptée à votre activité, capable de renforcer votre visibilité et
              de soutenir votre développement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Développement web moderne
            </h2>

            <p className="text-gray-400">
              Les sites sont développés avec des technologies modernes afin
              d’assurer performance, sécurité et évolutivité. Une attention
              particulière est portée à l’expérience utilisateur et à la qualité
              du code.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <ButtonB />
        </div>
      </div>
    </>
  );
}
