"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Award, Globe, ShieldCheck, Star, Snowflake, Layers, Armchair } from "lucide-react";
import Image from "next/image";
import { ScrollGradient } from "@/components/ui/scroll-gradient";

const TIMELINE_ITEMS = [
  {
    category: "Niveles de Equipo",
    icon: Award,
    nombre: "Calidad Nacional",
    desc: "Maquinaria robusta con ingeniería de alto desempeño para el mercado mexicano. Priorizan la durabilidad estructural y la facilidad de mantenimiento local, asegurando una operación continua en condiciones de trabajo intenso sin complicaciones técnicas.",
    tag: null,
    highlight: false,
  },
  {
    category: "Niveles de Equipo",
    icon: Globe,
    nombre: "Exportación",
    desc: "Equipos configurados con componentes de grado internacional para operar bajo estándares de alta eficiencia fuera del país. Su diseño técnico facilita la logística y garantiza un rendimiento térmico superior en climas diversos y exigencias de producción masiva.",
    tag: null,
    highlight: false,
  },
  {
    category: "Niveles de Equipo",
    icon: ShieldCheck,
    nombre: "Certificada NSF",
    desc: "Línea de élite con certificación de la Organización para la Salud y Seguridad Pública (NSF). Cumplen los requisitos sanitarios más estrictos de Estados Unidos, garantizando materiales inertes, higiene absoluta y una construcción que supera cualquier inspección internacional.",
    tag: "Elite",
    highlight: true,
  },
  {
    category: "Niveles de Equipo",
    icon: Star,
    nombre: "Calidad Plus",
    desc: "Gama superior que combina potencia térmica máxima con acabados de lujo en acero inoxidable. Incluye sistemas de optimización energética y componentes de alta gama que reducen los costos operativos mientras elevan el estándar estético de su planta de producción.",
    tag: null,
    highlight: false,
  },
  {
    category: "Sistemas de Producción",
    icon: Snowflake,
    nombre: "Máquinas de Garrafa Automáticas",
    desc: "Tecnología que automatiza el proceso artesanal tradicional. Logran texturas perfectas en nieve de garrafa mediante un control preciso de tiempo y temperatura, eliminando la intervención manual constante y estandarizando la calidad en cada ciclo de producción.",
    tag: "Nuevo",
    highlight: false,
  },
  {
    category: "Sistemas de Producción",
    icon: Layers,
    nombre: "Fabricadores de Paletas de Alto Volumen",
    desc: "Sistemas de producción industrial configurables desde 1 hasta 6 moldes. Su ingeniería reduce drásticamente los tiempos de congelación, permitiendo maximizar la salida de producto por turno y optimizar la recuperación de la inversión a corto plazo.",
    tag: "Más vendido",
    highlight: false,
  },
  {
    category: "Sistemas de Producción",
    icon: Snowflake,
    nombre: "Barricas Tradicionales",
    desc: "Equipos con aislamiento térmico de alta densidad que conservan la técnica clásica de producción. Son la solución ideal para puntos de venta que exigen una imagen artesanal auténtica respaldada por la eficiencia de un motor industrial de alto rendimiento.",
    tag: null,
    highlight: false,
  },
  {
    category: "Mobiliario Industrial",
    icon: Armchair,
    nombre: "Estaciones de Servicio",
    desc: "Módulos integrales diseñados para agilizar el flujo de despacho. Incluyen áreas de trabajo ergonómicas, tarjas sanitarias y compartimentos de almacenamiento optimizados para heladerías y paleterías de alto tráfico.",
    tag: null,
    highlight: false,
  },
  {
    category: "Mobiliario Industrial",
    icon: Armchair,
    nombre: "Muebles para Aguas Frescas",
    desc: "Vitroleros y estaciones de despacho con sistemas de refrigeración o aislamiento térmico avanzado. Mantienen el producto a la temperatura ideal de consumo y garantizan higiene total, elevando la presentación comercial de sus bebidas.",
    tag: null,
    highlight: false,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function TimelineItem({
  item,
  index,
  inView,
}: {
  item: (typeof TIMELINE_ITEMS)[number];
  index: number;
  inView: boolean;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.05 + index * 0.07, duration: 0.65, ease: EASE }}
      className="flex gap-6 md:gap-10"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 z-10 ${
            item.highlight
              ? "bg-[oklch(41%_0.18_228)] border-[oklch(41%_0.18_228)]"
              : "bg-white border-[oklch(82%_0.06_228)]"
          }`}
        >
          <Icon
            size={16}
            strokeWidth={1.5}
            className={item.highlight ? "text-white" : "text-[oklch(41%_0.12_228)]"}
          />
        </div>
        <div className="w-px flex-1 bg-[oklch(88%_0.04_228)] mt-2" />
      </div>

      {/* Card */}
      <div
        className={`mb-8 flex-1 rounded-2xl border p-6 md:p-7 transition-all duration-300 ${
          item.highlight
            ? "border-[oklch(41%_0.12_228/0.5)] bg-[oklch(41%_0.12_228/0.04)] shadow-[0_4px_24px_oklch(41%_0.12_228/0.12)]"
            : "border-[oklch(88%_0.03_228)] bg-white hover:border-[oklch(41%_0.12_228/0.3)] hover:shadow-[0_4px_16px_oklch(41%_0.12_228/0.07)]"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[oklch(55%_0.06_228)] font-[family-name:var(--font-body)]">
              {item.category}
            </p>
          </div>
          {item.tag && (
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-[family-name:var(--font-body)] ${
                item.highlight
                  ? "bg-[oklch(41%_0.12_228)] text-white"
                  : "bg-[oklch(41%_0.12_228/0.08)] text-[oklch(30%_0.10_228)] border border-[oklch(41%_0.12_228/0.2)]"
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        <h3 className="text-base font-extrabold uppercase text-[oklch(12%_0.07_228)] font-[family-name:var(--font-display)] mb-2 leading-tight">
          {item.nombre}
        </h3>
        <p className="text-sm text-[oklch(45%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function MaquinariaSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const mascolaInsertIndex = 4; // after first 4 items (Niveles), before Sistemas

  return (
    <section
      ref={ref}
      id="maquinaria"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[oklch(96%_0.010_228)]"
    >
      <ScrollGradient bg="deep" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(41%_0.12_228)] mb-4 font-[family-name:var(--font-body)]">
              Maquinaria Profesional
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-[oklch(12%_0.07_228)] leading-tight">
              Ingeniería mexicana
              <br />
              <span className="text-[oklch(41%_0.12_228)]">con respaldo internacional.</span>
            </h2>
          </div>
          <a
            href="https://refrinox.com.mx/tienda/producto/listado"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[oklch(41%_0.12_228)] hover:text-[oklch(30%_0.10_228)] transition-colors font-[family-name:var(--font-body)] group shrink-0"
          >
            Ver catálogo completo
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative w-full rounded-2xl overflow-hidden mb-16 border border-[oklch(88%_0.03_228)] shadow-[0_8px_40px_oklch(41%_0.12_228/0.10)]"
          style={{ aspectRatio: "16/7" }}
        >
          <Image
            src="/images/brand/fabricadores.jpg"
            alt="Fabricadores de Paletas y Helados Refrinox 2026"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(12%_0.07_228/0.75)] via-[oklch(12%_0.07_228/0.30)] to-transparent flex items-end p-8 md:p-12">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(70%_0.08_228)] mb-2 font-[family-name:var(--font-body)]">
                Fabricadores Modelo 2026
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-white uppercase font-[family-name:var(--font-display)] leading-tight max-w-sm">
                Más eficientes. Más seguros. Más producción.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline vertical */}
        <div>
          {TIMELINE_ITEMS.map((item, i) => (
            <div key={item.nombre}>
              {/* Mascota al inicio de Sistemas de Producción */}
              {i === mascolaInsertIndex && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
                  className="flex gap-6 md:gap-10 mb-4"
                >
                  {/* Alinear con la línea */}
                  <div className="flex flex-col items-center shrink-0 w-9">
                    <div className="w-px h-8 bg-[oklch(88%_0.04_228)]" />
                    <div className="w-2 h-2 rounded-full bg-[oklch(63%_0.19_24)]" />
                    <div className="w-px h-8 bg-[oklch(88%_0.04_228)]" />
                  </div>
                  {/* Mascota + label */}
                  <div className="flex items-center gap-5 mb-6 flex-1">
                    <div className="relative h-28 w-24 shrink-0">
                      <Image
                        src="/images/xolinox-1.png"
                        alt="Xolinox presentando los sistemas de producción"
                        fill
                        className="object-contain object-bottom drop-shadow-[0_4px_20px_oklch(41%_0.12_228/0.15)]"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[oklch(63%_0.19_24)] font-[family-name:var(--font-body)] mb-1">
                        A continuación
                      </p>
                      <p className="text-lg font-extrabold uppercase text-[oklch(12%_0.07_228)] font-[family-name:var(--font-display)] leading-tight">
                        Sistemas de Producción
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <TimelineItem item={item} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[oklch(55%_0.05_228)] font-[family-name:var(--font-body)] mt-4 mb-12"
        >
          Lo hecho en México está bien hecho
        </motion.p>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
          className="text-center"
        >
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(41%_0.12_228)] hover:bg-[oklch(50%_0.13_228)] text-white font-bold text-base transition-all duration-200 font-[family-name:var(--font-body)] shadow-[0_0_32px_oklch(41%_0.12_228/0.25)]"
          >
            Cotizar mi maquinaria
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
