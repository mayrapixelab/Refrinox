import type { Metadata } from "next";
import { NosotrosSection } from "@/components/sections/NosotrosSection";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Tres décadas de ingeniería y éxito compartido. Refrinox: el fabricante líder que equipa proyectos de exportación desde Guadalajara, Jalisco.",
};

export default function NosotrosPage() {
  return (
    <main className="pt-16">
      <NosotrosSection />
    </main>
  );
}
