"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, MapPin, Hammer, TrendingUp, GraduationCap, Rocket } from "lucide-react";
import Image from "next/image";
import { ScrollGradient } from "@/components/ui/scroll-gradient";

const ETAPAS = [
  {
    num: "01",
    icon: MapPin,
    nombre: "Planeación Estratégica",
    desc: "Estructuramos su modelo comercial con base en un análisis detallado de presupuesto y ubicación geográfica. Definimos la viabilidad financiera y la capacidad de producción necesaria para asegurar un retorno de inversión sólido y previsible en su mercado específico.",
    detalle: "Análisis de mercado · Proyección financiera · Definición de capacidad · Selección de equipo óptimo",
  },
  {
    num: "02",
    icon: Hammer,
    nombre: "Desarrollo Técnico y de Marca",
    desc: "Ejecutamos el proyecto de ingeniería, el diseño de la identidad visual y la instalación técnica de toda la línea de producción. Integramos maquinaria de alta precisión con los estándares estéticos y funcionales de una marca líder.",
    detalle: "Fabricación NSF · Diseño de marca · Instalación técnica · Pruebas de funcionamiento",
  },
  {
    num: "03",
    icon: TrendingUp,
    nombre: "Creación y Montaje",
    desc: "Gestionamos la logística de apertura, el diseño del flujo de trabajo y la decoración funcional del punto de venta. Creamos espacios optimizados para la atención al cliente que maximizan la eficiencia del personal y elevan la experiencia de compra en su local.",
    detalle: "Logística de apertura · Diseño de flujo · Decoración funcional · Manual de operación",
  },
  {
    num: "04",
    icon: GraduationCap,
    nombre: "Capacitación Especializada",
    desc: "Entregamos estrategias de venta directa y acceso a nuestra red exclusiva de proveedores líderes. Transferimos el conocimiento técnico para que su equipo domine la elaboración de recetas rentables y la gestión comercial.",
    detalle: "Recetas rentables · Red de proveedores · Higiene y BPM · Estrategias de venta",
  },
  {
    num: "05",
    icon: Rocket,
    nombre: "Optimización de Operación",
    desc: "Implementamos protocolos rigurosos de rotación de producto y sistemas de control de inventarios. Establecemos procesos estandarizados que eliminan mermas y aseguran que su negocio alcance el punto de equilibrio en el menor tiempo posible.",
    detalle: "Control de inventarios · Reducción de mermas · Soporte técnico remoto · Red Refrinox",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Modelo360Section() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section
      ref={ref}
      id="modelo-360"
      className="relative py-28 md:py-40 px-6 md:px-12 lg:px-24 bg-white"
    >
      <ScrollGradient bg="steel" />

      <div className="max-w-6xl mx-auto">
        {/* Header — texto izquierda + mascota derecha */}
        <div className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex-1"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(41%_0.12_228)] mb-4 font-[family-name:var(--font-body)]">
              El diferenciador Refrinox
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-[oklch(12%_0.07_228)] leading-tight mb-6">
              No vendemos maquinaria.
              <br />
              <span className="text-[oklch(41%_0.12_228)]">Construimos tu negocio.</span>
            </h2>
            <p className="text-lg text-[oklch(45%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed">
              Desarrollamos su negocio de forma sistémica para garantizar el éxito operativo. Usted integra un sistema probado que asegura el flujo de caja desde la inauguración — cinco etapas que convierten su idea en un negocio de alta rotación funcionando desde el primer día.
            </p>
          </motion.div>

          {/* Mascota — solo el círculo con Xolinox y los planos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
            className="flex justify-center lg:justify-end shrink-0"
          >
            {/* Anillo decorativo exterior */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border-2 border-[oklch(41%_0.12_228/0.20)]" />
              <div className="absolute -inset-6 rounded-full border border-[oklch(41%_0.12_228/0.10)]" />

              {/* Imagen PNG con círculo integrado */}
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                <Image
                  src="/images/xolinox-360.png"
                  alt="Xolinox revisando los planos de tu negocio"
                  fill
                  className="object-contain drop-shadow-[0_8px_40px_oklch(41%_0.12_228/0.25)]"
                  sizes="(max-width: 1024px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Etapas */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Lista de etapas */}
          <div className="lg:w-2/5 flex flex-col gap-2">
            {ETAPAS.map((etapa, i) => {
              const Icon = etapa.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={etapa.num}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                  onClick={() => setActive(i)}
                  className={`group text-left rounded-xl px-6 py-5 transition-all duration-300 border ${
                    isActive
                      ? "bg-[oklch(41%_0.12_228/0.07)] border-[oklch(41%_0.12_228/0.5)] shadow-[0_4px_20px_oklch(41%_0.12_228/0.10)]"
                      : "bg-transparent border-[oklch(88%_0.03_228)] hover:border-[oklch(41%_0.12_228/0.3)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold tabular-nums font-[family-name:var(--font-body)] transition-colors ${isActive ? "text-[oklch(41%_0.12_228)]" : "text-[oklch(65%_0.05_228)]"}`}>
                      {etapa.num}
                    </span>
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className={`transition-colors ${isActive ? "text-[oklch(41%_0.12_228)]" : "text-[oklch(60%_0.05_228)]"}`}
                    />
                    <span className={`font-bold uppercase text-sm font-[family-name:var(--font-display)] transition-colors ${isActive ? "text-[oklch(12%_0.07_228)]" : "text-[oklch(45%_0.05_228)]"}`}>
                      {etapa.nombre}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Panel de detalle */}
          <div className="lg:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="rounded-2xl border border-[oklch(88%_0.03_228)] bg-[oklch(97%_0.008_228)] p-8 md:p-10 h-full"
              >
                {(() => {
                  const etapa = ETAPAS[active];
                  if (!etapa) return null;
                  const Icon = etapa.icon;
                  return (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-[oklch(41%_0.12_228/0.10)] flex items-center justify-center">
                          <Icon size={20} strokeWidth={1.5} className="text-[oklch(41%_0.12_228)]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[oklch(55%_0.07_228)] uppercase tracking-wider font-[family-name:var(--font-body)]">
                            Etapa {etapa.num}
                          </p>
                          <h3 className="text-xl font-extrabold text-[oklch(12%_0.07_228)] uppercase font-[family-name:var(--font-display)]">
                            {etapa.nombre}
                          </h3>
                        </div>
                      </div>

                      <p className="text-[oklch(40%_0.04_228)] leading-relaxed mb-8 font-[family-name:var(--font-body)]">
                        {etapa.desc}
                      </p>

                      <div className="border-t border-[oklch(88%_0.03_228)] pt-6">
                        <p className="text-xs font-semibold text-[oklch(55%_0.06_228)] uppercase tracking-wider mb-3 font-[family-name:var(--font-body)]">
                          Incluye
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {etapa.detalle.split(" · ").map((item) => (
                            <span
                              key={item}
                              className="text-xs px-3 py-1.5 rounded-full bg-[oklch(41%_0.12_228/0.08)] text-[oklch(30%_0.10_228)] border border-[oklch(41%_0.12_228/0.20)] font-[family-name:var(--font-body)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
          className="mt-14 text-center"
        >
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(41%_0.12_228)] hover:bg-[oklch(50%_0.13_228)] text-white font-bold text-base transition-all duration-200 font-[family-name:var(--font-body)] shadow-[0_0_32px_oklch(41%_0.12_228/0.25)]"
          >
            Iniciar mi proyecto integral
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
