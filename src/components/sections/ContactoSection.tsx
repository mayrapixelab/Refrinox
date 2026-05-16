"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Truck, ArrowRight, Send, Mail } from "lucide-react";
import Image from "next/image";
import { ScrollGradient } from "@/components/ui/scroll-gradient";

const WA_NUMBER = "5213318582614";

function buildWAMessage(data: {
  nombre: string;
  email: string;
  ciudad: string;
  telefono: string;
  necesidad: string;
  mensaje: string;
}): string {
  const lines = [
    `Hola, vengo desde el sitio web de Refrinox.`,
    ``,
    `*Nombre:* ${data.nombre}`,
    `*Correo:* ${data.email}`,
    `*Ciudad / País:* ${data.ciudad}`,
    `*Teléfono:* ${data.telefono}`,
    `*Interés:* ${data.necesidad}`,
  ];
  if (data.mensaje.trim()) {
    lines.push(``, `*Proyecto:* ${data.mensaje}`);
  }
  return encodeURIComponent(lines.join("\n"));
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    telefono: "",
    necesidad: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = buildWAMessage(form);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[oklch(98%_0.008_228)] border border-[oklch(88%_0.03_228)] focus:border-[oklch(41%_0.12_228)] focus:outline-none text-[oklch(12%_0.07_228)] placeholder-[oklch(68%_0.04_228)] text-sm transition-colors font-[family-name:var(--font-body)]";

  return (
    <section
      ref={ref}
      id="contacto"
      className="relative py-28 md:py-40 px-6 md:px-12 lg:px-24 bg-[oklch(96%_0.010_228)]"
    >
      <ScrollGradient bg="deep" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Texto izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(41%_0.12_228)] mb-4 font-[family-name:var(--font-body)]">
              Contacto
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-[oklch(12%_0.07_228)] leading-tight mb-6">
              Inicie su proyecto.
              <br />
              <span className="text-[oklch(41%_0.12_228)]">Asegure su rentabilidad.</span>
            </h2>
            <p className="text-lg text-[oklch(45%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed mb-8">
              Reciba una propuesta personalizada en menos de 48 horas.
              Equipamos su éxito en México y Estados Unidos.
            </p>

            {/* Imagen de contacto — dimensiones naturales */}
            <div className="w-full rounded-2xl overflow-hidden mb-10 shadow-[0_4px_24px_oklch(41%_0.12_228/0.10)]">
              <Image
                src="/images/contacto.png"
                alt="Equipo Refrinox listo para atenderte"
                width={1200}
                height={900}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>

            {/* Datos de contacto */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1.5} className="text-[oklch(41%_0.12_228)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[oklch(12%_0.07_228)] font-[family-name:var(--font-body)]">Planta de fabricación</p>
                  <p className="text-sm text-[oklch(50%_0.04_228)] font-[family-name:var(--font-body)]">
                    Monte Albán 2638, Col. Esperanza<br />CP 44300, Guadalajara, Jalisco
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} strokeWidth={1.5} className="text-[oklch(41%_0.12_228)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[oklch(12%_0.07_228)] font-[family-name:var(--font-body)]">Teléfono y WhatsApp</p>
                  <a
                    href="tel:+523336171010"
                    className="block text-sm text-[oklch(41%_0.12_228)] hover:text-[oklch(30%_0.10_228)] transition-colors font-[family-name:var(--font-body)]"
                  >
                    +52 33 3617 1010
                  </a>
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[oklch(41%_0.12_228)] hover:text-[oklch(30%_0.10_228)] transition-colors font-[family-name:var(--font-body)]"
                  >
                    WhatsApp: +52 33 1858 2614
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} strokeWidth={1.5} className="text-[oklch(41%_0.12_228)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[oklch(12%_0.07_228)] font-[family-name:var(--font-body)]">Correo electrónico</p>
                  <a
                    href="mailto:ventas@refrinox.com.mx"
                    className="text-sm text-[oklch(41%_0.12_228)] hover:text-[oklch(30%_0.10_228)] transition-colors font-[family-name:var(--font-body)]"
                  >
                    ventas@refrinox.com.mx
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Truck size={18} strokeWidth={1.5} className="text-[oklch(41%_0.12_228)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[oklch(12%_0.07_228)] font-[family-name:var(--font-body)]">Logística</p>
                  <p className="text-sm text-[oklch(50%_0.04_228)] font-[family-name:var(--font-body)]">
                    Entrega en toda la República Mexicana y Estados Unidos
                  </p>
                </div>
              </div>
            </div>

            {/* Equipo de ventas con WA individual */}
            <div className="mt-10 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[oklch(55%_0.05_228)] font-[family-name:var(--font-body)]">
                Asesoras disponibles ahora
              </p>
              {[
                { nombre: "Mayan Pérez", wa: "523318582614" },
                { nombre: "Karla López", wa: "523317230406" },
                { nombre: "Larissa Arellano", wa: "523318689218" },
              ].map((a) => (
                <a
                  key={a.nombre}
                  href={`https://wa.me/${a.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-7 h-7 rounded-full bg-[#25D36615] border border-[#25D36630] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-3.5 h-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-sm text-[oklch(45%_0.04_228)] group-hover:text-[oklch(12%_0.07_228)] transition-colors font-[family-name:var(--font-body)]">
                    {a.nombre}
                  </span>
                  <ArrowRight size={12} className="text-[oklch(70%_0.04_228)] group-hover:text-[oklch(41%_0.12_228)] group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Formulario → WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
            className="rounded-2xl border border-[oklch(88%_0.03_228)] bg-white p-8 shadow-[0_4px_32px_oklch(41%_0.12_228/0.06)]"
          >
            <h3 className="text-xl font-bold text-[oklch(12%_0.07_228)] uppercase font-[family-name:var(--font-display)] mb-2">
              Solicitar cotización
            </h3>
            <p className="text-xs text-[oklch(55%_0.04_228)] font-[family-name:var(--font-body)] mb-6">
              Al enviar, abrirás WhatsApp con tu mensaje listo. Sin formularios perdidos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[oklch(41%_0.12_228)] uppercase tracking-wider mb-2 font-[family-name:var(--font-body)]">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[oklch(41%_0.12_228)] uppercase tracking-wider mb-2 font-[family-name:var(--font-body)]">
                    Ciudad y País *
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    required
                    placeholder="Ciudad, País"
                    value={form.ciudad}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[oklch(41%_0.12_228)] uppercase tracking-wider mb-2 font-[family-name:var(--font-body)]">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="correo@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[oklch(41%_0.12_228)] uppercase tracking-wider mb-2 font-[family-name:var(--font-body)]">
                  WhatsApp / Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  placeholder="+52 33 ..."
                  value={form.telefono}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[oklch(41%_0.12_228)] uppercase tracking-wider mb-2 font-[family-name:var(--font-body)]">
                  Tipo de interés *
                </label>
                <select
                  name="necesidad"
                  required
                  value={form.necesidad}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Selecciona una opción</option>
                  <option>Negocio Llave en Mano (Paletería Modelo 360)</option>
                  <option>Maquinaria Profesional para Helado y Gelato</option>
                  <option>Producción Industrial de Paletas y Nieves</option>
                  <option>Equipos para Coctelería Helada</option>
                  <option>Fabricación Especial en Acero Inoxidable</option>
                  <option>Mantenimiento o Refacción</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[oklch(41%_0.12_228)] uppercase tracking-wider mb-2 font-[family-name:var(--font-body)]">
                  Cuéntanos tu proyecto
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntenos sus metas de producción o dudas técnicas"
                  value={form.mensaje}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all duration-200 font-[family-name:var(--font-body)] shadow-[0_0_24px_#25D36630] hover:shadow-[0_0_36px_#25D36650]"
              >
                <Send size={16} />
                Enviar por WhatsApp
              </button>

              <p className="text-center text-xs text-[oklch(60%_0.04_228)] font-[family-name:var(--font-body)]">
                Se abre WhatsApp con tu solicitud lista. Sin esperas.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
