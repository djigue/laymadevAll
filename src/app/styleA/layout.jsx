import NavBarA from "../../components/navbars/NavBarA";
import TextRefresh from "../../components/TextRefresh";
import Footer from "../../components/Footer";
import { TransitionProvider } from "@/context/TransitionProvider";

export default function LayoutA({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row overflow-x-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      <TransitionProvider>
        {/* NAVBAR FIXE */}
        <NavBarA />
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
