"use client";
import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  /** Intensidad de la aurora: "subtle" para secciones internas, "full" para hero */
  intensity?: "subtle" | "full";
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  intensity = "full",
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-slate-50 transition-colors duration-700",
        "bg-[oklch(12%_0.07_228)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            // Capa de oscuro — patrón de rayas sobre el fondo
            "[--rf-dark:repeating-linear-gradient(100deg,oklch(8%_0.06_228)_0%,oklch(8%_0.06_228)_7%,transparent_10%,transparent_12%,oklch(8%_0.06_228)_16%)]",
            // Capa aurora — azules acerados Refrinox, saturación baja para que se funda
            "[--aurora:repeating-linear-gradient(100deg,oklch(38%_0.10_228)_10%,oklch(45%_0.08_245)_15%,oklch(50%_0.07_215)_20%,oklch(32%_0.08_235)_25%,oklch(40%_0.09_228)_30%)]",
            // Capas: oscuro encima + aurora debajo — sin animación en la capa base
            "[background-image:var(--rf-dark),var(--aurora)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            // Pseudo-elemento ::after anima la misma aurora en tamaño diferente
            // mix-blend-difference crea el efecto de mezcla suave con el fondo
            "after:content-[''] after:absolute after:inset-0",
            "after:[background-image:var(--rf-dark),var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora",
            "after:mix-blend-difference",
            "pointer-events-none",
            "absolute -inset-[10px]",
            // Tenue: opacidad baja + blur para que se pierda en el fondo
            intensity === "full"
              ? "opacity-50 blur-[10px]"
              : "opacity-30 blur-[14px]",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_60%_50%,black_20%,transparent_80%)]"
          )}
        />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
