import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";
import ButtonB from "@/components/buttons/ButtonB";

export const metadata = {
  title: "Services | LAYMAdev",

  alternates: {
    canonical: "https://www.laymadev.com/styleC/services",
  },
};

export default function ServicesC() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-6 text-center overflow-hidden text-white mb-36">
        <div className="py-2">
          <MotionTitle className="text-4xl md:text-6xl font-bold text-center leading-tight md:mb-10 mt-12">
            Créer des expériences web qui marquent
          </MotionTitle>
          <MotionP>
            Sites performants, applications sur mesure, design moderne. Je
            transforme vos idées en solutions digitales concrètes.
          </MotionP>
        </div>

        <div className="mt-8 flex justify-center">
          <ButtonB text="Discuter de votre projet" href="/contact" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-16 pb-32">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* SITE */}
          <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/40 transition duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <h3 className="text-3xl font-semibold mb-4 text-white">
              Création de site internet
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Un site web moderne, rapide et optimisé pour convertir vos
              visiteurs en clients.
            </p>

            <ul className="text-gray-300 space-y-2 mb-8">
              <li>✔️ Design moderne & impactant</li>
              <li>✔️ SEO optimisé</li>
              <li>✔️ Responsive mobile</li>
              <li>✔️ Performance maximale</li>
            </ul>

            <ButtonB text="Voir le service" href="/services/creation-site" />
          </div>

          {/* DEV */}
          <div className="group relative p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/40 transition duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <h3 className="text-3xl font-semibold mb-4 text-white">
              Développement web sur mesure
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Des solutions puissantes et évolutives pour automatiser et faire
              grandir votre activité.
            </p>

            <ul className="text-gray-300 space-y-2 mb-8">
              <li>✔️ Applications web personnalisées</li>
              <li>✔️ API & backend performant</li>
              <li>✔️ Interfaces React modernes</li>
              <li>✔️ Architecture scalable</li>
            </ul>

            <ButtonB text="Voir le service" href="/services/dev-web" />
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="px-6 md:px-16 pb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
          Une approche simple et efficace
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Analyse</h3>
            <p>Compréhension de vos besoins et de vos objectifs.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Création</h3>
            <p>Design et développement d’une solution adaptée.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">3. Livraison</h3>
            <p>Mise en ligne + optimisation des performances.</p>
          </div>
        </div>
      </section>

      {/* POURQUOI MOI */}
      <section className="px-6 md:px-16 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Pourquoi travailler avec moi ?
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Je combine design moderne, performance technique et vision business
            pour créer des solutions réellement utiles. Chaque projet est pensé
            pour générer de la valeur, pas juste pour être joli.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center pb-32 px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
          Prêt à lancer votre projet ?
        </h2>

        <p className="text-gray-400 mb-10">
          Discutons ensemble de votre idée et donnons-lui vie.
        </p>

        <ButtonB text="Me contacter" href="/contact" />
      </section>
    </>
  );
}
