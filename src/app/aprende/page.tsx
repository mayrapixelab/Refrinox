import type { Metadata } from "next";
import { AprendeSection } from "@/components/sections/AprendeSection";

export const metadata: Metadata = {
  title: "Aprende con Refrinox",
  description:
    "Recetas rentables, videos técnicos y estrategias 2026 para la industria del helado. Conocimiento que multiplica sus ventas.",
};

export default function AprendePage() {
  return (
    <main className="pt-16">
      <AprendeSection />
    </main>
  );
}
