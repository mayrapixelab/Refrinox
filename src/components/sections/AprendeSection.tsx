"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, MotionValue } from "motion/react";
import { PlayCircle, BookOpen, BarChart2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ScrollGradient } from "@/components/ui/scroll-gradient";

const RECURSOS = [
  {
    icon: BookOpen,
    tipo: "Recetas Rentables",
    desc: "Fórmulas estandarizadas de alta gama para helado artesanal, gelato y paletas premium. Optimizan el uso de materia prima y maximizan su margen de utilidad en cada ciclo de producción.",
    badge: "Actualizado 2026",
    image: "/images/brand/maquina-xolinox.jpg",
    imageAlt: "Recetas de helado artesanal Refrinox",
    bg: "oklch(22% 0.12 228)",
    accent: "oklch(68% 0.10 228)",
    badgeColor: "oklch(63% 0.19 24)",
  },
  {
    icon: PlayCircle,
    tipo: "Videos Técnicos y Masterclass",
    desc: "Protocolos profesionales de puesta en marcha, mantenimiento preventivo y calibración de equipos. Reducen tiempos de inactividad y garantizan que su maquinaria opere al 100% desde el primer día.",
    badge: "Gratis",
    image: "/images/brand/fabricadores.jpg",
    imageAlt: "Máquinas Refrinox en operación",
    bg: "oklch(32% 0.16 228)",
    accent: "oklch(78% 0.08 228)",
    badgeColor: "oklch(65% 0.16 160)",
  },
  {
    icon: BarChart2,
    tipo: "Estrategias y Tendencias 2026",
    desc: "Datos reales y proyecciones para inversionistas. Nuevos hábitos de consumo en México y Estados Unidos, costos operativos por región y modelos de negocio con alto retorno de inversión.",
    badge: "Nuevo",
    image: "/images/brand/inversion.jpg",
    imageAlt: "Estrategias de inversión en heladerías",
    bg: "oklch(42% 0.18 228)",
    accent: "oklch(88% 0.06 228)",
    badgeColor: "oklch(70% 0.18 228)",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const CARD_OFFSET = 24; // px that each card peeks above the next

function AprendeCard({
  recurso,
  index,
  scrollYProgress,
}: {
  recurso: (typeof RECURSOS)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const n = RECURSOS.length;
  const Icon = recurso.icon;

  // This card enters at (index/n) of scroll and the next card comes in at ((index+1)/n)
  const start = index / n;
  const end = (index + 1) / n;

  // Scale & translateY this card slightly as the next one slides over it
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [start, Math.min(end, 0.99)], [1, 0.7]);

  // Offset so cards stack slightly peeking: each card is pushed down by CARD_OFFSET * index
  const topOffset = index * CARD_OFFSET;

  return (
    <motion.div
      style={{
        scale,
        opacity,
        top: topOffset,
        position: "sticky",
        zIndex: index + 1,
      }}
      className="w-full mb-6"
    >
      <div
        className="rounded-2xl overflow-hidden shadow-[0_16px_64px_oklch(0%_0_0/0.25)]"
        style={{ background: recurso.bg }}
      >
        <div className="flex flex-col md:flex-row min-h-[320px]">
          {/* Image — left on desktop, top on mobile */}
          <div className="relative md:w-2/5 h-52 md:h-auto overflow-hidden shrink-0">
            <Image
              src={recurso.image}
              alt={recurso.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 380px"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-[oklch(0%_0_0/0.20)]" />
            {/* Side fade on desktop */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-current to-transparent" style={{ color: recurso.bg }} />
          </div>

          {/* Content */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Icon size={20} strokeWidth={1.5} style={{ color: recurso.accent }} />
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full font-[family-name:var(--font-body)]"
                style={{ background: `${recurso.badgeColor}25`, color: recurso.badgeColor, border: `1px solid ${recurso.badgeColor}50` }}
              >
                {recurso.badge}
              </span>
            </div>

            <h3
              className="text-2xl md:text-3xl font-extrabold uppercase font-[family-name:var(--font-display)] leading-tight mb-4"
              style={{ color: recurso.accent }}
            >
              {recurso.tipo}
            </h3>

            <p className="text-sm text-white/75 leading-relaxed font-[family-name:var(--font-body)] mb-6 max-w-md">
              {recurso.desc}
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold font-[family-name:var(--font-body)] group/cta cursor-pointer" style={{ color: recurso.accent }}>
              <span>Acceder ahora</span>
              <ArrowRight size={15} className="group-hover/cta:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AprendeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      id="aprende"
      className="relative bg-[oklch(96%_0.010_228)]"
    >
      <ScrollGradient bg="deep" />

      {/* Header — fuera del scroll container */}
      <div className="px-6 md:px-12 lg:px-24 pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(41%_0.12_228)] mb-4 font-[family-name:var(--font-body)]">
              Centro de aprendizaje
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-[oklch(12%_0.07_228)] leading-tight max-w-2xl">
              Conocimiento que
              <br />
              <span className="text-[oklch(41%_0.12_228)]">multiplica sus ventas.</span>
            </h2>
            <p className="text-lg text-[oklch(45%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed mt-5 max-w-2xl">
              Domine la industria del frío con herramientas técnicas que potencian el rendimiento de su maquinaria.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stacking scroll container */}
      {/* Height = (n_cards - 1) * scroll_unit + viewport. The extra cards each need scroll room */}
      <div
        ref={containerRef}
        style={{ height: `${(RECURSOS.length - 1) * 60 + 100}vh` }}
        className="relative"
      >
        <div
          className="sticky top-20 px-6 md:px-12 lg:px-24"
          style={{ paddingTop: `${CARD_OFFSET * (RECURSOS.length - 1)}px` }}
        >
          <div className="max-w-6xl mx-auto">
            {RECURSOS.map((r, i) => (
              <AprendeCard
                key={r.tipo}
                recurso={r}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA — fuera del scroll container */}
      <div className="px-6 md:px-12 lg:px-24 pb-28 md:pb-36 pt-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(41%_0.12_228)] hover:bg-[oklch(50%_0.13_228)] text-white font-bold text-base transition-all duration-200 font-[family-name:var(--font-body)] shadow-[0_0_32px_oklch(41%_0.12_228/0.25)]"
            >
              Acceder al centro de aprendizaje
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
