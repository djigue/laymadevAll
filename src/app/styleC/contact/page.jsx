import { motion } from "framer-motion";
import ContactFormC from "@/components/forms/ContactFormC";
import MotionTitle from "@/components/anims/MotionTitle";
import MotionP from "@/components/anims/GoodP";
import MotionTag from "@/components/anims/MotionTag";

export const metadata = {
  title: "Contact | LAYMAdev",

  alternates: {
    canonical: "https://www.laymadev.com/styleC/contact",
  },
};

export default function ContactC() {
  return (
    <>
      {/* HERO */}
      <div className="text-center mb-24 mt-10">
        <MotionTitle className="text-4xl md:text-5xl font-semibold mb-6">
          Contact – Studio web à Béziers
        </MotionTitle>

        <MotionP
          startY={40}
          duration={0.8}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Basé à Béziers (Hérault), j’accompagne entreprises et indépendants
          dans la création de sites internet et d’applications sur mesure.
          Discutons de votre projet.
        </MotionP>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-20 items-start md:mb-20">
        {/* FORM */}
        <ContactFormC />

        {/* INFO BLOCK */}
        <MotionTag startY={50} duration={0.8} className="space-y-8">
          <div className="bg-[#14161c] border border-white/5 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              Collaboration structurée
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Chaque projet débute par un échange clair pour cadrer vos besoins.
              En tant que développeur web freelance à Béziers, je propose une
              approche technique adaptée, pensée pour la performance et la
              maintenabilité.
            </p>
          </div>

          <div className="bg-[#14161c] border border-white/5 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              Réactivité & expertise
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Une communication claire, des délais maîtrisés et une expertise
              technique solide pour garantir la réussite de votre projet
              digital.
            </p>
          </div>
        </MotionTag>
      </div>
    </>
  );
}
