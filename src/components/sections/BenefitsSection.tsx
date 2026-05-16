"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck, Clock, Layers } from "lucide-react";
import Image from "next/image";
import { ScrollGradient } from "@/components/ui/scroll-gradient";

const BENEFITS = [
  {
    icon: Clock,
    number: "+30",
    unit: "años",
    title: "La experiencia que no se improvisa",
    body: "Tres décadas fabricando equipos para la industria del helado en México. Sabemos exactamente qué falla, qué aguanta y qué necesita tu negocio.",
    seal: false,
    bg: "oklch(90% 0.07 228)",
    text: "oklch(12% 0.07 228)",
    accent: "oklch(35% 0.16 228)",
    border: "oklch(80% 0.09 228)",
  },
  {
    icon: ShieldCheck,
    number: "NSF",
    unit: "certificado",
    title: "El estándar que te abre puertas",
    body: "Nuestros equipos cumplen con la certificación NSF — el requisito de seguridad alimentaria que exigen hoteles, cadenas y el mercado de EUA.",
    seal: true,
    bg: "oklch(41% 0.18 228)",
    text: "oklch(98% 0.01 228)",
    accent: "oklch(80% 0.10 228)",
    border: "oklch(50% 0.18 228)",
  },
  {
    icon: Layers,
    number: "360°",
    unit: "Modelo",
    title: "No te vendemos equipo y te dejamos solo",
    body: "Planeamos, fabricamos, instalamos, capacitamos y te acompañamos en la operación. Tu negocio funciona desde el primer día.",
    seal: false,
    bg: "oklch(18% 0.12 228)",
    text: "oklch(95% 0.01 228)",
    accent: "oklch(68% 0.10 228)",
    border: "oklch(28% 0.12 228)",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function BenefitsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="beneficios"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-white"
    >
      <ScrollGradient bg="steel" />

      <div className="max-w-6xl mx-auto">
        {/* Header — mascota centrada arriba, texto abajo */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          {/* Mascota con fade in */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-8"
          >
            <div className="relative h-52 w-44 md:h-64 md:w-52">
              <Image
                src="/images/xolinox-1.png"
                alt="Xolinox, mascota Refrinox"
                fill
                className="object-contain object-bottom drop-shadow-[0_8px_24px_oklch(41%_0.12_228/0.20)]"
                sizes="(max-width: 768px) 176px, 208px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(41%_0.12_228)] mb-4 font-[family-name:var(--font-body)]">
              Por qué Refrinox
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-[oklch(12%_0.07_228)] leading-tight max-w-xl mx-auto">
              Tres razones que
              <br />
              <span className="text-[oklch(41%_0.12_228)]">lo cambian todo.</span>
            </h2>
          </motion.div>
        </div>

        {/* Carousel / Cards */}
        {/* En mobile: scroll horizontal. En desktop: 3 columnas */}
        <div className="relative">
          {/* Fade lateral en mobile */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 md:hidden" />

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              const isLight = i === 0;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.14, duration: 0.7, ease: EASE }}
                  className="group relative rounded-2xl overflow-hidden snap-start shrink-0 w-[82vw] md:w-auto p-8"
                  style={{
                    background: b.bg,
                    border: `1px solid ${b.border}`,
                  }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: isLight ? "oklch(41% 0.18 228 / 0.12)" : "oklch(100% 0 0 / 0.12)" }}
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        style={{ color: b.accent }}
                      />
                    </div>
                    {b.seal && (
                      <div className="relative h-12 w-12 shrink-0">
                        <Image
                          src="/images/sello-nsf.png"
                          alt="Certificación NSF"
                          fill
                          className="object-contain"
                          sizes="48px"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <span
                      className="text-5xl font-extrabold font-[family-name:var(--font-display)]"
                      style={{ color: b.text }}
                    >
                      {b.number}
                    </span>
                    <span
                      className="text-sm font-semibold ml-2 uppercase tracking-wider font-[family-name:var(--font-body)]"
                      style={{ color: b.accent }}
                    >
                      {b.unit}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 leading-snug font-[family-name:var(--font-display)] uppercase"
                    style={{ color: b.text }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-[family-name:var(--font-body)]"
                    style={{ color: isLight ? "oklch(40% 0.06 228)" : "oklch(85% 0.03 228)" }}
                  >
                    {b.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
