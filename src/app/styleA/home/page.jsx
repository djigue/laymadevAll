import Link from "next/link";
import PremiumSectionCard from "@/components/anims/PremiumSectionCard";
import ButtonB from "@/components/buttons/ButtonB";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionP from "@/components/anims/MotionP";
import Script from "next/script";

export const metadata = {
  title: "Création site internet Béziers | Développeur Web Hérault",

  description:
    "Création de sites internet à Béziers, Hérault et Hauts-Cantons. Développeur web freelance spécialisé en SEO, applications web et solutions digitales pour entreprises locales.",

  keywords: [
    "création site internet Béziers",
    "développeur web Béziers",
    "site internet Hérault",
    "développeur freelance Hérault",
    "création site Hauts-Cantons",
    "SEO Béziers",
    "référencement naturel Hérault",
    "développement web sur mesure",
    "application web Béziers",
    "agence web Béziers",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.laymadev.com/styleA/home",
  },

  openGraph: {
    title: "Création site internet Béziers",
    description:
      "Développeur web à Béziers. Création de sites, SEO et applications web dans l’Hérault et les Hauts-Cantons.",
    url: "https://www.laymadev.com/styleA/home",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/logoBlack.png",
        width: 800,
        height: 600,
        alt: "Création site web Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Développeur Web Béziers",
    description: "Création de site internet à Béziers et dans l’Hérault.",
    images: ["/logoBlack.png"],
  },
};

export default function HomeA() {
  return (
    <>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "LAYMAdev",
            description:
              "Développeur web freelance à Béziers, Hauts Cantons, Hérault, spécialisé en création de sites internet et applications web.",
            image: "https://www.laymadev.com/logoBlack.png",
            url: "https://www.laymadev.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Béziers",
              addressRegion: "Hérault",
              addressCountry: "FR",
            },
            areaServed: ["Béziers", "Hérault", "Hauts-Cantons"],
            sameAs: [
              "https://www.laymadev.com",
              "https://www.linkedin.com/in/yannick-maubrun-301570382",
              "https://github.com/djigue",
            ],
          }),
        }}
      />
      {/* HERO (SEO + DESIGN) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 px-6 max-w-5xl">
          <MotionTitle className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8">
            Développeur web freelance à Béziers
            <br />
            Applications & Sites sur mesure
          </MotionTitle>

          <MotionP className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Solutions web performantes, évolutives et pensées pour durer.
          </MotionP>

          <Link
            href="#services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-xl"
          >
            Découvrir mes services →
          </Link>
        </div>
      </section>

      {/* CARDS = CLIENT MAIS CONTENU SEO */}
      <PremiumSectionCard image="/images/bg_code.jpg">
        <div id="services">
          <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
            Mon expertise en développement web à Béziers
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Solutions sur mesure
              </h3>
              <p>
                Conception d’applications web modernes, architecture solide,
                développement front-end & back-end avec une attention
                particulière à la performance et à la maintenabilité.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Accompagnement technique
              </h3>
              <p>
                Conseil, optimisation, refonte et accompagnement long terme.
                Vous échangez directement avec la personne qui conçoit et
                développe votre solution.
              </p>
            </div>
          </div>
        </div>
      </PremiumSectionCard>

      <PremiumSectionCard image="/images/bg_service.jpg">
        <div id="services">
          <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
            Création de sites web & développement sur mesure
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
            <p className="mt-10">
              Je conçois et développe des solutions web modernes, fiables et
              évolutives, adaptées à vos objectifs et à votre activité.
            </p>
            <ul className="relative z-10 space-y-2 list-disc ml-20">
              <li>Création de sites web</li>
              <li>Développement sur mesure</li>
              <li>Maintenance / refonte</li>
              <li>WebApps & outils internes</li>
              <li>Intégrations API</li>
            </ul>
          </div>
        </div>
      </PremiumSectionCard>

      <PremiumSectionCard image="/images/bg_choice.jpg">
        <div id="services">
          <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
            Pourquoi choisir un développeur web freelance ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
            <p className="mt-4">
              Une collaboration directe, sans intermédiaires. De l’idée à la
              mise en production, je vous accompagne avec rigueur, transparence
              et exigence afin de garantir un résultat fiable, durable et aligné
              avec vos priorités.
            </p>
            <ul className="relative z-10 space-y-2 list-disc ml-20">
              <li>Un interlocuteur unique</li>
              <li>Code propre et maintenable</li>
              <li>Délais maîtrisés</li>
              <li>Vision technique claire</li>
              <li>Solutions réellement sur mesure</li>
            </ul>
          </div>
        </div>
      </PremiumSectionCard>

      <PremiumSectionCard image="/images/bg_tech.jpg">
        <div id="services">
          <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
            Technologies modernes pour des applications performantes
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
            <p className="mt-8">
              J’utilise des technologies modernes et éprouvées afin de concevoir
              des applications rapides, sécurisées et évolutives. Chaque choix
              technique est fait en fonction de votre projet.
            </p>
            <ul className="space-y-1 list-disc ml-20">
              <li>React</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>Symfony / PHP</li>
              <li>MySQL</li>
              <li>Et bien d'autres</li>
            </ul>
          </div>
        </div>
      </PremiumSectionCard>

      <PremiumSectionCard image="/images/bg_process.jpg">
        <div id="services">
          <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
            Processus de collaboration
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
            <p className="mt-4">
              Chaque projet débute par un échange pour comprendre votre vision,
              vos objectifs et vos contraintes. Je définis ensuite une solution
              adaptée, tant sur le plan fonctionnel que technique. Le
              développement est réalisé de manière itérative, avec des points
              réguliers pour assurer qualité, performance et cohérence. Une fois
              livré, je reste disponible pour accompagner l’évolution et la
              maintenance de votre solution.
            </p>
            <ul className="space-y-1 list-disc ml-20 mt-14">
              <li>Comprendre votre vision</li>
              <li>Concevoir votre solution</li>
              <li>Développer et tester</li>
              <li>Livrer et accompagner</li>
              <li>Maintenir</li>
            </ul>
          </div>
        </div>
      </PremiumSectionCard>

      <PremiumSectionCard image="/images/hebergement.jpg">
        <div id="maintenance">
          <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
            Hébergement & Maintenance
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
            <div>
              <p className="mt-8">
                Pour garantir{" "}
                <span className="text-white font-semibold">performance</span> et{" "}
                <span className="text-white font-semibold">sérénité</span>, je
                propose une formule d’accompagnement tout-en-un : vous restez
                focus sur votre activité, je m’occupe du technique.
              </p>
              <p className="text-sm text-gray-200/80 leading-relaxed">
                <span className="text-white font-semibold">
                  Formule mensuelle
                </span>{" "}
                (sur devis) — idéale pour garder un site rapide, à jour et
                sécurisé, sans surprise.
              </p>
            </div>

            <ul className="space-y-1 list-disc ml-20">
              <li>Hébergement sécurisé,</li>
              <li>Maintenance technique,</li>
              <li>Mises à jour,</li>
              <li>Support,</li>
              <li>Suivi évolutif,</li>
              <li>Sauvegardes,</li>
              <li>Surveillance,</li>
            </ul>
          </div>
        </div>
      </PremiumSectionCard>

      <div className="mt-10 flex justify-center mb-10">
        <ButtonB />
      </div>
    </>
  );
}
