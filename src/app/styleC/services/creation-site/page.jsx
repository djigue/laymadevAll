import ButtonB from "@/components/buttons/ButtonB";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionDiv from "@/components/anims/MotionDiv";

export default function CreationSite() {
  return (
    <div className="py-28">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <MotionTitle>Création de site web à Béziers (Hérault)</MotionTitle>

        <MotionP>
          LAYMA.dev est un studio web indépendant basé à Béziers, spécialisé
          dans la création de sites internet et d’applications sur mesure.
          Développez votre présence en ligne avec des solutions modernes,
          performantes et évolutives.
        </MotionP>
      </div>

      {/* SECTION INTRO */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="text-gray-400">
          Chaque projet est pensé pour répondre à vos objectifs : visibilité,
          performance et croissance.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
        <MotionDiv className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition backdrop-blur">
          <h3 className="text-white text-lg font-medium mb-3">
            Analyse & stratégie
          </h3>
          <p className="text-gray-400 text-sm">
            Compréhension de vos besoins pour concevoir une solution réellement
            adaptée à votre activité.
          </p>
        </MotionDiv>

        <MotionDiv className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition backdrop-blur">
          <h3 className="text-white text-lg font-medium mb-3">
            Design & expérience
          </h3>
          <p className="text-gray-400 text-sm">
            Interfaces modernes, fluides et pensées pour maximiser l’engagement
            utilisateur.
          </p>
        </MotionDiv>

        <MotionDiv className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition backdrop-blur">
          <h3 className="text-white text-lg font-medium mb-3">
            Performance & SEO
          </h3>
          <p className="text-gray-400 text-sm">
            Optimisation technique pour un site rapide, bien référencé et
            durable.
          </p>
        </MotionDiv>
      </div>

      {/* SECTION TEXTE */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Un site internet pensé pour votre activité
          </h2>

          <p className="text-gray-400">
            Chaque projet de création de site web débute par une analyse de vos
            besoins. L’objectif est de concevoir une solution digitale adaptée,
            capable de renforcer votre visibilité et soutenir votre
            développement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Développement web moderne
          </h2>

          <p className="text-gray-400">
            Les sites sont développés avec des technologies modernes pour
            garantir performance, sécurité et évolutivité, avec une attention
            particulière portée à l’expérience utilisateur.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <ButtonB />
      </div>
    </div>
  );
}
