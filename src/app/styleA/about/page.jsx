import ButtonB from "@/components/buttons/ButtonB";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 px-6 text-center overflow-hidden text-white">
        {/* Light directionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>

        <MotionTitle>
          À propos – Développeur web freelance à Béziers
        </MotionTitle>
        <MotionP>
          Développeur web freelance à Béziers (Hérault), spécialisé dans la
          conception de solutions web modernes, performantes et évolutives.
          J’accompagne entreprises et indépendants avec une approche claire,
          technique et orientée résultats.
        </MotionP>
      </section>

      {/* VISION / MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Ma vision du développement web
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Le digital ne devrait jamais être standardisé. Chaque projet mérite
            une solution réellement alignée avec votre activité, votre
            positionnement et vos objectifs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            Mon approche en tant que développeur freelance
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Concevoir des produits numériques robustes, maintenables et
            évolutifs. La qualité technique et la clarté d’exécution sont au
            cœur de chaque collaboration.
          </p>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 tracking-tight text-white">
            Une méthode claire et structurée
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-gray-300 text-lg">
            <div>
              <h3 className="text-white font-semibold mb-4">01 — Analyse</h3>
              <p>
                Compréhension précise de votre besoin, de votre environnement et
                de vos contraintes afin de poser des bases solides.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">02 — Conception</h3>
              <p>
                Définition d’une architecture technique et d’une expérience
                utilisateur cohérentes, pensées pour la performance et
                l’évolutivité.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">
                03 — Déploiement
              </h3>
              <p>
                Développement rigoureux, mise en production optimisée et
                accompagnement dans le temps si nécessaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-semibold text-center mb-16 text-white">
          Mes engagements professionnels
        </h2>

        <div className="grid md:grid-cols-2 gap-16 text-gray-300 text-lg">
          <div>
            <h3 className="text-white font-semibold mb-4">
              Excellence technique
            </h3>
            <p>
              Code propre, architecture solide, choix technologiques réfléchis
              et durables.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Transparence</h3>
            <p>
              Communication directe et claire, sans intermédiaire, avec des
              décisions techniques expliquées et assumées.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Performance</h3>
            <p>
              Optimisation continue, attention aux détails et exigence sur la
              qualité finale.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Vision long terme</h3>
            <p>
              Des solutions conçues pour évoluer avec votre activité et vos
              ambitions.
            </p>
          </div>
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="text-center py-24 border-t border-white/10">
        <p className="text-xl text-gray-400 mb-8">
          Vous avez un projet en tête ?
        </p>
        <ButtonB text="Discutons-en" />
      </section>
    </>
  );
}
