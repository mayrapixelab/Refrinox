import type { Metadata } from "next";
import { Modelo360Section } from "@/components/sections/Modelo360Section";

export const metadata: Metadata = {
  title: "Modelo 360",
  description:
    "El proyecto integral de Refrinox: planeación, fabricación, instalación, capacitación y soporte. De la idea a la primer paleta en un proceso probado en +30 años.",
};

export default function Modelo360Page() {
  return (
    <main className="pt-16">
      <Modelo360Section />
    </main>
  );
}
