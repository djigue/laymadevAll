import StructuredData from "../../components/seo/StructuredData";
import NavBarC from "../../components/navbars/NavBarC";
import TextRefresh from "../../components/TextRefresh";
import Footer from "../../components/Footer";
import { TransitionProvider } from "@/context/TransitionProvider";
import TransitionOverlay from "@/components/TransitionOverlay";

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function LayoutC({ children }) {
  return (
    <TransitionProvider>
      <div className="min-h-screen bg-[#0f1115] text-white flex flex-col relative">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        {/* OVERLAY (important: au-dessus de tout) */}
        <TransitionOverlay />

        <div className="relative z-10 flex flex-col min-h-screen">
          <StructuredData />
          <NavBarC />

          {/* SCROLL CONTAINER */}
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {children}
              <TextRefresh my="mt-0" mb="mb-0" />
            </div>
          </main>

          <Footer bg="#0f1115" text="text-gray-400" accent="text-white" />
        </div>
      </div>
    </TransitionProvider>
  );
}
