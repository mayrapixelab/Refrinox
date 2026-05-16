import type { Metadata } from "next";
import { CasosDeExitoSection } from "@/components/sections/CasosDeExitoSection";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Más de 2,000 clientes en México y 400 proyectos de exportación. Historias de rentabilidad real que validan la ingeniería Refrinox.",
};

export default function ExitoPage() {
  return (
    <main className="pt-16">
      <CasosDeExitoSection />
    </main>
  );
}
