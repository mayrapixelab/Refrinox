"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Trophy } from "lucide-react";
import Image from "next/image";
import { ScrollGradient } from "@/components/ui/scroll-gradient";

const WA_NUMBER = "5213318582614";
const WA_MSG = encodeURIComponent(
  "Hola, me interesa conocer casos de éxito y el Modelo 360 de Refrinox. ¿Podría recibir más información?"
);

const LOGROS = [
  {
    num: "+2,000",
    titulo: "Dominio del Mercado Nacional",
    desc: "Clientes en México operan diariamente con nuestra maquinaria, consolidando negocios que dominan sus regiones gracias a la constancia técnica de nuestros equipos.",
  },
  {
    num: "+400",
    titulo: "Impacto Internacional",
    desc: "Proyectos de exportación con éxito rotundo. Nuestra ingeniería cumple con las exigencias de rendimiento y normativas sanitarias en los mercados más competitivos del mundo.",
  },
  {
    num: "100%",
    titulo: "Fabricación NSF Certificada",
    desc: "Manufactura mexicana que cumple los estándares más estrictos de seguridad alimentaria que exigen hoteles, cadenas y el mercado de EUA.",
  },
  {
    num: "+30",
    titulo: "Años de Escalabilidad Garantizada",
    desc: "Optimizando procesos de producción en plantas industriales masivas y negocios artesanales de alta gama, resolviendo los retos de congelación y textura a cualquier escala.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function CasosDeExitoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="casos-de-exito"
      className="relative bg-[oklch(96%_0.010_228)]"
    >
      <ScrollGradient bg="deep" />

      {/* Hero image con fade-out hacia el fondo */}
      <div className="relative w-full overflow-hidden" style={{ height: "55vh", minHeight: "340px", maxHeight: "520px" }}>
        <Image
          src="/images/brand/xolinox-intro.jpg"
          alt="Refrinox — historias de éxito"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Overlay oscuro suave para legibilidad */}
        <div className="absolute inset-0 bg-[oklch(12%_0.07_228/0.35)]" />
        {/* Fade-out hacia el fondo de la sección */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[oklch(96%_0.010_228)] to-transparent" />
      </div>

      {/* Contenido principal */}
      <div className="px-6 md:px-12 lg:px-24 pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-14 -mt-8 relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[oklch(41%_0.12_228/0.10)] flex items-center justify-center">
                <Trophy size={20} strokeWidth={1.5} className="text-[oklch(41%_0.12_228)]" />
              </div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(41%_0.12_228)] font-[family-name:var(--font-body)]">
                Casos de éxito
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-[oklch(12%_0.07_228)] leading-tight mb-6">
              Historias de
              <br />
              <span className="text-[oklch(41%_0.12_228)]">rentabilidad real.</span>
            </h2>
            <p className="text-lg text-[oklch(45%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed max-w-3xl">
              Usted se une a una red global de empresarios que han transformado su inversión en un modelo de negocio de alta rotación. Nuestra trayectoria no se mide en años, sino en el éxito financiero de quienes confían en Refrinox.
            </p>
          </motion.div>

          {/* 4 stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {LOGROS.map((logro, i) => (
              <motion.div
                key={logro.titulo}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: EASE }}
                className="rounded-2xl border border-[oklch(88%_0.03_228)] bg-white hover:border-[oklch(41%_0.12_228/0.4)] hover:shadow-[0_4px_24px_oklch(41%_0.12_228/0.08)] transition-all duration-300 p-8"
              >
                <span className="text-5xl font-extrabold text-[oklch(41%_0.12_228)] font-[family-name:var(--font-display)] leading-none block mb-3">
                  {logro.num}
                </span>
                <h3 className="text-base font-extrabold text-[oklch(12%_0.07_228)] uppercase font-[family-name:var(--font-display)] mb-2 leading-snug">
                  {logro.titulo}
                </h3>
                <p className="text-sm text-[oklch(48%_0.05_228)] font-[family-name:var(--font-body)] leading-relaxed">
                  {logro.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Fotos de casos reales — imagen completa sin recortar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Foto inauguración */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
              className="rounded-2xl overflow-hidden border border-[oklch(88%_0.03_228)] shadow-[0_4px_24px_oklch(41%_0.12_228/0.08)]"
            >
              <div className="relative">
                <Image
                  src="/images/brand/inauguracion.jpg"
                  alt="Inauguración de Paletería Los Sueños — cliente Refrinox"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 580px"
                />
              </div>
              <div className="bg-[oklch(12%_0.07_228)] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[oklch(70%_0.06_228)] font-[family-name:var(--font-body)] mb-1">
                  Proyecto Llave en Mano
                </p>
                <p className="text-base font-extrabold text-white uppercase font-[family-name:var(--font-display)]">
                  Paletería Los Sueños
                </p>
              </div>
            </motion.div>

            {/* Foto tipos de negocio */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
              className="rounded-2xl overflow-hidden border border-[oklch(88%_0.03_228)] shadow-[0_4px_24px_oklch(41%_0.12_228/0.08)]"
            >
              <div className="relative">
                <Image
                  src="/images/brand/negocios.jpg"
                  alt="Tipos de negocio equipados por Refrinox"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 580px"
                />
              </div>
              <div className="bg-[oklch(12%_0.07_228)] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[oklch(70%_0.06_228)] font-[family-name:var(--font-body)] mb-1">
                  Diseñamos negocios que funcionan
                </p>
                <p className="text-base font-extrabold text-white uppercase font-[family-name:var(--font-display)]">
                  Gelaterías · Paleterías · Sodas · Snowy Cones
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quote + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[oklch(55%_0.05_228)] font-[family-name:var(--font-body)] mb-6">
              Lo hecho en México está bien hecho
            </p>
            <p className="text-base text-[oklch(45%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed mb-8 max-w-xl mx-auto">
              ¿Quieres conocer proyectos similares al tuyo?
              Habla con nuestros asesores — te conectamos con casos reales de tu industria.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(41%_0.12_228)] hover:bg-[oklch(50%_0.13_228)] text-white font-bold text-base transition-all duration-200 font-[family-name:var(--font-body)] shadow-[0_0_32px_oklch(41%_0.12_228/0.25)]"
            >
              Ver resultados y testimonios
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
