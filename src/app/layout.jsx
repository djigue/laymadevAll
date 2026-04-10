import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

export const metadata = {
  metadataBase: new URL("https://www.laymadev.fr"),
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="text-white">{children}</body>
    </html>
  );
}
