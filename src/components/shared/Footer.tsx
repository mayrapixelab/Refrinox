import Image from "next/image";

const WA_NUMBER = "5213318582614";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Máquinas", href: "/maquinas" },
  { label: "Modelo 360", href: "/modelo-360" },
  { label: "Éxito", href: "/exito" },
  { label: "Aprende", href: "/aprende" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(6%_0.04_235)] border-t border-[oklch(16%_0.06_228)] px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Brand */}
        <div className="max-w-xs">
          {/* Logo oficial */}
          <div className="relative h-12 w-48 mb-5">
            <Image
              src="/images/logo-refrinox.png"
              alt="Refrinox"
              fill
              className="object-contain object-left"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p className="text-sm text-[oklch(68%_0.05_228)] font-[family-name:var(--font-body)] leading-relaxed">
            Innovación Mexicana para la Industria del Helado.<br />
            Certificación NSF · +30 años · México & EUA
          </p>
          <p className="text-xs text-[oklch(55%_0.06_228)] font-[family-name:var(--font-body)] mt-4 font-bold uppercase tracking-widest">
            Lo hecho en México está bien hecho.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[oklch(55%_0.05_228)] mb-1 font-[family-name:var(--font-body)]">
            Sitio
          </p>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[oklch(65%_0.05_228)] hover:text-white transition-colors font-[family-name:var(--font-body)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contacto */}
        <div className="flex flex-col gap-2.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[oklch(55%_0.05_228)] mb-1 font-[family-name:var(--font-body)]">
            Contacto
          </p>
          <a
            href="tel:+523336171010"
            className="text-sm text-[oklch(65%_0.05_228)] hover:text-white transition-colors font-[family-name:var(--font-body)]"
          >
            +52 33 3617 1010
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[oklch(65%_0.05_228)] hover:text-white transition-colors font-[family-name:var(--font-body)]"
          >
            WhatsApp directo
          </a>
          <a
            href="mailto:ventas@refrinox.com.mx"
            className="text-sm text-[oklch(65%_0.05_228)] hover:text-white transition-colors font-[family-name:var(--font-body)]"
          >
            ventas@refrinox.com.mx
          </a>
          <p className="text-sm text-[oklch(58%_0.04_228)] font-[family-name:var(--font-body)] leading-relaxed mt-1">
            Monte Albán 2638, Col. Esperanza<br />
            Guadalajara, Jalisco, CP 44300
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[oklch(14%_0.05_228)] flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[oklch(48%_0.04_228)] font-[family-name:var(--font-body)]">
          © {new Date().getFullYear()} Refrinox. Todos los derechos reservados.
        </p>
        <p className="text-xs text-[oklch(42%_0.04_228)] font-[family-name:var(--font-body)]">
          Sitio desarrollado por{" "}
          <span className="text-[oklch(55%_0.06_228)]">Pixelab</span>
        </p>
      </div>
    </footer>
  );
}
