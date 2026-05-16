"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ScrollGradient } from "@/components/ui/scroll-gradient";

const EQUIPO = [
  {
    initials: "RF",
    nombre: "Ricardo Flores",
    rol: "CEO",
    desc: "Estrategia de negocio y proyectos de gran escala. Consolida plantas de producción masiva para inversionistas.",
    wa: "523310959252",
  },
  {
    initials: "JF",
    nombre: "Javier Flores",
    rol: "Director General",
    desc: "Ingeniería de producto y cumplimiento de estándares internacionales. Garantiza la excelencia operativa de su equipo.",
    wa: "523323435421",
  },
  {
    initials: "KL",
    nombre: "Karla López",
    rol: "Ventas Senior",
    desc: "Especialista en proyectos Llave en Mano. Guía su inversión desde la selección hasta la apertura exitosa.",
    wa: "523317230406",
  },
  {
    initials: "MP",
    nombre: "Mayan Pérez",
    rol: "Ventas Senior",
    desc: "Especialista en proyectos Llave en Mano. Guía su inversión desde la selección hasta la apertura exitosa.",
    wa: "523318582614",
  },
  {
    initials: "LA",
    nombre: "Larissa Arellano",
    rol: "Ventas Senior",
    desc: "Especialista en proyectos Llave en Mano. Guía su inversión desde la selección hasta la apertura exitosa.",
    wa: "523318689218",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function NosotrosSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="nosotros"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-white"
    >
      <ScrollGradient bg="steel" />

      <div className="max-w-6xl mx-auto">
        {/* Header + brand image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(41%_0.12_228)] mb-4 font-[family-name:var(--font-body)]">
              Nosotros
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-[oklch(12%_0.07_228)] leading-tight mb-8">
              Tres décadas de
              <br />
              <span className="text-[oklch(41%_0.12_228)]">ingeniería y éxito.</span>
            </h2>

            <div className="space-y-5 text-[oklch(45%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed mb-10">
              <p>
                Refrinox nace de la visión de transformar la industria del frío en México a
                través de la manufactura de precisión. Pasamos de ser un taller especializado
                a consolidarnos como el fabricante líder que equipa proyectos de exportación.
              </p>
              <p>
                Nuestra historia se escribe con el éxito de los emprendedores que iniciaron
                con una sola máquina y hoy operan plantas de producción masiva.
              </p>
              <p>
                La certificación NSF no es un adorno — es nuestro compromiso con los estándares
                más estrictos de salud pública que exigen México y Estados Unidos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "+30", label: "años de experiencia" },
                { num: "+2,000", label: "clientes en México" },
                { num: "+400", label: "proyectos de exportación" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-[oklch(41%_0.12_228)] font-[family-name:var(--font-display)]">
                    {stat.num}
                  </p>
                  <p className="text-xs text-[oklch(55%_0.05_228)] font-[family-name:var(--font-body)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Brand image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.75, ease: EASE }}
          >
            <Image
              src="/images/nosotros.png"
              alt="Refrinox nosotros"
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl shadow-[0_8px_40px_oklch(41%_0.12_228/0.10)]"
            />
          </motion.div>
        </div>

        {/* Equipo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(55%_0.05_228)] mb-4 font-[family-name:var(--font-body)]"
        >
          Habla directamente con nuestro equipo
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {EQUIPO.map((persona, i) => (
            <motion.a
              key={persona.nombre}
              href={`https://wa.me/${persona.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.6, ease: EASE }}
              className="group rounded-xl border border-[oklch(88%_0.03_228)] bg-[oklch(98%_0.008_228)] hover:border-[oklch(41%_0.12_228/0.4)] hover:shadow-[0_4px_20px_oklch(41%_0.12_228/0.08)] transition-all duration-300 p-5 flex items-center gap-4"
            >
              {/* Avatar */}
              <div className="w-11 h-11 rounded-full bg-[oklch(41%_0.12_228/0.10)] flex items-center justify-center shrink-0 border border-[oklch(41%_0.12_228/0.20)] group-hover:border-[oklch(41%_0.12_228/0.4)] transition-colors">
                <span className="text-sm font-extrabold text-[oklch(41%_0.12_228)] font-[family-name:var(--font-display)]">
                  {persona.initials}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-bold text-[oklch(12%_0.07_228)] uppercase font-[family-name:var(--font-display)] leading-none">
                    {persona.nombre}
                  </p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[oklch(41%_0.12_228/0.08)] text-[oklch(41%_0.12_228)] border border-[oklch(41%_0.12_228/0.2)] font-[family-name:var(--font-body)] shrink-0">
                    {persona.rol}
                  </span>
                </div>
                <p className="text-xs text-[oklch(55%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed line-clamp-2">
                  {persona.desc}
                </p>
              </div>

              {/* WA icon */}
              <div className="shrink-0 text-[oklch(75%_0.04_228)] group-hover:text-[#25D366] transition-colors">
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
