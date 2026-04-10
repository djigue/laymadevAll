import TextRefresh from "../../components/TextRefresh";
import Footer from "../../components/Footer";

export default function LayoutB({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_10%,rgba(56,189,248,0.20),transparent_45%),radial-gradient(900px_circle_at_85%_20%,rgba(34,197,94,0.14),transparent_45%),radial-gradient(900px_circle_at_40%_95%,rgba(167,139,250,0.16),transparent_40%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a3a] via-[#0b0f3a] to-[#06122b]" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 ">
          {children}
          <TextRefresh my="mt-16" ml="ml-6" />
        </main>
        <Footer bg="#06122b" text="text-white/70" accent="text-cyan-200" />
      </div>
    </div>
  );
}
