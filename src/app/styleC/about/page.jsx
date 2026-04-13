import MotionTitle from "@/components/anims/MotionTitle";
import MotionTag from "@/components/anims/MotionTag";

export default function AboutC() {
  return (
    <div className="space-y-20">
      <MotionTitle className="text-4xl md:text-6xl font-bold text-center leading-tight md:mb-32 mt-12">
        Studio web indépendant à Béziers
      </MotionTitle>

      {/* SECTION 1 — VISION */}
      <section className="grid md:grid-cols-2 gap-12 md:gap-20 items-center md:mb-20">
        <div className="md:pb-20">
          <MotionTag
            tag="h2"
            once={false}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Une approche structurée en développement web
          </MotionTag>

          <MotionTag
            tag="p"
            once={false}
            className="text-gray-400 leading-relaxed max-w-xl"
          >
            Chaque projet débute par une compréhension précise de vos enjeux, de
            vos objectifs et de votre contexte. En tant que studio indépendant,
            je conçois des solutions web pensées pour la performance, la
            fiabilité et l’évolutivité, avec un accompagnement direct et sans
            intermédiaire.
          </MotionTag>
        </div>

        <div className="relative mt-8 md:mt-0">
          {/* Mobile */}
          <div className="relative md:hidden h-[320px]">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-56 h-56 bg-cyan-400/10 blur-3xl rounded-full" />

            <MotionTag
              tag="div"
              startY={50}
              duration={0.6}
              className="absolute top-0 left-0 w-[78%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img
                src="/images/bg_service.jpg"
                className="object-cover w-full h-48"
                alt="LAYMA.dev studio web à Béziers (Hérault) – conception de services digitaux"
              />
              <div className="absolute inset-0 bg-black/40" />
            </MotionTag>

            <MotionTag
              tag="div"
              startY={80}
              duration={0.8}
              className="absolute top-24 right-0 w-[68%] rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <img
                src="/images/bg_choice.jpg"
                className="object-cover w-full h-44"
                alt="LAYMA.dev studio web à Béziers (Hérault) – conception de services digitaux"
              />
              <div className="absolute inset-0 bg-black/50" />
            </MotionTag>
          </div>

          {/* Desktop */}
          <div className="relative h-[500px] hidden md:block">
            <MotionTag
              tag="div"
              startY={60}
              duration={0.6}
              className="absolute top-0 right-0 w-80 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/bg_service.jpg"
                className="object-cover w-full h-full"
                alt="LAYMA.dev studio web à Béziers (Hérault) – conception de services digitaux"
              />
              <div className="absolute inset-0 bg-black/40" />
            </MotionTag>

            <MotionTag
              tag="div"
              startY={100}
              duration={0.8}
              className="absolute top-40 left-0 w-72 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/bg_choice.jpg"
                className="object-cover w-full h-full"
                alt="LAYMA.dev studio web à Béziers (Hérault) – conception de services digitaux"
              />
              <div className="absolute inset-0 bg-black/50" />
            </MotionTag>
          </div>
        </div>
      </section>

      {/* SECTION 2 — EXPERTISE */}
      <section className="grid md:grid-cols-2 gap-12 md:gap-20 items-center md:mb-42">
        <div className="relative mt-8 md:mt-0 order-2 md:order-1">
          {/* Mobile */}
          <div className="relative md:hidden h-[330px]">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-56 h-56 bg-blue-400/10 blur-3xl rounded-full" />

            <MotionTag
              tag="div"
              startY={50}
              duration={0.7}
              className="absolute top-0 right-0 w-[76%] rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <img
                src="/images/expertise.jpg"
                className="object-cover w-full h-48"
                alt="LAYMA.dev studio web à Béziers (Hérault) – expertise web"
              />
              <div className="absolute inset-0 bg-black/40" />
            </MotionTag>

            <MotionTag
              tag="div"
              startY={80}
              duration={0.9}
              className="absolute bottom-0 left-0 w-[66%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img
                src="/images/services.avif"
                className="object-cover w-full h-44"
                alt="LAYMA.dev studio web à Béziers (Hérault) – services digitaux"
              />
              <div className="absolute inset-0 bg-black/60" />
            </MotionTag>
          </div>

          {/* Desktop */}
          <div className="relative h-[500px] hidden md:block">
            <MotionTag
              tag="div"
              startY={80}
              duration={0.7}
              className="absolute top-0 left-10 w-80 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/expertise.jpg"
                className="object-cover w-full h-full"
                alt="LAYMA.dev studio web à Béziers (Hérault) – expertise web"
              />
              <div className="absolute inset-0 bg-black/40" />
            </MotionTag>

            <MotionTag
              tag="div"
              startY={120}
              duration={0.9}
              className="absolute bottom-0 right-10 w-72 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/services.avif"
                className="object-cover w-full h-full"
                alt="LAYMA.dev studio web à Béziers (Hérault) – services digitaux"
              />
              <div className="absolute inset-0 bg-black/60" />
            </MotionTag>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <MotionTag
            tag="h2"
            once={false}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Expertise en développement web & applications sur mesure
          </MotionTag>

          <MotionTag tag="p" once={false} className="">
            <ul className="text-gray-400 space-y-3 leading-relaxed">
              <li>• Développement web moderne</li>
              <li>• Applications sur mesure</li>
              <li>• Architecture back-end robuste</li>
              <li>• Intégrations API & automatisations</li>
              <li>• Conseil technique & accompagnement long terme</li>
            </ul>
          </MotionTag>
        </div>
      </section>

      {/* SECTION 3 — PROCESS */}
      <section className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="md:pb-20">
          <MotionTag
            tag="h2"
            once={false}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Un processus de création web maîtrisé et durable
          </MotionTag>

          <MotionTag
            tag="p"
            once={false}
            className="text-gray-400 leading-relaxed max-w-xl"
          >
            Analyse, conception, développement, mise en production et suivi.
            Chaque étape est structurée pour garantir qualité, performance et
            pérennité. Après la livraison, une formule d’accompagnement peut
            être mise en place. Elle inclut l’hébergement, la maintenance
            technique, les mises à jour et un support continu, afin de garantir
            stabilité et évolution dans le temps.
          </MotionTag>
        </div>

        <div className="relative mt-8 md:mt-0">
          {/* Mobile */}
          <div className="relative md:hidden h-[320px]">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-56 h-56 bg-violet-400/10 blur-3xl rounded-full" />

            <MotionTag
              tag="div"
              startY={50}
              duration={0.6}
              className="absolute top-0 left-0 w-[78%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img
                src="/images/stats.png"
                className="object-cover w-full h-48"
                alt="LAYMA.dev studio web à Béziers (Hérault) – statistiques et performance"
              />
              <div className="absolute inset-0 bg-black/40" />
            </MotionTag>

            <MotionTag
              tag="div"
              startY={80}
              duration={0.8}
              className="absolute top-24 right-0 w-[68%] rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <img
                src="/images/hebergement.jpg"
                className="object-cover w-full h-44"
                alt="LAYMA.dev studio web à Béziers (Hérault) – hébergement et maintenance"
              />
              <div className="absolute inset-0 bg-black/50" />
            </MotionTag>
          </div>

          {/* Desktop */}
          <div className="relative h-[500px] hidden md:block">
            <MotionTag
              tag="div"
              startY={60}
              duration={0.6}
              className="absolute top-0 right-0 w-80 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/stats.png"
                className="object-cover w-full h-full"
                alt="LAYMA.dev studio web à Béziers (Hérault) – statistiques et performance"
              />
              <div className="absolute inset-0 bg-black/40" />
            </MotionTag>

            <MotionTag
              tag="div"
              startY={100}
              duration={0.8}
              className="absolute top-40 left-0 w-72 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/hebergement.jpg"
                className="object-cover w-full h-full"
                alt="LAYMA.dev studio web à Béziers (Hérault) – hébergement et maintenance"
              />
              <div className="absolute inset-0 bg-black/50" />
            </MotionTag>
          </div>
        </div>
      </section>
    </div>
  );
}
