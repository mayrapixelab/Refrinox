import type { Metadata } from "next";
import { ContactoSection } from "@/components/sections/ContactoSection";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita tu cotización especializada. Recibe una propuesta personalizada en menos de 48 horas. Equipamos tu éxito en México y Estados Unidos.",
};

export default function ContactoPage() {
  return (
    <main className="pt-16">
      <ContactoSection />
    </main>
  );
}
