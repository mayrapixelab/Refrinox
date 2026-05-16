import type { Metadata } from "next";
import { MaquinariaSection } from "@/components/sections/MaquinariaSection";

export const metadata: Metadata = {
  title: "Maquinaria Profesional",
  description:
    "Fabricadores de paleta, neveras, barricas, exhibidores y más. Ingeniería mexicana con certificación NSF para heladerías y paleterías profesionales.",
};

export default function MaquinasPage() {
  return (
    <main className="pt-16">
      <MaquinariaSection />
    </main>
  );
}
