"use client";
import { useEffect, useRef } from "react";

type GradientStop =
  | "dark"      // sección oscura (Hero, LlaveEnMano)
  | "steel"     // blanco puro
  | "deep"      // azul claro gélido
  | "ice"       // blanco puro ligero
  | "midnight"; // azul pálido muy claro

const STOP_COLORS: Record<GradientStop, string> = {
  dark:     "oklch(7%  0.08 228)",   // solo para secciones oscuras
  steel:    "oklch(99% 0.005 228)",  // blanco
  deep:     "oklch(96% 0.010 228)",  // azul gélido claro
  ice:      "oklch(99% 0.005 228)",  // blanco
  midnight: "oklch(96% 0.010 228)",  // azul claro
};

interface ScrollGradientProps {
  bg: GradientStop;
  invertText?: boolean;
}

export function ScrollGradient({ bg, invertText }: ScrollGradientProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          document.documentElement.style.setProperty(
            "--scroll-bg",
            STOP_COLORS[bg]
          );
          if (invertText !== undefined) {
            document.documentElement.dataset["textMode"] =
              invertText ? "light" : "dark";
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [bg, invertText]);

  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0" />;
}
