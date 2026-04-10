import ButtonB from "@/components/buttons/ButtonB";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionDiv from "@/components/anims/MotionDiv";

export default function DevWeb() {
  return (
    <div className="py-28 text-white">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <MotionTitle>Développeur web freelance à Béziers (Hérault)</MotionTitle>

        <MotionP>
          LAYMA.dev accompagne entreprises et indépendants dans la création de
          solutions web modernes, performantes et évolutives.
        </MotionP>
      </div>

      {/* INTRO */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="text-gray-400">
          Une approche indépendante, technique et orientée résultats pour vos
          projets digitaux.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
        <MotionDiv className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition backdrop-blur">
          <h3 className="text-white text-lg font-medium mb-3">Sur mesure</h3>
          <p className="text-gray-400 text-sm">
            Chaque projet est conçu spécifiquement selon vos besoins métier.
          </p>
        </MotionDiv>

        <MotionDiv className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition backdrop-blur">
          <h3 className="text-white text-lg font-medium mb-3">Fiabilité</h3>
          <p className="text-gray-400 text-sm">
            Code propre, architecture solide et solutions durables dans le
            temps.
          </p>
        </MotionDiv>

        <MotionDiv className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition backdrop-blur">
          <h3 className="text-white text-lg font-medium mb-3">Performance</h3>
          <p className="text-gray-400 text-sm">
            Optimisation technique pour garantir rapidité et efficacité.
          </p>
        </MotionDiv>
      </div>

      {/* SECTION 1 */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Un développeur web indépendant à Béziers
          </h2>

          <p className="text-gray-400">
            J’accompagne les entreprises locales dans la conception de solutions
            digitales sur mesure, adaptées à leurs besoins et à leur évolution.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Création de solutions web sur mesure
          </h2>

          <p className="text-gray-400">
            Sites vitrines, plateformes web ou applications métier : chaque
            projet est conçu avec une exigence technique élevée et une vision
            long terme.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Accompagnement des entreprises
          </h2>

          <p className="text-gray-400">
            Collaboration sur le long terme pour faire évoluer vos outils
            digitaux en fonction de votre activité.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Méthode structurée</h2>

          <p className="text-gray-400">
            Analyse, conception, développement et optimisation : une approche
            claire pour garantir qualité et performance.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <ButtonB text="Discutons-en" />
      </div>
    </div>
  );
}
