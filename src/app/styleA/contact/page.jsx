import ContactFormB from "@/components/forms/ContactForm";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export default function ContactB() {
  return (
    <>
      <section className="relative py-32 px-6 text-center overflow-hidden text-white">
        {/* Light directionnelle */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>
        <MotionTitle>Contact – Développeur web freelance à Béziers</MotionTitle>
        <MotionP>
          Discutons de votre projet web. Basé à Béziers (Hérault), j’accompagne
          entreprises et indépendants dans la création de sites internet et
          d’applications sur mesure.
        </MotionP>
      </section>
      <ContactFormB />
    </>
  );
}
