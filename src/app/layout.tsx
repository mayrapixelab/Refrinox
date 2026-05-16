import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { AnimationObserver } from "@/components/shared/AnimationObserver";
import { Suspense } from "react";
import "./globals.css";

// Saira Variable Font — fuente oficial línea de comunicación Refrinox 2026
// wdth: 75 (Condensed) → 125 (Expanded) · wght: 100–900
const sairaDisplay = localFont({
  src: "../../public/fonts/saira/Saira-VariableFont_wdth,wght.ttf",
  variable: "--font-display",
  display: "swap",
  style: "normal",
});

const sairaBody = localFont({
  src: [
    {
      path: "../../public/fonts/saira/Saira-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/saira/Saira-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://refrinox.com.mx"),
  title: {
    template: "%s | Refrinox",
    default: "Refrinox — Innovación Mexicana para la Industria del Helado",
  },
  description:
    "Equipos de refrigeración fabricados en México con certificación NSF para heladerías, paleterías y la industria del helado. Modelo 360: de la idea a la primer paleta.",
  keywords: [
    "equipos para heladerías",
    "maquinaria para helados",
    "paletería llave en mano",
    "refrigeración NSF",
    "fabricadores de paleta",
    "industria del helado México",
    "Refrinox Guadalajara",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Refrinox",
    title: "Refrinox — Innovación Mexicana para la Industria del Helado",
    description:
      "De la idea a la primer paleta. Equipamos y acompañamos tu negocio de helados con certificación NSF y +30 años de experiencia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refrinox — Innovación Mexicana para la Industria del Helado",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sairaDisplay.variable} ${sairaBody.variable}`}>
      <body>
        <Suspense fallback={null}>
          <AnimationObserver />
        </Suspense>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
