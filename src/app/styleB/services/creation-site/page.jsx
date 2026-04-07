import GoodTitle from "@/components/anims/MotionTag";
import GoodP from "@/components/anims/GoodP";
import ReturnButton from "@/components/buttons/ReturnButton";

export const metadata = {
  title: "Création site | LAYMAdev",

  robots: {
    index: false,
    follow: true,
  },

  alternates: {
    canonical: "https://www.laymadev.com/styleB/services/creation-site",
  },
};

export default function CreationSite() {
  return (
    <>
      <div className="py-28 text-white">
        {/* HERO */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <GoodTitle>Création de site web à Béziers (hérault)</GoodTitle>
          <GoodP>
            LAYMA.dev est un studio web indépendant basé à Béziers dans
            l’Hérault, spécialisé dans la création de sites internet et
            d’applications sur mesure. Vous souhaitez développer votre présence
            en ligne ? Je conçois des sites internet modernes, performants et
            évolutifs pour les entreprises et indépendants à Béziers et dans
            l’Hérault.
          </GoodP>
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
        <div className="text-center">
          <ReturnButton />
        </div>
      </div>
    </>
  );
}
