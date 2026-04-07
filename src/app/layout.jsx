import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

export const metadata = {
  metadataBase: new URL("https://www.laymadev.com"),

  title: {
    default: "Développeur Web Béziers | Création site internet Hérault",
    template: "%s | Développeur Web Béziers",
  },

  description:
    "Développeur web à Béziers, Hérault et Hauts-Cantons. Création de sites internet, applications web, SEO et solutions sur mesure pour professionnels et entreprises locales.",

  keywords: [
    "développeur web Béziers",
    "création site internet Hérault",
    "développeur freelance Béziers",
    "développeur web Hérault",
    "création site Hauts-Cantons",
    "SEO Béziers",
    "site internet professionnel Béziers",
    "développement web Occitanie",
    "création application web",
    "freelance web Béziers",
  ],

  authors: [{ name: "MAUBRUN Yannick" }],
  creator: "MAUBRUN Yannick",
  publisher: "MAUBRUN Yannick",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Développeur Web Béziers",
    description:
      "Création de sites internet et applications web à Béziers, Hérault et Hauts-Cantons.",
    url: "https://www.laymadev.com",
    siteName: "LAYMAdev",
    images: [
      {
        url: "/logoBlack.png",
        width: 800,
        height: 600,
        alt: "Logo développeur web Béziers",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Développeur Web Béziers",
    description: "Création de sites web à Béziers et dans l’Hérault.",
    images: ["/logoBlack.png"],
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="text-white">{children}</body>
    </html>
  );
}
