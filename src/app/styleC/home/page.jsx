import Link from "next/link";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionP from "@/components/anims/GoodP";
import MotionDiv from "@/components/anims/MotionDiv";

export default function HomeC() {
  return (
    <>
      {/* HERO */}
      <div className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid md:grid-cols-2 gap-20 items-center md:mb-20 md:mt-12">
          {/* LEFT */}
          <div>
            <MotionTitle className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 mt-10">
              Studio web à Béziers
              <br />
              Des solutions sur mesure, pensées pour durer.
            </MotionTitle>

            <MotionP
              startY={40}
              duration={0.8}
              className="text-gray-400 text-lg max-w-xl mb-6"
            >
              LAYMA.dev est un studio web indépendant basé à Béziers (Hérault).
              J’accompagne entreprises et indépendants dans la conception et le
              développement d’applications web modernes, fiables et évolutives.
            </MotionP>

            {/* 🔥 AJOUT SEO */}
            <MotionP
              startY={50}
              duration={1}
              className="text-gray-500 text-base max-w-xl mb-10"
            >
              Spécialisé dans le développement web sur mesure, je conçois des
              sites internet et applications performantes, optimisées pour le
              référencement naturel (SEO) et adaptées aux besoins spécifiques de
              chaque projet. Mon approche repose sur une architecture solide,
              des technologies modernes et une vision long terme.
            </MotionP>

            <MotionDiv startY={50} duration={1}>
              <Link href="/about">
                <button className="px-7 py-3 bg-white text-black font-medium rounded-lg hover:opacity-90 transition">
                  Découvrir mes services
                </button>
              </Link>
            </MotionDiv>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mt-6 md:mt-0">
            {/* Mobile */}
            <div className="relative md:hidden h-[340px]">
              <div className="absolute top-0 left-0 w-[78%] rounded-2xl overflow-hidden shadow-2xl z-10">
                <img
                  src="/images/bg_code.jpg"
                  alt="Studio web à Béziers – développement web sur mesure"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>

              <div className="absolute top-24 right-0 w-[68%] rounded-2xl overflow-hidden shadow-2xl z-20">
                <img
                  src="/images/bg_process.jpg"
                  alt="Processus de création digitale – studio web Béziers"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>

              <div className="absolute bottom-0 left-8 w-[58%] rounded-2xl overflow-hidden shadow-2xl z-30">
                <img
                  src="/images/bg_tech.jpg"
                  alt="Technologies web modernes – React Node Symfony"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
              </div>
            </div>

            {/* Desktop */}
            <div className="relative h-[520px] hidden md:block -translate-y-15 overflow-visible">
              <div className="absolute -top-100 -right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

              <MotionDiv
                startY={80}
                duration={0.7}
                className="absolute top-0 right-10 w-80 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/bg_code.jpg"
                  className="w-full h-full object-cover"
                  alt="Développement web sur mesure à Béziers"
                />
                <div className="absolute inset-0 bg-black/40" />
              </MotionDiv>

              <MotionDiv
                startY={120}
                duration={0.9}
                className="absolute top-40 left-0 w-72 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/bg_process.jpg"
                  className="w-full h-full object-cover"
                  alt="Méthodologie de développement web"
                />
                <div className="absolute inset-0 bg-black/50" />
              </MotionDiv>

              <MotionDiv
                startY={60}
                duration={1.1}
                className="absolute bottom-[-120px] right-20 w-64 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/bg_tech.jpg"
                  className="w-full h-full object-cover"
                  alt="Stack technique moderne pour applications web"
                />
                <div className="absolute inset-0 bg-black/60" />
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 SECTION SEO AJOUTÉE */}
      <section className="max-w-6xl mt-20 md:mt-0 mx-auto px-6 pb-28">
        <div className="space-y-20">
          {/* BLOCK 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Un studio web indépendant à Béziers
              </h2>

              <p className="text-gray-400 mb-4">
                En tant que développeur web freelance à Béziers, je propose une
                approche différente des agences traditionnelles. Chaque projet
                est conçu sur mesure.
              </p>

              <p className="text-gray-500">
                L’objectif : créer des solutions fiables, évolutives et adaptées
                aux besoins métiers.
              </p>
            </div>

            {/* IMAGE (optionnelle mais recommandée) */}
            <MotionDiv
              startY={60}
              duration={1}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/codeC.jpg"
                alt="Studio web Béziers création sur mesure"
                className="w-full h-72 object-cover"
              />
            </MotionDiv>
          </div>

          {/* BLOCK 2 - CARDS */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
              Développement web sur mesure et performance
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* CARD 1 */}
              <MotionDiv className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-white font-medium mb-2">⚡ Performance</h3>
                <p className="text-gray-400 text-sm">
                  Applications rapides et optimisées pour offrir la meilleure
                  expérience utilisateur.
                </p>
              </MotionDiv>

              {/* CARD 2 */}
              <MotionDiv className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-white font-medium mb-2">🔍 SEO</h3>
                <p className="text-gray-400 text-sm">
                  Structure technique optimisée pour améliorer la visibilité sur
                  Google.
                </p>
              </MotionDiv>

              {/* CARD 3 */}
              <MotionDiv className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
                <h3 className="text-white font-medium mb-2">🧱 Sur mesure</h3>
                <p className="text-gray-400 text-sm">
                  Chaque projet est conçu selon vos besoins, sans template
                  générique.
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
