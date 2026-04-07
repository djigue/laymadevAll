import ContactFormB from "@/components/forms/ContactForm";
import MotionP from "@/components/anims/MotionP";
import MotionTitle from "@/components/anims/MotionTitle";

export const metadata = {
  title: "Contact | LAYMAdev - Développeur Web Béziers",

  description:
    "Contactez LAYMAdev, développeur web à Béziers. Discutons de votre projet de site internet, SEO ou application web dans l’Hérault et les Hauts-Cantons.",

  keywords: [
    "contact développeur web Béziers",
    "devis site internet Hérault",
    "freelance web Béziers contact",
    "création site Hauts-Cantons contact",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.laymadev.com/styleA/contact",
  },

  openGraph: {
    title: "Contact développeur web Béziers",
    description:
      "Contactez LAYMAdev pour votre projet web à Béziers et dans l’Hérault.",
    url: "https://www.laymadev.com/styleA/contact",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/logoBlack.png",
        width: 800,
        height: 600,
        alt: "Contact LAYMAdev Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact LAYMAdev",
    description: "Contactez votre développeur web à Béziers.",
    images: ["/logoBlack.png"],
  },
};

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
