import StructuredData from "../../components/seo/StructuredData";
import NavBarA from "../../components/navbars/NavBarA";
import TextRefresh from "../../components/TextRefresh";
import Footer from "../../components/Footer";
import { TransitionProvider } from "@/context/TransitionProvider";
import TransitionOverlay from "@/components/TransitionOverlay";

export const metadata = {
  title:
    "Développeur web freelance à Béziers (Hérault, Hauts Cantons) – LAYMA.dev",
  description:
    "Développeur web freelance basé à Béziers (Hérault, Hauts Cantons). Spécialisé en création de sites internet, applications web sur mesure et solutions performantes pour entreprises et indépendants.",
  openGraph: {
    title:
      "Développeur web freelance à Béziers (Hérault, Hauts Cantons) – LAYMA.dev",
    description:
      "Création de site internet à Béziers (Hérault, Hauts Cantons). Solutions web modernes et performantes.",
    url: "https://www.laymadev.com/about",
    siteName: "LAYMA.dev",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function LayoutA({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row overflow-x-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      <StructuredData />
      <TransitionProvider>
        {/* NAVBAR FIXE */}
        <NavBarA />
        <TransitionOverlay />
        {/* CONTENU */}
        <div className="flex flex-col flex-1 md:ml-72 overflow-visible">
          <main className="px-4 md:px-16 pt-16 relative">
            <div className="relative">
              <div className="relative z-10">{children}</div>
            </div>
            <TextRefresh my="mb-16" ml="ml-2" />
          </main>
          <Footer size="py-2" marginTop="" bg="#020617" />
        </div>
      </TransitionProvider>
    </div>
  );
}
