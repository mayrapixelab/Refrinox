"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Máquinas", href: "/maquinas" },
  { label: "Modelo 360", href: "/modelo-360" },
  { label: "Éxito", href: "/exito" },
  { label: "Aprende", href: "/aprende" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();

  // Only go transparent on home page before scroll
  const isDark = isHome && !scrolled;

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 60));
  }, [scrollY]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isDark
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border-b border-[oklch(90%_0.02_228)] shadow-[0_1px_12px_oklch(12%_0.07_228/0.06)]"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-16 w-64">
              {/* Colored logo for light bg */}
              <Image
                src="/images/logo-refrinox.png"
                alt="Refrinox"
                fill
                className={cn(
                  "object-contain object-left transition-opacity duration-300",
                  isDark ? "opacity-0" : "opacity-100"
                )}
                priority
              />
              {/* White logo for dark hero bg */}
              <Image
                src="/images/logo-refrinox.png"
                alt="Refrinox"
                fill
                className={cn(
                  "object-contain object-left transition-opacity duration-300",
                  isDark ? "opacity-100" : "opacity-0"
                )}
                style={{ filter: "brightness(0) invert(1)" }}
                priority
              />
            </div>
          </a>

          {/* Links desktop */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200 font-[family-name:var(--font-body)] group/link pb-0.5",
                      isDark
                        ? "text-white/80 hover:text-white"
                        : "text-[oklch(38%_0.05_228)] hover:text-[oklch(41%_0.12_228)]",
                      isActive && !isDark && "text-[oklch(41%_0.12_228)] font-semibold"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-px transition-all duration-300 ease-out",
                        isDark ? "bg-white/70" : "bg-[oklch(41%_0.12_228)]",
                        isActive ? "w-full" : "w-0 group-hover/link:w-full"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Desktop */}
          <a
            href="/contacto"
            className={cn(
              "hidden lg:flex items-center px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 font-[family-name:var(--font-body)]",
              isDark
                ? "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25"
                : "bg-[oklch(41%_0.12_228)] text-white hover:bg-[oklch(50%_0.13_228)] shadow-[0_0_20px_oklch(41%_0.12_228/0.25)]"
            )}
          >
            Solicitar cotización
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden transition-colors",
              isDark ? "text-white" : "text-[oklch(30%_0.05_228)]"
            )}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[oklch(90%_0.02_228)] px-6 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-base font-medium text-[oklch(35%_0.05_228)] hover:text-[oklch(41%_0.12_228)] transition-colors font-[family-name:var(--font-body)]",
                      pathname === link.href && "text-[oklch(41%_0.12_228)] font-semibold"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="block text-center px-5 py-3 rounded-full bg-[oklch(41%_0.12_228)] text-white text-sm font-bold font-[family-name:var(--font-body)]"
                >
                  Solicitar cotización
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </header>
    </>
  );
}
