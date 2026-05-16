"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const PASOS = [
  { num: "01", label: "Planeación estratégica y viabilidad financiera" },
  { num: "02", label: "Fabricación e instalación técnica certificada NSF" },
  { num: "03", label: "Montaje y decoración de su punto de venta" },
  { num: "04", label: "Capacitación en recetas y gestión comercial" },
  { num: "05", label: "Soporte continuo y optimización de operación" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function LlaveEnManoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
    >
      {/* Background gradient animado — blobs azul acerado con acento naranja al hover */}
      <BackgroundGradientAnimation
        interactive
        containerClassName="absolute inset-0"
      />

      {/* Diamond pattern encima del gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 3L53 28L28 53L3 28Z' fill='none' stroke='%231E4DB7' stroke-width='0.7' opacity='0.15'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Copy ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Badge 360° */}
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
                {/* anillos concéntricos */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-[oklch(41%_0.12_228/0.7)]"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                />
                <div className="absolute inset-[7px] rounded-full border border-[oklch(63%_0.19_24/0.5)]" />
                <span className="relative text-sm font-extrabold text-white font-[family-name:var(--font-display)] tracking-tight leading-none">
                  360°
                </span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[oklch(48%_0.07_228)] font-[family-name:var(--font-body)]">
                  Proyecto Integral
                </p>
                <p className="text-base font-extrabold tracking-wider uppercase text-[oklch(63%_0.19_24)] font-[family-name:var(--font-display)]">
                  Llave en Mano
                </p>
              </div>
            </div>

            {/* Headline — estilo Barlow Condensed pesado */}
            <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-[0.9] tracking-tight text-white mb-6">
              Tu tienes
              <br />
              los sueños.
              <br />
              <span
                className="text-[oklch(63%_0.19_24)]"
                style={{ WebkitTextStroke: "0px" }}
              >
                Nosotros,
              </span>
              <br />
              los planos.
            </h2>

            <p className="text-base text-[oklch(63%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed mb-10 max-w-lg">
              Del concepto a la primera venta — te entregamos la paletería completa,
              equipada, capacitada y funcionando.{" "}
              <strong className="font-semibold text-white">
                Sin que resuelvas nada solo.
              </strong>
            </p>

            {/* Pasos — compact numbered list */}
            <ul className="space-y-3 mb-12">
              {PASOS.map((paso, i) => (
                <motion.li
                  key={paso.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.09, duration: 0.55, ease: EASE }}
                  className="flex items-center gap-3.5"
                >
                  {/* Número en pill */}
                  <div className="w-7 h-7 rounded-full bg-[oklch(41%_0.12_228/0.18)] border border-[oklch(41%_0.12_228/0.55)] flex items-center justify-center shrink-0">
                    <span className="text-[9px] font-extrabold tabular-nums text-[oklch(65%_0.10_228)] font-[family-name:var(--font-display)]">
                      {paso.num}
                    </span>
                  </div>
                  <span className="text-sm text-[oklch(68%_0.04_228)] font-[family-name:var(--font-body)] leading-snug">
                    {paso.label}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
              className="flex flex-wrap gap-4"
            >
              {/* Naranja — acento cálido mexicano de la marca */}
              <a
                href="/modelo-360"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-200 font-[family-name:var(--font-body)] bg-[oklch(63%_0.19_24)] hover:bg-[oklch(68%_0.20_24)] shadow-[0_0_40px_oklch(63%_0.19_24/0.45)] hover:shadow-[0_0_56px_oklch(63%_0.19_24/0.6)]"
              >
                Ver Proyecto Integral
                <ArrowRight size={15} />
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 font-[family-name:var(--font-body)] border border-[oklch(41%_0.12_228/0.5)] text-[oklch(62%_0.07_228)] hover:text-white hover:border-white/20"
              >
                Solicitar cotización
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Xolinox mascota ──────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 48 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 1.1, ease: EASE }}
            className="relative flex justify-center lg:justify-end items-end min-h-[420px] md:min-h-[520px]"
          >
            {/* Glow azul detrás */}
            <div className="pointer-events-none absolute bottom-0 inset-x-0 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-[oklch(41%_0.12_228/0.4)] blur-[90px]" />
            </div>
            {/* Glow naranja accent — bordado mascota */}
            <div className="pointer-events-none absolute bottom-16 right-4 lg:right-12">
              <div className="w-40 h-40 rounded-full bg-[oklch(63%_0.19_24/0.18)] blur-[48px]" />
            </div>

            {/* Mascota Xolinox — mix-blend-mode screen hace que el fondo negro desaparezca */}
            <div className="relative z-10" style={{ mixBlendMode: "screen" }}>
              <Image
                src="/images/xolinox.png"
                alt="Xolinox, mascota oficial de Refrinox"
                width={520}
                height={560}
                className="object-contain select-none w-full max-w-[420px] md:max-w-[520px]"
                priority
              />
            </div>

            {/* Floating quote bubble — estilo social media de Refrinox */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
              className="absolute top-8 left-0 lg:left-auto lg:-left-4 z-20 max-w-[200px]"
            >
              <div className="relative bg-[oklch(41%_0.12_228)] rounded-2xl rounded-bl-sm px-4 py-3 shadow-[0_8px_32px_oklch(41%_0.12_228/0.5)]">
                <p className="text-xs font-semibold text-white font-[family-name:var(--font-body)] leading-snug">
                  "Me uní al equipo para ser tu guía y mostrarte el alma de nuestra empresa."
                </p>
                {/* Tail del bubble */}
                <div className="absolute -bottom-2 left-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[0px] border-t-[10px] border-t-[oklch(41%_0.12_228)]" />
              </div>
              <p className="mt-3 ml-2 text-[10px] font-bold uppercase tracking-widest text-[oklch(63%_0.19_24)] font-[family-name:var(--font-display)]">
                Xolinox
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
