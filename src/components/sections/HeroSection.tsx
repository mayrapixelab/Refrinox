'use client';

import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export function HeroSection() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/videos/hero-llave-en-mano.mp4"
      bgImageSrc="/images/brand/fabricadores.jpg"
      title="Fabricamos Máquinas que Facturan"
      date="NSF · +30 años · México & EUA"
      scrollToExpand="Desplázate para descubrir"
      textBlend={false}
    >
      {/* Contenido revelado tras la expansión completa del video */}
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge NSF */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <ShieldCheck size={14} className="text-[oklch(72%_0.08_228)]" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(55%_0.05_228)] font-[family-name:var(--font-body)]">
            Certificación NSF · Fabricación Mexicana · +30 años
          </span>
        </div>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-[oklch(45%_0.04_228)] max-w-2xl mx-auto font-[family-name:var(--font-body)] font-light leading-relaxed mb-10">
          Somos fabricantes de ingeniería en acero inoxidable para la producción de paletas,
          gelato, nieve y coctelería helada. Entregamos la potencia técnica que su receta exige
          para asegurar la rentabilidad de su inversión.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
          <a
            href="/modelo-360"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(41%_0.12_228)] hover:bg-[oklch(50%_0.13_228)] text-white font-bold text-base transition-all duration-200 font-[family-name:var(--font-body)] shadow-[0_0_32px_oklch(41%_0.12_228/0.35)]"
          >
            Consultar Soluciones 360
            <ArrowRight size={15} />
          </a>
          <a
            href="/maquinas"
            className="px-8 py-4 rounded-full border border-[oklch(85%_0.03_228)] text-[oklch(40%_0.05_228)] hover:border-[oklch(41%_0.12_228)] hover:text-[oklch(41%_0.12_228)] font-semibold text-base transition-all duration-200 font-[family-name:var(--font-body)]"
          >
            Cotizar mi maquinaria
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[oklch(55%_0.04_228)] text-sm font-[family-name:var(--font-body)]">
          <span className="flex items-center gap-1.5">
            <Star size={12} className="fill-current text-[oklch(63%_0.19_24)]" />
            Más de 500 proyectos exitosos
          </span>
          <span className="w-px h-4 bg-[oklch(85%_0.03_228)] hidden sm:block" />
          <span>Entrega en toda la República</span>
          <span className="w-px h-4 bg-[oklch(85%_0.03_228)] hidden sm:block" />
          <span>Logística a EUA</span>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
