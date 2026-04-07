import Link from "next/link";
import SplitSection from "@/components/anims/SplitSection";
import SplitRow from "@/components/anims/SplitRow";
import Separator from "@/components/Separator";
import Carousel from "@/components/Carousel";
import ContactFormB from "@/components/forms/ContactForm";
import { getImages } from "@/lib/getImages";
import Pill from "@/components/ui/Pill";
import PremiumTildCard from "@/components/anims/PremiumTildCard";
import PrimaryCTA from "@/components/buttons/PrimaryCTA";
import ScrollToTopButton from "@/components/buttons/ScrollToTopButton";

export const metadata = {
  title: "LAYMAdev - Version alternative",

  robots: {
    index: false,
    follow: true,
  },

  alternates: {
    canonical: "https://www.laymadev.com/styleB",
  },

  openGraph: {
    title: "LAYMAdev",
    description: "Version alternative du site LAYMAdev.",
    url: "https://www.laymadev.com/styleB",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/logoBlack.png",
        width: 800,
        height: 600,
        alt: "LAYMAdev",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function HomeB() {
  const imagesHotel = getImages("hotel");
  const imagesTeoola = getImages("teoola");

  return (
    <>
      <ScrollToTopButton />
      <div className="relative z-10 flex flex-col">
        {/* HERO */}
        <header className="px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Pill className="border-cyan-200/20 bg-cyan-200/10 text-cyan-50">
                Studio indépendant • Freelance
              </Pill>
              <Pill className="border-emerald-200/20 bg-emerald-200/10 text-emerald-50">
                React • Symfony • Node
              </Pill>
              <Pill className="border-violet-200/20 bg-violet-200/10 text-violet-50">
                Sur-mesure • Performant
              </Pill>
            </div>

            <h1 className="font-space text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
              Développeur web freelance à Béziers – Création de site internet
              sur mesure
            </h1>

            <p className="font-dancing text-4xl md:text-6xl mt-4 text-white/90 font-light tracking-wide">
              LAYMA<span className="text-cyan-300 font-semibold">.dev</span>
            </p>

            <p className="mt-4 max-w-3xl text-white/80 text-lg leading-relaxed">
              Développeur web freelance à Béziers, je conçois des sites internet
              modernes, performants et optimisés pour le référencement naturel
              (SEO) pour les entreprises et indépendants dans l’Hérault.
            </p>

            <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
              Vous pouvez également découvrir mes services de{" "}
              <Link
                href="/styleB/services/creation-site"
                className="text-cyan-200 underline"
              >
                création de site internet à Béziers
              </Link>{" "}
              ou en savoir plus sur mon activité de{" "}
              <Link
                href="/styleB/services/dev-web"
                className="text-cyan-200 underline"
              >
                développeur web freelance
              </Link>
            </p>

            <p className="mt-5 max-w-3xl text-white/80 text-lg md:text-xl leading-relaxed">
              Développement web{" "}
              <span className="text-cyan-200 font-semibold">moderne</span>,
              design{" "}
              <span className="text-emerald-200 font-semibold">premium</span> et
              exécution{" "}
              <span className="text-violet-200 font-semibold">rigoureuse</span>
              .
              <br />
              Un interlocuteur unique : de l’idée à la mise en production, je
              vous accompagne avec une méthode claire, des choix assumés et un
              code propre.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryCTA label="Discuter du projet" targetId="contact" />
              <PrimaryCTA
                label="Voir les contributions"
                targetId="projets"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/20 bg-white/10 text-white/80 font-medium backdrop-blur transition hover:bg-white/20"
              />
            </div>
          </div>
        </header>

        {/* SECTION “VISION” + contenu principal */}
        <div className="md:px-6">
          <div className="max-w-6xl mx-auto">
            <SplitSection
              image="/images/bg_code.jpg"
              overlayClass="bg-gradient-to-br from-[#06122b]/70 via-[#0b0f3a]/55 to-[#14b8a6]/15"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 drop-shadow">
                Développeur web freelance à Béziers
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur">
                  <h3 className="text-xl font-semibold text-cyan-100 mb-2">
                    Mon approche
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    <span className="font-bold text-cyan-200">
                      Votre besoin devient le point de départ.
                    </span>{" "}
                    Je conçois une solution sur mesure, pensée pour votre
                    activité et vos objectifs, avec une communication simple et
                    directe.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur">
                  <h3 className="text-xl font-semibold text-emerald-100 mb-2">
                    Ce que je réalise
                  </h3>
                  <ul className="space-y-2 list-disc ml-5 text-white/80">
                    <li>Sites web modernes et performants</li>
                    <li>
                      Développement sur mesure (apps, outils, automatisations)
                    </li>
                    <li>Optimisation, refonte et maintenance</li>
                    <li>Intégrations API & accompagnement technique</li>
                  </ul>
                </div>

                <div className="md:col-span-2 rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur">
                  <h3 className="text-xl font-semibold text-violet-100 mb-2">
                    Une collaboration claire
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Pas d’intermédiaires : vous échangez directement avec la
                    personne qui conçoit et développe. Résultat : moins de
                    friction, plus de réactivité, et une solution vraiment
                    alignée sur vos priorités.
                  </p>

                  <p className="mt-5 text-center text-lg font-semibold text-white">
                    Un seul interlocuteur. Une exécution maîtrisée.
                    <br />
                    <span className="text-cyan-200 font-bold text-xl">
                      Du sur-mesure, pensé pour durer.
                    </span>
                  </p>
                </div>
              </div>
            </SplitSection>
          </div>
        </div>

        {/* PREMIUM CARDS via SplitRow */}
        <section className="px-6 mt-12">
          <div className="max-w-6xl mx-auto space-y-10">
            <SplitRow
              left={
                <div className="text-white">
                  <h2 className="text-2xl font-semibold mb-3">
                    Mes services de création de site web à Béziers
                    <span className="ml-2 text-cyan-200">•</span>
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Des solutions web sur mesure, conçues et développées avec
                    soin, pour un résultat rapide, fiable et évolutif.
                  </p>
                </div>
              }
              right={
                <PremiumTildCard
                  title="Description"
                  subtitle="Un livrable propre, maintenable et prêt pour la production."
                >
                  <ul className="space-y-2 list-disc ml-5 text-white/85">
                    <li>Création de sites web</li>
                    <li>Développement sur mesure</li>
                    <li>Maintenance / refonte</li>
                    <li>WebApps & outils internes</li>
                    <li>Intégrations API</li>
                  </ul>
                </PremiumTildCard>
              }
            />

            <SplitRow
              left={
                <div className="text-white">
                  <h2 className="text-2xl font-semibold mb-3">
                    Pourquoi choisir un développeur web indépendant ?
                    <span className="ml-2 text-emerald-200">•</span>
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Un accompagnement direct, une méthode claire et une
                    exécution rigoureuse. L’objectif : un produit fiable,
                    maintenable et aligné sur vos priorités.
                  </p>
                </div>
              }
              right={
                <PremiumTildCard
                  title=" Mes engagements"
                  subtitle="Une méthode claire, des choix justifiés, du concret."
                  reverse
                >
                  <ul className="space-y-2 list-disc ml-5 text-white/85">
                    <li>Accompagnement personnalisé</li>
                    <li>Délais maîtrisés</li>
                    <li>Code propre et maintenable</li>
                    <li>Expertise technique</li>
                    <li>Solutions sur mesure</li>
                  </ul>
                </PremiumTildCard>
              }
              reverse
              position="right"
            />

            <SplitRow
              left={
                <div className="text-white">
                  <h2 className="text-2xl font-semibold mb-3">
                    Technologies modernes pour des sites performants
                    <span className="ml-2 text-violet-200">•</span>
                  </h2>
                  <p className="text-white/80 leading-relaxed max-w-md">
                    Une stack moderne et éprouvée pour des applications rapides,
                    sécurisées et maintenables.
                  </p>
                </div>
              }
              right={
                <PremiumTildCard
                  title="Stack"
                  subtitle="Choisie pour la performance et l’évolutivité."
                >
                  <ul className="space-y-2 list-disc ml-5 text-white/85">
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Node.js</li>
                    <li>Symfony / PHP</li>
                    <li>MySQL</li>
                  </ul>
                </PremiumTildCard>
              }
            />

            <SplitRow
              left={
                <div className="text-white">
                  <h2 className="text-2xl font-semibold mb-3">
                    Un processus clair pour votre projet web
                    <span className="ml-2 text-cyan-200">•</span>
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Échange → cadrage → conception → développement itératif →
                    tests → livraison → suivi. Un cadre pro, sans lourdeur, avec
                    des points réguliers.
                  </p>
                </div>
              }
              right={
                <PremiumTildCard
                  title="Étapes"
                  subtitle="Un déroulé simple, efficace, sans surprises."
                  reverse
                >
                  <ul className="space-y-2 list-disc ml-5 text-white/85">
                    <li>Comprendre votre vision</li>
                    <li>Concevoir votre solution</li>
                    <li>Développer et tester</li>
                    <li>Livrer et accompagner</li>
                    <li>Maintenir / faire évoluer</li>
                  </ul>
                </PremiumTildCard>
              }
              reverse
              position="right"
            />
          </div>
        </section>

        {/* CONTRIBUTIONS */}
        <section id="projets" className="px-6 mt-14">
          <div className="max-w-6xl mx-auto">
            <Separator label="Nos contributions" />
            <p className="text-white/80 text-center max-w-4xl mx-auto mt-6">
              TEOOLA-Application métier dédiée au suivi des adhésions, à la
              gestion d’événements et au pilotage commercial, conçue pour
              automatiser les processus et améliorer la visibilité des équipes.
            </p>
            <div className="mt-6">
              <Carousel images={imagesTeoola} />
            </div>

            <p className="text-white/80 text-center max-w-4xl mx-auto mt-12">
              SMARTHOTEL-Plateforme de réservation haut de gamme, pensée pour
              offrir une expérience fluide et performante aux établissements
              hôteliers.
            </p>
            <div className="mt-6">
              <Carousel images={imagesHotel} />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 mt-14">
          <div className="max-w-6xl mx-auto">
            <Separator label="Nous contacter" />
            {/* telephone*/}
            <div className="block md:hidden mt-6">
              <ContactFormB />
            </div>
            {/*ordi*/}
            <div className="hidden md:block mt-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 md:p-8">
              <ContactFormB />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
