import ButtonB from "@/components/buttons/ButtonB";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export default function DevWeb() {
  return (
    <>
      <div className="py-28 text-white">
        {/* HERO */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <MotionTitle>
            Développeur web freelance à Béziers (Hérault)
          </MotionTitle>

          <MotionP>
            <strong>LAYMA.dev</strong> est un développeur web indépendant basé à
            Béziers dans l’Hérault. J’accompagne entreprises, indépendants et
            porteurs de projet dans la création de sites internet et
            d’applications web modernes, performantes et évolutives.
          </MotionP>
        </div>

        {/* SECTION 1 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Un développeur web indépendant basé à Béziers (hérault)
            </h2>

            <p className="text-gray-400">
              Basé à Béziers dans l’Hérault, j’accompagne les entreprises
              locales dans la conception de solutions digitales sur mesure.
              L’objectif est de créer des outils fiables, performants et
              capables d’évoluer avec votre activité.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Création de solutions web sur mesure
            </h2>

            <p className="text-gray-400">
              Chaque projet est développé avec des technologies modernes afin
              d’assurer performance, sécurité et maintenabilité. Que ce soit
              pour un site vitrine, une plateforme web ou une application
              métier, l’approche reste la même : qualité technique et vision
              long terme.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Accompagnement des entreprises dans l’Hérault
            </h2>

            <p className="text-gray-400">
              En tant que développeur web freelance à Béziers (Hérault), je
              travaille avec des entreprises locales qui souhaitent renforcer
              leur présence en ligne ou développer des outils digitaux adaptés à
              leurs besoins. Chaque collaboration est pensée pour apporter des
              solutions concrètes et durables.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Une approche technique claire et structurée
            </h2>

            <p className="text-gray-400">
              LAYMA.dev repose sur une approche structurée du développement web
              : compréhension du besoin, architecture solide et développement
              propre. Cette méthode permet de garantir des solutions fiables et
              évolutives dans le temps.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <ButtonB text="Discutons-en" />
        </div>
      </div>
    </>
  );
}
