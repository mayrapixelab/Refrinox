"use client";
/**
 * AnimationObserver — activa clases anim-* en elementos visibles.
 * Fix crítico: re-corre en client navigation (usePathname).
 * Ref: vault/aprendizajes/intersection-observer-cliente-navegacion.md
 */
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function flushVisible() {
  const els = document.querySelectorAll<HTMLElement>(
    "[class*='anim-']:not(.is-inview)"
  );
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-inview");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  els.forEach((el) => observer.observe(el));
}

export function AnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    flushVisible();
    // Fallback para elementos que el browser aún no pintó
    const t = setTimeout(flushVisible, 800);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
